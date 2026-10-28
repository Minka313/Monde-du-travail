const forumService = require('../services/forumService');
const AuditService = require('../services/auditService');

class ForumController {
  static async getAllTopics(req, res, next) {
    try {
      const { category, search, status, tag, page, limit, sort, match } = req.query;
      const userId = req.user?.id || null;

      const result = await forumService.getAllTopics({
        category,
        search,
        status,
        tag,
        page: page || 1,
        limit: limit || 20,
        sort: sort || 'latest',
        match: match === 'any' ? 'any' : 'all',
        userId,
      });

      res.json({
        success: true,
        data: result.topics,
        pagination: result.pagination,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getTopicById(req, res, next) {
    try {
      const userId = req.user?.id || null;
      const topic = await forumService.getTopicById(req.params.id, userId);
      // Bouton « Valider cette réponse » : mentors vérifiés et Présidence
      topic.canEndorse = Boolean(req.user) && (req.user.role === 'ULTRA_ADMIN' || await forumService.isVerifiedMentor(req.user.id));
      res.json({
        success: true,
        data: topic,
      });
    } catch (error) {
      next(error);
    }
  }

  static async createTopic(req, res, next) {
    try {
      const topic = await forumService.createTopic(req.body, req.user.id);
      res.status(201).json({
        success: true,
        message: 'Sujet créé',
        data: topic,
      });
    } catch (error) {
      next(error);
    }
  }

  static async updateTopic(req, res, next) {
    try {
      const topic = await forumService.updateTopic(req.params.id, req.body, req.user);
      res.json({
        success: true,
        message: 'Sujet mis à jour',
        data: topic,
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteTopic(req, res, next) {
    try {
      await forumService.deleteTopic(req.params.id, req.user);

      if (req.user) {
        await AuditService.log({
          userId: req.user.id,
          action: 'forum.delete',
          module: 'forum',
          resource: 'Topic',
          resourceId: req.params.id,
          ipAddress: req.ip,
          userAgent: req.get('user-agent'),
          result: 'DELETED',
        });
      }

      res.json({
        success: true,
        message: 'Sujet supprimé',
      });
    } catch (error) {
      next(error);
    }
  }

  static async createReply(req, res, next) {
    try {
      const { topicId } = req.params;
      const reply = await forumService.createReply(req.body, req.user.id, topicId);
      res.status(201).json({
        success: true,
        message: 'Réponse ajoutée',
        data: reply,
      });
    } catch (error) {
      next(error);
    }
  }

  static async updateReply(req, res, next) {
    try {
      const { replyId } = req.params;
      const reply = await forumService.updateReply(replyId, req.body.content, req.user);
      res.json({
        success: true,
        message: 'Réponse mise à jour',
        data: reply,
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteReply(req, res, next) {
    try {
      const { replyId } = req.params;
      await forumService.deleteReply(replyId, req.user);
      res.json({
        success: true,
        message: 'Réponse supprimée',
      });
    } catch (error) {
      next(error);
    }
  }

  static async toggleTopicLike(req, res, next) {
    try {
      const result = await forumService.toggleTopicLike(req.params.id, req.user.id);
      res.json({
        success: true,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  static async toggleReplyLike(req, res, next) {
    try {
      const result = await forumService.toggleReplyLike(req.params.replyId, req.user.id);
      res.json({
        success: true,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  static async toggleSolution(req, res, next) {
    try {
      const { id, replyId } = req.params;
      const result = await forumService.toggleSolution(id, replyId, req.user);
      res.json({
        success: true,
        message: result.message,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getSimilarTopics(req, res, next) {
    try {
      const similar = await forumService.getSimilarTopics(req.params.id, 4);
      res.json({
        success: true,
        data: similar,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getPopularTags(req, res, next) {
    try {
      const tags = await forumService.getPopularTags(15);
      res.json({
        success: true,
        data: tags,
      });
    } catch (error) {
      next(error);
    }
  }

  static async createReport(req, res, next) {
    try {
      const report = await forumService.createReport(req.body, req.user.id);
      res.status(201).json({
        success: true,
        message: 'Signalement envoyé. Merci de contribuer à la qualité de la communauté.',
        data: report,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getReports(req, res, next) {
    try {
      const result = await forumService.getReports(req.query);
      res.json({
        success: true,
        data: result.reports,
        pagination: result.pagination,
      });
    } catch (error) {
      next(error);
    }
  }

  static async resolveReport(req, res, next) {
    try {
      const report = await forumService.resolveReport(req.params.id, req.body);
      res.json({
        success: true,
        message: 'Statut du signalement mis à jour',
        data: report,
      });
    } catch (error) {
      next(error);
    }
  }

  static async togglePin(req, res, next) {
    try {
      const topic = await forumService.togglePin(req.params.id);

      if (req.user) {
        await AuditService.log({
          userId: req.user.id,
          action: 'forum.pin',
          module: 'forum',
          resource: 'Topic',
          resourceId: topic.id,
          ipAddress: req.ip,
          userAgent: req.get('user-agent'),
          result: topic.isPinned ? 'PINNED' : 'UNPINNED',
          metadata: { title: topic.title, isPinned: topic.isPinned },
        });
      }

      res.json({
        success: true,
        message: topic.isPinned ? 'Sujet épinglé' : 'Sujet désépinglé',
        data: topic,
      });
    } catch (error) {
      next(error);
    }
  }

  static async toggleResolved(req, res, next) {
    try {
      const topic = await forumService.toggleResolved(req.params.id);

      if (req.user) {
        await AuditService.log({
          userId: req.user.id,
          action: 'forum.resolve',
          module: 'forum',
          resource: 'Topic',
          resourceId: topic.id,
          ipAddress: req.ip,
          userAgent: req.get('user-agent'),
          result: topic.isResolved ? 'RESOLVED' : 'UNRESOLVED',
          metadata: { title: topic.title, isResolved: topic.isResolved },
        });
      }

      res.json({
        success: true,
        message: topic.isResolved ? 'Sujet marqué comme résolu' : 'Sujet marqué comme non résolu',
        data: topic,
      });
    } catch (error) {
      next(error);
    }
  }

  static async toggleLock(req, res, next) {
    try {
      const topic = await forumService.toggleLock(req.params.id);

      if (req.user) {
        await AuditService.log({
          userId: req.user.id,
          action: 'forum.lock',
          module: 'forum',
          resource: 'Topic',
          resourceId: topic.id,
          ipAddress: req.ip,
          userAgent: req.get('user-agent'),
          result: topic.isLocked ? 'LOCKED' : 'UNLOCKED',
          metadata: { title: topic.title, isLocked: topic.isLocked },
        });
      }

      res.json({
        success: true,
        message: topic.isLocked ? 'Sujet verrouillé' : 'Sujet déverrouillé',
        data: topic,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getLinkedTopics(req, res, next) {
    try {
      const data = await forumService.getLinkedTopics(req.query.type, req.query.id);
      res.json({ success: true, data });
    } catch (error) {
      next(error);
    }
  }

  static async getUnansweredTopics(req, res, next) {
    try {
      const result = await forumService.getUnansweredTopics(req.user);
      res.json({ success: true, data: result.topics, pagination: result.pagination });
    } catch (error) {
      next(error);
    }
  }

  static async getForumProfile(req, res, next) {
    try {
      const profile = await forumService.getForumProfile(req.user.id);
      res.json({ success: true, data: profile });
    } catch (error) {
      next(error);
    }
  }

  static async updateForumProfile(req, res, next) {
    try {
      const profile = await forumService.updateForumProfile(req.user.id, req.body.forumDisplayName);
      res.json({ success: true, message: 'Pseudonyme du forum mis à jour', data: profile });
    } catch (error) {
      next(error);
    }
  }

  static async toggleFollow(req, res, next) {
    try {
      const data = await forumService.toggleFollow(req.params.id, req.user.id);
      res.json({ success: true, message: data.following ? 'Tu suis cette discussion' : 'Tu ne suis plus cette discussion', data });
    } catch (error) {
      next(error);
    }
  }

  static async toggleEndorsement(req, res, next) {
    try {
      const data = await forumService.toggleEndorsement(req.params.replyId, req.user);
      res.json({ success: true, message: data.endorsed ? 'Réponse validée' : 'Validation retirée', data });
    } catch (error) {
      next(error);
    }
  }

  static async getCategories(req, res, next) {
    try {
      const categories = await forumService.getCategories();
      res.json({
        success: true,
        data: categories,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ForumController;
