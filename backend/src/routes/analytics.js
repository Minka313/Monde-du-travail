const express = require('express');
const AnalyticsController = require('../controllers/analyticsController');
const { optionalAuth, authenticate, authorizeAdmin } = require('../middleware/auth');
const { authorize } = require('../middleware/rbac');

const router = express.Router();

// Endpoint public de tracking de visite classique
router.post('/track', optionalAuth, AnalyticsController.track);

// Nouveaux endpoints du Système d'Impact & d'Orientation
// Ingestion asynchrone d'événements d'orientation (vues métiers, clics formations, sondages)
router.post('/events', optionalAuth, AnalyticsController.trackEvents);

// Profilage progressif sans friction (Lycéen, Étudiant, Pro, Reconversion)
router.post('/profile', optionalAuth, AnalyticsController.setProfile);

// Profil visiteur détaillé (facultatif, anonyme) et temps passé sur les pages
router.get('/visitor-options', AnalyticsController.getVisitorOptions);
router.post('/visitor-profile', optionalAuth, AnalyticsController.saveVisitorProfile);
router.get('/visitor-profile/me', authenticate, AnalyticsController.getMyVisitorProfile);
router.post('/engagement', express.text({ type: ['text/plain', 'application/json'], limit: '2kb' }), AnalyticsController.recordEngagement);

// Endpoints sécurisés réservés aux administrateurs autorisés (Ultra Admin / analytics.read)
router.get('/visitors', authenticate, authorizeAdmin, authorize(['analytics.read', '*']), AnalyticsController.getVisitorOverview);
router.get('/overview', authenticate, authorizeAdmin, authorize(['analytics.read', '*']), AnalyticsController.getVisitorOverview);
router.get('/presence', authenticate, authorizeAdmin, authorize(['analytics.read', '*']), AnalyticsController.getMostActiveMembers);
router.get('/profiles', authenticate, authorizeAdmin, authorize(['analytics.read', '*']), AnalyticsController.getVisitorDashboard);
router.get('/impact-stats', authenticate, authorizeAdmin, authorize(['analytics.read', '*']), AnalyticsController.getImpactStats);

module.exports = router;

