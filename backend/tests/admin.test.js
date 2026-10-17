const request = require('supertest');
const { app } = require('../src/app');
const { TEST_PASSWORD, createTestUser, cleanupTestUsers } = require('./helpers/fixtures');

const EMAILS = {
  admin: 'admin-blog@admin.test.com',
  ultra: 'ultra@admin.test.com',
  member: 'member@admin.test.com',
};

async function login(email) {
  const res = await request(app).post('/api/auth/login').send({ email, password: TEST_PASSWORD });
  return res.body.data.accessToken;
}

describe('Admin Integration', () => {
  let adminToken;
  let ultraToken;
  let memberToken;

  beforeAll(async () => {
    // Admin de module (blog) : accès au tableau de bord et au blog, pas aux adhésions
    await createTestUser({ email: EMAILS.admin, role: 'ADMIN', adminRole: 'ADMIN_BLOG' });
    // La gestion des adhésions requiert membership.approve (ULTRA_ADMIN)
    await createTestUser({ email: EMAILS.ultra, role: 'ULTRA_ADMIN' });
    await createTestUser({ email: EMAILS.member, role: 'MEMBER' });

    adminToken = await login(EMAILS.admin);
    ultraToken = await login(EMAILS.ultra);
    memberToken = await login(EMAILS.member);
  });

  afterAll(async () => {
    await cleanupTestUsers(Object.values(EMAILS));
  });

  describe('GET /api/admin/stats', () => {
    it('should return stats as admin', async () => {
      const response = await request(app)
        .get('/api/admin/stats')
        .set('Authorization', `Bearer ${adminToken}`);

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data.activeMembers).toBeDefined();
      expect(response.body.data.pendingRequests).toBeDefined();
      expect(response.body.data.totalTopics).toBeDefined();
    });

    it('should return 401 without token', async () => {
      const response = await request(app).get('/api/admin/stats');
      expect(response.status).toBe(401);
    });

    it('should return 403 as member', async () => {
      const response = await request(app)
        .get('/api/admin/stats')
        .set('Authorization', `Bearer ${memberToken}`);

      expect(response.status).toBe(403);
    });
  });

  describe('GET /api/admin/memberships/pending', () => {
    it('should return pending memberships as ultra admin', async () => {
      const response = await request(app)
        .get('/api/admin/memberships/pending')
        .set('Authorization', `Bearer ${ultraToken}`);

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(Array.isArray(response.body.data)).toBe(true);
      expect(response.body.pagination).toBeDefined();
    });

    it('should return 403 for module admin without membership permission', async () => {
      const response = await request(app)
        .get('/api/admin/memberships/pending')
        .set('Authorization', `Bearer ${adminToken}`);

      expect(response.status).toBe(403);
    });
  });

  describe('POST /api/admin/memberships/:id/approve', () => {
    it('should return 404 for non-existent membership', async () => {
      const response = await request(app)
        .post('/api/admin/memberships/nonexistent-id/approve')
        .set('Authorization', `Bearer ${ultraToken}`);

      expect(response.status).toBe(404);
    });
  });

  describe('POST /api/admin/memberships/:id/reject', () => {
    it('should return 404 for non-existent membership', async () => {
      const response = await request(app)
        .post('/api/admin/memberships/nonexistent-id/reject')
        .set('Authorization', `Bearer ${ultraToken}`);

      expect(response.status).toBe(404);
    });
  });

  describe('GET /api/admin/blog/posts', () => {
    it('should return all posts as admin', async () => {
      const response = await request(app)
        .get('/api/admin/blog/posts')
        .set('Authorization', `Bearer ${adminToken}`);

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(Array.isArray(response.body.data)).toBe(true);
    });

    it('should filter by status', async () => {
      const response = await request(app)
        .get('/api/admin/blog/posts?status=PUBLISHED')
        .set('Authorization', `Bearer ${adminToken}`);

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
    });

    it('should return 403 as member', async () => {
      const response = await request(app)
        .get('/api/admin/blog/posts')
        .set('Authorization', `Bearer ${memberToken}`);

      expect(response.status).toBe(403);
    });
  });

  describe('RBAC Protection', () => {
    it('should protect admin routes from member access', async () => {
      const endpoints = [
        '/api/admin/stats',
        '/api/admin/memberships/pending',
        '/api/admin/blog/posts',
      ];

      for (const endpoint of endpoints) {
        const response = await request(app)
          .get(endpoint)
          .set('Authorization', `Bearer ${memberToken}`);

        expect(response.status).toBe(403);
      }
    });

    it('should require authentication for admin routes', async () => {
      const endpoints = [
        '/api/admin/stats',
        '/api/admin/memberships/pending',
        '/api/admin/blog/posts',
      ];

      for (const endpoint of endpoints) {
        const response = await request(app).get(endpoint);
        expect(response.status).toBe(401);
      }
    });
  });
});
