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
  // Remet à zéro le délai anti-rafale entre deux tests
  const calm = () => prisma.chatMessage.updateMany({ where: { createdAt: { gt: new Date(Date.now() - 20000) } }, data: { createdAt: new Date(Date.now() - 60000) } });

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
    await prisma.notification.deleteMany({ where: { userId: { in: Object.values(users).map((u) => u.id) } } });
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

  describe('Groupes privés, mentions, notifications et fichiers', () => {
    let group;
    const people = async (who, channelId) => (await get(`/channels/${channelId}/people`, who)).body.data;

    it('crée un groupe privé avec les personnes choisies, invisible des autres', async () => {
      expect((await send('post', '/channels', 'bureau', { name: `${TAG} Privé`, isPrivate: true, memberIds: [users.membre.id] })).status).toBe(403);
      expect((await send('post', '/channels', 'pres', { name: `${TAG} Privé`, isPrivate: true, memberIds: [] })).status).toBe(400);
      // Un visiteur n'est jamais admis, même choisi
      const res = await send('post', '/channels', 'pres', { name: `${TAG} Privé`, isPrivate: true, memberIds: [users.membre.id, users.visiteur.id] });
      expect(res.status).toBe(201);
      group = res.body.data;
      expect((await get(`/channels/${group.id}/members`, 'pres')).body.data.map((m) => m.name)).toEqual(['Moussa Diallo']);
      const listFor = async (who) => (await get('/channels', who)).body.data.channels.find((c) => c.id === group.id);
      expect(await listFor('membre')).toMatchObject({ isPrivate: true, memberCount: 1, canPost: true });
      expect(await listFor('autre')).toBeUndefined();
      expect(await listFor('bureau')).toBeUndefined();
      expect(await listFor('pres')).toBeTruthy();
    });

    it('rend le groupe introuvable à qui n\'en fait pas partie', async () => {
      expect((await get(`/channels/${group.id}/messages`, 'autre')).status).toBe(404);
      expect((await send('post', `/channels/${group.id}/messages`, 'autre', { body: 'Coucou' })).status).toBe(404);
      expect((await get(`/channels/${group.id}/people`, 'autre')).status).toBe(404);
      expect((await send('post', `/channels/${group.id}/messages`, 'membre', { body: 'Entre nous' })).status).toBe(201);
      expect((await get(`/channels/${group.id}/messages`, 'pres')).body.data.messages.map((m) => m.body)).toContain('Entre nous');
    });

    it('permet à la Présidence d\'ajouter puis de retirer des membres', async () => {
      expect((await send('put', `/channels/${group.id}/members`, 'bureau', { userIds: [users.autre.id] })).status).toBe(403);
      expect((await send('put', `/channels/${group.id}/members`, 'pres', { userIds: [] })).status).toBe(400);
      const added = await send('put', `/channels/${group.id}/members`, 'pres', { userIds: [users.membre.id, users.autre.id] });
      expect(added.body.data.map((m) => m.name).sort()).toEqual(['Ibrahima Sow', 'Moussa Diallo']);
      expect((await get(`/channels/${group.id}/messages`, 'autre')).status).toBe(200);
      await send('put', `/channels/${group.id}/members`, 'pres', { userIds: [users.membre.id] });
      expect((await get(`/channels/${group.id}/messages`, 'autre')).status).toBe(404);
    });

    it('propose les adhérents à la Présidence seulement', async () => {
      expect((await get('/candidates', 'membre')).status).toBe(403);
      const names = (await get('/candidates?search=sow', 'pres')).body.data.map((c) => c.name);
      expect(names).toEqual(['Ibrahima Sow']);
      expect((await get('/candidates', 'pres')).body.data.map((c) => c.id)).not.toContain(users.visiteur.id);
    });

    it('limite les mentions aux personnes qui ont accès au salon, et prévient les personnes mentionnées ou citées', async () => {
      const ids = (await people('membre', general.id)).map((p) => p.id);
      expect(ids).toContain(users.autre.id);
      expect(ids).not.toContain(users.visiteur.id);
      expect(ids).not.toContain(users.membre.id);
      // Dans le groupe privé : seuls les membres (et la Présidence) sont proposés
      const inGroup = (await people('membre', group.id)).map((p) => p.id);
      expect(inGroup).not.toContain(users.autre.id);
      expect(inGroup).toContain(users.pres.id);

      await prisma.notification.deleteMany({ where: { userId: { in: [users.autre.id, users.pres.id] } } });
      await calm();
      const target = (await send('post', `/channels/${general.id}/messages`, 'pres', { body: 'Question pour le club' })).body.data;
      const res = await send('post', `/channels/${general.id}/messages`, 'membre', {
        body: '@Ibrahima Sow tu peux regarder ça ?', replyToId: target.id, mentionIds: [users.autre.id, users.visiteur.id, users.membre.id],
      });
      expect(res.status).toBe(201);
      expect(res.body.data.mentions).toEqual([{ id: users.autre.id, name: 'Ibrahima Sow' }]);
      const forAutre = await prisma.notification.findMany({ where: { userId: users.autre.id } });
      // Un message du salon la prévient aussi (alerte générale) ; la mention a sa propre alerte, une seule
      const mentioned = forAutre.filter((n) => n.title.includes('t\'a mentionné'));
      expect(mentioned).toHaveLength(1);
      expect(mentioned[0].url).toContain('salon.html?salon=general');
      const forPres = await prisma.notification.findMany({ where: { userId: users.pres.id } });
      expect(forPres.filter((n) => n.title.includes('a répondu à ton message'))).toHaveLength(1);
      // La personne citée et la personne mentionnée ne reçoivent pas en plus l'alerte générale pour le même message
      expect(forPres.filter((n) => n.message.includes('tu peux regarder ça'))).toHaveLength(1);
      expect(await prisma.notification.count({ where: { userId: users.visiteur.id } })).toBe(0);
    });

    it('prévient tous les membres du salon à chaque message, une alerte par salon, sauf en sourdine', async () => {
      await prisma.notification.deleteMany({ where: { userId: { in: [users.bureau.id, users.autre.id, users.membre.id] } } });
      await calm();
      await send('post', `/channels/${general.id}/mute`, 'autre', { muted: true });
      expect((await get('/channels', 'autre')).body.data.channels.find((c) => c.slug === 'general').muted).toBe(true);
      await send('post', `/channels/${general.id}/messages`, 'pres', { body: 'Premier message' });
      await send('post', `/channels/${general.id}/messages`, 'pres', { body: 'Deuxième message' });
      const bureau = await prisma.notification.findMany({ where: { userId: users.bureau.id } });
      expect(bureau).toHaveLength(1);
      expect(bureau[0]).toMatchObject({ isRead: false, url: 'salon.html?salon=general' });
      expect(bureau[0].message).toContain('Awa');
      expect(bureau[0].message).toContain('Deuxième message');
      expect(await prisma.notification.count({ where: { userId: users.autre.id } })).toBe(0);
      expect(await prisma.notification.count({ where: { userId: users.pres.id, message: { contains: 'Premier message' } } })).toBe(0);
      expect(await prisma.notification.count({ where: { userId: users.visiteur.id } })).toBe(0);
      // Ouvrir le salon lit l'alerte
      await send('post', `/channels/${general.id}/read`, 'bureau');
      expect((await prisma.notification.findMany({ where: { userId: users.bureau.id } }))[0].isRead).toBe(true);
      await send('post', `/channels/${general.id}/mute`, 'autre', { muted: false });
    });

    it('ne prévient que les membres d\'un groupe privé', async () => {
      await calm();
      await prisma.notification.deleteMany({ where: { userId: { in: [users.bureau.id, users.membre.id, users.pres.id] } } });
      await send('post', `/channels/${group.id}/messages`, 'membre', { body: 'Entre membres' });
      expect(await prisma.notification.count({ where: { userId: users.bureau.id } })).toBe(0);
      expect(await prisma.notification.count({ where: { userId: users.pres.id, message: { contains: 'Entre membres' } } })).toBe(1);
    });

    it('accepte des fichiers joints du stockage du club seulement', async () => {
      const r2 = require('../src/services/r2StorageService');
      const good = { url: `${r2.publicDomain}/salon/photo.png`, name: 'photo.png', mimeType: 'image/png', size: 1200 };
      await calm();
      const ok = await send('post', `/channels/${general.id}/messages`, 'membre', { body: '', attachments: [good] });
      expect(ok.status).toBe(201);
      expect(ok.body.data.attachments).toEqual([good]);
      expect((await send('post', `/channels/${general.id}/messages`, 'membre', { body: 'x', attachments: [{ ...good, url: 'https://evil.example/x.png' }] })).status).toBe(400);
      expect((await send('post', `/channels/${general.id}/messages`, 'membre', { body: 'x', attachments: [{ ...good, mimeType: 'text/html' }] })).status).toBe(400);
      expect((await send('post', `/channels/${general.id}/messages`, 'membre', { body: '', attachments: [] })).status).toBe(400);
    });

    it('refuse un téléversement de visiteur ou d\'un format non autorisé', async () => {
      const png = Buffer.from('89504e470d0a1a0a', 'hex');
      const up = (who, name, type) => request(app).post('/api/salon/upload').set(as(who)).attach('file', png, { filename: name, contentType: type });
      expect((await up('visiteur', 'a.png', 'image/png')).status).toBe(403);
      expect((await up('membre', 'a.html', 'text/html')).status).toBe(400);
    });
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
