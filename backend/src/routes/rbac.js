const express = require('express');
const { z } = require('zod');
const RbacController = require('../controllers/rbacController');
const { authenticate, authorize, authorizeAdmin } = require('../middleware/auth');
const AdminApprovalMiddleware = require('../middleware/adminApproval');
const validate = require('../middleware/validate');
const requireReauth = require('../middleware/reauth');

const router = express.Router();

router.use(authenticate);
router.use(authorizeAdmin);
router.use(AdminApprovalMiddleware.middleware);

// Les identifiants Prisma sont des cuid : on valide simplement des chaînes.
const roleCreateSchema = z.object({
  body: z.object({
    name: z.string().min(3, 'Nom requis (min 3 caractères)'),
    description: z.string().max(500).optional(),
    permissions: z.array(z.string()).optional(),
  }),
});

const roleUpdateSchema = z.object({
  body: z.object({
    name: z.string().min(3).optional(),
    description: z.string().max(500).optional(),
    permissions: z.array(z.string()).optional(),
  }),
});

const assignRoleSchema = z.object({
  body: z.object({
    userId: z.string(),
    adminRoleId: z.string(),
    expiresAt: z.string().datetime().optional(),
  }),
});

router.get('/roles', authorize('admins.read'), RbacController.getRoles);
router.get('/roles/:id', authorize('admins.read'), RbacController.getRole);
router.post('/roles', authorize('admins.create'), validate(roleCreateSchema), RbacController.createRole);
// Modifier ou supprimer un rôle touche aux permissions : action critique
router.put('/roles/:id', authorize('admins.update'), requireReauth, validate(roleUpdateSchema), RbacController.updateRole);
router.delete('/roles/:id', authorize('admins.delete'), requireReauth, RbacController.deleteRole);

router.get('/users/:id/roles', authorize('admins.read'), RbacController.getUserRoles);
router.post('/users/roles', authorize('admins.assign'), validate(assignRoleSchema), requireReauth, RbacController.assignRole);
router.post('/users/roles/remove', authorize('admins.assign'), validate(assignRoleSchema), RbacController.removeRole);

router.get('/audit-logs', authorize('logs.read'), RbacController.getAuditLogs);
router.get('/stats', authorize('admins.read'), RbacController.getStats);
router.get('/permissions', authorize('admins.read'), RbacController.getPermissions);

module.exports = router;
