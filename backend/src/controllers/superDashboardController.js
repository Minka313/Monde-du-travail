const RbacService = require('../services/rbacService');
const prisma = require('../config/database');

class SuperDashboardController {
  static async getGlobalStats(req, res, next) {
    try {
      const stats = await RbacService.getStats();

      const [
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

      const data = {
        ...stats,
        publishedPosts,
        draftPosts,
        pendingMemberships,
        publishedFormations,
        draftFormations,
        publishedJobs,
        draftJobs,
        pendingAdmins,
        pendingApprovals,
        isMaintenance: maintenanceSetting?.value === 'true',
      };

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

      const alerts = [];

      if (maintenanceSetting?.value === 'true') {
        alerts.push({
          id: 'maintenance-active',
          type: 'danger',
          title: 'Mode Maintenance Actif',
          message: 'La plateforme est actuellement inaccessible au public.',
          targetModule: 'settings',
        });
      }

      if (pendingMemberships > 0) {
        alerts.push({
          id: 'pending-memberships',
          type: 'warning',
          title: 'Adhésions en attente',
          message: `${pendingMemberships} demande(s) d'adhésion en attente d'approbation`,
          targetModule: 'approvals',
        });
      }

      if (pendingAdmins > 0) {
        alerts.push({
          id: 'pending-admins',
          type: 'warning',
          title: 'Rôles Admin en attente',
          message: `${pendingAdmins} demande(s) d'attribution de rôle administrateur`,
          targetModule: 'admins',
        });
      }

      if (pendingApprovals > 0) {
        alerts.push({
          id: 'pending-approvals',
          type: 'warning',
          title: 'Workflows de validation',
          message: `${pendingApprovals} élément(s) en attente de validation`,
          targetModule: 'approvals',
        });
      }

      if (draftPosts > 0) {
        alerts.push({
          id: 'draft-posts',
          type: 'info',
          title: 'Brouillons d\'articles',
          message: `${draftPosts} article(s) en brouillon prêt(s) pour révision`,
          targetModule: 'blog',
        });
      }

      if (draftFormations > 0) {
        alerts.push({
          id: 'draft-formations',
          type: 'info',
          title: 'Formations en préparation',
          message: `${draftFormations} formation(s) en brouillon non publiée(s)`,
          targetModule: 'formations',
        });
      }

      if (draftJobs > 0) {
        alerts.push({
          id: 'draft-jobs',
          type: 'info',
          title: 'Fiches Métiers en cours',
          message: `${draftJobs} fiche(s) métier en rédaction`,
          targetModule: 'metiers',
        });
      }

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
