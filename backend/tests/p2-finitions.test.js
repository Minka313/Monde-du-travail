const request = require('supertest');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { app } = require('../src/app');
const prisma = new PrismaClient();
const { resetMaintenanceCache } = require('../src/middleware/maintenance');

// P2 : archive blog, suppression massive, filtre acteur de l'audit,
// et mode maintenance réellement actif.
describe('P2 — finitions administration', () => {
  const PASSWORD = 'Test123!';
  let ultraToken, formationAdminToken, ultra, formationAdmin;
  let bulkIds = [];

  beforeAll(async () => {
    // Les contenus référencent leurs auteurs : les supprimer d'abord
    await prisma.post.deleteMany({ where: { title: { contains: '[P2-TEST]' } } });
    await prisma.formation.deleteMany({ where: { title: { contains: '[P2-TEST]' } } });
    await prisma.userAdminRole.deleteMany({
      where: { user: { email: { contains: '@p2.test.com' } } },
    });
    await prisma.user.deleteMany({ where: { email: { contains: '@p2.test.com' } } });

    const hash = await bcrypt.hash(PASSWORD, 12);
    ultra = await prisma.user.create({ data: { email: 'ultra@p2.test.com', password: hash, firstName: 'Ultra', lastName: 'Admin', role: 'ULTRA_ADMIN', isActive: true, isVerified: true } });
    formationAdmin = await prisma.user.create({ data: { email: 'formation@p2.test.com', password: hash, firstName: 'Forma', lastName: 'Tion', role: 'ADMIN', isActive: true, isVerified: true } });

    const formationRole = await prisma.adminRole.findUnique({ where: { name: 'ADMIN_FORMATION' } });
    await prisma.userAdminRole.create({
      data: { userId: formationAdmin.id, adminRoleId: formationRole.id, status: 'APPROVED', assignedBy: ultra.id, reviewedBy: ultra.id, reviewedAt: new Date() },
    });

    const createToken = user => jwt.sign({ id: user.id, email: user.email, role: user.role }, process.env.JWT_SECRET || 'test-secret', { expiresIn: '7d' });
    ultraToken = createToken(ultra);
    formationAdminToken = createToken(formationAdmin);
  });

  afterAll(async () => {
    // Sécurité : s'assurer que le mode maintenance est bien éteint
    await prisma.setting.upsert({
      where: { key: 'platform.maintenanceMode' },
      update: { value: 'false' },
      create: { key: 'platform.maintenanceMode', value: 'false', isSensitive: true },
    });
    resetMaintenanceCache();

    // Contenus d'abord, utilisateurs ensuite (contraintes de clés étrangères)
    await prisma.post.deleteMany({ where: { title: { contains: '[P2-TEST]' } } });
    await prisma.formation.deleteMany({ where: { title: { contains: '[P2-TEST]' } } });
    await prisma.userAdminRole.deleteMany({
      where: { user: { email: { contains: '@p2.test.com' } } },
    });
    await prisma.user.deleteMany({ where: { email: { contains: '@p2.test.com' } } });
    await prisma.$disconnect();
  });

  describe('Archive du blog', () => {
    it('archive un article (ULTRA) et journalise l\'action', async () => {
      const post = await prisma.post.create({
        data: { title: '[P2-TEST] Article à archiver', slug: `p2-test-${Date.now()}`, content: 'Contenu de test pour l\'archivage', category: 'CLUB', status: 'PUBLISHED', authorId: ultra.id },
      });

      const res = await request(app)
        .post(`/api/blog/${post.id}/archive`)
        .set('Authorization', `Bearer ${ultraToken}`);
      expect(res.status).toBe(200);
      expect(res.body.data.status).toBe('ARCHIVED');

      const audit = await prisma.auditLog.findFirst({
        where: { action: 'blog.archive', resourceId: post.id },
      });
      expect(audit).not.toBeNull();
    });

    it('refuse l\'archivage à un admin formation (cloisonnement)', async () => {
      const post = await prisma.post.create({
        data: { title: '[P2-TEST] Article interdit', slug: `p2-test-2-${Date.now()}`, content: 'Contenu de test cloisonnement', category: 'CLUB', status: 'PUBLISHED', authorId: ultra.id },
      });

      const res = await request(app)
        .post(`/api/blog/${post.id}/archive`)
        .set('Authorization', `Bearer ${formationAdminToken}`);
      expect(res.status).toBe(403);
    });
  });

  describe('Suppression massive', () => {
    it('prépare 3 formations de test', async () => {
      for (let i = 1; i <= 3; i++) {
        const f = await prisma.formation.create({
          data: { title: `[P2-TEST] Formation ${i}`, description: 'Description test suppression massive', status: 'DRAFT', createdById: ultra.id },
        });
        bulkIds.push(f.id);
      }
      expect(bulkIds).toHaveLength(3);
    });

    it('exige la confirmation par mot de passe', async () => {
      const res = await request(app)
        .post('/api/formations/bulk-delete')
        .set('Authorization', `Bearer ${ultraToken}`)
        .send({ ids: bulkIds });
      expect(res.status).toBe(403);
      expect(res.body.code).toBe('REAUTH_REQUIRED');
    });

    it('refuse à un admin sans permission formation.delete sur métiers', async () => {
      const res = await request(app)
        .post('/api/jobs/bulk-delete')
        .set('Authorization', `Bearer ${formationAdminToken}`)
        .set('x-confirm-password', PASSWORD)
        .send({ ids: ['inexistant'] });
      expect(res.status).toBe(403);
    });

    it('supprime le lot avec le mot de passe et journalise', async () => {
      const res = await request(app)
        .post('/api/formations/bulk-delete')
        .set('Authorization', `Bearer ${ultraToken}`)
        .set('x-confirm-password', PASSWORD)
        .send({ ids: bulkIds });
      expect(res.status).toBe(200);
      expect(res.body.data.deleted).toBe(3);

      const remaining = await prisma.formation.count({ where: { id: { in: bulkIds } } });
      expect(remaining).toBe(0);

      const audit = await prisma.auditLog.findFirst({
        where: { action: 'formation.bulkDelete' },
        orderBy: { createdAt: 'desc' },
      });
      expect(audit).not.toBeNull();
      expect(audit.metadata.count).toBe(3);
    });
  });

  describe('Filtre par acteur dans l\'audit', () => {
    it('remonte uniquement les actions de l\'email donné', async () => {
      const res = await request(app)
        .get('/api/rbac/audit-logs?email=ultra@p2.test.com&limit=20')
        .set('Authorization', `Bearer ${ultraToken}`);
      expect(res.status).toBe(200);
      expect(res.body.data.length).toBeGreaterThan(0);
      res.body.data.forEach(log => {
        expect(log.user.email).toBe('ultra@p2.test.com');
      });
    });

    it('retourne une liste vide pour un email inconnu', async () => {
      const res = await request(app)
        .get('/api/rbac/audit-logs?email=personne@nulle.part')
        .set('Authorization', `Bearer ${ultraToken}`);
      expect(res.status).toBe(200);
      expect(res.body.data).toEqual([]);
    });
  });

  describe('Mode maintenance', () => {
    it('bloque le public mais laisse passer connexion et admins', async () => {
      // Activation directe en base + invalidation du cache
      await prisma.setting.upsert({
        where: { key: 'platform.maintenanceMode' },
        update: { value: 'true' },
        create: { key: 'platform.maintenanceMode', value: 'true', isSensitive: true },
      });
      resetMaintenanceCache();

      try {
        // Public : bloqué
        const publicList = await request(app).get('/api/formations');
        expect(publicList.status).toBe(503);
        expect(publicList.body.code).toBe('MAINTENANCE');

        // Connexion : toujours possible
        const login = await request(app)
          .post('/api/auth/login')
          .send({ email: 'ultra@p2.test.com', password: PASSWORD });
        expect(login.status).toBe(200);

        // Admin : passe pour intervenir
        const adminList = await request(app)
          .get('/api/formations')
          .set('Authorization', `Bearer ${ultraToken}`);
        expect(adminList.status).toBe(200);

        // Paramètres : accessibles pour couper le mode
        const settings = await request(app)
          .get('/api/settings')
          .set('Authorization', `Bearer ${ultraToken}`);
        expect(settings.status).toBe(200);

        // Un admin de module (sans settings.manage) : bloqué
        const moduleAdmin = await request(app)
          .get('/api/formations')
          .set('Authorization', `Bearer ${formationAdminToken}`);
        expect(moduleAdmin.status).toBe(503);
      } finally {
        // Désactivation garantie
        await prisma.setting.update({
          where: { key: 'platform.maintenanceMode' },
          data: { value: 'false' },
        });
        resetMaintenanceCache();
      }

      // Vérifie le retour à la normale
      const after = await request(app).get('/api/formations');
      expect(after.status).toBe(200);
    });
  });
});
