const express = require('express');
const router = express.Router();
const multer = require('multer');
const { authenticate } = require('../middleware/auth');
const AdminApprovalMiddleware = require('../middleware/adminApproval');
const r2Storage = require('../services/r2StorageService');
const { BadRequestError } = require('../utils/errors');
const logger = require('../utils/logger');

// Configuration Multer en mémoire RAM (indispensable pour Vercel / Serverless)
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10 Mo max
  },
  fileFilter: (req, file, cb) => {
    const allowedMimeTypes = [
      'image/jpeg',
      'image/png',
      'image/webp',
      'image/gif',
      'image/svg+xml',
      'application/pdf',
    ];

    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new BadRequestError('Type de fichier non autorisé. Formats acceptés : JPEG, PNG, WebP, GIF, SVG, PDF.'));
    }
  },
});

/**
 * Route POST /api/upload
 * Téléversement d'un fichier média ou document vers Cloudflare R2 avec bouclier CDN
 */
router.post(
  '/',
  authenticate,
  AdminApprovalMiddleware.middleware,
  (req, res, next) => {
    upload.single('file')(req, res, (err) => {
      if (err) {
        if (err instanceof multer.MulterError && err.code === 'LIMIT_FILE_SIZE') {
          return next(new BadRequestError('La taille du fichier dépasse la limite maximale de 10 Mo.'));
        }
        return next(err);
      }
      next();
    });
  },
  async (req, res, next) => {
    try {
      if (!req.file) {
        throw new BadRequestError('Aucun fichier sélectionné pour le téléversement.');
      }

      const folder = String(req.body.folder || 'metiers').replace(/[^a-zA-Z0-9_-]/g, '');

      const result = await r2Storage.uploadFile({
        buffer: req.file.buffer,
        originalName: req.file.originalname,
        mimeType: req.file.mimetype,
        folder: folder,
      });

      logger.info(`[UploadAPI] Fichier téléversé par utilisateur ${req.user?.id || 'admin'}: ${result.url}`);

      return res.status(200).json({
        success: true,
        message: 'Fichier téléversé avec succès sur Cloudflare R2',
        data: {
          url: result.url,
          key: result.key,
          size: result.size,
          mimeType: result.mimeType,
          simulated: Boolean(result.simulated),
        },
      });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
