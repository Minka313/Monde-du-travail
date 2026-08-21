const express = require('express');
const SuperDashboardController = require('../controllers/superDashboardController');
const { authenticate, authorizeUltraAdmin } = require('../middleware/auth');
const AdminApprovalMiddleware = require('../middleware/adminApproval');

const router = express.Router();

router.use(authenticate);
router.use(authorizeUltraAdmin);
router.use(AdminApprovalMiddleware.middleware);

router.get('/stats', SuperDashboardController.getGlobalStats);
router.get('/activities', SuperDashboardController.getRecentActivities);
router.get('/alerts', SuperDashboardController.getAlerts);
router.get('/admins', SuperDashboardController.getAdmins);
router.post('/admins/:id/suspend', SuperDashboardController.suspendAdmin);
router.post('/admins/:id/reactivate', SuperDashboardController.reactivateAdmin);

module.exports = router;
