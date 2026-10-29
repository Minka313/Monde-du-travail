const request = require('supertest');
const { app } = require('../src/app');
const { signAccessToken } = require('../src/utils/tokens');
const { createTestUser, cleanupTestUsers, prisma } = require('./helpers/fixtures');
const EmailService = require('../src/services/emailService');
const MentoringService = require('../src/services/mentoringService');

// Séances planifiées (rappel la veille, visio de la séance) et candidatures « Devenir mentor ».
const EMAILS = ['ultra@msess.test.com', 'mentor@msess.test.com', 'mentee@msess.test.com', 'other@msess.test.com', 'candidat@msess.test.com', 'nouveau@msess.test.com'];

describe('Mentorat : séances et candidatures', () => {
  let ultra, mentor, mentee, other, candidate, t, mentorship, mails;
  const as = (token) => ({ Authorization: `Bearer ${token}` });
  const inHours = (h) => new Date(Date.now() + h * 3600000).toISOString();

  beforeAll(async () => {
    ultra = await createTestUser({ email: EMAILS[0], role: 'ULTRA_ADMIN' });
    mentor = await createTestUser({ email: EMAILS[1], firstName: 'Moussa', lastName: 'Sarr' });
    mentee = await createTestUser({ email: EMAILS[2], firstName: 'Awa', lastName: 'Diop' });
    other = await createTestUser({ email: EMAILS[3] });
    candidate = await createTestUser({ email: EMAILS[4], role: 'VISITOR', firstName: 'Fatou', lastName: 'Ndiaye' });
    await cleanupTestUsers([EMAILS[5]]);
    const role = await prisma.adminRole.upsert({
      where: { name: 'MENTOR_EXPERT' }, update: {},
      create: { name: 'MENTOR_EXPERT', description: 'Mentor', isSystem: true, requiresApproval: false },
    });
    await prisma.userAdminRole.create({ data: { userId: mentor.id, adminRoleId: role.id, status: 'APPROVED', reviewedAt: new Date() } });
    mentorship = await prisma.mentorship.create({ data: { mentorId: mentor.id, menteeId: mentee.id, menteeName: 'Awa Diop', goals: 'Préparer le concours' } });
    t = Object.fromEntries([['ultra', ultra], ['mentor', mentor], ['mentee', mentee], ['other', other], ['candidate', candidate]].map(([k, u]) => [k, signAccessToken(u)]));
    await prisma.mentorApplication.deleteMany({ where: { email: { in: EMAILS } } });
  });

  beforeEach(() => {
    mails = [];
    jest.spyOn(EmailService, 'sendMail').mockImplementation(async (m) => { mails.push(m); return { success: true }; });
  });
  afterEach(() => jest.restoreAllMocks());

  afterAll(async () => {
    await prisma.mentorApplication.deleteMany({ where: { email: { in: EMAILS } } });
    await prisma.notification.deleteMany({ where: { userId: { in: [ultra.id, mentor.id, mentee.id, other.id, candidate.id] } } });
    await cleanupTestUsers(EMAILS);
    await prisma.$disconnect();
  });

  it('planifie une séance visible du mentoré, et la protège des autres membres', async () => {
    expect((await request(app).post(`/api/mentoring/mentorships/${mentorship.id}/sessions`).set(as(t.other)).send({ scheduledAt: inHours(20), format: 'Visio du club' })).status).toBe(403);
    const created = await request(app).post(`/api/mentoring/mentorships/${mentorship.id}/sessions`).set(as(t.mentor))
      .send({ scheduledAt: inHours(20), durationMinutes: 45, format: 'Visio du club', topic: 'Méthode de révision' });
    expect(created.status).toBe(201);
    expect(created.body.data.visioUrl).toContain('seance=');
    expect(await prisma.notification.count({ where: { userId: mentee.id, title: { contains: 'Séance de mentorat planifiée' } } })).toBe(1);

    const mine = (await request(app).get('/api/mentoring/me').set(as(t.mentee))).body.data;
    expect(mine.mentorships[0].upcomingSessions[0]).toMatchObject({ format: 'Visio du club', topic: 'Méthode de révision', durationMinutes: 45 });

    const id = created.body.data.id;
    expect((await request(app).get(`/api/mentoring/sessions/${id}/visio`).set(as(t.other))).status).toBe(403);
    const room = (await request(app).get(`/api/mentoring/sessions/${id}/visio`).set(as(t.mentee))).body.data;
    expect(room).toMatchObject({ visioStatus: 'INACTIVE', isModerator: false });
    expect((await request(app).post(`/api/mentoring/sessions/${id}/visio/start`).set(as(t.mentee))).status).toBe(403);
    const open = await request(app).post(`/api/mentoring/sessions/${id}/visio/start`).set(as(t.mentor));
    expect(open.status).toBe(200);
    expect(open.body.data).toMatchObject({ visioStatus: 'LIVE', isModerator: true });
    expect((await request(app).get(`/api/mentoring/sessions/${id}/visio`).set(as(t.mentee))).body.data.visioStatus).toBe('LIVE');
  });

  it('envoie un seul rappel la veille, et prévient le mentoré en cas d\'annulation', async () => {
    const first = await MentoringService.sendSessionReminders();
    expect(first.due).toBeGreaterThanOrEqual(1);
    expect(mails.filter((m) => m.to === EMAILS[2])).toHaveLength(1);
    expect(mails.find((m) => m.to === EMAILS[2]).subject).toContain('Rappel');
    expect(await prisma.notification.count({ where: { userId: mentor.id, title: { contains: 'Séance de mentorat demain' } } })).toBe(1);
    await MentoringService.sendSessionReminders();
    expect(mails.filter((m) => m.to === EMAILS[2])).toHaveLength(1);

    const session = await prisma.mentorSession.findFirst({ where: { mentorshipId: mentorship.id } });
    const cancel = await request(app).put(`/api/mentoring/sessions/${session.id}`).set(as(t.mentor)).send({ status: 'CANCELLED' });
    expect(cancel.status).toBe(200);
    expect(await prisma.notification.count({ where: { userId: mentee.id, title: { contains: 'annulée' } } })).toBe(1);
    expect((await request(app).get('/api/mentoring/me').set(as(t.mentee))).body.data.mentorships[0].upcomingSessions).toHaveLength(0);
  });

  it('reçoit une candidature de mentor et attribue le rôle à l\'acceptation', async () => {
    const payload = { fullName: 'Fatou Ndiaye', email: EMAILS[4], profession: 'Ingénieure géomètre', domains: 'BTP, topographie', motivation: 'Je veux transmettre aux lycéens ce que j\'aurais aimé savoir à leur âge.', consent: true };
    expect((await request(app).post('/api/mentor-applications').send({ ...payload, consent: false })).status).toBe(400);
    const sent = await request(app).post('/api/mentor-applications').set(as(t.candidate)).send(payload);
    expect(sent.status).toBe(201);
    expect((await request(app).post('/api/mentor-applications').send(payload)).body.data.alreadyPending).toBe(true);
    expect(await prisma.notification.count({ where: { userId: ultra.id, title: { contains: 'Candidature de mentor' } } })).toBe(1);

    expect((await request(app).get('/api/mentoring/applications').set(as(t.mentor))).status).toBe(403);
    const list = (await request(app).get('/api/mentoring/applications').set(as(t.ultra))).body.data;
    const app1 = list.find((a) => a.email === EMAILS[4]);
    expect(app1).toMatchObject({ status: 'PENDING', hasAccount: true });

    const ok = await request(app).post(`/api/mentoring/applications/${app1.id}/decision`).set(as(t.ultra)).send({ decision: 'ACCEPTED' });
    expect(ok.status).toBe(200);
    const roles = await prisma.userAdminRole.findMany({ where: { userId: candidate.id, status: 'APPROVED' }, include: { role: true } });
    expect(roles.map((r) => r.role.name)).toContain('MENTOR_EXPERT');
    expect((await prisma.user.findUnique({ where: { id: candidate.id } })).role).toBe('MEMBER');
    expect(mails.find((m) => m.to === EMAILS[4]).subject).toContain('acceptée');
  });

  it("attribue le rôle à la première connexion quand le candidat n'avait pas de compte", async () => {
    await request(app).post('/api/mentor-applications').send({ fullName: 'Ibrahima Ba', email: EMAILS[5], profession: 'Comptable', domains: 'Finance', motivation: 'Accompagner les jeunes vers les métiers de la finance au Sénégal.', consent: true });
    const a = await prisma.mentorApplication.findFirst({ where: { email: EMAILS[5] } });
    await request(app).post(`/api/mentoring/applications/${a.id}/decision`).set(as(t.ultra)).send({ decision: 'ACCEPTED', response: 'Bienvenue !' });
    expect((await prisma.mentorApplication.findUnique({ where: { id: a.id } })).roleGrantedAt).toBeNull();

    const user = await createTestUser({ email: EMAILS[5], role: 'VISITOR' });
    const login = await request(app).post('/api/auth/login').send({ email: EMAILS[5], password: require('./helpers/fixtures').TEST_PASSWORD });
    expect(login.status).toBe(200);
    expect(login.body.data.user.role).toBe('MEMBER');
    const roles = await prisma.userAdminRole.findMany({ where: { userId: user.id, status: 'APPROVED' }, include: { role: true } });
    expect(roles.map((r) => r.role.name)).toContain('MENTOR_EXPERT');
  });
});
