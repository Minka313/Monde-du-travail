const request = require('supertest');
const { app } = require('../src/app');
const { signAccessToken } = require('../src/utils/tokens');
const { createTestUser, cleanupTestUsers, prisma } = require('./helpers/fixtures');

// Adhésions : alerte des validateurs à chaque demande, validation groupée.
const ULTRA = 'ultra@bulk.test.com';
const CANDIDATES = ['a@bulk.test.com', 'b@bulk.test.com', 'c@bulk.test.com'];
const MEMBER = 'member@bulk.test.com';

describe('Adhésions : alerte et validation groupée', () => {
  let ultra, token, memberToken;

  const register = (email) => request(app).post('/api/auth/register').send({
    email, password: 'MotDePasse123', firstName: 'Candidat', lastName: `Nom${email[0].toUpperCase()}`, motivation: 'Je veux progresser',
  });

  beforeAll(async () => {
    ultra = await createTestUser({ email: ULTRA, role: 'ULTRA_ADMIN' });
    token = signAccessToken(ultra);
    memberToken = signAccessToken(await createTestUser({ email: MEMBER }));
    await cleanupTestUsers(CANDIDATES);
  });

  afterAll(async () => {
    await prisma.notification.deleteMany({ where: { userId: ultra.id } });
    await cleanupTestUsers([...CANDIDATES, ULTRA, MEMBER]);
    await prisma.$disconnect();
  });

  it("prévient les validateurs dans l'admin à chaque nouvelle demande", async () => {
    for (const email of CANDIDATES) expect((await register(email)).status).toBe(201);
    const alerts = await prisma.notification.findMany({ where: { userId: ultra.id, title: { contains: "Nouvelle demande d'adhésion" } } });
    expect(alerts.length).toBeGreaterThanOrEqual(3);
  });

  it('approuve plusieurs demandes en une fois et ignore celles déjà traitées', async () => {
    const pending = await prisma.membershipRequest.findMany({ where: { user: { email: { in: CANDIDATES } }, status: 'PENDING' } });
    expect(pending).toHaveLength(3);
    const ids = pending.slice(0, 2).map((m) => m.id);

    expect((await request(app).post('/api/admin/memberships/approve-bulk').set('Authorization', `Bearer ${memberToken}`).send({ ids })).status).toBe(403);

    const res = await request(app).post('/api/admin/memberships/approve-bulk').set('Authorization', `Bearer ${token}`).send({ ids: [...ids, ids[0]] });
    expect(res.status).toBe(200);
    expect(res.body.data).toEqual({ approved: 2, skipped: 0 });
    const users = await prisma.user.findMany({ where: { email: { in: CANDIDATES } }, select: { email: true, isActive: true } });
    expect(users.filter((u) => u.isActive)).toHaveLength(2);

    const again = await request(app).post('/api/admin/memberships/approve-bulk').set('Authorization', `Bearer ${token}`).send({ ids });
    expect(again.body.data).toEqual({ approved: 0, skipped: 2 });
    expect((await request(app).post('/api/admin/memberships/approve-bulk').set('Authorization', `Bearer ${token}`).send({ ids: [] })).status).toBe(400);
  });
});
