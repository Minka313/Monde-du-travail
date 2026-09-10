const prisma = require('../config/database');
const { NotFoundError, ConflictError, BadRequestError, ForbiddenError } = require('../utils/errors');
const logger = require('../utils/logger');

// Conditions d'une attribution de rôle réellement effective :
// approuvée, active et non expirée.
const EFFECTIVE_ASSIGNMENT_WHERE = {
  isActive: true,
  status: 'APPROVED',
  OR: [
    { expiresAt: null },
    { expiresAt: { gt: new Date() } },
  ],
};

class RbacService {
  // Contexte administratif complet d'un utilisateur : rôles effectifs et
  // permissions dérivées. ULTRA_ADMIN bypass tout, même sans attribution.
  static async getUserAdminContext(userId) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { role: true },
    });

    if (user?.role === 'ULTRA_ADMIN') {
      return { permissions: ['*'], adminRoles: ['ULTRA_ADMIN'] };
    }

    const userRoles = await prisma.userAdminRole.findMany({
      where: { userId, ...EFFECTIVE_ASSIGNMENT_WHERE },
      include: {
        role: {
          include: {
            permissions: {
              include: {
                permission: { select: { code: true } },
              },
            },
          },
        },
      },
    });

    const permissions = new Set();
    const adminRoles = [];
    for (const userRole of userRoles) {
      adminRoles.push(userRole.role.name);
      for (const rp of userRole.role.permissions) {
        permissions.add(rp.permission.code);
      }
    }

    return { permissions: Array.from(permissions), adminRoles };
  }

  static async getUserPermissions(userId) {
    const { permissions } = await this.getUserAdminContext(userId);
    return permissions;
  }

  static async enrichUserWithPermissions(user) {
    if (!user) return user;
    const { permissions, adminRoles } = await this.getUserAdminContext(user.id);
    return { ...user, permissions, adminRoles };
  }

  // Maintient la cohérence du rôle de base avec les rôles effectifs :
  // - ULTRA_ADMIN ⟺ au moins un rôle ULTRA_ADMIN effectif
  // - ADMIN ⟺ au moins un autre rôle admin effectif
  static async syncUserRole(userId) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, role: true, email: true },
    });
    if (!user) return;

    const ultraEmail = process.env.ULTRA_ADMIN_EMAIL?.trim();
    if (ultraEmail && user.email === ultraEmail) {
      if (user.role !== 'ULTRA_ADMIN') {
        await prisma.user.update({ where: { id: userId }, data: { role: 'ULTRA_ADMIN' } });
      }
      return;
    }

    const effectiveAssignments = await prisma.userAdminRole.findMany({
      where: { userId, ...EFFECTIVE_ASSIGNMENT_WHERE },
      include: { role: { select: { name: true } } },
    });
    const hasUltra = effectiveAssignments.some(a => a.role.name === 'ULTRA_ADMIN');

    if (hasUltra) {
      if (user.role !== 'ULTRA_ADMIN') {
        await prisma.user.update({ where: { id: userId }, data: { role: 'ULTRA_ADMIN' } });
        logger.info('Utilisateur promu ULTRA_ADMIN (rôle RBAC effectif)', { userId });
      }
      return;
    }

    if (effectiveAssignments.length > 0) {
      if (user.role !== 'ADMIN') {
        await prisma.user.update({ where: { id: userId }, data: { role: 'ADMIN' } });
        logger.info('Utilisateur promu ADMIN (rôle admin effectif)', { userId });
      }
    } else {
      if (user.role !== 'MEMBER') {
        await prisma.user.update({ where: { id: userId }, data: { role: 'MEMBER' } });
        logger.info('Utilisateur rétrogradé MEMBER (plus aucun rôle admin effectif)', { userId });
      }
    }
  }

  // Compte les Ultra Admins autres que l'utilisateur donné (table RBAC + rôle de base)
  static async countOtherUltras(excludeUserId) {
    const [assignmentCount, enumCount] = await Promise.all([
      prisma.userAdminRole.count({
        where: {
          userId: { not: excludeUserId },
          role: { name: 'ULTRA_ADMIN' },
          ...EFFECTIVE_ASSIGNMENT_WHERE,
        },
      }),
      prisma.user.count({
        where: { role: 'ULTRA_ADMIN', id: { not: excludeUserId } },
      }),
    ]);
    return assignmentCount + enumCount;
  }

  static async createRole(data) {
    const { name, description, permissions } = data;

    const existing = await prisma.adminRole.findUnique({
      where: { name },
    });

    if (existing) {
      throw new ConflictError('Un rôle avec ce nom existe déjà');
    }

    const role = await prisma.adminRole.create({
      data: {
        name,
        description,
      },
      select: {
        id: true,
        name: true,
        description: true,
        isSystem: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (permissions && permissions.length > 0) {
      await prisma.adminRolePermission.createMany({
        data: permissions.map(permissionId => ({
          adminRoleId: role.id,
          permissionId,
        })),
      });
    }

    logger.info('Rôle admin créé', { roleId: role.id, name: role.name });
    return role;
  }

  static async updateRole(id, data) {
    const { name, description, permissions } = data;

    const existing = await prisma.adminRole.findUnique({
      where: { id },
    });

    if (!existing) {
      throw new NotFoundError('Rôle non trouvé');
    }

    // Le rôle racine ne doit pouvoir être ni renommé ni voir ses permissions
    // retouchées : c'est le verrou anti-lockout de toute la plateforme.
    if (existing.isSystem && existing.name === 'ULTRA_ADMIN') {
      if (name && name !== existing.name) {
        throw new ForbiddenError('Le rôle ULTRA_ADMIN ne peut pas être renommé');
      }
      if (Array.isArray(permissions)) {
        throw new ForbiddenError('Les permissions du rôle ULTRA_ADMIN ne peuvent pas être modifiées');
      }
    }

    if (name && name !== existing.name) {
      const duplicate = await prisma.adminRole.findUnique({
        where: { name },
      });

      if (duplicate) {
        throw new ConflictError('Un rôle avec ce nom existe déjà');
      }
    }

    const updatedRole = await prisma.adminRole.update({
      where: { id },
      data: {
        name: name || undefined,
        description: description !== undefined ? description : undefined,
      },
      select: {
        id: true,
        name: true,
        description: true,
        isSystem: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (Array.isArray(permissions)) {
      await prisma.adminRolePermission.deleteMany({
        where: { adminRoleId: id },
      });

      if (permissions.length > 0) {
        await prisma.adminRolePermission.createMany({
          data: permissions.map(permissionId => ({
            adminRoleId: id,
            permissionId,
          })),
        });
      }
    }

    logger.info('Rôle admin mis à jour', { roleId: id });
    return updatedRole;
  }

  static async deleteRole(id) {
    const role = await prisma.adminRole.findUnique({
      where: { id },
      include: {
        userRoles: true,
      },
    });

    if (!role) {
      throw new NotFoundError('Rôle non trouvé');
    }

    if (role.isSystem) {
      throw new BadRequestError('Impossible de supprimer un rôle système');
    }

    await prisma.adminRole.delete({
      where: { id },
    });

    logger.info('Rôle admin supprimé', { roleId: id, name: role.name });
  }

  static async getRoles() {
    const roles = await prisma.adminRole.findMany({
      include: {
        permissions: {
          include: {
            permission: true,
          },
        },
        _count: {
          select: { userRoles: true },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    return roles.map(role => ({
      ...role,
      permissionCount: role.permissions.length,
      userCount: role._count.userRoles,
    }));
  }

  static async getRoleById(id) {
    const role = await prisma.adminRole.findUnique({
      where: { id },
      include: {
        permissions: {
          include: {
            permission: true,
          },
        },
        _count: {
          select: { userRoles: true },
        },
      },
    });

    if (!role) {
      throw new NotFoundError('Rôle non trouvé');
    }

    return {
      ...role,
      permissionCount: role.permissions.length,
      userCount: role._count.userRoles,
    };
  }

  static async assignRoleToUser(userId, adminRoleId, assignedBy, expiresAt) {
    const [user, actor] = await Promise.all([
      prisma.user.findUnique({ where: { id: userId } }),
      prisma.user.findUnique({ where: { id: assignedBy }, select: { role: true } }),
    ]);
    if (!user) {
      throw new NotFoundError('Utilisateur non trouvé');
    }
    if (!actor) {
      throw new ForbiddenError('L\'acteur de l\'attribution est introuvable');
    }

    const role = await prisma.adminRole.findUnique({ where: { id: adminRoleId } });
    if (!role) {
      throw new NotFoundError('Rôle non trouvé');
    }

    if (role.name === 'ULTRA_ADMIN') {
      if (userId === assignedBy) {
        throw new ForbiddenError('Impossible de s\'attribuer soi-même le rôle ULTRA_ADMIN');
      }
      if (actor.role !== 'ULTRA_ADMIN') {
        throw new ForbiddenError('Seul un ULTRA_ADMIN peut attribuer le rôle ULTRA_ADMIN');
      }
    }

    // Les rôles soumis à approbation restent PENDING jusqu'à validation ;
    // les autres sont effectifs immédiatement.
    const initialStatus = role.requiresApproval ? 'PENDING' : 'APPROVED';

    const assignment = await prisma.userAdminRole.upsert({
      where: {
        userId_adminRoleId: {
          userId,
          adminRoleId,
        },
      },
      update: {
        isActive: true,
        status: initialStatus,
        assignedBy,
        expiresAt: expiresAt || null,
        rejectionReason: null,
        reviewedBy: null,
        reviewedAt: null,
      },
      create: {
        userId,
        adminRoleId,
        assignedBy,
        expiresAt,
        status: initialStatus,
      },
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
    });

    await this.syncUserRole(userId);

    logger.info('Rôle assigné à un utilisateur', { userId, adminRoleId, assignedBy, status: initialStatus });
    return assignment;
  }

  static async removeRoleFromUser(userId, adminRoleId) {
    const [user, role] = await Promise.all([
      prisma.user.findUnique({ where: { id: userId }, select: { role: true, email: true } }),
      prisma.adminRole.findUnique({ where: { id: adminRoleId }, select: { name: true } }),
    ]);

    const ultraEmail = process.env.ULTRA_ADMIN_EMAIL?.trim();
    if (
      user?.role === 'ULTRA_ADMIN' ||
      role?.name === 'ULTRA_ADMIN' ||
      (ultraEmail && user?.email === ultraEmail)
    ) {
      throw new ForbiddenError('Impossible de retirer le rôle de l\'Ultra Admin');
    }

    await prisma.userAdminRole.delete({
      where: {
        userId_adminRoleId: {
          userId,
          adminRoleId,
        },
      },
    });

    await this.syncUserRole(userId);

    logger.info('Rôle retiré à un utilisateur', { userId, adminRoleId });
  }

  static async getUserAdminRoles(userId) {
    const userRoles = await prisma.userAdminRole.findMany({
      where: { userId, isActive: true },
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
      orderBy: { assignedAt: 'desc' },
    });

    return userRoles.map(ur => ({
      id: ur.id,
      role: ur.role,
      assignedBy: ur.assignedBy,
      assignedAt: ur.assignedAt,
      expiresAt: ur.expiresAt,
      isActive: ur.isActive,
    }));
  }

  static async createAuditLog(data) {
    return prisma.auditLog.create({
      data: {
        userId: data.userId || null,
        action: data.action,
        module: data.module,
        resource: data.resource || null,
        resourceId: data.resourceId || null,
        ipAddress: data.ipAddress || null,
        userAgent: data.userAgent || null,
        metadata: data.metadata || null,
        result: data.result || 'success',
      },
    });
  }

  static async getAuditLogs({ page = 1, limit = 20, userId, email, module, action, result, from, to } = {}) {
    const pageNum = Math.max(1, parseInt(page, 10) || 1);
    const limitNum = Math.min(100, Math.max(1, parseInt(limit, 10) || 20));
    const skip = (pageNum - 1) * limitNum;

    const empty = {
      logs: [],
      pagination: { page: pageNum, limit: limitNum, total: 0, totalPages: 0 },
    };

    // Filtre par acteur : résout l'email en identifiant
    if (email) {
      const target = await prisma.user.findFirst({
        where: { email: { contains: email, mode: 'insensitive' } },
        select: { id: true },
      });
      if (!target) return empty;
      userId = target.id;
    }

    const where = {};
    if (userId) where.userId = userId;
    if (module) where.module = module;
    if (action) where.action = { contains: action, mode: 'insensitive' };
    if (result) where.result = result;
    if (from || to) {
      where.createdAt = {};
      if (from) where.createdAt.gte = new Date(from);
      if (to) {
        const end = new Date(to);
        end.setHours(23, 59, 59, 999);
        where.createdAt.lte = end;
      }
    }

    const [logs, total] = await Promise.all([
      prisma.auditLog.findMany({
        where,
        skip,
        take: limitNum,
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
      }),
      prisma.auditLog.count({ where }),
    ]);

    return {
      logs,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        totalPages: Math.ceil(total / limitNum),
      },
    };
  }

  static async getStats() {
    const [
      totalUsers,
      activeUsers,
      totalAdmins,
      totalPosts,
      totalTopics,
      totalEvents,
      totalJobs,
      totalFormations,
    ] = await Promise.all([
      prisma.user.count(),
      prisma.user.count({ where: { isActive: true } }),
      prisma.user.count({ where: { role: { in: ['ADMIN', 'ULTRA_ADMIN'] } } }),
      prisma.post.count(),
      prisma.topic.count(),
      prisma.event.count(),
      prisma.job.count(),
      prisma.formation.count(),
    ]);

    return {
      totalUsers,
      activeUsers,
      totalAdmins,
      totalPosts,
      totalTopics,
      totalEvents,
      totalJobs,
      totalFormations,
    };
  }

  static async getAllPermissions() {
    return prisma.permission.findMany({
      orderBy: [{ module: 'asc' }, { action: 'asc' }],
    });
  }
}

module.exports = RbacService;
