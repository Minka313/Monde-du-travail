const { ForbiddenError } = require('../utils/errors');

const hasPermission = (requiredPermission) => {
  return (req, res, next) => {
    if (!req.user) {
      return next(new ForbiddenError('Authentification requise'));
    }

    const userPermissions = req.user.permissions || [];
    const userRole = req.user.role;

    if (userRole === 'ULTRA_ADMIN') {
      return next();
    }

    if (userPermissions.includes('*')) {
      return next();
    }

    if (requiredPermission && !userPermissions.includes(requiredPermission)) {
      return next(new ForbiddenError('Permission insuffisante'));
    }

    next();
  };
};

const hasAnyPermission = (permissions) => {
  return (req, res, next) => {
    if (!req.user) {
      return next(new ForbiddenError('Authentification requise'));
    }

    const userPermissions = req.user.permissions || [];
    const userRole = req.user.role;

    if (userRole === 'ULTRA_ADMIN') {
      return next();
    }

    if (userPermissions.includes('*')) {
      return next();
    }

    const hasAccess = permissions.some(p => userPermissions.includes(p));
    if (!hasAccess) {
      return next(new ForbiddenError('Permissions insuffisantes'));
    }

    next();
  };
};

const authorize = (requiredPermission) => {
  if (Array.isArray(requiredPermission)) {
    return hasAnyPermission(requiredPermission);
  }
  return hasPermission(requiredPermission);
};

module.exports = {
  hasPermission,
  hasAnyPermission,
  authorize,
};
