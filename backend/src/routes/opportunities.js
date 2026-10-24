const express = require('express');
const router = express.Router();
const OpportunityController = require('../controllers/opportunityController');
const { authenticate, authorize, optionalAuth } = require('../middleware/auth');
const AdminApprovalMiddleware = require('../middleware/adminApproval');
const { requireModulePermission } = require('../middleware/moduleScope');
const validate = require('../middleware/validate');
const { CATEGORIES, LEVELS, DESTINATIONS, PHASES } = require('../services/opportunityService');
const { fields } = require('../services/opportunityFields');
const { z } = require('zod');

const createSchema = z.object({ body: z.object(fields) });
const updateSchema = z.object({
  body: z.object(fields).partial().refine((body) => Object.keys(body).length > 0, 'Aucune modification fournie'),
});

const publicQuerySchema = z.object({
  query: z.object({
    category: z.enum(CATEGORIES).optional(),
    level: z.enum(LEVELS).optional(),
    destination: z.enum(DESTINATIONS).optional(),
    phase: z.enum(PHASES).optional(),
    search: z.string().max(100).optional(),
  }),
});

const adminGate = [authenticate, AdminApprovalMiddleware.middleware, requireModulePermission('opportunite')];

// Public : uniquement les annonces publiées
router.get('/', validate(publicQuerySchema), OpportunityController.getPublished);

// Espace admin (avant /:id)
router.get('/admin/list', ...adminGate, authorize('opportunite.read'), OpportunityController.getForAdmin);

router.get('/:id', optionalAuth, OpportunityController.getById);

router.post('/', ...adminGate, authorize('opportunite.create'), validate(createSchema), OpportunityController.create);
router.put('/:id', ...adminGate, authorize('opportunite.update'), validate(updateSchema), OpportunityController.update);
router.delete('/:id', ...adminGate, authorize('opportunite.delete'), OpportunityController.remove);

router.post('/:id/publish', ...adminGate, authorize('opportunite.publish'), OpportunityController.publish);
router.post('/:id/unpublish', ...adminGate, authorize('opportunite.publish'), OpportunityController.unpublish);
router.post('/:id/archive', ...adminGate, authorize('opportunite.archive'), OpportunityController.archive);

module.exports = router;
