const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');
const { authenticate, authorize, optionalAuth } = require('../middleware/auth');
const AdminApprovalMiddleware = require('../middleware/adminApproval');
const { requireModulePermission } = require('../middleware/moduleScope');
const requireReauth = require('../middleware/reauth');
const validate = require('../middleware/validate');
const { z } = require('zod');

const jobSchema = z.object({
  body: z.object({
    title: z.string().min(3, 'Titre requis'),
    description: z.string().min(10, 'Description requise'),
    category: z.enum(['TECH', 'ENERGIE', 'FINANCE', 'SECURITE', 'SANTE', 'EDUCATION', 'AUTRE']),
    icon: z.string().optional(),
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

// Liste admin (filtres statut / mes créations / recherche) — avant /:id
router.get('/admin/list', ...adminGate, authorize('metier.read'), jobController.getJobsForAdmin);

router.get('/:id', optionalAuth, jobController.getJobById);

// Gestion (authentifiée, cloisonnée au module métiers)
router.post('/', ...adminGate, authorize('metier.create'), validate(jobSchema), jobController.createJob);
router.put('/:id', ...adminGate, authorize('metier.update'), validate(jobSchema), jobController.updateJob);
router.delete('/:id', ...adminGate, authorize('metier.delete'), jobController.deleteJob);

// Suppression massive : action critique (double confirmation par mot de passe)
router.post('/bulk-delete', ...adminGate, authorize('metier.delete'), requireReauth, validate(bulkDeleteSchema), jobController.bulkDeleteJobs);

// Workflow éditorial
router.post('/:id/submit', ...adminGate, authorize('metier.update'), jobController.submitJob);
router.post('/:id/publish', ...adminGate, authorize('metier.publish'), jobController.publishJob);
router.post('/:id/unpublish', ...adminGate, authorize('metier.publish'), jobController.unpublishJob);
router.post('/:id/archive', ...adminGate, authorize('metier.archive'), jobController.archiveJob);

module.exports = router;
