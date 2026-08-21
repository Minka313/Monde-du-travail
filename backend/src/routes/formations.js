const express = require('express');
const router = express.Router();
const formationController = require('../controllers/formationController');
const { authenticate, authorize, optionalAuth } = require('../middleware/auth');
const AdminApprovalMiddleware = require('../middleware/adminApproval');
const { requireModulePermission } = require('../middleware/moduleScope');
const validate = require('../middleware/validate');
const { z } = require('zod');

const formationSchema = z.object({
  body: z.object({
    title: z.string().min(3, 'Titre requis'),
    description: z.string().min(10, 'Description requise'),
    icon: z.string().optional(),
    category: z.string().max(100).optional(),
  }),
});

const adminGate = [authenticate, AdminApprovalMiddleware.middleware, requireModulePermission('formation')];

// Routes publiques : uniquement le contenu publié
router.get('/', formationController.getPublishedFormations);

// Liste admin (filtres statut / mes créations / recherche) — avant /:id
router.get('/admin/list', ...adminGate, authorize('formation.read'), formationController.getFormationsForAdmin);

router.get('/:id', optionalAuth, formationController.getFormationById);

// Gestion (authentifiée, cloisonnée au module formation)
router.post('/', ...adminGate, authorize('formation.create'), validate(formationSchema), formationController.createFormation);
router.put('/:id', ...adminGate, authorize('formation.update'), validate(formationSchema), formationController.updateFormation);
router.delete('/:id', ...adminGate, authorize('formation.delete'), formationController.deleteFormation);

// Workflow éditorial
router.post('/:id/submit', ...adminGate, authorize('formation.update'), formationController.submitFormation);
router.post('/:id/publish', ...adminGate, authorize('formation.publish'), formationController.publishFormation);
router.post('/:id/unpublish', ...adminGate, authorize('formation.publish'), formationController.unpublishFormation);
router.post('/:id/archive', ...adminGate, authorize('formation.archive'), formationController.archiveFormation);

module.exports = router;
