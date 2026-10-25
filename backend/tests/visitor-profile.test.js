const request = require('supertest');
const { app } = require('../src/app');
const { signAccessToken } = require('../src/utils/tokens');
const { createTestUser, cleanupTestUsers, prisma } = require('./helpers/fixtures');

// Profils visiteurs anonymes : localisation fournie par l'hébergeur, fréquentation,
// profil déclaré facultatif et tableau de bord réservé à l'administration.
const SESSION = 'vp-test-session-0001';
const SESSION_2 = 'vp-test-session-0002';
const SESSION_3 = 'vp-test-session-0003';
const EMAILS = ['ultra@vp.test.com', 'member@vp.test.com'];

describe('Profils visiteurs', () => {
  let ultraToken, memberToken;

  beforeAll(async () => {
    await prisma.visitorProfile.deleteMany({ where: { sessionId: { in: [SESSION, SESSION_2, SESSION_3] } } });
    ultraToken = signAccessToken(await createTestUser({ email: EMAILS[0], role: 'ULTRA_ADMIN' }));
    memberToken = signAccessToken(await createTestUser({ email: EMAILS[1] }));
  });

  afterAll(async () => {
    await prisma.visitorProfile.deleteMany({ where: { sessionId: { in: [SESSION, SESSION_2, SESSION_3] } } });
    await prisma.analyticsEvent.deleteMany({ where: { sessionId: { in: [SESSION, SESSION_2, SESSION_3] } } });
    await cleanupTestUsers(EMAILS);
    await prisma.$disconnect();
  });

  const visit = (sessionId, headers = {}) => request(app).post('/api/analytics/track').set(headers)
    .send({ visitorId: 'v1', sessionId, path: '/job.html', device: 'mobile' });

  // L'enregistrement est asynchrone : on attend qu'il soit visible
  async function profileOf(sessionId, predicate) {
    for (let i = 0; i < 20; i += 1) {
      const p = await prisma.visitorProfile.findUnique({ where: { sessionId } });
      if (p && (!predicate || predicate(p))) return p;
      await new Promise((r) => setTimeout(r, 50));
    }
    return prisma.visitorProfile.findUnique({ where: { sessionId } });
  }

  it('crée le profil à la première visite avec la localisation de l\'hébergeur, sans IP', async () => {
    await visit(SESSION, { 'x-vercel-ip-country': 'SN', 'x-vercel-ip-country-region': 'DK', 'x-vercel-ip-city': 'Dakar', 'x-forwarded-for': '41.82.10.20' }).expect(200);
    const p = await profileOf(SESSION);
    expect(p).toMatchObject({ country: 'SN', region: 'DK', city: 'Dakar', device: 'mobile', pagesCount: 1, visitsCount: 1 });
    expect(JSON.stringify(p)).not.toContain('41.82');
  });

  it('décode les villes accentuées et compte les pages', async () => {
    await visit(SESSION, { 'x-vercel-ip-country': 'SN', 'x-vercel-ip-city': encodeURIComponent('Thiès') }).expect(200);
    const p = await profileOf(SESSION, (x) => x.pagesCount === 2);
    expect(p.city).toBe('Thiès');
    expect(p.visitsCount).toBe(1);
  });

  it('ignore les identifiants de session invalides', async () => {
    await visit('<script>').expect(200);
    expect(await prisma.visitorProfile.count({ where: { sessionId: '<script>' } })).toBe(0);
  });

  it('ajoute le temps passé envoyé en texte brut (sendBeacon) et plafonne les valeurs', async () => {
    await request(app).post('/api/analytics/engagement').set('Content-Type', 'text/plain')
      .send(JSON.stringify({ sessionId: SESSION, seconds: 95 })).expect(204);
    await request(app).post('/api/analytics/engagement').send({ sessionId: SESSION, seconds: 999999 }).expect(204);
    const p = await prisma.visitorProfile.findUnique({ where: { sessionId: SESSION } });
    expect(p.totalSeconds).toBe(95 + 1800);
  });

  it('enregistre un profil déclaré et rejette les valeurs inconnues', async () => {
    const ok = await request(app).post('/api/analytics/visitor-profile').send({
      sessionId: SESSION, status: 'Lycéen', educationLevel: 'Terminale / Bac',
      interests: ['Numérique & IA', 'Santé', 'Inconnu', 'Santé', 'Arts & culture', 'Finance & banque'],
    });
    expect(ok.status).toBe(200);
    expect(ok.body.data.interests).toEqual(['Numérique & IA', 'Santé', 'Arts & culture']);
    expect((await request(app).post('/api/analytics/visitor-profile').send({ sessionId: SESSION, status: 'Astronaute' })).status).toBe(400);
  });

  it("rend au membre connecté le profil déjà déclaré, pour ne pas le redemander sur un autre appareil", async () => {
    expect((await request(app).get('/api/analytics/visitor-profile/me')).status).toBe(401);
    const before = await request(app).get('/api/analytics/visitor-profile/me').set('Authorization', `Bearer ${memberToken}`);
    expect(before.status).toBe(200);
    expect(before.body.data).toBeNull();

    await request(app).post('/api/analytics/visitor-profile').set('Authorization', `Bearer ${memberToken}`)
      .send({ sessionId: SESSION_3, status: 'Lycéen', educationLevel: 'Terminale / Bac', interests: ['Santé'] })
      .expect(200);
    const after = await request(app).get('/api/analytics/visitor-profile/me').set('Authorization', `Bearer ${memberToken}`);
    expect(after.body.data).toMatchObject({ status: 'Lycéen', educationLevel: 'Terminale / Bac', interests: ['Santé'] });
  });

  it('publie la liste des choix proposés', async () => {
    const res = await request(app).get('/api/analytics/visitor-options');
    expect(res.body.data.statuses).toContain('Parent');
    expect(res.body.data.interests.length).toBeGreaterThan(10);
  });

  it('réserve le tableau de bord à l\'administration', async () => {
    expect((await request(app).get('/api/analytics/profiles')).status).toBe(401);
    expect((await request(app).get('/api/analytics/profiles').set('Authorization', `Bearer ${memberToken}`)).status).toBe(403);
  });

  it('agrège profils, intérêts, localisation et contenus consultés', async () => {
    await prisma.analyticsEvent.create({ data: { sessionId: SESSION, userProfile: 'Lycéen', eventType: 'job_view', entityType: 'job', entityId: 'developpeur-backend' } });
    await prisma.analyticsEvent.create({ data: { sessionId: SESSION, userProfile: 'Lycéen', eventType: 'formation_pdf', entityType: 'formation', entityId: 'gestion-de-projet' } });
    await visit(SESSION_2, { 'x-vercel-ip-country': 'CI', 'x-vercel-ip-city': 'Abidjan' }).expect(200);
    await profileOf(SESSION_2);

    const res = await request(app).get('/api/analytics/profiles?days=7').set('Authorization', `Bearer ${ultraToken}`);
    expect(res.status).toBe(200);
    const d = res.body.data;
    expect(d.days).toBe(7);
    expect(d.kpis.visitors).toBeGreaterThanOrEqual(2);
    expect(d.kpis.profiled).toBeGreaterThanOrEqual(1);
    expect(d.kpis.pdfDownloads).toBeGreaterThanOrEqual(1);
    expect(d.byStatus.find((x) => x.label === 'Lycéen').count).toBeGreaterThanOrEqual(1);
    expect(d.byInterest.map((x) => x.label)).toContain('Numérique & IA');
    expect(d.byCountry.map((x) => x.label)).toEqual(expect.arrayContaining(['SN', 'CI']));
    const lyceen = d.contentByProfile.find((x) => x.profile === 'Lycéen');
    expect(lyceen.jobs[0]).toMatchObject({ id: 'developpeur-backend', title: 'Developpeur backend' });
  });

  it('compte les profils RIASEC obtenus au test d\'orientation', async () => {
    await prisma.analyticsEvent.createMany({ data: [
      { sessionId: SESSION, eventType: 'riasec_result', entityType: 'riasec', entityId: 'IRC' },
      { sessionId: SESSION_2, eventType: 'riasec_result', entityType: 'riasec', entityId: 'ISA' },
      { sessionId: SESSION_2, eventType: 'riasec_result', entityType: 'riasec', entityId: '<x>' },
    ] });
    const d = (await request(app).get('/api/analytics/profiles?days=7').set('Authorization', `Bearer ${ultraToken}`)).body.data;
    expect(d.riasec.tests).toBeGreaterThanOrEqual(2);
    expect(d.riasec.byType.find((x) => x.label === 'I').count).toBeGreaterThanOrEqual(2);
    expect(d.riasec.topCodes.map((x) => x.label)).toEqual(expect.arrayContaining(['IRC', 'ISA']));
    expect(d.riasec.topCodes.map((x) => x.label)).not.toContain('<x>');
  });
});
