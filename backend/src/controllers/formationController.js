const formationService = require('../services/formationService');
const AuditService = require('../services/auditService');
const ApprovalService = require('../services/approvalService');
const RbacService = require('../services/rbacService');
const { BadRequestError } = require('../utils/errors');

class FormationController {
  // Liste publique : uniquement le contenu publié
  static async getPublishedFormations(req, res, next) {
    try {
      const formations = await formationService.getPublishedFormations(req.query.category);
      res.json({ success: true, data: formations });
    } catch (error) {
      next(error);
    }
  }

  // Liste admin avec filtres (statut, « mes créations », recherche)
  static async getFormationsForAdmin(req, res, next) {
    try {
      const result = await formationService.getFormationsForAdmin({
        ...req.query,
        userId: req.user.id,
      });
      res.json({ success: true, data: result.formations, pagination: result.pagination });
    } catch (error) {
      next(error);
    }
  }

  static async getFormationById(req, res, next) {
    try {
      const formation = await formationService.getFormationById(req.params.id);

      // Le contenu non publié n'est pas exposé publiquement
      if (formation.status !== 'PUBLISHED') {
        let canRead = false;
        if (req.user) {
          const { permissions } = await RbacService.getUserAdminContext(req.user.id);
          canRead = permissions.includes('*') || permissions.includes('formation.read');
        }
        if (!canRead) {
          return res.status(404).json({
            success: false,
            message: 'Formation non trouvée',
          });
        }
      }

      res.json({ success: true, data: formation });
    } catch (error) {
      next(error);
    }
  }

  static async createFormation(req, res, next) {
    try {
      const formation = await formationService.createFormation(req.body, req.user.id);

      await AuditService.log({
        userId: req.user.id,
        action: 'formation.create',
        module: 'formation',
        resource: 'Formation',
        resourceId: formation.id,
        ipAddress: req.ip,
        userAgent: req.get('user-agent'),
        metadata: { title: formation.title },
      });

      res.status(201).json({ success: true, message: 'Formation créée (brouillon)', data: formation });
    } catch (error) {
      next(error);
    }
  }

  static async updateFormation(req, res, next) {
    try {
      const formation = await formationService.updateFormation(req.params.id, req.body);

      await AuditService.log({
        userId: req.user.id,
        action: 'formation.update',
        module: 'formation',
        resource: 'Formation',
        resourceId: formation.id,
        ipAddress: req.ip,
        userAgent: req.get('user-agent'),
        metadata: { title: formation.title },
      });

      res.json({ success: true, message: 'Formation mise à jour', data: formation });
    } catch (error) {
      next(error);
    }
  }

  // Soumettre à validation : PENDING_REVIEW + création du workflow d'approbation
  static async submitFormation(req, res, next) {
    try {
      const formation = await formationService.submitFormation(req.params.id);

      try {
        await ApprovalService.createApprovalRequest({
          resourceType: 'Formation',
          resourceId: formation.id,
          action: 'publish',
          createdById: req.user.id,
          comment: `Publication de la formation « ${formation.title} »`,
        });
      } catch (error) {
        if (!(error instanceof BadRequestError)) throw error;
        // Une demande existe déjà : la soumission reste valide
      }

      await AuditService.log({
        userId: req.user.id,
        action: 'formation.submit',
        module: 'formation',
        resource: 'Formation',
        resourceId: formation.id,
        ipAddress: req.ip,
        userAgent: req.get('user-agent'),
        result: 'PENDING',
        metadata: { title: formation.title },
      });

      res.json({ success: true, message: 'Formation soumise à validation', data: formation });
    } catch (error) {
      next(error);
    }
  }

  static async publishFormation(req, res, next) {
    try {
      const formation = await formationService.publishFormation(req.params.id);

      await AuditService.log({
        userId: req.user.id,
        action: 'formation.publish',
        module: 'formation',
        resource: 'Formation',
        resourceId: formation.id,
        ipAddress: req.ip,
        userAgent: req.get('user-agent'),
        result: 'PUBLISHED',
        metadata: { title: formation.title },
      });

      res.json({ success: true, message: 'Formation publiée', data: formation });
    } catch (error) {
      next(error);
    }
  }

  static async unpublishFormation(req, res, next) {
    try {
      const formation = await formationService.unpublishFormation(req.params.id);

      await AuditService.log({
        userId: req.user.id,
        action: 'formation.unpublish',
        module: 'formation',
        resource: 'Formation',
        resourceId: formation.id,
        ipAddress: req.ip,
        userAgent: req.get('user-agent'),
        result: 'DRAFT',
        metadata: { title: formation.title },
      });

      res.json({ success: true, message: 'Formation dépubliée', data: formation });
    } catch (error) {
      next(error);
    }
  }

  static async archiveFormation(req, res, next) {
    try {
      const formation = await formationService.archiveFormation(req.params.id);

      await AuditService.log({
        userId: req.user.id,
        action: 'formation.archive',
        module: 'formation',
        resource: 'Formation',
        resourceId: formation.id,
        ipAddress: req.ip,
        userAgent: req.get('user-agent'),
        result: 'ARCHIVED',
        metadata: { title: formation.title },
      });

      res.json({ success: true, message: 'Formation archivée', data: formation });
    } catch (error) {
      next(error);
    }
  }

  static async deleteFormation(req, res, next) {
    try {
      const formation = await formationService.getFormationById(req.params.id);
      await formationService.deleteFormation(req.params.id);

      await AuditService.log({
        userId: req.user.id,
        action: 'formation.delete',
        module: 'formation',
        resource: 'Formation',
        resourceId: req.params.id,
        ipAddress: req.ip,
        userAgent: req.get('user-agent'),
        metadata: { title: formation.title },
      });

      res.json({ success: true, message: 'Formation supprimée' });
    } catch (error) {
      next(error);
    }
  }

  // Suppression massive : action critique (double confirmation par mot de passe)
  static async bulkDeleteFormations(req, res, next) {
    try {
      const { ids } = req.body;
      const deleted = await formationService.deleteFormations(ids);

      await AuditService.log({
        userId: req.user.id,
        action: 'formation.bulkDelete',
        module: 'formation',
        resource: 'Formation',
        ipAddress: req.ip,
        userAgent: req.get('user-agent'),
        result: `DELETED_${deleted}`,
        metadata: { ids, count: deleted },
      });

      res.json({ success: true, message: `${deleted} formation(s) supprimée(s)`, data: { deleted } });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = FormationController;
