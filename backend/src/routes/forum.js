const express = require('express');
const router = express.Router();
const forumController = require('../controllers/forumController');
const { authenticate, authorize, authorizeMember, authorizeAdmin, optionalAuth } = require('../middleware/auth');
const AdminApprovalMiddleware = require('../middleware/adminApproval');
const { requireModulePermission } = require('../middleware/moduleScope');
const validate = require('../middleware/validate');
const { z } = require('zod');

const topicSchema = z.object({
  body: z.object({
    title: z.string().min(3, 'Titre requis (min 3 caractères)'),
    content: z.string().min(10, 'Contenu requis (min 10 caractères)'),
    category: z.string().min(2, 'Catégorie requise'),
    tags: z.array(z.string()).optional(),
  }),
});

const topicUpdateSchema = z.object({
  body: z.object({
    title: z.string().min(3, 'Titre trop court').optional(),
    content: z.string().min(10, 'Contenu trop court').optional(),
    category: z.string().min(2, 'Catégorie invalide').optional(),
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

// Routes publiques (avec détection de l'utilisateur si token présent)
router.get('/', optionalAuth, forumController.getAllTopics);
router.get('/categories', forumController.getCategories);
router.get('/tags/popular', forumController.getPopularTags);
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
