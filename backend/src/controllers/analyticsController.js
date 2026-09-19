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

  /**
   * Ingestion asynchrone et non-bloquante d'événements d'impact (vues métiers, clics formations, sondages).
   * Accepte un objet unique ou un tableau d'événements (batch).
   */
  static async trackEvents(req, res) {
    try {
      const payload = req.body || {};
      const userId = req.user?.id || null;

      if (Array.isArray(payload.events)) {
        // Enregistrement par lot sans bloquer
        AnalyticsService.trackImpactEvents(payload.events, userId).catch(() => {});
      } else {
        // Enregistrement individuel
        const eventData = {
          ...payload,
          userId: payload.userId || userId,
        };
        AnalyticsService.trackImpactEvent(eventData).catch(() => {});
      }

      return res.status(200).json({ success: true });
    } catch (_) {
      // Tolérance totale aux pannes pour le tracking
      return res.status(200).json({ success: true });
    }
  }

  /**
   * Associe un profil progressif au sessionId du visiteur.
   */
  static async setProfile(req, res) {
    try {
      const { sessionId, profile } = req.body || {};
      if (!sessionId || !profile) {
        return res.status(400).json({ success: false, message: 'sessionId et profile sont requis.' });
      }

      const result = await AnalyticsService.saveUserProfile(sessionId, profile);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(200).json({ success: false });
    }
  }

  /**
   * Métriques d'impact d'orientation consolidées pour le tableau de bord administrateur.
   */
  static async getImpactStats(req, res, next) {
    try {
      const stats = await AnalyticsService.getImpactStats();
      return res.json({ success: true, data: stats });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AnalyticsController;
