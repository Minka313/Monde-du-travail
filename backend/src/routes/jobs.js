const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');
const { authenticate, authorize, optionalAuth } = require('../middleware/auth');
const AdminApprovalMiddleware = require('../middleware/adminApproval');
const { requireModulePermission } = require('../middleware/moduleScope');
const requireReauth = require('../middleware/reauth');
const validate = require('../middleware/validate');
const { z } = require('zod');

const saviezVousSchema = z.object({
  statut: z.enum(['en_transformation', 'valeur_sure', 'en_emergence']),
  fait: z.string().min(5, 'Le fait doit comporter au moins 5 caractères').max(200, 'Le fait ne doit pas dépasser 200 caractères'),
  pourquoi: z.string().min(10, 'L\'explication doit comporter au moins 10 caractères').max(350, 'L\'explication ne doit pas dépasser 350 caractères'),
  a_retenir: z.string().max(200, 'Le conseil à retenir ne doit pas dépasser 200 caractères').optional().nullable(),
  aRetenir: z.string().max(200, 'Le conseil à retenir ne doit pas dépasser 200 caractères').optional().nullable(),
}).passthrough();

const jobSchema = z.object({
  body: z.object({
    title: z.string().min(3, 'Titre requis'),
    description: z.string().min(10, 'Description requise'),
    content: z.string().optional().nullable(),
    category: z.enum(['TECH', 'ENERGIE', 'FINANCE', 'SECURITE', 'SANTE', 'EDUCATION', 'AUTRE']).optional().default('TECH'),
    domain: z.string().optional().nullable(),
    icon: z.string().optional().nullable(),
    image: z.string().optional().nullable(),
    salary: z.string().optional().nullable(),
    skills: z.union([z.array(z.string()), z.string()]).optional().nullable(),
    prerequisites: z.string().optional().nullable(),
    studies: z.string().optional().nullable(),
    advantages: z.string().optional().nullable(),
    disadvantages: z.string().optional().nullable(),
    subProfessions: z.union([z.array(z.string()), z.string()]).optional().nullable(),
    videoUrl: z.string().optional().nullable(),
    location: z.string().optional().nullable(),
    saviezVous: saviezVousSchema.optional().nullable(),
  }),
});

const patchSaviezVousSchema = z.object({
  body: z.object({
    saviezVous: saviezVousSchema.optional().nullable(),
  }),
});

const bulkDeleteSchema = z.object({
  body: z.object({
    ids: z.array(z.string()).min(1, 'Au moins un identifiant requis').max(100, '100 suppressions maximum par lot'),
  }),
});

const adminGate = [authenticate, AdminApprovalMiddleware.middleware, requireModulePermission('metier')];

// Routes publiques : uniquement le contenu publié
router.get('/', jobController.getPublishedJobs);
router.get('/domains', jobController.getDomains);

// Liste admin (filtres statut / mes créations / recherche) — avant /:id
router.get('/admin/list', ...adminGate, authorize('metier.read'), jobController.getJobsForAdmin);

router.get('/:id', optionalAuth, jobController.getJobById);

// Gestion (authentifiée, cloisonnée au module métiers)
router.post('/', ...adminGate, authorize('metier.create'), validate(jobSchema), jobController.createJob);
router.put('/:id', ...adminGate, authorize('metier.update'), validate(jobSchema), jobController.updateJob);
router.patch('/:id/saviez-vous', ...adminGate, authorize('metier.update'), validate(patchSaviezVousSchema), jobController.updateSaviezVous);
router.delete('/:id', ...adminGate, authorize('metier.delete'), jobController.deleteJob);

// Suppression massive : action critique (double confirmation par mot de passe)
router.post('/bulk-delete', ...adminGate, authorize('metier.delete'), requireReauth, validate(bulkDeleteSchema), jobController.bulkDeleteJobs);

// Workflow éditorial
router.post('/:id/submit', ...adminGate, authorize('metier.update'), jobController.submitJob);
router.post('/:id/publish', ...adminGate, authorize('metier.publish'), jobController.publishJob);
router.post('/:id/unpublish', ...adminGate, authorize('metier.publish'), jobController.unpublishJob);
router.post('/:id/archive', ...adminGate, authorize('metier.archive'), jobController.archiveJob);

module.exports = router;
