const request = require('supertest');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { app } = require('../src/app');
const prisma = new PrismaClient();

describe('Hierarchical Admin Architecture - Scenarios A-H', () => {
  let ultraAdminToken, blogAdminToken, formationAdminToken, memberToken, pendingAdminToken, suspendedAdminToken;
  let ultraAdmin, blogAdmin, formationAdmin, member, pendingAdmin, suspendedAdmin;

  beforeAll(async () => {
    // Nettoyage et création des utilisateurs de test
    await prisma.approvalStep.deleteMany();
    await prisma.approvalWorkflow.deleteMany();
    await prisma.userAdminRole.deleteMany({
      where: {
        user: {
          email: { in: ['ultra@test.com', 'blog@test.com', 'formation@test.com', 'member@test.com', 'pending@test.com', 'suspended@test.com'] },
        },
      },
    });
    await prisma.user.deleteMany({
      where: { email: { in: ['ultra@test.com', 'blog@test.com', 'formation@test.com', 'member@test.com', 'pending@test.com', 'suspended@test.com'] } }
    });

    const hash = await bcrypt.hash('Test123!', 12);

    // ULTRA_ADMIN : bypass racine via le rôle de base
    ultraAdmin = await prisma.user.create({ data: { email: 'ultra@test.com', password: hash, firstName: 'Ultra', lastName: 'Admin', role: 'ULTRA_ADMIN', isActive: true, isVerified: true } });
    // Admins spécialisés : rôle de base ADMIN + attribution approuvée dans la table RBAC
    blogAdmin = await prisma.user.create({ data: { email: 'blog@test.com', password: hash, firstName: 'Blog', lastName: 'Admin', role: 'ADMIN', isActive: true, isVerified: true } });
    formationAdmin = await prisma.user.create({ data: { email: 'formation@test.com', password: hash, firstName: 'Formation', lastName: 'Admin', role: 'ADMIN', isActive: true, isVerified: true } });
    member = await prisma.user.create({ data: { email: 'member@test.com', password: hash, firstName: 'Member', lastName: 'User', role: 'MEMBER', isActive: true, isVerified: true } });
    // Attribution en attente ou suspendue : aucun accès effectif (rôle de base MEMBER)
    pendingAdmin = await prisma.user.create({ data: { email: 'pending@test.com', password: hash, firstName: 'Pending', lastName: 'Admin', role: 'MEMBER', isActive: true, isVerified: true } });
    suspendedAdmin = await prisma.user.create({ data: { email: 'suspended@test.com', password: hash, firstName: 'Suspended', lastName: 'Admin', role: 'MEMBER', isActive: true, isVerified: true } });

    const blogRole = await prisma.adminRole.findUnique({ where: { name: 'ADMIN_BLOG' } });
    const formationRole = await prisma.adminRole.findUnique({ where: { name: 'ADMIN_FORMATION' } });
    const forumRole = await prisma.adminRole.findUnique({ where: { name: 'ADMIN_FORUM' } });

    await prisma.userAdminRole.create({ data: { userId: blogAdmin.id, adminRoleId: blogRole.id, status: 'APPROVED', assignedBy: ultraAdmin.id, reviewedBy: ultraAdmin.id, reviewedAt: new Date() } });
    await prisma.userAdminRole.create({ data: { userId: formationAdmin.id, adminRoleId: formationRole.id, status: 'APPROVED', assignedBy: ultraAdmin.id, reviewedBy: ultraAdmin.id, reviewedAt: new Date() } });
    await prisma.userAdminRole.create({ data: { userId: pendingAdmin.id, adminRoleId: blogRole.id, status: 'PENDING', assignedBy: ultraAdmin.id } });
    await prisma.userAdminRole.create({ data: { userId: suspendedAdmin.id, adminRoleId: forumRole.id, status: 'SUSPENDED', reviewedBy: ultraAdmin.id, reviewedAt: new Date() } });

    const createToken = (user) => jwt.sign({ id: user.id, email: user.email, role: user.role }, process.env.JWT_SECRET || 'test-secret', { expiresIn: '7d' });

    ultraAdminToken = createToken(ultraAdmin);
    blogAdminToken = createToken(blogAdmin);
    formationAdminToken = createToken(formationAdmin);
    memberToken = createToken(member);
    pendingAdminToken = createToken(pendingAdmin);
    suspendedAdminToken = createToken(suspendedAdmin);
  });

  afterAll(async () => {
    await prisma.approvalStep.deleteMany();
    await prisma.approvalWorkflow.deleteMany();
    await prisma.userAdminRole.deleteMany({
      where: {
        user: {
          email: { in: ['ultra@test.com', 'blog@test.com', 'formation@test.com', 'member@test.com', 'pending@test.com', 'suspended@test.com'] },
        },
      },
    });
    await prisma.user.deleteMany({
      where: { email: { in: ['ultra@test.com', 'blog@test.com', 'formation@test.com', 'member@test.com', 'pending@test.com', 'suspended@test.com'] } }
    });
    await prisma.$disconnect();
  });

  // ===== SCENARIO A: UTILISATEUR NON CONNECTE =====
  describe('A. Utilisateur non connecté', () => {
    it('devrait refuser /admin', async () => {
      const res = await request(app).get('/api/admin/stats');
      expect(res.status).toBe(401);
    });

    it('devrait refuser /admin/blog', async () => {
      const res = await request(app).get('/api/admin/blog/posts');
      expect(res.status).toBe(401);
    });

    it('devrait refuser /api/admin/*', async () => {
      const res = await request(app).get('/api/admin/admins');
      expect(res.status).toBe(401);
    });
  });

  // ===== SCENARIO B: BLOG_ADMIN =====
  describe('B. Blog Admin', () => {
    it('devrait autoriser API blog', async () => {
      const res = await request(app).get('/api/admin/blog/posts').set('Authorization', `Bearer ${blogAdminToken}`);
      expect(res.status).toBe(200);
    });

    it('devrait refuser super-dashboard', async () => {
      const res = await request(app).get('/api/super-dashboard/stats').set('Authorization', `Bearer ${blogAdminToken}`);
      expect(res.status).toBe(403);
    });
  });

  // ===== SCENARIO C: FORMATION_ADMIN =====
  describe('C. Formation Admin', () => {
    it('devrait autoriser formations', async () => {
      const res = await request(app).get('/api/formations').set('Authorization', `Bearer ${formationAdminToken}`);
      expect(res.status).toBe(200);
    });

    it('devrait refuser super-dashboard', async () => {
      const res = await request(app).get('/api/super-dashboard/stats').set('Authorization', `Bearer ${formationAdminToken}`);
      expect(res.status).toBe(403);
    });

    it('ne devrait pas accéder au module blog (cloisonnement)', async () => {
      const res = await request(app).get('/api/admin/blog/posts').set('Authorization', `Bearer ${formationAdminToken}`);
      expect(res.status).toBe(403);
    });

    it('ne devrait pas gérer les administrateurs', async () => {
      const res = await request(app).get('/api/admin/admins').set('Authorization', `Bearer ${formationAdminToken}`);
      expect(res.status).toBe(403);
    });
  });

  // ===== SCENARIO C2: BLOG_ADMIN CLOISONNÉ =====
  describe('C2. Blog Admin cloisonné', () => {
    it('ne devrait pas créer de formation', async () => {
      const res = await request(app)
        .post('/api/formations')
        .set('Authorization', `Bearer ${blogAdminToken}`)
        .send({ title: 'Formation interdite', description: 'Le blog admin ne doit pas pouvoir créer ceci' });
      expect(res.status).toBe(403);
    });

    it('ne devrait pas voir les utilisateurs', async () => {
      const res = await request(app).get('/api/users').set('Authorization', `Bearer ${blogAdminToken}`);
      expect(res.status).toBe(403);
    });
  });

  // ===== SCENARIO D: ULTRA_ADMIN =====
  describe('D. Ultra Admin', () => {
    it('devrait autoriser tous les modules', async () => {
      const [blog, forum, formations, admin, rbac] = await Promise.all([
        request(app).get('/api/admin/blog/posts').set('Authorization', `Bearer ${ultraAdminToken}`),
        request(app).get('/api/forum').set('Authorization', `Bearer ${ultraAdminToken}`),
        request(app).get('/api/formations').set('Authorization', `Bearer ${ultraAdminToken}`),
        request(app).get('/api/admin/admins').set('Authorization', `Bearer ${ultraAdminToken}`),
        request(app).get('/api/rbac/permissions').set('Authorization', `Bearer ${ultraAdminToken}`),
      ]);
      expect(blog.status).toBe(200);
      expect(forum.status).toBe(200);
      expect(formations.status).toBe(200);
      expect(admin.status).toBe(200);
      expect(rbac.status).toBe(200);
    });

    it('devrait autoriser gestion admins', async () => {
      const res = await request(app).get('/api/admin/admins').set('Authorization', `Bearer ${ultraAdminToken}`);
      expect(res.status).toBe(200);
    });

    it('devrait autoriser permissions', async () => {
      const res = await request(app).get('/api/rbac/permissions').set('Authorization', `Bearer ${ultraAdminToken}`);
      expect(res.status).toBe(200);
    });
  });

  // ===== SCENARIO E: ADMIN PENDING =====
  describe('E. Admin Pending', () => {
    it('devrait refuser l\'accès admin', async () => {
      const res = await request(app).get('/api/admin/stats').set('Authorization', `Bearer ${pendingAdminToken}`);
      expect(res.status).toBe(403);
    });
  });

  // ===== SCENARIO F: ADMIN SUSPENDED =====
  describe('F. Admin Suspended', () => {
    it('devrait refuser l\'accès admin', async () => {
      const res = await request(app).get('/api/admin/stats').set('Authorization', `Bearer ${suspendedAdminToken}`);
      expect(res.status).toBe(403);
    });
  });

  // ===== SCENARIO G: ACTION SENSIBLE =====
  describe('G. Action sensible', () => {
    it('devrait créer une demande PENDING_APPROVAL', async () => {
      const res = await request(app)
        .post('/api/approvals')
        .set('Authorization', `Bearer ${ultraAdminToken}`)
        .send({ resourceType: 'Post', resourceId: 'test', action: 'post.delete' });
      expect(res.status).toBe(201);
      expect(res.body.data.status).toBe('PENDING');
    });

    it('devrait refuser l\'action sans approbation', async () => {
      const res = await request(app)
        .get('/api/approvals/pending')
        .set('Authorization', `Bearer ${blogAdminToken}`);
      expect(res.status).toBe(403);
    });
  });

  // ===== SCENARIO H: ACCES DIRECT =====
  describe('H. Accès direct', () => {
    it('devrait refuser /admin sans token', async () => {
      const res = await request(app).get('/api/admin/stats');
      expect(res.status).toBe(401);
    });

    it('devrait refuser /api/rbac/* avec membre', async () => {
      const res = await request(app).get('/api/rbac/roles').set('Authorization', `Bearer ${memberToken}`);
      expect(res.status).toBe(403);
    });

    it('devrait refuser /api/approvals/* avec membre', async () => {
      const res = await request(app).get('/api/approvals').set('Authorization', `Bearer ${memberToken}`);
      expect(res.status).toBe(403);
    });
  });
});
