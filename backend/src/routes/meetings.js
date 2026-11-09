/**
 * @file meetings.js
 * @description Réunions en visio du club (bureau, mentors, adhérents, personnes choisies). Droits : MeetingService.
 */
const express = require('express');
const { z } = require('zod');
const { authenticate } = require('../middleware/auth');
const validate = require('../middleware/validate');
const Meetings = require('../services/meetingService');

const router = express.Router();
router.use(authenticate);

const wrap = (fn, status = 200, message) => async (req, res, next) => {
  try { res.status(status).json({ success: true, ...(message ? { message } : {}), data: await fn(req) }); } catch (error) { next(error); }
};
const meta = (req) => ({ ipAddress: req.ip, userAgent: req.get('user-agent') });

const body = z.object({
  title: z.string().trim().min(3, 'Donne un titre à la réunion').max(120),
  description: z.string().trim().max(1500).nullable().optional(),
  startsAt: z.string().max(40),
  durationMinutes: z.number().int().min(15).max(480).optional(),
  audiences: z.array(z.enum(['BUREAU', 'MENTORS', 'MEMBERS'])).max(3).optional(),
  inviteeIds: z.array(z.string().max(40)).max(200).optional(),
}).strict();

router.get('/context', wrap((req) => Meetings.context(req.user)));
router.get('/people', wrap((req) => Meetings.people(req.user, { search: req.query.search })));
router.get('/', wrap((req) => Meetings.list(req.user)));
router.post('/', validate(z.object({ body })), wrap((req) => Meetings.create(req.user, req.body, meta(req)), 201, 'Réunion planifiée : les invités sont prévenus'));
router.put('/:id', validate(z.object({ body: body.partial() })), wrap((req) => Meetings.update(req.user, req.params.id, req.body, meta(req))));
router.delete('/:id', wrap((req) => Meetings.cancel(req.user, req.params.id, meta(req)), 200, 'Réunion annulée : les invités sont prévenus'));

router.post('/:id/remind', wrap((req) => Meetings.remind(req.user, req.params.id, meta(req)), 200, 'Rappel envoyé aux invités'));
router.get('/:id/visio', wrap((req) => Meetings.getVisio(req.user, req.params.id)));
router.post('/:id/visio/start', wrap((req) => Meetings.setVisio(req.user, req.params.id, true)));
router.post('/:id/visio/stop', wrap((req) => Meetings.setVisio(req.user, req.params.id, false)));
router.post('/:id/visio/join', wrap((req) => Meetings.join(req.user, req.params.id, req.body?.name)));

module.exports = router;
