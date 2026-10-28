const express = require('express');
const router = express.Router();
const forumController = require('../controllers/forumController');
const forumService = require('../services/forumService');
const { authenticate, authorize, authorizeMember, authorizeAdmin, authorizeUltraAdmin, optionalAuth } = require('../middleware/auth');
const AdminApprovalMiddleware = require('../middleware/adminApproval');
const { requireModulePermission } = require('../middleware/moduleScope');
const validate = require('../middleware/validate');
const { z } = require('zod');
const Categories = require('../services/forumCategories');

// Nouvelles catégories ; les anciennes restent acceptées (rattachées automatiquement)
const categoryField = z.string().refine((value) => Categories.NAMES.includes(value) || Boolean(Categories.LEGACY[value]), 'Catégorie inconnue');
const CONTEXT_TYPES = ['opportunity', 'job', 'formation'];
const contextField = z.object({
  type: z.enum(CONTEXT_TYPES),
  id: z.string().regex(/^[A-Za-z0-9_-]{1,120}$/, 'Fiche invalide'),
  title: z.string().trim().min(2).max(200),
}).strict();

const topicSchema = z.object({
  body: z.object({
    title: z.string().min(3, 'Titre requis (min 3 caractères)'),
    content: z.string().min(10, 'Contenu requis (min 10 caractères)'),
    category: categoryField,
    tags: z.array(z.string()).optional(),
    context: contextField.optional(),
  }),
});

const topicUpdateSchema = z.object({
  body: z.object({
    title: z.string().min(3, 'Titre trop court').optional(),
    content: z.string().min(10, 'Contenu trop court').optional(),
    category: categoryField.optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const replySchema = z.object({
  body: z.object({
    content: z.string().min(1, 'Contenu requis'),
  }),
});

const reportSchema = z.object({
  body: z.object({
    reason: z.string().min(2, 'Motif de signalement requis'),
    details: z.string().optional(),
    topicId: z.string().optional(),
    replyId: z.string().optional(),
  }),
});

const forumProfileSchema = z.object({
  body: z.object({
    forumDisplayName: z.string().trim().min(2).max(32).nullable().optional(),
    forumDigestOptIn: z.boolean().optional(),
    forumSpotlightOptIn: z.boolean().optional(),
  }).strict(),
});

// Auto-synchronisation du schéma PostgreSQL (Supabase)
router.use(async (req, res, next) => {
  try {
    await forumService.ensureSchema();
  } catch (_) {}
  next();
});

// Endpoint de synchronisation explicite
// Modifie la structure de la base : réservé à l'Ultra Admin authentifié
router.post('/sync-schema', authenticate, authorizeUltraAdmin, async (req, res, next) => {
  try {
    const result = await forumService.ensureSchema(true);
    res.json({ success: true, message: 'Schéma synchronisé avec succès dans Supabase', result });
  } catch (err) {
    next(err);
  }
});

// Routes publiques (avec détection de l'utilisateur si token présent)
router.get('/', optionalAuth, forumController.getAllTopics);
router.get('/categories', forumController.getCategories);
router.get('/tags/popular', forumController.getPopularTags);
router.get('/linked', validate(z.object({ query: z.object({ type: z.enum(CONTEXT_TYPES), id: z.string().regex(/^[A-Za-z0-9_-]{1,120}$/) }) })), forumController.getLinkedTopics);
router.get('/profile', authenticate, authorizeMember, forumController.getForumProfile);
router.put('/profile', authenticate, authorizeMember, validate(forumProfileSchema), forumController.updateForumProfile);
router.get('/community/spotlight', forumController.getCommunitySpotlight);
router.get('/unanswered', authenticate, authorizeMember, forumController.getUnansweredTopics);
router.get('/:id', optionalAuth, forumController.getTopicById);
router.get('/:id/similar', forumController.getSimilarTopics);

// Routes protégées membres et admin
router.use(authenticate, authorizeMember);

router.post('/', validate(topicSchema), forumController.createTopic);
router.put('/:id', validate(topicUpdateSchema), forumController.updateTopic);
router.delete('/:id', forumController.deleteTopic);

router.post('/:topicId/replies', validate(replySchema), forumController.createReply);
router.put('/replies/:replyId', validate(replySchema), forumController.updateReply);
router.delete('/replies/:replyId', forumController.deleteReply);

// Likes / Upvotes & Solutions
router.post('/:id/like', forumController.toggleTopicLike);
router.post('/replies/:replyId/like', forumController.toggleReplyLike);
router.put('/:id/solution/:replyId', forumController.toggleSolution);
router.post('/:id/follow', forumController.toggleFollow);
router.put('/replies/:replyId/endorse', forumController.toggleEndorsement);

// Signalements
router.post('/reports', validate(reportSchema), forumController.createReport);

// Modération des signalements (Admin)
router.get('/admin/reports', authorizeAdmin, requireModulePermission('forum'), authorize('forum.moderate'), forumController.getReports);
router.put('/admin/reports/:id', authorizeAdmin, requireModulePermission('forum'), authorize('forum.moderate'), forumController.resolveReport);

// Actions administratives historiques sur les sujets
router.put('/:id/pin', authorizeAdmin, AdminApprovalMiddleware.middleware, requireModulePermission('forum'), authorize('forum.moderate'), forumController.togglePin);
router.put('/:id/resolve', authorizeAdmin, AdminApprovalMiddleware.middleware, requireModulePermission('forum'), authorize('forum.moderate'), forumController.toggleResolved);
router.put('/:id/lock', authorizeAdmin, AdminApprovalMiddleware.middleware, requireModulePermission('forum'), authorize('forum.moderate'), forumController.toggleLock);

module.exports = router;
