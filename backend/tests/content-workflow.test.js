const request = require('supertest');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { app } = require('../src/app');
const prisma = new PrismaClient();

// Workflow éditorial Formations & Métiers :
// brouillon -> soumission -> validation (workflow) OU publication directe
// (permission publish), dépublication, archivage, visibilité publique.
describe('Content editorial workflow', () => {
  let ultraToken, publisherToken, contributorToken, memberToken;
  let ultra, publisher, contributor, member;
  let formationId, jobId, contributorFormationId;

  beforeAll(async () => {
    await prisma.approvalStep.deleteMany();
    await prisma.approvalWorkflow.deleteMany();
    await prisma.userAdminRole.deleteMany({
      where: { user: { email: { contains: '@wf.test.com' } } },
    });
    await prisma.user.deleteMany({ where: { email: { contains: '@wf.test.com' } } });
    await prisma.formation.deleteMany({ where: { title: { contains: '[WF-TEST]' } } });
    await prisma.job.deleteMany({ where: { title: { contains: '[WF-TEST]' } } });

    const hash = await bcrypt.hash('Test123!', 12);
    ultra = await prisma.user.create({ data: { email: 'ultra@wf.test.com', password: hash, firstName: 'Ultra', lastName: 'Admin', role: 'ULTRA_ADMIN', isActive: true, isVerified: true } });
    publisher = await prisma.user.create({ data: { email: 'publisher@wf.test.com', password: hash, firstName: 'Pub', lastName: 'Lisher', role: 'ADMIN', isActive: true, isVerified: true } });
    contributor = await prisma.user.create({ data: { email: 'contrib@wf.test.com', password: hash, firstName: 'Contri', lastName: 'Butor', role: 'ADMIN', isActive: true, isVerified: true } });
    member = await prisma.user.create({ data: { email: 'member@wf.test.com', password: hash, firstName: 'Mem', lastName: 'Ber', role: 'MEMBER', isActive: true, isVerified: true } });

    // ADMIN_FORMATION standard : possède formation.publish (publication directe)
    const formationRole = await prisma.adminRole.findUnique({ where: { name: 'ADMIN_FORMATION' } });
    await prisma.userAdminRole.create({
      data: { userId: publisher.id, adminRoleId: formationRole.id, status: 'APPROVED', assignedBy: ultra.id, reviewedBy: ultra.id, reviewedAt: new Date() },
    });

    // Rôle contributeur sans formation.publish : doit passer par la validation
    const readPerm = await prisma.permission.findUnique({ where: { code: 'formation.read' } });
    const createPerm = await prisma.permission.findUnique({ where: { code: 'formation.create' } });
    const updatePerm = await prisma.permission.findUnique({ where: { code: 'formation.update' } });
    const contributorRole = await prisma.adminRole.create({
      data: { name: 'WF_CONTRIBUTOR', description: 'Contributeur formations sans publication', isSystem: false, requiresApproval: false },
    });
    await prisma.adminRolePermission.createMany({
      data: [readPerm, createPerm, updatePerm].map(p => ({ adminRoleId: contributorRole.id, permissionId: p.id })),
    });
    await prisma.userAdminRole.create({
      data: { userId: contributor.id, adminRoleId: contributorRole.id, status: 'APPROVED', assignedBy: ultra.id, reviewedBy: ultra.id, reviewedAt: new Date() },
    });

    const createToken = user => jwt.sign({ id: user.id, email: user.email, role: user.role }, process.env.JWT_SECRET || 'test-secret', { expiresIn: '7d' });
    ultraToken = createToken(ultra);
    publisherToken = createToken(publisher);
    contributorToken = createToken(contributor);
    memberToken = createToken(member);
  });

  afterAll(async () => {
    await prisma.approvalStep.deleteMany();
    await prisma.approvalWorkflow.deleteMany();
    await prisma.userAdminRole.deleteMany({
      where: { user: { email: { contains: '@wf.test.com' } } },
    });
    await prisma.adminRole.deleteMany({ where: { name: 'WF_CONTRIBUTOR' } });
    await prisma.user.deleteMany({ where: { email: { contains: '@wf.test.com' } } });
    await prisma.formation.deleteMany({ where: { title: { contains: '[WF-TEST]' } } });
    await prisma.job.deleteMany({ where: { title: { contains: '[WF-TEST]' } } });
    await prisma.$disconnect();
  });

  describe('Création et cycle de vie', () => {
    it('crée une formation en brouillon avec son auteur', async () => {
      const res = await request(app)
        .post('/api/formations')
        .set('Authorization', `Bearer ${publisherToken}`)
        .send({ title: '[WF-TEST] Prise de parole', description: 'Formation de test du workflow éditorial', category: 'Communication', icon: '🗣️' });

      expect(res.status).toBe(201);
      expect(res.body.data.status).toBe('DRAFT');
      expect(res.body.data.createdBy.id).toBe(publisher.id);
      formationId = res.body.data.id;
    });

    it('n\'expose pas un brouillon au public', async () => {
      const res = await request(app).get(`/api/formations/${formationId}`);
      expect(res.status).toBe(404);

      const list = await request(app).get('/api/formations');
      expect(list.body.data.some(f => f.id === formationId)).toBe(false);
    });

    it('autorise l\'auteur du module à publier directement (permission publish)', async () => {
      const res = await request(app)
        .post(`/api/formations/${formationId}/publish`)
        .set('Authorization', `Bearer ${publisherToken}`);
      expect(res.status).toBe(200);
      expect(res.body.data.status).toBe('PUBLISHED');
    });

    it('rend la formation visible publiquement une fois publiée', async () => {
      const list = await request(app).get('/api/formations');
      expect(list.body.data.some(f => f.id === formationId)).toBe(true);
    });

    it('dépublie (retour au brouillon) puis archive', async () => {
      const unpublish = await request(app)
        .post(`/api/formations/${formationId}/unpublish`)
        .set('Authorization', `Bearer ${publisherToken}`);
      expect(unpublish.status).toBe(200);
      expect(unpublish.body.data.status).toBe('DRAFT');

      const archive = await request(app)
        .post(`/api/formations/${formationId}/archive`)
        .set('Authorization', `Bearer ${publisherToken}`);
      expect(archive.status).toBe(200);
      expect(archive.body.data.status).toBe('ARCHIVED');
    });

    it('refuse la publication directe sans permission formation.publish', async () => {
      const res = await request(app)
        .post(`/api/formations/${formationId}/publish`)
        .set('Authorization', `Bearer ${contributorToken}`);
      expect(res.status).toBe(403);
    });
  });

  describe('Soumission à validation (sans permission publish)', () => {
    it('le contributeur soumet sa formation : PENDING_REVIEW + workflow créé', async () => {
      const created = await request(app)
        .post('/api/formations')
        .set('Authorization', `Bearer ${contributorToken}`)
        .send({ title: '[WF-TEST] Leadership', description: 'Formation soumise à validation par un contributeur' });
      expect(created.status).toBe(201);
      contributorFormationId = created.body.data.id;

      const res = await request(app)
        .post(`/api/formations/${contributorFormationId}/submit`)
        .set('Authorization', `Bearer ${contributorToken}`);
      expect(res.status).toBe(200);
      expect(res.body.data.status).toBe('PENDING_REVIEW');

      const workflow = await prisma.approvalWorkflow.findUnique({
        where: { resourceType_resourceId_action: { resourceType: 'Formation', resourceId: contributorFormationId, action: 'publish' } },
      });
      expect(workflow).not.toBeNull();
      expect(workflow.status).toBe('PENDING');
      expect(workflow.createdById).toBe(contributor.id);
    });

    it('refuse une double soumission', async () => {
      const res = await request(app)
        .post(`/api/formations/${contributorFormationId}/submit`)
        .set('Authorization', `Bearer ${contributorToken}`);
      expect(res.status).toBe(400);
    });

    it('l\'ULTRA_ADMIN approuve : la formation devient PUBLISHED automatiquement', async () => {
      const workflow = await prisma.approvalWorkflow.findUnique({
        where: { resourceType_resourceId_action: { resourceType: 'Formation', resourceId: contributorFormationId, action: 'publish' } },
      });

      const res = await request(app)
        .post(`/api/approvals/${workflow.id}/approve`)
        .set('Authorization', `Bearer ${ultraToken}`)
        .send({ comment: 'OK pour publication' });
      expect(res.status).toBe(200);
      expect(res.body.data.status).toBe('APPROVED');

      const formation = await prisma.formation.findUnique({ where: { id: contributorFormationId } });
      expect(formation.status).toBe('PUBLISHED');
    });

    it('la publication directe annule un workflow en attente', async () => {
      // Le contributeur crée et soumet une autre formation
      const created = await request(app)
        .post('/api/formations')
        .set('Authorization', `Bearer ${contributorToken}`)
        .send({ title: '[WF-TEST] Négociation', description: 'Formation dont le workflow sera annulé' });
      const id = created.body.data.id;
      await request(app).post(`/api/formations/${id}/submit`).set('Authorization', `Bearer ${contributorToken}`);

      // L'ULTRA_ADMIN publie directement : le workflow doit être annulé
      const res = await request(app)
        .post(`/api/formations/${id}/publish`)
        .set('Authorization', `Bearer ${ultraToken}`);
      expect(res.status).toBe(200);

      const workflow = await prisma.approvalWorkflow.findUnique({
        where: { resourceType_resourceId_action: { resourceType: 'Formation', resourceId: id, action: 'publish' } },
      });
      expect(workflow.status).toBe('CANCELLED');
    });
  });

  describe('Filtres de la liste admin', () => {
    it('« mes créations » ne renvoie que le contenu de l\'auteur', async () => {
      const res = await request(app)
        .get('/api/formations/admin/list?mine=true')
        .set('Authorization', `Bearer ${contributorToken}`);
      expect(res.status).toBe(200);
      expect(res.body.data.length).toBeGreaterThan(0);
      res.body.data.forEach(f => {
        expect(f.createdById).toBe(contributor.id);
      });
    });

    it('filtre par statut', async () => {
      const res = await request(app)
        .get('/api/formations/admin/list?status=PUBLISHED')
        .set('Authorization', `Bearer ${ultraToken}`);
      expect(res.status).toBe(200);
      res.body.data.forEach(f => {
        expect(f.status).toBe('PUBLISHED');
      });
    });
  });

  describe('Métiers : même workflow', () => {
    it('crée, publie, dépublie et archive un métier', async () => {
      const created = await request(app)
        .post('/api/jobs')
        .set('Authorization', `Bearer ${ultraToken}`)
        .send({ title: '[WF-TEST] Data Analyst', description: 'Métier de test du workflow éditorial', category: 'TECH', icon: '📊' });
      expect(created.status).toBe(201);
      expect(created.body.data.status).toBe('DRAFT');
      jobId = created.body.data.id;

      const publish = await request(app)
        .post(`/api/jobs/${jobId}/publish`)
        .set('Authorization', `Bearer ${ultraToken}`);
      expect(publish.body.data.status).toBe('PUBLISHED');

      // Le métier publié apparaît dans la liste publique
      const publicList = await request(app).get('/api/jobs');
      expect(publicList.body.data.some(j => j.id === jobId)).toBe(true);

      const unpublish = await request(app)
        .post(`/api/jobs/${jobId}/unpublish`)
        .set('Authorization', `Bearer ${ultraToken}`);
      expect(unpublish.body.data.status).toBe('DRAFT');

      const archive = await request(app)
        .post(`/api/jobs/${jobId}/archive`)
        .set('Authorization', `Bearer ${ultraToken}`);
      expect(archive.body.data.status).toBe('ARCHIVED');
    });

    it('refuse le workflow métiers à un admin formateur (cloisonnement)', async () => {
      const res = await request(app)
        .post('/api/jobs')
        .set('Authorization', `Bearer ${publisherToken}`)
        .send({ title: '[WF-TEST] Interdit', description: 'Un admin formation ne doit pas créer de métier', category: 'TECH' });
      expect(res.status).toBe(403);
    });
  });

  describe('Cloisonnement membre', () => {
    it('refuse toutes les actions d\'écriture à un membre', async () => {
      const actions = [
        ['/api/formations', { title: 'Interdit', description: 'Un membre ne doit pas créer de formation' }],
        [`/api/formations/${formationId}/publish`, {}],
        [`/api/jobs/${jobId}/publish`, {}],
      ];
      for (const [url, body] of actions) {
        const res = await request(app)
          .post(url)
          .set('Authorization', `Bearer ${memberToken}`)
          .send(body);
        expect(res.status).toBe(403);
      }
    });
  });
});
