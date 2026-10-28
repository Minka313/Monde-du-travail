const express = require('express');
const router = express.Router();
const OpportunityController = require('../controllers/opportunityController');
const { authenticate, authorize, optionalAuth } = require('../middleware/auth');
const AdminApprovalMiddleware = require('../middleware/adminApproval');
const { requireModulePermission } = require('../middleware/moduleScope');
const validate = require('../middleware/validate');
const rateLimit = require('express-rate-limit');
const { CATEGORIES, LEVELS, DESTINATIONS, PHASES, DOMAINS, REPORT_KINDS } = require('../services/opportunityService');
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
    domain: z.enum(DOMAINS).optional(),
    series: z.string().max(30).optional(),
  }),
});

const reportSchema = z.object({
  body: z.object({
    kind: z.enum(REPORT_KINDS),
    message: z.string().trim().min(10, 'Décrivez le problème en quelques mots (10 caractères minimum)').max(1500),
    contact: z.string().trim().max(200).optional().nullable(),
  }).strict(),
});

// Signalements publics : quelques envois par heure et par adresse IP
const reportLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Trop de signalements envoyés. Réessayez dans une heure.' },
});

// Rappels de session : appel public mais idempotent, limité pour éviter les abus
const reminderLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 6,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Trop de demandes. Réessayez plus tard.' },
});

const adminGate = [authenticate, AdminApprovalMiddleware.middleware, requireModulePermission('opportunite')];

// Public : uniquement les annonces publiées
router.get('/', validate(publicQuerySchema), OpportunityController.getPublished);

router.post('/reminders/run', reminderLimiter, OpportunityController.runSessionReminders);

// Espace admin (avant /:id)
router.get('/admin/list', ...adminGate, authorize('opportunite.read'), OpportunityController.getForAdmin);
router.get('/admin/reports', ...adminGate, authorize('opportunite.read'), OpportunityController.listReports);
router.post('/admin/reports/:reportId/resolve', ...adminGate, authorize('opportunite.update'), OpportunityController.resolveReport);

router.get('/:id', optionalAuth, OpportunityController.getById);

router.post('/', ...adminGate, authorize('opportunite.create'), validate(createSchema), OpportunityController.create);
router.put('/:id', ...adminGate, authorize('opportunite.update'), validate(updateSchema), OpportunityController.update);
router.delete('/:id', ...adminGate, authorize('opportunite.delete'), OpportunityController.remove);

router.post('/:id/reports', reportLimiter, validate(reportSchema), OpportunityController.createReport);
router.post('/:id/duplicate', ...adminGate, authorize('opportunite.create'), OpportunityController.duplicate);
router.post('/:id/publish', ...adminGate, authorize('opportunite.publish'), OpportunityController.publish);
router.post('/:id/unpublish', ...adminGate, authorize('opportunite.publish'), OpportunityController.unpublish);
router.post('/:id/archive', ...adminGate, authorize('opportunite.archive'), OpportunityController.archive);

module.exports = router;
