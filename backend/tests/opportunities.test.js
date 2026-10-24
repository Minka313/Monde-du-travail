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
});
