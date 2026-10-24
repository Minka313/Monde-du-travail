const request = require('supertest');
const { app } = require('../src/app');
const { prisma } = require('./helpers/fixtures');

// Une formation se lit par son identifiant ou par le slug de sa fiche pédagogique
const SLUG = 'formation-slug-test';

describe('Formation par slug', () => {
  let formation;

  beforeAll(async () => {
    await prisma.formation.deleteMany({ where: { slug: { in: [SLUG, `${SLUG}-brouillon`] } } });
    formation = await prisma.formation.create({
      data: { slug: SLUG, title: 'Formation slug test', description: 'Description de test suffisante', status: 'PUBLISHED' },
    });
    await prisma.formation.create({
      data: { slug: `${SLUG}-brouillon`, title: 'Brouillon slug test', description: 'Description de test suffisante', status: 'DRAFT' },
    });
  });

  afterAll(async () => {
    await prisma.formation.deleteMany({ where: { slug: { in: [SLUG, `${SLUG}-brouillon`] } } });
    await prisma.$disconnect();
  });

  it('renvoie la formation publiée par son slug', async () => {
    const res = await request(app).get(`/api/formations/${SLUG}`);
    expect(res.status).toBe(200);
    expect(res.body.data.id).toBe(formation.id);
    expect(res.body.data.slug).toBe(SLUG);
  });

  it('renvoie toujours la formation par son identifiant', async () => {
    const res = await request(app).get(`/api/formations/${formation.id}`);
    expect(res.status).toBe(200);
    expect(res.body.data.slug).toBe(SLUG);
  });

  it('ne révèle pas un brouillon par son slug', async () => {
    const res = await request(app).get(`/api/formations/${SLUG}-brouillon`);
    expect(res.status).toBe(404);
  });

  it('référence la fiche publiée dans le sitemap, pas le brouillon', async () => {
    const res = await request(app).get('/sitemap.xml');
    expect(res.text).toContain(`/formation-detail?slug=${SLUG}</loc>`);
    expect(res.text).not.toContain(`${SLUG}-brouillon`);
  });

  it('expose le slug dans la liste publique', async () => {
    const res = await request(app).get('/api/formations');
    const found = (res.body.data || []).find((f) => f.id === formation.id);
    expect(found?.slug).toBe(SLUG);
  });
});
