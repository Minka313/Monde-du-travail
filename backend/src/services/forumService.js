const prisma = require('../config/database');
const { NotFoundError, BadRequestError } = require('../utils/errors');

class ForumService {
  static async getAllTopics({ category, search, status, page = 1, limit = 20, sort = 'latest' } = {}) {
    const where = {};

    if (category) {
      where.category = category;
    }

    if (status === 'pinned') {
      where.isPinned = true;
    } else if (status === 'resolved') {
      where.isResolved = true;
    } else if (status === 'locked') {
      where.isLocked = true;
    }

    if (search) {
      const searchTerms = search.split(/[,\s]+/).filter(Boolean);
      const orConditions = [
        { title: { contains: search, mode: 'insensitive' } },
        { content: { contains: search, mode: 'insensitive' } },
      ];

      if (searchTerms.length > 0) {
        orConditions.push({ tags: { hasSome: searchTerms } });
      }

      where.OR = orConditions;
    }

    const pageNum = Math.max(1, parseInt(page, 10) || 1);
    const limitNum = Math.min(50, Math.max(1, parseInt(limit, 10) || 20));
    const skip = (pageNum - 1) * limitNum;

    let orderBy = { createdAt: 'desc' };
    if (sort === 'popular') {
      orderBy = { replyCount: 'desc' };
    } else if (sort === 'views') {
      orderBy = { views: 'desc' };
    } else if (sort === 'activity') {
      orderBy = { lastActivityAt: 'desc' };
    }

    // Les sujets épinglés passent toujours en premier
    const orderByClause = [
      { isPinned: 'desc' },
      orderBy,
    ];

    const [topics, total] = await Promise.all([
      prisma.topic.findMany({
        where,
        skip,
        take: limitNum,
        orderBy: orderByClause,
        include: {
          author: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
            },
          },
        },
      }),
      prisma.topic.count({ where }),
    ]);

    return {
      topics,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        pages: Math.ceil(total / limitNum) || 1,
      },
    };
  }

  static async getTopicById(id) {
    try {
      return await prisma.topic.update({
        where: { id },
        data: { views: { increment: 1 } },
        include: {
          author: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
            },
          },
          replies: {
            include: {
              author: {
                select: {
                  id: true,
                  firstName: true,
                  lastName: true,
                },
              },
            },
            orderBy: { createdAt: 'asc' },
          },
        },
      });
    } catch (err) {
      if (err.code === 'P2025') {
        throw new NotFoundError('Sujet non trouvé');
      }
      throw err;
    }
  }

  static async createTopic(data, userId) {
    const topic = await prisma.topic.create({
      data: {
        ...data,
        authorId: userId,
        tags: data.tags || [],
      },
      include: {
        author: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
          },
        },
      },
    });

    return topic;
  }

  static async createReply(data, userId, topicId) {
    const topic = await prisma.topic.findUnique({
      where: { id: topicId },
    });

    if (!topic) {
      throw new NotFoundError('Sujet non trouvé');
    }

    if (topic.isLocked) {
      throw new BadRequestError('Ce sujet est verrouillé et n\'accepte plus de réponses');
    }

    const [reply] = await prisma.$transaction([
      prisma.reply.create({
        data: {
          ...data,
          authorId: userId,
          topicId,
        },
        include: {
          author: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
            },
          },
        },
      }),
      prisma.topic.update({
        where: { id: topicId },
        data: {
          replyCount: { increment: 1 },
          lastActivityAt: new Date(),
        },
      }),
    ]);

    return reply;
  }

  static async deleteTopic(id) {
    await prisma.topic.delete({
      where: { id },
    });
  }

  static async togglePin(id) {
    const topic = await prisma.topic.findUnique({ where: { id } });
    if (!topic) {
      throw new NotFoundError('Sujet non trouvé');
    }

    return prisma.topic.update({
      where: { id },
      data: { isPinned: !topic.isPinned },
      include: {
        author: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
          },
        },
      },
    });
  }

  static async toggleResolved(id) {
    const topic = await prisma.topic.findUnique({ where: { id } });
    if (!topic) {
      throw new NotFoundError('Sujet non trouvé');
    }

    return prisma.topic.update({
      where: { id },
      data: { isResolved: !topic.isResolved },
      include: {
        author: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
          },
        },
      },
    });
  }

  static async toggleLock(id) {
    const topic = await prisma.topic.findUnique({ where: { id } });
    if (!topic) {
      throw new NotFoundError('Sujet non trouvé');
    }

    return prisma.topic.update({
      where: { id },
      data: { isLocked: !topic.isLocked },
      include: {
        author: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
          },
        },
      },
    });
  }

  static async getCategories() {
    const result = await prisma.topic.groupBy({
      by: ['category'],
      _count: {
        id: true,
      },
      orderBy: {
        category: 'asc',
      },
    });

    return result.map(item => ({
      name: item.category,
      count: item._count.id,
    }));
  }
}

module.exports = ForumService;
