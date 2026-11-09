const request = require('supertest');
const { app } = require('../src/app');
const { signAccessToken } = require('../src/utils/tokens');
const { createTestUser, cleanupTestUsers, prisma } = require('./helpers/fixtures');

// Réunions en visio : planifiées par la Présidence ou le bureau, réservées aux invités
const EMAILS = ['pres@reu.test.com', 'bureau@reu.test.com', 'mentor@reu.test.com', 'membre@reu.test.com', 'choisi@reu.test.com', 'visiteur@reu.test.com'];
const TAG = '[REU-TEST]';

describe('Réunions en visio', () => {
  const users = {};
  const tokens = {};
  const as = (who) => ({ Authorization: `Bearer ${tokens[who]}` });
  const api = (method, url, who, body) => request(app)[method](`/api/meetings${url}`).set(as(who)).send(body || {});
  const inOneHour = () => new Date(Date.now() + 3600000).toISOString();
  const alerts = (who, text) => prisma.notification.findMany({ where: { userId: users[who].id, title: { contains: text } } });

  beforeAll(async () => {
    await cleanupTestUsers(EMAILS);
    users.pres = await createTestUser({ email: EMAILS[0], role: 'ULTRA_ADMIN', firstName: 'Awa', lastName: 'Présidente' });
    users.bureau = await createTestUser({ email: EMAILS[1], firstName: 'Fatou', lastName: 'Bureau' });
    users.mentor = await createTestUser({ email: EMAILS[2], adminRole: 'MENTOR_EXPERT', firstName: 'Mamadou', lastName: 'Mentor' });
    users.membre = await createTestUser({ email: EMAILS[3], firstName: 'Moussa', lastName: 'Membre' });
    users.choisi = await createTestUser({ email: EMAILS[4], firstName: 'Ibou', lastName: 'Choisi' });
    users.visiteur = await createTestUser({ email: EMAILS[5], role: 'VISITOR', firstName: 'Visite', lastName: 'Curieuse' });
    const position = await prisma.clubPosition.create({ data: { title: `${TAG} Secrétariat` } });
    await prisma.clubAssignment.create({ data: { positionId: position.id, userId: users.bureau.id } });
    Object.keys(users).forEach((k) => { tokens[k] = signAccessToken(users[k]); });
  });

  afterAll(async () => {
    await prisma.meeting.deleteMany({ where: { title: { startsWith: TAG } } });
    await prisma.notification.deleteMany({ where: { userId: { in: Object.values(users).map((u) => u.id) } } });
    await cleanupTestUsers(EMAILS);
    await prisma.clubPosition.deleteMany({ where: { title: { startsWith: TAG } } });
    await prisma.$disconnect();
  });

  let bureauMeeting; let mentorsMeeting;

  it('réserve la planification à la Présidence et aux titulaires du bureau', async () => {
    const body = { title: `${TAG} Réunion`, startsAt: inOneHour(), audiences: ['BUREAU'] };
    expect((await api('post', '/', 'membre', body)).status).toBe(403);
    expect((await api('post', '/', 'mentor', body)).status).toBe(403);
    expect((await api('post', '/', 'visiteur', body)).status).toBe(403);
    expect((await request(app).post('/api/meetings').send(body)).status).toBe(401);
    expect((await api('get', '/context', 'bureau')).body.data.canOrganize).toBe(true);
    expect((await api('get', '/context', 'membre')).body.data.canOrganize).toBe(false);
  });

  it('exige un titre, une date valide et au moins un invité', async () => {
    expect((await api('post', '/', 'pres', { title: 'ab', startsAt: inOneHour(), audiences: ['BUREAU'] })).status).toBe(400);
    expect((await api('post', '/', 'pres', { title: `${TAG} X`, startsAt: 'pas une date', audiences: ['BUREAU'] })).status).toBe(400);
    expect((await api('post', '/', 'pres', { title: `${TAG} Sans invités`, startsAt: inOneHour() })).status).toBe(400);
  });

  it('invite le bureau : seuls le bureau et la Présidence la voient, et sont prévenus', async () => {
    const res = await api('post', '/', 'pres', { title: `${TAG} Point du bureau`, startsAt: inOneHour(), audiences: ['BUREAU'], description: 'Ordre du jour : rapports' });
    expect(res.status).toBe(201);
    bureauMeeting = res.body.data;
    expect(await alerts('bureau', 'Point du bureau')).toHaveLength(1);
    expect(await alerts('membre', 'Point du bureau')).toHaveLength(0);
    expect(await alerts('pres', 'Point du bureau')).toHaveLength(0);
    const ids = async (who) => (await api('get', '/', who)).body.data.map((m) => m.id);
    expect(await ids('bureau')).toContain(bureauMeeting.id);
    expect(await ids('pres')).toContain(bureauMeeting.id);
    expect(await ids('membre')).not.toContain(bureauMeeting.id);
    expect(await ids('mentor')).not.toContain(bureauMeeting.id);
    // Introuvable pour qui n'est pas invité
    expect((await api('get', `/${bureauMeeting.id}/visio`, 'membre')).status).toBe(404);
    expect((await api('get', `/${bureauMeeting.id}/visio`, 'bureau')).status).toBe(200);
  });

  it('invite les mentors et des personnes choisies', async () => {
    const res = await api('post', '/', 'bureau', { title: `${TAG} Mentors`, startsAt: inOneHour(), audiences: ['MENTORS'], inviteeIds: [users.choisi.id, users.visiteur.id] });
    expect(res.status).toBe(201);
    mentorsMeeting = res.body.data;
    const ids = async (who) => (await api('get', '/', who)).body.data.map((m) => m.id);
    expect(await ids('mentor')).toContain(mentorsMeeting.id);
    expect(await ids('choisi')).toContain(mentorsMeeting.id);
    expect(await ids('membre')).not.toContain(mentorsMeeting.id);
    // Un visiteur ne peut pas être invité (réservé aux adhérents)
    expect(await ids('visiteur')).not.toContain(mentorsMeeting.id);
    expect(res.body.data.invitees.map((i) => i.name)).toEqual(['Ibou Choisi']);
    // Les invités ne voient pas la liste des invités nommés
    expect((await api('get', '/', 'mentor')).body.data.find((m) => m.id === mentorsMeeting.id).invitees).toEqual([]);
  });

  it('ouvre la salle pour l\'organisateur seulement, prévient les invités, puis la ferme', async () => {
    expect((await api('post', `/${mentorsMeeting.id}/visio/start`, 'mentor')).status).toBe(403);
    expect((await api('post', `/${mentorsMeeting.id}/visio/start`, 'choisi')).status).toBe(403);
    expect((await api('get', `/${mentorsMeeting.id}/visio`, 'mentor')).body.data).toMatchObject({ visioStatus: 'INACTIVE', isModerator: false, kind: 'reunion' });
    const opened = await api('post', `/${mentorsMeeting.id}/visio/start`, 'bureau');
    expect(opened.status).toBe(200);
    expect(opened.body.data).toMatchObject({ visioStatus: 'LIVE', isModerator: true });
    expect(opened.body.data.roomId).toMatch(/^lmdt-reunion-/);
    expect(await alerts('mentor', 'La salle est ouverte')).toHaveLength(1);
    // La Présidence est aussi modératrice
    expect((await api('get', `/${mentorsMeeting.id}/visio`, 'pres')).body.data.isModerator).toBe(true);
    expect((await api('get', `/${mentorsMeeting.id}/visio`, 'mentor')).body.data).toMatchObject({ visioStatus: 'LIVE', isModerator: false });
    // Sans visio intégrée configurée (tests), l'entrée par jeton est refusée proprement
    expect((await api('post', `/${mentorsMeeting.id}/visio/join`, 'mentor')).status).toBe(400);
    expect((await api('post', `/${mentorsMeeting.id}/visio/stop`, 'bureau')).body.data.visioStatus).toBe('INACTIVE');
  });

  it('déplace et annule une réunion en prévenant les invités', async () => {
    expect((await api('put', `/${mentorsMeeting.id}`, 'mentor', { title: `${TAG} Piraté` })).status).toBe(403);
    const later = new Date(Date.now() + 86400000 * 2).toISOString();
    const moved = await api('put', `/${mentorsMeeting.id}`, 'bureau', { startsAt: later });
    expect(moved.status).toBe(200);
    expect(await alerts('mentor', 'Réunion déplacée')).toHaveLength(1);
    expect((await api('delete', `/${mentorsMeeting.id}`, 'mentor')).status).toBe(403);
    expect((await api('delete', `/${mentorsMeeting.id}`, 'pres')).status).toBe(200);
    expect(await alerts('mentor', 'Réunion annulée')).toHaveLength(1);
    const list = (await api('get', '/', 'mentor')).body.data;
    expect(list.find((m) => m.id === mentorsMeeting.id)).toMatchObject({ cancelled: true, status: 'CANCELLED' });
    expect((await api('post', `/${mentorsMeeting.id}/visio/start`, 'bureau')).status).toBe(400);
  });

  it('propose les adhérents aux organisateurs, jamais les visiteurs', async () => {
    expect((await api('get', '/people', 'membre')).status).toBe(403);
    const names = (await api('get', '/people?search=ibou', 'pres')).body.data.map((p) => p.name);
    expect(names).toEqual(['Ibou Choisi']);
    expect((await api('get', '/people', 'pres')).body.data.map((p) => p.id)).not.toContain(users.visiteur.id);
  });

  it('ouvre la réunion à tous les adhérents quand on le choisit', async () => {
    const res = await api('post', '/', 'pres', { title: `${TAG} Assemblée`, startsAt: inOneHour(), audiences: ['MEMBERS'] });
    const id = res.body.data.id;
    expect((await api('get', '/', 'membre')).body.data.map((m) => m.id)).toContain(id);
    expect((await api('get', '/', 'visiteur')).body.data.map((m) => m.id)).not.toContain(id);
  });
});
