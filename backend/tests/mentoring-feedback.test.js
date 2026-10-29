const request = require('supertest');
const { app } = require('../src/app');
const { signAccessToken } = require('../src/utils/tokens');
const { createTestUser, cleanupTestUsers, prisma } = require('./helpers/fixtures');

// Avis du mentoré après une séance, signalement confidentiel et indicateurs du mentorat.
const EMAILS = ['ultra@mfb.test.com', 'mentor@mfb.test.com', 'mentee@mfb.test.com', 'other@mfb.test.com'];

describe('Mentorat : avis, signalements et indicateurs', () => {
  let ultra, mentor, mentee, other, t, mentorship, past, future;
  const as = (token) => ({ Authorization: `Bearer ${token}` });

  beforeAll(async () => {
    ultra = await createTestUser({ email: EMAILS[0], role: 'ULTRA_ADMIN' });
    mentor = await createTestUser({ email: EMAILS[1], firstName: 'Moussa', lastName: 'Sarr' });
    mentee = await createTestUser({ email: EMAILS[2], firstName: 'Awa', lastName: 'Diop' });
    other = await createTestUser({ email: EMAILS[3] });
    const role = await prisma.adminRole.upsert({
      where: { name: 'MENTOR_EXPERT' }, update: {},
      create: { name: 'MENTOR_EXPERT', description: 'Mentor', isSystem: true, requiresApproval: false },
    });
    await prisma.userAdminRole.create({ data: { userId: mentor.id, adminRoleId: role.id, status: 'APPROVED', reviewedAt: new Date() } });
    mentorship = await prisma.mentorship.create({ data: { mentorId: mentor.id, menteeId: mentee.id, menteeName: 'Awa Diop' } });
    past = await prisma.mentorSession.create({ data: { mentorshipId: mentorship.id, scheduledAt: new Date(Date.now() - 2 * 86400000), format: 'Téléphone' } });
    future = await prisma.mentorSession.create({ data: { mentorshipId: mentorship.id, scheduledAt: new Date(Date.now() + 2 * 86400000), format: 'Visio du club' } });
    await prisma.mentorReport.create({ data: { authorId: mentor.id, kind: 'MENTORAT', mentorshipId: mentorship.id, title: 'Séance', status: 'SUBMITTED', content: { progression: 'En difficulté' } } });
    t = Object.fromEntries([['ultra', ultra], ['mentor', mentor], ['mentee', mentee], ['other', other]].map(([k, u]) => [k, signAccessToken(u)]));
  });

  afterAll(async () => {
    await prisma.notification.deleteMany({ where: { userId: { in: [ultra.id, mentor.id, mentee.id, other.id] } } });
    await cleanupTestUsers(EMAILS);
    await prisma.$disconnect();
  });

  it('demande son avis au mentoré après la séance, une seule fois', async () => {
    const me = (await request(app).get('/api/mentoring/me').set(as(t.mentee))).body.data;
    expect(me.mentorships[0].toReview.map((x) => x.id)).toEqual([past.id]);
    expect(me.mentorships[0].upcomingSessions.map((x) => x.id)).toEqual([future.id]);

    expect((await request(app).post(`/api/mentoring/sessions/${future.id}/feedback`).set(as(t.mentee)).send({ rating: 5 })).status).toBe(400);
    expect((await request(app).post(`/api/mentoring/sessions/${past.id}/feedback`).set(as(t.other)).send({ rating: 5 })).status).toBe(404);
    const ok = await request(app).post(`/api/mentoring/sessions/${past.id}/feedback`).set(as(t.mentee)).send({ rating: 2, comment: 'Mon mentor est arrivé en retard' });
    expect(ok.status).toBe(200);
    expect((await request(app).post(`/api/mentoring/sessions/${past.id}/feedback`).set(as(t.mentee)).send({ rating: 4 })).status).toBe(400);
    expect((await prisma.mentorSession.findUnique({ where: { id: past.id } })).status).toBe('DONE');
    // Le mentor voit la note, pas le commentaire ; la Présidence est alertée d'une mauvaise note
    const mentorNotif = await prisma.notification.findFirst({ where: { userId: mentor.id, title: { contains: 'Avis' } } });
    expect(mentorNotif.message).not.toContain('retard');
    expect(await prisma.notification.count({ where: { userId: ultra.id, title: { contains: 'mal notée' } } })).toBe(1);
    const ctx = (await request(app).get('/api/mentoring/context').set(as(t.mentor))).body.data;
    expect(ctx.mentorships[0].rating).toEqual({ average: 2, count: 1 });
    expect(JSON.stringify(ctx)).not.toContain('retard');
  });

  it('transmet un signalement confidentiel à la Présidence seulement', async () => {
    expect((await request(app).post(`/api/mentoring/mentorships/${mentorship.id}/concerns`).set(as(t.mentor)).send({ message: 'Tentative du mentor de signaler' })).status).toBe(404);
    const sent = await request(app).post(`/api/mentoring/mentorships/${mentorship.id}/concerns`).set(as(t.mentee)).send({ message: 'Mon mentor ne répond plus à mes messages depuis un mois.' });
    expect(sent.status).toBe(201);
    expect((await request(app).get('/api/mentoring/concerns').set(as(t.mentor))).status).toBe(403);
    const list = (await request(app).get('/api/mentoring/concerns').set(as(t.ultra))).body.data;
    const c = list.find((x) => x.mentorshipId === mentorship.id);
    expect(c).toMatchObject({ status: 'OPEN', mentor: 'Moussa Sarr', mentee: { fullName: 'Awa Diop' } });
    expect(await prisma.notification.count({ where: { userId: mentor.id, title: { contains: 'Signalement' } } })).toBe(0);
    expect((await request(app).post(`/api/mentoring/concerns/${c.id}/resolve`).set(as(t.ultra)).send({ resolution: 'Appel du mentor, nouveau rythme convenu.' })).status).toBe(200);
    expect(await prisma.notification.count({ where: { userId: mentee.id, title: { contains: 'signalement a été traité' } } })).toBe(1);
  });

  it('donne à la Présidence les indicateurs du mentorat', async () => {
    const { stats } = (await request(app).get('/api/mentoring/context').set(as(t.ultra))).body.data;
    expect(stats.activePairs).toBeGreaterThanOrEqual(1);
    expect(stats.sessionsDone30).toBeGreaterThanOrEqual(1);
    expect(stats.sessionsPlanned).toBeGreaterThanOrEqual(1);
    expect(stats.ratingsCount).toBeGreaterThanOrEqual(1);
    expect(stats.toWatch.map((x) => x.mentorshipId)).toContain(mentorship.id);
    expect((await request(app).get('/api/mentoring/context').set(as(t.mentor))).body.data.stats).toBeNull();
  });
});
