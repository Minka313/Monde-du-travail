const express = require('express');
const AnalyticsController = require('../controllers/analyticsController');
const { optionalAuth, authenticate, authorizeAdmin } = require('../middleware/auth');

const router = express.Router();

// Endpoint public de tracking de visite (avec authentification optionnelle pour relier les membres)
router.post('/track', optionalAuth, AnalyticsController.track);

// Endpoints sécurisés réservés aux administrateurs
router.get('/visitors', authenticate, authorizeAdmin, AnalyticsController.getVisitorOverview);
router.get('/overview', authenticate, authorizeAdmin, AnalyticsController.getVisitorOverview);
router.get('/presence', authenticate, authorizeAdmin, AnalyticsController.getMostActiveMembers);

module.exports = router;
