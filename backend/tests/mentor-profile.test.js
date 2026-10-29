const request = require('supertest');
const { app } = require('../src/app');
const { signAccessToken } = require('../src/utils/tokens');
const { createTestUser, cleanupTestUsers, prisma } = require('./helpers/fixtures');

// Profil du mentor : rempli par le mentor (pré-rempli par sa candidature), présenté à ses mentorés.
const EMAILS = ['ultra@mprof.test.com', 'mentor@mprof.test.com', 'mentee@mprof.test.com'];

describe('Profil du mentor', () => {
  let ultra, mentor, mentee, t;
  const as = (token) => ({ Authorization: `Bearer ${token}` });

  beforeAll(async () => {
    ultra = await createTestUser({ email: EMAILS[0], role: 'ULTRA_ADMIN' });
    mentor = await createTestUser({ email: EMAILS[1], firstName: 'Moussa', lastName: 'Sarr' });
    mentee = await createTestUser({ email: EMAILS[2], firstName: 'Awa', lastName: 'Diop' });
    const role = await prisma.adminRole.upsert({
      where: { name: 'MENTOR_EXPERT' }, update: {},
      create: { name: 'MENTOR_EXPERT', description: 'Mentor', isSystem: true, requiresApproval: false },
    });
    await prisma.userAdminRole.create({ data: { userId: mentor.id, adminRoleId: role.id, status: 'APPROVED', reviewedAt: new Date() } });
    await prisma.mentorApplication.create({ data: { userId: mentor.id, fullName: 'Moussa Sarr', email: EMAILS[1], profession: 'Ingénieur BTP', domains: 'BTP, concours', motivation: 'Transmettre', status: 'ACCEPTED' } });
    await prisma.mentorship.create({ data: { mentorId: mentor.id, menteeId: mentee.id, menteeName: 'Awa Diop' } });
    t = { ultra: signAccessToken(ultra), mentor: signAccessToken(mentor), mentee: signAccessToken(mentee) };
  });

  afterAll(async () => {
    await prisma.mentorApplication.deleteMany({ where: { email: { in: EMAILS } } });
    await cleanupTestUsers(EMAILS);
    await prisma.$disconnect();
  });

  it('pré-remplit le profil avec la candidature puis l\'enregistre', async () => {
    expect((await request(app).get('/api/mentoring/profile').set(as(t.mentee))).status).toBe(403);
    const draft = (await request(app).get('/api/mentoring/profile').set(as(t.mentor))).body.data;
    expect(draft).toMatchObject({ headline: 'Ingénieur BTP', domains: 'BTP, concours', draft: true, complete: false });
    expect((await request(app).put('/api/mentoring/profile').set(as(t.mentor)).send({ linkedinUrl: 'javascript:alert(1)' })).status).toBe(400);
    const saved = await request(app).put('/api/mentoring/profile').set(as(t.mentor)).send({
      headline: 'Ingénieur BTP', organization: 'Eiffage Sénégal', domains: 'BTP, concours', bio: 'Ancien élève du LYNAQE, je travaille sur les chantiers de Dakar.', linkedinUrl: 'https://linkedin.com/in/msarr', city: 'Dakar',
    });
    expect(saved.status).toBe(200);
    expect(saved.body.data.complete).toBe(true);
  });

  it('présente le profil au mentoré et à la Présidence, sans coordonnées', async () => {
    const me = (await request(app).get('/api/mentoring/me').set(as(t.mentee))).body.data;
    expect(me.mentorships[0].mentor.profile).toMatchObject({ headline: 'Ingénieur BTP', organization: 'Eiffage Sénégal', city: 'Dakar' });
    expect(JSON.stringify(me)).not.toContain(EMAILS[1]);
    const mentors = (await request(app).get('/api/mentoring/mentors').set(as(t.ultra))).body.data;
    expect(mentors.find((m) => m.id === mentor.id).profile.bio).toContain('LYNAQE');
  });
});
