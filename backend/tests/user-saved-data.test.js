const request = require('supertest');
const { app } = require('../src/app');
const { signAccessToken } = require('../src/utils/tokens');
const { createTestUser, cleanupTestUsers, prisma } = require('./helpers/fixtures');

// Favoris, résultat RIASEC et dossiers cochés retrouvés sur tous les appareils d'un compte.
const EMAILS = ['a@saved.test.com', 'b@saved.test.com'];

describe('Données personnelles synchronisées', () => {
  let tokenA, tokenB;
  const as = (t) => ({ Authorization: `Bearer ${t}` });

  beforeAll(async () => {
    const [a, b] = await Promise.all([createTestUser({ email: EMAILS[0], role: 'VISITOR' }), createTestUser({ email: EMAILS[1] })]);
    [tokenA, tokenB] = [a, b].map(signAccessToken);
  });

  afterAll(async () => {
    await cleanupTestUsers(EMAILS);
    await prisma.$disconnect();
  });

  it('enregistre, relit et supprime les données du compte, visiteur compris', async () => {
    expect((await request(app).get('/api/me/data')).status).toBe(401);
    const saved = await request(app).put('/api/me/data').set(as(tokenA)).send({ entries: [
      { key: 'opp:favorites', value: ['opp1', 'opp2'] },
      { key: 'lmdt_riasec_result', value: { code: 'SEC', date: '2026-10-29T10:00:00Z' } },
      { key: 'opp:docs:opp1', value: [0, 2] },
    ] });
    expect(saved.status).toBe(200);
    const list = (await request(app).get('/api/me/data').set(as(tokenA))).body.data;
    expect(Object.fromEntries(list.map((r) => [r.key, r.value]))).toMatchObject({ 'opp:favorites': ['opp1', 'opp2'], 'lmdt_riasec_result': { code: 'SEC' } });

    await request(app).put('/api/me/data').set(as(tokenA)).send({ entries: [{ key: 'opp:docs:opp1', value: null }] });
    expect((await request(app).get('/api/me/data').set(as(tokenA))).body.data.map((r) => r.key)).not.toContain('opp:docs:opp1');

    // Chaque compte ne voit que ses propres données
    expect((await request(app).get('/api/me/data').set(as(tokenB))).body.data).toEqual([]);
  });

  it('refuse les clés hors liste et les valeurs trop lourdes', async () => {
    expect((await request(app).put('/api/me/data').set(as(tokenA)).send({ entries: [{ key: 'accessToken', value: 'x' }] })).status).toBe(400);
    expect((await request(app).put('/api/me/data').set(as(tokenA)).send({ entries: [{ key: 'opp:favorites', value: 'x'.repeat(7000) }] })).status).toBe(400);
  });
});
