const request = require('supertest');
const { app } = require('../src/app');
const { createTestUser, cleanupTestUsers, prisma } = require('./helpers/fixtures');
const { expectedSessionAt, isSessionReminderDue } = require('../src/services/opportunityService');

// Concours annuels : l'équipe est prévenue 30 jours avant la session suivante attendue.
const EMAILS = ['ultra@remind.test.com', 'oppadmin@remind.test.com', 'blogadmin@remind.test.com'];
const TAG = '[REMIND-TEST]';
const DAY = 86400000;
const ago = (days) => new Date(Date.now() - days * DAY);

describe('Rappels de nouvelle session', () => {
  let ultra, oppAdmin, blogAdmin;

  const make = (data) => prisma.opportunity.create({
    data: { organization: 'Ministère', category: 'CONCOURS', summary: 'Concours annuel.', status: 'PUBLISHED', recurring: true, ...data, title: `${TAG} ${data.title}` },
  });
  const remindersFor = (userId) => prisma.notification.findMany({ where: { userId, dedupeKey: { startsWith: 'OPPORTUNITY:SESSION:' } } });

  beforeAll(async () => {
    ultra = await createTestUser({ email: EMAILS[0], role: 'ULTRA_ADMIN' });
    oppAdmin = await createTestUser({ email: EMAILS[1], role: 'MEMBER', adminRole: 'ADMIN_OPPORTUNITE' });
    blogAdmin = await createTestUser({ email: EMAILS[2], role: 'MEMBER', adminRole: 'ADMIN_BLOG' });
    await prisma.opportunity.deleteMany({ where: { title: { startsWith: TAG } } });
  });

  afterAll(async () => {
    await prisma.notification.deleteMany({ where: { dedupeKey: { startsWith: 'OPPORTUNITY:SESSION:' } } });
    await prisma.opportunity.deleteMany({ where: { title: { startsWith: TAG } } });
    await cleanupTestUsers(EMAILS);
    await prisma.$disconnect();
  });

  it("calcule la session attendue un an après l'ouverture précédente", () => {
    const now = new Date('2026-10-28T12:00:00Z');
    const o = { recurring: true, openingDate: new Date('2025-11-15T00:00:00Z'), deadline: new Date('2025-12-31T23:59:59Z') };
    expect(expectedSessionAt(o, now).toISOString().slice(0, 10)).toBe('2026-11-15');
    expect(isSessionReminderDue(o, now)).toBe(true);
    expect(isSessionReminderDue({ ...o, openingDate: new Date('2026-01-15T00:00:00Z'), deadline: new Date('2026-02-01T00:00:00Z') }, now)).toBe(false);
    expect(expectedSessionAt({ ...o, recurring: false }, now)).toBeNull();
    expect(expectedSessionAt({ ...o, deadline: new Date('2026-12-01T00:00:00Z') }, now)).toBeNull();
  });

  it("prévient une seule fois les personnes qui gèrent la rubrique", async () => {
    const dueOpp = await make({ title: 'Concours dû', openingDate: ago(350), deadline: ago(320) });
    await make({ title: 'Concours lointain', openingDate: ago(100), deadline: ago(60) });
    await make({ title: 'Brouillon', openingDate: ago(350), deadline: ago(320), status: 'DRAFT' });

    const first = await request(app).post('/api/opportunities/reminders/run');
    expect(first.status).toBe(200);
    expect(first.body.data.sent).toBeGreaterThanOrEqual(2);

    for (const user of [ultra, oppAdmin]) {
      const list = await remindersFor(user.id);
      expect(list.map((n) => n.message).join(' ')).toContain('Concours dû');
      expect(list.some((n) => n.message.includes('lointain') || n.message.includes('Brouillon'))).toBe(false);
    }
    expect(await remindersFor(blogAdmin.id)).toHaveLength(0);

    const again = await request(app).post('/api/opportunities/reminders/run');
    expect(again.body.data.sent).toBe(0);
    expect((await remindersFor(ultra.id)).filter((n) => n.dedupeKey.includes(dueOpp.id))).toHaveLength(1);
  });
});
