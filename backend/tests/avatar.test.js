const request = require('supertest');
const { app } = require('../src/app');
const { signAccessToken } = require('../src/utils/tokens');
const { createTestUser, cleanupTestUsers, prisma } = require('./helpers/fixtures');

// Photo de profil : fichier envoyé au stockage, avatars illustrés, suppression
const EMAILS = ['avatar@profile.test.com'];
const JPEG = Buffer.concat([Buffer.from([0xff, 0xd8, 0xff, 0xe0]), Buffer.alloc(2048, 1)]);
const SVG = `data:image/svg+xml;utf8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"/></svg>')}`;

describe('Photo de profil', () => {
  let user, token;

  beforeAll(async () => {
    user = await createTestUser({ email: EMAILS[0] });
    token = signAccessToken(user);
  });

  afterAll(async () => {
    await cleanupTestUsers(EMAILS);
    await prisma.$disconnect();
  });

  const upload = (buffer, name = 'photo.jpg', type = 'image/jpeg') => request(app)
    .post('/api/auth/me/avatar/upload').set('Authorization', `Bearer ${token}`)
    .attach('file', buffer, { filename: name, contentType: type });

  it('enregistre une photo personnelle dans le dossier avatars', async () => {
    const res = await upload(JPEG);
    expect(res.status).toBe(200);
    expect(res.body.data.avatarUrl).toMatch(/^https:\/\/.+\/avatars\/.+\.jpe?g$/);
    const saved = await prisma.user.findUnique({ where: { id: user.id }, select: { avatarUrl: true } });
    expect(saved.avatarUrl).toBe(res.body.data.avatarUrl);
  });

  it('refuse un fichier qui n\'est pas une image, même déguisé', async () => {
    expect((await upload(Buffer.from('<script>alert(1)</script>'), 'x.jpg')).status).toBe(400);
    expect((await upload(Buffer.from('%PDF-1.4'), 'x.pdf', 'application/pdf')).status).toBe(400);
  });

  it('refuse une photo trop lourde et exige une connexion', async () => {
    expect((await upload(Buffer.concat([JPEG, Buffer.alloc(3 * 1024 * 1024)]))).status).toBe(400);
    expect((await request(app).post('/api/auth/me/avatar/upload').attach('file', JPEG, 'p.jpg')).status).toBe(401);
  });

  it('accepte un avatar illustré et la suppression', async () => {
    const put = (avatarUrl) => request(app).put('/api/auth/me/avatar').set('Authorization', `Bearer ${token}`).send({ avatarUrl });
    expect((await put(SVG)).body.data.avatarUrl).toBe(SVG);
    const removed = await put(null);
    expect(removed.status).toBe(200);
    expect(removed.body.data.avatarUrl).toBeNull();
  });

  it('refuse les adresses dangereuses ou les images collées en texte', async () => {
    const put = (avatarUrl) => request(app).put('/api/auth/me/avatar').set('Authorization', `Bearer ${token}`).send({ avatarUrl });
    expect((await put('javascript:alert(1)')).status).toBe(400);
    expect((await put('data:image/jpeg;base64,/9j/AAAA')).status).toBe(400);
  });
});
