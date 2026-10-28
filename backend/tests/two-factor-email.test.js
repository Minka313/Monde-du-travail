const request = require('supertest');
const bcrypt = require('bcryptjs');
const { app } = require('../src/app');
const { signAccessToken } = require('../src/utils/tokens');
const { TEST_PASSWORD, createTestUser, cleanupTestUsers, prisma } = require('./helpers/fixtures');

// Double authentification sans téléphone : code à 6 chiffres envoyé par e-mail.
const EMAIL = 'nophone@2famail.test.com';

describe('Double authentification par e-mail', () => {
  let user, token;
  // Le code réel part par e-mail : on fixe un code connu pour le test
  const forceCode = (code) => prisma.user.update({ where: { id: user.id }, data: { twoFactorEmailCode: bcrypt.hashSync(code, 4), twoFactorEmailExpires: new Date(Date.now() + 600000), twoFactorEmailAttempts: 0 } });
  const login = () => request(app).post('/api/auth/login').send({ email: EMAIL, password: TEST_PASSWORD });

  beforeAll(async () => {
    user = await createTestUser({ email: EMAIL, role: 'ADMIN', adminRole: 'ADMIN_BLOG' });
    token = signAccessToken(user);
  });

  afterAll(async () => {
    await cleanupTestUsers([EMAIL]);
    await prisma.$disconnect();
  });

  it("s'active avec le code reçu par e-mail", async () => {
    const setup = await request(app).post('/api/admin/2fa/setup-email').set('Authorization', `Bearer ${token}`);
    expect(setup.status).toBe(200);
    expect(setup.body.data.sentTo).toMatch(/^no•+@2famail\.test\.com$/);
    const stored = await prisma.user.findUnique({ where: { id: user.id } });
    expect(stored.twoFactorEmailCode).toMatch(/^\$2/); // seule l'empreinte est gardée

    await forceCode('123456');
    expect((await request(app).post('/api/admin/2fa/verify-email').set('Authorization', `Bearer ${token}`).send({ code: '654321' })).status).toBe(400);
    const ok = await request(app).post('/api/admin/2fa/verify-email').set('Authorization', `Bearer ${token}`).send({ code: '123456' });
    expect(ok.status).toBe(200);
    const status = await request(app).get('/api/admin/2fa/status').set('Authorization', `Bearer ${token}`);
    expect(status.body.data).toEqual({ enabled: true, method: 'EMAIL' });
  });

  it('demande le code par e-mail à la connexion puis connecte avec le bon code (usage unique)', async () => {
    const first = await login();
    expect(first.status).toBe(200);
    expect(first.body.data).toMatchObject({ require2FA: true, method: 'EMAIL' });
    expect(first.body.data.accessToken).toBeUndefined();
    const { tempToken } = first.body.data;

    await forceCode('111222');
    expect((await request(app).post('/api/auth/login-2fa').send({ tempToken, code: '999999' })).status).toBe(401);
    const ok = await request(app).post('/api/auth/login-2fa').send({ tempToken, code: '111222' });
    expect(ok.status).toBe(200);
    expect(ok.body.data.accessToken).toBeTruthy();
    // Le même code ne sert qu'une fois
    expect((await request(app).post('/api/auth/login-2fa').send({ tempToken, code: '111222' })).status).toBe(401);
  });

  it('bloque après 5 essais et permet de redemander un code', async () => {
    const { tempToken } = (await login()).body.data;
    await forceCode('333444');
    for (let i = 0; i < 5; i += 1) await request(app).post('/api/auth/login-2fa').send({ tempToken, code: '000000' });
    const blocked = await request(app).post('/api/auth/login-2fa').send({ tempToken, code: '333444' });
    expect(blocked.status).toBe(401);
    expect(blocked.body.message).toMatch(/Trop d'essais/);

    await prisma.user.update({ where: { id: user.id }, data: { twoFactorEmailExpires: new Date(Date.now() - 1000) } });
    const resend = await request(app).post('/api/auth/login-2fa/resend').send({ tempToken });
    expect(resend.status).toBe(200);
    expect(resend.body.data.sentTo).toBeTruthy();
  });
});
