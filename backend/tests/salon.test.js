const request = require('supertest');
const { app } = require('../src/app');
const { signAccessToken } = require('../src/utils/tokens');
const { createTestUser, cleanupTestUsers, prisma } = require('./helpers/fixtures');

// Salon des membres : réservé aux adhérents. Le changement visiteur <-> adhérent ouvre ou ferme l'accès.
const EMAILS = ['pres@salon.test.com', 'bureau@salon.test.com', 'membre@salon.test.com', 'autre@salon.test.com', 'visiteur@salon.test.com'];
const TAG = '[SALON-TEST]';

describe('Salon des membres', () => {
  const users = {};
  const tokens = {};
  const as = (who) => ({ Authorization: `Bearer ${tokens[who]}` });
  const get = (url, who) => request(app).get(`/api/salon${url}`).set(as(who));
  const send = (method, url, who, body) => request(app)[method](`/api/salon${url}`).set(as(who)).send(body || {});
  let general; let annonces;

  beforeAll(async () => {
    await cleanupTestUsers(EMAILS);
    users.pres = await createTestUser({ email: EMAILS[0], role: 'ULTRA_ADMIN', firstName: 'Awa', lastName: 'Présidente' });
    users.bureau = await createTestUser({ email: EMAILS[1], firstName: 'Fatou', lastName: 'Secrétaire' });
    users.membre = await createTestUser({ email: EMAILS[2], firstName: 'Moussa', lastName: 'Diallo' });
    users.autre = await createTestUser({ email: EMAILS[3], firstName: 'Ibrahima', lastName: 'Sow' });
    users.visiteur = await createTestUser({ email: EMAILS[4], role: 'VISITOR', firstName: 'Visite', lastName: 'Curieuse' });
    const position = await prisma.clubPosition.create({ data: { title: `${TAG} Secrétariat` } });
    await prisma.clubAssignment.create({ data: { positionId: position.id, userId: users.bureau.id } });
    Object.keys(users).forEach((k) => { tokens[k] = signAccessToken(users[k]); });
    const list = (await get('/channels', 'membre')).body.data.channels;
    general = list.find((c) => c.slug === 'general');
    annonces = list.find((c) => c.slug === 'annonces');
  });

  afterAll(async () => {
    await prisma.chatMessage.deleteMany({ where: { author: { email: { in: EMAILS } } } });
    await prisma.chatChannel.deleteMany({ where: { name: { startsWith: TAG } } });
    await cleanupTestUsers(EMAILS);
    await prisma.clubPosition.deleteMany({ where: { title: { startsWith: TAG } } });
    await prisma.$disconnect();
  });

  it('ferme tout le salon aux visiteurs, même connectés', async () => {
    expect((await get('/channels', 'visiteur')).status).toBe(403);
    expect((await get(`/channels/${general.id}/messages`, 'visiteur')).status).toBe(403);
    expect((await send('post', `/channels/${general.id}/messages`, 'visiteur', { body: 'Salut' })).status).toBe(403);
    expect((await get('/unread', 'visiteur')).body.data.unread).toBe(0);
    expect((await request(app).get('/api/salon/channels')).status).toBe(401);
  });

  it('propose les salons de départ aux adhérents', async () => {
    const res = await get('/channels', 'membre');
    expect(res.status).toBe(200);
    expect(res.body.data.channels.map((c) => c.slug)).toEqual(expect.arrayContaining(['general', 'annonces', 'projets', 'orientation']));
    expect(res.body.data.channels.find((c) => c.slug === 'annonces').canPost).toBe(false);
    expect(res.body.data.isStaff).toBe(false);
  });

  it('permet d\'écrire, de répondre et de relire dans l\'ordre', async () => {
    const first = await send('post', `/channels/${general.id}/messages`, 'membre', { body: '  Bonjour à tous <b>!</b>  ' });
    expect(first.status).toBe(201);
    expect(first.body.data).toMatchObject({ body: 'Bonjour à tous <b>!</b>', mine: true, canEdit: true, canDelete: true });
    expect(first.body.data.author.name).toBe('Moussa Diallo');
    const reply = await send('post', `/channels/${general.id}/messages`, 'autre', { body: 'Bienvenue !', replyToId: first.body.data.id });
    expect(reply.body.data.replyTo).toMatchObject({ id: first.body.data.id, authorName: 'Moussa Diallo' });
    const list = (await get(`/channels/${general.id}/messages`, 'membre')).body.data.messages;
    expect(list.find((m) => m.id === reply.body.data.id)).toMatchObject({ mine: false, canEdit: false, canDelete: false });
    expect(list.map((m) => m.body).slice(-2)).toEqual(['Bonjour à tous <b>!</b>', 'Bienvenue !']);
  });

  it('refuse un message vide, trop long, ou une réponse dans un autre salon', async () => {
    expect((await send('post', `/channels/${general.id}/messages`, 'membre', { body: '   ' })).status).toBe(400);
    expect((await send('post', `/channels/${general.id}/messages`, 'membre', { body: 'a'.repeat(2001) })).status).toBe(400);
    const other = (await get('/channels', 'membre')).body.data.channels.find((c) => c.slug === 'projets');
    const msg = (await get(`/channels/${general.id}/messages`, 'membre')).body.data.messages[0];
    expect((await send('post', `/channels/${other.id}/messages`, 'membre', { body: 'Ok', replyToId: msg.id })).status).toBe(400);
  });

  it('réserve les annonces au bureau', async () => {
    expect((await send('post', `/channels/${annonces.id}/messages`, 'membre', { body: 'Info' })).status).toBe(403);
    expect((await send('post', `/channels/${annonces.id}/messages`, 'bureau', { body: 'Réunion samedi' })).status).toBe(201);
    expect((await send('post', `/channels/${annonces.id}/messages`, 'pres', { body: 'Bienvenue' })).status).toBe(201);
    const read = (await get(`/channels/${annonces.id}/messages`, 'membre')).body.data.messages;
    expect(read.find((m) => m.body === 'Réunion samedi').author.isStaff).toBe(true);
  });

  it('modifie ses messages seulement ; le bureau peut retirer ceux des autres', async () => {
    const mine = (await send('post', `/channels/${general.id}/messages`, 'membre', { body: 'Coquille' })).body.data;
    expect((await send('patch', `/messages/${mine.id}`, 'autre', { body: 'Piraté' })).status).toBe(403);
    const edited = await send('patch', `/messages/${mine.id}`, 'membre', { body: 'Corrigé' });
    expect(edited.body.data.body).toBe('Corrigé');
    expect(edited.body.data.editedAt).toBeTruthy();
    expect((await send('delete', `/messages/${mine.id}`, 'autre')).status).toBe(403);
    expect((await send('delete', `/messages/${mine.id}`, 'bureau')).status).toBe(200);
    const row = await prisma.chatMessage.findUnique({ where: { id: mine.id } });
    expect(row.body).toBe('');
    expect(row.deletedAt).toBeTruthy();
    const view = (await get(`/channels/${general.id}/messages`, 'membre')).body.data.messages.find((m) => m.id === mine.id);
    expect(view).toMatchObject({ deleted: true, body: '' });
    expect((await send('patch', `/messages/${mine.id}`, 'membre', { body: 'Encore' })).status).toBe(404);
  });

  it('actualise avec « after » (nouveaux messages et suppressions) et compte les non lus', async () => {
    await send('post', `/channels/${general.id}/read`, 'autre');
    const mark = (await get(`/channels/${general.id}/messages`, 'autre')).body.data.serverTime;
    await new Promise((r) => setTimeout(r, 15));
    const fresh = (await send('post', `/channels/${general.id}/messages`, 'membre', { body: 'Nouveau' })).body.data;
    const delta = (await get(`/channels/${general.id}/messages?after=${encodeURIComponent(mark)}`, 'autre')).body.data.messages;
    expect(delta.map((m) => m.id)).toContain(fresh.id);
    const channels = (await get('/channels', 'autre')).body.data.channels;
    expect(channels.find((c) => c.slug === 'general').unread).toBeGreaterThanOrEqual(1);
    await send('post', `/channels/${general.id}/read`, 'autre');
    expect((await get('/channels', 'autre')).body.data.channels.find((c) => c.slug === 'general').unread).toBe(0);
  });

  it('limite les envois en rafale', async () => {
    const results = [];
    for (let i = 0; i < 9; i += 1) results.push((await send('post', `/channels/${general.id}/messages`, 'autre', { body: `Spam ${i}` })).status);
    expect(results).toContain(429);
  });

  it('laisse la Présidence créer et archiver des salons', async () => {
    expect((await send('post', '/channels', 'bureau', { name: `${TAG} Test` })).status).toBe(403);
    const created = await send('post', '/channels', 'pres', { name: `${TAG} Test`, staffOnlyPost: false });
    expect(created.status).toBe(201);
    expect((await send('patch', `/channels/${created.body.data.id}`, 'pres', { isArchived: true })).status).toBe(200);
    expect((await get('/channels', 'membre')).body.data.channels.map((c) => c.id)).not.toContain(created.body.data.id);
    expect((await send('post', `/channels/${created.body.data.id}/messages`, 'membre', { body: 'Ici ?' })).status).toBe(400);
  });

  describe('Passer visiteur <-> adhérent', () => {
    const toggle = (id, value, who = 'pres') => request(app).post(`/api/users/${id}/membership`).set(as(who)).send({ member: value });

    it('ouvre le salon à un visiteur accepté, puis le referme', async () => {
      expect((await get('/channels', 'visiteur')).status).toBe(403);
      const up = await toggle(users.visiteur.id, true);
      expect(up.status).toBe(200);
      expect(up.body.data.role).toBe('MEMBER');
      expect((await get('/channels', 'visiteur')).status).toBe(200);
      const down = await toggle(users.visiteur.id, false);
      expect(down.body.data.role).toBe('VISITOR');
      expect((await get('/channels', 'visiteur')).status).toBe(403);
    });

    it('clôt la demande d\'adhésion en attente quand on accepte le compte', async () => {
      await prisma.membershipRequest.create({ data: { userId: users.visiteur.id, motivation: 'Je veux participer' } });
      await toggle(users.visiteur.id, true);
      const request1 = await prisma.membershipRequest.findFirst({ where: { userId: users.visiteur.id } });
      expect(request1.status).toBe('APPROVED');
      expect(request1.reviewedBy).toBe(users.pres.id);
      await toggle(users.visiteur.id, false);
      await prisma.membershipRequest.deleteMany({ where: { userId: users.visiteur.id } });
    });

    it('ne touche ni aux administrateurs, ni aux titulaires d\'un poste, ni à soi-même', async () => {
      expect((await toggle(users.pres.id, false)).status).toBe(403);
      expect((await toggle(users.bureau.id, false)).status).toBe(400);
      expect((await toggle(users.membre.id, true, 'bureau')).status).toBe(403);
      expect((await toggle(users.membre.id, 'oui')).status).toBe(400);
    });
  });
});
