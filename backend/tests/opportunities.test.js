const request = require('supertest');
const { app } = require('../src/app');
const { signAccessToken } = require('../src/utils/tokens');
const { createTestUser, cleanupTestUsers, prisma } = require('./helpers/fixtures');
const { computePhase, isNextSession } = require('../src/services/opportunityService');
const { run: importOpportunities, loadItems } = require('../src/scripts/import-opportunities');

// Rubrique « Concours & opportunités » : publication réservée aux annonces
// sourcées et vérifiées, filtres publics, phases calculées depuis les dates.
const EMAILS = ['ultra@opp.test.com', 'oppadmin@opp.test.com', 'blogadmin@opp.test.com', 'member@opp.test.com'];
const TAG = '[OPP-TEST]';

function isoDay(offsetDays) {
  return new Date(Date.now() + offsetDays * 86400000).toISOString().slice(0, 10);
}

const base = {
  title: `${TAG} Bourse d'excellence`,
  organization: 'Ministère de l\'Enseignement supérieur',
  category: 'BOURSE',
  summary: 'Bourse complète pour les bacheliers méritants.',
  levels: ['BACHELIER'],
  destination: 'SENEGAL',
};

describe('Concours & opportunités', () => {
  let ultraToken, oppToken, blogToken, memberToken;

  beforeAll(async () => {
    const ultra = await createTestUser({ email: EMAILS[0], role: 'ULTRA_ADMIN' });
    const oppAdmin = await createTestUser({ email: EMAILS[1], role: 'MEMBER', adminRole: 'ADMIN_OPPORTUNITE' });
    const blogAdmin = await createTestUser({ email: EMAILS[2], role: 'MEMBER', adminRole: 'ADMIN_BLOG' });
    const member = await createTestUser({ email: EMAILS[3] });
    [ultraToken, oppToken, blogToken, memberToken] = [ultra, oppAdmin, blogAdmin, member].map(signAccessToken);
  });

  afterAll(async () => {
    await prisma.opportunity.deleteMany({ where: { title: { startsWith: TAG } } });
    await cleanupTestUsers(EMAILS);
    await prisma.$disconnect();
  });

  const create = (body, token = oppToken) => request(app)
    .post('/api/opportunities')
    .set('Authorization', `Bearer ${token}`)
    .send({ ...base, ...body });

  describe('Droits', () => {
    it('refuse la création sans authentification', async () => {
      const res = await request(app).post('/api/opportunities').send(base);
      expect(res.status).toBe(401);
    });

    it('refuse la création à un membre et à un admin d\'un autre module', async () => {
      expect((await create({}, memberToken)).status).toBe(403);
      expect((await create({}, blogToken)).status).toBe(403);
    });

    it('autorise ADMIN_OPPORTUNITE et ULTRA_ADMIN (brouillon)', async () => {
      const res = await create({ title: `${TAG} Créée par admin module` });
      expect(res.status).toBe(201);
      expect(res.body.data.status).toBe('DRAFT');
      const ultra = await create({ title: `${TAG} Créée par ultra` }, ultraToken);
      expect(ultra.status).toBe(201);
    });
  });

  describe('Validation', () => {
    it('refuse une catégorie, un niveau ou une date invalides', async () => {
      expect((await create({ category: 'LOTERIE' })).status).toBe(400);
      expect((await create({ levels: ['MASTER'] })).status).toBe(400);
      expect((await create({ deadline: '2026-02-30' })).status).toBe(400);
    });

    it('refuse un lien officiel non http(s)', async () => {
      const res = await create({ officialUrl: 'javascript:alert(1)' });
      expect(res.status).toBe(400);
    });

    it("refuse une date d'ouverture postérieure à la date limite", async () => {
      const res = await create({ openingDate: isoDay(10), deadline: isoDay(5) });
      expect(res.status).toBe(400);
    });
  });

  describe('Publication sourcée et vérifiée', () => {
    let id;

    it("refuse de publier sans lien officiel", async () => {
      id = (await create({ title: `${TAG} Sans source` })).body.data.id;
      const res = await request(app).post(`/api/opportunities/${id}/publish`).set('Authorization', `Bearer ${oppToken}`);
      expect(res.status).toBe(400);
      expect(res.body.message).toMatch(/lien officiel/);
    });

    it('refuse de publier un lien non vérifié', async () => {
      await request(app).put(`/api/opportunities/${id}`).set('Authorization', `Bearer ${oppToken}`)
        .send({ officialUrl: 'https://example.org/bourse' });
      const res = await request(app).post(`/api/opportunities/${id}/publish`).set('Authorization', `Bearer ${oppToken}`);
      expect(res.status).toBe(400);
      expect(res.body.message).toMatch(/vérifié/);
    });

    it('publie une fois la vérification confirmée', async () => {
      const verified = await request(app).put(`/api/opportunities/${id}`).set('Authorization', `Bearer ${oppToken}`)
        .send({ markVerified: true });
      expect(verified.body.data.lastVerifiedAt).toBeTruthy();
      const res = await request(app).post(`/api/opportunities/${id}/publish`).set('Authorization', `Bearer ${oppToken}`);
      expect(res.status).toBe(200);
      expect(res.body.data.status).toBe('PUBLISHED');
    });

    it("refuse de changer la source d'une annonce publiée sans nouvelle vérification", async () => {
      const res = await request(app).put(`/api/opportunities/${id}`).set('Authorization', `Bearer ${oppToken}`)
        .send({ officialUrl: 'https://example.org/autre' });
      expect(res.status).toBe(400);
      const ok = await request(app).put(`/api/opportunities/${id}`).set('Authorization', `Bearer ${oppToken}`)
        .send({ officialUrl: 'https://example.org/autre', markVerified: true });
      expect(ok.status).toBe(200);
    });
  });

  describe('Consultation publique', () => {
    let openId, closedId, draftId, archivedId;

    beforeAll(async () => {
      const publish = async (body) => {
        const id = (await create({ officialUrl: 'https://example.org/officiel', markVerified: true, ...body })).body.data.id;
        await request(app).post(`/api/opportunities/${id}/publish`).set('Authorization', `Bearer ${oppToken}`);
        return id;
      };
      openId = await publish({ title: `${TAG} Concours ouvert`, category: 'CONCOURS', levels: ['LYCEE'], destination: 'AFRIQUE', deadline: isoDay(20) });
      closedId = await publish({ title: `${TAG} Examen clos`, category: 'EXAMEN', deadline: isoDay(-3) });
      archivedId = await publish({ title: `${TAG} Archivée` });
      await request(app).post(`/api/opportunities/${archivedId}/archive`).set('Authorization', `Bearer ${oppToken}`);
      draftId = (await create({ title: `${TAG} Brouillon` })).body.data.id;
    });

    it("ne montre que les annonces publiées, ouvertes avant clôturées", async () => {
      const res = await request(app).get('/api/opportunities');
      expect(res.status).toBe(200);
      const ids = res.body.data.map((o) => o.id);
      expect(ids).toEqual(expect.arrayContaining([openId, closedId]));
      expect(ids).not.toContain(draftId);
      expect(ids).not.toContain(archivedId);
      expect(ids.indexOf(openId)).toBeLessThan(ids.indexOf(closedId));
      expect(res.body.data.find((o) => o.id === closedId).phase).toBe('CLOSED');
      expect(res.body.data.find((o) => o.id === openId).phase).toBe('OPEN');
    });

    it('filtre par catégorie, niveau, destination et phase', async () => {
      const byCategory = await request(app).get('/api/opportunities?category=CONCOURS');
      expect(byCategory.body.data.every((o) => o.category === 'CONCOURS')).toBe(true);
      const byLevel = await request(app).get('/api/opportunities?level=LYCEE');
      expect(byLevel.body.data.map((o) => o.id)).toContain(openId);
      expect(byLevel.body.data.every((o) => o.levels.includes('LYCEE'))).toBe(true);
      const byDestination = await request(app).get('/api/opportunities?destination=AFRIQUE');
      expect(byDestination.body.data.every((o) => o.destination === 'AFRIQUE')).toBe(true);
      const byPhase = await request(app).get('/api/opportunities?phase=CLOSED');
      expect(byPhase.body.data.every((o) => o.phase === 'CLOSED')).toBe(true);
      expect((await request(app).get('/api/opportunities?category=AUTRE')).status).toBe(400);
    });

    it("cache le détail d'un brouillon au public mais pas aux admins du module", async () => {
      expect((await request(app).get(`/api/opportunities/${draftId}`)).status).toBe(404);
      expect((await request(app).get(`/api/opportunities/${draftId}`).set('Authorization', `Bearer ${memberToken}`)).status).toBe(404);
      expect((await request(app).get(`/api/opportunities/${draftId}`).set('Authorization', `Bearer ${oppToken}`)).status).toBe(200);
      expect((await request(app).get(`/api/opportunities/${openId}`)).status).toBe(200);
    });

    it('liste admin réservée au module', async () => {
      expect((await request(app).get('/api/opportunities/admin/list').set('Authorization', `Bearer ${blogToken}`)).status).toBe(403);
      const res = await request(app).get('/api/opportunities/admin/list?status=DRAFT').set('Authorization', `Bearer ${oppToken}`);
      expect(res.status).toBe(200);
      expect(res.body.data.every((o) => o.status === 'DRAFT')).toBe(true);
    });

    it('supprime une annonce', async () => {
      const res = await request(app).delete(`/api/opportunities/${draftId}`).set('Authorization', `Bearer ${oppToken}`);
      expect(res.status).toBe(200);
      expect(await prisma.opportunity.findUnique({ where: { id: draftId } })).toBeNull();
    });
  });

  describe('Phase calculée', () => {
    const now = new Date('2026-06-15T12:00:00Z');
    it('à venir, ouverte, clôturée, résultats', () => {
      expect(computePhase({ openingDate: new Date('2026-07-01T00:00:00Z') }, now)).toBe('UPCOMING');
      expect(computePhase({ deadline: new Date('2026-06-15T23:59:59.999Z') }, now)).toBe('OPEN');
      expect(computePhase({ deadline: new Date('2026-06-14T23:59:59.999Z') }, now)).toBe('CLOSED');
      expect(computePhase({ deadline: new Date('2026-06-14T23:59:59.999Z'), phaseOverride: 'RESULTS' }, now)).toBe('RESULTS');
    });
  });

  describe('Sessions annuelles', () => {
    const now = new Date('2026-10-24T12:00:00Z');
    it('annonce la prochaine session une fois la date limite passée, ou tant que les dates ne sont pas publiées', () => {
      const past = { recurring: true, deadline: new Date('2026-04-15T23:59:59Z') };
      expect(computePhase(past, now)).toBe('UPCOMING');
      expect(isNextSession(past, now)).toBe(true);
      expect(computePhase({ recurring: true }, now)).toBe('UPCOMING');
      expect(computePhase({ recurring: true, openingDate: new Date('2026-10-01T00:00:00Z') }, now)).toBe('OPEN');
      expect(computePhase({ recurring: true, deadline: new Date('2027-01-06T23:59:59Z') }, now)).toBe('OPEN');
      expect(computePhase({ deadline: new Date('2026-04-15T23:59:59Z') }, now)).toBe('CLOSED');
    });

    it('enregistre la fiche concours complète et la publie dans la liste active', async () => {
      const res = await create({
        title: `${TAG} Concours annuel`,
        category: 'CONCOURS',
        levels: ['PRIMAIRE', 'PROFESSIONNEL'],
        series: ['S1', 's2 ', 'S1'],
        exams: [{ subject: 'Mathématiques', duration: '4 h', coefficient: 4 }, { subject: 'Français' }],
        fees: '7 000 FCFA',
        places: 60,
        ageLimit: 'Moins de 22 ans',
        applyMode: 'En ligne',
        usualPeriod: 'Dépôt en avril · concours en juin',
        recurring: true,
        deadline: isoDay(-30),
        officialUrl: 'https://example.org/concours',
        markVerified: true,
      });
      expect(res.status).toBe(201);
      const o = res.body.data;
      expect(o).toMatchObject({ fees: '7 000 FCFA', places: 60, recurring: true, phase: 'UPCOMING', nextSession: true });
      expect(o.series).toEqual(['S1', 's2']);
      expect(o.exams).toEqual([{ subject: 'Mathématiques', duration: '4 h', coefficient: '4' }, { subject: 'Français' }]);
      await request(app).post(`/api/opportunities/${o.id}/publish`).set('Authorization', `Bearer ${oppToken}`).expect(200);
      const list = (await request(app).get('/api/opportunities?category=CONCOURS&level=PRIMAIRE')).body.data;
      const item = list.find((x) => x.id === o.id);
      expect(item).toMatchObject({ phase: 'UPCOMING', nextSession: true, usualPeriod: 'Dépôt en avril · concours en juin', fees: '7 000 FCFA' });
    });

    it('accepte les stages et programmes', async () => {
      expect((await create({ title: `${TAG} Stage`, category: 'STAGE' })).status).toBe(201);
      expect((await create({ title: `${TAG} Programme`, category: 'PROGRAMME' })).status).toBe(201);
      expect((await create({ title: `${TAG} Inconnue`, category: 'AUTRE' })).status).toBe(400);
    });
  });

  describe('Import des concours et bourses', () => {
    let slugs;
    beforeAll(() => { slugs = loadItems().items.map((i) => i.slug); });
    afterAll(async () => { await prisma.opportunity.deleteMany({ where: { slug: { in: slugs } } }); });

    it('valide tous les fichiers de données', () => {
      const { items, errors } = loadItems();
      expect(errors).toEqual([]);
      expect(items.length).toBeGreaterThanOrEqual(40);
      expect(items.every((i) => i.officialUrl && i.summary && i.sourceNote)).toBe(true);
    });

    it('crée les annonces une seule fois et conserve les corrections faites dans l\'admin', async () => {
      await prisma.opportunity.deleteMany({ where: { slug: { in: slugs } } });
      const first = await importOpportunities();
      expect(first.created).toBe(slugs.length);
      const ept = await prisma.opportunity.findUnique({ where: { slug: 'concours-ept-thies' } });
      expect(ept).toMatchObject({ status: 'PUBLISHED', category: 'CONCOURS', recurring: true });
      expect(ept.lastVerifiedAt).toBeTruthy();
      const unchecked = await prisma.opportunity.findUnique({ where: { slug: 'concours-ufr-sefs-ugb' } });
      expect(unchecked.status).toBe('DRAFT');

      await prisma.opportunity.update({ where: { slug: 'concours-ept-thies' }, data: { fees: 'Corrigé par l\'admin' } });
      const second = await importOpportunities();
      expect(second).toMatchObject({ created: 0, skipped: slugs.length });
      expect((await prisma.opportunity.findUnique({ where: { slug: 'concours-ept-thies' } })).fees).toBe('Corrigé par l\'admin');
    });
  });
  describe('Organisation et fiche complète', () => {
    let id, slug;
    const auth = (req, token = oppToken) => req.set('Authorization', `Bearer ${token}`);

    beforeAll(async () => {
      const res = await create({
        title: `${TAG} Concours École d'Ingénieurs`,
        category: 'CONCOURS',
        domains: ['INGENIERIE', 'NUMERIQUE'],
        location: 'Thiès',
        sessionLabel: 'Session 2027',
        series: ['S1', 'S2'],
        selectionSteps: [{ title: 'Présélection sur dossier', detail: '' }, { title: 'Écrit', detail: 'Maths et physique' }],
        resources: [{ label: "Plateforme d'inscription", url: 'https://example.org/inscription' }],
        faq: [{ question: 'Peut-on candidater deux fois ?', answer: 'Oui, dans la limite d\'âge.' }],
        tips: 'Travailler les annales',
        officialUrl: 'https://example.org/officiel',
        markVerified: true,
        recurring: true,
        deadline: isoDay(-10),
        keyDates: [{ label: 'Écrit', date: isoDay(-2) }],
      });
      expect(res.status).toBe(201);
      ({ id, slug } = res.body.data);
      await auth(request(app).post(`/api/opportunities/${id}/publish`));
    });

    it("génère un slug lisible et sert la fiche par slug comme par identifiant", async () => {
      expect(slug).toMatch(/^opp-test-concours-ecole-d-ingenieurs/);
      const bySlug = await request(app).get(`/api/opportunities/${slug}`);
      expect(bySlug.status).toBe(200);
      expect(bySlug.body.data.id).toBe(id);
      expect(bySlug.body.data.selectionSteps).toEqual([{ title: 'Présélection sur dossier' }, { title: 'Écrit', detail: 'Maths et physique' }]);
      expect(bySlug.body.data.faq).toHaveLength(1);
    });

    it('donne un slug distinct à un intitulé identique', async () => {
      const twin = await create({ title: `${TAG} Concours École d'Ingénieurs` });
      expect(twin.body.data.slug).toBe(`${slug}-2`);
    });

    it('refuse un domaine, une prise en charge ou un lien utile invalides', async () => {
      expect((await create({ domains: ['ASTROLOGIE'] })).status).toBe(400);
      expect((await create({ funding: 'TOTAL' })).status).toBe(400);
      expect((await create({ resources: [{ label: 'Lien', url: 'javascript:alert(1)' }] })).status).toBe(400);
    });

    it('filtre la liste publique par domaine et par série, avec les champs utiles aux cartes', async () => {
      const res = await request(app).get('/api/opportunities?domain=NUMERIQUE&series=s2');
      expect(res.status).toBe(200);
      const item = res.body.data.find((o) => o.id === id);
      expect(item).toBeTruthy();
      expect(item).toMatchObject({ slug, location: 'Thiès', sessionLabel: 'Session 2027', domains: ['INGENIERIE', 'NUMERIQUE'] });
      expect(Array.isArray(item.keyDates)).toBe(true);
      const other = await request(app).get('/api/opportunities?domain=SANTE');
      expect(other.body.data.some((o) => o.id === id)).toBe(false);
      expect((await request(app).get('/api/opportunities?domain=ASTRO')).status).toBe(400);
    });

    it('crée la nouvelle session en brouillon, sans dates ni vérification', async () => {
      const res = await auth(request(app).post(`/api/opportunities/${id}/duplicate`));
      expect(res.status).toBe(201);
      expect(res.body.data).toMatchObject({ status: 'DRAFT', deadline: null, keyDates: null, lastVerifiedAt: null, sessionLabel: null, location: 'Thiès' });
      expect(res.body.data.title).toMatch(/nouvelle session/);
      expect(res.body.data.slug).not.toBe(slug);
      expect(res.body.data.exams).toBeNull();
      expect((await auth(request(app).post(`/api/opportunities/${id}/duplicate`), memberToken)).status).toBe(403);
    });

    describe('Signalements', () => {
      it('accepte un signalement public sur une annonce publiée', async () => {
        const res = await request(app).post(`/api/opportunities/${id}/reports`)
          .send({ kind: 'DATE', message: 'La date limite a changé sur le communiqué 2027.', contact: 'eleve@example.org' });
        expect(res.status).toBe(201);
      });

      it('refuse un signalement vide, invalide ou sur une annonce non publiée', async () => {
        expect((await request(app).post(`/api/opportunities/${id}/reports`).send({ kind: 'DATE', message: 'court' })).status).toBe(400);
        expect((await request(app).post(`/api/opportunities/${id}/reports`).send({ kind: 'SPAM', message: 'Un message assez long' })).status).toBe(400);
        const draft = (await create({ title: `${TAG} Brouillon signalé` })).body.data.id;
        expect((await request(app).post(`/api/opportunities/${draft}/reports`).send({ kind: 'AUTRE', message: 'Un message assez long' })).status).toBe(404);
      });

      it("réserve la liste et le traitement à l'équipe du module", async () => {
        expect((await request(app).get('/api/opportunities/admin/reports')).status).toBe(401);
        expect((await auth(request(app).get('/api/opportunities/admin/reports'), blogToken)).status).toBe(403);
        const list = await auth(request(app).get('/api/opportunities/admin/reports'));
        expect(list.status).toBe(200);
        const report = list.body.data.find((r) => r.opportunity.id === id);
        expect(report).toMatchObject({ kind: 'DATE', status: 'OPEN', contact: 'eleve@example.org' });

        const admin = await auth(request(app).get('/api/opportunities/admin/list'));
        expect(admin.body.data.find((o) => o.id === id)._count.reports).toBe(1);

        const resolved = await auth(request(app).post(`/api/opportunities/admin/reports/${report.id}/resolve`));
        expect(resolved.status).toBe(200);
        expect(resolved.body.data.status).toBe('RESOLVED');
        const after = await auth(request(app).get('/api/opportunities/admin/reports'));
        expect(after.body.data.some((r) => r.id === report.id)).toBe(false);
      });
    });

    it('référence la fiche publiée dans le sitemap', async () => {
      const res = await request(app).get('/sitemap.xml');
      expect(res.text).toContain(`/opportunite?slug=${slug}`);
    });
  });
});
