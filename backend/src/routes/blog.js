const express = require('express');
const { z } = require('zod');
const BlogController = require('../controllers/blogController');
const { authenticate, authorize } = require('../middleware/auth');
const AdminApprovalMiddleware = require('../middleware/adminApproval');
const { requireModulePermission } = require('../middleware/moduleScope');
const validate = require('../middleware/validate');

const router = express.Router();

const postSchema = z.object({
  body: z.object({
    title: z.string().min(3, 'Titre requis (min 3 caractères)'),
    excerpt: z.string().max(500, 'Résumé trop long (max 500 caractères)').optional(),
    content: z.string().min(10, 'Contenu requis (min 10 caractères)'),
    coverImage: z.string().url('URL invalide').optional().nullable(),
    gallery: z.array(z.string().url('URL invalide')).max(10, 'Maximum 10 images dans la galerie').optional(),
    category: z.enum(['CLUB', 'FORMATION', 'ATELIER', 'RENCONTRE', 'CONFERENCE', 'VISITE', 'PROJET', 'TEMOIGNAGE', 'ANNONCE']),
    status: z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED']).optional(),
    featured: z.boolean().optional()
  })
});

router.get('/', BlogController.getPosts);
router.get('/categories', BlogController.getCategories);
router.get('/related/:id', BlogController.getRelatedPosts);
router.get('/slug/:slug', BlogController.getPostBySlug);
router.get('/:id', BlogController.getPost);

router.use(authenticate);
router.use(AdminApprovalMiddleware.middleware);
router.use(requireModulePermission('blog'));
router.use(authorize(['blog.read', '*']));

router.post('/', authorize('blog.create'), validate(postSchema), BlogController.createPost);
router.put('/:id', authorize('blog.update'), validate(postSchema), BlogController.updatePost);
router.delete('/:id', authorize('blog.delete'), BlogController.deletePost);
router.post('/:id/publish', authorize('blog.publish'), BlogController.publishPost);
router.post('/:id/unpublish', authorize('blog.publish'), BlogController.unpublishPost);

module.exports = router;
