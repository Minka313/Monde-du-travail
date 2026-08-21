const express = require('express');
const router = express.Router();
const settingsController = require('../controllers/settingsController');
const { authenticate, authorize, authorizeAdmin } = require('../middleware/auth');
const AdminApprovalMiddleware = require('../middleware/adminApproval');
const requireReauth = require('../middleware/reauth');
const settingsService = require('../services/settingsService');
const validate = require('../middleware/validate');
const { z } = require('zod');

const settingUpdateSchema = z.object({
  body: z.object({
    value: z.string().max(2000),
  }),
});

// Ré-authentification obligatoire pour les paramètres sensibles
// (mode maintenance, sécurité) — action critique du cahier des charges.
const requireSensitiveReauth = async (req, res, next) => {
  try {
    const setting = await settingsService.getSetting(req.params.key);
    if (setting.isSensitive) {
      return requireReauth(req, res, next);
    }
    next();
  } catch (error) {
    next(error);
  }
};

router.use(authenticate, authorizeAdmin, AdminApprovalMiddleware.middleware);

router.get('/', authorize('settings.manage'), settingsController.getAll);
router.put('/:key', authorize('settings.manage'), requireSensitiveReauth, validate(settingUpdateSchema), settingsController.updateSetting);

module.exports = router;
