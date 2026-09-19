const AnalyticsService = require('../services/analyticsService');

/**
 * Contrôleur d'analyse d'audience et de mesure de la présence des membres.
 */
class AnalyticsController {
  /**
   * Endpoint public d'enregistrement d'une visite.
   * Accepte les requêtes anonymes ou avec utilisateur connecté.
   */
  static async track(req, res) {
    try {
      const { visitorId, path, referrer, device } = req.body || {};

      // Détection de l'IP réelle y compris derrière proxy Vercel
      const forwarded = req.headers['x-forwarded-for'];
      const ipAddress = (typeof forwarded === 'string' ? forwarded.split(',')[0].trim() : req.ip) || req.socket?.remoteAddress;
      const userAgent = req.get('user-agent');
      const userId = req.user?.id || null;

      // Exécution sans bloquer le client
      AnalyticsService.trackVisit({
        visitorId,
        path,
        referrer,
        device,
        ipAddress,
        userAgent,
        userId,
      });

      return res.status(200).json({ success: true });
    } catch (_) {
      // Pour une route de tracking, toujours répondre avec succès sans bloquer l'appelant
      return res.status(200).json({ success: true });
    }
  }

  /**
   * Endpoint réservé aux administrateurs pour obtenir les statistiques de fréquentation.
   */
  static async getVisitorOverview(req, res, next) {
    try {
      const stats = await AnalyticsService.getVisitorStats();
      return res.json({ success: true, data: stats });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Endpoint réservé aux administrateurs pour obtenir les membres les plus présents et actifs.
   */
  static async getMostActiveMembers(req, res, next) {
    try {
      const limit = Math.min(100, Math.max(1, parseInt(req.query.limit, 10) || 25));
      const members = await AnalyticsService.getMostActiveUsers(limit);
      return res.json({ success: true, data: members });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AnalyticsController;
