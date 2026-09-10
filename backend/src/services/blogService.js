const prisma = require('../config/database');
const { NotFoundError, BadRequestError } = require('../utils/errors');
const logger = require('../utils/logger');

class BlogService {
  static generateSlug(title) {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  static async getAllPosts({ page = 1, limit = 10, category, search, featured, status = 'PUBLISHED' } = {}) {
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

    const [posts, total] = await Promise.all([
      prisma.post.findMany({
        where,
        skip,
        take: limitNum,
        orderBy: [
          { featured: 'desc' },
          { publishedAt: 'desc' },
          { createdAt: 'desc' }
        ],
        select: {
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
      }),
      prisma.post.count({ where })
    ]);

    return {
      posts,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        totalPages: Math.ceil(total / limitNum)
      }
    };
  }

  static async getPublishedPosts({ page = 1, limit = 10, category, search, featured } = {}) {
    return this.getAllPosts({ page, limit, category, search, featured, status: 'PUBLISHED' });
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

  static async getPostById(id) {
    const post = await prisma.post.findUnique({
      where: { id, status: 'PUBLISHED' },
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

    if (!post) {
      throw new NotFoundError('Article non trouvé');
    }

    return post;
  }

  static async getPostBySlug(slug) {
    const post = await prisma.post.findUnique({
      where: { slug, status: 'PUBLISHED' },
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

    if (!post) {
      throw new NotFoundError('Article non trouvé');
    }

    return post;
  }

  static async getRelatedPosts(postId, category, limit = 4) {
    const post = await prisma.post.findUnique({
      where: { id: postId, status: 'PUBLISHED' },
      select: { category: true, status: true }
    });

    if (!post) {
      return [];
    }

    const where = {
      status: 'PUBLISHED',
      category: post.category,
      id: { not: postId }
    };

    const posts = await prisma.post.findMany({
      where,
      take: limit,
      orderBy: { publishedAt: 'desc' },
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        coverImage: true,
        category: true,
        publishedAt: true,
        author: {
          select: {
            firstName: true,
            lastName: true
          }
        }
      }
    });

    return posts;
  }

  static async createPost(data, authorId) {
    const { title, excerpt, content, coverImage, gallery, category, featured } = data;

    const slug = BlogService.generateSlug(title);
    const existing = await prisma.post.findUnique({ where: { slug } });
    if (existing) {
      throw new BadRequestError('Un article avec ce titre existe déjà');
    }

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

    logger.info('Article créé', { postId: post.id, slug: post.slug, authorId });
    return post;
  }

  static async updatePost(id, data) {
    const existing = await prisma.post.findUnique({ where: { id } });
    if (!existing) {
      throw new NotFoundError('Article non trouvé');
    }

    const { title, excerpt, content, coverImage, gallery, category, featured } = data;
    const updateData = {
      ...(title !== undefined && { title }),
      ...(excerpt !== undefined && { excerpt }),
      ...(content !== undefined && { content }),
      ...(coverImage !== undefined && { coverImage }),
      ...(gallery !== undefined && { gallery }),
      ...(category !== undefined && { category }),
      ...(featured !== undefined && { featured }),
    };

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
