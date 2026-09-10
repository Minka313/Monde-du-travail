const jobService = require('../services/jobService');
const AuditService = require('../services/auditService');
const ApprovalService = require('../services/approvalService');
const RbacService = require('../services/rbacService');
const { BadRequestError } = require('../utils/errors');

class JobController {
  // Liste publique : uniquement le contenu publié
  static async getPublishedJobs(req, res, next) {
    try {
      const filter = req.query.category || req.query.domain || req.query.search ? req.query : undefined;
      const jobs = await jobService.getPublishedJobs(filter);
      res.json({ success: true, data: jobs });
    } catch (error) {
      next(error);
    }
  }

  // Liste des domaines existants
  static async getDomains(req, res, next) {
    try {
      const domains = await jobService.getDomains();
      res.json({ success: true, data: domains });
    } catch (error) {
      next(error);
    }
  }

  // Liste admin avec filtres (statut, « mes créations », recherche)
  static async getJobsForAdmin(req, res, next) {
    try {
      const result = await jobService.getJobsForAdmin({
        ...req.query,
        userId: req.user.id,
      });
      res.json({ success: true, data: result.jobs, pagination: result.pagination });
    } catch (error) {
      next(error);
    }
  }

  static async getJobById(req, res, next) {
    try {
      const job = await jobService.getJobById(req.params.id);

      // Le contenu non publié n'est pas exposé publiquement
      if (job.status !== 'PUBLISHED') {
        let canRead = false;
        if (req.user) {
          const { permissions } = await RbacService.getUserAdminContext(req.user.id);
          canRead = permissions.includes('*') || permissions.includes('metier.read');
        }
        if (!canRead) {
          return res.status(404).json({
            success: false,
            message: 'Métier non trouvé',
          });
        }
      }

      res.json({ success: true, data: job });
    } catch (error) {
      next(error);
    }
  }

  static async createJob(req, res, next) {
    try {
      const job = await jobService.createJob(req.body, req.user.id);

      await AuditService.log({
        userId: req.user.id,
        action: 'metier.create',
        module: 'metier',
        resource: 'Job',
        resourceId: job.id,
        ipAddress: req.ip,
        userAgent: req.get('user-agent'),
        metadata: { title: job.title },
      });

      res.status(201).json({ success: true, message: 'Métier créé (brouillon)', data: job });
    } catch (error) {
      next(error);
    }
  }

  static async updateJob(req, res, next) {
    try {
      const job = await jobService.updateJob(req.params.id, req.body);

      await AuditService.log({
        userId: req.user.id,
        action: 'metier.update',
        module: 'metier',
        resource: 'Job',
        resourceId: job.id,
        ipAddress: req.ip,
        userAgent: req.get('user-agent'),
        metadata: { title: job.title },
      });

      res.json({ success: true, message: 'Métier mis à jour', data: job });
    } catch (error) {
      next(error);
    }
  }

  // Soumettre à validation : PENDING_REVIEW + création du workflow d'approbation
  static async submitJob(req, res, next) {
    try {
      const job = await jobService.submitJob(req.params.id);

      try {
        await ApprovalService.createApprovalRequest({
          resourceType: 'Job',
          resourceId: job.id,
          action: 'publish',
          createdById: req.user.id,
          comment: `Publication du métier « ${job.title} »`,
        });
      } catch (error) {
        if (!(error instanceof BadRequestError)) throw error;
        // Une demande existe déjà : la soumission reste valide
      }

      await AuditService.log({
        userId: req.user.id,
        action: 'metier.submit',
        module: 'metier',
        resource: 'Job',
        resourceId: job.id,
        ipAddress: req.ip,
        userAgent: req.get('user-agent'),
        result: 'PENDING',
        metadata: { title: job.title },
      });

      res.json({ success: true, message: 'Métier soumis à validation', data: job });
    } catch (error) {
      next(error);
    }
  }

  static async publishJob(req, res, next) {
    try {
      const job = await jobService.publishJob(req.params.id);

      await AuditService.log({
        userId: req.user.id,
        action: 'metier.publish',
        module: 'metier',
        resource: 'Job',
        resourceId: job.id,
        ipAddress: req.ip,
        userAgent: req.get('user-agent'),
        result: 'PUBLISHED',
        metadata: { title: job.title },
      });

      res.json({ success: true, message: 'Métier publié', data: job });
    } catch (error) {
      next(error);
    }
  }

  static async unpublishJob(req, res, next) {
    try {
      const job = await jobService.unpublishJob(req.params.id);

      await AuditService.log({
        userId: req.user.id,
        action: 'metier.unpublish',
        module: 'metier',
        resource: 'Job',
        resourceId: job.id,
        ipAddress: req.ip,
        userAgent: req.get('user-agent'),
        result: 'DRAFT',
        metadata: { title: job.title },
      });

      res.json({ success: true, message: 'Métier dépublié', data: job });
    } catch (error) {
      next(error);
    }
  }

  static async archiveJob(req, res, next) {
    try {
      const job = await jobService.archiveJob(req.params.id);

      await AuditService.log({
        userId: req.user.id,
        action: 'metier.archive',
        module: 'metier',
        resource: 'Job',
        resourceId: job.id,
        ipAddress: req.ip,
        userAgent: req.get('user-agent'),
        result: 'ARCHIVED',
        metadata: { title: job.title },
      });

      res.json({ success: true, message: 'Métier archivé', data: job });
    } catch (error) {
      next(error);
    }
  }

  static async deleteJob(req, res, next) {
    try {
      const job = await jobService.getJobById(req.params.id);
      await jobService.deleteJob(req.params.id);

      await AuditService.log({
        userId: req.user.id,
        action: 'metier.delete',
        module: 'metier',
        resource: 'Job',
        resourceId: req.params.id,
        ipAddress: req.ip,
        userAgent: req.get('user-agent'),
        metadata: { title: job.title },
      });

      res.json({ success: true, message: 'Métier supprimé' });
    } catch (error) {
      next(error);
    }
  }

  // Suppression massive : action critique (double confirmation par mot de passe)
  static async bulkDeleteJobs(req, res, next) {
    try {
      const { ids } = req.body;
      const deleted = await jobService.deleteJobs(ids);

      await AuditService.log({
        userId: req.user.id,
        action: 'metier.bulkDelete',
        module: 'metier',
        resource: 'Job',
        ipAddress: req.ip,
        userAgent: req.get('user-agent'),
        result: `DELETED_${deleted}`,
        metadata: { ids, count: deleted },
      });

      res.json({ success: true, message: `${deleted} métier(s) supprimé(s)`, data: { deleted } });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = JobController;
