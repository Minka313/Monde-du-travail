const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { authenticate, authorize, authorizeAdmin } = require('../middleware/auth');
const AdminApprovalMiddleware = require('../middleware/adminApproval');
const requireReauth = require('../middleware/reauth');

router.use(authenticate);
router.use(authorizeAdmin);
router.use(AdminApprovalMiddleware.middleware);

// Gestion des administrateurs et de leurs rôles
router.get('/admins', authorize('admins.read'), adminController.getAllAdmins);
router.post('/admins', authorize(['admins.create', '*']), adminController.createAdmin);
router.get('/admins/pending', authorize(['admins.read', 'admins.approve']), adminController.getPendingAdmins);
router.get('/admins/:id/logs', authorize(['logs.read', 'admins.read', '*']), adminController.getAdminAuditLogs);
router.post('/admins/:id/approve', authorize('admins.approve'), adminController.approveAdmin);
router.post('/admins/:id/reject', authorize('admins.approve'), adminController.rejectAdmin);
router.post('/admins/:id/suspend', authorize('admins.suspend'), adminController.suspendAdmin);
router.post('/admins/:id/reactivate', authorize('admins.suspend'), adminController.reactivateAdmin);
// Révocation : action critique (double confirmation par mot de passe)
router.post('/admins/:id/revoke', authorize('admins.revoke'), requireReauth, adminController.revokeAdmin);

// Tableau de bord : accessible à tout le staff admin
router.get('/stats', adminController.getStats);

// Adhésions
router.get('/memberships/pending', authorize('membership.read'), adminController.getPendingMemberships);
router.post('/memberships/:id/approve', authorize('membership.approve'), adminController.approveMembership);
router.post('/memberships/:id/reject', authorize('membership.approve'), adminController.rejectMembership);

// Blog (vue admin)
router.get('/blog/posts', authorize('blog.read'), adminController.getAllPosts);

module.exports = router;
