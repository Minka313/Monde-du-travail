const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const { authenticate, authorizeMember, authorize } = require('../middleware/auth');
const AdminApprovalMiddleware = require('../middleware/adminApproval');
const { requireModulePermission } = require('../middleware/moduleScope');
const validate = require('../middleware/validate');
const { z } = require('zod');

const eventSchema = z.object({
  body: z.object({
    title: z.string().min(3, 'Titre requis (min 3 caractères)'),
    description: z.string().min(10, 'Description requise (min 10 caractères)'),
    type: z.enum(['ATELIER', 'CONFERENCE', 'RENCONTRE', 'FORMATION']),
    location: z.string().min(2, 'Lieu requis'),
    eventDate: z.string().datetime('Date invalide'),
  }),
});

// Routes publiques
router.get('/', eventController.getAllEvents);
router.get('/:id', eventController.getEventById);

// Routes protégées (membres et admin)
router.use(authenticate, authorizeMember);

// Routes admin avec permissions RBAC
router.post('/', AdminApprovalMiddleware.middleware, requireModulePermission('event'), authorize('event.create'), validate(eventSchema), eventController.createEvent);
router.put('/:id', AdminApprovalMiddleware.middleware, requireModulePermission('event'), authorize('event.update'), validate(eventSchema), eventController.updateEvent);
router.delete('/:id', AdminApprovalMiddleware.middleware, requireModulePermission('event'), authorize('event.delete'), eventController.deleteEvent);

module.exports = router;
