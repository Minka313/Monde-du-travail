const settingsService = require('../services/settingsService');
const AuditService = require('../services/auditService');

class SettingsController {
  static async getAll(req, res, next) {
    try {
      const settings = await settingsService.getAll();
      res.json({ success: true, data: settings });
    } catch (error) {
      next(error);
    }
  }

  static async updateSetting(req, res, next) {
    try {
      const { value } = req.body;
      const setting = await settingsService.updateSetting(req.params.key, value);

      await AuditService.log({
        userId: req.user.id,
        action: 'settings.update',
        module: 'settings',
        resource: 'Setting',
        resourceId: setting.key,
        ipAddress: req.ip,
        userAgent: req.get('user-agent'),
        result: setting.isSensitive ? 'SENSITIVE_UPDATED' : 'SUCCESS',
        metadata: { key: setting.key, sensitive: setting.isSensitive },
      });

      res.json({ success: true, message: 'Paramètre mis à jour', data: setting });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = SettingsController;
