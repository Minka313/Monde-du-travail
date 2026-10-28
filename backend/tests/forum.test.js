const request = require('supertest');
const { app } = require('../src/app');
const { TEST_PASSWORD, createTestUser, cleanupTestUsers, prisma } = require('./helpers/fixtures');

const ADMIN_EMAIL = 'admin-forum@forum.test.com';
const MEMBER_EMAIL = 'member@forum.test.com';

describe('Forum Integration', () => {
  let adminToken;
  let memberToken;
  let topicId;
  let memberUser;

  afterAll(async () => {
    await cleanupTestUsers([ADMIN_EMAIL, MEMBER_EMAIL]);
  });

  beforeAll(async () => {
    await createTestUser({ email: ADMIN_EMAIL, role: 'ADMIN', adminRole: 'ADMIN_FORUM' });
    memberUser = await createTestUser({ email: MEMBER_EMAIL, role: 'MEMBER' });
    // Login as admin
    const adminLogin = await request(app)
      .post('/api/auth/login')
      .send({
        email: ADMIN_EMAIL,
        password: TEST_PASSWORD,
      });
    adminToken = adminLogin.body.data.accessToken;

    // Login as member
    const memberLogin = await request(app)
      .post('/api/auth/login')
      .send({
        email: MEMBER_EMAIL,
        password: TEST_PASSWORD,
      });
    memberToken = memberLogin.body.data.accessToken;
  });

  describe('GET /api/forum', () => {
    it('should return list of topics', async () => {
      const response = await request(app).get('/api/forum');
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(Array.isArray(response.body.data)).toBe(true);
      expect(response.body.pagination).toBeDefined();
    });

    it('should filter by category', async () => {
      const response = await request(app).get('/api/forum?category=' + encodeURIComponent('Orientation & Métiers'));
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      response.body.data.forEach(topic => {
        expect(topic.category).toBe('Orientation & Métiers');
      });
    });

    it('should search topics', async () => {
      const response = await request(app).get('/api/forum?search=test');
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
    });

    it('should paginate results', async () => {
      const response = await request(app).get('/api/forum?page=1&limit=2');
      expect(response.status).toBe(200);
      expect(response.body.pagination.limit).toBe(2);
      expect(response.body.data.length).toBeLessThanOrEqual(2);
    });
  });

  describe('GET /api/forum/categories', () => {
    it('should return list of categories with counts', async () => {
      const response = await request(app).get('/api/forum/categories');
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(Array.isArray(response.body.data)).toBe(true);
      response.body.data.forEach(cat => {
        expect(cat.name).toBeDefined();
        expect(cat.count).toBeDefined();
      });
    });
  });

  describe('GET /api/forum/:id', () => {
    it('should return topic by id', async () => {
      // Sujet créé par le test : ne dépend pas du contenu déjà présent en base
      const topic = await prisma.topic.create({
        data: { title: 'Sujet de lecture par id', content: 'Contenu de test', category: 'Orientation & Métiers', authorId: memberUser.id },
      });

      const response = await request(app).get(`/api/forum/${topic.id}`);
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data.id).toBe(topic.id);
      // Views should increment or at least be present
      expect(response.body.data.views).toBeGreaterThanOrEqual(0);
    });

    it('should return 404 for non-existent topic', async () => {
      const response = await request(app).get('/api/forum/nonexistent-id');
      expect(response.status).toBe(404);
    });
  });

  describe('POST /api/forum', () => {
    it('should create a new topic as admin', async () => {
      const response = await request(app)
        .post('/api/forum')
        .set('Authorization', `Bearer ${adminToken}`)
        .send({
          title: 'Test Topic from Jest',
          content: 'This is a test topic created by Jest integration tests.',
          category: 'Orientation & Métiers',
          tags: ['test', 'jest'],
        });

      expect(response.status).toBe(201);
      expect(response.body.success).toBe(true);
      expect(response.body.data.title).toBe('Test Topic from Jest');
      topicId = response.body.data.id;
    });

    it('should create a new topic as member', async () => {
      const response = await request(app)
        .post('/api/forum')
        .set('Authorization', `Bearer ${memberToken}`)
        .send({
          title: 'Member Test Topic',
          content: 'This is a test topic created by a member.',
          category: 'Vie professionnelle',
        });

      expect(response.status).toBe(201);
      expect(response.body.success).toBe(true);
    });

    it('should reject topic creation without auth', async () => {
      const response = await request(app)
        .post('/api/forum')
        .send({
          title: 'Unauthorized Topic',
          content: 'This should fail.',
          category: 'Vie du club',
        });

      expect(response.status).toBe(401);
    });

    it('should reject topic with short title', async () => {
      const response = await request(app)
        .post('/api/forum')
        .set('Authorization', `Bearer ${adminToken}`)
        .send({
          title: 'AB',
          content: 'This title is too short.',
          category: 'Vie du club',
        });

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
    });

    it('should reject topic with short content', async () => {
      const response = await request(app)
        .post('/api/forum')
        .set('Authorization', `Bearer ${adminToken}`)
        .send({
          title: 'Valid Title',
          content: 'Short',
          category: 'Vie du club',
        });

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
    });
  });

  describe('POST /api/forum/:topicId/replies', () => {
    it('should create a reply', async () => {
      const response = await request(app)
        .post(`/api/forum/${topicId}/replies`)
        .set('Authorization', `Bearer ${memberToken}`)
        .send({
          content: 'This is a test reply.',
        });

      expect(response.status).toBe(201);
      expect(response.body.success).toBe(true);
      expect(response.body.data.content).toBe('This is a test reply.');
    });

    it('should reject reply on non-existent topic', async () => {
      const response = await request(app)
        .post('/api/forum/nonexistent-id/replies')
        .set('Authorization', `Bearer ${memberToken}`)
        .send({
          content: 'This should fail.',
        });

      expect(response.status).toBe(404);
    });

    it('should reject reply without auth', async () => {
      const response = await request(app)
        .post(`/api/forum/${topicId}/replies`)
        .send({
          content: 'Unauthorized reply.',
        });

      expect(response.status).toBe(401);
    });
  });

  describe('PUT /api/forum/:id/pin', () => {
    it('should pin topic as admin', async () => {
      const response = await request(app)
        .put(`/api/forum/${topicId}/pin`)
        .set('Authorization', `Bearer ${adminToken}`);

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data.isPinned).toBe(true);
    });

    it('should reject pin as member', async () => {
      const response = await request(app)
        .put(`/api/forum/${topicId}/pin`)
        .set('Authorization', `Bearer ${memberToken}`);

      expect(response.status).toBe(403);
    });
  });

  describe('PUT /api/forum/:id/resolve', () => {
    it('should resolve topic as admin', async () => {
      const response = await request(app)
        .put(`/api/forum/${topicId}/resolve`)
        .set('Authorization', `Bearer ${adminToken}`);

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data.isResolved).toBe(true);
    });
  });

  describe('PUT /api/forum/:id/lock', () => {
    it('should lock topic as admin', async () => {
      const response = await request(app)
        .put(`/api/forum/${topicId}/lock`)
        .set('Authorization', `Bearer ${adminToken}`);

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data.isLocked).toBe(true);
    });
  });

  describe('DELETE /api/forum/:id', () => {
    it('should delete topic as admin', async () => {
      const response = await request(app)
        .delete(`/api/forum/${topicId}`)
        .set('Authorization', `Bearer ${adminToken}`);

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
    });

    it('should return 404 after deletion', async () => {
      const response = await request(app).get(`/api/forum/${topicId}`);
      expect(response.status).toBe(404);
    });
  });
});
