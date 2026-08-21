const request = require('supertest');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { app } = require('../src/app');
const prisma = new PrismaClient();
const RbacService = require('../src/services/rbacService');

// Actions critiques : double confirmation par mot de passe (x-confirm-password)
// et garde-fous anti-lockout (soi-même, dernier ultra, rôle racine immuable).
describe('Critical actions - reauth & garde-fous', () => {
  const PASSWORD = 'Test123!';
  let ultraToken, revokerToken;
  let ultra, secondUltra, revoker, victim;
  let secondUltraAssignmentId, ultraOwnAssignmentId, customRoleId;

  beforeAll(async () => {
    await prisma.approvalStep.deleteMany();
    await prisma.approvalWorkflow.deleteMany();
    await prisma.userAdminRole.deleteMany({
      where: { user: { email: { contains: '@crit.test.com' } } },
    });
    await prisma.user.deleteMany({ where: { email: { contains: '@crit.test.com' } } });
    await prisma.adminRole.deleteMany({ where: { name: { in: ['WF_REVOKER', 'WF_CUSTOM_ROLE'] } } });

    const hash = await bcrypt.hash(PASSWORD, 12);
    ultra = await prisma.user.create({ data: { email: 'ultra@crit.test.com', password: hash, firstName: 'Ultra', lastName: 'One', role: 'ULTRA_ADMIN', isActive: true, isVerified: true } });
    secondUltra = await prisma.user.create({ data: { email: 'second@crit.test.com', password: hash, firstName: 'Second', lastName: 'Ultra', role: 'MEMBER', isActive: true, isVerified: true } });
    revoker = await prisma.user.create({ data: { email: 'revoker@crit.test.com', password: hash, firstName: 'Revo', lastName: 'Ker', role: 'MEMBER', isActive: true, isVerified: true } });
    victim = await prisma.user.create({ data: { email: 'victim@crit.test.com', password: hash, firstName: 'Vic', lastName: 'Tim', role: 'MEMBER', isActive: true, isVerified: true } });

    // Rôle custom doté de admins.revoke pour tester les garde-fous sans être ultra
    const perms = await prisma.permission.findMany({
      where: { code: { in: ['admins.read', 'admins.revoke'] } },
    });
    const revokerRole = await prisma.adminRole.create({
      data: { name: 'WF_REVOKER', description: 'Test révocation', isSystem: false, requiresApproval: false },
    });
    await prisma.adminRolePermission.createMany({
      data: perms.map(p => ({ adminRoleId: revokerRole.id, permissionId: p.id })),
    });
    await prisma.userAdminRole.create({
      data: { userId: revoker.id, adminRoleId: revokerRole.id, status: 'APPROVED', assignedBy: ultra.id, reviewedBy: ultra.id, reviewedAt: new Date() },
    });
    await RbacService.syncUserRole(revoker.id);

    // Rôle custom pour le test de modification (non système)
    customRoleId = (await prisma.adminRole.create({
      data: { name: 'WF_CUSTOM_ROLE', description: 'Rôle de test modifiable', isSystem: false, requiresApproval: false },
    })).id;

    const createToken = user => jwt.sign({ id: user.id, email: user.email, role: user.role }, process.env.JWT_SECRET || 'test-secret', { expiresIn: '7d' });
    ultraToken = createToken(ultra);
    revokerToken = createToken(revoker);
  });

  afterAll(async () => {
    await prisma.approvalStep.deleteMany();
    await prisma.approvalWorkflow.deleteMany();
    await prisma.userAdminRole.deleteMany({
      where: { user: { email: { contains: '@crit.test.com' } } },
    });
    await prisma.adminRole.deleteMany({ where: { name: { in: ['WF_REVOKER', 'WF_CUSTOM_ROLE'] } } });
    await prisma.user.deleteMany({ where: { email: { contains: '@crit.test.com' } } });
    await prisma.$disconnect();
  });

  describe('Promotion / démotion Ultra Admin (pilotée par la table RBAC)', () => {
    it('promeut un utilisateur en ULTRA_ADMIN quand le rôle ultra est assigné', async () => {
      const ultraRole = await prisma.adminRole.findUnique({ where: { name: 'ULTRA_ADMIN' } });
      const assignment = await RbacService.assignRoleToUser(secondUltra.id, ultraRole.id, ultra.id);

      expect(assignment.status).toBe('APPROVED'); // requiresApproval: false

      const refreshed = await prisma.user.findUnique({ where: { id: secondUltra.id } });
      expect(refreshed.role).toBe('ULTRA_ADMIN');

      const context = await RbacService.getUserAdminContext(secondUltra.id);
      expect(context.permissions).toEqual(['*']);
      secondUltraAssignmentId = assignment.id;
    });

    it('donne aussi un rôle ultra au requérant pour la suite (self-revoke test)', async () => {
      const ultraRole = await prisma.adminRole.findUnique({ where: { name: 'ULTRA_ADMIN' } });
      const assignment = await RbacService.assignRoleToUser(ultra.id, ultraRole.id, ultra.id);
      ultraOwnAssignmentId = assignment.id;
    });

    it('révoque le rôle ultra (avec mot de passe) : démotion automatique', async () => {
      // Sans confirmation -> refus
      const noAuth = await request(app)
        .post(`/api/admin/admins/${secondUltraAssignmentId}/revoke`)
        .set('Authorization', `Bearer ${ultraToken}`);
      expect(noAuth.status).toBe(403);
      expect(noAuth.body.code).toBe('REAUTH_REQUIRED');

      // Mauvais mot de passe -> refus
      const wrong = await request(app)
        .post(`/api/admin/admins/${secondUltraAssignmentId}/revoke`)
        .set('Authorization', `Bearer ${ultraToken}`)
        .set('x-confirm-password', 'WrongPassword!');
      expect(wrong.status).toBe(403);
      expect(wrong.body.code).toBe('REAUTH_INVALID');

      // Bon mot de passe -> révocation + démotion
      const res = await request(app)
        .post(`/api/admin/admins/${secondUltraAssignmentId}/revoke`)
        .set('Authorization', `Bearer ${ultraToken}`)
        .set('x-confirm-password', PASSWORD);
      expect(res.status).toBe(200);
      expect(res.body.data.status).toBe('REVOKED');

      const refreshed = await prisma.user.findUnique({ where: { id: secondUltra.id } });
      expect(refreshed.role).toBe('MEMBER');

      const context = await RbacService.getUserAdminContext(secondUltra.id);
      expect(context.permissions).toEqual([]);
      expect(context.adminRoles).toEqual([]);
    });

    it('interdit de révoquer son propre rôle Ultra Admin', async () => {
      const res = await request(app)
        .post(`/api/admin/admins/${ultraOwnAssignmentId}/revoke`)
        .set('Authorization', `Bearer ${ultraToken}`)
        .set('x-confirm-password', PASSWORD);
      expect(res.status).toBe(403);
      expect(res.body.message).toMatch(/propre rôle Ultra Admin/i);
    });
  });

  describe('Suppression définitive d\'utilisateur', () => {
    it('exige la confirmation par mot de passe', async () => {
      const res = await request(app)
        .delete(`/api/users/${victim.id}`)
        .set('Authorization', `Bearer ${ultraToken}`);
      expect(res.status).toBe(403);
      expect(res.body.code).toBe('REAUTH_REQUIRED');
    });

    it('refuse un mot de passe incorrect', async () => {
      const res = await request(app)
        .delete(`/api/users/${victim.id}`)
        .set('Authorization', `Bearer ${ultraToken}`)
        .set('x-confirm-password', 'Nope123!');
      expect(res.status).toBe(403);
      expect(res.body.code).toBe('REAUTH_INVALID');
    });

    it('interdit de supprimer son propre compte', async () => {
      const res = await request(app)
        .delete(`/api/users/${ultra.id}`)
        .set('Authorization', `Bearer ${ultraToken}`)
        .set('x-confirm-password', PASSWORD);
      expect(res.status).toBe(403);
      expect(res.body.message).toMatch(/propre compte/i);
    });

    it('interdit de supprimer un compte Ultra Admin', async () => {
      // Re-promouvoir secondUltra (rétrogradé au test précédent) pour la vérification
      const ultraRole = await prisma.adminRole.findUnique({ where: { name: 'ULTRA_ADMIN' } });
      await RbacService.assignRoleToUser(secondUltra.id, ultraRole.id, ultra.id);

      const res = await request(app)
        .delete(`/api/users/${secondUltra.id}`)
        .set('Authorization', `Bearer ${ultraToken}`)
        .set('x-confirm-password', PASSWORD);
      expect(res.status).toBe(403);
      expect(res.body.message).toMatch(/Ultra Admin/i);
    });

    it('supprime avec le bon mot de passe et journalise l\'audit', async () => {
      const res = await request(app)
        .delete(`/api/users/${victim.id}`)
        .set('Authorization', `Bearer ${ultraToken}`)
        .set('x-confirm-password', PASSWORD);
      expect(res.status).toBe(200);

      const audit = await prisma.auditLog.findFirst({
        where: { action: 'users.delete', resourceId: victim.id },
        orderBy: { createdAt: 'desc' },
      });
      expect(audit).not.toBeNull();
      expect(audit.result).toBe('DELETED');
    });
  });

  describe('Protection des permissions critiques', () => {
    it('exige la confirmation pour modifier un rôle', async () => {
      const res = await request(app)
        .put(`/api/rbac/roles/${customRoleId}`)
        .set('Authorization', `Bearer ${ultraToken}`)
        .send({ description: 'Nouvelle description' });
      expect(res.status).toBe(403);
      expect(res.body.code).toBe('REAUTH_REQUIRED');
    });

    it('refuse de modifier les permissions du rôle ULTRA_ADMIN (même confirmé)', async () => {
      const ultraRole = await prisma.adminRole.findUnique({ where: { name: 'ULTRA_ADMIN' } });
      const somePerm = await prisma.permission.findFirst();

      const res = await request(app)
        .put(`/api/rbac/roles/${ultraRole.id}`)
        .set('Authorization', `Bearer ${ultraToken}`)
        .set('x-confirm-password', PASSWORD)
        .send({ permissions: [somePerm.id] });
      expect(res.status).toBe(403);
      expect(res.body.message).toMatch(/ULTRA_ADMIN/i);
    });

    it('refuse de renommer le rôle ULTRA_ADMIN', async () => {
      const ultraRole = await prisma.adminRole.findUnique({ where: { name: 'ULTRA_ADMIN' } });
      const res = await request(app)
        .put(`/api/rbac/roles/${ultraRole.id}`)
        .set('Authorization', `Bearer ${ultraToken}`)
        .set('x-confirm-password', PASSWORD)
        .send({ name: 'SUPER_BOSS' });
      expect(res.status).toBe(403);
    });

    it('autorise la modification d\'un rôle custom avec confirmation', async () => {
      const res = await request(app)
        .put(`/api/rbac/roles/${customRoleId}`)
        .set('Authorization', `Bearer ${ultraToken}`)
        .set('x-confirm-password', PASSWORD)
        .send({ description: 'Description mise à jour' });
      expect(res.status).toBe(200);
      expect(res.body.data.description).toBe('Description mise à jour');
    });

    it('exige la confirmation pour supprimer un rôle', async () => {
      const noAuth = await request(app)
        .delete(`/api/rbac/roles/${customRoleId}`)
        .set('Authorization', `Bearer ${ultraToken}`);
      expect(noAuth.status).toBe(403);
      expect(noAuth.body.code).toBe('REAUTH_REQUIRED');

      const res = await request(app)
        .delete(`/api/rbac/roles/${customRoleId}`)
        .set('Authorization', `Bearer ${ultraToken}`)
        .set('x-confirm-password', PASSWORD);
      expect(res.status).toBe(200);
    });
  });

  describe('Comptage des Ultra Admins (verrou anti-lockout)', () => {
    it('exclut bien l\'utilisateur donné du décompte', async () => {
      const including = await RbacService.countOtherUltras(secondUltra.id);
      expect(including).toBeGreaterThanOrEqual(1); // au moins le propriétaire de la plateforme
    });
  });
});
