const request = require('supertest');
const { app } = require('../src/app');
const { signAccessToken } = require('../src/utils/tokens');
const { createTestUser, cleanupTestUsers, prisma } = require('./helpers/fixtures');

// Demandes de mentor des adhérents, bloc « Mon mentor », recherche limitée aux adhérents,
// signalements des fiches formations et métiers par les mentors.
const EMAILS = ['ultra@mreq.test.com', 'mentor@mreq.test.com', 'adherent@mreq.test.com', 'visiteur@mreq.test.com', 'admin-form@mreq.test.com'];
const SLUG_F = 'formation-mreq-test';
const SLUG_J = 'metier-mreq-test';

describe('Mentorat : demandes, espace du mentoré et propositions sur les fiches', () => {
  let ultra, mentor, adherent, visitor, adminForm, t;
  const as = (token) => ({ Authorization: `Bearer ${token}` });

  beforeAll(async () => {
    ultra = await createTestUser({ email: EMAILS[0], role: 'ULTRA_ADMIN' });
    mentor = await createTestUser({ email: EMAILS[1], firstName: 'Moussa', lastName: 'Sarr' });
    adherent = await createTestUser({ email: EMAILS[2], firstName: 'Awa', lastName: 'Diop' });
    visitor = await createTestUser({ email: EMAILS[3], role: 'VISITOR', firstName: 'Ibou', lastName: 'Ba' });
    adminForm = await createTestUser({ email: EMAILS[4], role: 'MEMBER', adminRole: 'ADMIN_FORMATION' });
    const role = await prisma.adminRole.upsert({
      where: { name: 'MENTOR_EXPERT' }, update: {},
      create: { name: 'MENTOR_EXPERT', description: 'Mentor', isSystem: true, requiresApproval: false },
    });
    await prisma.userAdminRole.create({ data: { userId: mentor.id, adminRoleId: role.id, status: 'APPROVED', reviewedAt: new Date() } });
    await prisma.formation.deleteMany({ where: { slug: SLUG_F } });
    await prisma.formation.create({ data: { slug: SLUG_F, title: 'Prise de parole test', description: 'Description de test suffisante', status: 'PUBLISHED' } });
    t = Object.fromEntries([['ultra', ultra], ['mentor', mentor], ['adherent', adherent], ['visitor', visitor], ['adminForm', adminForm]].map(([k, u]) => [k, signAccessToken(u)]));
  });

  afterAll(async () => {
    await prisma.formation.deleteMany({ where: { slug: SLUG_F } });
    await prisma.notification.deleteMany({ where: { userId: { in: [ultra.id, mentor.id, adherent.id, visitor.id, adminForm.id] } } });
    await cleanupTestUsers(EMAILS);
    await prisma.$disconnect();
  });

  it('réserve la demande de mentor aux adhérents', async () => {
    const asVisitor = await request(app).post('/api/mentoring/requests').set(as(t.visitor)).send({ goals: 'Je veux préparer mon orientation' });
    expect(asVisitor.status).toBe(403);
    expect((await request(app).get('/api/mentoring/me').set(as(t.visitor))).body.data).toMatchObject({ canRequest: false, isAdherent: false });
    // La recherche de mentorés de la Présidence n'affiche pas les comptes gratuits
    const found = (await request(app).get('/api/mentoring/members?q=Ba').set(as(t.ultra))).body.data;
    expect(found.map((u) => u.id)).not.toContain(visitor.id);
    const forced = await request(app).post('/api/mentoring/mentorships').set(as(t.ultra)).send({ mentorId: mentor.id, menteeId: visitor.id });
    expect(forced.status).toBe(400);
  });

  it("transforme la demande d'un adhérent en binôme visible dans son espace", async () => {
    const ask = await request(app).post('/api/mentoring/requests').set(as(t.adherent))
      .send({ goals: 'Préparer le concours de l\'ESP et choisir ma filière', domain: 'Ingénierie', format: 'Visio' });
    expect(ask.status).toBe(201);
    expect((await request(app).post('/api/mentoring/requests').set(as(t.adherent)).send({ goals: 'Une deuxième demande identique' })).status).toBe(400);
    expect(await prisma.notification.count({ where: { userId: ultra.id, title: { contains: 'demande de mentor' } } })).toBe(1);

    expect((await request(app).get('/api/mentoring/requests').set(as(t.mentor))).status).toBe(403);
    const queue = (await request(app).get('/api/mentoring/requests').set(as(t.ultra))).body.data;
    const item = queue.find((r) => r.user.id === adherent.id);
    expect(item).toMatchObject({ status: 'PENDING', domain: 'Ingénierie', format: 'Visio' });

    const pair = await request(app).post('/api/mentoring/mentorships').set(as(t.ultra))
      .send({ mentorId: mentor.id, menteeId: adherent.id, goals: item.goals, requestId: item.id });
    expect(pair.status).toBe(201);
    expect((await prisma.mentorRequest.findUnique({ where: { id: item.id } })).status).toBe('MATCHED');

    // Le compte rendu du mentor donne la date de la prochaine séance, rien d'autre
    const next = new Date(Date.now() + 5 * 86400000).toISOString().slice(0, 10);
    await prisma.mentorReport.create({ data: { authorId: mentor.id, kind: 'MENTORAT', mentorshipId: pair.body.data.id, title: 'Séance 1', status: 'SUBMITTED', content: { prochaineSeance: next, observations: 'Note confidentielle' } } });
    const mine = (await request(app).get('/api/mentoring/me').set(as(t.adherent))).body.data;
    expect(mine.canRequest).toBe(false);
    expect(mine.mentorships[0]).toMatchObject({ mentor: { fullName: 'Moussa Sarr' }, nextSession: next, status: 'ACTIVE' });
    expect(JSON.stringify(mine)).not.toContain('Note confidentielle');
    expect(JSON.stringify(mine)).not.toContain(EMAILS[1]);
  });

  it('permet aux mentors de signaler une fiche, traitée par les responsables du module', async () => {
    expect((await request(app).post('/api/mentoring/suggestions').set(as(t.adherent)).send({ targetType: 'formation', targetId: SLUG_F, kind: 'ERREUR', message: 'Une erreur dans le module 2' })).status).toBe(403);
    const targets = (await request(app).get('/api/mentoring/suggestions/targets?type=formation&q=parole').set(as(t.mentor))).body.data;
    expect(targets.map((x) => x.id)).toContain(SLUG_F);

    const sug = await request(app).post('/api/mentoring/suggestions').set(as(t.mentor)).send({
      targetType: 'formation', targetId: SLUG_F, kind: 'MISE_A_JOUR', section: 'Module 2', message: 'Le module 2 cite une ancienne version du code du travail.', proposal: 'Remplacer par la loi de 2024.',
    });
    expect(sug.status).toBe(201);
    expect(sug.body.data.targetTitle).toBe('Prise de parole test');
    const job = await request(app).post('/api/mentoring/suggestions').set(as(t.mentor)).send({ targetType: 'job', targetId: SLUG_J, targetTitle: 'Géomètre test', kind: 'ERREUR', message: 'Le salaire indiqué est trop bas pour le Sénégal.' });
    expect(job.status).toBe(201);
    expect(await prisma.notification.count({ where: { userId: adminForm.id, title: { contains: 'formation' } } })).toBe(1);
    expect(await prisma.notification.count({ where: { userId: adminForm.id, title: { contains: 'métier' } } })).toBe(0);

    // L'admin Formations ne voit que les fiches formations ; la Présidence voit tout
    const formQueue = (await request(app).get('/api/mentoring/suggestions?scope=review').set(as(t.adminForm))).body.data;
    expect([...new Set(formQueue.map((x) => x.targetType))]).toEqual(['formation']);
    expect((await request(app).get('/api/mentoring/suggestions?scope=review').set(as(t.ultra))).body.data.filter((x) => x.author.id === mentor.id)).toHaveLength(2);
    expect((await request(app).post(`/api/mentoring/suggestions/${job.body.data.id}/resolve`).set(as(t.adminForm)).send({ status: 'APPLIED' })).status).toBe(403);

    expect((await request(app).post(`/api/mentoring/suggestions/${sug.body.data.id}/resolve`).set(as(t.adminForm)).send({ status: 'REJECTED' })).status).toBe(400);
    const done = await request(app).post(`/api/mentoring/suggestions/${sug.body.data.id}/resolve`).set(as(t.adminForm)).send({ status: 'APPLIED', response: 'Corrigé, merci !' });
    expect(done.status).toBe(200);
    const mine = (await request(app).get('/api/mentoring/suggestions').set(as(t.mentor))).body.data;
    expect(mine.find((x) => x.id === sug.body.data.id)).toMatchObject({ status: 'APPLIED', response: 'Corrigé, merci !' });
    expect(await prisma.notification.count({ where: { userId: mentor.id, title: { contains: 'appliquée' } } })).toBe(1);
  });
});
