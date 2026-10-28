const request = require('supertest');
const { app } = require('../src/app');
const { signAccessToken } = require('../src/utils/tokens');
const { createTestUser, cleanupTestUsers, prisma } = require('./helpers/fixtures');

// Forum : nouvelles catégories, questions liées aux fiches, suivi des discussions,
// validation des réponses par un mentor vérifié.
const EMAILS = ['asker@forumc.test.com', 'helper@forumc.test.com', 'mentor@forumc.test.com', 'follower@forumc.test.com'];

describe('Forum : communauté', () => {
  let asker, helper, mentor, follower, tokens, topicId, replyId, pseudonymTopicId;
  const as = (token) => ({ Authorization: `Bearer ${token}` });

  beforeAll(async () => {
    [asker, helper, mentor, follower] = await Promise.all(EMAILS.map((email) => createTestUser({ email })));
    const role = await prisma.adminRole.upsert({
      where: { name: 'MENTOR_EXPERT' }, update: {},
      create: { name: 'MENTOR_EXPERT', description: 'Mentor', isSystem: true, requiresApproval: false },
    });
    await prisma.userAdminRole.create({ data: { userId: mentor.id, adminRoleId: role.id, status: 'APPROVED', reviewedAt: new Date() } });
    tokens = [asker, helper, mentor, follower].map(signAccessToken);
  });

  afterAll(async () => {
    await prisma.notification.deleteMany({ where: { userId: { in: [asker.id, helper.id, mentor.id, follower.id] } } });
    await cleanupTestUsers(EMAILS);
    await prisma.$disconnect();
  });

  it('affiche toujours les six catégories et rattache les anciennes', async () => {
    const legacy = await prisma.topic.create({ data: { title: '[FC] Ancien sujet', content: 'Contenu ancien sujet', category: 'Opportunités', authorId: asker.id } });
    const cats = (await request(app).get('/api/forum/categories')).body.data;
    expect(cats.slice(0, 6).map((c) => c.name)).toEqual(['Orientation & métiers', 'Concours & bourses', 'Études & lycée', 'Stages & premier emploi', 'Formations du club', 'Vie du club']);
    expect(cats.find((c) => c.name === 'Concours & bourses').count).toBeGreaterThanOrEqual(1);
    expect(cats.map((c) => c.name)).not.toContain('Opportunités');
    const list = (await request(app).get('/api/forum?category=Concours%20%26%20bourses&limit=50')).body.data;
    const found = (list.topics || list).find((t) => t.id === legacy.id);
    expect(found.category).toBe('Concours & bourses');
    expect((await request(app).post('/api/forum').set(as(tokens[0])).send({ title: 'Titre valide', content: 'Contenu assez long', category: 'Inventée' })).status).toBe(400);
  });

  it("relie une question à la fiche d'un concours", async () => {
    const res = await request(app).post('/api/forum').set(as(tokens[0])).send({
      title: 'Comment préparer le concours ?', content: 'Je voudrais des conseils de préparation.', category: 'Concours & bourses',
      context: { type: 'opportunity', id: 'concours-test-123', title: 'Concours test' },
    });
    expect(res.status).toBe(201);
    topicId = res.body.data.id;
    const linked = (await request(app).get('/api/forum/linked?type=opportunity&id=concours-test-123')).body.data;
    expect(linked.total).toBe(1);
    expect(linked.topics[0]).toMatchObject({ id: topicId, title: 'Comment préparer le concours ?' });
    expect((await request(app).get('/api/forum/linked?type=autre&id=x')).status).toBe(400);
  });

  it('permet un pseudonyme global tout en protégeant le nom public', async () => {
    expect((await request(app).get('/api/forum/profile')).status).toBe(401);
    expect((await request(app).put('/api/forum/profile').send({ forumDisplayName: 'Pseudo' })).status).toBe(401);
    const saved = await request(app).put('/api/forum/profile').set(as(tokens[0])).send({ forumDisplayName: 'Étoile du Sahel' });
    expect(saved.status).toBe(200);
    expect(saved.body.data.forumDisplayName).toBe('Étoile du Sahel');
    expect((await request(app).get('/api/forum/profile').set(as(tokens[0]))).body.data.forumDisplayName).toBe('Étoile du Sahel');

    const created = await request(app).post('/api/forum').set(as(tokens[0])).send({
      title: 'Une question sans réponse',
      content: 'Comment choisir entre ces deux filières après le bac ?',
      category: 'Études & lycée',
    });
    expect(created.status).toBe(201);
    pseudonymTopicId = created.body.data.id;

    const publicTopic = (await request(app).get(`/api/forum/${pseudonymTopicId}`)).body.data;
    expect(publicTopic.author).toMatchObject({
      firstName: 'Étoile du Sahel',
      lastName: '',
      avatarUrl: null,
      isPseudonymous: true,
    });
    const publicListing = await request(app).get('/api/forum?search=sans%20réponse');
    expect(publicListing.body.data.find((item) => item.id === pseudonymTopicId).author).toMatchObject({
      firstName: 'Étoile du Sahel',
      lastName: '',
    });

    expect((await request(app).get('/api/forum/unanswered')).status).toBe(401);
    expect((await request(app).get('/api/forum/unanswered').set(as(tokens[0]))).status).toBe(403);
    const queue = await request(app).get('/api/forum/unanswered').set(as(tokens[2]));
    expect(queue.status).toBe(200);
    const queued = queue.body.data.find((item) => item.id === pseudonymTopicId);
    expect(queued.author).toMatchObject({ firstName: asker.firstName, lastName: asker.lastName, forumDisplayName: 'Étoile du Sahel' });
  });

  it('prévient les personnes qui suivent la discussion à chaque réponse', async () => {
    const detail = (await request(app).get(`/api/forum/${topicId}`).set(as(tokens[0]))).body.data;
    expect(detail.isFollowing).toBe(true); // l'auteur suit sa question
    expect((await request(app).post(`/api/forum/${topicId}/follow`).set(as(tokens[3]))).body.data.following).toBe(true);

    const reply = await request(app).post(`/api/forum/${topicId}/replies`).set(as(tokens[1])).send({ content: 'Commence par les annales des trois dernières années.' });
    expect(reply.status).toBe(201);
    replyId = reply.body.data.id;
    const notified = await prisma.notification.findMany({ where: { userId: { in: [asker.id, follower.id, helper.id] }, type: 'FORUM' } });
    expect(notified.map((n) => n.userId).sort()).toEqual([asker.id, follower.id].sort());

    expect((await request(app).post(`/api/forum/${topicId}/follow`).set(as(tokens[3]))).body.data.following).toBe(false);
    const after = (await request(app).get(`/api/forum/${topicId}`).set(as(tokens[1]))).body.data;
    expect(after.isFollowing).toBe(true); // celui qui répond suit la discussion
  });

  it('réserve la validation des réponses aux mentors vérifiés', async () => {
    expect((await request(app).get(`/api/forum/${topicId}`).set(as(tokens[0]))).body.data.canEndorse).toBe(false);
    expect((await request(app).put(`/api/forum/replies/${replyId}/endorse`).set(as(tokens[0]))).status).toBe(403);

    expect((await request(app).get(`/api/forum/${topicId}`).set(as(tokens[2]))).body.data.canEndorse).toBe(true);
    const ok = await request(app).put(`/api/forum/replies/${replyId}/endorse`).set(as(tokens[2]));
    expect(ok.status).toBe(200);
    expect(ok.body.data).toMatchObject({ endorsed: true, endorsedBy: { id: mentor.id } });
    const detail = (await request(app).get(`/api/forum/${topicId}`)).body.data;
    expect(detail.replies[0].endorsedBy.id).toBe(mentor.id);
    expect(detail.replies[0].author.adminRoles).toEqual([]);
    expect(await prisma.notification.count({ where: { userId: helper.id, title: { contains: 'validée par un mentor' } } })).toBe(1);
  });

  it('permet de retirer le pseudonyme du compte', async () => {
    const cleared = await request(app).put('/api/forum/profile').set(as(tokens[0])).send({ forumDisplayName: null });
    expect(cleared.status).toBe(200);
    expect(cleared.body.data.forumDisplayName).toBeNull();
    expect((await request(app).get(`/api/forum/${pseudonymTopicId}`)).body.data.author.firstName).toBe(asker.firstName);
  });
});
