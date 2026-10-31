const request = require('supertest');
const { app } = require('../src/app');
const { signAccessToken } = require('../src/utils/tokens');
const { createTestUser, cleanupTestUsers, prisma } = require('./helpers/fixtures');

// Document de référence du club : lu par le bureau, modifié par la Présidence,
// jamais exposé par les réglages publics.
const EMAILS = ['president@cdoc.test.com', 'secretaire@cdoc.test.com', 'membre@cdoc.test.com'];
const KEY = 'club.reference_document';
const TAG = '[CDOC-TEST]';

describe('Document de référence du club', () => {
  const tokens = {};
  const api = (method, url, who) => request(app)[method](`/api/reports/club-document${url}`).set('Authorization', `Bearer ${tokens[who]}`);

  beforeAll(async () => {
    await prisma.setting.deleteMany({ where: { key: KEY } });
    const president = await createTestUser({ email: EMAILS[0], role: 'ULTRA_ADMIN', firstName: 'Awa', lastName: 'Présidente' });
    const secretaire = await createTestUser({ email: EMAILS[1], firstName: 'Fatou', lastName: 'Secrétaire' });
    const membre = await createTestUser({ email: EMAILS[2], firstName: 'Simple', lastName: 'Membre' });
    const position = await prisma.clubPosition.create({ data: { title: `${TAG} Secrétariat` } });
    await prisma.clubAssignment.create({ data: { positionId: position.id, userId: secretaire.id } });
    Object.assign(tokens, { president: signAccessToken(president), secretaire: signAccessToken(secretaire), membre: signAccessToken(membre) });
  });

  afterAll(async () => {
    await prisma.setting.deleteMany({ where: { key: KEY } });
    await cleanupTestUsers(EMAILS);
    await prisma.clubPosition.deleteMany({ where: { title: { startsWith: TAG } } });
    await prisma.$disconnect();
  });

  it('sert la version d\'origine aux membres du bureau, en lecture seule', async () => {
    const res = await api('get', '', 'secretaire');
    expect(res.status).toBe(200);
    expect(res.body.data.isDefault).toBe(true);
    expect(res.body.data.canEdit).toBe(false);
    expect(res.body.data.content).toMatch(/^titre: Le Monde du Travail/);
  });

  it('refuse le document aux adhérents hors bureau', async () => {
    expect((await api('get', '', 'membre')).status).toBe(403);
  });

  it('réserve la modification à la Présidence', async () => {
    expect((await api('put', '', 'secretaire').send({ content: '# Essai' })).status).toBe(403);
    const res = await api('put', '', 'president').send({ content: 'titre: Essai\n---\n# Partie\r\nTexte' });
    expect(res.status).toBe(200);
    expect(res.body.data).toMatchObject({ isDefault: false, updatedBy: 'Awa Présidente', hasPrevious: true, canEdit: true });
    expect(res.body.data.content).toBe('titre: Essai\n---\n# Partie\nTexte');
    expect((await api('get', '', 'secretaire')).body.data.content).toMatch(/^titre: Essai/);
  });

  it('refuse un document vide', async () => {
    expect((await api('put', '', 'president').send({ content: '   ' })).status).toBe(400);
  });

  it('revient à la version précédente, puis de nouveau à la plus récente', async () => {
    const back = await api('post', '/restore', 'president');
    expect(back.status).toBe(200);
    expect(back.body.data.isDefault).toBe(true);
    expect(back.body.data.hasPrevious).toBe(true);
    const again = await api('post', '/restore', 'president');
    expect(again.body.data.content).toMatch(/^titre: Essai/);
    expect((await api('post', '/restore', 'secretaire')).status).toBe(403);
  });

  it('n\'apparaît ni dans les réglages publics ni dans la page Paramètres', async () => {
    const pub = await request(app).get('/api/settings/public');
    expect(JSON.stringify(pub.body)).not.toContain(KEY);
    expect((await request(app).get(`/api/settings/public/${KEY}`)).status).toBe(404);
    const all = await request(app).get('/api/settings').set('Authorization', `Bearer ${tokens.president}`);
    expect(JSON.stringify(all.body)).not.toContain(KEY);
  });
});
