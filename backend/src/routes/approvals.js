const express = require('express');
const router = express.Router();
const approvalController = require('../controllers/approvalController');
const { authenticate, authorize, authorizeAdmin } = require('../middleware/auth');
const AdminApprovalMiddleware = require('../middleware/adminApproval');

// Toutes les routes nécessitent une authentification + rôle admin + approbation
router.use(authenticate);
router.use(authorizeAdmin);
router.use(AdminApprovalMiddleware.middleware);

// Consultation des workflows
router.get('/pending', authorize('approvals.read'), approvalController.getPendingApprovals);
router.get('/', authorize('approvals.read'), approvalController.getAllApprovalWorkflows);
router.get('/:id', authorize('approvals.read'), approvalController.getApprovalWorkflow);

// Actions sur les workflows
router.post('/', authorize('approvals.manage'), approvalController.createApprovalRequest);
router.post('/:id/approve', authorize('approvals.manage'), approvalController.approveWorkflow);
router.post('/:id/reject', authorize('approvals.manage'), approvalController.rejectWorkflow);
router.post('/:id/cancel', authorize('approvals.manage'), approvalController.cancelWorkflow);

module.exports = router;
