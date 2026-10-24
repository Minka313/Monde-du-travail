const request = require('supertest');
const { app } = require('../src/app');
const { signAccessToken } = require('../src/utils/tokens');
const { createTestUser, cleanupTestUsers, prisma } = require('./helpers/fixtures');

// Espace Mentor : binômes attribués par la Présidence, formations animées,
// comptes rendus confidentiels validés par la Présidence, messagerie de coordination.
const EMAILS = ['president@men.test.com', 'mentor@men.test.com', 'mentor2@men.test.com', 'mentore@men.test.com', 'membre@men.test.com'];
const FORMATION_SLUG = 'formation-mentorat-test';

describe('Espace Mentor', () => {
  let president, mentor, mentor2, mentee, membre;
  let tokens = {};
  let formation, mentorshipId;

  const api = (method, url, who) => request(app)[method](`/api/mentoring${url}`).set('Authorization', `Bearer ${tokens[who]}`);

  async function makeMentor(user) {
    const role = await prisma.adminRole.upsert({
      where: { name: 'MENTOR_EXPERT' },
      update: {},
      create: { name: 'MENTOR_EXPERT', description: 'Mentor & Expert', isSystem: true, requiresApproval: false },
    });
    await prisma.userAdminRole.create({ data: { userId: user.id, adminRoleId: role.id, status: 'APPROVED', reviewedAt: new Date() } });
  }

  beforeAll(async () => {
    await prisma.formation.deleteMany({ where: { slug: FORMATION_SLUG } });
    president = await createTestUser({ email: EMAILS[0], role: 'ULTRA_ADMIN', firstName: 'Awa', lastName: 'Présidente' });
    mentor = await createTestUser({ email: EMAILS[1], firstName: 'Cheikh', lastName: 'Mentor' });
    mentor2 = await createTestUser({ email: EMAILS[2], firstName: 'Ndèye', lastName: 'Coach' });
    mentee = await createTestUser({ email: EMAILS[3], firstName: 'Lamine', lastName: 'Mentoré' });
    membre = await createTestUser({ email: EMAILS[4], firstName: 'Simple', lastName: 'Membre' });
    await makeMentor(mentor);
    await makeMentor(mentor2);
    tokens = Object.fromEntries(Object.entries({ president, mentor, mentor2, mentee, membre }).map(([k, u]) => [k, signAccessToken(u)]));
    formation = await prisma.formation.create({
      data: { slug: FORMATION_SLUG, title: 'Formation mentorat test', description: 'Description de test suffisante', status: 'PUBLISHED' },
    });
    await prisma.formationRegistration.create({ data: { formationId: formation.id, name: 'Inscrit Test', email: 'inscrit@men.test.com', status: 'PENDING' } });
  });

  afterAll(async () => {
    const ids = [president, mentor, mentor2, mentee, membre].map((u) => u.id);
    await prisma.notification.deleteMany({ where: { userId: { in: ids } } });
    await prisma.mentorship.deleteMany({ where: { mentorId: { in: ids } } });
    await prisma.formation.deleteMany({ where: { slug: FORMATION_SLUG } });
    await cleanupTestUsers(EMAILS);
    await prisma.$disconnect();
  });

  describe('Accès', () => {
    it('refuse l\'espace aux membres sans rôle', async () => {
      expect((await api('get', '/context', 'membre')).status).toBe(403);
    });

    it('ouvre l\'espace au mentor et à la Présidence', async () => {
      const m = await api('get', '/context', 'mentor');
      expect(m.status).toBe(200);
      expect(m.body.data.isMentor).toBe(true);
      expect(m.body.data.isPresident).toBe(false);
      expect(Object.keys(m.body.data.templates)).toEqual(['MENTORAT', 'SESSION_FORMATION']);
      const p = await api('get', '/context', 'president');
      expect(p.body.data.isPresident).toBe(true);
    });

    it('expose le rôle de mentor dans /auth/me', async () => {
      const res = await request(app).get('/api/auth/me').set('Authorization', `Bearer ${tokens.mentor}`);
      expect(res.body.data.adminRoles).toContain('MENTOR_EXPERT');
    });
  });

  describe('Binômes', () => {
    it('réserve l\'attribution à la Présidence', async () => {
      const res = await api('post', '/mentorships', 'mentor').send({ mentorId: mentor.id, menteeId: mentee.id });
      expect(res.status).toBe(403);
    });

    it('refuse un mentor qui n\'en est pas un', async () => {
      const res = await api('post', '/mentorships', 'president').send({ mentorId: membre.id, menteeName: 'X' });
      expect(res.status).toBe(400);
    });

    it('crée un binôme et prévient le mentor et le mentoré', async () => {
      const res = await api('post', '/mentorships', 'president').send({ mentorId: mentor.id, menteeId: mentee.id, goals: 'Trouver un stage en finance' });
      expect(res.status).toBe(201);
      mentorshipId = res.body.data.id;
      expect(res.body.data.menteeName).toBe('Lamine Mentoré');
      expect(await prisma.notification.count({ where: { userId: mentor.id, title: { contains: 'mentoré' } } })).toBe(1);
      expect(await prisma.notification.count({ where: { userId: mentee.id } })).toBe(1);
    });

    it('crée un binôme avec une personne sans compte', async () => {
      const res = await api('post', '/mentorships', 'president').send({ mentorId: mentor2.id, menteeName: 'Fatou (lycée)', menteeContact: '77 000 00 00' });
      expect(res.status).toBe(201);
      expect(res.body.data.menteeId).toBeNull();
    });

    it('montre à chaque mentor ses seuls binômes', async () => {
      const m = await api('get', '/context', 'mentor');
      expect(m.body.data.mentorships.map((x) => x.id)).toEqual([mentorshipId]);
      const p = await api('get', '/context', 'president');
      expect(p.body.data.mentorships.length).toBeGreaterThanOrEqual(2);
    });

    it('laisse le mentor préciser les objectifs mais pas changer le statut', async () => {
      expect((await api('put', `/mentorships/${mentorshipId}`, 'mentor').send({ goals: 'Stage en audit d\'ici juin' })).status).toBe(200);
      expect((await api('put', `/mentorships/${mentorshipId}`, 'mentor').send({ status: 'ENDED' })).status).toBe(403);
      expect((await api('put', `/mentorships/${mentorshipId}`, 'mentor2').send({ goals: 'x' })).status).toBe(403);
    });
  });

  describe('Formations animées', () => {
    it('refuse l\'accès aux inscrits avant attribution', async () => {
      expect((await api('get', `/formations/${formation.id}/registrations`, 'mentor')).status).toBe(403);
    });

    it('permet à la Présidence de confier une formation', async () => {
      expect((await api('post', `/formations/${formation.id}/trainers`, 'president').send({ userId: mentor.id })).status).toBe(200);
      const ctx = await api('get', '/context', 'mentor');
      expect(ctx.body.data.formations.map((f) => f.id)).toEqual([formation.id]);
    });

    it('permet à l\'animateur de gérer inscrits et planning', async () => {
      const regs = await api('get', `/formations/${formation.id}/registrations`, 'mentor');
      expect(regs.status).toBe(200);
      const list = regs.body.data.registrations || regs.body.data.data || regs.body.data;
      const registration = (Array.isArray(list) ? list : []).find((r) => r.email === 'inscrit@men.test.com');
      expect(registration).toBeDefined();
      expect((await api('put', `/registrations/${registration.id}`, 'mentor').send({ status: 'ATTENDED' })).status).toBe(200);
      expect((await api('put', `/registrations/${registration.id}`, 'mentor2').send({ status: 'CANCELLED' })).status).toBe(403);

      const schedule = await api('put', `/formations/${formation.id}/schedule`, 'mentor').send({ startDate: '2026-11-10', location: 'Dakar, salle du club' });
      expect(schedule.status).toBe(200);
      expect(schedule.body.data.location).toBe('Dakar, salle du club');
      expect((await api('put', `/formations/${formation.id}/schedule`, 'mentor').send({ startDate: 'pas une date' })).status).toBe(400);
    });

    it('ouvre et ferme la salle virtuelle', async () => {
      expect((await api('post', `/formations/${formation.id}/visio/start`, 'mentor')).status).toBe(200);
      expect((await api('post', `/formations/${formation.id}/visio/stop`, 'mentor')).status).toBe(200);
      expect((await api('post', `/formations/${formation.id}/visio/start`, 'mentor2')).status).toBe(403);
    });
  });

  describe('Comptes rendus', () => {
    let reportId;

    it('refuse un compte rendu sur le binôme d\'un autre mentor', async () => {
      const res = await api('post', '/reports', 'mentor2').send({ kind: 'MENTORAT', mentorshipId });
      expect(res.status).toBe(403);
    });

    it('enregistre un brouillon de séance', async () => {
      const res = await api('post', '/reports', 'mentor').send({
        kind: 'MENTORAT',
        mentorshipId,
        content: { dateSeance: '2026-10-20', format: 'Visio', objectifs: 'Préparer le CV', inconnu: 'ignoré' },
      });
      expect(res.status).toBe(201);
      reportId = res.body.data.id;
      expect(res.body.data.title).toContain('Lamine Mentoré');
      expect(res.body.data.content.inconnu).toBeUndefined();
      expect(res.body.data.position.title).toContain('Mentorat');
    });

    it('garde le brouillon invisible pour la Présidence', async () => {
      expect((await api('get', `/reports/${reportId}`, 'president')).status).toBe(404);
    });

    it('soumet, notifie, puis valide après correction', async () => {
      const submit = await api('post', `/reports/${reportId}/submit`, 'mentor');
      expect(submit.body.data.status).toBe('SUBMITTED');
      expect(await prisma.notification.count({ where: { userId: president.id, url: `/mentor.html?report=${reportId}` } })).toBe(1);

      expect((await api('get', `/reports/${reportId}`, 'mentor2')).status).toBe(404);
      expect((await api('post', `/reports/${reportId}/review`, 'mentor').send({ decision: 'VALIDATED' })).status).toBe(403);

      const back = await api('post', `/reports/${reportId}/review`, 'president').send({ decision: 'NEEDS_CHANGES', comment: 'Ajoute les engagements pris' });
      expect(back.body.data.status).toBe('NEEDS_CHANGES');
      await api('put', `/reports/${reportId}`, 'mentor').send({ content: { dateSeance: '2026-10-20', objectifs: 'Préparer le CV', engagements: [{ action: 'Envoyer le CV', responsable: 'Lamine', echeance: '2026-10-27' }] } }).expect(200);
      await api('post', `/reports/${reportId}/submit`, 'mentor').expect(200);
      const ok = await api('post', `/reports/${reportId}/review`, 'president').send({ decision: 'VALIDATED' });
      expect(ok.body.data.status).toBe('VALIDATED');
      expect(ok.body.data.events.map((e) => e.action)).toEqual(['SUBMITTED', 'NEEDS_CHANGES', 'SUBMITTED', 'VALIDATED']);
    });

    it('exige les sections obligatoires d\'une session de formation', async () => {
      const draft = await api('post', '/reports', 'mentor').send({ kind: 'SESSION_FORMATION', formationId: formation.id, content: { dateSession: '2026-10-21' } });
      expect(draft.status).toBe(201);
      const res = await api('post', `/reports/${draft.body.data.id}/submit`, 'mentor');
      expect(res.status).toBe(400);
      expect(res.body.message).toContain('Module ou thème');
      expect((await api('post', '/reports', 'mentor2').send({ kind: 'SESSION_FORMATION', formationId: formation.id })).status).toBe(403);
    });

    it('liste les comptes rendus à examiner pour la Présidence', async () => {
      const res = await api('get', '/reports?scope=review', 'president');
      expect(res.status).toBe(200);
      expect(res.body.data.every((r) => r.status === 'SUBMITTED')).toBe(true);
    });
  });

  describe('Messagerie', () => {
    it('ouvre un fil mentor ↔ Présidence avec notifications et lecture', async () => {
      expect((await api('post', '/messages', 'mentor').send({ body: 'Bonjour, puis-je décaler la session de mardi ?' })).status).toBe(201);
      expect(await prisma.notification.count({ where: { userId: president.id, title: { contains: 'Message de Cheikh' } } })).toBe(1);

      const threads = await api('get', '/threads', 'president');
      const thread = threads.body.data.find((t) => t.threadUserId === mentor.id);
      expect(thread.unread).toBe(1);

      const read = await api('get', `/messages?thread=${mentor.id}`, 'president');
      expect(read.body.data).toHaveLength(1);
      expect((await api('get', '/threads', 'president')).body.data.find((t) => t.threadUserId === mentor.id).unread).toBe(0);

      await api('post', '/messages', 'president').send({ threadUserId: mentor.id, body: 'Oui, jeudi 18 h.' }).expect(201);
      const mine = await api('get', '/messages', 'mentor');
      expect(mine.body.data.map((m) => m.mine)).toEqual([true, false]);
    });

    it('cloisonne les fils entre mentors', async () => {
      const other = await api('get', '/messages', 'mentor2');
      expect(other.body.data).toHaveLength(0);
      expect((await api('get', '/threads', 'mentor')).status).toBe(403);
      expect((await api('post', '/messages', 'membre').send({ body: 'Coucou' })).status).toBe(403);
    });
  });
});
