const prisma = require('../config/database');
const { NotFoundError, BadRequestError, ForbiddenError } = require('../utils/errors');
const logger = require('../utils/logger');

let schemaEnsured = false;
let schemaPromise = null;

class ForumService {
  /**
   * Synchronise automatiquement les colonnes et tables manquantes dans Supabase
   */
  static async ensureSchema(force = false) {
    if (schemaEnsured && !force) return { status: 'already_ensured' };
    if (schemaPromise && !force) return schemaPromise;

    schemaPromise = (async () => {
      const logs = [];
      try {
        // 1. Colonnes sur topics
        await prisma.$executeRawUnsafe(`
          ALTER TABLE topics
            ADD COLUMN IF NOT EXISTS "likeCount" INTEGER NOT NULL DEFAULT 0,
            ADD COLUMN IF NOT EXISTS "bestReplyId" TEXT,
            ADD COLUMN IF NOT EXISTS "isEdited" BOOLEAN NOT NULL DEFAULT false,
            ADD COLUMN IF NOT EXISTS "editedAt" TIMESTAMPTZ;
        `);
        logs.push('topics columns verified');

        // 2. Colonnes sur replies
        await prisma.$executeRawUnsafe(`
          ALTER TABLE replies
            ADD COLUMN IF NOT EXISTS "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
            ADD COLUMN IF NOT EXISTS "isSolution" BOOLEAN NOT NULL DEFAULT false,
            ADD COLUMN IF NOT EXISTS "isEdited" BOOLEAN NOT NULL DEFAULT false,
            ADD COLUMN IF NOT EXISTS "editedAt" TIMESTAMPTZ,
            ADD COLUMN IF NOT EXISTS "likeCount" INTEGER NOT NULL DEFAULT 0;
        `);
        logs.push('replies columns verified');

        // 3. Index replies
        await prisma.$executeRawUnsafe(`
          CREATE INDEX IF NOT EXISTS replies_is_solution_idx ON replies ("isSolution");
        `);
        logs.push('replies index verified');

        // 4. Table topic_likes
        await prisma.$executeRawUnsafe(`
          CREATE TABLE IF NOT EXISTS topic_likes (
            id TEXT PRIMARY KEY,
            "topicId" TEXT NOT NULL REFERENCES topics(id) ON DELETE CASCADE,
            "userId" TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
            CONSTRAINT topic_likes_topic_user_unique UNIQUE ("topicId", "userId")
          );
        `);
        await prisma.$executeRawUnsafe(`
          CREATE INDEX IF NOT EXISTS topic_likes_topic_idx ON topic_likes ("topicId");
        `);
        await prisma.$executeRawUnsafe(`
          CREATE INDEX IF NOT EXISTS topic_likes_user_idx ON topic_likes ("userId");
        `);
        logs.push('topic_likes table verified');

        // 5. Table reply_likes
        await prisma.$executeRawUnsafe(`
          CREATE TABLE IF NOT EXISTS reply_likes (
            id TEXT PRIMARY KEY,
            "replyId" TEXT NOT NULL REFERENCES replies(id) ON DELETE CASCADE,
            "userId" TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
            CONSTRAINT reply_likes_reply_user_unique UNIQUE ("replyId", "userId")
          );
        `);
        await prisma.$executeRawUnsafe(`
          CREATE INDEX IF NOT EXISTS reply_likes_reply_idx ON reply_likes ("replyId");
        `);
        await prisma.$executeRawUnsafe(`
          CREATE INDEX IF NOT EXISTS reply_likes_user_idx ON reply_likes ("userId");
        `);
        logs.push('reply_likes table verified');

        // 6. Enum ForumReportStatus
        try {
          await prisma.$executeRawUnsafe(`CREATE TYPE "ForumReportStatus" AS ENUM ('PENDING', 'REVIEWED', 'DISMISSED');`);
          logs.push('enum ForumReportStatus created');
        } catch (e) {
          logs.push('enum ForumReportStatus exists');
        }

        // 7. Table forum_reports
        await prisma.$executeRawUnsafe(`
          CREATE TABLE IF NOT EXISTS forum_reports (
            id TEXT PRIMARY KEY,
            reason TEXT NOT NULL,
            details TEXT,
            status "ForumReportStatus" NOT NULL DEFAULT 'PENDING',
            "reporterId" TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            "topicId" TEXT REFERENCES topics(id) ON DELETE CASCADE,
            "replyId" TEXT REFERENCES replies(id) ON DELETE CASCADE,
            "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
            "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
          );
        `);
        await prisma.$executeRawUnsafe(`
          CREATE INDEX IF NOT EXISTS forum_reports_status_idx ON forum_reports (status);
        `);
        await prisma.$executeRawUnsafe(`
          CREATE INDEX IF NOT EXISTS forum_reports_topic_idx ON forum_reports ("topicId");
        `);
        await prisma.$executeRawUnsafe(`
          CREATE INDEX IF NOT EXISTS forum_reports_reply_idx ON forum_reports ("replyId");
        `);
        await prisma.$executeRawUnsafe(`
          CREATE INDEX IF NOT EXISTS forum_reports_reporter_idx ON forum_reports ("reporterId");
        `);
        logs.push('forum_reports table verified');

        schemaEnsured = true;
        logger.info('Auto-migration: Schéma Forum synchronisé avec succès dans Supabase');
        return { status: 'success', logs };
      } catch (err) {
        logger.warn('Auto-migration forum échouée ou partielle:', err.message);
        return { status: 'error', error: err.message, logs };
      } finally {
        schemaPromise = null;
      }
    })();

    return schemaPromise;
  }

  /**
   * Récupère la liste des sujets avec filtres et pagination
   */
  static async getAllTopics({ category, search, status, tag, page = 1, limit = 20, sort = 'latest', userId } = {}) {
    await ForumService.ensureSchema();
    const where = {};

    if (category) {
      where.category = category;
    }

    if (tag) {
      where.tags = { has: tag };
    }

    if (status === 'pinned') {
      where.isPinned = true;
    } else if (status === 'resolved') {
      where.isResolved = true;
    } else if (status === 'locked') {
      where.isLocked = true;
    } else if (status === 'unanswered') {
      where.replyCount = 0;
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
      orderBy = { likeCount: 'desc' };
    } else if (sort === 'replies') {
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

    const includeClause = {
      author: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
          role: true,
          avatarUrl: true,
          adminRoles: {
            where: { isActive: true },
            select: { role: { select: { name: true } } },
          },
        },
      },
    };

    if (userId) {
      includeClause.likes = {
        where: { userId },
        select: { id: true },
      };
    }

    const [rawTopics, total] = await Promise.all([
      prisma.topic.findMany({
        where,
        skip,
        take: limitNum,
        orderBy: orderByClause,
        include: includeClause,
      }),
      prisma.topic.count({ where }),
    ]);

    const topics = rawTopics.map(t => {
      const hasLiked = userId ? Boolean(t.likes && t.likes.length > 0) : false;
      const { likes, ...rest } = t;
      return {
        ...rest,
        hasLiked,
      };
    });

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

  /**
   * Récupère un sujet par son ID avec incrément des vues et liste des réponses
   */
  static async getTopicById(id, userId = null) {
    await ForumService.ensureSchema();
    try {
      const topic = await prisma.topic.update({
        where: { id },
        data: { views: { increment: 1 } },
        include: {
          author: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              role: true,
              avatarUrl: true,
              adminRoles: {
                where: { isActive: true },
                select: { role: { select: { name: true } } },
              },
            },
          },
          likes: userId ? {
            where: { userId },
            select: { id: true },
          } : false,
          replies: {
            include: {
              author: {
                select: {
                  id: true,
                  firstName: true,
                  lastName: true,
                  role: true,
                  avatarUrl: true,
                  adminRoles: {
                    where: { isActive: true },
                    select: { role: { select: { name: true } } },
                  },
                },
              },
              likes: userId ? {
                where: { userId },
                select: { id: true },
              } : false,
            },
            orderBy: [
              { isSolution: 'desc' },
              { createdAt: 'asc' },
            ],
          },
        },
      });

      const hasLiked = userId ? Boolean(topic.likes && topic.likes.length > 0) : false;
      const formattedReplies = (topic.replies || []).map(r => {
        const replyHasLiked = userId ? Boolean(r.likes && r.likes.length > 0) : false;
        const { likes, ...restReply } = r;
        return {
          ...restReply,
          hasLiked: replyHasLiked,
        };
      });

      const { likes, ...restTopic } = topic;
      return {
        ...restTopic,
        hasLiked,
        replies: formattedReplies,
      };
    } catch (err) {
      if (err.code === 'P2025') {
        throw new NotFoundError('Sujet non trouvé');
      }
      throw err;
    }
  }

  /**
   * Crée un nouveau sujet
   */
  static async createTopic(data, userId) {
    await ForumService.ensureSchema();
    const topic = await prisma.topic.create({
      data: {
        title: data.title,
        content: data.content,
        category: data.category,
        authorId: userId,
        tags: data.tags || [],
      },
      include: {
        author: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            role: true,
            avatarUrl: true,
          },
        },
      },
    });

    return topic;
  }

  /**
   * Met à jour un sujet existant (Auteur ou Modérateur)
   */
  static async updateTopic(id, data, user) {
    const topic = await prisma.topic.findUnique({ where: { id } });
    if (!topic) {
      throw new NotFoundError('Sujet non trouvé');
    }

    const isAuthor = topic.authorId === user.id;
    const isModerator = ['ADMIN', 'ULTRA_ADMIN'].includes(user.role) || (user.permissions && user.permissions.includes('forum.moderate'));

    if (!isAuthor && !isModerator) {
      throw new ForbiddenError('Vous n\'êtes pas autorisé à modifier ce sujet');
    }

    const updated = await prisma.topic.update({
      where: { id },
      data: {
        title: data.title !== undefined ? data.title : topic.title,
        content: data.content !== undefined ? data.content : topic.content,
        category: data.category !== undefined ? data.category : topic.category,
        tags: data.tags !== undefined ? data.tags : topic.tags,
        isEdited: true,
        editedAt: new Date(),
      },
      include: {
        author: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            role: true,
            avatarUrl: true,
          },
        },
      },
    });

    return updated;
  }

  /**
   * Supprime un sujet (Auteur ou Admin)
   */
  static async deleteTopic(id, user = null) {
    const topic = await prisma.topic.findUnique({ where: { id } });
    if (!topic) {
      throw new NotFoundError('Sujet non trouvé');
    }

    if (user) {
      const isAuthor = topic.authorId === user.id;
      const canDelete = ['ADMIN', 'ULTRA_ADMIN'].includes(user.role) || (user.permissions && user.permissions.includes('forum.delete'));
      if (!isAuthor && !canDelete) {
        throw new ForbiddenError('Vous n\'êtes pas autorisé à supprimer ce sujet');
      }
    }

    await prisma.topic.delete({
      where: { id },
    });
  }

  /**
   * Ajoute une réponse à un sujet
   */
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
          content: data.content,
          authorId: userId,
          topicId,
        },
        include: {
          author: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              role: true,
              avatarUrl: true,
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

    // Notification automatique à l'auteur du sujet
    if (topic.authorId && topic.authorId !== userId) {
      try {
        const notificationService = require('./notificationService');
        const authorName = `${reply.author?.firstName || ''} ${reply.author?.lastName || ''}`.trim() || 'Un membre';
        await notificationService.createNotification({
          userId: topic.authorId,
          type: 'FORUM',
          title: '💬 Nouvelle réponse sur votre sujet !',
          message: `${authorName} a répondu à votre sujet « ${topic.title} ».`,
          url: `/frontend/forum-topic.html?id=${topic.id}`,
          dedupeKey: `FORUM_REPLY:${reply.id}`,
        });
      } catch (err) {
        logger.warn('Notification de réponse forum non créée', { replyId: reply.id, error: err.message });
      }
    }

    return reply;
  }

  /**
   * Modifie une réponse existante (Auteur ou Modérateur)
   */
  static async updateReply(replyId, content, user) {
    const reply = await prisma.reply.findUnique({ where: { id: replyId } });
    if (!reply) {
      throw new NotFoundError('Réponse non trouvée');
    }

    const isAuthor = reply.authorId === user.id;
    const isModerator = ['ADMIN', 'ULTRA_ADMIN'].includes(user.role) || (user.permissions && user.permissions.includes('forum.moderate'));

    if (!isAuthor && !isModerator) {
      throw new ForbiddenError('Vous n\'êtes pas autorisé à modifier cette réponse');
    }

    return prisma.reply.update({
      where: { id: replyId },
      data: {
        content,
        isEdited: true,
        editedAt: new Date(),
      },
      include: {
        author: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            role: true,
            avatarUrl: true,
          },
        },
      },
    });
  }

  /**
   * Supprime une réponse (Auteur ou Modérateur)
   */
  static async deleteReply(replyId, user) {
    const reply = await prisma.reply.findUnique({
      where: { id: replyId },
      include: { topic: true },
    });

    if (!reply) {
      throw new NotFoundError('Réponse non trouvée');
    }

    const isAuthor = reply.authorId === user.id;
    const canDelete = ['ADMIN', 'ULTRA_ADMIN'].includes(user.role) ||
      (user.permissions && (user.permissions.includes('forum.delete') || user.permissions.includes('forum.moderate')));

    if (!isAuthor && !canDelete) {
      throw new ForbiddenError('Vous n\'êtes pas autorisé à supprimer cette réponse');
    }

    await prisma.$transaction(async (tx) => {
      // Si la réponse supprimée était la meilleure solution, réinitialiser sur le topic
      if (reply.isSolution || reply.topic?.bestReplyId === replyId) {
        await tx.topic.update({
          where: { id: reply.topicId },
          data: {
            bestReplyId: null,
            isResolved: false,
          },
        });
      }

      await tx.reply.delete({
        where: { id: replyId },
      });

      await tx.topic.update({
        where: { id: reply.topicId },
        data: {
          replyCount: { decrement: 1 },
        },
      });
    });

    return { success: true };
  }

  /**
   * Toggle Like/Upvote sur un sujet
   */
  static async toggleTopicLike(topicId, userId) {
    const topic = await prisma.topic.findUnique({ where: { id: topicId } });
    if (!topic) {
      throw new NotFoundError('Sujet non trouvé');
    }

    const existingLike = await prisma.topicLike.findUnique({
      where: {
        topicId_userId: {
          topicId,
          userId,
        },
      },
    });

    if (existingLike) {
      await prisma.$transaction([
        prisma.topicLike.delete({ where: { id: existingLike.id } }),
        prisma.topic.update({
          where: { id: topicId },
          data: { likeCount: { decrement: 1 } },
        }),
      ]);
      return { liked: false, likeCount: Math.max(0, topic.likeCount - 1) };
    } else {
      await prisma.$transaction([
        prisma.topicLike.create({
          data: {
            topicId,
            userId,
          },
        }),
        prisma.topic.update({
          where: { id: topicId },
          data: { likeCount: { increment: 1 } },
        }),
      ]);
      return { liked: true, likeCount: topic.likeCount + 1 };
    }
  }

  /**
   * Toggle Like/Upvote sur une réponse
   */
  static async toggleReplyLike(replyId, userId) {
    const reply = await prisma.reply.findUnique({ where: { id: replyId } });
    if (!reply) {
      throw new NotFoundError('Réponse non trouvée');
    }

    const existingLike = await prisma.replyLike.findUnique({
      where: {
        replyId_userId: {
          replyId,
          userId,
        },
      },
    });

    if (existingLike) {
      await prisma.$transaction([
        prisma.replyLike.delete({ where: { id: existingLike.id } }),
        prisma.reply.update({
          where: { id: replyId },
          data: { likeCount: { decrement: 1 } },
        }),
      ]);
      return { liked: false, likeCount: Math.max(0, reply.likeCount - 1) };
    } else {
      await prisma.$transaction([
        prisma.replyLike.create({
          data: {
            replyId,
            userId,
          },
        }),
        prisma.reply.update({
          where: { id: replyId },
          data: { likeCount: { increment: 1 } },
        }),
      ]);
      return { liked: true, likeCount: reply.likeCount + 1 };
    }
  }

  /**
   * Marquer ou retirer une réponse comme "Meilleure réponse / Solution acceptée"
   */
  static async toggleSolution(topicId, replyId, user) {
    const topic = await prisma.topic.findUnique({ where: { id: topicId } });
    if (!topic) {
      throw new NotFoundError('Sujet non trouvé');
    }

    const reply = await prisma.reply.findUnique({ where: { id: replyId } });
    if (!reply || reply.topicId !== topicId) {
      throw new NotFoundError('Réponse non trouvée pour ce sujet');
    }

    const isAuthor = topic.authorId === user.id;
    const isModerator = ['ADMIN', 'ULTRA_ADMIN'].includes(user.role) || (user.permissions && user.permissions.includes('forum.moderate'));

    if (!isAuthor && !isModerator) {
      throw new ForbiddenError('Seul l\'auteur de la question ou un modérateur peut valider une solution');
    }

    if (reply.isSolution) {
      // Démarquer la solution
      await prisma.$transaction([
        prisma.reply.update({
          where: { id: replyId },
          data: { isSolution: false },
        }),
        prisma.topic.update({
          where: { id: topicId },
          data: {
            bestReplyId: null,
            isResolved: false,
          },
        }),
      ]);
      return { isSolution: false, message: 'Solution retirée' };
    } else {
      // Marquer comme solution (retirer l'ancienne solution si existante)
      await prisma.$transaction([
        prisma.reply.updateMany({
          where: { topicId, isSolution: true },
          data: { isSolution: false },
        }),
        prisma.reply.update({
          where: { id: replyId },
          data: { isSolution: true },
        }),
        prisma.topic.update({
          where: { id: topicId },
          data: {
            bestReplyId: replyId,
            isResolved: true,
          },
        }),
      ]);

      // Notifier l'auteur de la réponse acceptée
      if (reply.authorId && reply.authorId !== user.id) {
        try {
          const notificationService = require('./notificationService');
          await notificationService.createNotification({
            userId: reply.authorId,
            type: 'FORUM',
            title: '🌟 Votre réponse a été choisie comme Solution !',
            message: `Félicitations ! Votre réponse au sujet « ${topic.title} » a été certifiée comme la meilleure réponse.`,
            url: `/frontend/forum-topic.html?id=${topic.id}`,
            dedupeKey: `FORUM_SOLUTION:${reply.id}`,
          });
        } catch (err) {
          logger.warn('Notification solution non créée', { error: err.message });
        }
      }

      return { isSolution: true, message: 'Réponse validée comme solution' };
    }
  }

  /**
   * Recommande des sujets similaires basés sur la catégorie et les tags partagés
   */
  static async getSimilarTopics(topicId, limit = 4) {
    await ForumService.ensureSchema();
    const currentTopic = await prisma.topic.findUnique({
      where: { id: topicId },
      select: { id: true, category: true, tags: true },
    });

    if (!currentTopic) {
      return [];
    }

    const orClauses = [{ category: currentTopic.category }];
    if (currentTopic.tags && currentTopic.tags.length > 0) {
      orClauses.push({ tags: { hasSome: currentTopic.tags } });
    }

    const topics = await prisma.topic.findMany({
      where: {
        id: { not: topicId },
        OR: orClauses,
      },
      take: limit,
      orderBy: [
        { lastActivityAt: 'desc' },
        { replyCount: 'desc' },
      ],
      select: {
        id: true,
        title: true,
        category: true,
        replyCount: true,
        likeCount: true,
        views: true,
        isResolved: true,
        createdAt: true,
      },
    });

    return topics;
  }

  /**
   * Récupère la liste des tags populaires
   */
  static async getPopularTags(limit = 15) {
    await ForumService.ensureSchema();
    const topics = await prisma.topic.findMany({
      select: { tags: true },
    });

    const tagCounts = {};
    topics.forEach(t => {
      if (Array.isArray(t.tags)) {
        t.tags.forEach(tag => {
          const normalized = tag.trim().toLowerCase();
          if (normalized) {
            tagCounts[normalized] = (tagCounts[normalized] || 0) + 1;
          }
        });
      }
    });

    return Object.entries(tagCounts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, limit);
  }

  /**
   * Crée un signalement de contenu (Sujet ou Réponse)
   */
  static async createReport(data, reporterId) {
    const { topicId, replyId, reason, details } = data;

    if (!topicId && !replyId) {
      throw new BadRequestError('Le signalement doit cibler un sujet ou une réponse');
    }

    const report = await prisma.forumReport.create({
      data: {
        reason,
        details: details || null,
        reporterId,
        topicId: topicId || null,
        replyId: replyId || null,
        status: 'PENDING',
      },
    });

    return report;
  }

  /**
   * Récupère la liste des signalements pour les administrateurs
   */
  static async getReports({ status = 'PENDING', page = 1, limit = 20 } = {}) {
    const where = {};
    if (status && status !== 'all') {
      where.status = status;
    }

    const pageNum = Math.max(1, parseInt(page, 10) || 1);
    const limitNum = Math.min(50, Math.max(1, parseInt(limit, 10) || 20));
    const skip = (pageNum - 1) * limitNum;

    const [reports, total] = await Promise.all([
      prisma.forumReport.findMany({
        where,
        skip,
        take: limitNum,
        orderBy: { createdAt: 'desc' },
        include: {
          reporter: {
            select: { id: true, firstName: true, lastName: true, email: true },
          },
          topic: {
            select: { id: true, title: true, content: true, authorId: true },
          },
          reply: {
            select: { id: true, content: true, topicId: true, authorId: true },
          },
        },
      }),
      prisma.forumReport.count({ where }),
    ]);

    return {
      reports,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        pages: Math.ceil(total / limitNum) || 1,
      },
    };
  }

  /**
   * Traite ou classe un signalement (Modérateur)
   */
  static async resolveReport(reportId, { status }) {
    const report = await prisma.forumReport.findUnique({ where: { id: reportId } });
    if (!report) {
      throw new NotFoundError('Signalement non trouvé');
    }

    return prisma.forumReport.update({
      where: { id: reportId },
      data: { status },
    });
  }

  /**
   * Récupère les catégories existantes avec le nombre de sujets
   */
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
}

module.exports = ForumService;
