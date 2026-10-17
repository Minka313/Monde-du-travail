const request = require('supertest');
const { app } = require('../src/app');
const { TEST_PASSWORD, createTestUser, cleanupTestUsers } = require('./helpers/fixtures');

const EMAILS = { ultra: 'ultra@superdash.test.com', otherUltra: 'ultra2@superdash.test.com' };

describe('Super dashboard - erreurs métier', () => {
  let token;
  let otherUltra;

  beforeAll(async () => {
    await createTestUser({ email: EMAILS.ultra, role: 'ULTRA_ADMIN' });
    otherUltra = await createTestUser({ email: EMAILS.otherUltra, role: 'ULTRA_ADMIN' });
    const res = await request(app).post('/api/auth/login').send({ email: EMAILS.ultra, password: TEST_PASSWORD });
    token = res.body.data.accessToken;
  });

  afterAll(async () => {
    await cleanupTestUsers(Object.values(EMAILS));
  });

  it('renvoie 404 pour un administrateur inexistant', async () => {
    const res = await request(app).post('/api/super-dashboard/admins/inexistant/suspend').set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(404);
  });

  it('renvoie 403 en tentant de suspendre un autre Ultra Admin', async () => {
    const res = await request(app).post(`/api/super-dashboard/admins/${otherUltra.id}/suspend`).set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(403);
  });

  it('renvoie 404 en réactivant un administrateur inexistant', async () => {
    const res = await request(app).post('/api/super-dashboard/admins/inexistant/reactivate').set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(404);
  });
});
