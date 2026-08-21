const prisma = require('../config/database');
const { NotFoundError, BadRequestError, ForbiddenError } = require('../utils/errors');

class UserService {
  // Liste filtrable : recherche (email/nom), rôle de base, statut du compte.
  // Attache les rôles admin effectifs de chaque utilisateur listé.
  static async getAllUsers(page = 1, limit = 20, filters = {}) {
    const pageNum = Math.max(1, parseInt(page, 10) || 1);
    const limitNum = Math.min(100, Math.max(1, parseInt(limit, 10) || 20));
    const skip = (pageNum - 1) * limitNum;

    const where = {};
    if (filters.role) where.role = filters.role;
    if (filters.status === 'active') where.isActive = true;
    if (filters.status === 'inactive') where.isActive = false;
    if (filters.verified === 'true') where.isVerified = true;
    if (filters.verified === 'false') where.isVerified = false;
    if (filters.search) {
      where.OR = [
        { email: { contains: filters.search, mode: 'insensitive' } },
        { firstName: { contains: filters.search, mode: 'insensitive' } },
        { lastName: { contains: filters.search, mode: 'insensitive' } },
      ];
    }

    const [users, total] = await Promise.all([
      prisma.user.findMany({
        where,
        skip,
        take: limitNum,
        select: {
          id: true,
          email: true,
          firstName: true,
          lastName: true,
          role: true,
          isActive: true,
          isVerified: true,
          lastLoginAt: true,
          createdAt: true,
        },
        orderBy: { createdAt: 'desc' },
      }),
      prisma.user.count({ where }),
    ]);

    // Rôles admin effectifs par utilisateur (une seule requête supplémentaire)
    const ids = users.map(u => u.id);
    const roleMap = {};
    if (ids.length > 0) {
      const userAssignments = await prisma.userAdminRole.findMany({
        where: {
          userId: { in: ids },
          isActive: true,
          status: 'APPROVED',
          OR: [
            { expiresAt: null },
            { expiresAt: { gt: new Date() } },
          ],
        },
        select: { userId: true, role: { select: { name: true } } },
      });
      for (const a of userAssignments) {
        (roleMap[a.userId] = roleMap[a.userId] || []).push(a.role.name);
      }
    }

    return {
      users: users.map(u => ({ ...u, adminRoles: roleMap[u.id] || [] })),
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        pages: Math.ceil(total / limitNum) || 1,
      },
    };
  }

  static async getUserById(id) {
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        isActive: true,
        isVerified: true,
        createdAt: true,
      },
    });

    if (!user) {
      throw new NotFoundError('Utilisateur non trouvé');
    }

    return user;
  }

  // Mise à jour du profil : liste blanche stricte de champs.
  // (jamais role/isActive/isVerified par ici : endpoints dédiés + permissions)
  static async updateUser(id, data) {
    await this.getUserById(id);
    const { firstName, lastName } = data;

    return prisma.user.update({
      where: { id },
      data: {
        ...(firstName !== undefined && { firstName }),
        ...(lastName !== undefined && { lastName }),
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        isActive: true,
        isVerified: true,
        createdAt: true,
      },
    });
  }

  // Activer / désactiver un compte (permission users.suspend)
  static async setUserActive(id, active, requesterId) {
    const user = await prisma.user.findUnique({
      where: { id },
      select: { id: true, email: true, role: true, isActive: true },
    });

    if (!user) {
      throw new NotFoundError('Utilisateur non trouvé');
    }

    if (!active) {
      if (user.id === requesterId) {
        throw new ForbiddenError('Impossible de désactiver votre propre compte');
      }
      if (user.role === 'ULTRA_ADMIN') {
        throw new ForbiddenError('Impossible de désactiver un compte Ultra Admin');
      }
    }

    if (user.isActive === active) {
      return user;
    }

    return prisma.user.update({
      where: { id },
      data: { isActive: active },
      select: { id: true, email: true, role: true, isActive: true },
    });
  }

  // Vérifier un compte (permission users.verify)
  static async verifyUser(id) {
    await this.getUserById(id);
    return prisma.user.update({
      where: { id },
      data: { isVerified: true },
      select: { id: true, email: true, isVerified: true },
    });
  }

  // Suppression définitive (action critique : ré-authentification requise
  // au niveau route + garde-fous anti-lockout).
  static async deleteUser(id, requesterId) {
    const user = await prisma.user.findUnique({
      where: { id },
      select: { id: true, email: true, role: true },
    });

    if (!user) {
      throw new NotFoundError('Utilisateur non trouvé');
    }

    if (user.id === requesterId) {
      throw new ForbiddenError('Impossible de supprimer votre propre compte');
    }

    if (user.role === 'ULTRA_ADMIN') {
      throw new ForbiddenError('Impossible de supprimer un compte Ultra Admin');
    }

    await prisma.user.delete({
      where: { id },
    });

    return user;
  }
}

module.exports = UserService;
