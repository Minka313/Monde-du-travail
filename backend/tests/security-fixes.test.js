/**
 * Non-régression des correctifs de sécurité de l'audit :
 * - révocation des sessions au changement de mot de passe ;
 * - endpoints sync-schema réservés à l'Ultra Admin.
 */
const request = require('supertest');
const bcrypt = require('bcryptjs');
const { app } = require('../src/app');
const { TEST_PASSWORD, createTestUser, cleanupTestUsers, prisma } = require('./helpers/fixtures');

const EMAILS = {
  member: 'member@secfix.test.com',
  admin: 'admin-blog@secfix.test.com',
  ultra: 'ultra@secfix.test.com',
};

async function login(email, password = TEST_PASSWORD) {
  const res = await request(app).post('/api/auth/login').send({ email, password });
  return res.body.data;
}

describe('Correctifs de sécurité', () => {
  beforeAll(async () => {
    await createTestUser({ email: EMAILS.member, role: 'MEMBER' });
    await createTestUser({ email: EMAILS.admin, role: 'ADMIN', adminRole: 'ADMIN_BLOG' });
    await createTestUser({ email: EMAILS.ultra, role: 'ULTRA_ADMIN' });
  });

  afterAll(async () => {
    await cleanupTestUsers(Object.values(EMAILS));
  });

  describe('Révocation des sessions au changement de mot de passe', () => {
    let oldSession;

    beforeAll(async () => {
      oldSession = await login(EMAILS.member);
      await prisma.user.update({
        where: { email: EMAILS.member },
        data: { password: await bcrypt.hash('Nouveau123!', 10) },
      });
    });

    it('refuse l\'ancien jeton d\'accès', async () => {
      const res = await request(app).get('/api/auth/me').set('Authorization', `Bearer ${oldSession.accessToken}`);
      expect(res.status).toBe(401);
    });

    it('refuse l\'ancien jeton de renouvellement', async () => {
      const res = await request(app).post('/api/auth/refresh').send({ refreshToken: oldSession.refreshToken });
      expect(res.status).toBe(401);
    });

    it('accepte une nouvelle connexion avec le nouveau mot de passe', async () => {
      const session = await login(EMAILS.member, 'Nouveau123!');
      const me = await request(app).get('/api/auth/me').set('Authorization', `Bearer ${session.accessToken}`);
      expect(me.status).toBe(200);
      expect(me.body.data.password).toBeUndefined();

      const refreshed = await request(app).post('/api/auth/refresh').send({ refreshToken: session.refreshToken });
      expect(refreshed.status).toBe(200);
      const again = await request(app).get('/api/auth/me').set('Authorization', `Bearer ${refreshed.body.data.accessToken}`);
      expect(again.status).toBe(200);
    });
  });

  describe.each(['forum', 'blog'])('POST /api/%s/sync-schema', (module) => {
    it('refuse un visiteur non authentifié', async () => {
      const res = await request(app).post(`/api/${module}/sync-schema`);
      expect(res.status).toBe(401);
    });

    it('refuse un admin de module', async () => {
      const { accessToken } = await login(EMAILS.admin);
      const res = await request(app).post(`/api/${module}/sync-schema`).set('Authorization', `Bearer ${accessToken}`);
      expect(res.status).toBe(403);
    });

    it('autorise l\'Ultra Admin', async () => {
      const { accessToken } = await login(EMAILS.ultra);
      const res = await request(app).post(`/api/${module}/sync-schema`).set('Authorization', `Bearer ${accessToken}`);
      expect(res.status).toBe(200);
    });

    it('n\'est plus accessible en GET public', async () => {
      const res = await request(app).get(`/api/${module}/sync-schema`);
      expect(res.body.message || '').not.toMatch(/synchronisé/);
    });
  });
});
