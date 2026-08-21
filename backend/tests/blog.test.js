const request = require('supertest');
const { app } = require('../src/app');

describe('Blog Integration', () => {
  let adminToken;
  let postId;

  beforeAll(async () => {
    const adminLogin = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'admin@mondedutravail.com',
        password: 'Admin123!ChangeMe',
      });
    adminToken = adminLogin.body.data.accessToken;
  });

  describe('GET /api/blog', () => {
    it('should return published posts', async () => {
      const response = await request(app).get('/api/blog');
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(Array.isArray(response.body.data)).toBe(true);
    });

    it('should filter by category', async () => {
      const response = await request(app).get('/api/blog?category=CLUB');
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
    });

    it('should paginate results', async () => {
      const response = await request(app).get('/api/blog?page=1&limit=1');
      expect(response.status).toBe(200);
      expect(response.body.pagination.limit).toBe(1);
    });
  });

  describe('GET /api/blog/categories', () => {
    it('should return list of categories', async () => {
      const response = await request(app).get('/api/blog/categories');
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(Array.isArray(response.body.data)).toBe(true);
    });
  });

  describe('POST /api/blog', () => {
    it('should create a new post as admin', async () => {
      const response = await request(app)
        .post('/api/blog')
        .set('Authorization', `Bearer ${adminToken}`)
        .send({
          title: 'Test Blog Post from Jest',
          content: 'This is a test blog post created by Jest integration tests.',
          category: 'CLUB',
          status: 'PUBLISHED',
          excerpt: 'Test excerpt',
        });

      expect(response.status).toBe(201);
      expect(response.body.success).toBe(true);
      expect(response.body.data.title).toBe('Test Blog Post from Jest');
      postId = response.body.data.id;
    });

    it('should reject post without auth', async () => {
      const response = await request(app)
        .post('/api/blog')
        .send({
          title: 'Unauthorized Post',
          content: 'This should fail.',
          category: 'CLUB',
        });

      expect(response.status).toBe(401);
    });

    it('should reject post with short title', async () => {
      const response = await request(app)
        .post('/api/blog')
        .set('Authorization', `Bearer ${adminToken}`)
        .send({
          title: 'AB',
          content: 'This title is too short.',
          category: 'CLUB',
        });

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
    });
  });

  describe('GET /api/blog/:id', () => {
    it('should return post by id', async () => {
      const response = await request(app).get(`/api/blog/${postId}`);
      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data.id).toBe(postId);
    });

    it('should return 404 for non-existent post', async () => {
      const response = await request(app).get('/api/blog/nonexistent-id');
      expect(response.status).toBe(404);
    });
  });

  describe('PUT /api/blog/:id', () => {
    it('should update post', async () => {
      const response = await request(app)
        .put(`/api/blog/${postId}`)
        .set('Authorization', `Bearer ${adminToken}`)
        .send({
          title: 'Updated Test Blog Post',
          content: 'Updated content.',
          category: 'CLUB',
        });

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.data.title).toBe('Updated Test Blog Post');
    });
  });

  describe('POST /api/blog/:id/publish', () => {
    it('should publish post', async () => {
      const response = await request(app)
        .post(`/api/blog/${postId}/publish`)
        .set('Authorization', `Bearer ${adminToken}`);

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
    });
  });

  describe('POST /api/blog/:id/unpublish', () => {
    it('should unpublish post', async () => {
      const response = await request(app)
        .post(`/api/blog/${postId}/unpublish`)
        .set('Authorization', `Bearer ${adminToken}`);

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
    });
  });

  describe('DELETE /api/blog/:id', () => {
    it('should delete post', async () => {
      const response = await request(app)
        .delete(`/api/blog/${postId}`)
        .set('Authorization', `Bearer ${adminToken}`);

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
    });

    it('should return 404 after deletion', async () => {
      const response = await request(app).get(`/api/blog/${postId}`);
      expect(response.status).toBe(404);
    });
  });
});
