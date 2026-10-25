const request = require('supertest');
const { app } = require('../src/app');
const { signAccessToken } = require('../src/utils/tokens');
const { createTestUser, cleanupTestUsers, prisma } = require('./helpers/fixtures');
const SettingsService = require('../src/services/settingsService');

// Vitrine éditoriale : témoignages et mentors saisis dans l'admin (aucun contenu fictif),
// photo de profil reprise du compte relié, anciennes valeurs inventées corrigées.
const EMAILS = ['ultra@vitrine.test.com', 'mentor@vitrine.test.com'];
const KEYS = ['home.testimonials', 'about.mentors', 'about.timeline_steps', 'site.contactEmail', 'home.featured_monthly'];

describe('Vitrine éditoriale', () => {
  let ultraToken, mentor, saved;

  const put = (key, value) => request(app).put(`/api/settings/${key}`)
    .set('Authorization', `Bearer ${ultraToken}`)
    .send({ value: typeof value === 'string' ? value : JSON.stringify(value) });
  const publicSettings = async () => {
    SettingsService.invalidatePublicCache();
    return (await request(app).get('/api/settings/public')).body.data;
  };

  beforeAll(async () => {
    ultraToken = signAccessToken(await createTestUser({ email: EMAILS[0], role: 'ULTRA_ADMIN' }));
    mentor = await createTestUser({ email: EMAILS[1], firstName: 'Awa', lastName: 'Diallo' });
    await prisma.user.update({ where: { id: mentor.id }, data: { avatarUrl: 'https://media.example.org/avatars/awa.webp' } });
    await SettingsService.ensureDefaults();
    saved = await prisma.setting.findMany({ where: { key: { in: KEYS } } });
  });

  afterAll(async () => {
    for (const s of saved) await prisma.setting.update({ where: { key: s.key }, data: { value: s.value } });
    SettingsService.invalidatePublicCache();
    await cleanupTestUsers(EMAILS);
    await prisma.$disconnect();
  });

  it("crée les nouveaux paramètres vides : aucun témoignage ni mentor fictif", async () => {
    await prisma.setting.updateMany({ where: { key: { in: ['home.testimonials', 'about.mentors'] } }, data: { value: '[]' } });
    const data = await publicSettings();
    expect(data['home.testimonials']).toEqual([]);
    expect(data['about.mentors']).toEqual([]);
  });

  it('enregistre un témoignage et refuse une photo non https ou un texte vide', async () => {
    expect((await put('home.testimonials', [{ name: 'Fatou', quote: 'court' }])).status).toBe(400);
    expect((await put('home.testimonials', [{ name: 'Fatou', quote: 'Le club m\'a aidée à préparer mon concours.', photo: 'javascript:alert(1)' }])).status).toBe(400);
    expect((await put('home.testimonials', [{ quote: 'Un témoignage sans nom ni membre relié.' }])).status).toBe(400);
    expect((await put('home.testimonials', 'pas du json')).status).toBe(400);
    const ok = await put('home.testimonials', [{ name: 'Fatou K.', role: 'Terminale S2', quote: 'Le club m\'a aidée à préparer mon concours.' }]);
    expect(ok.status).toBe(200);
    const data = await publicSettings();
    expect(data['home.testimonials']).toEqual([{ name: 'Fatou K.', role: 'Terminale S2', quote: 'Le club m\'a aidée à préparer mon concours.' }]);
  });

  it('reprend la photo de profil et le nom du membre relié, même après changement de photo', async () => {
    const res = await put('about.mentors', [{ userId: mentor.id, role: 'Ingénieure', quote: 'Travaillez chaque jour un peu.' }]);
    expect(res.status).toBe(200);
    let [m] = (await publicSettings())['about.mentors'];
    expect(m).toMatchObject({ name: 'Awa Diallo', photo: 'https://media.example.org/avatars/awa.webp', role: 'Ingénieure' });

    await prisma.user.update({ where: { id: mentor.id }, data: { avatarUrl: 'https://media.example.org/avatars/awa-2.webp' } });
    [m] = (await publicSettings())['about.mentors'];
    expect(m.photo).toBe('https://media.example.org/avatars/awa-2.webp');
  });

  it('refuse un lien LinkedIn qui ne pointe pas vers linkedin.com', async () => {
    expect((await put('about.mentors', [{ name: 'X', role: 'Mentor', linkedin: 'https://evil.example.com' }])).status).toBe(400);
  });

  it("remplace l'ancienne histoire inventée et l'ancienne adresse tant qu'elles n'ont pas été modifiées", async () => {
    await prisma.setting.update({
      where: { key: 'about.timeline_steps' },
      data: { value: JSON.stringify([
        { year: '2024', title: 'Fondation du Club & Première Cohorte', description: "Naissance de l'initiative à Dakar pour pallier le manque de préparation pratique des diplômés. Lancement des premiers ateliers de simulation d'entretiens et décryptage des codes pro." },
        { year: '2025', title: 'Masterclasses Soft Skills & Réseau Mentorat', description: "Structuration d'un catalogue de 12 formations certifiantes et ralliement de plus de 10 professionnels et cadres partenaires pour guider les jeunes en individuel." },
        { year: '2026', title: 'Plateforme Numérique & Communauté Ouverte', description: "Déploiement de l'espace membre interactif, du forum d'entraide et du référentiel des 21 familles de métiers d'avenir pour impacter des milliers de jeunes." },
      ]) },
    });
    await prisma.setting.update({ where: { key: 'site.contactEmail' }, data: { value: 'contact@mondedutravail.com' } });
    await prisma.setting.update({
      where: { key: 'home.featured_monthly' },
      data: { value: JSON.stringify({ title: 'Masterclass', perks: ['📅 Samedi', '🎓 Attestation certifiée'] }) },
    });

    const data = await publicSettings();
    expect(data['about.timeline_steps'][0]).toMatchObject({ year: '2025', title: 'Fondation du Club au LYNAQE de Sédhiou' });
    expect(JSON.stringify(data['about.timeline_steps'])).not.toMatch(/Dakar|certifiantes/);
    expect(data['site.contactEmail']).toBe('lemondedutravailsen@gmail.com');
    expect(data['home.featured_monthly'].perks).toEqual(['📅 Samedi']);

    // Une frise écrite par l'équipe est conservée telle quelle
    await prisma.setting.update({ where: { key: 'about.timeline_steps' }, data: { value: JSON.stringify([{ year: '2027', title: 'Étape réelle' }]) } });
    expect((await publicSettings())['about.timeline_steps']).toEqual([{ year: '2027', title: 'Étape réelle' }]);
  });
});
