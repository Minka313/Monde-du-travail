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
  mentorRequest: z.object({
    body: z.object({
      goals: z.string().trim().min(10, 'Explique en quelques mots ce que tu attends (10 caractères minimum)').max(2000),
      domain: z.string().trim().max(150).nullable().optional(),
      format: z.string().max(40).nullable().optional(),
      availability: z.string().trim().max(300).nullable().optional(),
    }).strict(),
  }),
  session: z.object({
    body: z.object({
      scheduledAt: z.string().min(10).max(40),
      durationMinutes: z.number().int().min(15).max(240).optional(),
      format: z.enum(['Visio du club', 'Présentiel', 'Téléphone', 'WhatsApp', 'Autre lien']),
      place: z.string().trim().max(300).nullable().optional(),
      topic: z.string().trim().max(300).nullable().optional(),
    }).strict(),
  }),
  sessionUpdate: z.object({
    body: z.object({
      scheduledAt: z.string().min(10).max(40).optional(),
      durationMinutes: z.number().int().min(15).max(240).optional(),
      format: z.enum(['Visio du club', 'Présentiel', 'Téléphone', 'WhatsApp', 'Autre lien']).optional(),
      place: z.string().trim().max(300).nullable().optional(),
      topic: z.string().trim().max(300).nullable().optional(),
      status: z.enum(['PLANNED', 'DONE', 'CANCELLED']).optional(),
    }).strict(),
  }),
  applicationDecision: z.object({ body: z.object({ decision: z.enum(['ACCEPTED', 'DECLINED']), response: z.string().trim().max(1500).nullable().optional() }).strict() }),
  declineRequest: z.object({ body: z.object({ response: z.string().trim().min(5, 'Explique ta réponse').max(1500) }).strict() }),
  suggestion: z.object({
    body: z.object({
      targetType: z.enum(['formation', 'job']),
      targetId: z.string().regex(/^[A-Za-z0-9_-]{1,120}$/),
      targetTitle: z.string().trim().min(2).max(200).optional(),
      kind: z.enum(['ERREUR', 'MISE_A_JOUR', 'AJOUT', 'AUTRE']),
      section: z.string().trim().max(150).nullable().optional(),
      message: z.string().trim().min(10, 'Décris le problème en quelques mots (10 caractères minimum)').max(3000),
      proposal: z.string().trim().max(5000).nullable().optional(),
    }).strict(),
  }),
  resolveSuggestion: z.object({ body: z.object({ status: z.enum(['APPLIED', 'REJECTED']), response: z.string().trim().max(1500).nullable().optional() }).strict() }),
  mentorship: z.object({
    body: z.object({
      mentorId: z.string().min(1),
      requestId: z.string().min(1).nullable().optional(),
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

// Séances planifiées d'un binôme (mentor du binôme ou Présidence) et salle visio de la séance
router.post('/mentorships/:id/sessions', validate(schemas.session), C.createSession);
router.put('/sessions/:id', validate(schemas.sessionUpdate), C.updateSession);
router.get('/sessions/:id/visio', C.getSessionVisio);
router.post('/sessions/:id/visio/start', C.startSessionVisio);
router.post('/sessions/:id/visio/stop', C.stopSessionVisio);
router.post('/sessions/:id/visio/join', C.joinSessionVisio);

// Candidatures « Devenir mentor » (Présidence) ; le dépôt est public : routes/mentorApplications.js
router.get('/applications', C.listApplications);
router.post('/applications/:id/decision', validate(schemas.applicationDecision), C.decideApplication);

// Côté mentoré (tout compte connecté ; l'adhésion est vérifiée par le service)
router.get('/me', C.getMyMentoring);
router.post('/requests', validate(schemas.mentorRequest), C.requestMentor);
router.delete('/requests/:id', C.cancelMentorRequest);
// Présidence : file des demandes d'accompagnement
router.get('/requests', C.listMentorRequests);
router.post('/requests/:id/decline', validate(schemas.declineRequest), C.declineMentorRequest);

// Mentors : signaler une erreur ou proposer une modification sur une fiche formation ou métier
router.get('/suggestions/targets', C.searchSuggestionTargets);
router.get('/suggestions', C.listSuggestions);
router.post('/suggestions', validate(schemas.suggestion), C.createSuggestion);
router.post('/suggestions/:id/resolve', validate(schemas.resolveSuggestion), C.resolveSuggestion);

router.get('/threads', C.listThreads);
router.get('/messages', C.getMessages);
router.post('/messages', validate(schemas.message), C.sendMessage);

module.exports = router;
