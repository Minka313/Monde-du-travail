const prisma = require('../config/database');
const { NotFoundError, ForbiddenError, BadRequestError } = require('../utils/errors');
const RbacService = require('./rbacService');
const EmailService = require('./emailService');
const logger = require('../utils/logger');

class ApprovalService {
  static async createApprovalRequest(data) {
    const { resourceType, resourceId, action, createdById, priority, comment, metadata } = data;

    // Vérifier si une demande existe déjà
    const existing = await prisma.approvalWorkflow.findUnique({
      where: {
        resourceType_resourceId_action: {
          resourceType,
          resourceId,
          action,
        },
      },
    });

    if (existing) {
      throw new BadRequestError('Une demande d\'approbation existe déjà pour cette action');
    }

    const workflow = await prisma.approvalWorkflow.create({
      data: {
        resourceType,
        resourceId,
        action,
        createdById,
        priority: priority || 'NORMAL',
        comment,
        metadata,
      },
    });

    // Créer les étapes d'approbation selon le type de ressource
    await this.createApprovalSteps(workflow.id, resourceType, action);

    // Log d'audit
    await RbacService.createAuditLog({
      userId: createdById,
      action: 'approval.request',
      module: 'Approval',
      resource: resourceType,
      resourceId,
      result: 'PENDING',
      metadata: { workflowId: workflow.id, action },
    });

    return workflow;
  }

  static async createApprovalSteps(workflowId, resourceType, action) {
    // Pour les actions admin, seul ULTRA_ADMIN peut approuver
    if (resourceType === 'ADMIN' || action.includes('admin')) {
      await prisma.approvalStep.create({
        data: {
          workflowId,
          approverRole: 'ULTRA_ADMIN',
          status: 'PENDING',
        },
      });
      return;
    }

    // Pour les autres modules, l'ULTRA_ADMIN approuve par défaut
    await prisma.approvalStep.create({
      data: {
        workflowId,
        approverRole: 'ULTRA_ADMIN',
        status: 'PENDING',
      },
    });
  }

  static async getApprovalWorkflow(id) {
    const workflow = await prisma.approvalWorkflow.findUnique({
      where: { id },
      include: {
        createdBy: {
          select: { id: true, email: true, firstName: true, lastName: true },
        },
        reviewedBy: {
          select: { id: true, email: true, firstName: true, lastName: true },
        },
        steps: {
          include: {
            approver: {
              select: { id: true, email: true, firstName: true, lastName: true },
            },
          },
          orderBy: { createdAt: 'asc' },
        },
      },
    });

    if (!workflow) {
      throw new NotFoundError('Workflow d\'approbation non trouvé');
    }

    return workflow;
  }

  static async getAllApprovalWorkflows(filters = {}) {
    const { status, resourceType, page = 1, limit = 20 } = filters;
    const skip = (parseInt(page, 10) - 1) * parseInt(limit, 10);

    const where = {};
    if (status) where.status = status;
    if (resourceType) where.resourceType = resourceType;

    const [workflows, total] = await Promise.all([
      prisma.approvalWorkflow.findMany({
        where,
        skip,
        take: parseInt(limit, 10),
        include: {
          createdBy: {
            select: { id: true, email: true, firstName: true, lastName: true },
          },
          reviewedBy: {
            select: { id: true, email: true, firstName: true, lastName: true },
          },
        },
        orderBy: { createdAt: 'desc' },
      }),
      prisma.approvalWorkflow.count({ where }),
    ]);

    return {
      workflows,
      pagination: {
        page: parseInt(page, 10),
        limit: parseInt(limit, 10),
        total,
        pages: Math.ceil(total / parseInt(limit, 10)) || 1,
      },
    };
  }

  static async approveWorkflow(workflowId, userId, comment) {
    const workflow = await prisma.approvalWorkflow.findUnique({
      where: { id: workflowId },
      include: { steps: true },
    });

    if (!workflow) {
      throw new NotFoundError('Workflow d\'approbation non trouvé');
    }

    if (workflow.status !== 'PENDING') {
      throw new BadRequestError('Ce workflow n\'est pas en attente d\'approbation');
    }

    // Vérifier que l'utilisateur a le rôle requis pour approuver
    const { permissions, adminRoles } = await RbacService.getUserAdminContext(userId);

    const pendingStep = workflow.steps.find(s => s.status === 'PENDING');
    if (!pendingStep) {
      throw new BadRequestError('Aucune étape en attente');
    }

    // ULTRA_ADMIN (bypass '*') ou détenteur du rôle approbateur de l'étape
    const isUltra = permissions.includes('*');
    if (!isUltra && !adminRoles.includes(pendingStep.approverRole)) {
      throw new ForbiddenError('Vous n\'avez pas les droits pour approuver cette étape');
    }

    // Mettre à jour l'étape
    await prisma.approvalStep.update({
      where: { id: pendingStep.id },
      data: {
        status: 'APPROVED',
        approverId: userId,
        comment,
        reviewedAt: new Date(),
      },
    });

    // Vérifier si toutes les étapes sont approuvées
    const allSteps = await prisma.approvalStep.findMany({
      where: { workflowId },
    });

    const allApproved = allSteps.every(s => s.status === 'APPROVED');

    if (allApproved) {
      // Marquer le workflow comme approuvé et exécuter l'action
      await prisma.approvalWorkflow.update({
        where: { id: workflowId },
        data: {
          status: 'APPROVED',
          reviewedById: userId,
          reviewedAt: new Date(),
        },
      });

      // Exécuter l'action approuvée
      await this.executeApprovedAction(workflow);

      // Notification email au créateur
      if (workflow.createdById) {
        try {
          const creator = await prisma.user.findUnique({ where: { id: workflow.createdById } });
          const reviewer = await prisma.user.findUnique({ where: { id: userId } });
          if (creator && creator.email) {
            EmailService.notifyApproval({
              to: creator.email,
              recipientName: `${creator.firstName} ${creator.lastName}`.trim(),
              resourceType: workflow.resourceType,
              title: workflow.comment || workflow.resourceType,
              reviewerName: reviewer ? `${reviewer.firstName} ${reviewer.lastName}`.trim() : 'Ultra Admin',
              comment,
            }).catch(e => logger.warn('Email notify error', { error: e.message }));
          }
        } catch (e) {
          logger.warn('Failed to dispatch approval notification email', { error: e.message });
        }
      }
    }

    // Log d'audit
    await RbacService.createAuditLog({
      userId,
      action: 'approval.approve',
      module: 'Approval',
      resource: workflow.resourceType,
      resourceId: workflow.resourceId,
      result: 'APPROVED',
      metadata: { workflowId, stepId: pendingStep.id },
    });

    return this.getApprovalWorkflow(workflowId);
  }

  static async rejectWorkflow(workflowId, userId, comment) {
    const workflow = await prisma.approvalWorkflow.findUnique({
      where: { id: workflowId },
    });

    if (!workflow) {
      throw new NotFoundError('Workflow d\'approbation non trouvé');
    }

    if (workflow.status !== 'PENDING') {
      throw new BadRequestError('Ce workflow n\'est pas en attente d\'approbation');
    }

    // Rejeter toutes les étapes en attente
    await prisma.approvalStep.updateMany({
      where: {
        workflowId,
        status: 'PENDING',
      },
      data: {
        status: 'REJECTED',
        comment,
        reviewedAt: new Date(),
      },
    });

    // Marquer le workflow comme rejeté
    await prisma.approvalWorkflow.update({
      where: { id: workflowId },
      data: {
        status: 'REJECTED',
        reviewedById: userId,
        reviewedAt: new Date(),
      },
    });

    // Notification email au créateur
    if (workflow.createdById) {
      try {
        const creator = await prisma.user.findUnique({ where: { id: workflow.createdById } });
        const reviewer = await prisma.user.findUnique({ where: { id: userId } });
        if (creator && creator.email) {
          EmailService.notifyRejection({
            to: creator.email,
            recipientName: `${creator.firstName} ${creator.lastName}`.trim(),
            resourceType: workflow.resourceType,
            title: workflow.comment || workflow.resourceType,
            reviewerName: reviewer ? `${reviewer.firstName} ${reviewer.lastName}`.trim() : 'Ultra Admin',
            reason: comment,
          }).catch(e => logger.warn('Email notify error', { error: e.message }));
        }
      } catch (e) {
        logger.warn('Failed to dispatch rejection notification email', { error: e.message });
      }
    }

    // Log d'audit
    await RbacService.createAuditLog({
      userId,
      action: 'approval.reject',
      module: 'Approval',
      resource: workflow.resourceType,
      resourceId: workflow.resourceId,
      result: 'REJECTED',
      metadata: { workflowId, comment },
    });

    return this.getApprovalWorkflow(workflowId);
  }

  static async cancelWorkflow(workflowId, userId) {
    const workflow = await prisma.approvalWorkflow.findUnique({
      where: { id: workflowId },
    });

    if (!workflow) {
      throw new NotFoundError('Workflow d\'approbation non trouvé');
    }

    if (workflow.status !== 'PENDING') {
      throw new BadRequestError('Ce workflow ne peut plus être annulé');
    }

    await prisma.approvalWorkflow.update({
      where: { id: workflowId },
      data: {
        status: 'CANCELLED',
        reviewedById: userId,
        reviewedAt: new Date(),
      },
    });

    // Log d'audit
    await RbacService.createAuditLog({
      userId,
      action: 'approval.cancel',
      module: 'Approval',
      resource: workflow.resourceType,
      resourceId: workflow.resourceId,
      result: 'CANCELLED',
      metadata: { workflowId },
    });

    return this.getApprovalWorkflow(workflowId);
  }

  static async executeApprovedAction(workflow) {
    // Publication de contenu approuvée : le statut suit automatiquement
    if (workflow.action === 'publish') {
      if (workflow.resourceType === 'Formation') {
        await prisma.formation.update({
          where: { id: workflow.resourceId },
          data: { status: 'PUBLISHED' },
        });
      } else if (workflow.resourceType === 'Job') {
        await prisma.job.update({
          where: { id: workflow.resourceId },
          data: { status: 'PUBLISHED' },
        });
      } else if (workflow.resourceType === 'Post' || workflow.resourceType === 'Blog') {
        await prisma.post.update({
          where: { id: workflow.resourceId },
          data: { status: 'PUBLISHED', publishedAt: new Date() },
        });
      }
    }
  }

  static async getPendingApprovalsForUser(userId) {
    const { permissions, adminRoles } = await RbacService.getUserAdminContext(userId);

    // ULTRA_ADMIN (bypass '*') voit toutes les demandes en attente
    if (permissions.includes('*')) {
      const workflows = await prisma.approvalWorkflow.findMany({
        where: { status: 'PENDING' },
        include: {
          createdBy: {
            select: { id: true, email: true, firstName: true, lastName: true },
          },
          steps: {
            where: { status: 'PENDING' },
          },
        },
        orderBy: { createdAt: 'desc' },
      });
      return workflows;
    }

    // Autres admins voient seulement les demandes liées à leurs rôles
    const workflows = await prisma.approvalWorkflow.findMany({
      where: {
        status: 'PENDING',
        steps: {
          some: {
            approverRole: { in: adminRoles },
            status: 'PENDING',
          },
        },
      },
      include: {
        createdBy: {
          select: { id: true, email: true, firstName: true, lastName: true },
        },
        steps: {
          where: { status: 'PENDING' },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    return workflows;
  }
}

module.exports = ApprovalService;
