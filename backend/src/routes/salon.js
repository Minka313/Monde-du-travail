/**
 * @file salon.js
 * @description Salon des membres : discussion réservée aux adhérents (visiteurs exclus, voir SalonService).
 */
const express = require('express');
const multer = require('multer');
const { z } = require('zod');
const { authenticate } = require('../middleware/auth');
const validate = require('../middleware/validate');
const Salon = require('../services/salonService');
const { BadRequestError } = require('../utils/errors');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 5 * 1024 * 1024, files: 1 } });
router.use(authenticate);

const wrap = (fn, status = 200) => async (req, res, next) => {
  try {
    const data = await fn(req);
    res.status(status).json({ success: true, data });
  } catch (error) { next(error); }
};
const meta = (req) => ({ ipAddress: req.ip, userAgent: req.get('user-agent') });
const bodySchema = (shape) => validate(z.object({ body: z.object(shape).strict() }));

router.get('/unread', wrap((req) => Salon.unreadTotal(req.user)));
router.get('/channels', wrap((req) => Salon.listChannels(req.user)));
router.post('/upload', (req, res, next) => {
  upload.single('file')(req, res, (err) => {
    if (err) return next(err.code === 'LIMIT_FILE_SIZE' ? new BadRequestError('Fichier trop lourd (5 Mo maximum)') : err);
    next();
  });
}, wrap((req) => Salon.upload(req.user, req.file), 201));
router.get('/candidates', wrap((req) => Salon.candidates(req.user, { search: req.query.search })));
router.post('/channels', bodySchema({
  name: z.string().trim().min(2).max(60),
  description: z.string().trim().max(200).optional(),
  icon: z.string().max(8).optional(),
  staffOnlyPost: z.boolean().optional(),
  isPrivate: z.boolean().optional(),
  memberIds: z.array(z.string().max(40)).max(300).optional(),
}), wrap((req) => Salon.createChannel(req.user, req.body), 201));
router.patch('/channels/:id', bodySchema({
  name: z.string().trim().min(2).max(60).optional(),
  description: z.string().trim().max(200).nullable().optional(),
  icon: z.string().max(8).optional(),
  staffOnlyPost: z.boolean().optional(),
  isArchived: z.boolean().optional(),
}), wrap((req) => Salon.updateChannel(req.user, req.params.id, req.body)));

router.get('/channels/:id/people', wrap((req) => Salon.people(req.user, req.params.id)));
router.get('/channels/:id/members', wrap((req) => Salon.getMembers(req.user, req.params.id)));
router.put('/channels/:id/members', bodySchema({ userIds: z.array(z.string().max(40)).max(300) }), wrap((req) => Salon.setMembers(req.user, req.params.id, req.body.userIds)));
router.get('/channels/:id/messages', wrap((req) => Salon.listMessages(req.user, req.params.id, { after: req.query.after, before: req.query.before })));
router.post('/channels/:id/messages', bodySchema({
  body: z.string().max(5000),
  replyToId: z.string().max(40).nullable().optional(),
  mentionIds: z.array(z.string().max(40)).max(10).optional(),
  attachments: z.array(z.object({
    url: z.string().max(1000), name: z.string().max(200), mimeType: z.string().max(100), size: z.number().optional(),
  }).strict()).max(4).optional(),
}), wrap((req) => Salon.post(req.user, req.params.id, req.body), 201));
router.post('/channels/:id/read', wrap((req) => Salon.markRead(req.user, req.params.id)));

router.patch('/messages/:id', bodySchema({ body: z.string().max(5000) }), wrap((req) => Salon.edit(req.user, req.params.id, req.body.body)));
router.delete('/messages/:id', wrap((req) => Salon.remove(req.user, req.params.id, meta(req))));

module.exports = router;
