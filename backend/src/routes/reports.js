/**
 * @file reports.js
 * @description Rapports d'activité des postes du bureau (espace personnel et Présidence).
 * Les droits de lecture sont calculés par ReportService à partir des affectations.
 */

const express = require('express');
const multer = require('multer');
const { z } = require('zod');
const ReportController = require('../controllers/reportController');
const ReportService = require('../services/reportService');
const { authenticate, authorizeUltraAdmin } = require('../middleware/auth');
const validate = require('../middleware/validate');
const { BadRequestError, ForbiddenError } = require('../utils/errors');
const prisma = require('../config/database');

const router = express.Router();
router.use(authenticate);

const ATTACHMENT_TYPES = [
  'application/pdf',
  'image/jpeg',
  'image/png',
  'image/webp',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
];

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (req, file, cb) => (ATTACHMENT_TYPES.includes(file.mimetype)
    ? cb(null, true)
    : cb(new BadRequestError('Formats acceptés : PDF, images, Word, Excel'))),
});

const attachmentSchema = z.object({
  url: z.string().url().max(1000).refine((u) => /^https?:\/\//.test(u), 'Lien invalide'),
  name: z.string().min(1).max(200),
  mimeType: z.string().max(150).optional(),
  size: z.number().int().nonnegative().optional(),
});

const reportBody = {
  title: z.string().max(200).optional(),
  periodKey: z.string().max(10).nullable().optional(),
  content: z.record(z.any()).optional(),
  attachments: z.array(attachmentSchema).max(10).optional(),
};

const createSchema = z.object({ body: z.object({ positionId: z.string().min(1), ...reportBody }) });
const updateSchema = z.object({ body: z.object(reportBody) });
const reviewSchema = z.object({
  body: z.object({
    decision: z.enum(['VALIDATED', 'NEEDS_CHANGES']),
    comment: z.string().max(3000).optional().nullable(),
  }),
});
const settingsSchema = z.object({
  body: z.object({
    reportFrequency: z.enum(ReportService.FREQUENCIES).optional(),
    reportDueDays: z.number().int().min(0).max(90).optional(),
    reportTemplate: z.string().max(50).nullable().optional(),
    seesAllReports: z.boolean().optional(),
    reportsToId: z.string().nullable().optional(),
  }),
});

// Téléversement réservé aux membres du bureau et aux mentors (comptes rendus)
async function requireBureauMember(req, res, next) {
  try {
    if (req.user.role === 'ULTRA_ADMIN' || (req.user.adminRoles || []).includes('MENTOR_EXPERT')) return next();
    const count = await prisma.clubAssignment.count({ where: { userId: req.user.id, isActive: true } });
    return count ? next() : next(new ForbiddenError('Espace réservé aux membres du bureau'));
  } catch (error) {
    return next(error);
  }
}

router.get('/context', ReportController.getContext);
router.get('/templates', ReportController.getTemplates);
router.get('/summary', ReportController.getSummary);
router.put('/positions/:id/settings', authorizeUltraAdmin, validate(settingsSchema), ReportController.updatePositionSettings);

router.post('/attachments', requireBureauMember, (req, res, next) => {
  upload.single('file')(req, res, (err) => {
    if (err instanceof multer.MulterError && err.code === 'LIMIT_FILE_SIZE') {
      return next(new BadRequestError('Le fichier dépasse 10 Mo'));
    }
    return next(err);
  });
}, ReportController.uploadAttachment);

router.get('/', ReportController.list);
router.post('/', validate(createSchema), ReportController.create);
router.get('/:id', ReportController.getById);
router.put('/:id', validate(updateSchema), ReportController.update);
router.delete('/:id', ReportController.remove);
router.post('/:id/submit', ReportController.submit);
router.post('/:id/review', validate(reviewSchema), ReportController.review);

module.exports = router;
