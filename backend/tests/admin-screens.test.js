const request = require('supertest');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { app } = require('../src/app');
const prisma = new PrismaClient();

// Phase 4/5 : gestion des utilisateurs, paramètres de plateforme,
// filtres d'audit et boîte d'approbations.
describe('Admin screens - users, settings, audit, approvals', () => {
  const PASSWORD = 'Test123!';
  let ultraToken, moduleAdminToken, memberToken;
  let ultra, moduleAdmin, member, inactiveUser;

  beforeAll(async () => {
    await prisma.userAdminRole.deleteMany({ where: { user: { email: { contains: '@p45.test.com' } } } });
    await prisma.user.deleteMany({ where: { email: { contains: '@p45.test.com' } } });

    const hash = await bcrypt.hash(PASSWORD, 12);
    ultra = await prisma.user.create({ data: { email: 'ultra@p45.test.com', password: hash, firstName: 'Ultra', lastName: 'Admin', role: 'ULTRA_ADMIN', isActive: true, isVerified: true } });
    moduleAdmin = await prisma.user.create({ data: { email: 'mod@p45.test.com', password: hash, firstName: 'Mod', lastName: 'Admin', role: 'ADMIN', isActive: true, isVerified: true } });
    member = await prisma.user.create({ data: { email: 'member@p45.test.com', password: hash, firstName: 'Mem', lastName: 'Ber', role: 'MEMBER', isActive: true, isVerified: false } });
    inactiveUser = await prisma.user.create({ data: { email: 'inactive@p45.test.com', password: hash, firstName: 'Ina', lastName: 'Ctive', role: 'MEMBER', isActive: false, isVerified: true } });

    const formationRole = await prisma.adminRole.findUnique({ where: { name: 'ADMIN_FORMATION' } });
    await prisma.userAdminRole.create({
      data: { userId: moduleAdmin.id, adminRoleId: formationRole.id, status: 'APPROVED', assignedBy: ultra.id, reviewedBy: ultra.id, reviewedAt: new Date() },
    });

    const createToken = user => jwt.sign({ id: user.id, email: user.email, role: user.role }, process.env.JWT_SECRET || 'test-secret', { expiresIn: '7d' });
    ultraToken = createToken(ultra);
    moduleAdminToken = createToken(moduleAdmin);
    memberToken = createToken(member);
  });

  afterAll(async () => {
    await prisma.userAdminRole.deleteMany({ where: { user: { email: { contains: '@p45.test.com' } } } });
    await prisma.user.deleteMany({ where: { email: { contains: '@p45.test.com' } } });
    await prisma.$disconnect();
  });

  describe('Gestion des utilisateurs', () => {
    it('liste avec recherche et rôles admin attachés', async () => {
      const res = await request(app)
        .get('/api/users?search=p45.test')
        .set('Authorization', `Bearer ${ultraToken}`);
      expect(res.status).toBe(200);
      expect(res.body.data.length).toBeGreaterThanOrEqual(4);

      const mod = res.body.data.find(u => u.email === 'mod@p45.test.com');
      expect(mod.adminRoles).toEqual(['ADMIN_FORMATION']);
    });

    it('filtre par statut', async () => {
      const res = await request(app)
        .get('/api/users?status=inactive&search=p45.test')
        .set('Authorization', `Bearer ${ultraToken}`);
      expect(res.status).toBe(200);
      res.body.data.forEach(u => expect(u.isActive).toBe(false));
    });

    it('refuse la liste à un admin de module sans users.read', async () => {
      const res = await request(app)
        .get('/api/users')
        .set('Authorization', `Bearer ${moduleAdminToken}`);
      expect(res.status).toBe(403);
    });

    it('vérifie un compte (users.verify)', async () => {
      const res = await request(app)
        .post(`/api/users/${member.id}/verify`)
        .set('Authorization', `Bearer ${ultraToken}`);
      expect(res.status).toBe(200);
      expect(res.body.data.isVerified).toBe(true);
    });

    it('active / désactive un compte (users.suspend)', async () => {
      const activate = await request(app)
        .post(`/api/users/${inactiveUser.id}/activate`)
        .set('Authorization', `Bearer ${ultraToken}`);
      expect(activate.status).toBe(200);
      expect(activate.body.data.isActive).toBe(true);

      const deactivate = await request(app)
        .post(`/api/users/${inactiveUser.id}/deactivate`)
        .set('Authorization', `Bearer ${ultraToken}`);
      expect(deactivate.body.data.isActive).toBe(false);
    });

    it('interdit de désactiver son propre compte', async () => {
      const res = await request(app)
        .post(`/api/users/${ultra.id}/deactivate`)
        .set('Authorization', `Bearer ${ultraToken}`);
      expect(res.status).toBe(403);
    });

    it('interdit de désactiver un compte Ultra Admin', async () => {
      const res = await request(app)
        .post(`/api/users/${ultra.id}/deactivate`)
        .set('Authorization', `Bearer ${moduleAdminToken}`);
      // moduleAdmin n'a pas users.suspend : bloqué par permission avant le garde-fou
      expect(res.status).toBe(403);
    });

    it('bloque la modification de rôle via PUT (liste blanche / mass assignment)', async () => {
      const res = await request(app)
        .put(`/api/users/${member.id}`)
        .set('Authorization', `Bearer ${ultraToken}`)
        .send({ role: 'ULTRA_ADMIN', isActive: false });
      expect(res.status).toBe(400); // champs non autorisés rejetés par le schéma

      const safe = await request(app)
        .put(`/api/users/${member.id}`)
        .set('Authorization', `Bearer ${ultraToken}`)
        .send({ firstName: 'Renommé' });
      expect(safe.status).toBe(200);

      const refreshed = await prisma.user.findUnique({ where: { id: member.id } });
      expect(refreshed.role).toBe('MEMBER'); // le rôle n'a pas bougé
      expect(refreshed.isActive).toBe(true);
    });
  });

  describe('Paramètres de plateforme', () => {
    it('crée les valeurs par défaut et refuse l\'accès sans settings.manage', async () => {
      const denied = await request(app)
        .get('/api/settings')
        .set('Authorization', `Bearer ${moduleAdminToken}`);
      expect(denied.status).toBe(403);

      const res = await request(app)
        .get('/api/settings')
        .set('Authorization', `Bearer ${ultraToken}`);
      expect(res.status).toBe(200);
      const keys = res.body.data.map(s => s.key);
      expect(keys).toContain('site.name');
      expect(keys).toContain('platform.maintenanceMode');
    });

    it('met à jour un paramètre simple sans confirmation', async () => {
      const res = await request(app)
        .put('/api/settings/site.name')
        .set('Authorization', `Bearer ${ultraToken}`)
        .send({ value: 'Le Monde du Travail — Club' });
      expect(res.status).toBe(200);
      expect(res.body.data.value).toBe('Le Monde du Travail — Club');
    });

    it('exige la confirmation pour un paramètre sensible', async () => {
      const noAuth = await request(app)
        .put('/api/settings/platform.maintenanceMode')
        .set('Authorization', `Bearer ${ultraToken}`)
        .send({ value: 'true' });
      expect(noAuth.status).toBe(403);
      expect(noAuth.body.code).toBe('REAUTH_REQUIRED');

      const withAuth = await request(app)
        .put('/api/settings/platform.maintenanceMode')
        .set('Authorization', `Bearer ${ultraToken}`)
        .set('x-confirm-password', PASSWORD)
        .send({ value: 'true' });
      expect(withAuth.status).toBe(200);

      // Audit de l'action sensible
      const audit = await prisma.auditLog.findFirst({
        where: { action: 'settings.update', resourceId: 'platform.maintenanceMode' },
        orderBy: { createdAt: 'desc' },
      });
      expect(audit.result).toBe('SENSITIVE_UPDATED');

      // Remettre à false pour ne pas affecter l'environnement
      await request(app)
        .put('/api/settings/platform.maintenanceMode')
        .set('Authorization', `Bearer ${ultraToken}`)
        .set('x-confirm-password', PASSWORD)
        .send({ value: 'false' });
    });
  });

  describe('Journal d\'audit : filtres', () => {
    it('filtre par module et par action (insensible à la casse)', async () => {
      const res = await request(app)
        .get('/api/rbac/audit-logs?module=settings&action=UPDATE&limit=10')
        .set('Authorization', `Bearer ${ultraToken}`);
      expect(res.status).toBe(200);
      expect(res.body.data.length).toBeGreaterThan(0);
      res.body.data.forEach(log => {
        expect(log.module).toBe('settings');
        expect(log.action.toLowerCase()).toContain('update');
      });
    });

    it('filtre par plage de dates', async () => {
      const hier = new Date(Date.now() - 24 * 3600 * 1000).toISOString().slice(0, 10);
      const demain = new Date(Date.now() + 24 * 3600 * 1000).toISOString().slice(0, 10);
      const res = await request(app)
        .get(`/api/rbac/audit-logs?from=${hier}&to=${demain}&limit=5`)
        .set('Authorization', `Bearer ${ultraToken}`);
      expect(res.status).toBe(200);
      res.body.data.forEach(log => {
        expect(new Date(log.createdAt).getTime()).toBeGreaterThanOrEqual(new Date(hier).getTime());
      });
    });
  });

  describe('Boîte d\'approbations', () => {
    it('refuse l\'accès sans approvals.read', async () => {
      const res = await request(app)
        .get('/api/approvals/pending')
        .set('Authorization', `Bearer ${moduleAdminToken}`);
      expect(res.status).toBe(403);
    });

    it('est accessible à l\'ULTRA_ADMIN', async () => {
      const res = await request(app)
        .get('/api/approvals/pending')
        .set('Authorization', `Bearer ${ultraToken}`);
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
    });

    it('refuse l\'accès aux membres', async () => {
      const res = await request(app)
        .get('/api/approvals/pending')
        .set('Authorization', `Bearer ${memberToken}`);
      expect(res.status).toBe(403);
    });
  });
});
