const request = require('supertest');
const { app } = require('../src/app');
const { createTestUser, cleanupTestUsers, prisma } = require('./helpers/fixtures');
const EmailService = require('../src/services/emailService');
const OpportunityService = require('../src/services/opportunityService');
const OpportunityAlertService = require('../src/services/opportunityAlertService');
const { dueEvents } = OpportunityAlertService;

// Alertes e-mail des jeunes qui suivent une annonce : confirmation, rappels, désinscription.
const TAG = '[ALERT-TEST]';
const ULTRA = 'ultra@alert.test.com';
const DAY = 86400000;
const inDays = (n) => new Date(Date.now() + n * DAY);

describe('Alertes « Suivre cette annonce »', () => {
  let ultra, mails;

  const make = (data = {}) => prisma.opportunity.create({
    data: { organization: 'Ministère', category: 'CONCOURS', summary: 'Concours.', status: 'PUBLISHED', ...data, title: `${TAG} ${data.title || 'Concours'}` },
  });
  const tokenFrom = (mail, param) => new RegExp(`${param}=([a-f0-9]{48})`).exec(mail.html)[1];

  beforeAll(async () => {
    ultra = await createTestUser({ email: ULTRA, role: 'ULTRA_ADMIN' });
    await prisma.opportunity.deleteMany({ where: { title: { startsWith: TAG } } });
  });

  beforeEach(() => {
    mails = [];
    jest.spyOn(EmailService, 'sendMail').mockImplementation(async (m) => { mails.push(m); return { success: true }; });
  });
  afterEach(() => jest.restoreAllMocks());

  afterAll(async () => {
    await prisma.opportunity.deleteMany({ where: { title: { startsWith: TAG } } });
    await cleanupTestUsers([ULTRA]);
    await prisma.$disconnect();
  });

  it('choisit le rappel le plus urgent et ne le renvoie jamais', () => {
    const now = new Date('2026-11-10T10:00:00Z');
    const o = { id: 'x', openingDate: new Date('2026-11-09T00:00:00Z'), deadline: new Date('2026-11-15T23:59:59Z') };
    expect(dueEvents({ sentKeys: [] }, o, now)).toEqual(['D7:2026-11-15', 'OPEN:2026-11-09']);
    expect(dueEvents({ sentKeys: ['D7:2026-11-15', 'OPEN:2026-11-09'] }, o, now)).toEqual([]);
    expect(dueEvents({ sentKeys: ['D7:2026-11-15'] }, o, new Date('2026-11-14T10:00:00Z'))).toEqual(['D2:2026-11-15']);
    expect(dueEvents({ sentKeys: [] }, o, new Date('2026-11-16T10:00:00Z'))).toEqual([]);
  });

  it("confirme l'adresse, envoie le rappel une seule fois puis permet de se désinscrire", async () => {
    const o = await make({ deadline: inDays(5) });
    const sub = await request(app).post(`/api/opportunities/${o.id}/alerts`).send({ email: ' Jeune@Example.com ' });
    expect(sub.status).toBe(201);
    expect(mails).toHaveLength(1);
    expect(mails[0].to).toBe('jeune@example.com');
    const confirmToken = tokenFrom(mails[0], 'alerte_confirmer');

    // Pas d'alerte tant que l'adresse n'est pas confirmée
    expect((await OpportunityAlertService.sendDueAlerts()).sent).toBe(0);
    expect((await request(app).post('/api/opportunities/alerts/confirm').send({ token: confirmToken })).status).toBe(200);
    expect((await request(app).post(`/api/opportunities/${o.id}/alerts`).send({ email: 'jeune@example.com' })).body.data.status).toBe('ALREADY');

    mails = [];
    const run = await request(app).post('/api/opportunities/reminders/run');
    expect(run.body.data.alerts.sent).toBeGreaterThanOrEqual(1);
    const reminder = mails.find((m) => m.to === 'jeune@example.com');
    expect(reminder.subject).toContain('J-5');
    mails = [];
    await OpportunityAlertService.sendDueAlerts();
    expect(mails.filter((m) => m.to === 'jeune@example.com')).toHaveLength(0);

    const off = await request(app).post('/api/opportunities/alerts/unsubscribe').send({ token: tokenFrom(reminder, 'alerte_arreter') });
    expect(off.status).toBe(200);
    expect(await prisma.opportunityAlert.count({ where: { opportunityId: o.id } })).toBe(0);
    expect((await request(app).post('/api/opportunities/alerts/unsubscribe').send({ token: 'a'.repeat(48) })).status).toBe(400);
  });

  it('refuse les annonces non publiées et les adresses invalides', async () => {
    const draft = await make({ title: 'Brouillon', status: 'DRAFT' });
    expect((await request(app).post(`/api/opportunities/${draft.id}/alerts`).send({ email: 'a@example.com' })).status).toBe(404);
    expect((await request(app).post(`/api/opportunities/${draft.id}/alerts`).send({ email: 'pas-une-adresse' })).status).toBe(400);
  });

  it('reprend les personnes abonnées dans la nouvelle session et les prévient à sa publication', async () => {
    const old = await make({ title: 'Session 2025', recurring: true, deadline: inDays(-200) });
    await prisma.opportunityAlert.create({ data: { opportunityId: old.id, email: 'suivi@example.com', token: 'b'.repeat(48), confirmedAt: new Date() } });
    const next = await OpportunityService.duplicate(old.id, ultra.id);
    expect(await prisma.opportunityAlert.count({ where: { opportunityId: next.id, announceSession: true } })).toBe(1);

    await OpportunityAlertService.sendDueAlerts();
    expect(mails.filter((m) => m.to === 'suivi@example.com')).toHaveLength(0); // brouillon : rien

    await prisma.opportunity.update({ where: { id: next.id }, data: { status: 'PUBLISHED' } });
    await OpportunityAlertService.sendDueAlerts();
    const sent = mails.filter((m) => m.to === 'suivi@example.com');
    expect(sent).toHaveLength(1);
    expect(sent[0].subject).toContain('Nouvelle session');
    await OpportunityAlertService.sendDueAlerts();
    expect(mails.filter((m) => m.to === 'suivi@example.com')).toHaveLength(1);
  });
});
