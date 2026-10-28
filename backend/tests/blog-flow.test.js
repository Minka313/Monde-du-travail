const request = require('supertest');
const { app } = require('../src/app');
const { signAccessToken } = require('../src/utils/tokens');
const { createTestUser, cleanupTestUsers, prisma } = require('./helpers/fixtures');

// Parcours complet d'un article : création depuis l'admin (résumé vide), mise à la une,
// soumission, publication, puis affichage dans la liste publique et sur sa page.
const EMAIL = 'ultra@blogflow.test.com';
const TAG = '[BLOG-FLOW]';

describe("Blog : de la création à l'affichage", () => {
  let token, post;
  const auth = (req) => req.set('Authorization', `Bearer ${token}`);
  const body = (extra = {}) => ({
    title: `${TAG} Retour sur l'atelier CV`,
    category: 'ATELIER',
    content: "Compte rendu complet de l'atelier CV organisé par le club au LYNAQE.",
    excerpt: null,
    coverImage: null,
    featured: true,
    tags: ['cv'],
    ...extra,
  });

  beforeAll(async () => {
    token = signAccessToken(await createTestUser({ email: EMAIL, role: 'ULTRA_ADMIN' }));
  });

  afterAll(async () => {
    await prisma.post.deleteMany({ where: { title: { startsWith: TAG } } });
    await cleanupTestUsers([EMAIL]);
    await prisma.$disconnect();
  });

  it("crée un article sans résumé (champ laissé vide dans l'admin)", async () => {
    const res = await auth(request(app).post('/api/blog')).send(body());
    expect(res.status).toBe(201);
    post = res.body.data;
    expect(post.status).toBe('DRAFT');
  });

  it('accepte un second article au même titre avec un lien distinct', async () => {
    const res = await auth(request(app).post('/api/blog')).send(body({ featured: false }));
    expect(res.status).toBe(201);
    expect(res.body.data.slug).toBe(`${post.slug}-2`);
  });

  it("publie l'article puis l'affiche dans la liste publique, même mis à la une", async () => {
    expect((await auth(request(app).post(`/api/blog/${post.id}/submit`))).status).toBe(200);
    expect((await auth(request(app).post(`/api/blog/${post.id}/publish`))).status).toBe(200);

    const list = await request(app).get('/api/blog?page=1&limit=9&sort=latest');
    expect(list.status).toBe(200);
    expect(list.body.data.map((p) => p.id)).toContain(post.id);

    const page = await request(app).get(`/api/blog/slug/${post.slug}`);
    expect(page.status).toBe(200);
    expect(page.body.data.title).toBe(post.title);
  });

  it("garde le lien d'un article publié quand son titre est corrigé", async () => {
    const res = await auth(request(app).put(`/api/blog/${post.id}`)).send({ title: `${TAG} Retour sur l'atelier CV (photos)` });
    expect(res.status).toBe(200);
    expect(res.body.data.slug).toBe(post.slug);
    expect((await request(app).get(`/api/blog/slug/${post.slug}`)).status).toBe(200);
  });
});
