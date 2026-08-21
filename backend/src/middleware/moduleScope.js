const { ForbiddenError } = require('../utils/errors');

const requireModulePermission = (module) => {
  return (req, res, next) => {
    if (!req.user) {
      return next(new ForbiddenError('Authentification requise'));
    }

    if (req.user.role === 'ULTRA_ADMIN') {
      return next();
    }

    const userPermissions = req.user.permissions || [];
    const moduleKey = module.toLowerCase();
    const modulePermissions = userPermissions.filter(p => p.startsWith(`${moduleKey}.`) || p === '*');

    if (modulePermissions.length === 0) {
      return next(new ForbiddenError(`Accès interdit au module ${module}`));
    }

    next();
  };
};

module.exports = {
  requireModulePermission,
};
