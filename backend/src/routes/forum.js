const express = require('express');
const router = express.Router();
const forumController = require('../controllers/forumController');
const { authenticate, authorize, authorizeMember, authorizeAdmin } = require('../middleware/auth');
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

const replySchema = z.object({
  body: z.object({
    content: z.string().min(1, 'Contenu requis'),
  }),
});

// Routes publiques
router.get('/', forumController.getAllTopics);
router.get('/categories', forumController.getCategories);
router.get('/:id', forumController.getTopicById);

// Routes protégées (membres et admin)
router.use(authenticate, authorizeMember);

router.post('/', validate(topicSchema), forumController.createTopic);
router.post('/:topicId/replies', validate(replySchema), forumController.createReply);

// Routes modération : permission précise requise (forum.moderate),
// pas seulement l'accès au module
router.put('/:id/pin', authorizeAdmin, AdminApprovalMiddleware.middleware, requireModulePermission('forum'), authorize('forum.moderate'), forumController.togglePin);
router.put('/:id/resolve', authorizeAdmin, AdminApprovalMiddleware.middleware, requireModulePermission('forum'), authorize('forum.moderate'), forumController.toggleResolved);
router.put('/:id/lock', authorizeAdmin, AdminApprovalMiddleware.middleware, requireModulePermission('forum'), authorize('forum.moderate'), forumController.toggleLock);

// Suppression : forum.delete
router.delete('/:id', authorizeAdmin, AdminApprovalMiddleware.middleware, requireModulePermission('forum'), authorize('forum.delete'), forumController.deleteTopic);

module.exports = router;
