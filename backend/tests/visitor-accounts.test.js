const request = require('supertest');
const { app } = require('../src/app');
const { signAccessToken } = require('../src/utils/tokens');
const { createTestUser, cleanupTestUsers, prisma } = require('./helpers/fixtures');
const EmailService = require('../src/services/emailService');

// Comptes visiteurs : création gratuite confirmée par e-mail, forum ouvert,
// formations réservées aux adhérents, demande d'adhésion validée par le bureau.
const VISITOR = 'visiteur@visitor.test.com';
const ULTRA = 'ultra@visitor.test.com';
const SLUG = 'formation-visitor-test';

describe('Comptes visiteurs', () => {
  let ultraToken, formation, mails, visitorToken;
  const linkToken = () => decodeURIComponent(/verifier=([^"&\s]+)/.exec(mails.find((m) => m.to === VISITOR).html)[1]);
  const login = () => request(app).post('/api/auth/login').send({ email: VISITOR, password: 'MotDePasse123' });

  beforeAll(async () => {
    await cleanupTestUsers([VISITOR]);
    ultraToken = signAccessToken(await createTestUser({ email: ULTRA, role: 'ULTRA_ADMIN' }));
    await prisma.formation.deleteMany({ where: { slug: SLUG } });
    formation = await prisma.formation.create({ data: { slug: SLUG, title: 'Formation test visiteur', description: 'Description de test suffisante', status: 'PUBLISHED' } });
  });

  beforeEach(() => {
    mails = [];
    jest.spyOn(EmailService, 'sendMail').mockImplementation(async (m) => { mails.push(m); return { success: true }; });
  });
  afterEach(() => jest.restoreAllMocks());

  afterAll(async () => {
    await prisma.formation.deleteMany({ where: { slug: SLUG } });
    await cleanupTestUsers([VISITOR, ULTRA]);
    await prisma.$disconnect();
  });

  it("crée un compte visiteur actif seulement après confirmation de l'adresse", async () => {
    const res = await request(app).post('/api/auth/register-visitor').send({ email: VISITOR, password: 'MotDePasse123', firstName: 'Fatou', lastName: 'Ndiaye' });
    expect(res.status).toBe(201);
    expect(await prisma.membershipRequest.count({ where: { user: { email: VISITOR } } })).toBe(0);

    const before = await login();
    expect(before.status).toBe(403);
    expect(before.body.message).toContain('Confirme');

    const token = linkToken();
    expect((await request(app).post('/api/auth/verify-email').send({ token: 'x'.repeat(30) })).status).toBe(400);
    expect((await request(app).post('/api/auth/verify-email').send({ token })).status).toBe(200);

    const after = await login();
    expect(after.status).toBe(200);
    expect(after.body.data.user.role).toBe('VISITOR');
    visitorToken = after.body.data.accessToken;

    // Renvoi du lien : même réponse, adresse connue ou non
    expect((await request(app).post('/api/auth/verify-email/resend').send({ email: 'inconnu@visitor.test.com' })).status).toBe(200);
  });

  it('ouvre le forum mais réserve les formations aux adhérents', async () => {
    const topic = await request(app).post('/api/forum').set('Authorization', `Bearer ${visitorToken}`)
      .send({ title: 'Question de visiteur', content: 'Comment choisir ma filière après le bac ?', category: 'Études & lycée' });
    expect(topic.status).toBe(201);

    const reg = await request(app).post(`/api/formations/${formation.id}/register`).set('Authorization', `Bearer ${visitorToken}`)
      .send({ name: 'Fatou Ndiaye', email: VISITOR });
    expect(reg.status).toBe(403);
    expect((await request(app).post(`/api/formations/${formation.id}/register`).send({ name: 'Anonyme', email: 'a@visitor.test.com' })).status).toBe(401);
  });

  it("ne compte pas les visiteurs parmi les membres, puis en fait un adhérent après validation", async () => {
    const { getPlatformCounts } = require('../src/services/platformMetrics');
    const before = await getPlatformCounts();

    const ask = await request(app).post('/api/auth/membership').set('Authorization', `Bearer ${visitorToken}`).send({ motivation: 'Je veux suivre les formations' });
    expect(ask.status).toBe(201);
    expect((await request(app).post('/api/auth/membership').set('Authorization', `Bearer ${visitorToken}`).send({})).body.data.alreadyPending).toBe(true);
    const status = (await request(app).get('/api/auth/membership').set('Authorization', `Bearer ${visitorToken}`)).body.data;
    expect(status).toMatchObject({ isVisitor: true, request: { status: 'PENDING' } });

    const pending = await prisma.membershipRequest.findFirst({ where: { user: { email: VISITOR }, status: 'PENDING' } });
    expect((await request(app).post(`/api/admin/memberships/${pending.id}/approve`).set('Authorization', `Bearer ${ultraToken}`).send({})).status).toBe(200);
    const user = await prisma.user.findUnique({ where: { email: VISITOR } });
    expect(user.role).toBe('MEMBER');
    const after = await getPlatformCounts();
    expect(after.members).toBe(before.members + 1);
    expect(after.visitorAccounts).toBe(before.visitorAccounts - 1);

    const reg = await request(app).post(`/api/formations/${formation.id}/register`).set('Authorization', `Bearer ${signAccessToken(user)}`)
      .send({ name: 'Fatou Ndiaye', email: VISITOR });
    expect(reg.status).toBe(201);
  });
});
