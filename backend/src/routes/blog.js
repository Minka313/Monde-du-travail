const express = require('express');
const { z } = require('zod');
const BlogController = require('../controllers/blogController');
const { authenticate, authorize } = require('../middleware/auth');
const AdminApprovalMiddleware = require('../middleware/adminApproval');
const { requireModulePermission } = require('../middleware/moduleScope');
const validate = require('../middleware/validate');

const router = express.Router();

const postFields = {
  body: z.object({
    title: z.string().min(3, 'Titre requis (min 3 caractères)'),
    excerpt: z.string().max(500, 'Résumé trop long (max 500 caractères)').optional(),
    content: z.string().min(10, 'Contenu requis (min 10 caractères)'),
    coverImage: z.string().url('URL invalide').optional().nullable(),
    gallery: z.array(z.string().url('URL invalide')).max(10, 'Maximum 10 images dans la galerie').optional(),
    category: z.enum(['CLUB', 'FORMATION', 'ATELIER', 'RENCONTRE', 'CONFERENCE', 'VISITE', 'PROJET', 'TEMOIGNAGE', 'ANNONCE']),
    featured: z.boolean().optional()
  })
};

const createPostSchema = z.object(postFields);
const updatePostSchema = z.object({
  body: postFields.body.partial(),
});

const adminGate = [authenticate, AdminApprovalMiddleware.middleware, requireModulePermission('blog')];

// Routes publiques
router.get('/', BlogController.getPosts);
router.get('/categories', BlogController.getCategories);
router.get('/related/:id', BlogController.getRelatedPosts);
router.get('/slug/:slug', BlogController.getPostBySlug);

// Liste admin (définie avant /:id pour éviter collision d'URL)
router.get('/admin/list', ...adminGate, authorize('blog.read'), BlogController.getPostsForAdmin);

// Consultation publique d'un article
router.get('/:id', BlogController.getPost);

// Gestion authentifiée (cloisonnée au module blog)
router.post('/', ...adminGate, authorize('blog.create'), validate(createPostSchema), BlogController.createPost);
router.put('/:id', ...adminGate, authorize('blog.update'), validate(updatePostSchema), BlogController.updatePost);
router.delete('/:id', ...adminGate, authorize('blog.delete'), BlogController.deletePost);
router.post('/:id/submit', ...adminGate, authorize('blog.update'), BlogController.submitPost);
router.post('/:id/publish', ...adminGate, authorize('blog.publish'), BlogController.publishPost);
router.post('/:id/unpublish', ...adminGate, authorize('blog.publish'), BlogController.unpublishPost);
router.post('/:id/archive', ...adminGate, authorize('blog.archive'), BlogController.archivePost);

module.exports = router;
