const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const request = require('supertest');
const { app } = require('../src/app');
const { signAccessToken } = require('../src/utils/tokens');
const { createTestUser, cleanupTestUsers, prisma } = require('./helpers/fixtures');

// Salle virtuelle : réunion meet.jit.si ouverte dans un nouvel onglet. Le lien n'est donné
// que lorsque la salle est ouverte ; le nom de salle est imprévisible et change à chaque session.
const SLUG = 'formation-visio-test';
const EMAILS = ['ultra@visio.test.com', 'mentor@visio.test.com', 'member@visio.test.com'];

describe('Salle virtuelle', () => {
  let formation, ultraToken, mentorToken, memberToken;

  beforeAll(async () => {
    await prisma.formation.deleteMany({ where: { slug: SLUG } });
    const ultra = await createTestUser({ email: EMAILS[0], role: 'ULTRA_ADMIN' });
    const mentor = await createTestUser({ email: EMAILS[1] });
    const member = await createTestUser({ email: EMAILS[2] });
    const role = await prisma.adminRole.upsert({
      where: { name: 'MENTOR_EXPERT' }, update: {},
      create: { name: 'MENTOR_EXPERT', description: 'Mentor', isSystem: true, requiresApproval: false },
    });
    await prisma.userAdminRole.create({ data: { userId: mentor.id, adminRoleId: role.id, status: 'APPROVED', reviewedAt: new Date() } });
    formation = await prisma.formation.create({
      data: { slug: SLUG, title: 'Formation visio test', description: 'Description de test suffisante', status: 'PUBLISHED' },
    });
    await prisma.formationTrainer.create({ data: { formationId: formation.id, userId: mentor.id } });
    [ultraToken, mentorToken, memberToken] = [ultra, mentor, member].map(signAccessToken);
  });

  afterAll(async () => {
    await prisma.formation.deleteMany({ where: { slug: SLUG } });
    await cleanupTestUsers(EMAILS);
    await prisma.$disconnect();
  });

  const session = (token) => {
    const req = request(app).get(`/api/formations/${SLUG}/visio`);
    return token ? req.set('Authorization', `Bearer ${token}`) : req;
  };

  it('ne donne aucun lien tant que la salle est fermée', async () => {
    const res = await session();
    expect(res.status).toBe(200);
    expect(res.body.data.visioStatus).toBe('INACTIVE');
    expect(res.body.data.meetingUrl).toBeNull();
    expect(res.body.data.isModerator).toBe(false);
  });

  it('reconnaît la Présidence et le mentor de la formation comme animateurs', async () => {
    expect((await session(ultraToken)).body.data.isModerator).toBe(true);
    expect((await session(mentorToken)).body.data.isModerator).toBe(true);
    expect((await session(memberToken)).body.data.isModerator).toBe(false);
  });

  it('ouvre une salle au nom imprévisible et donne le lien aux participants', async () => {
    await request(app).post(`/api/mentoring/formations/${formation.id}/visio/start`).set('Authorization', `Bearer ${mentorToken}`).expect(200);
    const res = await session();
    expect(res.body.data.visioStatus).toBe('LIVE');
    expect(res.body.data.provider).toBe('jitsi');
    expect(res.body.data.meetingUrl).toMatch(/^https:\/\/meet\.jit\.si\/lmdt-formation-visio-test-[0-9a-f]{12}$/);
    expect(res.body.data.maxDurationMinutes).toBe(95);
  });

  it('garde le même lien tant que la session est ouverte', async () => {
    const before = (await session()).body.data.roomId;
    await request(app).post(`/api/mentoring/formations/${formation.id}/visio/start`).set('Authorization', `Bearer ${mentorToken}`).expect(200);
    expect((await session()).body.data.roomId).toBe(before);
  });

  it('ne révèle pas le nom de salle dans la liste ou la fiche publiques', async () => {
    const list = await request(app).get('/api/formations');
    const item = list.body.data.find((f) => f.id === formation.id);
    expect(item).toBeDefined();
    expect(item.visioRoomId).toBeUndefined();
    const detail = await request(app).get(`/api/formations/${SLUG}`);
    expect(detail.body.data.visioRoomId).toBeUndefined();
  });

  it('ferme la salle, puis en ouvre une nouvelle avec un autre lien', async () => {
    const first = (await session()).body.data.roomId;
    await request(app).post(`/api/mentoring/formations/${formation.id}/visio/stop`).set('Authorization', `Bearer ${mentorToken}`).expect(200);
    const closed = await session();
    expect(closed.body.data.visioStatus).toBe('ENDED');
    expect(closed.body.data.meetingUrl).toBeNull();
    await request(app).post(`/api/mentoring/formations/${formation.id}/visio/start`).set('Authorization', `Bearer ${ultraToken}`).expect(200);
    expect((await session()).body.data.roomId).not.toBe(first);
  });

  it('refuse l\'ouverture aux membres', async () => {
    expect((await request(app).post(`/api/mentoring/formations/${formation.id}/visio/start`).set('Authorization', `Bearer ${memberToken}`)).status).toBe(403);
    expect((await request(app).post(`/api/formations/${formation.id}/visio/start`).set('Authorization', `Bearer ${memberToken}`)).status).toBe(403);
  });

  describe('réunion intégrée (JaaS)', () => {
    const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', { modulusLength: 2048 });
    const APP_ID = 'vpaas-magic-cookie-test123';
    const join = (token, body = {}) => {
      const req = request(app).post(`/api/formations/${SLUG}/visio/join`).send(body);
      return token ? req.set('Authorization', `Bearer ${token}`) : req;
    };

    beforeAll(() => {
      process.env.JAAS_APP_ID = APP_ID;
      process.env.JAAS_KEY_ID = 'abc123';
      // Clé collée sur une seule ligne, comme dans certains tableaux de bord
      process.env.JAAS_PRIVATE_KEY = privateKey.export({ type: 'pkcs1', format: 'pem' }).replace(/\n/g, '\\n');
    });
    afterAll(() => {
      delete process.env.JAAS_APP_ID;
      delete process.env.JAAS_KEY_ID;
      delete process.env.JAAS_PRIVATE_KEY;
    });

    it('n\'expose plus de lien direct et annonce la réunion intégrée', async () => {
      const d = (await session()).body.data;
      expect(d.provider).toBe('jaas');
      expect(d.visioStatus).toBe('LIVE');
      expect(d.meetingUrl).toBeNull();
      expect(d.maxDurationMinutes).toBeNull();
    });

    it('délivre un jeton signé limité à la salle, modérateur pour l\'animateur', async () => {
      const room = (await session()).body.data.roomId;
      const res = await join(mentorToken);
      expect(res.status).toBe(200);
      expect(res.body.data).toMatchObject({ domain: '8x8.vc', roomName: `${APP_ID}/${room}`, scriptUrl: `https://8x8.vc/${APP_ID}/external_api.js`, isModerator: true });
      const decoded = jwt.verify(res.body.data.jwt, publicKey, { algorithms: ['RS256'], complete: true });
      expect(decoded.header.kid).toBe(`${APP_ID}/abc123`);
      expect(decoded.payload).toMatchObject({ aud: 'jitsi', iss: 'chat', sub: APP_ID, room });
      expect(decoded.payload.context.user.moderator).toBe('true');
      expect(decoded.payload.context.features.recording).toBe(false);
    });

    it('fait entrer les invités sans compte, sans droits de modération', async () => {
      const res = await join(null, { name: '  Awa <b>Ndiaye</b> ' });
      expect(res.status).toBe(200);
      const payload = jwt.decode(res.body.data.jwt);
      expect(payload.context.user.name).toBe('Awa bNdiaye/b');
      expect(payload.context.user.moderator).toBe('false');
      expect(res.body.data.isModerator).toBe(false);
      expect((await join(memberToken)).body.data.isModerator).toBe(false);
    });

    it('refuse l\'entrée quand la salle est fermée', async () => {
      await request(app).post(`/api/mentoring/formations/${formation.id}/visio/stop`).set('Authorization', `Bearer ${mentorToken}`).expect(200);
      expect((await join(memberToken)).status).toBe(409);
    });
  });

  it('signale une formation inconnue', async () => {
    expect((await request(app).get('/api/formations/formation-qui-n-existe-pas/visio')).status).toBe(404);
  });
});
