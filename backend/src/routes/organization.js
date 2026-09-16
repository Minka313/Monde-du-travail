/**
 * @file organization.js
 * @description Routes sécurisées pour l'organisation, les postes et le bureau du club.
 */

const express = require('express');
const { z } = require('zod');
const OrganizationController = require('../controllers/organizationController');
const { authenticate, authorizeAdmin, authorizeUltraAdmin } = require('../middleware/auth');
const { authorize } = require('../middleware/rbac');
const validate = require('../middleware/validate');

const router = express.Router();

// Authentification requise pour toutes les opérations admin de l'organisation
router.use(authenticate);
router.use(authorizeAdmin);

// Schémas de validation Zod
const createPositionSchema = z.object({
  body: z.object({
    title: z.string().min(2, 'Le titre du poste doit comporter au moins 2 caractères'),
    description: z.string().max(1000).optional().nullable(),
    category: z.string().min(2).optional(),
    order: z.number().int().optional(),
  }),
});

const updatePositionSchema = z.object({
  body: z.object({
    title: z.string().min(2).optional(),
    description: z.string().max(1000).optional().nullable(),
    category: z.string().min(2).optional(),
    order: z.number().int().optional(),
  }),
});

const assignPositionSchema = z.object({
  body: z.object({
    positionId: z.string().min(1, 'ID du poste requis'),
    userId: z.string().min(1, 'ID utilisateur requis'),
    mandateYear: z.string().max(50).optional().nullable(),
    replaceCurrent: z.boolean().optional(),
    notes: z.string().max(500).optional().nullable(),
  }),
});

// --- CONSULTATION (Accessible à tout le staff administrateur) ---
router.get('/bureau', OrganizationController.getBureau);
router.get('/positions', OrganizationController.getAllPositions);
router.get('/positions/:id', OrganizationController.getPosition);
router.get('/assignments', OrganizationController.getAllAssignments);

// --- MUTATIONS STRUCTURELLES (Réservées EXCLUSIVEMENT à l'Ultra Admin) ---
router.post('/positions', authorizeUltraAdmin, validate(createPositionSchema), OrganizationController.createPosition);
router.put('/positions/:id', authorizeUltraAdmin, validate(updatePositionSchema), OrganizationController.updatePosition);
router.delete('/positions/:id', authorizeUltraAdmin, OrganizationController.deletePosition);

router.post('/assignments', authorizeUltraAdmin, validate(assignPositionSchema), OrganizationController.assignPosition);
router.put('/assignments/:id', authorizeUltraAdmin, OrganizationController.updateAssignment);
router.delete('/assignments/:id', authorizeUltraAdmin, OrganizationController.removeAssignment);

module.exports = router;
