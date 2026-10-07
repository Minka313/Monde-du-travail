const prisma = require('../config/database');
const { NotFoundError, BadRequestError } = require('../utils/errors');
const logger = require('../utils/logger');

let schemaEnsured = false;
let schemaPromise = null;

class BlogService {
  /**
   * Synchronise automatiquement les colonnes et tables manquantes dans Supabase
   */
  static async ensureSchema(force = false) {
    if (schemaEnsured && !force) return { status: 'already_ensured' };
    if (schemaPromise && !force) return schemaPromise;

    schemaPromise = (async () => {
      const logs = [];
      try {
        // 1. Nouvelles colonnes sur posts
        await prisma.$executeRawUnsafe(`
          ALTER TABLE posts
            ADD COLUMN IF NOT EXISTS "views" INTEGER NOT NULL DEFAULT 0,
            ADD COLUMN IF NOT EXISTS "readingTime" INTEGER NOT NULL DEFAULT 3,
            ADD COLUMN IF NOT EXISTS "likeCount" INTEGER NOT NULL DEFAULT 0,
            ADD COLUMN IF NOT EXISTS "tags" TEXT[] NOT NULL DEFAULT '{}';
        `);
        logs.push('posts columns verified');

        // 2. Index de performance
        await prisma.$executeRawUnsafe(`
          CREATE INDEX IF NOT EXISTS posts_views_idx ON posts ("views");
        `);
        await prisma.$executeRawUnsafe(`
          CREATE INDEX IF NOT EXISTS posts_like_count_idx ON posts ("likeCount");
        `);
        logs.push('posts indexes verified');

        // 3. Table post_likes
        await prisma.$executeRawUnsafe(`
          CREATE TABLE IF NOT EXISTS post_likes (
            id TEXT PRIMARY KEY,
            "postId" TEXT NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
            "userId" TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
            CONSTRAINT post_likes_post_user_unique UNIQUE ("postId", "userId")
          );
        `);
        await prisma.$executeRawUnsafe(`
          CREATE INDEX IF NOT EXISTS post_likes_post_idx ON post_likes ("postId");
        `);
        await prisma.$executeRawUnsafe(`
          CREATE INDEX IF NOT EXISTS post_likes_user_idx ON post_likes ("userId");
        `);
        logs.push('post_likes table verified');

        schemaEnsured = true;
        logger.info('Auto-migration: Schéma Blog synchronisé avec succès dans Supabase');
        return { status: 'success', logs };
      } catch (err) {
        logger.warn('Auto-migration blog échouée ou partielle:', err.message);
        return { status: 'error', error: err.message, logs };
      } finally {
        schemaPromise = null;
      }
    })();

    return schemaPromise;
  }

  static generateSlug(title) {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  static async getAllPosts({ page = 1, limit = 10, category, search, tag, featured, sort = 'latest', status = 'PUBLISHED', userId = null } = {}) {
    await BlogService.ensureSchema();

    const pageNum = Math.max(1, parseInt(page, 10) || 1);
    const limitNum = Math.min(50, Math.max(1, parseInt(limit, 10) || 10));
    const skip = (pageNum - 1) * limitNum;

    const where = {};

    if (status) {
      where.status = status;
    }

    if (category) {
      where.category = category;
    }

    if (tag) {
      where.tags = { has: tag };
    }

    if (featured !== undefined && featured !== null) {
      where.featured = String(featured).toLowerCase() === 'true';
    }

    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { excerpt: { contains: search, mode: 'insensitive' } },
        { content: { contains: search, mode: 'insensitive' } }
      ];
    }

    let orderBy = [
      { featured: 'desc' },
      { publishedAt: 'desc' },
      { createdAt: 'desc' }
    ];

    if (sort === 'popular') {
      orderBy = [
        { views: 'desc' },
        { likeCount: 'desc' },
        { publishedAt: 'desc' }
      ];
    } else if (sort === 'views') {
      orderBy = [{ views: 'desc' }];
    } else if (sort === 'likes') {
      orderBy = [{ likeCount: 'desc' }];
    }

    const selectClause = {
      id: true,
      title: true,
      slug: true,
      excerpt: true,
      content: false,
      coverImage: true,
      gallery: true,
      category: true,
      status: true,
      featured: true,
      views: true,
      readingTime: true,
      likeCount: true,
      tags: true,
      publishedAt: true,
      createdAt: true,
      updatedAt: true,
      authorId: true,
      author: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
          avatarUrl: true,
        }
      }
    };

    if (userId) {
      selectClause.likes = {
        where: { userId },
        select: { id: true },
      };
    }

    const [posts, total] = await Promise.all([
      prisma.post.findMany({
        where,
        skip,
        take: limitNum,
        orderBy,
        select: selectClause,
      }),
      prisma.post.count({ where })
    ]);

    const formattedPosts = posts.map(p => {
      const hasLiked = userId ? Boolean(p.likes && p.likes.length > 0) : false;
      const { likes, ...rest } = p;
      return {
        ...rest,
        hasLiked,
      };
    });

    return {
      posts: formattedPosts,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        totalPages: Math.ceil(total / limitNum)
      }
    };
  }

  static async getPublishedPosts({ page = 1, limit = 10, category, search, tag, featured, sort, userId } = {}) {
    return this.getAllPosts({ page, limit, category, search, tag, featured, sort, userId, status: 'PUBLISHED' });
  }

  static async getPostsForAdmin({ status, category, search, mine, userId, page = 1, limit = 50 } = {}) {
    const pageNum = Math.max(1, parseInt(page, 10) || 1);
    const limitNum = Math.min(100, Math.max(1, parseInt(limit, 10) || 50));
    const skip = (pageNum - 1) * limitNum;

    const where = {};
    if (status && status !== 'ALL') where.status = status;
    if (category) where.category = category;
    if (mine === 'true' || mine === true) where.authorId = userId;
    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { excerpt: { contains: search, mode: 'insensitive' } },
      ];
    }

    const [posts, total] = await Promise.all([
      prisma.post.findMany({
        where,
        skip,
        take: limitNum,
        orderBy: { updatedAt: 'desc' },
        include: {
          author: { select: { id: true, firstName: true, lastName: true } },
        },
      }),
      prisma.post.count({ where }),
    ]);

    return {
      posts,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        totalPages: Math.ceil(total / limitNum),
      },
    };
  }

  static async getPostById(id, userId = null) {
    await BlogService.ensureSchema();
    try {
      const post = await prisma.post.update({
        where: { id },
        data: { views: { increment: 1 } },
        select: {
          id: true,
          title: true,
          slug: true,
          excerpt: true,
          content: true,
          coverImage: true,
          gallery: true,
          category: true,
          status: true,
          featured: true,
          views: true,
          readingTime: true,
          likeCount: true,
          tags: true,
          publishedAt: true,
          createdAt: true,
          updatedAt: true,
          authorId: true,
          author: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              avatarUrl: true,
              role: true,
            }
          },
          ...(userId ? {
            likes: {
              where: { userId },
              select: { id: true },
            }
          } : {})
        }
      });

      if (!post || post.status !== 'PUBLISHED') {
        throw new NotFoundError('Article non trouvé');
      }

      const hasLiked = userId ? Boolean(post.likes && post.likes.length > 0) : false;
      const { likes, ...rest } = post;
      return { ...rest, hasLiked };
    } catch (err) {
      if (err.code === 'P2025' || err instanceof NotFoundError) {
        throw new NotFoundError('Article non trouvé');
      }
      throw err;
    }
  }

  static async getPostBySlug(slug, userId = null) {
    await BlogService.ensureSchema();
    try {
      const post = await prisma.post.update({
        where: { slug },
        data: { views: { increment: 1 } },
        select: {
          id: true,
          title: true,
          slug: true,
          excerpt: true,
          content: true,
          coverImage: true,
          gallery: true,
          category: true,
          status: true,
          featured: true,
          views: true,
          readingTime: true,
          likeCount: true,
          tags: true,
          publishedAt: true,
          createdAt: true,
          updatedAt: true,
          authorId: true,
          author: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              avatarUrl: true,
              role: true,
            }
          },
          ...(userId ? {
            likes: {
              where: { userId },
              select: { id: true },
            }
          } : {})
        }
      });

      if (!post || post.status !== 'PUBLISHED') {
        throw new NotFoundError('Article non trouvé');
      }

      const hasLiked = userId ? Boolean(post.likes && post.likes.length > 0) : false;
      const { likes, ...rest } = post;
      return { ...rest, hasLiked };
    } catch (err) {
      if (err.code === 'P2025' || err instanceof NotFoundError) {
        throw new NotFoundError('Article non trouvé');
      }
      throw err;
    }
  }

  static async getRelatedPosts(postId, category, limit = 4) {
    await BlogService.ensureSchema();
    const post = await prisma.post.findUnique({
      where: { id: postId, status: 'PUBLISHED' },
      select: { category: true, tags: true, status: true }
    });

    if (!post) {
      return [];
    }

    const orClauses = [{ category: post.category }];
    if (post.tags && post.tags.length > 0) {
      orClauses.push({ tags: { hasSome: post.tags } });
    }

    const posts = await prisma.post.findMany({
      where: {
        status: 'PUBLISHED',
        id: { not: postId },
        OR: orClauses,
      },
      take: limit,
      orderBy: [
        { views: 'desc' },
        { publishedAt: 'desc' },
      ],
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        coverImage: true,
        category: true,
        views: true,
        readingTime: true,
        likeCount: true,
        publishedAt: true,
        author: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            avatarUrl: true,
          }
        }
      }
    });

    return posts;
  }

  static async getPopularPosts(limit = 4) {
    await BlogService.ensureSchema();
    const posts = await prisma.post.findMany({
      where: { status: 'PUBLISHED' },
      take: limit,
      orderBy: [
        { views: 'desc' },
        { likeCount: 'desc' },
        { publishedAt: 'desc' },
      ],
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        coverImage: true,
        category: true,
        views: true,
        readingTime: true,
        likeCount: true,
        publishedAt: true,
        author: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            avatarUrl: true,
          }
        }
      }
    });
    return posts;
  }

  static async togglePostLike(postId, userId) {
    await BlogService.ensureSchema();
    const post = await prisma.post.findUnique({ where: { id: postId } });
    if (!post) {
      throw new NotFoundError('Article non trouvé');
    }

    const existingLike = await prisma.postLike.findUnique({
      where: {
        postId_userId: {
          postId,
          userId,
        },
      },
    });

    if (existingLike) {
      await prisma.$transaction([
        prisma.postLike.delete({ where: { id: existingLike.id } }),
        prisma.post.update({
          where: { id: postId },
          data: { likeCount: { decrement: 1 } },
        }),
      ]);
      return { liked: false, likeCount: Math.max(0, post.likeCount - 1) };
    } else {
      await prisma.$transaction([
        prisma.postLike.create({
          data: {
            postId,
            userId,
          },
        }),
        prisma.post.update({
          where: { id: postId },
          data: { likeCount: { increment: 1 } },
        }),
      ]);
      return { liked: true, likeCount: post.likeCount + 1 };
    }
  }

  static async createPost(data, authorId) {
    await BlogService.ensureSchema();
    const { title, excerpt, content, coverImage, gallery, category, featured, tags } = data;

    const slug = BlogService.generateSlug(title);
    const existing = await prisma.post.findUnique({ where: { slug } });
    if (existing) {
      throw new BadRequestError('Un article avec ce titre existe déjà');
    }

    const wordCount = (content || '').split(/\s+/).filter(Boolean).length;
    const readingTime = data.readingTime || Math.max(1, Math.ceil(wordCount / 200));

    const post = await prisma.post.create({
      data: {
        title,
        slug,
        excerpt: excerpt || null,
        content,
        coverImage: coverImage || null,
        gallery: gallery || [],
        category,
        status: 'DRAFT',
        featured: featured || false,
        views: 0,
        readingTime,
        likeCount: 0,
        tags: Array.isArray(tags) ? tags : [],
        publishedAt: null,
        authorId
      },
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        content: true,
        coverImage: true,
        gallery: true,
        category: true,
        status: true,
        featured: true,
        views: true,
        readingTime: true,
        likeCount: true,
        tags: true,
        publishedAt: true,
        createdAt: true,
        updatedAt: true,
        authorId: true,
        author: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            avatarUrl: true,
          }
        }
      }
    });

    logger.info('Article créé', { postId: post.id, slug: post.slug, authorId });
    return post;
  }

  static async updatePost(id, data) {
    await BlogService.ensureSchema();
    const existing = await prisma.post.findUnique({ where: { id } });
    if (!existing) {
      throw new NotFoundError('Article non trouvé');
    }

    const { title, excerpt, content, coverImage, gallery, category, featured, tags, readingTime } = data;
    const updateData = {
      ...(title !== undefined && { title }),
      ...(excerpt !== undefined && { excerpt }),
      ...(content !== undefined && { content }),
      ...(coverImage !== undefined && { coverImage }),
      ...(gallery !== undefined && { gallery }),
      ...(category !== undefined && { category }),
      ...(featured !== undefined && { featured }),
      ...(tags !== undefined && { tags: Array.isArray(tags) ? tags : [] }),
    };

    if (readingTime !== undefined) {
      updateData.readingTime = readingTime;
    } else if (content !== undefined) {
      const wordCount = (content || '').split(/\s+/).filter(Boolean).length;
      updateData.readingTime = Math.max(1, Math.ceil(wordCount / 200));
    }

    if (title && title !== existing.title) {
      const newSlug = BlogService.generateSlug(title);
      const slugExists = await prisma.post.findFirst({
        where: { slug: newSlug, id: { not: id } }
      });
      if (slugExists) {
        throw new BadRequestError('Un article avec ce titre existe déjà');
      }
      updateData.slug = newSlug;
    }

    const post = await prisma.post.update({
      where: { id },
      data: updateData,
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        content: true,
        coverImage: true,
        gallery: true,
        category: true,
        status: true,
        featured: true,
        views: true,
        readingTime: true,
        likeCount: true,
        tags: true,
        publishedAt: true,
        createdAt: true,
        updatedAt: true,
        authorId: true,
        author: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            avatarUrl: true,
          }
        }
      }
    });

    logger.info('Article mis à jour', { postId: post.id });
    return post;
  }

  static async submitPost(id) {
    const post = await prisma.post.findUnique({ where: { id } });
    if (!post) {
      throw new NotFoundError('Article non trouvé');
    }
    if (post.status === 'PENDING_REVIEW') {
      throw new BadRequestError('Cet article est déjà en attente de validation');
    }
    if (post.status === 'PUBLISHED') {
      throw new BadRequestError('Cet article est déjà publié');
    }

    return prisma.post.update({
      where: { id },
      data: { status: 'PENDING_REVIEW' },
      select: {
        id: true,
        title: true,
        slug: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  static async deletePost(id) {
    const post = await prisma.post.findUnique({ where: { id } });
    if (!post) {
      throw new NotFoundError('Article non trouvé');
    }

    await prisma.approvalWorkflow.deleteMany({
      where: {
        resourceType: 'Post',
        resourceId: id,
      },
    });

    await prisma.post.delete({ where: { id } });
    logger.info('Article supprimé', { postId: id });
  }

  static async publishPost(id) {
    const post = await prisma.post.findUnique({ where: { id } });
    if (!post) {
      throw new NotFoundError('Article non trouvé');
    }

    const updated = await prisma.post.update({
      where: { id },
      data: {
        status: 'PUBLISHED',
        publishedAt: new Date()
      },
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        content: true,
        coverImage: true,
        gallery: true,
        category: true,
        status: true,
        featured: true,
        publishedAt: true,
        createdAt: true,
        updatedAt: true,
        authorId: true,
        author: {
          select: {
            id: true,
            firstName: true,
            lastName: true
          }
        }
      }
    });

    await prisma.approvalWorkflow.updateMany({
      where: {
        resourceType: 'Post',
        resourceId: id,
        action: 'publish',
        status: 'PENDING',
      },
      data: { status: 'CANCELLED', reviewedAt: new Date() },
    });

    logger.info('Article publié', { postId: id });

    // Déclencher la notification push et in-app automatique
    try {
      const notificationService = require('./notificationService');
      await notificationService.broadcastNotification({
        type: 'BLOG',
        title: '📝 Nouvel article de blog !',
        message: `${updated.title} : découvrez notre dernière publication.`,
        url: `/frontend/blog-post.html?slug=${updated.slug}`,
        imageUrl: updated.coverImage || null,
        dedupeKey: `BLOG:${updated.id}:PUBLISHED`,
      });
    } catch (err) {
      logger.warn('Notification article non créée après publication', { postId: id, error: err.message });
    }

    return updated;
  }

  static async unpublishPost(id) {
    const post = await prisma.post.findUnique({ where: { id } });
    if (!post) {
      throw new NotFoundError('Article non trouvé');
    }

    const updated = await prisma.post.update({
      where: { id },
      data: {
        status: 'DRAFT',
        publishedAt: null
      },
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        content: true,
        coverImage: true,
        gallery: true,
        category: true,
        status: true,
        featured: true,
        publishedAt: true,
        createdAt: true,
        updatedAt: true,
        authorId: true,
        author: {
          select: {
            id: true,
            firstName: true,
            lastName: true
          }
        }
      }
    });

    logger.info('Article dépublié', { postId: id });
    return updated;
  }

  static async getCategories() {
    const categories = await prisma.post.groupBy({
      by: ['category'],
      _count: {
        category: true
      },
      where: {
        status: 'PUBLISHED'
      }
    });

    return categories.map(c => ({
      name: c.category,
      count: c._count.category
    }));
  }
  static async archivePost(id) {
    const post = await prisma.post.findUnique({ where: { id } });
    if (!post) {
      throw new NotFoundError('Article non trouvé');
    }
    if (post.status === 'ARCHIVED') {
      throw new BadRequestError('Cet article est déjà archivé');
    }

    return prisma.post.update({
      where: { id },
      data: { status: 'ARCHIVED' },
      select: {
        id: true,
        title: true,
        slug: true,
        status: true,
        updatedAt: true,
      },
    });
  }

}

module.exports = BlogService;
