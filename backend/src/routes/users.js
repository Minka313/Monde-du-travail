const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticate, authorize, authorizeAdmin } = require('../middleware/auth');
const AdminApprovalMiddleware = require('../middleware/adminApproval');
const requireReauth = require('../middleware/reauth');
const validate = require('../middleware/validate');
const { z } = require('zod');

// Toutes les routes utilisateur nécessitent une authentification admin + approbation
router.use(authenticate, authorizeAdmin, AdminApprovalMiddleware.middleware);

// Liste blanche stricte : role/isActive/isVerified passent par des endpoints dédiés
const userUpdateSchema = z.object({
  body: z.object({
    firstName: z.string().min(1).max(100).optional(),
    lastName: z.string().min(1).max(100).optional(),
  }).refine(data => Object.keys(data).length > 0, {
    message: 'Au moins un champ à mettre à jour est requis',
  }),
});

router.get('/', authorize('users.read'), userController.getAllUsers);
router.get('/:id', authorize('users.read'), userController.getUserById);
router.put('/:id', authorize('users.update'), validate(userUpdateSchema), userController.updateUser);

// Gestion du compte
router.post('/:id/activate', authorize('users.suspend'), userController.activateUser);
router.post('/:id/deactivate', authorize('users.suspend'), userController.deactivateUser);
router.post('/:id/verify', authorize('users.verify'), userController.verifyUser);

// Suppression définitive : action critique (double confirmation par mot de passe)
router.delete('/:id', authorize('users.delete'), requireReauth, userController.deleteUser);

module.exports = router;
