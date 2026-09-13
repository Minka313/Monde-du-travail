const express = require('express');
const router = express.Router();
const StatsController = require('../controllers/statsController');

// Route publique pour les statistiques véridiques d'impact du club
router.get('/', StatsController.getPublicStats);

module.exports = router;
