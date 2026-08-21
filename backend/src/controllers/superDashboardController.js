const RbacService = require('../services/rbacService');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

class SuperDashboardController {
  static async getGlobalStats(req, res, next) {
    try {
      const stats = await RbacService.getStats();

      const [
        totalPosts,
        publishedPosts,
        draftPosts,
        totalTopics,
        totalEvents,
        totalJobs,
        totalFormations,
        pendingMemberships,
      ] = await Promise.all([
        prisma.post.count(),
        prisma.post.count({ where: { status: 'PUBLISHED' } }),
        prisma.post.count({ where: { status: 'DRAFT' } }),
        prisma.topic.count(),
        prisma.event.count(),
        prisma.job.count(),
        prisma.formation.count(),
        prisma.membershipRequest.count({ where: { status: 'PENDING' } }),
      ]);

      const data = {
        ...stats,
        totalPosts,
        publishedPosts,
        draftPosts,
        totalTopics,
        totalEvents,
        totalJobs,
        totalFormations,
        pendingMemberships,
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
        totalUsers,
      ] = await Promise.all([
        prisma.membershipRequest.count({ where: { status: 'PENDING' } }),
        prisma.post.count({ where: { status: 'DRAFT' } }),
        prisma.user.count({ where: { isActive: true } }),
      ]);

      const alerts = [];

      if (pendingMemberships > 0) {
        alerts.push({
          id: 'pending-memberships',
          type: 'warning',
          title: 'Adhésions en attente',
          message: `${pendingMemberships} demande(s) en attente de validation`,
          link: '/admin/memberships',
        });
      }

      if (draftPosts > 0) {
        alerts.push({
          id: 'draft-posts',
          type: 'info',
          title: 'Brouillons en attente',
          message: `${draftPosts} article(s) en brouillon`,
          link: '/admin/blog',
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
