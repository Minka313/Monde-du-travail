const express = require('express');
const SuperDashboardController = require('../controllers/superDashboardController');
const { authenticate, authorizeAdmin, authorizeUltraAdmin } = require('../middleware/auth');
const AdminApprovalMiddleware = require('../middleware/adminApproval');

const router = express.Router();

router.use(authenticate);
router.use(authorizeAdmin);
router.use(AdminApprovalMiddleware.middleware);

// Statistiques et monitoring accessibles à l'ensemble du staff d'administration
router.get('/stats', SuperDashboardController.getGlobalStats);
router.get('/activities', SuperDashboardController.getRecentActivities);
router.get('/alerts', SuperDashboardController.getAlerts);

// Gestion exclusive Ultra Admin (suspension et gouvernance des administrateurs)
router.get('/admins', authorizeUltraAdmin, SuperDashboardController.getAdmins);
router.post('/admins/:id/suspend', authorizeUltraAdmin, SuperDashboardController.suspendAdmin);
router.post('/admins/:id/reactivate', authorizeUltraAdmin, SuperDashboardController.reactivateAdmin);

module.exports = router;
