const prisma = require('../config/database');
const logger = require('../utils/logger');

// Cache mémoire court pour les métriques de fréquentation (TTL 20s)
let cachedVisitorStats = null;
let cachedVisitorStatsTime = 0;
const VISITOR_STATS_CACHE_TTL_MS = 20000;

// Registre mémoire anti-écritures pour la mise à jour de lastLoginAt (10 minutes)
const userLastActiveMap = new Map();
const USER_ACTIVITY_UPDATE_INTERVAL_MS = 10 * 60 * 1000;

// Cache mémoire pour l'association progressive sessionId -> profil utilisateur
const sessionProfileCache = new Map();


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

      const log = await logPromise;
      this.invalidateCache();
      return log;
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

      // Récupération des visites récentes et du total historique.
      // Les identifiants visiteurs sont conservés pour produire un total unique réel.
      const [recentLogs, totalVisitLogs, totalLoginLogsCount] = await Promise.all([
        prisma.auditLog.findMany({
          where: {
            module: 'analytics',
            action: 'site.visit',
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
      let visitsMonth = 0;

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

        // Pages, appareils et visiteurs de la fenêtre de 30 jours.
        if (created >= thirtyDaysAgo) {
          visitsMonth++;
          pageCounts[page] = (pageCounts[page] || 0) + 1;

          if (deviceCounts[dev] !== undefined) {
            deviceCounts[dev]++;
          } else {
            deviceCounts.desktop++;
          }

          uniqueMonthSet.add(vid);
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
      const totalVisits = totalVisitLogs.length;
      const totalUniqueVisitors = new Set(totalVisitLogs.map(log => {
        const meta = log.metadata || {};
        return meta.visitorId || log.userId || log.ipAddress || 'anon';
      })).size;

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

  /**
   * Enregistre un événement d'impact d'orientation de façon asynchrone et déterministe.
   * @param {Object} data Données de l'événement
   * @returns {Promise<Object>} Résultat de l'insertion
   */
  static async trackImpactEvent(data) {
    try {
      const {
        sessionId,
        session_id,
        userId,
        user_id,
        userProfile,
        user_profile,
        eventType,
        event_type,
        entityType,
        entity_type,
        entityId,
        entity_id,
        metadata,
      } = data || {};

      const sid = String(sessionId || session_id || 'anonymous_sid').substring(0, 128);
      const evType = String(eventType || event_type || 'custom_event').substring(0, 100);
      const entType = entityType || entity_type ? String(entityType || entity_type).substring(0, 50) : null;
      const entId = entityId || entity_id ? String(entityId || entity_id).substring(0, 255) : null;
      const uid = userId || user_id || null;

      // Résolution du profil utilisateur (fourni ou issu du cache de session)
      let resolvedProfile = userProfile || user_profile || sessionProfileCache.get(sid) || null;
      if (resolvedProfile) {
        resolvedProfile = String(resolvedProfile).substring(0, 50);
        sessionProfileCache.set(sid, resolvedProfile);
      }

      const event = await prisma.analyticsEvent.create({
        data: {
          sessionId: sid,
          userId: uid,
          userProfile: resolvedProfile,
          eventType: evType,
          entityType: entType,
          entityId: entId,
          metadata: metadata && typeof metadata === 'object' ? metadata : {},
        },
      });

      return event;
    } catch (error) {
      logger.warn('Erreur non-bloquante lors du suivi de l\'événement d\'impact (AnalyticsService.trackImpactEvent):', error.message);
      return { success: false, error: error.message };
    }
  }

  /**
   * Enregistre un lot d'événements d'orientation en batch.
   * @param {Array} events Liste des événements
   * @param {String|null} defaultUserId ID de l'utilisateur si authentifié
   */
  static async trackImpactEvents(events, defaultUserId = null) {
    if (!Array.isArray(events) || events.length === 0) return { count: 0 };
    
    try {
      const records = events.map(evt => {
        const sid = String(evt.sessionId || evt.session_id || 'anonymous_sid').substring(0, 128);
        let prof = evt.userProfile || evt.user_profile || sessionProfileCache.get(sid) || null;
        if (prof) {
          prof = String(prof).substring(0, 50);
          sessionProfileCache.set(sid, prof);
        }

        return {
          sessionId: sid,
          userId: evt.userId || evt.user_id || defaultUserId || null,
          userProfile: prof,
          eventType: String(evt.eventType || evt.event_type || 'custom_event').substring(0, 100),
          entityType: evt.entityType || evt.entity_type ? String(evt.entityType || evt.entity_type).substring(0, 50) : null,
          entityId: evt.entityId || evt.entity_id ? String(evt.entityId || evt.entity_id).substring(0, 255) : null,
          metadata: evt.metadata && typeof evt.metadata === 'object' ? evt.metadata : {},
        };
      });

      const result = await prisma.analyticsEvent.createMany({
        data: records,
        skipDuplicates: true,
      });

      return { count: result.count };
    } catch (error) {
      logger.warn('Erreur non-bloquante lors de l\'ingestion par lots (AnalyticsService.trackImpactEvents):', error.message);
      return { count: 0 };
    }
  }

  /**
   * Associe un profil utilisateur progressif à une session et met à jour rétroactivement
   * les événements récents de cette session pour garantir la continuité analytique.
   * @param {String} sessionId Identifiant anonyme de session
   * @param {String} profile Profil choisi (ex: 'Lycéen', 'Étudiant', 'Pro', 'Reconversion')
   */
  static async saveUserProfile(sessionId, profile) {
    if (!sessionId || !profile) return { success: false };

    try {
      const sid = String(sessionId).substring(0, 128);
      const cleanProfile = String(profile).trim().substring(0, 50);

      // 1. Sauvegarde dans le cache mémoire de session
      sessionProfileCache.set(sid, cleanProfile);

      // 2. Rétro-application asynchrone aux événements non profilés de cette session
      await prisma.analyticsEvent.updateMany({
        where: {
          sessionId: sid,
          userProfile: null,
        },
        data: {
          userProfile: cleanProfile,
        },
      });

      // 3. Enregistrement d'un événement explicite de profilage
      await this.trackImpactEvent({
        sessionId: sid,
        eventType: 'progressive_profile_set',
        entityType: 'survey',
        entityId: cleanProfile,
        metadata: { profile: cleanProfile, source: 'progressive_banner' },
      });

      return { success: true, profile: cleanProfile };
    } catch (error) {
      logger.warn('Erreur lors de l\'enregistrement du profil utilisateur (AnalyticsService.saveUserProfile):', error.message);
      return { success: false, error: error.message };
    }
  }

  /**
   * Agrège et calcule les indicateurs clés du véritable impact d'orientation.
   * - Taux de conversion du parcours : Vue Métier -> Clic Formation -> Vue Formation
   * - Répartition des profils utilisateurs réels
   * - Score de satisfaction des micro-sondages et critères plébiscités
   * - Métiers déclencheurs de vocations (top conversions vers les formations)
   */
  static async getImpactStats() {
    try {
      const [
        totalEventsCount,
        eventsGrouped,
        profilesGrouped,
        surveyVotes,
        topConvertedJobsGrouped,
      ] = await Promise.all([
        prisma.analyticsEvent.count(),
        prisma.analyticsEvent.groupBy({
          by: ['eventType'],
          _count: { id: true },
        }),
        prisma.analyticsEvent.findMany({
          where: { userProfile: { not: null } },
          select: { sessionId: true, userProfile: true },
          distinct: ['sessionId', 'userProfile'],
        }),
        prisma.analyticsEvent.findMany({
          where: { eventType: 'survey_vote' },
          select: { metadata: true, entityId: true, entityType: true, createdAt: true },
          orderBy: { createdAt: 'desc' },
          take: 500,
        }),
        prisma.analyticsEvent.groupBy({
          by: ['entityId'],
          where: { eventType: 'job_to_training_click' },
          _count: { id: true },
          orderBy: { _count: { id: 'desc' } },
          take: 10,
        }),
      ]);

      // Calcul des totaux par type d'événement
      const eventCounts = {};
      eventsGrouped.forEach(item => {
        eventCounts[item.eventType] = item._count.id;
      });

      const jobViews = eventCounts['job_view'] || 0;
      const jobToTrainingClicks = eventCounts['job_to_training_click'] || 0;
      const trainingViews = eventCounts['training_view'] || 0;
      const bookmarks = eventCounts['bookmark_click'] || 0;
      const crossRecClicks = eventCounts['cross_recommendation_click'] || 0;

      // Calcul du Funnel de Conversion d'Orientation
      const conversionRate = jobViews > 0 
        ? Math.round((jobToTrainingClicks / jobViews) * 1000) / 10 
        : 0;

      // Analyse des micro-sondages
      let upVotes = 0;
      let neutralVotes = 0;
      let downVotes = 0;
      const feedbackTagsCount = {};

      surveyVotes.forEach(vote => {
        const meta = vote.metadata || {};
        const rating = meta.rating || meta.vote;
        if (rating === 'up' || rating === 'positive' || rating === 1) {
          upVotes++;
        } else if (rating === 'down' || rating === 'negative' || rating === -1) {
          downVotes++;
        } else {
          neutralVotes++;
        }

        if (Array.isArray(meta.tags)) {
          meta.tags.forEach(tag => {
            feedbackTagsCount[tag] = (feedbackTagsCount[tag] || 0) + 1;
          });
        }
      });

      const totalSurveyVotes = upVotes + neutralVotes + downVotes;
      const satisfactionRate = totalSurveyVotes > 0 
        ? Math.round((upVotes / totalSurveyVotes) * 100) 
        : 100;

      // Profils déclarés
      const profilesDistribution = {};
      profilesGrouped.forEach(item => {
        if (item.userProfile) {
          profilesDistribution[item.userProfile] = (profilesDistribution[item.userProfile] || 0) + 1;
        }
      });

      return {
        totalEvents: totalEventsCount,
        funnel: {
          jobViews,
          jobToTrainingClicks,
          trainingViews,
          conversionRatePercent: conversionRate,
          crossRecommendationClicks: crossRecClicks,
          bookmarksCount: bookmarks,
        },
        satisfaction: {
          totalVotes: totalSurveyVotes,
          satisfactionRatePercent: satisfactionRate,
          breakdown: {
            up: upVotes,
            neutral: neutralVotes,
            down: downVotes,
          },
          topTags: Object.entries(feedbackTagsCount)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 8)
            .map(([tag, count]) => ({ tag, count })),
        },
        profilesDistribution,
        topConvertedJobs: topConvertedJobsGrouped.map(j => ({
          jobId: j.entityId,
          clicksToTrainings: j._count.id,
        })),
      };
    } catch (error) {
      logger.error('Erreur lors du calcul des statistiques d\'impact (AnalyticsService.getImpactStats):', error);
      throw error;
    }
  }
}

module.exports = AnalyticsService;

