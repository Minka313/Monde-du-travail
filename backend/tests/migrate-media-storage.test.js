const { createTestUser, cleanupTestUsers, prisma } = require('./helpers/fixtures');
const { columnsWithUrl, rewriteUrls } = require('../src/scripts/migrate-media-storage');

// Déménagement du stockage : seule la base d'URL des fichiers change, partout en base
// (texte, JSON, listes), sans toucher aux autres contenus.
const OLD = 'https://ancien.supabase.co/storage/v1/object/public/media';
const NEW = 'https://media.lemondedutravail.org';
const EMAILS = ['media@migration.test.com', 'other@migration.test.com'];

describe('Migration du stockage des fichiers', () => {
  let user, other, opp;

  beforeAll(async () => {
    user = await createTestUser({ email: EMAILS[0] });
    other = await createTestUser({ email: EMAILS[1] });
    await prisma.user.update({ where: { id: user.id }, data: { avatarUrl: `${OLD}/avatars/2026/10/a.webp` } });
    await prisma.user.update({ where: { id: other.id }, data: { avatarUrl: 'https://autre-site.example.org/photo.webp' } });
    await prisma.setting.upsert({
      where: { key: 'test.media.migration' },
      update: { value: JSON.stringify([{ name: 'Awa', photo: `${OLD}/vitrine/b.png` }]) },
      create: { key: 'test.media.migration', value: JSON.stringify([{ name: 'Awa', photo: `${OLD}/vitrine/b.png` }]) },
    });
    opp = await prisma.opportunity.create({
      data: {
        title: '[MIG-TEST] Annonce', organization: 'Test', category: 'BOURSE', summary: 'Résumé de test suffisant',
        documents: [`Brochure : ${OLD}/docs/c.pdf`, 'Extrait de naissance'],
        keyDates: [{ label: `Voir ${OLD}/docs/d.pdf`, date: '2027-01-01' }],
      },
    });
  });

  afterAll(async () => {
    await prisma.opportunity.deleteMany({ where: { title: { startsWith: '[MIG-TEST]' } } });
    await prisma.setting.deleteMany({ where: { key: 'test.media.migration' } });
    await cleanupTestUsers(EMAILS);
    await prisma.$disconnect();
  });

  it("repère toutes les colonnes contenant l'ancienne adresse (texte, JSON, listes)", async () => {
    const hits = await columnsWithUrl(OLD);
    const names = hits.map((h) => `${h.table_name}.${h.column_name}`);
    expect(names).toEqual(expect.arrayContaining(['users.avatar_url', 'settings.value', 'opportunities.documents', 'opportunities.keyDates']));
  });

  it("remplace l'adresse partout sans toucher au reste", async () => {
    await rewriteUrls(await columnsWithUrl(OLD), OLD, NEW);
    expect((await prisma.user.findUnique({ where: { id: user.id } })).avatarUrl).toBe(`${NEW}/avatars/2026/10/a.webp`);
    expect((await prisma.user.findUnique({ where: { id: other.id } })).avatarUrl).toBe('https://autre-site.example.org/photo.webp');
    expect(JSON.parse((await prisma.setting.findUnique({ where: { key: 'test.media.migration' } })).value)[0].photo).toBe(`${NEW}/vitrine/b.png`);
    const o = await prisma.opportunity.findUnique({ where: { id: opp.id } });
    expect(o.documents).toEqual([`Brochure : ${NEW}/docs/c.pdf`, 'Extrait de naissance']);
    expect(o.keyDates).toEqual([{ label: `Voir ${NEW}/docs/d.pdf`, date: '2027-01-01' }]);
    expect(await columnsWithUrl(OLD)).toEqual([]);
  });
});
