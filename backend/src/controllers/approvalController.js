const approvalService = require('../services/approvalService');

class ApprovalController {
  static async createApprovalRequest(req, res, next) {
    try {
      const workflow = await approvalService.createApprovalRequest({
        ...req.body,
        createdById: req.user.id,
      });

      res.status(201).json({
        success: true,
        message: 'Demande d\'approbation créée',
        data: workflow,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getApprovalWorkflow(req, res, next) {
    try {
      const workflow = await approvalService.getApprovalWorkflow(req.params.id);
      res.json({
        success: true,
        data: workflow,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getAllApprovalWorkflows(req, res, next) {
    try {
      const { status, resourceType, page = 1, limit = 20 } = req.query;
      const result = await approvalService.getAllApprovalWorkflows({
        status,
        resourceType,
        page,
        limit,
      });

      res.json({
        success: true,
        data: result.workflows,
        pagination: result.pagination,
      });
    } catch (error) {
      next(error);
    }
  }

  static async approveWorkflow(req, res, next) {
    try {
      const workflow = await approvalService.approveWorkflow(
        req.params.id,
        req.user.id,
        req.body.comment
      );

      res.json({
        success: true,
        message: 'Workflow approuvé',
        data: workflow,
      });
    } catch (error) {
      next(error);
    }
  }

  static async rejectWorkflow(req, res, next) {
    try {
      const workflow = await approvalService.rejectWorkflow(
        req.params.id,
        req.user.id,
        req.body.comment
      );

      res.json({
        success: true,
        message: 'Workflow rejeté',
        data: workflow,
      });
    } catch (error) {
      next(error);
    }
  }

  static async cancelWorkflow(req, res, next) {
    try {
      const workflow = await approvalService.cancelWorkflow(req.params.id, req.user.id);
      res.json({
        success: true,
        message: 'Workflow annulé',
        data: workflow,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getPendingApprovals(req, res, next) {
    try {
      const workflows = await approvalService.getPendingApprovalsForUser(req.user.id);
      res.json({
        success: true,
        data: workflows,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ApprovalController;
