/**
 * @file mentoring.js
 * @description Espace Mentor : binômes, formations animées, comptes rendus et messagerie.
 * Les droits (mentor, Présidence, animateur d'une formation) sont vérifiés par MentoringService.
 */

const express = require('express');
const { z } = require('zod');
const C = require('../controllers/mentoringController');
const { authenticate } = require('../middleware/auth');
const validate = require('../middleware/validate');

const router = express.Router();
router.use(authenticate);

const attachment = z.object({
  url: z.string().url().max(1000).refine((u) => /^https?:\/\//.test(u), 'Lien invalide'),
  name: z.string().min(1).max(200),
  mimeType: z.string().max(150).optional(),
  size: z.number().int().nonnegative().optional(),
});

const schemas = {
  mentorship: z.object({
    body: z.object({
      mentorId: z.string().min(1),
      menteeId: z.string().min(1).nullable().optional(),
      menteeName: z.string().max(150).optional(),
      menteeContact: z.string().max(200).nullable().optional(),
      goals: z.string().max(3000).nullable().optional(),
    }),
  }),
  mentorshipUpdate: z.object({
    body: z.object({
      goals: z.string().max(3000).nullable().optional(),
      menteeContact: z.string().max(200).nullable().optional(),
      status: z.enum(['ACTIVE', 'PAUSED', 'ENDED']).optional(),
    }),
  }),
  trainer: z.object({ body: z.object({ userId: z.string().min(1) }) }),
  registration: z.object({ body: z.object({ status: z.enum(['PENDING', 'CONFIRMED', 'ATTENDED', 'CANCELLED']) }) }),
  schedule: z.object({
    body: z.object({
      startDate: z.string().max(40).nullable().optional(),
      endDate: z.string().max(40).nullable().optional(),
      location: z.string().max(200).nullable().optional(),
    }),
  }),
  report: z.object({
    body: z.object({
      kind: z.enum(['MENTORAT', 'SESSION_FORMATION']),
      mentorshipId: z.string().nullable().optional(),
      formationId: z.string().nullable().optional(),
      title: z.string().max(200).optional(),
      content: z.record(z.any()).optional(),
      attachments: z.array(attachment).max(10).optional(),
    }),
  }),
  reportUpdate: z.object({
    body: z.object({
      title: z.string().max(200).optional(),
      content: z.record(z.any()).optional(),
      attachments: z.array(attachment).max(10).optional(),
    }),
  }),
  review: z.object({
    body: z.object({
      decision: z.enum(['VALIDATED', 'NEEDS_CHANGES']),
      comment: z.string().max(3000).nullable().optional(),
    }),
  }),
  message: z.object({
    body: z.object({
      threadUserId: z.string().nullable().optional(),
      body: z.string().min(1).max(4000),
    }),
  }),
};

router.get('/context', C.getContext);

router.get('/mentors', C.listMentors);
router.get('/members', C.searchMembers);
router.post('/mentorships', validate(schemas.mentorship), C.createMentorship);
router.put('/mentorships/:id', validate(schemas.mentorshipUpdate), C.updateMentorship);

router.post('/formations/:id/trainers', validate(schemas.trainer), C.assignTrainer);
router.delete('/formations/:id/trainers/:userId', C.removeTrainer);
router.get('/formations/:id/registrations', C.getRegistrations);
router.put('/formations/:id/schedule', validate(schemas.schedule), C.updateSchedule);
router.post('/formations/:id/visio/start', C.startVisio);
router.post('/formations/:id/visio/stop', C.stopVisio);
router.put('/registrations/:id', validate(schemas.registration), C.updateRegistration);

router.get('/reports', C.listReports);
router.post('/reports', validate(schemas.report), C.createReport);
router.get('/reports/:id', C.getReport);
router.put('/reports/:id', validate(schemas.reportUpdate), C.updateReport);
router.delete('/reports/:id', C.deleteReport);
router.post('/reports/:id/submit', C.submitReport);
router.post('/reports/:id/review', validate(schemas.review), C.reviewReport);

router.get('/threads', C.listThreads);
router.get('/messages', C.getMessages);
router.post('/messages', validate(schemas.message), C.sendMessage);

module.exports = router;
