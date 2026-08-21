const request = require('supertest');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { app } = require('../src/app');
const prisma = new PrismaClient();

// P0 : flux d'adhésion réel (inscription -> demande -> validation -> compte actif)
// et permissions précises de modération forum.
describe('Flux d\'adhésion et permissions forum (P0)', () => {
  const PASSWORD = 'Test123!';
  let ultraToken, ultra, readerToken, reader;
  let approvedEmail, rejectedEmail, readerTopicId;

  beforeAll(async () => {
    // Les contenus (topics) référencent les utilisateurs : les supprimer d'abord
    await prisma.topic.deleteMany({ where: { title: { contains: '[P0-TEST]' } } });
    await prisma.membershipRequest.deleteMany({
      where: { user: { email: { contains: '@p0.test.com' } } },
    });
    await prisma.userAdminRole.deleteMany({
      where: { user: { email: { contains: '@p0.test.com' } } },
    });
    await prisma.user.deleteMany({ where: { email: { contains: '@p0.test.com' } } });
    await prisma.adminRole.deleteMany({ where: { name: 'WF_FORUM_READER' } });

    const hash = await bcrypt.hash(PASSWORD, 12);
    ultra = await prisma.user.create({ data: { email: 'ultra@p0.test.com', password: hash, firstName: 'Ultra', lastName: 'Admin', role: 'ULTRA_ADMIN', isActive: true, isVerified: true } });
    ultraToken = jwt.sign({ id: ultra.id, email: ultra.email, role: ultra.role }, process.env.JWT_SECRET || 'test-secret', { expiresIn: '7d' });

    // Rôle limité : lecture du forum uniquement (ni moderate ni delete)
    const forumRead = await prisma.permission.findUnique({ where: { code: 'forum.read' } });
    const readerRole = await prisma.adminRole.create({
      data: { name: 'WF_FORUM_READER', description: 'Lecture forum seulement', isSystem: false, requiresApproval: false },
    });
    await prisma.adminRolePermission.create({
      data: { adminRoleId: readerRole.id, permissionId: forumRead.id },
    });

    reader = await prisma.user.create({ data: { email: 'reader@p0.test.com', password: hash, firstName: 'Reader', lastName: 'Only', role: 'MEMBER', isActive: true, isVerified: true } });
    await prisma.userAdminRole.create({
      data: { userId: reader.id, adminRoleId: readerRole.id, status: 'APPROVED', assignedBy: ultra.id, reviewedBy: ultra.id, reviewedAt: new Date() },
    });
    readerToken = jwt.sign({ id: reader.id, email: reader.email, role: reader.role }, process.env.JWT_SECRET || 'test-secret', { expiresIn: '7d' });

    readerTopicId = (await prisma.topic.create({
      data: { title: '[P0-TEST] Sujet de test modération', content: 'Contenu du sujet de test pour la modération', category: 'Test', authorId: ultra.id },
    })).id;
  });

  afterAll(async () => {
    await prisma.topic.deleteMany({ where: { title: { contains: '[P0-TEST]' } } });
    await prisma.membershipRequest.deleteMany({
      where: { user: { email: { contains: '@p0.test.com' } } },
    });
    await prisma.userAdminRole.deleteMany({
      where: { user: { email: { contains: '@p0.test.com' } } },
    });
    await prisma.user.deleteMany({ where: { email: { contains: '@p0.test.com' } } });
    await prisma.adminRole.deleteMany({ where: { name: 'WF_FORUM_READER' } });
    await prisma.$disconnect();
  });

  describe('Flux d\'adhésion', () => {
    it('l\'inscription crée une demande d\'adhésion avec motivation', async () => {
      approvedEmail = 'candidat1@p0.test.com';
      const res = await request(app)
        .post('/api/auth/register')
        .send({
          email: approvedEmail,
          password: PASSWORD,
          firstName: 'Candi',
          lastName: 'Dat',
          motivation: 'Je veux développer mon leadership et échanger avec le club.',
        });

      expect(res.status).toBe(201);

      const user = await prisma.user.findUnique({
        where: { email: approvedEmail },
        include: { memberships: true },
      });
      expect(user.isActive).toBe(false); // compte en attente
      expect(user.memberships).toHaveLength(1);
      expect(user.memberships[0].status).toBe('PENDING');
      expect(user.memberships[0].motivation).toContain('leadership');
    });

    it('la connexion est refusée tant que la demande est en attente', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({ email: approvedEmail, password: PASSWORD });
      expect(res.status).toBe(401);
    });

    it('la demande apparaît dans la liste des adhésions en attente', async () => {
      const res = await request(app)
        .get('/api/admin/memberships/pending')
        .set('Authorization', `Bearer ${ultraToken}`);
      expect(res.status).toBe(200);
      const found = res.body.data.find(m => m.user?.email === approvedEmail);
      expect(found).toBeDefined();
      expect(found.motivation).toContain('leadership');
    });

    it('l\'approbation active le compte : connexion possible', async () => {
      const pending = await request(app)
        .get('/api/admin/memberships/pending')
        .set('Authorization', `Bearer ${ultraToken}`);
      const target = pending.body.data.find(m => m.user?.email === approvedEmail);

      const approve = await request(app)
        .post(`/api/admin/memberships/${target.id}/approve`)
        .set('Authorization', `Bearer ${ultraToken}`);
      expect(approve.status).toBe(200);

      const user = await prisma.user.findUnique({ where: { email: approvedEmail } });
      expect(user.isActive).toBe(true);
      expect(user.isVerified).toBe(true);

      const login = await request(app)
        .post('/api/auth/login')
        .send({ email: approvedEmail, password: PASSWORD });
      expect(login.status).toBe(200);
    });

    it('le refus laisse le compte inactif', async () => {
      rejectedEmail = 'candidat2@p0.test.com';
      await request(app)
        .post('/api/auth/register')
        .send({ email: rejectedEmail, password: PASSWORD, firstName: 'Rej', lastName: 'Ete', motivation: 'Pas convaincant' });

      const pending = await request(app)
        .get('/api/admin/memberships/pending')
        .set('Authorization', `Bearer ${ultraToken}`);
      const target = pending.body.data.find(m => m.user?.email === rejectedEmail);

      const reject = await request(app)
        .post(`/api/admin/memberships/${target.id}/reject`)
        .set('Authorization', `Bearer ${ultraToken}`);
      expect(reject.status).toBe(200);

      const login = await request(app)
        .post('/api/auth/login')
        .send({ email: rejectedEmail, password: PASSWORD });
      expect(login.status).toBe(401);
    });
  });

  describe('Permissions de modération forum', () => {
    it('refuse l\'épinglage à un rôle avec seulement forum.read', async () => {
      const res = await request(app)
        .put(`/api/forum/${readerTopicId}/pin`)
        .set('Authorization', `Bearer ${readerToken}`);
      expect(res.status).toBe(403);
    });

    it('refuse le verrouillage et la suppression à ce même rôle', async () => {
      const lock = await request(app)
        .put(`/api/forum/${readerTopicId}/lock`)
        .set('Authorization', `Bearer ${readerToken}`);
      expect(lock.status).toBe(403);

      const del = await request(app)
        .delete(`/api/forum/${readerTopicId}`)
        .set('Authorization', `Bearer ${readerToken}`);
      expect(del.status).toBe(403);
    });

    it('l\'ULTRA_ADMIN (bypass) peut épingler', async () => {
      const res = await request(app)
        .put(`/api/forum/${readerTopicId}/pin`)
        .set('Authorization', `Bearer ${ultraToken}`);
      expect(res.status).toBe(200);
      expect(res.body.data.isPinned).toBe(true);
    });
  });
});
