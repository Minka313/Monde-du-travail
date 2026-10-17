const request = require('supertest');
const { app } = require('../src/app');
const { createTestUser, cleanupTestUsers, prisma } = require('./helpers/fixtures');

const AUTHOR_EMAIL = 'author@sitemap.test.com';
const CATALOG_JOB_ID = 'metier-test-sitemap';

describe('GET /sitemap.xml', () => {
  let cuidJob;

  beforeAll(async () => {
    const author = await createTestUser({ email: AUTHOR_EMAIL, role: 'ADMIN', adminRole: 'ADMIN_BLOG' });
    await prisma.post.create({
      data: {
        title: 'Article sitemap', slug: 'article-sitemap-test', content: 'Contenu', category: 'CLUB',
        status: 'PUBLISHED', publishedAt: new Date(), authorId: author.id,
      },
    });
    await prisma.post.create({
      data: {
        title: 'Brouillon sitemap', slug: 'brouillon-sitemap-test', content: 'Contenu', category: 'CLUB',
        status: 'DRAFT', authorId: author.id,
      },
    });
    await prisma.job.deleteMany({ where: { id: CATALOG_JOB_ID } });
    await prisma.job.create({
      data: { id: CATALOG_JOB_ID, title: 'Métier catalogue', description: 'Desc', category: 'TECH', status: 'PUBLISHED' },
    });
    cuidJob = await prisma.job.create({
      data: { title: 'Métier admin sans fiche', description: 'Desc', category: 'TECH', status: 'PUBLISHED' },
    });
  });

  afterAll(async () => {
    await prisma.job.deleteMany({ where: { id: { in: [CATALOG_JOB_ID, cuidJob.id] } } });
    await cleanupTestUsers([AUTHOR_EMAIL]);
  });

  it('renvoie un XML valide avec les pages publiques', async () => {
    const res = await request(app).get('/sitemap.xml');
    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toMatch(/application\/xml/);
    expect(res.text).toMatch(/^<\?xml version="1.0" encoding="UTF-8"\?>/);
    expect(res.text).toContain('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
    ['/metiers</loc>', '/formations</loc>', '/blog</loc>', '/forum</loc>'].forEach((path) => {
      expect(res.text).toContain(path);
    });
  });

  it('liste les articles publiés et ignore les brouillons', async () => {
    const res = await request(app).get('/sitemap.xml');
    expect(res.text).toContain('/blog-post.html?slug=article-sitemap-test');
    expect(res.text).not.toContain('brouillon-sitemap-test');
  });

  it('liste les fiches métiers du catalogue mais pas les métiers sans fiche', async () => {
    const res = await request(app).get('/sitemap.xml');
    expect(res.text).toContain(`/metier?slug=${CATALOG_JOB_ID}`);
    expect(res.text).not.toContain(cuidJob.id);
  });

  it('n\'expose aucune page privée', async () => {
    const res = await request(app).get('/sitemap.xml');
    expect(res.text).not.toMatch(/admin|login|profile|reset-password/);
  });
});
