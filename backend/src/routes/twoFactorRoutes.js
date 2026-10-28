const express = require('express');
const router = express.Router();
const TwoFactorController = require('../controllers/twoFactorController');
const { authenticate } = require('../middleware/auth');

router.use(authenticate);

router.get('/status', TwoFactorController.getStatus);
router.post('/setup', TwoFactorController.setup);
router.post('/verify', TwoFactorController.verify);
router.post('/setup-email', TwoFactorController.setupEmail);
router.post('/verify-email', TwoFactorController.verifyEmail);
router.post('/disable', TwoFactorController.disable);

module.exports = router;
