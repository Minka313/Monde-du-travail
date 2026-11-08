const request = require('supertest');
const { app } = require('../src/app');
const { signAccessToken } = require('../src/utils/tokens');
const { createTestUser, cleanupTestUsers, prisma } = require('./helpers/fixtures');

// Invitations de mentors : la Présidence crée un lien personnel, le professionnel remplit ses coordonnées sans compte.
const EMAILS = ['pres@inv.test.com', 'membre@inv.test.com'];
const INVITEE = 'invite.pro@inv.test.com';

describe('Invitations de mentors', () => {
  const tokens = {};
  const as = (who) => ({ Authorization: `Bearer ${tokens[who]}` });
  const form = (extra = {}) => ({
    fullName: 'Mamadou Professionnel', email: INVITEE, phone: '+221770000000', profession: 'Ingénieur agronome',
    domains: 'Agriculture, entrepreneuriat', motivation: 'Je souhaite transmettre mon expérience du terrain aux jeunes du club.',
    consent: true, ...extra,
  });
  const tokenOf = (link) => new URL(link).searchParams.get('invitation');

  beforeAll(async () => {
    await cleanupTestUsers(EMAILS);
    const pres = await createTestUser({ email: EMAILS[0], role: 'ULTRA_ADMIN', firstName: 'Awa', lastName: 'Présidente' });
    const membre = await createTestUser({ email: EMAILS[1], firstName: 'Simple', lastName: 'Membre' });
    tokens.pres = signAccessToken(pres);
    tokens.membre = signAccessToken(membre);
    await prisma.mentorApplication.deleteMany({ where: { email: INVITEE } });
  });

  afterAll(async () => {
    await prisma.mentorApplication.deleteMany({ where: { email: INVITEE } });
    await prisma.mentorInvitation.deleteMany({ where: { createdBy: { email: { in: EMAILS } } } });
    await cleanupTestUsers(EMAILS);
    await prisma.$disconnect();
  });

  it('réserve la gestion des invitations à la Présidence', async () => {
    expect((await request(app).post('/api/mentoring/invitations').set(as('membre')).send({})).status).toBe(403);
    expect((await request(app).get('/api/mentoring/invitations').set(as('membre'))).status).toBe(403);
    expect((await request(app).post('/api/mentoring/invitations').send({})).status).toBe(401);
  });

  it('crée un lien personnel, lisible sans compte, qui préremplit le formulaire', async () => {
    const res = await request(app).post('/api/mentoring/invitations').set(as('pres'))
      .send({ inviteeName: 'Mamadou Professionnel', inviteeEmail: INVITEE.toUpperCase(), message: 'Ton parcours nous intéresse.' });
    expect(res.status).toBe(201);
    const { link, status, inviteeEmail } = res.body.data;
    expect(status).toBe('PENDING');
    expect(inviteeEmail).toBe(INVITEE);
    expect(link).toMatch(/\/devenir-mentor\.html\?invitation=[\w-]{20,}$/);
    const page = await request(app).get(`/api/mentor-applications/invitation/${tokenOf(link)}`);
    expect(page.status).toBe(200);
    expect(page.body.data).toMatchObject({ inviteeName: 'Mamadou Professionnel', inviteeEmail: INVITEE, message: 'Ton parcours nous intéresse.', invitedBy: 'Awa Présidente' });
    expect((await request(app).get('/api/mentor-applications/invitation/nimportequoi-nimportequoi-123')).status).toBe(404);
  });

  it('refuse l\'envoi par e-mail sans adresse', async () => {
    const res = await request(app).post('/api/mentoring/invitations').set(as('pres')).send({ sendEmail: true });
    expect(res.status).toBe(400);
  });

  it('enregistre la candidature du professionnel invité, une seule fois, et prévient la Présidence', async () => {
    const created = (await request(app).post('/api/mentoring/invitations').set(as('pres')).send({ inviteeName: 'Mamadou', inviteeEmail: INVITEE })).body.data;
    const token = tokenOf(created.link);
    const sent = await request(app).post('/api/mentor-applications').send(form({ invitation: token }));
    expect(sent.status).toBe(201);
    const applications = (await request(app).get('/api/mentoring/applications').set(as('pres'))).body.data;
    expect(applications.find((a) => a.email === INVITEE)).toMatchObject({ invited: true, status: 'PENDING', profession: 'Ingénieur agronome' });
    const list = (await request(app).get('/api/mentoring/invitations').set(as('pres'))).body.data;
    expect(list.find((i) => i.id === created.id).status).toBe('USED');
    // Le lien ne sert qu'une fois
    expect((await request(app).get(`/api/mentor-applications/invitation/${token}`)).status).toBe(400);
    expect((await request(app).post('/api/mentor-applications').send(form({ invitation: token, email: 'autre@inv.test.com' }))).status).toBe(400);
    expect((await request(app).post('/api/mentoring/invitations/' + created.id + '/resend').set(as('pres'))).status).toBe(400);
  });

  it('retire une invitation : le lien ne fonctionne plus', async () => {
    const created = (await request(app).post('/api/mentoring/invitations').set(as('pres')).send({ inviteeName: 'Retiré' })).body.data;
    expect((await request(app).delete(`/api/mentoring/invitations/${created.id}`).set(as('membre'))).status).toBe(403);
    expect((await request(app).delete(`/api/mentoring/invitations/${created.id}`).set(as('pres'))).status).toBe(200);
    expect((await request(app).get(`/api/mentor-applications/invitation/${tokenOf(created.link)}`)).status).toBe(404);
    expect((await request(app).post('/api/mentor-applications').send(form({ invitation: tokenOf(created.link), email: 'x@inv.test.com' }))).status).toBe(404);
  });

  it('refuse une invitation expirée', async () => {
    const created = (await request(app).post('/api/mentoring/invitations').set(as('pres')).send({})).body.data;
    await prisma.mentorInvitation.update({ where: { id: created.id }, data: { expiresAt: new Date(Date.now() - 1000) } });
    expect((await request(app).get(`/api/mentor-applications/invitation/${tokenOf(created.link)}`)).status).toBe(400);
    const list = (await request(app).get('/api/mentoring/invitations').set(as('pres'))).body.data;
    expect(list.find((i) => i.id === created.id).status).toBe('EXPIRED');
  });

  it('garde la candidature ouverte à tous sans invitation', async () => {
    await prisma.mentorApplication.deleteMany({ where: { email: INVITEE } });
    const res = await request(app).post('/api/mentor-applications').send(form());
    expect(res.status).toBe(201);
    const apps = (await request(app).get('/api/mentoring/applications').set(as('pres'))).body.data;
    expect(apps.find((a) => a.email === INVITEE).invited).toBe(false);
  });
});
