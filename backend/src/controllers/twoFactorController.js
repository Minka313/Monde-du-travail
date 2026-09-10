const TwoFactorService = require('../services/twoFactorService');

class TwoFactorController {
  static async getStatus(req, res, next) {
    try {
      const result = await TwoFactorService.getStatus(req.user.id);
      res.json({ success: true, data: result });
    } catch (error) {
      next(error);
    }
  }

  static async setup(req, res, next) {
    try {
      const result = await TwoFactorService.generateSetup(req.user.id);
      res.json({
        success: true,
        message: 'Scannez ce QR code ou saisissez la clé secrète dans votre application d\'authentification',
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  static async verify(req, res, next) {
    try {
      const { code } = req.body;
      const result = await TwoFactorService.verifyAndEnable(req.user.id, code);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }

  static async disable(req, res, next) {
    try {
      const { password } = req.body;
      const result = await TwoFactorService.disable(req.user.id, password);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = TwoFactorController;
