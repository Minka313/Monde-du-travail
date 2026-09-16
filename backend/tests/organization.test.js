const request = require('supertest');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { app } = require('../src/app');

const prisma = new PrismaClient();

describe('Organization & Bureau Club Integration Tests', () => {
  jest.setTimeout(30000);
  let ultraAdmin, blogAdmin, member;
  let ultraToken, blogToken, memberToken;
  let testPositionId, testAssignmentId;

  beforeAll(async () => {
    // Nettoyage préalable des tests précédents
    await prisma.clubAssignment.deleteMany({
      where: {
        user: {
          email: { in: ['org-ultra@test.com', 'org-blog@test.com', 'org-member@test.com'] },
        },
      },
    });
    await prisma.clubPosition.deleteMany({
      where: {
        title: { in: ['Délégué Général Test', 'Poste Modifié Test', 'Poste Doublon Test'] },
      },
    });
    await prisma.userAdminRole.deleteMany({
      where: {
        user: {
          email: { in: ['org-ultra@test.com', 'org-blog@test.com', 'org-member@test.com'] },
        },
      },
    });
    await prisma.user.deleteMany({
      where: {
        email: { in: ['org-ultra@test.com', 'org-blog@test.com', 'org-member@test.com'] },
      },
    });

    const hash = await bcrypt.hash('Test123!', 12);

    ultraAdmin = await prisma.user.create({
      data: {
        email: 'org-ultra@test.com',
        password: hash,
        firstName: 'Ultra',
        lastName: 'President',
        role: 'ULTRA_ADMIN',
        isActive: true,
        isVerified: true,
      },
    });

    blogAdmin = await prisma.user.create({
      data: {
        email: 'org-blog@test.com',
        password: hash,
        firstName: 'Admin',
        lastName: 'Staff',
        role: 'ADMIN',
        isActive: true,
        isVerified: true,
      },
    });

    member = await prisma.user.create({
      data: {
        email: 'org-member@test.com',
        password: hash,
        firstName: 'Membre',
        lastName: 'Adherent',
        role: 'MEMBER',
        isActive: true,
        isVerified: true,
      },
    });

    const blogRole = await prisma.adminRole.findUnique({ where: { name: 'ADMIN_BLOG' } });
    if (blogRole) {
      await prisma.userAdminRole.create({
        data: {
          userId: blogAdmin.id,
          adminRoleId: blogRole.id,
          status: 'APPROVED',
          assignedBy: ultraAdmin.id,
          reviewedBy: ultraAdmin.id,
          reviewedAt: new Date(),
        },
      });
    }

    const createToken = (u) =>
      jwt.sign({ id: u.id, email: u.email, role: u.role }, process.env.JWT_SECRET || 'test-secret', {
        expiresIn: '1d',
      });

    ultraToken = createToken(ultraAdmin);
    blogToken = createToken(blogAdmin);
    memberToken = createToken(member);
  });

  afterAll(async () => {
    if (testAssignmentId) {
      await prisma.clubAssignment.deleteMany({ where: { id: testAssignmentId } });
    }
    if (testPositionId) {
      await prisma.clubPosition.deleteMany({ where: { id: testPositionId } });
    }
    await prisma.clubAssignment.deleteMany({
      where: {
        user: { email: { in: ['org-ultra@test.com', 'org-blog@test.com', 'org-member@test.com'] } },
      },
    });
    await prisma.clubPosition.deleteMany({
      where: { title: { in: ['Délégué Général Test', 'Poste Modifié Test', 'Poste Doublon Test'] } },
    });
    await prisma.userAdminRole.deleteMany({
      where: { user: { email: { in: ['org-ultra@test.com', 'org-blog@test.com', 'org-member@test.com'] } } },
    });
    await prisma.user.deleteMany({
      where: { email: { in: ['org-ultra@test.com', 'org-blog@test.com', 'org-member@test.com'] } },
    });
    await prisma.$disconnect();
  });

  describe('1. Consultation du Bureau et des Postes', () => {
    it('GET /api/organization/bureau - doit retourner 200 pour le staff admin', async () => {
      const res = await request(app)
        .get('/api/organization/bureau')
        .set('Authorization', `Bearer ${blogToken}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(Array.isArray(res.body.data)).toBe(true);
      expect(res.body.data.length).toBeGreaterThanOrEqual(12);
      expect(res.body.data[0]).toHaveProperty('title');
      expect(res.body.data[0]).toHaveProperty('category');
      expect(res.body.data[0]).toHaveProperty('currentHolders');
    });

    it('GET /api/organization/bureau - doit refuser l\'accès (403) à un simple membre', async () => {
      const res = await request(app)
        .get('/api/organization/bureau')
        .set('Authorization', `Bearer ${memberToken}`);

      expect(res.status).toBe(403);
    });

    it('GET /api/organization/bureau - doit refuser l\'accès (401) sans authentification', async () => {
      const res = await request(app).get('/api/organization/bureau');
      expect(res.status).toBe(401);
    });

    it('GET /api/organization/positions - doit lister tous les postes configurés', async () => {
      const res = await request(app)
        .get('/api/organization/positions')
        .set('Authorization', `Bearer ${ultraToken}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(Array.isArray(res.body.data)).toBe(true);
    });
  });

  describe('2. Création et Personnalisation des Postes (Exclusivité Ultra Admin)', () => {
    it('POST /api/organization/positions - l\'Ultra Admin peut créer un poste personnalisé', async () => {
      const res = await request(app)
        .post('/api/organization/positions')
        .set('Authorization', `Bearer ${ultraToken}`)
        .send({
          title: 'Délégué Général Test',
          description: 'Missions spéciales d\'innovation et de coordination test.',
          category: 'POLE_PROJETS',
          order: 99,
        });

      expect(res.status).toBe(201);
      expect(res.body.success).toBe(true);
      expect(res.body.data.title).toBe('Délégué Général Test');
      expect(res.body.data.order).toBe(99);
      testPositionId = res.body.data.id;
    });

    it('POST /api/organization/positions - un admin non-ultra doit être rejeté (403 Forbidden)', async () => {
      const res = await request(app)
        .post('/api/organization/positions')
        .set('Authorization', `Bearer ${blogToken}`)
        .send({
          title: 'Poste Piratage Test',
          category: 'AUTRE',
        });

      expect(res.status).toBe(403);
    });

    it('POST /api/organization/positions - doit refuser les titres en double (409 Conflict)', async () => {
      const res = await request(app)
        .post('/api/organization/positions')
        .set('Authorization', `Bearer ${ultraToken}`)
        .send({
          title: 'Délégué Général Test',
          category: 'POLE_PROJETS',
        });

      expect(res.status).toBe(409);
    });

    it('POST /api/organization/positions - doit valider les données requises (400 Bad Request)', async () => {
      const res = await request(app)
        .post('/api/organization/positions')
        .set('Authorization', `Bearer ${ultraToken}`)
        .send({
          title: '',
        });

      expect(res.status).toBe(400);
    });

    it('PUT /api/organization/positions/:id - l\'Ultra Admin peut modifier un poste', async () => {
      const res = await request(app)
        .put(`/api/organization/positions/${testPositionId}`)
        .set('Authorization', `Bearer ${ultraToken}`)
        .send({
          title: 'Poste Modifié Test',
          description: 'Nouvelle description des missions.',
          order: 42,
        });

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.title).toBe('Poste Modifié Test');
      expect(res.body.data.order).toBe(42);
    });

    it('PUT /api/organization/positions/:id - un admin standard ne peut pas modifier un poste (403)', async () => {
      const res = await request(app)
        .put(`/api/organization/positions/${testPositionId}`)
        .set('Authorization', `Bearer ${blogToken}`)
        .send({
          title: 'Tentative Fraude',
        });

      expect(res.status).toBe(403);
    });
  });

  describe('3. Attribution et Gestion des Postes (Exclusivité Ultra Admin)', () => {
    it('POST /api/organization/assignments - l\'Ultra Admin peut assigner un membre au poste', async () => {
      const res = await request(app)
        .post('/api/organization/assignments')
        .set('Authorization', `Bearer ${ultraToken}`)
        .send({
          positionId: testPositionId,
          userId: member.id,
          mandateYear: '2026-2027',
          notes: 'Affectation pilote test',
        });

      expect(res.status).toBe(201);
      expect(res.body.success).toBe(true);
      expect(res.body.data.positionId).toBe(testPositionId);
      expect(res.body.data.userId).toBe(member.id);
      expect(res.body.data.isActive).toBe(true);
      testAssignmentId = res.body.data.id;
    });

    it('POST /api/organization/assignments - un admin standard ne peut pas assigner un poste (403)', async () => {
      const res = await request(app)
        .post('/api/organization/assignments')
        .set('Authorization', `Bearer ${blogToken}`)
        .send({
          positionId: testPositionId,
          userId: blogAdmin.id,
        });

      expect(res.status).toBe(403);
    });

    it('GET /api/organization/bureau - le bureau reflète le nouveau titulaire actif', async () => {
      const res = await request(app)
        .get('/api/organization/bureau')
        .set('Authorization', `Bearer ${ultraToken}`);

      expect(res.status).toBe(200);
      const targetPos = res.body.data.find((p) => p.id === testPositionId);
      expect(targetPos).toBeDefined();
      expect(targetPos.isOccupied).toBe(true);
      expect(targetPos.currentHolders.length).toBe(1);
      expect(targetPos.currentHolders[0].userId).toBe(member.id);
    });

    it('PUT /api/organization/assignments/:id - l\'Ultra Admin peut modifier le mandat', async () => {
      const res = await request(app)
        .put(`/api/organization/assignments/${testAssignmentId}`)
        .set('Authorization', `Bearer ${ultraToken}`)
        .send({
          mandateYear: '2026-2028',
          notes: 'Mandat reconduit',
        });

      expect(res.status).toBe(200);
      expect(res.body.data.mandateYear).toBe('2026-2028');
    });

    it('DELETE /api/organization/assignments/:id - l\'Ultra Admin peut libérer / retirer l\'affectation', async () => {
      const res = await request(app)
        .delete(`/api/organization/assignments/${testAssignmentId}`)
        .set('Authorization', `Bearer ${ultraToken}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      testAssignmentId = null;
    });

    it('DELETE /api/organization/positions/:id - l\'Ultra Admin peut supprimer le poste', async () => {
      const res = await request(app)
        .delete(`/api/organization/positions/${testPositionId}`)
        .set('Authorization', `Bearer ${ultraToken}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      testPositionId = null;
    });
  });
});
