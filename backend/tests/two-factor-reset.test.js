const request = require('supertest');
const { app } = require('../src/app');
const { signAccessToken } = require('../src/utils/tokens');
const { TEST_PASSWORD, createTestUser, cleanupTestUsers, prisma } = require('./helpers/fixtures');

// Téléphone perdu : seul l'Ultra Admin, après confirmation de son mot de passe,
// peut réinitialiser la double authentification d'un autre compte.
const EMAILS = ['ultra@2fareset.test.com', 'admin@2fareset.test.com'];

describe('Réinitialisation de la double authentification', () => {
  let ultraToken, adminToken, admin;

  beforeAll(async () => {
    ultraToken = signAccessToken(await createTestUser({ email: EMAILS[0], role: 'ULTRA_ADMIN' }));
    admin = await createTestUser({ email: EMAILS[1], role: 'ADMIN', adminRole: 'ADMIN_BLOG' });
    adminToken = signAccessToken(admin);
    await prisma.user.update({ where: { id: admin.id }, data: { twoFactorEnabled: true, twoFactorSecret: 'JBSWY3DPEHPK3PXP' } });
  });

  afterAll(async () => {
    await cleanupTestUsers(EMAILS);
    await prisma.$disconnect();
  });

  const reset = (token, password) => {
    const req = request(app).post(`/api/users/${admin.id}/2fa/reset`).set('Authorization', `Bearer ${token}`);
    return password ? req.set('x-confirm-password', password) : req;
  };

  it("refuse sans être Ultra Admin ou sans confirmer le mot de passe", async () => {
    expect((await reset(adminToken, TEST_PASSWORD)).status).toBe(403);
    expect([401, 403]).toContain((await reset(ultraToken)).status);
    expect((await prisma.user.findUnique({ where: { id: admin.id } })).twoFactorEnabled).toBe(true);
  });

  it('désactive la double authentification et efface la clé', async () => {
    const res = await reset(ultraToken, TEST_PASSWORD);
    expect(res.status).toBe(200);
    const u = await prisma.user.findUnique({ where: { id: admin.id } });
    expect(u).toMatchObject({ twoFactorEnabled: false, twoFactorSecret: null });
  });
});
