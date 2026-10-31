const request = require('supertest');
const { app } = require('../src/app');
const { signAccessToken } = require('../src/utils/tokens');
const { createTestUser, cleanupTestUsers, prisma } = require('./helpers/fixtures');

// Document de référence du club : lu par le bureau, modifié par la Présidence,
// jamais exposé par les réglages publics.
const EMAILS = ['president@cdoc.test.com', 'secretaire@cdoc.test.com', 'membre@cdoc.test.com'];
const KEY = 'club.reference_document';
const TAG = '[CDOC-TEST]';

describe('Document de référence du club', () => {
  const tokens = {};
  const api = (method, url, who) => request(app)[method](`/api/reports/club-document${url}`).set('Authorization', `Bearer ${tokens[who]}`);

  beforeAll(async () => {
    await prisma.setting.deleteMany({ where: { key: KEY } });
    const president = await createTestUser({ email: EMAILS[0], role: 'ULTRA_ADMIN', firstName: 'Awa', lastName: 'Présidente' });
    const secretaire = await createTestUser({ email: EMAILS[1], firstName: 'Fatou', lastName: 'Secrétaire' });
    const membre = await createTestUser({ email: EMAILS[2], firstName: 'Simple', lastName: 'Membre' });
    const position = await prisma.clubPosition.create({ data: { title: `${TAG} Secrétariat` } });
    await prisma.clubAssignment.create({ data: { positionId: position.id, userId: secretaire.id } });
    Object.assign(tokens, { president: signAccessToken(president), secretaire: signAccessToken(secretaire), membre: signAccessToken(membre) });
  });

  afterAll(async () => {
    await prisma.setting.deleteMany({ where: { key: KEY } });
    await cleanupTestUsers(EMAILS);
    await prisma.clubPosition.deleteMany({ where: { title: { startsWith: TAG } } });
    await prisma.$disconnect();
  });

  it('sert la version d\'origine aux membres du bureau, en lecture seule', async () => {
    const res = await api('get', '', 'secretaire');
    expect(res.status).toBe(200);
    expect(res.body.data.isDefault).toBe(true);
    expect(res.body.data.canEdit).toBe(false);
    expect(res.body.data.content).toMatch(/^titre: Le Monde du Travail/);
  });

  it('refuse le document aux adhérents hors bureau', async () => {
    expect((await api('get', '', 'membre')).status).toBe(403);
  });

  it('réserve la modification à la Présidence', async () => {
    expect((await api('put', '', 'secretaire').send({ content: '# Essai' })).status).toBe(403);
    const res = await api('put', '', 'president').send({ content: 'titre: Essai\n---\n# Partie\r\nTexte' });
    expect(res.status).toBe(200);
    expect(res.body.data).toMatchObject({ isDefault: false, updatedBy: 'Awa Présidente', hasPrevious: true, canEdit: true });
    expect(res.body.data.content).toBe('titre: Essai\n---\n# Partie\nTexte');
    expect((await api('get', '', 'secretaire')).body.data.content).toMatch(/^titre: Essai/);
  });

  it('refuse un document vide', async () => {
    expect((await api('put', '', 'president').send({ content: '   ' })).status).toBe(400);
  });

  it('revient à la version précédente, puis de nouveau à la plus récente', async () => {
    const back = await api('post', '/restore', 'president');
    expect(back.status).toBe(200);
    expect(back.body.data.isDefault).toBe(true);
    expect(back.body.data.hasPrevious).toBe(true);
    const again = await api('post', '/restore', 'president');
    expect(again.body.data.content).toMatch(/^titre: Essai/);
    expect((await api('post', '/restore', 'secretaire')).status).toBe(403);
  });

  describe('Mises à jour du texte de référence', () => {
    const fs = require('fs');
    const path = require('path');
    const ClubDocumentService = require('../src/services/clubDocumentService');
    const V1 = fs.readFileSync(path.join(__dirname, 'fixtures/club-document-v1.txt'), 'utf8');
    const MY_MEETING = '1. Session **Brainstorming & Feedbacks** : De 21h à 21h50';
    const withMeeting = (text) => text.replace('## Programme des réunions', `## Programme des réunions\n\n${MY_MEETING}`);

    it('propose les parties mises à jour sans toucher à celles que la Présidence a modifiées seule', async () => {
      await api('put', '', 'president').send({ content: withMeeting(V1) });
      const { data } = (await api('get', '', 'president')).body;
      const titles = data.updates.map((u) => u.title);
      expect(titles).toEqual(expect.arrayContaining(['Présentation des projets', 'Organisation et responsabilités des membres', 'Les différentes phases de développement du club']));
      expect(titles).not.toContain('Fonctionnement des réunions');
      expect(data.updates.every((u) => u.status === 'safe')).toBe(true);
      // Les membres du bureau ne voient pas cet outil
      expect((await api('get', '', 'secretaire')).body.data.updates).toEqual([]);
    });

    it('signale une partie que la Présidence a aussi modifiée', async () => {
      const edited = withMeeting(V1).replace('Voici les principaux postes proposés.', 'Voici les postes que nous avons retenus.');
      await api('put', '', 'president').send({ content: edited });
      const { updates } = (await api('get', '', 'president')).body.data;
      expect(updates.find((u) => u.title === 'Organisation et responsabilités des membres').status).toBe('edited');
    });

    it('applique les parties choisies et garde le reste de la version de la Présidence', async () => {
      const before = (await api('get', '', 'president')).body.data.updates;
      const keys = before.filter((u) => u.status === 'safe').map((u) => u.key);
      expect((await api('post', '/updates', 'secretaire').send({ keys })).status).toBe(403);
      const res = await api('post', '/updates', 'president').send({ keys });
      expect(res.status).toBe(200);
      const text = res.body.data.content;
      expect(text).toContain(MY_MEETING);
      expect(text).toContain('La boucle Agrinova');
      expect(text).toContain('La naissance d\'une vision');
      expect(text).toContain('Voici les postes que nous avons retenus.');
      expect(res.body.data.updates.map((u) => u.status)).toEqual(['edited']);
      expect(res.body.data.hasPrevious).toBe(true);
    });

    it('a l\'historique de chaque version publiée du texte de référence', () => {
      const HISTORY = require('../src/data/clubDocumentHistory.json');
      const Chapters = require('../src/utils/clubDocumentChapters');
      Chapters.split(ClubDocumentService.DEFAULT_CONTENT).forEach((p) => {
        expect(HISTORY[p.key]).toContain(Chapters.hash(p.text));
      });
    });
  });

  it('n\'apparaît ni dans les réglages publics ni dans la page Paramètres', async () => {
    const pub = await request(app).get('/api/settings/public');
    expect(JSON.stringify(pub.body)).not.toContain(KEY);
    expect((await request(app).get(`/api/settings/public/${KEY}`)).status).toBe(404);
    const all = await request(app).get('/api/settings').set('Authorization', `Bearer ${tokens.president}`);
    expect(JSON.stringify(all.body)).not.toContain(KEY);
  });
});
