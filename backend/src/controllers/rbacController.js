const RbacService = require('../services/rbacService');
const AuditService = require('../services/auditService');

class RbacController {
  static async getRoles(req, res, next) {
    try {
      const roles = await RbacService.getRoles();
      res.json({ success: true, data: roles });
    } catch (error) {
      next(error);
    }
  }

  static async getRole(req, res, next) {
    try {
      const role = await RbacService.getRoleById(req.params.id);
      res.json({ success: true, data: role });
    } catch (error) {
      next(error);
    }
  }

  static async createRole(req, res, next) {
    try {
      const role = await RbacService.createRole(req.body);
      res.status(201).json({ success: true, message: 'Rôle créé avec succès', data: role });
      AuditService.log({
        userId: req.user.id,
        action: 'rbac.role.create',
        module: 'RBAC',
        resource: 'AdminRole',
        resourceId: role.id,
        result: 'SUCCESS',
        metadata: { name: role.name },
      }).catch(() => {});
    } catch (error) {
      next(error);
    }
  }

  static async updateRole(req, res, next) {
    try {
      const role = await RbacService.updateRole(req.params.id, req.body);
      res.json({ success: true, message: 'Rôle mis à jour avec succès', data: role });
      AuditService.log({
        userId: req.user.id,
        action: 'rbac.role.update',
        module: 'RBAC',
        resource: 'AdminRole',
        resourceId: req.params.id,
        result: 'SUCCESS',
        metadata: { name: role.name },
      }).catch(() => {});
    } catch (error) {
      next(error);
    }
  }

  static async deleteRole(req, res, next) {
    try {
      const role = await RbacService.getRoleById(req.params.id);
      await RbacService.deleteRole(req.params.id);
      res.json({ success: true, message: 'Rôle supprimé avec succès' });
      AuditService.log({
        userId: req.user.id,
        action: 'rbac.role.delete',
        module: 'RBAC',
        resource: 'AdminRole',
        resourceId: req.params.id,
        result: 'SUCCESS',
        metadata: { name: role.name },
      }).catch(() => {});
    } catch (error) {
      next(error);
    }
  }

  static async assignRole(req, res, next) {
    try {
      const { userId, adminRoleId, expiresAt } = req.body;
      const assignedBy = req.user.id;
      const assignment = await RbacService.assignRoleToUser(userId, adminRoleId, assignedBy, expiresAt);
      res.status(201).json({ success: true, message: 'Rôle assigné avec succès', data: assignment });
      AuditService.log({
        userId: req.user.id,
        action: 'rbac.role.assign',
        module: 'RBAC',
        resource: 'UserAdminRole',
        resourceId: assignment.id,
        result: 'SUCCESS',
        metadata: { userId, adminRoleId },
      }).catch(() => {});
    } catch (error) {
      next(error);
    }
  }

  static async removeRole(req, res, next) {
    try {
      const { userId, adminRoleId } = req.body;
      await RbacService.removeRoleFromUser(userId, adminRoleId);
      res.json({ success: true, message: 'Rôle retiré avec succès' });
      AuditService.log({
        userId: req.user.id,
        action: 'rbac.role.remove',
        module: 'RBAC',
        resource: 'UserAdminRole',
        result: 'SUCCESS',
        metadata: { userId, adminRoleId },
      }).catch(() => {});
    } catch (error) {
      next(error);
    }
  }

  static async getUserRoles(req, res, next) {
    try {
      const roles = await RbacService.getUserAdminRoles(req.params.id);
      res.json({ success: true, data: roles });
    } catch (error) {
      next(error);
    }
  }

  static async getAuditLogs(req, res, next) {
    try {
      const logs = await RbacService.getAuditLogs(req.query);
      res.json({ success: true, data: logs.logs, pagination: logs.pagination });
    } catch (error) {
      next(error);
    }
  }

  static async getStats(req, res, next) {
    try {
      const stats = await RbacService.getStats();
      res.json({ success: true, data: stats });
    } catch (error) {
      next(error);
    }
  }

  static async getPermissions(req, res, next) {
    try {
      const permissions = await RbacService.getAllPermissions();
      res.json({ success: true, data: permissions });
    } catch (error) {
      next(error);
    }
  }

  static async getMentors(req, res, next) {
    try {
      const prisma = require('../config/database');
      const mentorAssignments = await prisma.userAdminRole.findMany({
        where: {
          role: { name: 'MENTOR_EXPERT' },
          status: 'APPROVED',
          isActive: true,
        },
        include: {
          user: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              email: true,
              role: true,
              createdAt: true,
              lastLoginAt: true,
            },
          },
          assignedByUser: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              email: true,
            },
          },
        },
        orderBy: { assignedAt: 'desc' },
      });

      const mentorsWithMetrics = await Promise.all(
        mentorAssignments.map(async (assignment) => {
          const userId = assignment.user.id;
          const [postsCount, formationsCount, jobsCount, eventsCount, topicsCount, repliesCount] =
            await Promise.all([
              prisma.post.count({ where: { authorId: userId } }),
              prisma.formation.count({ where: { createdById: userId } }),
              prisma.job.count({ where: { createdById: userId } }),
              prisma.event.count({ where: { createdById: userId } }),
              prisma.topic.count({ where: { authorId: userId } }),
              prisma.reply.count({ where: { authorId: userId } }),
            ]);

          const totalContributions =
            postsCount + formationsCount + jobsCount + eventsCount + topicsCount + repliesCount;

          return {
            id: assignment.id,
            userId: assignment.user.id,
            user: assignment.user,
            assignedAt: assignment.assignedAt,
            assignedByUser: assignment.assignedByUser,
            metrics: {
              postsCount,
              formationsCount,
              jobsCount,
              eventsCount,
              forumTopicsCount: topicsCount,
              forumRepliesCount: repliesCount,
              forumTotalInteractions: topicsCount + repliesCount,
              totalContributions,
            },
          };
        })
      );

      res.json({ success: true, data: mentorsWithMetrics });
    } catch (error) {
      next(error);
    }
  }

  static async nominateMentor(req, res, next) {
    try {
      const prisma = require('../config/database');
      const { userId } = req.body;
      if (!userId) {
        return res.status(400).json({ success: false, message: 'ID utilisateur requis' });
      }

      const targetUser = await prisma.user.findUnique({
        where: { id: userId },
        select: { id: true, email: true, firstName: true, lastName: true, role: true },
      });

      if (!targetUser) {
        return res.status(404).json({ success: false, message: 'Utilisateur introuvable' });
      }

      let mentorRole = await prisma.adminRole.findUnique({
        where: { name: 'MENTOR_EXPERT' },
      });

      if (!mentorRole) {
        mentorRole = await prisma.adminRole.create({
          data: {
            name: 'MENTOR_EXPERT',
            description: 'Mentor & Expert d’Industrie - Accompagnement, création de formations et fiches métiers',
            isSystem: true,
            requiresApproval: false,
          },
        });
      }

      const assignment = await prisma.userAdminRole.upsert({
        where: {
          userId_adminRoleId: {
            userId,
            adminRoleId: mentorRole.id,
          },
        },
        update: {
          status: 'APPROVED',
          isActive: true,
          assignedBy: req.user.id,
          assignedAt: new Date(),
          reviewedBy: req.user.id,
          reviewedAt: new Date(),
          rejectionReason: null,
        },
        create: {
          userId,
          adminRoleId: mentorRole.id,
          status: 'APPROVED',
          isActive: true,
          assignedBy: req.user.id,
          assignedAt: new Date(),
          reviewedBy: req.user.id,
          reviewedAt: new Date(),
        },
      });

      await RbacService.syncUserRole(userId);

      AuditService.log({
        userId: req.user.id,
        action: 'rbac.mentor.nominate',
        module: 'RBAC',
        resource: 'UserAdminRole',
        resourceId: assignment.id,
        result: 'SUCCESS',
        metadata: {
          targetUserId: userId,
          targetEmail: targetUser.email,
          nominatedBy: req.user.id,
        },
      }).catch(() => {});

      res.status(200).json({
        success: true,
        message: `${targetUser.firstName} ${targetUser.lastName} a été nommé(e) Mentor & Expert d'Industrie`,
        data: assignment,
      });
    } catch (error) {
      next(error);
    }
  }

  static async revokeMentor(req, res, next) {
    try {
      const prisma = require('../config/database');
      const { userId } = req.body;
      if (!userId) {
        return res.status(400).json({ success: false, message: 'ID utilisateur requis' });
      }

      const mentorRole = await prisma.adminRole.findUnique({
        where: { name: 'MENTOR_EXPERT' },
      });

      if (mentorRole) {
        await prisma.userAdminRole.updateMany({
          where: {
            userId,
            adminRoleId: mentorRole.id,
          },
          data: {
            isActive: false,
            status: 'REJECTED',
            rejectionReason: 'Statut de Mentor retiré par un administrateur',
            reviewedBy: req.user.id,
            reviewedAt: new Date(),
          },
        });
      }

      await RbacService.syncUserRole(userId);

      AuditService.log({
        userId: req.user.id,
        action: 'rbac.mentor.revoke',
        module: 'RBAC',
        resource: 'UserAdminRole',
        result: 'SUCCESS',
        metadata: {
          targetUserId: userId,
          revokedBy: req.user.id,
        },
      }).catch(() => {});

      res.json({
        success: true,
        message: 'Statut de Mentor & Expert révoqué avec succès',
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = RbacController;
