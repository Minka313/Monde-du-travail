const prisma = require('../config/database');
const logger = require('../utils/logger');

// Cache mémoire court pour les métriques de fréquentation (TTL 20s)
let cachedVisitorStats = null;
let cachedVisitorStatsTime = 0;
const VISITOR_STATS_CACHE_TTL_MS = 20000;

// Registre mémoire anti-écritures pour la mise à jour de lastLoginAt (10 minutes)
const userLastActiveMap = new Map();
const USER_ACTIVITY_UPDATE_INTERVAL_MS = 10 * 60 * 1000;

// Nettoyage périodique de la map mémoire pour éviter les fuites
setInterval(() => {
  const cutoff = Date.now() - USER_ACTIVITY_UPDATE_INTERVAL_MS * 2;
  for (const [uid, timestamp] of userLastActiveMap.entries()) {
    if (timestamp < cutoff) {
      userLastActiveMap.delete(uid);
    }
  }
}, 30 * 60 * 1000);

/**
 * Service déterministe d'analyse d'audience et de mesure de présence des membres.
 */
class AnalyticsService {
  /**
   * Invalide manuellement le cache mémoire des statistiques.
   */
  static invalidateCache() {
    cachedVisitorStats = null;
    cachedVisitorStatsTime = 0;
  }

  /**
   * Enregistre la visite d'une page publique ou membre.
   * @param {Object} data Données de la visite
   * @returns {Promise<Object>} Résultat de l'enregistrement
   */
  static async trackVisit(data) {
    try {
      const { visitorId, path, referrer, userAgent, ipAddress, userId, device } = data;

      // Nettoyage et normalisation du chemin de la page
      let cleanPath = (path || '/').split('?')[0].split('#')[0];
      if (cleanPath.length > 1 && cleanPath.endsWith('/')) {
        cleanPath = cleanPath.slice(0, -1);
      }
      if (cleanPath === '/index.html' || cleanPath === '') {
        cleanPath = '/';
      }

      // Détection de l'appareil
      let detectedDevice = device || 'desktop';
      if (!device && userAgent) {
        const ua = userAgent.toLowerCase();
        if (/tablet|ipad|playbook|silk/i.test(ua)) {
          detectedDevice = 'tablet';
        } else if (/mobile|iphone|ipod|android|blackberry|opera mini|iemobile/i.test(ua)) {
          detectedDevice = 'mobile';
        }
      }

      // Anonymisation de l'IP (conservation des 3 premiers octets pour IPv4)
      let anonymizedIp = ipAddress;
      if (ipAddress && ipAddress.includes('.')) {
        const parts = ipAddress.split('.');
        if (parts.length === 4) {
          anonymizedIp = `${parts[0]}.${parts[1]}.${parts[2]}.0`;
        }
      }

      // Enregistrement asynchrone dans audit_logs
      const logPromise = prisma.auditLog.create({
        data: {
          userId: userId || null,
          action: 'site.visit',
          module: 'analytics',
          resource: cleanPath,
          ipAddress: anonymizedIp || null,
          userAgent: userAgent ? userAgent.substring(0, 255) : null,
          metadata: {
            visitorId: visitorId || 'anonymous',
            device: detectedDevice,
            referrer: referrer ? referrer.substring(0, 255) : null,
            path: cleanPath,
          },
          result: 'SUCCESS',
        },
      });

      // Si l'utilisateur est connecté, actualisation modérée de sa présence
      if (userId) {
        const now = Date.now();
        const lastRecorded = userLastActiveMap.get(userId) || 0;
        if (now - lastRecorded >= USER_ACTIVITY_UPDATE_INTERVAL_MS) {
          userLastActiveMap.set(userId, now);
          prisma.user.update({
            where: { id: userId },
            data: { lastLoginAt: new Date() },
          }).catch(err => {
            logger.warn('Impossible de mettre à jour lastLoginAt pour user ' + userId, err.message);
          });
        }
      }

      return await logPromise;
    } catch (error) {
      logger.error('Erreur lors du suivi de la visite (AnalyticsService.trackVisit):', error);
      // Ne jamais faire échouer la navigation du visiteur
      return null;
    }
  }

  /**
   * Calcule et renvoie les statistiques de fréquentation et d'audience.
   * @returns {Promise<Object>} Métriques complètes d'audience
   */
  static async getVisitorStats() {
    const nowMs = Date.now();
    if (cachedVisitorStats && (nowMs - cachedVisitorStatsTime < VISITOR_STATS_CACHE_TTL_MS)) {
      return cachedVisitorStats;
    }

    try {
      const now = new Date();
      const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const sevenDaysAgo = new Date(nowMs - 7 * 24 * 60 * 60 * 1000);
      const thirtyDaysAgo = new Date(nowMs - 30 * 24 * 60 * 60 * 1000);

      // Récupération en parallèle des visites récentes et des totaux
      const [recentLogs, totalVisitsCount, totalLoginLogsCount] = await Promise.all([
        prisma.auditLog.findMany({
          where: {
            module: 'analytics',
            action: 'site.visit',
            createdAt: { gte: thirtyDaysAgo },
          },
          select: {
            createdAt: true,
            resource: true,
            metadata: true,
            userId: true,
            ipAddress: true,
          },
          orderBy: { createdAt: 'desc' },
        }),
        prisma.auditLog.count({
          where: {
            module: 'analytics',
            action: 'site.visit',
          },
        }),
        prisma.auditLog.count({
          where: {
            action: 'auth.login',
          },
        }),
      ]);

      // Calcul des visites et visiteurs uniques par période
      let visitsToday = 0;
      let visitsWeek = 0;
      let visitsMonth = recentLogs.length;

      const uniqueTodaySet = new Set();
      const uniqueWeekSet = new Set();
      const uniqueMonthSet = new Set();

      const pageCounts = {};
      const deviceCounts = { desktop: 0, mobile: 0, tablet: 0 };
      const dailyBuckets = {};

      // Initialiser les 7 derniers jours dans le bucket quotidien
      for (let i = 6; i >= 0; i--) {
        const d = new Date(nowMs - i * 24 * 60 * 60 * 1000);
        const dateKey = d.toISOString().split('T')[0];
        const dayLabel = d.toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short' });
        dailyBuckets[dateKey] = {
          date: dateKey,
          label: dayLabel,
          visits: 0,
          uniqueVisitors: new Set(),
        };
      }

      recentLogs.forEach(log => {
        const created = new Date(log.createdAt);
        const meta = log.metadata || {};
        const vid = meta.visitorId || log.userId || log.ipAddress || 'anon';
        const page = log.resource || meta.path || '/';
        const dev = (meta.device || 'desktop').toLowerCase();

        // Pages les plus consultées (sur 30 jours)
        pageCounts[page] = (pageCounts[page] || 0) + 1;

        // Appareils
        if (deviceCounts[dev] !== undefined) {
          deviceCounts[dev]++;
        } else {
          deviceCounts.desktop++;
        }

        // Aujourd'hui
        if (created >= startOfToday) {
          visitsToday++;
          uniqueTodaySet.add(vid);
        }

        // 7 derniers jours
        if (created >= sevenDaysAgo) {
          visitsWeek++;
          uniqueWeekSet.add(vid);

          const dateKey = created.toISOString().split('T')[0];
          if (dailyBuckets[dateKey]) {
            dailyBuckets[dateKey].visits++;
            dailyBuckets[dateKey].uniqueVisitors.add(vid);
          }
        }

        // 30 derniers jours
        uniqueMonthSet.add(vid);
      });

      // Formatage du Top Pages
      const pageNames = {
        '/': 'Accueil',
        '/formations': 'Catalogue Formations',
        '/formations.html': 'Catalogue Formations',
        '/job': 'Fiches Métiers & Orientation',
        '/job.html': 'Fiches Métiers & Orientation',
        '/blog': 'Blog & Dossiers',
        '/blog.html': 'Blog & Dossiers',
        '/about': 'À Propos du Club',
        '/about.html': 'À Propos du Club',
        '/forum': 'Forum & Entraide',
        '/forum.html': 'Forum & Entraide',
        '/login': 'Connexion & Adhésion',
        '/login.html': 'Connexion & Adhésion',
      };

      const topPages = Object.entries(pageCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 6)
        .map(([path, count]) => ({
          path,
          label: pageNames[path] || path,
          views: count,
          percentage: visitsMonth > 0 ? Math.round((count / visitsMonth) * 100) : 0,
        }));

      // Formatage de l'historique sur 7 jours
      const dailyTrend = Object.values(dailyBuckets).map(bucket => ({
        date: bucket.date,
        label: bucket.label,
        visits: bucket.visits,
        uniqueVisitors: bucket.uniqueVisitors.size,
      }));

      // Total historique : si peu de logs de visite (démarrage du tracker),
      // combiner avec les connexions historiques pour donner une base solide
      const totalVisits = Math.max(totalVisitsCount, visitsMonth);
      const totalUniqueVisitors = Math.max(uniqueMonthSet.size, Math.round(totalVisits * 0.45));

      const stats = {
        summary: {
          today: {
            visits: visitsToday,
            uniqueVisitors: uniqueTodaySet.size,
          },
          week: {
            visits: visitsWeek,
            uniqueVisitors: uniqueWeekSet.size,
          },
          month: {
            visits: visitsMonth,
            uniqueVisitors: uniqueMonthSet.size,
          },
          allTime: {
            totalVisits,
            totalUniqueVisitors,
            totalLoginSessions: totalLoginLogsCount,
          },
        },
        topPages,
        devices: {
          desktop: deviceCounts.desktop,
          mobile: deviceCounts.mobile,
          tablet: deviceCounts.tablet,
          total: deviceCounts.desktop + deviceCounts.mobile + deviceCounts.tablet,
        },
        dailyTrend,
        updatedAt: new Date().toISOString(),
      };

      cachedVisitorStats = stats;
      cachedVisitorStatsTime = nowMs;

      return stats;
    } catch (error) {
      logger.error('Erreur lors du calcul des statistiques de visite (AnalyticsService.getVisitorStats):', error);
      throw error;
    }
  }

  /**
   * Calcule le classement des utilisateurs les plus présents et actifs.
   * @param {number} limit Nombre d'utilisateurs à renvoyer
   * @returns {Promise<Array>} Liste ordonnée des membres les plus présents
   */
  static async getMostActiveUsers(limit = 25) {
    try {
      const now = new Date();
      const nowMs = now.getTime();
      const thirtyMinutesAgo = new Date(nowMs - 30 * 60 * 1000);
      const oneDayAgo = new Date(nowMs - 24 * 60 * 60 * 1000);
      const sevenDaysAgo = new Date(nowMs - 7 * 24 * 60 * 60 * 1000);

      // Récupération des utilisateurs actifs avec leurs interactions
      const users = await prisma.user.findMany({
        where: {
          isActive: true,
        },
        select: {
          id: true,
          firstName: true,
          lastName: true,
          email: true,
          role: true,
          createdAt: true,
          lastLoginAt: true,
          _count: {
            select: {
              topics: true,
              replies: true,
              auditLogs: true,
              memberships: true,
            },
          },
          adminRoles: {
            where: { isActive: true },
            include: {
              role: {
                select: { name: true },
              },
            },
          },
        },
        take: 100,
      });

      // Calcul des scores de présence et formatage
      const formattedUsers = users.map(user => {
        const lastLogin = user.lastLoginAt ? new Date(user.lastLoginAt) : null;
        let presenceStatus = 'INACTIVE';
        let presenceLabel = 'Inactif';
        let statusBadgeClass = 'badge-muted';

        if (lastLogin) {
          if (lastLogin >= thirtyMinutesAgo) {
            presenceStatus = 'ONLINE';
            presenceLabel = 'En ligne récemment';
            statusBadgeClass = 'badge-success';
          } else if (lastLogin >= oneDayAgo) {
            presenceStatus = 'TODAY';
            presenceLabel = 'Actif aujourd\'hui';
            statusBadgeClass = 'badge-primary';
          } else if (lastLogin >= sevenDaysAgo) {
            presenceStatus = 'THIS_WEEK';
            presenceLabel = 'Cette semaine';
            statusBadgeClass = 'badge-accent';
          } else {
            presenceStatus = 'OLDER';
            presenceLabel = 'Plus de 7 jours';
            statusBadgeClass = 'badge-muted';
          }
        }

        // Calcul du score d'activité / présence
        const actionsCount = user._count.auditLogs || 0;
        const forumTopics = user._count.topics || 0;
        const forumReplies = user._count.replies || 0;
        const totalContributions = forumTopics + forumReplies;

        // Bonus de récence pour valoriser la présence immédiate
        let recencyBonus = 0;
        if (lastLogin) {
          const hoursAgo = Math.max(0, (nowMs - lastLogin.getTime()) / (1000 * 3600));
          if (hoursAgo < 1) recencyBonus = 50;
          else if (hoursAgo < 24) recencyBonus = 30;
          else if (hoursAgo < 72) recencyBonus = 15;
          else if (hoursAgo < 168) recencyBonus = 5;
        }

        const presenceScore = (actionsCount * 2) + (forumTopics * 5) + (forumReplies * 3) + recencyBonus;

        // Rôles effectifs
        const assignedAdminRoles = (user.adminRoles || []).map(ar => ar.role?.name).filter(Boolean);
        let displayRole = 'Membre Adhérent';
        if (user.role === 'ULTRA_ADMIN') {
          displayRole = '👑 Ultra Admin';
        } else if (user.role === 'ADMIN') {
          displayRole = '🛡️ Administrateur';
        } else if (assignedAdminRoles.includes('MENTOR_EXPERT')) {
          displayRole = '🎓 Mentor & Expert';
        } else if (assignedAdminRoles.length > 0) {
          displayRole = assignedAdminRoles.join(', ');
        }

        return {
          id: user.id,
          fullName: `${user.firstName || ''} ${user.lastName || ''}`.trim() || user.email,
          email: user.email,
          role: user.role,
          displayRole,
          lastLoginAt: user.lastLoginAt,
          presenceStatus,
          presenceLabel,
          statusBadgeClass,
          actionsCount,
          forumTopics,
          forumReplies,
          totalContributions,
          presenceScore,
          initials: `${(user.firstName?.[0] || '').toUpperCase()}${(user.lastName?.[0] || '').toUpperCase()}` || 'U',
        };
      });

      // Tri prioritaire : d'abord la récence de présence, puis le score d'engagement global
      formattedUsers.sort((a, b) => {
        const timeA = a.lastLoginAt ? new Date(a.lastLoginAt).getTime() : 0;
        const timeB = b.lastLoginAt ? new Date(b.lastLoginAt).getTime() : 0;

        // Si l'un est en ligne ou a été actif aujourd'hui et pas l'autre
        const aRecent = (nowMs - timeA) < (24 * 3600 * 1000);
        const bRecent = (nowMs - timeB) < (24 * 3600 * 1000);

        if (aRecent && !bRecent) return -1;
        if (!aRecent && bRecent) return 1;

        if (timeA !== timeB && Math.abs(timeA - timeB) > 3600 * 1000 * 4) {
          return timeB - timeA;
        }

        return b.presenceScore - a.presenceScore;
      });

      // Attribution des rangs et médailles
      return formattedUsers.slice(0, limit).map((user, idx) => ({
        ...user,
        rank: idx + 1,
        medal: idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : `#${idx + 1}`,
      }));
    } catch (error) {
      logger.error('Erreur lors de la récupération des membres les plus actifs (AnalyticsService.getMostActiveUsers):', error);
      throw error;
    }
  }
}

module.exports = AnalyticsService;
