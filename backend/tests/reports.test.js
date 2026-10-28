const request = require('supertest');
const { app } = require('../src/app');
const { signAccessToken } = require('../src/utils/tokens');
const { createTestUser, cleanupTestUsers, prisma } = require('./helpers/fixtures');
const ReportService = require('../src/services/reportService');

// Rapports d'activité du bureau : rédaction au titre de son poste, soumission,
// validation par la Présidence (Ultra Admin), droits de lecture et échéances.
const EMAILS = [
  'president@rep.test.com', 'vp@rep.test.com', 'tresorier@rep.test.com',
  'adjoint@rep.test.com', 'comm@rep.test.com', 'membre@rep.test.com',
];
const TAG = '[REP-TEST]';

const { periodKeyFor, shiftPeriod, parsePeriod, computeDeadlines } = ReportService._internal;

describe('Rapports du bureau', () => {
  let president, vp, tresorier, adjoint, comm, membre;
  let tokens = {};
  let positions = {};
  const currentMonth = periodKeyFor('MONTHLY');

  const api = (method, url, who) => request(app)[method](`/api/reports${url}`).set('Authorization', `Bearer ${tokens[who]}`);

  async function position(key, data) {
    positions[key] = await prisma.clubPosition.create({ data: { ...data, title: `${TAG} ${data.title}` } });
    return positions[key];
  }

  const assign = (pos, user, memberRole = 'TITULAIRE', startDate = new Date()) =>
    prisma.clubAssignment.create({ data: { positionId: pos.id, userId: user.id, memberRole, startDate } });

  const treasuryContent = {
    soldeInitial: 50000,
    recettes: [
      { date: '2026-10-02', libelle: 'Cotisations', source: 'Membres', montant: 30000 },
      { date: '2026-10-10', libelle: 'Don', source: 'Partenaire', montant: '20000' },
      { libelle: '', montant: '' },
    ],
    depenses: [{ date: '2026-10-12', libelle: 'Location salle', beneficiaire: 'Hôtel', montant: 15000 }],
    champInconnu: 'ignoré',
  };

  beforeAll(async () => {
    await prisma.clubPosition.deleteMany({ where: { title: { startsWith: TAG } } });
    president = await createTestUser({ email: EMAILS[0], role: 'ULTRA_ADMIN', firstName: 'Awa', lastName: 'Présidente' });
    vp = await createTestUser({ email: EMAILS[1], role: 'ADMIN', firstName: 'Moussa', lastName: 'VP' });
    tresorier = await createTestUser({ email: EMAILS[2], firstName: 'Fatou', lastName: 'Trésorière' });
    adjoint = await createTestUser({ email: EMAILS[3], firstName: 'Ibou', lastName: 'Adjoint' });
    comm = await createTestUser({ email: EMAILS[4], firstName: 'Aïda', lastName: 'Comm' });
    membre = await createTestUser({ email: EMAILS[5], firstName: 'Simple', lastName: 'Membre' });
    tokens = Object.fromEntries(Object.entries({ president, vp, tresorier, adjoint, comm, membre })
      .map(([k, u]) => [k, signAccessToken(u)]));

    await position('pres', { title: 'Présidence', seesAllReports: true, reportFrequency: 'NONE' });
    await position('vp', { title: 'Vice-Présidence', seesAllReports: true, reportFrequency: 'NONE' });
    const tres = await position('tres', { title: 'Trésorerie', reportTemplate: 'TRESORERIE', reportFrequency: 'MONTHLY' });
    await position('adj', { title: 'Trésorerie adjointe', reportTemplate: 'TRESORERIE', reportsToId: tres.id });
    await position('comm', { title: 'Responsable Communication', reportTemplate: 'COMMUNICATION', reportFrequency: 'QUARTERLY' });

    await assign(positions.pres, president);
    await assign(positions.vp, vp);
    // Prise de fonction il y a trois mois : des retards sont attendus
    const threeMonthsAgo = new Date();
    threeMonthsAgo.setUTCMonth(threeMonthsAgo.getUTCMonth() - 3);
    await assign(tres, tresorier, 'TITULAIRE', threeMonthsAgo);
    await assign(positions.adj, adjoint);
    await assign(positions.comm, comm);
  });

  afterAll(async () => {
    await prisma.notification.deleteMany({ where: { userId: { in: [president, vp, tresorier, adjoint, comm, membre].map((u) => u.id) } } });
    await cleanupTestUsers(EMAILS);
    await prisma.clubPosition.deleteMany({ where: { title: { startsWith: TAG } } });
    await prisma.$disconnect();
  });

  describe('Périodes', () => {
    it('calcule les clés et libellés de période', () => {
      expect(periodKeyFor('MONTHLY', new Date(Date.UTC(2026, 9, 24)))).toBe('2026-10');
      expect(periodKeyFor('QUARTERLY', new Date(Date.UTC(2026, 9, 24)))).toBe('2026-T4');
      expect(periodKeyFor('ANNUAL', new Date(Date.UTC(2026, 9, 24)))).toBe('2026');
      expect(shiftPeriod('2026-01', -1)).toBe('2025-12');
      expect(shiftPeriod('2026-T1', -1)).toBe('2025-T4');
      expect(parsePeriod('2026-10').label).toBe('Octobre 2026');
      expect(parsePeriod('2026-13')).toBeNull();
    });

    it('signale les périodes en retard après le délai de remise', () => {
      const now = new Date(Date.UTC(2026, 9, 24));
      const result = computeDeadlines(
        { reportFrequency: 'MONTHLY', reportDueDays: 7 },
        new Date(Date.UTC(2026, 6, 15)),
        new Set(['2026-08']),
        now,
      );
      expect(result.periods.map((p) => [p.key, p.status])).toEqual([
        ['2026-07', 'LATE'], ['2026-08', 'DONE'], ['2026-09', 'LATE'], ['2026-10', 'DUE'],
      ]);
      expect(result.next.key).toBe('2026-10');
    });
  });

  describe('Espace bureau', () => {
    it('présente le poste, le modèle et les échéances du titulaire', async () => {
      const res = await api('get', '/context', 'tresorier');
      expect(res.status).toBe(200);
      expect(res.body.data.isBureauMember).toBe(true);
      expect(res.body.data.canReview).toBe(false);
      const [mine] = res.body.data.positions;
      expect(mine.position.templateKey).toBe('TRESORERIE');
      expect(mine.periods[0].key).toBe(currentMonth);
      expect(mine.deadlines.late.length).toBeGreaterThanOrEqual(2);
    });

    it('indique la Présidence comme examinatrice', async () => {
      const res = await api('get', '/context', 'president');
      expect(res.body.data.canReview).toBe(true);
      expect(res.body.data.seesAll).toBe(true);
    });

    it('expose les postes occupés dans /auth/me', async () => {
      const res = await request(app).get('/api/auth/me').set('Authorization', `Bearer ${tokens.comm}`);
      expect(res.body.data.bureauPositions.map((p) => p.title)).toEqual([`${TAG} Responsable Communication`]);
    });

    it('refuse la liste aux membres hors bureau', async () => {
      const res = await api('get', '/', 'membre');
      expect(res.status).toBe(403);
    });
  });

  describe('Circuit d\'un rapport', () => {
    let reportId;

    it('refuse un rapport pour un poste non occupé', async () => {
      const res = await api('post', '/', 'comm').send({ positionId: positions.tres.id, periodKey: currentMonth });
      expect(res.status).toBe(403);
    });

    it('exige une période conforme au rythme du poste', async () => {
      const missing = await api('post', '/', 'tresorier').send({ positionId: positions.tres.id });
      expect(missing.status).toBe(400);
      const wrong = await api('post', '/', 'tresorier').send({ positionId: positions.tres.id, periodKey: '2026-T4' });
      expect(wrong.status).toBe(400);
    });

    it('enregistre un brouillon nettoyé avec ses totaux', async () => {
      const res = await api('post', '/', 'tresorier').send({
        positionId: positions.tres.id,
        periodKey: currentMonth,
        content: treasuryContent,
        attachments: [{ url: 'https://example.com/releve.pdf', name: 'releve.pdf', mimeType: 'application/pdf', size: 1200 }],
      });
      expect(res.status).toBe(201);
      reportId = res.body.data.id;
      expect(res.body.data.status).toBe('DRAFT');
      expect(res.body.data.title).toContain('Rapport financier');
      expect(res.body.data.content.recettes).toHaveLength(2);
      expect(res.body.data.content.champInconnu).toBeUndefined();
      expect(res.body.data.incomeTotal).toBe(50000);
      expect(res.body.data.expenseTotal).toBe(15000);
    });

    it('cache le brouillon à tous sauf son auteur', async () => {
      expect((await api('get', `/${reportId}`, 'president')).status).toBe(404);
      expect((await api('get', `/${reportId}`, 'tresorier')).status).toBe(200);
    });

    it('refuse la soumission sans sections obligatoires', async () => {
      const pv = await api('post', '/', 'tresorier').send({ positionId: positions.tres.id, periodKey: currentMonth, content: {} });
      const res = await api('post', `/${pv.body.data.id}/submit`, 'tresorier');
      expect(res.status).toBe(400);
      expect(res.body.message).toContain('Solde en début de période');
      await api('delete', `/${pv.body.data.id}`, 'tresorier').expect(200);
    });

    it('soumet le rapport et notifie la Présidence', async () => {
      const res = await api('post', `/${reportId}/submit`, 'tresorier');
      expect(res.status).toBe(200);
      expect(res.body.data.status).toBe('SUBMITTED');
      const notified = await prisma.notification.findMany({ where: { url: `/bureau.html?report=${reportId}` } });
      const ids = notified.map((n) => n.userId);
      expect(ids).toEqual(expect.arrayContaining([president.id, vp.id]));
      expect(ids).not.toContain(tresorier.id);
      expect(ids).not.toContain(comm.id);
    });

    it('verrouille la modification après soumission', async () => {
      const res = await api('put', `/${reportId}`, 'tresorier').send({ title: 'Changement' });
      expect(res.status).toBe(400);
    });

    it('rend le rapport soumis lisible par la Présidence et la Vice-Présidence seulement', async () => {
      expect((await api('get', `/${reportId}`, 'president')).status).toBe(200);
      expect((await api('get', `/${reportId}`, 'vp')).status).toBe(200);
      expect((await api('get', `/${reportId}`, 'comm')).status).toBe(404);
      const review = await api('get', '/?scope=review', 'president');
      expect(review.body.data.map((r) => r.id)).toContain(reportId);
    });

    it('réserve l\'examen à l\'Ultra Admin', async () => {
      const res = await api('post', `/${reportId}/review`, 'vp').send({ decision: 'VALIDATED' });
      expect(res.status).toBe(403);
    });

    it('exige un commentaire pour demander des corrections', async () => {
      const res = await api('post', `/${reportId}/review`, 'president').send({ decision: 'NEEDS_CHANGES' });
      expect(res.status).toBe(400);
    });

    it('renvoie le rapport à corriger puis accepte la nouvelle version', async () => {
      const back = await api('post', `/${reportId}/review`, 'president')
        .send({ decision: 'NEEDS_CHANGES', comment: 'Joindre le reçu de la location.' });
      expect(back.body.data.status).toBe('NEEDS_CHANGES');
      const authorNotice = await prisma.notification.findFirst({ where: { userId: tresorier.id, title: { contains: 'Corrections' } } });
      expect(authorNotice.message).toContain('reçu');

      const edit = await api('put', `/${reportId}`, 'tresorier').send({ content: { ...treasuryContent, observations: 'Reçu ajouté' } });
      expect(edit.status).toBe(200);
      expect((await api('post', `/${reportId}/submit`, 'tresorier')).body.data.status).toBe('SUBMITTED');

      const ok = await api('post', `/${reportId}/review`, 'president').send({ decision: 'VALIDATED', comment: 'Merci' });
      expect(ok.body.data.status).toBe('VALIDATED');

      const detail = await api('get', `/${reportId}`, 'tresorier');
      expect(detail.body.data.events.map((e) => e.action)).toEqual(['SUBMITTED', 'NEEDS_CHANGES', 'SUBMITTED', 'VALIDATED']);
    });

    it('ouvre le rapport validé à tout le bureau, pas aux autres membres', async () => {
      expect((await api('get', `/${reportId}`, 'comm')).status).toBe(200);
      const bureau = await api('get', '/?scope=bureau', 'comm');
      expect(bureau.body.data.map((r) => r.id)).toContain(reportId);
      expect((await api('get', `/${reportId}`, 'membre')).status).toBe(404);
    });

    it('montre au titulaire les rapports soumis de son adjoint', async () => {
      const draft = await api('post', '/', 'adjoint').send({ positionId: positions.adj.id, periodKey: currentMonth, content: { soldeInitial: 0 } });
      const id = draft.body.data.id;
      expect((await api('get', `/${id}`, 'tresorier')).status).toBe(404);
      await api('post', `/${id}/submit`, 'adjoint').expect(200);

      const team = await api('get', '/?scope=team', 'tresorier');
      expect(team.body.data.map((r) => r.id)).toEqual([id]);
      const notice = await prisma.notification.findFirst({ where: { userId: tresorier.id, url: `/bureau.html?report=${id}` } });
      expect(notice).not.toBeNull();
      // Le Responsable Communication n'a pas à le voir
      expect((await api('get', `/${id}`, 'comm')).status).toBe(404);
    });

    it('valide directement les rapports de la Présidence', async () => {
      const draft = await api('post', '/', 'president').send({ positionId: positions.pres.id, content: { resume: 'Bilan du mois' } });
      const res = await api('post', `/${draft.body.data.id}/submit`, 'president');
      expect(res.body.data.status).toBe('VALIDATED');
    });

    it('n\'autorise l\'auteur à supprimer que ses brouillons', async () => {
      expect((await api('delete', `/${reportId}`, 'tresorier')).status).toBe(403);
    });
  });

  describe('Synthèse et paramètres', () => {
    it('donne à la Présidence la situation des postes et la trésorerie', async () => {
      const res = await api('get', '/summary', 'president');
      expect(res.status).toBe(200);
      const tres = res.body.data.positions.find((p) => p.id === positions.tres.id);
      expect(tres.counts.validated).toBe(1);
      expect(tres.late.length).toBeGreaterThanOrEqual(2);
      expect(res.body.data.treasury.income).toBeGreaterThanOrEqual(50000);
      expect(res.body.data.kpis.toReview).toBeGreaterThanOrEqual(1);
    });

    it('refuse la synthèse aux autres membres du bureau', async () => {
      expect((await api('get', '/summary', 'tresorier')).status).toBe(403);
    });

    it('laisse l\'Ultra Admin régler le rythme d\'un poste', async () => {
      const res = await api('put', `/positions/${positions.comm.id}/settings`, 'president')
        .send({ reportFrequency: 'MONTHLY', reportDueDays: 10 });
      expect(res.status).toBe(200);
      expect(res.body.data.reportFrequency).toBe('MONTHLY');
      expect((await api('put', `/positions/${positions.comm.id}/settings`, 'vp').send({ reportDueDays: 3 })).status).toBe(403);
      expect((await api('put', `/positions/${positions.comm.id}/settings`, 'president').send({ reportTemplate: 'INCONNU' })).status).toBe(400);
    });

    it('réserve le dépôt de pièces jointes aux membres du bureau', async () => {
      const res = await request(app).post('/api/reports/attachments')
        .set('Authorization', `Bearer ${tokens.membre}`)
        .attach('file', Buffer.from('%PDF-1.4'), { filename: 'a.pdf', contentType: 'application/pdf' });
      expect(res.status).toBe(403);
    });
  });
  describe('Archivage', () => {
    let validated, pending;
    const ids = (res) => res.body.data.map((r) => r.id);

    beforeAll(async () => {
      const base = { positionId: positions.comm.id, authorId: comm.id, content: {} };
      validated = await prisma.positionReport.create({ data: { ...base, title: `${TAG} Bilan validé`, status: 'VALIDATED', submittedAt: new Date() } });
      pending = await prisma.positionReport.create({ data: { ...base, title: `${TAG} Bilan en attente`, status: 'SUBMITTED', submittedAt: new Date() } });
    });

    it("réserve l'archivage à la Présidence et aux rapports traités", async () => {
      expect((await api('post', `/${validated.id}/archive`, 'comm')).status).toBe(403);
      expect((await api('post', `/${pending.id}/archive`, 'president')).status).toBe(403);
      const res = await api('post', `/${validated.id}/archive`, 'vp');
      expect(res.status).toBe(200);
      expect(res.body.data.archivedAt).toBeTruthy();
      expect(res.body.data.permissions).toMatchObject({ archive: false, unarchive: true });
      expect((await api('post', `/${validated.id}/archive`, 'vp')).status).toBe(400);
    });

    it('retire le rapport archivé des listes et le montre dans « Archives »', async () => {
      expect(ids(await api('get', '/?scope=bureau', 'president'))).not.toContain(validated.id);
      expect(ids(await api('get', '/', 'president'))).not.toContain(validated.id);
      expect(ids(await api('get', '/?archived=only', 'president'))).toContain(validated.id);
      expect(ids(await api('get', '/?archived=only', 'president'))).not.toContain(pending.id);
      const detail = await api('get', `/${validated.id}`, 'president');
      expect(detail.body.data.events.map((e) => e.action)).toContain('ARCHIVED');
    });

    it('restaure un rapport archivé', async () => {
      const res = await api('post', `/${validated.id}/unarchive`, 'president');
      expect(res.status).toBe(200);
      expect(ids(await api('get', '/?scope=bureau', 'president'))).toContain(validated.id);
    });
  });
});
