const userService = require('../services/userService');
const AuditService = require('../services/auditService');

class UserController {
  static async getAllUsers(req, res, next) {
    try {
      const result = await userService.getAllUsers(
        req.query.page,
        req.query.limit,
        {
          search: req.query.search,
          role: req.query.role,
          status: req.query.status,
          verified: req.query.verified,
        }
      );

      res.json({
        success: true,
        data: result.users,
        pagination: result.pagination,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getUserById(req, res, next) {
    try {
      const user = await userService.getUserById(req.params.id);
      res.json({
        success: true,
        data: user,
      });
    } catch (error) {
      next(error);
    }
  }

  static async updateUser(req, res, next) {
    try {
      const user = await userService.updateUser(req.params.id, req.body);

      await AuditService.log({
        userId: req.user.id,
        action: 'users.update',
        module: 'users',
        resource: 'User',
        resourceId: req.params.id,
        ipAddress: req.ip,
        userAgent: req.get('user-agent'),
        metadata: { email: user.email },
      });

      res.json({
        success: true,
        message: 'Utilisateur mis à jour',
        data: user,
      });
    } catch (error) {
      next(error);
    }
  }

  static async activateUser(req, res, next) {
    try {
      const user = await userService.setUserActive(req.params.id, true, req.user.id);

      await AuditService.log({
        userId: req.user.id,
        action: 'users.activate',
        module: 'users',
        resource: 'User',
        resourceId: req.params.id,
        result: 'ACTIVE',
        ipAddress: req.ip,
        userAgent: req.get('user-agent'),
        metadata: { email: user.email },
      });

      res.json({ success: true, message: 'Compte activé', data: user });
    } catch (error) {
      next(error);
    }
  }

  static async deactivateUser(req, res, next) {
    try {
      const user = await userService.setUserActive(req.params.id, false, req.user.id);

      await AuditService.log({
        userId: req.user.id,
        action: 'users.deactivate',
        module: 'users',
        resource: 'User',
        resourceId: req.params.id,
        result: 'INACTIVE',
        ipAddress: req.ip,
        userAgent: req.get('user-agent'),
        metadata: { email: user.email },
      });

      res.json({ success: true, message: 'Compte désactivé', data: user });
    } catch (error) {
      next(error);
    }
  }

  static async verifyUser(req, res, next) {
    try {
      const user = await userService.verifyUser(req.params.id);

      await AuditService.log({
        userId: req.user.id,
        action: 'users.verify',
        module: 'users',
        resource: 'User',
        resourceId: req.params.id,
        result: 'VERIFIED',
        ipAddress: req.ip,
        userAgent: req.get('user-agent'),
        metadata: { email: user.email },
      });

      res.json({ success: true, message: 'Compte vérifié', data: user });
    } catch (error) {
      next(error);
    }
  }

  static async deleteUser(req, res, next) {
    try {
      const user = await userService.deleteUser(req.params.id, req.user.id);

      await AuditService.log({
        userId: req.user.id,
        action: 'users.delete',
        module: 'users',
        resource: 'User',
        resourceId: req.params.id,
        ipAddress: req.ip,
        userAgent: req.get('user-agent'),
        result: 'DELETED',
        metadata: { email: user.email },
      });

      res.json({
        success: true,
        message: 'Utilisateur supprimé',
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
