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
    fullName: 'Mamadou Professionnel', email: INVITEE, phone: '+221770000000', profession: 'Ingénieur agronome', experience: 'Dix ans dans l\'agro-industrie.',
    domains: 'Agriculture, entrepreneuriat', motivation: 'Je souhaite transmettre mon expérience du terrain aux jeunes du club.',
    consent: true, ...extra,
  });
  // Chaque candidature part d'une adresse différente : la limite de 5 envois par heure et par adresse ne gêne pas les tests
  let ipCounter = 0;
  const apply = (body) => request(app).post('/api/mentor-applications').set('X-Forwarded-For', `10.0.0.${++ipCounter}`).send(body);
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
    await cleanupTestUsers([INVITEE]);
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
    const sent = await apply(form({ invitation: token }));
    expect(sent.status).toBe(201);
    const applications = (await request(app).get('/api/mentoring/applications').set(as('pres'))).body.data;
    // Invité : accepté d'office, sans attendre la décision de la Présidence
    expect(sent.body.data).toMatchObject({ status: 'ACCEPTED', accepted: true, hasAccount: true, accountCreated: true });
    // Le compte est créé tout de suite, avec le rôle mentor : plus rien à faire de séparé
    const account = await prisma.user.findUnique({ where: { email: INVITEE } });
    expect(account).toMatchObject({ role: 'MEMBER', isActive: true, isVerified: true, firstName: 'Mamadou', lastName: 'Professionnel' });
    const roles = await prisma.userAdminRole.findMany({ where: { userId: account.id, status: 'APPROVED', isActive: true }, include: { role: true } });
    expect(roles.map((r) => r.role.name)).toContain('MENTOR_EXPERT');
    expect((await request(app).get('/api/mentoring/mentors').set(as('pres'))).body.data.map((m) => m.email)).toContain(INVITEE);
    // Sa fiche est disponible aussitôt : le parcours et le message de candidature sont repris de ce qu'il a saisi
    const file = (await request(app).get(`/api/mentoring/mentors/${account.id}/file`).set(as('pres'))).body.data;
    expect(file.fullName).toBe('Mamadou Professionnel');
    expect(file.application).toMatchObject({ motivation: expect.stringContaining('transmettre mon expérience'), invited: true, phone: '+221770000000' });
    expect(file.profile).toMatchObject({ headline: 'Ingénieur agronome', domains: 'Agriculture, entrepreneuriat' });
    expect(applications.find((a) => a.email === INVITEE)).toMatchObject({ invited: true, status: 'ACCEPTED', profession: 'Ingénieur agronome' });
    const alert = await prisma.notification.findFirst({ where: { user: { email: EMAILS[0] }, title: { contains: 'rejoint les mentors' } } });
    expect(alert).toBeTruthy();
    expect(alert.message).toContain('compte a été créé');
    expect((await request(app).get('/api/mentoring/mentors/pending').set(as('pres'))).body.data.map((m) => m.email)).not.toContain(INVITEE);
    expect((await request(app).get('/api/mentoring/mentors/pending').set(as('membre'))).status).toBe(403);
    const list = (await request(app).get('/api/mentoring/invitations').set(as('pres'))).body.data;
    expect(list.find((i) => i.id === created.id).status).toBe('USED');
    // Le lien ne sert qu'une fois
    expect((await request(app).get(`/api/mentor-applications/invitation/${token}`)).status).toBe(400);
    expect((await apply(form({ invitation: token, email: 'autre@inv.test.com' }))).status).toBe(400);
    expect((await request(app).post('/api/mentoring/invitations/' + created.id + '/resend').set(as('pres'))).status).toBe(400);
  });

  it('ouvre tout de suite le rôle de mentor si le professionnel invité a déjà un compte', async () => {
    const pro = await createTestUser({ email: 'compte.pro@inv.test.com', firstName: 'Compte', lastName: 'Pro' });
    try {
      const created = (await request(app).post('/api/mentoring/invitations').set(as('pres')).send({ inviteeEmail: pro.email })).body.data;
      const sent = await apply(form({ invitation: tokenOf(created.link), email: pro.email, fullName: 'Compte Pro' }));
      expect(sent.body.data).toMatchObject({ accepted: true, hasAccount: true });
      const mentors = (await request(app).get('/api/mentoring/mentors').set(as('pres'))).body.data;
      expect(mentors.map((m) => m.email)).toContain(pro.email);
      const pending = (await request(app).get('/api/mentoring/mentors/pending').set(as('pres'))).body.data;
      expect(pending.map((m) => m.email)).not.toContain(pro.email);
    } finally {
      await prisma.mentorApplication.deleteMany({ where: { email: 'compte.pro@inv.test.com' } });
      await cleanupTestUsers(['compte.pro@inv.test.com']);
    }
  });

  it('retire une invitation : le lien ne fonctionne plus', async () => {
    const created = (await request(app).post('/api/mentoring/invitations').set(as('pres')).send({ inviteeName: 'Retiré' })).body.data;
    expect((await request(app).delete(`/api/mentoring/invitations/${created.id}`).set(as('membre'))).status).toBe(403);
    expect((await request(app).delete(`/api/mentoring/invitations/${created.id}`).set(as('pres'))).status).toBe(200);
    expect((await request(app).get(`/api/mentor-applications/invitation/${tokenOf(created.link)}`)).status).toBe(404);
    expect((await apply(form({ invitation: tokenOf(created.link), email: 'x@inv.test.com' }))).status).toBe(404);
  });

  it('refuse une invitation expirée', async () => {
    const created = (await request(app).post('/api/mentoring/invitations').set(as('pres')).send({})).body.data;
    await prisma.mentorInvitation.update({ where: { id: created.id }, data: { expiresAt: new Date(Date.now() - 1000) } });
    expect((await request(app).get(`/api/mentor-applications/invitation/${tokenOf(created.link)}`)).status).toBe(400);
    const list = (await request(app).get('/api/mentoring/invitations').set(as('pres'))).body.data;
    expect(list.find((i) => i.id === created.id).status).toBe('EXPIRED');
  });

  it('crée aussi le compte quand la Présidence accepte une candidature spontanée, et le mot de passe se choisit par lien', async () => {
    const mail = 'spontane.pro@inv.test.com';
    await cleanupTestUsers([mail]);
    await apply(form({ email: mail, fullName: 'Awa Spontanée' })).expect(201);
    const app1 = (await request(app).get('/api/mentoring/applications').set(as('pres'))).body.data.find((a) => a.email === mail);
    expect(app1.status).toBe('PENDING');
    expect(await prisma.user.findUnique({ where: { email: mail } })).toBeNull();
    const done = await request(app).post(`/api/mentoring/applications/${app1.id}/decision`).set(as('pres')).send({ decision: 'ACCEPTED' });
    expect(done.status).toBe(200);
    expect(done.body.data.accountCreated).toBe(true);
    const created = await prisma.user.findUnique({ where: { email: mail } });
    expect(created).toMatchObject({ isActive: true, isVerified: true });
    // Le lien reçu par e-mail permet de choisir son mot de passe puis de se connecter
    const url = require('../src/services/authService').passwordSetupUrl(created);
    const token = new URL(url).searchParams.get('token');
    expect((await request(app).post('/api/auth/reset-password').send({ token, newPassword: 'MotDePasse123' })).status).toBe(200);
    expect((await request(app).post('/api/auth/login').send({ email: mail, password: 'MotDePasse123' })).status).toBe(200);
    await prisma.mentorApplication.deleteMany({ where: { email: mail } });
    await cleanupTestUsers([mail]);
  });

  it('ouvre d\'un clic le compte d\'un mentor accepté auparavant sans compte', async () => {
    const mail = 'ancien.accepte@inv.test.com';
    await cleanupTestUsers([mail]);
    const old = await prisma.mentorApplication.create({
      data: { fullName: 'Ancien Accepté', email: mail, profession: 'Enseignant', domains: 'Maths', motivation: 'x'.repeat(40), status: 'ACCEPTED', handledAt: new Date() },
    });
    try {
      const waiting = (await request(app).get('/api/mentoring/mentors/pending').set(as('pres'))).body.data;
      expect(waiting.find((m) => m.id === old.id)).toMatchObject({ accountState: 'NONE' });
      expect((await request(app).post(`/api/mentoring/mentors/pending/${old.id}/activate`).set(as('membre'))).status).toBe(403);
      const res = await request(app).post(`/api/mentoring/mentors/pending/${old.id}/activate`).set(as('pres'));
      expect(res.status).toBe(200);
      expect(res.body.data.accountCreated).toBe(true);
      expect((await request(app).get('/api/mentoring/mentors').set(as('pres'))).body.data.map((m) => m.email)).toContain(mail);
      expect((await request(app).get('/api/mentoring/mentors/pending').set(as('pres'))).body.data.map((m) => m.id)).not.toContain(old.id);
      expect((await request(app).post(`/api/mentoring/mentors/pending/${old.id}/activate`).set(as('pres'))).status).toBe(400);
    } finally {
      await prisma.mentorApplication.deleteMany({ where: { email: mail } });
      await cleanupTestUsers([mail]);
    }
  });

  it('garde la candidature ouverte à tous sans invitation', async () => {
    await prisma.mentorApplication.deleteMany({ where: { email: INVITEE } });
    await cleanupTestUsers([INVITEE]);
    const res = await apply(form());
    expect(res.status).toBe(201);
    const apps = (await request(app).get('/api/mentoring/applications').set(as('pres'))).body.data;
    expect(apps.find((a) => a.email === INVITEE).invited).toBe(false);
  });
});
