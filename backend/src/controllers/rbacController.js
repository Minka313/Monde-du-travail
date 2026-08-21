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
}

module.exports = RbacController;
