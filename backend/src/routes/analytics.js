const express = require('express');
const AnalyticsController = require('../controllers/analyticsController');
const { optionalAuth, authenticate, authorizeAdmin } = require('../middleware/auth');

const router = express.Router();

// Endpoint public de tracking de visite classique
router.post('/track', optionalAuth, AnalyticsController.track);

// Nouveaux endpoints du Système d'Impact & d'Orientation
// Ingestion asynchrone d'événements d'orientation (vues métiers, clics formations, sondages)
router.post('/events', optionalAuth, AnalyticsController.trackEvents);

// Profilage progressif sans friction (Lycéen, Étudiant, Pro, Reconversion)
router.post('/profile', optionalAuth, AnalyticsController.setProfile);

// Endpoints sécurisés réservés aux administrateurs
router.get('/visitors', authenticate, authorizeAdmin, AnalyticsController.getVisitorOverview);
router.get('/overview', authenticate, authorizeAdmin, AnalyticsController.getVisitorOverview);
router.get('/presence', authenticate, authorizeAdmin, AnalyticsController.getMostActiveMembers);
router.get('/impact-stats', authenticate, authorizeAdmin, AnalyticsController.getImpactStats);

module.exports = router;

