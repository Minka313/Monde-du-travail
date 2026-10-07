const express = require('express');
const { z } = require('zod');
const BlogController = require('../controllers/blogController');
const BlogService = require('../services/blogService');
const { authenticate, authorize, authorizeMember, optionalAuth } = require('../middleware/auth');
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
    tags: z.array(z.string()).optional(),
    readingTime: z.number().int().min(1).optional(),
    featured: z.boolean().optional()
  })
};

const createPostSchema = z.object(postFields);
const updatePostSchema = z.object({
  body: postFields.body.partial(),
});

const adminGate = [authenticate, AdminApprovalMiddleware.middleware, requireModulePermission('blog')];

// Auto-synchronisation du schéma PostgreSQL (Supabase)
router.use(async (req, res, next) => {
  try {
    await BlogService.ensureSchema();
  } catch (_) {}
  next();
});

// Endpoint de synchronisation explicite
router.get('/sync-schema', async (req, res) => {
  try {
    const result = await BlogService.ensureSchema(true);
    res.json({ success: true, message: 'Schéma du blog synchronisé avec succès dans Supabase', result });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Routes publiques
router.get('/', optionalAuth, BlogController.getPosts);
router.get('/categories', BlogController.getCategories);
router.get('/popular', BlogController.getPopularPosts);
router.get('/related/:id', BlogController.getRelatedPosts);
router.get('/slug/:slug', optionalAuth, BlogController.getPostBySlug);

// Like sur article (membres connectés)
router.post('/:id/like', authenticate, authorizeMember, BlogController.togglePostLike);

// Liste admin (définie avant /:id pour éviter collision d'URL)
router.get('/admin/list', ...adminGate, authorize('blog.read'), BlogController.getPostsForAdmin);

// Consultation publique d'un article
router.get('/:id', optionalAuth, BlogController.getPost);

// Gestion authentifiée (cloisonnée au module blog)
router.post('/', ...adminGate, authorize('blog.create'), validate(createPostSchema), BlogController.createPost);
router.put('/:id', ...adminGate, authorize('blog.update'), validate(updatePostSchema), BlogController.updatePost);
router.delete('/:id', ...adminGate, authorize('blog.delete'), BlogController.deletePost);
router.post('/:id/submit', ...adminGate, authorize('blog.update'), BlogController.submitPost);
router.post('/:id/publish', ...adminGate, authorize('blog.publish'), BlogController.publishPost);
router.post('/:id/unpublish', ...adminGate, authorize('blog.publish'), BlogController.unpublishPost);
router.post('/:id/archive', ...adminGate, authorize('blog.archive'), BlogController.archivePost);

module.exports = router;
