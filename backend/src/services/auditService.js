const prisma = require('../config/database');

class AuditService {
  static async log(data) {
    const { userId, action, module, resource, resourceId, ipAddress, userAgent, metadata, result } = data;

    return prisma.auditLog.create({
      data: {
        userId: userId || null,
        action,
        module,
        resource: resource || null,
        resourceId: resourceId || null,
        ipAddress: ipAddress || null,
        userAgent: userAgent || null,
        metadata: metadata || null,
        result: result || 'SUCCESS',
      },
    });
  }

  static async getLogs(filters = {}) {
    const { userId, module, action, page = 1, limit = 50 } = filters;
    const skip = (parseInt(page, 10) - 1) * parseInt(limit, 10);

    const where = {};
    if (userId) where.userId = userId;
    if (module) where.module = module;
    if (action) where.action = action;

    const [logs, total] = await Promise.all([
      prisma.auditLog.findMany({
        where,
        skip,
        take: parseInt(limit, 10),
        include: {
          user: {
            select: { id: true, email: true, firstName: true, lastName: true, role: true },
          },
        },
        orderBy: { createdAt: 'desc' },
      }),
      prisma.auditLog.count({ where }),
    ]);

    return {
      logs,
      pagination: {
        page: parseInt(page, 10),
        limit: parseInt(limit, 10),
        total,
        pages: Math.ceil(total / parseInt(limit, 10)) || 1,
      },
    };
  }
}

module.exports = AuditService;
