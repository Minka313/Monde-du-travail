const OpportunityService = require('../services/opportunityService');
const AuditService = require('../services/auditService');
const RbacService = require('../services/rbacService');
const OpportunityAlertService = require('../services/opportunityAlertService');

function audit(req, action, opportunity, result) {
  return AuditService.log({
    userId: req.user.id,
    action: `opportunite.${action}`,
    module: 'opportunite',
    resource: 'Opportunity',
    resourceId: opportunity.id,
    ipAddress: req.ip,
    userAgent: req.get('user-agent'),
    result,
    metadata: { title: opportunity.title },
  });
}

class OpportunityController {
  // Liste publique : annonces publiées, filtrables
  static async getPublished(req, res, next) {
    try {
      res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');
      const data = await OpportunityService.getPublished(req.query);
      res.json({ success: true, data });
    } catch (error) {
      next(error);
    }
  }

  static async getForAdmin(req, res, next) {
    try {
      const data = await OpportunityService.getForAdmin(req.query);
      res.json({ success: true, data, pagination: { total: data.length } });
    } catch (error) {
      next(error);
    }
  }

  static async getById(req, res, next) {
    try {
      const opportunity = await OpportunityService.getBySlugOrId(req.params.id);

      // Une annonce non publiée n'est visible que des administrateurs du module
      if (opportunity.status !== 'PUBLISHED') {
        let canRead = false;
        if (req.user) {
          const { permissions } = await RbacService.getUserAdminContext(req.user.id);
          canRead = req.user.role === 'ULTRA_ADMIN' || permissions.includes('*') || permissions.includes('opportunite.read');
        }
        if (!canRead) {
          return res.status(404).json({ success: false, message: 'Annonce non trouvée' });
        }
      }

      res.json({ success: true, data: opportunity });
    } catch (error) {
      next(error);
    }
  }

  static async create(req, res, next) {
    try {
      const opportunity = await OpportunityService.create(req.body, req.user.id);
      await audit(req, 'create', opportunity);
      res.status(201).json({ success: true, message: 'Annonce créée (brouillon)', data: opportunity });
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      const opportunity = await OpportunityService.update(req.params.id, req.body);
      await audit(req, 'update', opportunity);
      res.json({ success: true, message: 'Annonce mise à jour', data: opportunity });
    } catch (error) {
      next(error);
    }
  }

  static async publish(req, res, next) {
    try {
      const opportunity = await OpportunityService.publish(req.params.id);
      await audit(req, 'publish', opportunity, 'PUBLISHED');
      res.json({ success: true, message: 'Annonce publiée', data: opportunity });
    } catch (error) {
      next(error);
    }
  }

  static async unpublish(req, res, next) {
    try {
      const opportunity = await OpportunityService.unpublish(req.params.id);
      await audit(req, 'unpublish', opportunity, 'DRAFT');
      res.json({ success: true, message: 'Annonce dépubliée', data: opportunity });
    } catch (error) {
      next(error);
    }
  }

  static async archive(req, res, next) {
    try {
      const opportunity = await OpportunityService.archive(req.params.id);
      await audit(req, 'archive', opportunity, 'ARCHIVED');
      res.json({ success: true, message: 'Annonce archivée', data: opportunity });
    } catch (error) {
      next(error);
    }
  }

  static async duplicate(req, res, next) {
    try {
      const opportunity = await OpportunityService.duplicate(req.params.id, req.user.id);
      await audit(req, 'create', opportunity);
      res.status(201).json({ success: true, message: 'Nouvelle session créée en brouillon', data: opportunity });
    } catch (error) {
      next(error);
    }
  }

  static async subscribeAlert(req, res, next) {
    try {
      const { status } = await OpportunityAlertService.subscribe(req.params.id, req.body.email);
      const message = status === 'ALREADY'
        ? 'Cette adresse suit déjà cette annonce.'
        : 'Presque fini ! Ouvre l\'e-mail que nous venons d\'envoyer et clique sur le lien pour confirmer ton alerte.';
      res.status(status === 'ALREADY' ? 200 : 201).json({ success: true, message, data: { status } });
    } catch (error) {
      next(error);
    }
  }

  static async confirmAlert(req, res, next) {
    try {
      const data = await OpportunityAlertService.confirm(req.body.token);
      res.json({ success: true, message: 'Alerte confirmée : tu seras prévenu(e) par e-mail.', data });
    } catch (error) {
      next(error);
    }
  }

  static async unsubscribeAlert(req, res, next) {
    try {
      const data = await OpportunityAlertService.unsubscribe(req.body.token);
      res.json({ success: true, message: 'C\'est noté : tu ne recevras plus d\'alertes pour cette annonce.', data });
    } catch (error) {
      next(error);
    }
  }

  static async createReport(req, res, next) {
    try {
      await OpportunityService.createReport(req.params.id, req.body);
      res.status(201).json({ success: true, message: "Merci ! Le signalement a été transmis à l'équipe du club." });
    } catch (error) {
      next(error);
    }
  }

  // Déclenché chaque heure par la veille du site (GitHub Actions) ; sans effet si rien n'est dû
  static async runSessionReminders(req, res, next) {
    try {
      const sessions = await OpportunityService.sendSessionReminders();
      const alerts = await OpportunityAlertService.sendDueAlerts();
      res.json({ success: true, data: { sessions, alerts } });
    } catch (error) {
      next(error);
    }
  }

  static async listReports(req, res, next) {
    try {
      const status = req.query.status === 'ALL' ? null : (req.query.status === 'RESOLVED' ? 'RESOLVED' : 'OPEN');
      const data = await OpportunityService.listReports({ status });
      res.json({ success: true, data });
    } catch (error) {
      next(error);
    }
  }

  static async resolveReport(req, res, next) {
    try {
      const report = await OpportunityService.resolveReport(req.params.reportId);
      await AuditService.log({
        userId: req.user.id,
        action: 'opportunite.report.resolve',
        module: 'opportunite',
        resource: 'OpportunityReport',
        resourceId: report.id,
        ipAddress: req.ip,
        userAgent: req.get('user-agent'),
        result: 'RESOLVED',
      });
      res.json({ success: true, message: 'Signalement traité', data: report });
    } catch (error) {
      next(error);
    }
  }

  static async remove(req, res, next) {
    try {
      const opportunity = await OpportunityService.getById(req.params.id);
      await OpportunityService.remove(req.params.id);
      await audit(req, 'delete', opportunity);
      res.json({ success: true, message: 'Annonce supprimée' });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = OpportunityController;
