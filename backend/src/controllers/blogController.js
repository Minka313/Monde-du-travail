const BlogService = require('../services/blogService');
const AuditService = require('../services/auditService');
const ApprovalService = require('../services/approvalService');
const { BadRequestError } = require('../utils/errors');

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

  static async getPostsForAdmin(req, res, next) {
    try {
      const { page, limit, category, search, mine, status } = req.query;
      const result = await BlogService.getPostsForAdmin({
        page,
        limit,
        category,
        search,
        mine,
        status,
        userId: req.user.id,
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

      await AuditService.log({
        userId: req.user.id,
        action: 'blog.create',
        module: 'blog',
        resource: 'Post',
        resourceId: post.id,
        ipAddress: req.ip,
        userAgent: req.get('user-agent'),
        result: 'SUCCESS',
        metadata: { title: post.title },
      });

      res.status(201).json({ success: true, message: 'Article créé (brouillon)', data: post });
    } catch (error) {
      next(error);
    }
  }

  static async updatePost(req, res, next) {
    try {
      const { id } = req.params;
      const post = await BlogService.updatePost(id, req.body);

      await AuditService.log({
        userId: req.user.id,
        action: 'blog.update',
        module: 'blog',
        resource: 'Post',
        resourceId: post.id,
        ipAddress: req.ip,
        userAgent: req.get('user-agent'),
        result: 'SUCCESS',
        metadata: { title: post.title },
      });

      res.json({ success: true, message: 'Article mis à jour avec succès', data: post });
    } catch (error) {
      next(error);
    }
  }

  static async deletePost(req, res, next) {
    try {
      const { id } = req.params;
      await BlogService.deletePost(id);

      await AuditService.log({
        userId: req.user.id,
        action: 'blog.delete',
        module: 'blog',
        resource: 'Post',
        resourceId: id,
        ipAddress: req.ip,
        userAgent: req.get('user-agent'),
        result: 'DELETED',
      });

      res.json({ success: true, message: 'Article supprimé avec succès' });
    } catch (error) {
      next(error);
    }
  }

  static async submitPost(req, res, next) {
    try {
      const { id } = req.params;
      const post = await BlogService.submitPost(id);

      try {
        await ApprovalService.createApprovalRequest({
          resourceType: 'Post',
          resourceId: post.id,
          action: 'publish',
          createdById: req.user.id,
          comment: `Publication de l'article « ${post.title} »`,
        });
      } catch (error) {
        if (!(error instanceof BadRequestError)) throw error;
      }

      await AuditService.log({
        userId: req.user.id,
        action: 'blog.submit',
        module: 'blog',
        resource: 'Post',
        resourceId: post.id,
        ipAddress: req.ip,
        userAgent: req.get('user-agent'),
        result: 'PENDING',
        metadata: { title: post.title },
      });

      res.json({ success: true, message: 'Article soumis à validation', data: post });
    } catch (error) {
      next(error);
    }
  }

  static async publishPost(req, res, next) {
    try {
      const { id } = req.params;
      const post = await BlogService.publishPost(id);

      await AuditService.log({
        userId: req.user.id,
        action: 'blog.publish',
        module: 'blog',
        resource: 'Post',
        resourceId: post.id,
        ipAddress: req.ip,
        userAgent: req.get('user-agent'),
        result: 'PUBLISHED',
        metadata: { title: post.title },
      });

      res.json({ success: true, message: 'Article publié avec succès', data: post });
    } catch (error) {
      next(error);
    }
  }

  static async unpublishPost(req, res, next) {
    try {
      const { id } = req.params;
      const post = await BlogService.unpublishPost(id);

      await AuditService.log({
        userId: req.user.id,
        action: 'blog.unpublish',
        module: 'blog',
        resource: 'Post',
        resourceId: post.id,
        ipAddress: req.ip,
        userAgent: req.get('user-agent'),
        result: 'UNPUBLISHED',
        metadata: { title: post.title },
      });

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
