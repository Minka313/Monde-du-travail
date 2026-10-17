const express = require('express');
const router = express.Router();
const OpportunityController = require('../controllers/opportunityController');
const { authenticate, authorize, optionalAuth } = require('../middleware/auth');
const AdminApprovalMiddleware = require('../middleware/adminApproval');
const { requireModulePermission } = require('../middleware/moduleScope');
const validate = require('../middleware/validate');
const { CATEGORIES, LEVELS, DESTINATIONS, PHASES } = require('../services/opportunityService');
const { z } = require('zod');

const day = z.string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, 'Date attendue au format AAAA-MM-JJ')
  .refine((value) => !Number.isNaN(Date.parse(`${value}T00:00:00Z`)) && new Date(`${value}T00:00:00Z`).toISOString().startsWith(value), 'Date invalide');

const webUrl = z.string().trim().max(500).refine((value) => {
  if (!value) return true;
  try {
    return ['http:', 'https:'].includes(new URL(value).protocol);
  } catch (_) {
    return false;
  }
}, 'Lien http(s) valide requis');

const optionalText = (max) => z.string().max(max).optional().nullable();

const fields = {
  title: z.string().trim().min(3, 'Intitulé requis').max(200),
  organization: z.string().trim().min(2, 'Organisme responsable requis').max(200),
  category: z.enum(CATEGORIES),
  summary: z.string().trim().min(10, 'Résumé requis (10 caractères minimum)').max(600),
  details: optionalText(5000),
  eligibility: optionalText(2000),
  levels: z.array(z.enum(LEVELS)).max(LEVELS.length).optional(),
  destination: z.enum(DESTINATIONS).optional().nullable(),
  country: optionalText(100),
  openingDate: day.optional().nullable(),
  deadline: day.optional().nullable(),
  keyDates: z.array(z.object({ label: z.string().trim().min(2).max(120), date: day })).max(10).optional().nullable(),
  documents: z.array(z.string().max(200)).max(20).optional(),
  benefits: optionalText(1000),
  officialUrl: webUrl.optional().nullable(),
  phaseOverride: z.enum(['RESULTS']).optional().nullable(),
  image: webUrl.optional().nullable(),
  // Coché par l'admin : « j'ai vérifié cette annonce sur la source officielle aujourd'hui »
  markVerified: z.boolean().optional(),
};

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
