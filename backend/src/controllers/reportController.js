const ReportService = require('../services/reportService');
const r2Storage = require('../services/r2StorageService');
const { BadRequestError } = require('../utils/errors');

const meta = (req) => ({ ipAddress: req.ip, userAgent: req.get('user-agent') });

class ReportController {
  static async getContext(req, res, next) {
    try {
      res.json({ success: true, data: await ReportService.getContext(req.user) });
    } catch (error) {
      next(error);
    }
  }

  static async getTemplates(req, res) {
    res.json({ success: true, data: ReportService.getTemplates() });
  }

  static async list(req, res, next) {
    try {
      const data = await ReportService.list(req.user, req.query);
      res.json({ success: true, data, pagination: { total: data.length } });
    } catch (error) {
      next(error);
    }
  }

  static async getById(req, res, next) {
    try {
      res.json({ success: true, data: await ReportService.getById(req.user, req.params.id) });
    } catch (error) {
      next(error);
    }
  }

  static async create(req, res, next) {
    try {
      const data = await ReportService.create(req.user, req.body);
      res.status(201).json({ success: true, message: 'Brouillon enregistré', data });
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      const data = await ReportService.update(req.user, req.params.id, req.body);
      res.json({ success: true, message: 'Rapport enregistré', data });
    } catch (error) {
      next(error);
    }
  }

  static async remove(req, res, next) {
    try {
      await ReportService.remove(req.user, req.params.id, meta(req));
      res.json({ success: true, message: 'Rapport supprimé' });
    } catch (error) {
      next(error);
    }
  }

  static async submit(req, res, next) {
    try {
      const data = await ReportService.submit(req.user, req.params.id, meta(req));
      const message = data.status === 'VALIDATED' ? 'Rapport enregistré et validé' : 'Rapport soumis à la Présidence';
      res.json({ success: true, message, data });
    } catch (error) {
      next(error);
    }
  }

  static async review(req, res, next) {
    try {
      const data = await ReportService.review(req.user, req.params.id, req.body, meta(req));
      const message = data.status === 'VALIDATED' ? 'Rapport validé' : 'Corrections demandées à l\'auteur';
      res.json({ success: true, message, data });
    } catch (error) {
      next(error);
    }
  }

  static async archive(req, res, next) {
    try {
      const data = await ReportService.setArchived(req.user, req.params.id, true, meta(req));
      res.json({ success: true, message: 'Rapport archivé', data });
    } catch (error) {
      next(error);
    }
  }

  static async unarchive(req, res, next) {
    try {
      const data = await ReportService.setArchived(req.user, req.params.id, false, meta(req));
      res.json({ success: true, message: 'Rapport restauré', data });
    } catch (error) {
      next(error);
    }
  }

  static async getSummary(req, res, next) {
    try {
      res.json({ success: true, data: await ReportService.getSummary(req.user, req.query) });
    } catch (error) {
      next(error);
    }
  }

  static async updatePositionSettings(req, res, next) {
    try {
      const data = await ReportService.updatePositionSettings(req.user, req.params.id, req.body, meta(req));
      res.json({ success: true, message: 'Paramètres du poste mis à jour', data });
    } catch (error) {
      next(error);
    }
  }

  static async uploadAttachment(req, res, next) {
    try {
      if (!req.file) throw new BadRequestError('Aucun fichier sélectionné');
      const result = await r2Storage.uploadFile({
        buffer: req.file.buffer,
        originalName: req.file.originalname,
        mimeType: req.file.mimetype,
        folder: 'rapports',
      });
      res.json({
        success: true,
        data: {
          url: result.url,
          name: req.file.originalname.slice(0, 200),
          mimeType: req.file.mimetype,
          size: req.file.size,
        },
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ReportController;
