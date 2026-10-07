const express = require('express');
const SuperDashboardController = require('../controllers/superDashboardController');
const { authenticate, authorizeAdmin, authorizeUltraAdmin } = require('../middleware/auth');
const { authorize } = require('../middleware/rbac');
const AdminApprovalMiddleware = require('../middleware/adminApproval');

const router = express.Router();

router.use(authenticate);
router.use(authorizeAdmin);
router.use(AdminApprovalMiddleware.middleware);

// Statistiques et monitoring accessibles uniquement aux administrateurs autorisés (Ultra Admin / dashboard.read)
router.get('/stats', authorize(['dashboard.read', '*']), SuperDashboardController.getGlobalStats);
router.get('/activities', authorize(['dashboard.read', '*']), SuperDashboardController.getRecentActivities);
router.get('/alerts', authorize(['dashboard.read', '*']), SuperDashboardController.getAlerts);

// Gestion exclusive Ultra Admin (suspension et gouvernance des administrateurs)
router.get('/admins', authorizeUltraAdmin, SuperDashboardController.getAdmins);
router.post('/admins/:id/suspend', authorizeUltraAdmin, SuperDashboardController.suspendAdmin);
router.post('/admins/:id/reactivate', authorizeUltraAdmin, SuperDashboardController.reactivateAdmin);

module.exports = router;
