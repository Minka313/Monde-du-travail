const request = require('supertest');
const { app } = require('../src/app');

describe('API Health Check', () => {
  it('GET /health doit retourner 200', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('OK');
  });
});

describe('API Routes', () => {
  it('GET /api/events doit retourner 200 (liste vide)', async () => {
    const response = await request(app).get('/api/events');
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
  });

  it('GET /api/jobs doit retourner 200 (liste vide)', async () => {
    const response = await request(app).get('/api/jobs');
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
  });

  it('GET /api/formations doit retourner 200 (liste vide)', async () => {
    const response = await request(app).get('/api/formations');
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
  });

  it('GET /api/forum doit retourner 200 (liste vide)', async () => {
    const response = await request(app).get('/api/forum');
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
  });

  it('GET /api/admin/stats doit retourner 401 (non authentifié)', async () => {
    const response = await request(app).get('/api/admin/stats');
    expect(response.status).toBe(401);
  });

  it('POST /api/auth/register sans body doit retourner 400', async () => {
    const response = await request(app).post('/api/auth/register');
    expect(response.status).toBe(400);
    expect(response.body.success).toBe(false);
  });
});