const request = require('supertest');
const { app } = require('../src/app');
const { signAccessToken } = require('../src/utils/tokens');
const { createTestUser, cleanupTestUsers, prisma } = require('./helpers/fixtures');
const StatsController = require('../src/controllers/statsController');

// Un même indicateur affiche la même valeur sur le site public et dans le tableau de bord admin.
const EMAIL = 'ultra@metrics.test.com';

describe('Chiffres de la plateforme', () => {
  let token;

  beforeAll(async () => {
    token = signAccessToken(await createTestUser({ email: EMAIL, role: 'ULTRA_ADMIN' }));
  });

  afterAll(async () => {
    await cleanupTestUsers([EMAIL]);
    await prisma.$disconnect();
  });

  it('donne les mêmes valeurs au site public et au tableau de bord', async () => {
    StatsController.invalidateCache();
    const pub = (await request(app).get('/api/stats')).body.data;
    const admin = (await request(app).get('/api/super-dashboard/stats').set('Authorization', `Bearer ${token}`)).body.data;

    expect(admin.totalJobsCatalog).toBe(pub.jobs);
    expect(admin.publishedJobs).toBe(pub.jobs);
    expect(admin.publishedFormations).toBe(pub.formations);
    expect(admin.publishedPosts).toBe(pub.articles);
    expect(admin.totalTopics).toBe(pub.topics);
    expect(admin.totalMentors).toBe(pub.mentors);
    expect(admin.activeUsers).toBe(pub.members);
    expect(pub.totalTraining).toBe(pub.formations + pub.events);
    expect(pub.totalOrientationGuides).toBe(pub.jobs + pub.articles);
  });

  it('ne compte pas deux fois les fiches métiers du catalogue', async () => {
    StatsController.invalidateCache();
    const pub = (await request(app).get('/api/stats')).body.data;
    expect(pub.jobs).toBe(await prisma.job.count({ where: { status: 'PUBLISHED' } }));
  });

  it("compte toutes les visites, au-delà de l'ancien échantillon de 1 000", async () => {
    const visitor = (i) => ({ module: 'analytics', action: 'site.visit', result: 'SUCCESS', resource: i % 2 ? '/about' : '/about.html', metadata: { visitorId: `v-metrics-${i % 7}`, device: 'mobile' } });
    await prisma.auditLog.createMany({ data: Array.from({ length: 1205 }, (_, i) => visitor(i)) });
    try {
      const AnalyticsService = require('../src/services/analyticsService');
      AnalyticsService.invalidateCache();
      const before = await prisma.auditLog.count({ where: { module: 'analytics', action: 'site.visit' } });
      const res = await request(app).get('/api/analytics/overview').set('Authorization', `Bearer ${token}`);
      const s = (res.body.data || await AnalyticsService.getVisitorStats()).summary;
      expect(s.allTime.totalVisits).toBe(before);
      expect(s.today.visits).toBeGreaterThanOrEqual(1205);
      const about = (res.body.data || {}).topPages?.find((p) => p.path === '/about');
      if (about) expect(about.views).toBeGreaterThanOrEqual(1205);
    } finally {
      await prisma.auditLog.deleteMany({ where: { module: 'analytics', action: 'site.visit', metadata: { path: ['visitorId'], string_starts_with: 'v-metrics-' } } });
    }
  });
});
