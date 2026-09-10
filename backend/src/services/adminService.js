const prisma = require('../config/database');
const RbacService = require('./rbacService');
const { NotFoundError, ForbiddenError, BadRequestError } = require('../utils/errors');

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

    if (reviewerId && assignment.user.id === reviewerId && assignment.role.name === 'ULTRA_ADMIN') {
      throw new ForbiddenError('Impossible de révoquer son propre rôle Ultra Admin');
    }

    const ultraEmail = process.env.ULTRA_ADMIN_EMAIL?.trim();
    if (ultraEmail && assignment.user.email.toLowerCase() === ultraEmail.toLowerCase()) {
      throw new ForbiddenError(`Impossible de ${action || 'modifier'} le compte ou le rôle de l'Ultra Admin`);
    }

    if (assignment.role.name === 'ULTRA_ADMIN') {
      const remainingCount = await prisma.userAdminRole.count({
        where: {
          role: { name: 'ULTRA_ADMIN' },
          status: 'APPROVED',
          id: { not: adminRoleId },
        },
      });
      if (remainingCount < 1) {
        throw new ForbiddenError('Impossible de révoquer le dernier rôle Ultra Admin');
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
    const reviewer = await prisma.user.findUnique({
      where: { id: reviewedById },
      select: { role: true },
    });
    if (!reviewer || reviewer.role !== 'ULTRA_ADMIN') {
      throw new ForbiddenError('Seul l\'Ultra Admin est habilité à approuver un administrateur');
    }

    const userAdminRole = await prisma.userAdminRole.findUnique({
      where: { id: adminRoleId },
      include: { user: true, role: true },
    });

    if (!userAdminRole) {
      throw new NotFoundError('Administrateur non trouvé');
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
    await this.guardCriticalAssignment(adminRoleId, reviewedById, 'rejeter');

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

  static async createAdmin(data, createdById) {
    const { email, password, firstName, lastName } = data;
    const roleName = data.roleName || data.role;

    if (!email || !password || !firstName || !lastName || !roleName) {
      throw new BadRequestError('Tous les champs sont obligatoires (email, mot de passe, prénom, nom, rôle)');
    }

    if (password.length < 8) {
      throw new BadRequestError('Le mot de passe doit contenir au moins 8 caractères');
    }

    const bcrypt = require('bcrypt');
    const targetRole = await prisma.adminRole.findUnique({
      where: { name: roleName },
    });

    if (!targetRole) {
      throw new NotFoundError(`Rôle administratif « ${roleName} » introuvable`);
    }

    if (targetRole.name === 'ULTRA_ADMIN') {
      throw new ForbiddenError('Impossible de créer un compte Ultra Admin par ce formulaire');
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const normalizedEmail = email.toLowerCase().trim();

    // Rechercher si l'utilisateur existe déjà
    let user = await prisma.user.findUnique({ where: { email: normalizedEmail } });

    if (user) {
      if (user.role === 'ULTRA_ADMIN') {
        throw new ForbiddenError('Ce compte est déjà Ultra Admin et ne peut être modifié');
      }
      user = await prisma.user.update({
        where: { id: user.id },
        data: {
          firstName,
          lastName,
          password: hashedPassword,
          role: 'ADMIN',
          isActive: true,
          isVerified: true,
        },
      });
    } else {
      user = await prisma.user.create({
        data: {
          email: normalizedEmail,
          password: hashedPassword,
          firstName,
          lastName,
          role: 'ADMIN',
          isActive: true,
          isVerified: true,
        },
      });
    }

    // Assigner le rôle fonctionnel demandé
    const assignment = await prisma.userAdminRole.upsert({
      where: {
        userId_adminRoleId: {
          userId: user.id,
          adminRoleId: targetRole.id,
        },
      },
      update: {
        status: 'APPROVED',
        isActive: true,
        assignedBy: createdById,
        reviewedBy: createdById,
        reviewedAt: new Date(),
      },
      create: {
        userId: user.id,
        adminRoleId: targetRole.id,
        assignedBy: createdById,
        status: 'APPROVED',
        isActive: true,
        reviewedBy: createdById,
        reviewedAt: new Date(),
      },
      include: {
        user: { select: { id: true, email: true, firstName: true, lastName: true, role: true, isActive: true } },
        role: { select: { id: true, name: true, description: true } },
      },
    });

    await RbacService.syncUserRole(user.id);

    return assignment;
  }

  static async getAdminAuditLogs(adminUserId, limit = 25) {
    const logs = await prisma.auditLog.findMany({
      where: { userId: adminUserId },
      orderBy: { createdAt: 'desc' },
      take: parseInt(limit, 10) || 25,
      include: {
        user: { select: { id: true, email: true, firstName: true, lastName: true } },
      },
    });
    return logs;
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
