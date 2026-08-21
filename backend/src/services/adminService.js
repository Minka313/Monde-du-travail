const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const RbacService = require('./rbacService');
const { NotFoundError, ForbiddenError } = require('../utils/errors');

class AdminService {
  // Garde-fous communs aux actions destructrices sur une attribution :
  // - cible introuvable -> 404
  // - auto-action sur un rôle ULTRA_ADMIN -> interdit (auto-lockout)
  // - dernier Ultra Admin -> interdit (lockout de la plateforme)
  static async guardCriticalAssignment(adminRoleId, reviewerId, action) {
    const assignment = await prisma.userAdminRole.findUnique({
      where: { id: adminRoleId },
      include: {
        user: { select: { id: true, email: true, role: true } },
        role: { select: { id: true, name: true } },
      },
    });

    if (!assignment) {
      throw new NotFoundError('Administrateur non trouvé');
    }

    if (assignment.role.name === 'ULTRA_ADMIN') {
      if (assignment.userId === reviewerId) {
        throw new ForbiddenError(`Impossible de ${action} votre propre rôle Ultra Admin`);
      }
      const otherUltras = await RbacService.countOtherUltras(assignment.userId);
      if (otherUltras === 0) {
        throw new ForbiddenError('Impossible de retirer le dernier Ultra Admin de la plateforme');
      }
    }

    return assignment;
  }
  static async getAllAdmins(filters = {}) {
    const { page = 1, limit = 20, role, status } = filters;
    const skip = (parseInt(page, 10) - 1) * parseInt(limit, 10);

    const where = {};
    if (role) where.role = { name: role };
    if (status) where.status = status;

    const [adminRoles, total] = await Promise.all([
      prisma.userAdminRole.findMany({
        where,
        skip,
        take: parseInt(limit, 10),
        include: {
          user: {
            select: { id: true, email: true, firstName: true, lastName: true, role: true, isActive: true },
          },
          role: {
            select: { id: true, name: true, description: true },
          },
          assignedByUser: {
            select: { id: true, email: true, firstName: true, lastName: true },
          },
          reviewedByUser: {
            select: { id: true, email: true, firstName: true, lastName: true },
          },
        },
        orderBy: { assignedAt: 'desc' },
      }),
      prisma.userAdminRole.count({ where }),
    ]);

    return {
      admins: adminRoles,
      pagination: {
        page: parseInt(page, 10),
        limit: parseInt(limit, 10),
        total,
        pages: Math.ceil(total / parseInt(limit, 10)) || 1,
      },
    };
  }

  static async getPendingAdmins(filters = {}) {
    const { page = 1, limit = 20 } = filters;
    const skip = (parseInt(page, 10) - 1) * parseInt(limit, 10);

    const where = { status: 'PENDING' };

    const [pendingAdmins, total] = await Promise.all([
      prisma.userAdminRole.findMany({
        where,
        skip,
        take: parseInt(limit, 10),
        include: {
          user: {
            select: { id: true, email: true, firstName: true, lastName: true, role: true },
          },
          role: {
            select: { id: true, name: true, description: true },
          },
        },
        orderBy: { assignedAt: 'desc' },
      }),
      prisma.userAdminRole.count({ where }),
    ]);

    return {
      pendingAdmins,
      pagination: {
        page: parseInt(page, 10),
        limit: parseInt(limit, 10),
        total,
        pages: Math.ceil(total / parseInt(limit, 10)) || 1,
      },
    };
  }

  static async approveAdmin(adminRoleId, reviewedById) {
    const userAdminRole = await prisma.userAdminRole.findUnique({
      where: { id: adminRoleId },
      include: { user: true, role: true },
    });

    if (!userAdminRole) {
      throw new Error('Administrateur non trouvé');
    }

    const updated = await prisma.userAdminRole.update({
      where: { id: adminRoleId },
      data: {
        status: 'APPROVED',
        reviewedBy: reviewedById,
        reviewedAt: new Date(),
      },
      include: {
        user: {
          select: { id: true, email: true, firstName: true, lastName: true },
        },
        role: {
          select: { id: true, name: true, description: true },
        },
      },
    });

    await RbacService.syncUserRole(userAdminRole.userId);

    return updated;
  }

  static async rejectAdmin(adminRoleId, reviewedById, reason) {
    const userAdminRole = await prisma.userAdminRole.findUnique({
      where: { id: adminRoleId },
    });

    if (!userAdminRole) {
      throw new Error('Administrateur non trouvé');
    }

    const updated = await prisma.userAdminRole.update({
      where: { id: adminRoleId },
      data: {
        status: 'REJECTED',
        reviewedBy: reviewedById,
        reviewedAt: new Date(),
        rejectionReason: reason,
      },
      include: {
        user: {
          select: { id: true, email: true, firstName: true, lastName: true },
        },
        role: {
          select: { id: true, name: true, description: true },
        },
      },
    });

    await RbacService.syncUserRole(updated.userId);

    return updated;
  }

  static async suspendAdmin(adminRoleId, reviewedById) {
    await this.guardCriticalAssignment(adminRoleId, reviewedById, 'suspendre');

    const updated = await prisma.userAdminRole.update({
      where: { id: adminRoleId },
      data: {
        status: 'SUSPENDED',
        reviewedBy: reviewedById,
        reviewedAt: new Date(),
      },
      include: {
        user: {
          select: { id: true, email: true, firstName: true, lastName: true },
        },
        role: {
          select: { id: true, name: true, description: true },
        },
      },
    });

    await RbacService.syncUserRole(updated.userId);

    return updated;
  }

  static async reactivateAdmin(adminRoleId, reviewedById) {
    const updated = await prisma.userAdminRole.update({
      where: { id: adminRoleId },
      data: {
        status: 'APPROVED',
        reviewedBy: reviewedById,
        reviewedAt: new Date(),
      },
      include: {
        user: {
          select: { id: true, email: true, firstName: true, lastName: true },
        },
        role: {
          select: { id: true, name: true, description: true },
        },
      },
    });

    await RbacService.syncUserRole(updated.userId);

    return updated;
  }

  static async revokeAdmin(adminRoleId, reviewedById) {
    await this.guardCriticalAssignment(adminRoleId, reviewedById, 'révoquer');

    const updated = await prisma.userAdminRole.update({
      where: { id: adminRoleId },
      data: {
        status: 'REVOKED',
        reviewedBy: reviewedById,
        reviewedAt: new Date(),
      },
      include: {
        user: {
          select: { id: true, email: true, firstName: true, lastName: true },
        },
        role: {
          select: { id: true, name: true, description: true },
        },
      },
    });

    // La révocation d'un rôle ultra fait perdre le statut ULTRA_ADMIN
    // (la démotion est sans effet si un autre rôle ultra reste effectif)
    await RbacService.syncUserRole(updated.userId);

    return updated;
  }

  static async getStats() {
    const [activeMembers, pendingRequests, totalTopics] = await Promise.all([
      prisma.user.count({
        where: { role: 'MEMBER', isActive: true },
      }),
      prisma.membershipRequest.count({
        where: { status: 'PENDING' },
      }),
      prisma.topic.count(),
    ]);

    return {
      activeMembers,
      pendingRequests,
      totalTopics,
    };
  }
}

module.exports = AdminService;
