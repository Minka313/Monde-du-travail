const express = require('express');
const router = express.Router();
const NotificationController = require('../controllers/notificationController');
const {
  authenticate,
  optionalAuth,
  authorizeAdmin,
  authorizeUltraAdmin,
} = require('../middleware/auth');

// Clé publique VAPID pour l'inscription push client
router.get('/vapid-key', NotificationController.getVapidKey);

// Enregistrement et désabonnement d'un terminal Web Push
router.post('/subscribe', optionalAuth, NotificationController.subscribe);
router.post('/unsubscribe', NotificationController.unsubscribe);

// Consultation des notifications in-app (visiteur ou connecté)
router.get('/', optionalAuth, NotificationController.getNotifications);

// Gestion de lecture des notifications
router.patch('/read-all', optionalAuth, NotificationController.markAllAsRead);
router.patch('/:id/read', optionalAuth, NotificationController.markAsRead);

// Diffusion manuelle d'une alerte générale (Réservé Ultra Admin)
router.post('/broadcast', authenticate, authorizeUltraAdmin, NotificationController.broadcast);

// Métriques pour l'espace d'administration
router.get('/stats', authenticate, authorizeAdmin, NotificationController.getStats);

module.exports = router;
