const RbacService = require('../services/rbacService');
const prisma = require('../config/database');

// Cache mémoire court pour les métriques d'ensemble du dashboard (TTL 25s)
let statsCache = null;
let statsCacheTime = 0;
const STATS_CACHE_TTL_MS = 25000;

function generateAlertsFromMetrics(metrics) {
  const alerts = [];

  if (metrics.isMaintenance) {
    alerts.push({
      id: 'maintenance-active',
      type: 'danger',
      title: 'Mode Maintenance Actif',
      message: 'La plateforme est actuellement inaccessible au public.',
      targetModule: 'settings',
    });
  }

  if (metrics.pendingMemberships > 0) {
    alerts.push({
      id: 'pending-memberships',
      type: 'warning',
      title: 'Adhésions en attente',
      message: `${metrics.pendingMemberships} demande(s) d'adhésion en attente d'approbation`,
      targetModule: 'approvals',
    });
  }

  if (metrics.pendingAdmins > 0) {
    alerts.push({
      id: 'pending-admins',
      type: 'warning',
      title: 'Rôles Admin en attente',
      message: `${metrics.pendingAdmins} demande(s) d'attribution de rôle administrateur`,
      targetModule: 'admins',
    });
  }

  if (metrics.pendingApprovals > 0) {
    alerts.push({
      id: 'pending-approvals',
      type: 'warning',
      title: 'Workflows de validation',
      message: `${metrics.pendingApprovals} élément(s) en attente de validation`,
      targetModule: 'approvals',
    });
  }

  if (metrics.draftPosts > 0) {
    alerts.push({
      id: 'draft-posts',
      type: 'info',
      title: 'Brouillons d\'articles',
      message: `${metrics.draftPosts} article(s) en brouillon prêt(s) pour révision`,
      targetModule: 'blog',
    });
  }

  if (metrics.draftFormations > 0) {
    alerts.push({
      id: 'draft-formations',
      type: 'info',
      title: 'Formations en préparation',
      message: `${metrics.draftFormations} formation(s) en brouillon non publiée(s)`,
      targetModule: 'formations',
    });
  }

  if (metrics.draftJobs > 0) {
    alerts.push({
      id: 'draft-jobs',
      type: 'info',
      title: 'Fiches Métiers en cours',
      message: `${metrics.draftJobs} fiche(s) métier en rédaction`,
      targetModule: 'metiers',
    });
  }

  return alerts;
}

class SuperDashboardController {
  static invalidateStatsCache() {
    statsCache = null;
    statsCacheTime = 0;
  }

  static async getGlobalStats(req, res, next) {
    try {
      const now = Date.now();
      if (statsCache && (now - statsCacheTime < STATS_CACHE_TTL_MS)) {
        return res.json({ success: true, data: statsCache });
      }

      // Exécution groupée en un SEUL aller-retour parallèle de toutes les métriques
      const [
        totalUsers,
        activeUsers,
        totalAdmins,
        totalPosts,
        totalTopics,
        totalEvents,
        totalJobs,
        totalFormations,
        totalMentors,
        publishedPosts,
        draftPosts,
        pendingMemberships,
        publishedFormations,
        draftFormations,
        publishedJobs,
        draftJobs,
        pendingAdmins,
        pendingApprovals,
        maintenanceSetting,
      ] = await Promise.all([
        prisma.user.count(),
        prisma.user.count({ where: { isActive: true } }),
        prisma.user.count({ where: { role: { in: ['ADMIN', 'ULTRA_ADMIN'] } } }),
        prisma.post.count(),
        prisma.topic.count(),
        prisma.event.count(),
        prisma.job.count(),
        prisma.formation.count(),
        prisma.userAdminRole.count({
          where: {
            role: { name: 'MENTOR_EXPERT' },
            status: 'APPROVED',
            isActive: true,
          },
        }),
        prisma.post.count({ where: { status: 'PUBLISHED' } }),
        prisma.post.count({ where: { status: 'DRAFT' } }),
        prisma.membershipRequest.count({ where: { status: 'PENDING' } }),
        prisma.formation.count({ where: { status: 'PUBLISHED' } }),
        prisma.formation.count({ where: { status: 'DRAFT' } }),
        prisma.job.count({ where: { status: 'PUBLISHED' } }),
        prisma.job.count({ where: { status: 'DRAFT' } }),
        prisma.userAdminRole.count({ where: { status: 'PENDING' } }),
        prisma.approvalWorkflow.count({ where: { status: 'PENDING' } }),
        prisma.setting.findUnique({ where: { key: 'platform.maintenanceMode' } }),
      ]);

      const isMaintenance = maintenanceSetting?.value === 'true';

      const data = {
        totalUsers,
        activeUsers,
        totalAdmins,
        totalMentors,
        totalPosts,
        totalTopics,
        totalEvents,
        totalJobs,
        totalFormations,
        publishedPosts,
        draftPosts,
        pendingMemberships,
        publishedFormations,
        draftFormations,
        publishedJobs,
        draftJobs,
        pendingAdmins,
        pendingApprovals,
        isMaintenance,
      };

      // Génération intégrée des alertes pour éviter un second appel réseau séparé
      data.alerts = generateAlertsFromMetrics(data);

      statsCache = data;
      statsCacheTime = now;

      res.json({ success: true, data });
    } catch (error) {
      next(error);
    }
  }

  static async getRecentActivities(req, res, next) {
    try {
      const limit = Math.min(50, Math.max(1, parseInt(req.query.limit) || 10));
      const logs = await prisma.auditLog.findMany({
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          user: {
            select: {
              id: true,
              email: true,
              firstName: true,
              lastName: true,
              role: true,
            },
          },
        },
      });

      res.json({ success: true, data: logs });
    } catch (error) {
      next(error);
    }
  }

  static async getAlerts(req, res, next) {
    try {
      // Réutiliser le cache mémoire s'il est frais pour répondre en 0ms
      const now = Date.now();
      if (statsCache && (now - statsCacheTime < STATS_CACHE_TTL_MS) && statsCache.alerts) {
        return res.json({ success: true, data: statsCache.alerts });
      }

      // Si pas encore en cache, calculer les stats globales qui génèrent les alertes
      const [
        pendingMemberships,
        draftPosts,
        draftFormations,
        draftJobs,
        pendingAdmins,
        pendingApprovals,
        maintenanceSetting,
      ] = await Promise.all([
        prisma.membershipRequest.count({ where: { status: 'PENDING' } }),
        prisma.post.count({ where: { status: 'DRAFT' } }),
        prisma.formation.count({ where: { status: 'DRAFT' } }),
        prisma.job.count({ where: { status: 'DRAFT' } }),
        prisma.userAdminRole.count({ where: { status: 'PENDING' } }),
        prisma.approvalWorkflow.count({ where: { status: 'PENDING' } }),
        prisma.setting.findUnique({ where: { key: 'platform.maintenanceMode' } }),
      ]);

      const alerts = generateAlertsFromMetrics({
        isMaintenance: maintenanceSetting?.value === 'true',
        pendingMemberships,
        pendingAdmins,
        pendingApprovals,
        draftPosts,
        draftFormations,
        draftJobs,
      });

      res.json({ success: true, data: alerts });
    } catch (error) {
      next(error);
    }
  }

  static async getAdmins(req, res, next) {
    try {
      const admins = await prisma.user.findMany({
        where: { role: { in: ['ADMIN', 'ULTRA_ADMIN'] } },
        select: {
          id: true,
          email: true,
          firstName: true,
          lastName: true,
          role: true,
          isActive: true,
          isVerified: true,
          createdAt: true,
          adminRoles: {
            include: {
              role: {
                include: {
                  permissions: {
                    include: {
                      permission: true,
                    },
                  },
                },
              },
            },
          },
        },
        orderBy: { createdAt: 'desc' },
      });

      const enriched = admins.map(admin => {
        const permissions = new Set();
        admin.adminRoles.forEach(ur => {
          ur.role.permissions.forEach(rp => permissions.add(rp.permission.code));
        });

        return {
          ...admin,
          permissions: Array.from(permissions),
        };
      });

      res.json({ success: true, data: enriched });
    } catch (error) {
      next(error);
    }
  }

  static async suspendAdmin(req, res, next) {
    try {
      const admin = await prisma.user.findUnique({
        where: { id: req.params.id },
      });

      if (!admin) {
        return next(new NotFoundError('Administrateur non trouvé'));
      }

      if (admin.role === 'ULTRA_ADMIN' && admin.id !== req.user.id) {
        return next(new ForbiddenError('Impossible de suspendre un autre Ultra Admin'));
      }

      const updated = await prisma.user.update({
        where: { id: req.params.id },
        data: { isActive: false },
        select: {
          id: true,
          email: true,
          firstName: true,
          lastName: true,
          role: true,
          isActive: true,
        },
      });

      await RbacService.createAuditLog({
        userId: req.user.id,
        action: 'admin.suspend',
        module: 'admins',
        resource: 'user',
        resourceId: req.params.id,
        result: 'success',
      });

      res.json({ success: true, message: 'Administrateur suspendu', data: updated });
    } catch (error) {
      next(error);
    }
  }

  static async reactivateAdmin(req, res, next) {
    try {
      const admin = await prisma.user.findUnique({
        where: { id: req.params.id },
      });

      if (!admin) {
        return next(new NotFoundError('Administrateur non trouvé'));
      }

      const updated = await prisma.user.update({
        where: { id: req.params.id },
        data: { isActive: true },
        select: {
          id: true,
          email: true,
          firstName: true,
          lastName: true,
          role: true,
          isActive: true,
        },
      });

      await RbacService.createAuditLog({
        userId: req.user.id,
        action: 'admin.reactivate',
        module: 'admins',
        resource: 'user',
        resourceId: req.params.id,
        result: 'success',
      });

      res.json({ success: true, message: 'Administrateur réactivé', data: updated });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = SuperDashboardController;
