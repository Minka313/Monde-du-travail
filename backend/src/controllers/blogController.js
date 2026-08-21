const BlogService = require('../services/blogService');
const AuditService = require('../services/auditService');

class BlogController {
  static async getPosts(req, res, next) {
    try {
      const { page, limit, category, search, featured, status } = req.query;
      const result = await BlogService.getPublishedPosts({
        page,
        limit,
        category,
        search,
        featured
      });

      res.json({
        success: true,
        data: result.posts,
        pagination: result.pagination
      });
    } catch (error) {
      next(error);
    }
  }

  static async getPost(req, res, next) {
    try {
      const { id } = req.params;
      const post = await BlogService.getPostById(id);
      res.json({ success: true, data: post });
    } catch (error) {
      next(error);
    }
  }

  static async getPostBySlug(req, res, next) {
    try {
      const { slug } = req.params;
      const post = await BlogService.getPostBySlug(slug);
      res.json({ success: true, data: post });
    } catch (error) {
      next(error);
    }
  }

  static async getRelatedPosts(req, res, next) {
    try {
      const { id } = req.params;
      const { limit } = req.query;
      const posts = await BlogService.getRelatedPosts(id, undefined, limit || 4);
      res.json({ success: true, data: posts });
    } catch (error) {
      next(error);
    }
  }

  static async getCategories(req, res, next) {
    try {
      const categories = await BlogService.getCategories();
      res.json({ success: true, data: categories });
    } catch (error) {
      next(error);
    }
  }

  static async createPost(req, res, next) {
    try {
      const authorId = req.user.id;
      const post = await BlogService.createPost(req.body, authorId);
      res.status(201).json({ success: true, message: 'Article créé avec succès', data: post });
    } catch (error) {
      next(error);
    }
  }

  static async updatePost(req, res, next) {
    try {
      const { id } = req.params;
      const post = await BlogService.updatePost(id, req.body);
      res.json({ success: true, message: 'Article mis à jour avec succès', data: post });
    } catch (error) {
      next(error);
    }
  }

  static async deletePost(req, res, next) {
    try {
      const { id } = req.params;
      await BlogService.deletePost(id);
      res.json({ success: true, message: 'Article supprimé avec succès' });
    } catch (error) {
      next(error);
    }
  }

  static async publishPost(req, res, next) {
    try {
      const { id } = req.params;
      const post = await BlogService.publishPost(id);
      res.json({ success: true, message: 'Article publié avec succès', data: post });
    } catch (error) {
      next(error);
    }
  }

  static async unpublishPost(req, res, next) {
    try {
      const { id } = req.params;
      const post = await BlogService.unpublishPost(id);
      res.json({ success: true, message: 'Article dépublié avec succès', data: post });
    } catch (error) {
      next(error);
    }
  }

  static async archivePost(req, res, next) {
    try {
      const { id } = req.params;
      const post = await BlogService.archivePost(id);

      await AuditService.log({
        userId: req.user.id,
        action: 'blog.archive',
        module: 'blog',
        resource: 'Post',
        resourceId: id,
        ipAddress: req.ip,
        userAgent: req.get('user-agent'),
        result: 'ARCHIVED',
        metadata: { title: post.title },
      });

      res.json({ success: true, message: 'Article archivé avec succès', data: post });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = BlogController;
