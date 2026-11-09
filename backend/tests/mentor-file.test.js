const request = require('supertest');
const { app } = require('../src/app');
const { signAccessToken } = require('../src/utils/tokens');
const { createTestUser, cleanupTestUsers, prisma } = require('./helpers/fixtures');

// Fiche d'un mentor : réservée à la Présidence, avec notes privées
const EMAILS = ['pres@file.test.com', 'mentor@file.test.com', 'membre@file.test.com'];

describe('Fiche mentor', () => {
  const tokens = {};
  let mentor;
  const as = (who) => ({ Authorization: `Bearer ${tokens[who]}` });

  beforeAll(async () => {
    await cleanupTestUsers(EMAILS);
    const pres = await createTestUser({ email: EMAILS[0], role: 'ULTRA_ADMIN', firstName: 'Awa', lastName: 'Présidente' });
    mentor = await createTestUser({ email: EMAILS[1], adminRole: 'MENTOR_EXPERT', firstName: 'Mamadou', lastName: 'Mentor' });
    const membre = await createTestUser({ email: EMAILS[2], firstName: 'Simple', lastName: 'Membre' });
    Object.assign(tokens, { pres: signAccessToken(pres), mentor: signAccessToken(mentor), membre: signAccessToken(membre) });
    await prisma.mentorProfile.create({ data: { userId: mentor.id, headline: 'Ingénieur BTP', domains: 'BTP, concours' } });
    const ship = await prisma.mentorship.create({ data: { mentorId: mentor.id, menteeName: 'Fatou Élève', goals: 'Préparer un concours' } });
    await prisma.mentorSession.create({ data: { mentorshipId: ship.id, scheduledAt: new Date(Date.now() - 86400000), format: 'Visio du club', status: 'DONE', menteeRating: 5, menteeComment: 'Très utile', feedbackAt: new Date() } });
    await prisma.mentorSession.create({ data: { mentorshipId: ship.id, scheduledAt: new Date(Date.now() - 172800000), format: 'WhatsApp', status: 'DONE', menteeRating: 4 } });
  });

  afterAll(async () => {
    await prisma.mentorship.deleteMany({ where: { mentorId: mentor.id } });
    await cleanupTestUsers(EMAILS);
    await prisma.$disconnect();
  });

  it('réserve la fiche à la Présidence (pas au mentor lui-même)', async () => {
    expect((await request(app).get(`/api/mentoring/mentors/${mentor.id}/file`).set(as('membre'))).status).toBe(403);
    expect((await request(app).get(`/api/mentoring/mentors/${mentor.id}/file`).set(as('mentor'))).status).toBe(403);
    expect((await request(app).get(`/api/mentoring/mentors/${mentor.id}/file`)).status).toBe(401);
  });

  it('rassemble profil, activité, binômes et avis', async () => {
    const res = await request(app).get(`/api/mentoring/mentors/${mentor.id}/file`).set(as('pres'));
    expect(res.status).toBe(200);
    const f = res.body.data;
    expect(f).toMatchObject({ fullName: 'Mamadou Mentor', email: EMAILS[1] });
    expect(f.profile).toMatchObject({ headline: 'Ingénieur BTP', domains: 'BTP, concours' });
    expect(f.stats).toMatchObject({ activePairs: 1, totalPairs: 1, sessionsDone: 2, averageRating: 4.5, ratingsCount: 2 });
    expect(f.mentorships[0]).toMatchObject({ menteeName: 'Fatou Élève', sessionsDone: 2 });
    expect(f.recentComments).toEqual([expect.objectContaining({ rating: 5, comment: 'Très utile' })]);
    expect(f.note).toBeNull();
  });

  it('refuse la fiche d\'un compte qui n\'est pas mentor', async () => {
    const other = await prisma.user.findUnique({ where: { email: EMAILS[2] } });
    expect((await request(app).get(`/api/mentoring/mentors/${other.id}/file`).set(as('pres'))).status).toBe(404);
  });

  it('garde des notes privées, effaçables, que seule la Présidence lit', async () => {
    expect((await request(app).put(`/api/mentoring/mentors/${mentor.id}/note`).set(as('mentor')).send({ content: 'Test' })).status).toBe(403);
    const saved = await request(app).put(`/api/mentoring/mentors/${mentor.id}/note`).set(as('pres')).send({ content: '  Très impliqué, à solliciter pour les ateliers.  ' });
    expect(saved.status).toBe(200);
    expect(saved.body.data.note.content).toBe('Très impliqué, à solliciter pour les ateliers.');
    expect((await request(app).get(`/api/mentoring/mentors/${mentor.id}/file`).set(as('pres'))).body.data.note.content).toContain('ateliers');
    expect((await request(app).put(`/api/mentoring/mentors/${mentor.id}/note`).set(as('pres')).send({ content: 'x'.repeat(5001) })).status).toBe(400);
    expect((await request(app).put(`/api/mentoring/mentors/${mentor.id}/note`).set(as('pres')).send({ content: '' })).body.data.note).toBeNull();
  });
});
