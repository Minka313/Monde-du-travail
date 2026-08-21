const RbacService = require('../services/rbacService');

const attachPermissions = async (req, res, next) => {
  try {
    if (!req.user) {
      return next();
    }

    const permissions = await RbacService.getUserPermissions(req.user.id);
    req.user.permissions = permissions;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = attachPermissions;
