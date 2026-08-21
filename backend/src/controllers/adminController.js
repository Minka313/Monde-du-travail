const adminService = require('../services/adminService');
const AuditService = require('../services/auditService');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class AdminController {
  static async getAllAdmins(req, res, next) {
    try {
      const result = await adminService.getAllAdmins(req.query);
      res.json({
        success: true,
        data: result.admins,
        pagination: result.pagination,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getPendingAdmins(req, res, next) {
    try {
      const result = await adminService.getPendingAdmins(req.query);
      res.json({
        success: true,
        data: result.pendingAdmins,
        pagination: result.pagination,
      });
    } catch (error) {
      next(error);
    }
  }

  static async approveAdmin(req, res, next) {
    try {
      const admin = await adminService.approveAdmin(req.params.id, req.user.id);

      await AuditService.log({
        userId: req.user.id,
        action: 'admin.approve',
        module: 'Admin',
        resource: 'UserAdminRole',
        resourceId: req.params.id,
        result: 'APPROVED',
        metadata: { userId: admin.user.id, role: admin.role.name },
      });

      res.json({
        success: true,
        message: 'Administrateur approuvé',
        data: admin,
      });
    } catch (error) {
      next(error);
    }
  }

  static async rejectAdmin(req, res, next) {
    try {
      const { reason } = req.body;
      const admin = await adminService.rejectAdmin(req.params.id, req.user.id, reason);

      await AuditService.log({
        userId: req.user.id,
        action: 'admin.reject',
        module: 'Admin',
        resource: 'UserAdminRole',
        resourceId: req.params.id,
        result: 'REJECTED',
        metadata: { userId: admin.user.id, role: admin.role.name, reason },
      });

      res.json({
        success: true,
        message: 'Administrateur refusé',
        data: admin,
      });
    } catch (error) {
      next(error);
    }
  }

  static async suspendAdmin(req, res, next) {
    try {
      const admin = await adminService.suspendAdmin(req.params.id, req.user.id);

      await AuditService.log({
        userId: req.user.id,
        action: 'admin.suspend',
        module: 'Admin',
        resource: 'UserAdminRole',
        resourceId: req.params.id,
        result: 'SUSPENDED',
        metadata: { userId: admin.user.id, role: admin.role.name },
      });

      res.json({
        success: true,
        message: 'Administrateur suspendu',
        data: admin,
      });
    } catch (error) {
      next(error);
    }
  }

  static async reactivateAdmin(req, res, next) {
    try {
      const admin = await adminService.reactivateAdmin(req.params.id, req.user.id);

      await AuditService.log({
        userId: req.user.id,
        action: 'admin.reactivate',
        module: 'Admin',
        resource: 'UserAdminRole',
        resourceId: req.params.id,
        result: 'APPROVED',
        metadata: { userId: admin.user.id, role: admin.role.name },
      });

      res.json({
        success: true,
        message: 'Administrateur réactivé',
        data: admin,
      });
    } catch (error) {
      next(error);
    }
  }

  static async revokeAdmin(req, res, next) {
    try {
      const admin = await adminService.revokeAdmin(req.params.id, req.user.id);

      await AuditService.log({
        userId: req.user.id,
        action: 'admin.revoke',
        module: 'Admin',
        resource: 'UserAdminRole',
        resourceId: req.params.id,
        result: 'REVOKED',
        metadata: { userId: admin.user.id, role: admin.role.name },
      });

      res.json({
        success: true,
        message: 'Administrateur révoqué',
        data: admin,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getStats(req, res, next) {
    try {
      const stats = await adminService.getStats();
      res.json({
        success: true,
        data: stats,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getPendingMemberships(req, res, next) {
    try {
      const pendingMemberships = await prisma.membershipRequest.findMany({
        where: { status: 'PENDING' },
        include: {
          user: {
            select: { id: true, email: true, firstName: true, lastName: true },
          },
        },
        orderBy: { createdAt: 'desc' },
      });

      res.json({
        success: true,
        data: pendingMemberships,
        pagination: {
          page: 1,
          limit: pendingMemberships.length,
          total: pendingMemberships.length,
          pages: 1,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  static async approveMembership(req, res, next) {
    try {
      const membership = await prisma.membershipRequest.findUnique({
        where: { id: req.params.id },
        include: { user: true },
      });

      if (!membership) {
        return res.status(404).json({
          success: false,
          message: 'Demande d\'adhésion non trouvée',
        });
      }

      const updated = await prisma.membershipRequest.update({
        where: { id: req.params.id },
        data: {
          status: 'APPROVED',
          reviewedBy: req.user.id,
          reviewedAt: new Date(),
        },
        include: {
          user: {
            select: { id: true, email: true, firstName: true, lastName: true },
          },
        },
      });

      await AuditService.log({
        userId: req.user.id,
        action: 'membership.approve',
        module: 'Admin',
        resource: 'MembershipRequest',
        resourceId: req.params.id,
        result: 'APPROVED',
        metadata: { userId: membership.userId },
      });

      res.json({
        success: true,
        message: 'Demande d\'adhésion approuvée',
        data: updated,
      });
    } catch (error) {
      next(error);
    }
  }

  static async rejectMembership(req, res, next) {
    try {
      const membership = await prisma.membershipRequest.findUnique({
        where: { id: req.params.id },
      });

      if (!membership) {
        return res.status(404).json({
          success: false,
          message: 'Demande d\'adhésion non trouvée',
        });
      }

      const updated = await prisma.membershipRequest.update({
        where: { id: req.params.id },
        data: {
          status: 'REJECTED',
          reviewedBy: req.user.id,
          reviewedAt: new Date(),
        },
        include: {
          user: {
            select: { id: true, email: true, firstName: true, lastName: true },
          },
        },
      });

      await AuditService.log({
        userId: req.user.id,
        action: 'membership.reject',
        module: 'Admin',
        resource: 'MembershipRequest',
        resourceId: req.params.id,
        result: 'REJECTED',
        metadata: { userId: membership.userId },
      });

      res.json({
        success: true,
        message: 'Demande d\'adhésion refusée',
        data: updated,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getAllPosts(req, res, next) {
    try {
      const { page = 1, limit = 20, status, category, search } = req.query;
      const skip = (parseInt(page, 10) - 1) * parseInt(limit, 10);

      const where = {};
      if (status) where.status = status;
      if (category) where.category = category;
      if (search) {
        where.OR = [
          { title: { contains: search, mode: 'insensitive' } },
          { content: { contains: search, mode: 'insensitive' } },
        ];
      }

      const [posts, total] = await Promise.all([
        prisma.post.findMany({
          where,
          skip,
          take: parseInt(limit, 10),
          include: {
            author: {
              select: { id: true, email: true, firstName: true, lastName: true },
            },
          },
          orderBy: { createdAt: 'desc' },
        }),
        prisma.post.count({ where }),
      ]);

      res.json({
        success: true,
        data: posts,
        pagination: {
          page: parseInt(page, 10),
          limit: parseInt(limit, 10),
          total,
          pages: Math.ceil(total / parseInt(limit, 10)) || 1,
        },
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AdminController;
