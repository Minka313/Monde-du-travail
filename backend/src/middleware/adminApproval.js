const prisma = require('../config/database');
const { ForbiddenError } = require('../utils/errors');

// Vérifie que le compte a bien un accès administratif effectif :
// - ULTRA_ADMIN : bypass racine
// - ADMIN : membre du staff (la granularité réelle est assurée par
//   requireModulePermission / authorize sur chaque route)
// - Autres : au moins un rôle admin APPROVED, actif et non expiré
class AdminApprovalMiddleware {
  static async checkAdminApproval(userId, userRole) {
    if (userRole === 'ULTRA_ADMIN' || userRole === 'ADMIN') {
      return { approved: true, reason: null };
    }

    const effectiveRoles = await prisma.userAdminRole.count({
      where: {
        userId,
        isActive: true,
        status: 'APPROVED',
        OR: [
          { expiresAt: null },
          { expiresAt: { gt: new Date() } },
        ],
      },
    });

    if (effectiveRoles === 0) {
      return {
        approved: false,
        reason: 'Aucun rôle administrateur approuvé et actif',
      };
    }

    return { approved: true, reason: null };
  }

  static middleware(req, res, next) {
    AdminApprovalMiddleware.checkAdminApproval(req.user.id, req.user.role)
      .then(result => {
        if (!result.approved) {
          return next(new ForbiddenError(result.reason));
        }
        next();
      })
      .catch(error => {
        next(error);
      });
  }
}

module.exports = AdminApprovalMiddleware;
