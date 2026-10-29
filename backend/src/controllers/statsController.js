const { getPlatformCounts } = require('../services/platformMetrics');

// Cache mémoire court côté serveur pour l'API publique (TTL 60s)
let cachedPublicStats = null;
let cachedPublicStatsTime = 0;
const PUBLIC_STATS_CACHE_TTL_MS = 60000;

/**
 * Contrôleur des statistiques publiques de la plateforme.
 * Calcule et expose exclusivement des métriques réelles et vérifiées
 * issues de la base de données PostgreSQL.
 */
class StatsController {
  static invalidateCache() {
    cachedPublicStats = null;
    cachedPublicStatsTime = 0;
  }

  static async getPublicStats(req, res, next) {
    try {
      const now = Date.now();
      if (cachedPublicStats && (now - cachedPublicStatsTime < PUBLIC_STATS_CACHE_TTL_MS)) {
        res.setHeader('Cache-Control', 'public, max-age=60, s-maxage=60');
        return res.json({ success: true, data: cachedPublicStats });
      }

      const c = await getPlatformCounts();
      const data = {
        formations: c.formations,
        events: c.events,
        totalTraining: c.trainings,
        jobs: c.jobs,
        articles: c.articles,
        totalOrientationGuides: c.guides,
        members: c.members,
        // Communauté : adhérents + comptes gratuits (toutes les personnes inscrites et actives)
        community: c.members + c.visitorAccounts,
        mentors: c.mentors,
        topics: c.topics,
        replies: c.replies,
        totalInteractions: c.interactions,
        updatedAt: new Date().toISOString(),
      };

      // Mise en mémoire cache serveur
      cachedPublicStats = data;
      cachedPublicStatsTime = now;

      // Cache HTTP public court (60 secondes) pour optimiser les performances
      res.setHeader('Cache-Control', 'public, max-age=60, s-maxage=60');
      return res.json({ success: true, data });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = StatsController;
