/**
 * Les jetons à usage restreint (vérification 2FA) ne doivent jamais servir
 * de jeton d'accès : sinon le mot de passe seul suffirait à ouvrir la session.
 */
const request = require('supertest');
const { app } = require('../src/app');
const totp = require('../src/utils/totp');
const { TEST_PASSWORD, createTestUser, cleanupTestUsers, prisma } = require('./helpers/fixtures');

const EMAIL = 'ultra-2fa@scope.test.com';

describe('Portée des jetons (2FA)', () => {
  let tempToken;
  let secret;

  beforeAll(async () => {
    const user = await createTestUser({ email: EMAIL, role: 'ULTRA_ADMIN' });
    secret = totp.generateSecret();
    await prisma.user.update({
      where: { id: user.id },
      data: { twoFactorEnabled: true, twoFactorSecret: secret },
    });

    const res = await request(app).post('/api/auth/login').send({ email: EMAIL, password: TEST_PASSWORD });
    expect(res.status).toBe(200);
    expect(res.body.require2FA).toBe(true);
    tempToken = res.body.data.tempToken;
  });

  afterAll(async () => {
    await cleanupTestUsers([EMAIL]);
  });

  it('refuse le jeton temporaire 2FA sur une route authentifiée', async () => {
    const res = await request(app).get('/api/auth/me').set('Authorization', `Bearer ${tempToken}`);
    expect(res.status).toBe(401);
  });

  it('refuse le jeton temporaire 2FA sur une route admin', async () => {
    const res = await request(app).get('/api/users').set('Authorization', `Bearer ${tempToken}`);
    expect(res.status).toBe(401);
  });

  it('accepte le jeton d\'accès obtenu après le code 2FA', async () => {
    const login = await request(app)
      .post('/api/auth/login-2fa')
      .send({ tempToken, code: totp.generateTOTP(secret) });
    expect(login.status).toBe(200);

    const res = await request(app)
      .get('/api/auth/me')
      .set('Authorization', `Bearer ${login.body.data.accessToken}`);
    expect(res.status).toBe(200);
  });
});
