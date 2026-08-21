const forumService = require('../services/forumService');

class ForumController {
  static async getAllTopics(req, res, next) {
    try {
      const { category, search, status, page, limit, sort } = req.query;

      const result = await forumService.getAllTopics({
        category,
        search,
        status,
        page: page || 1,
        limit: limit || 20,
        sort: sort || 'latest',
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
      const topic = await forumService.getTopicById(req.params.id);
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

  static async deleteTopic(req, res, next) {
    try {
      await forumService.deleteTopic(req.params.id);
      res.json({
        success: true,
        message: 'Sujet supprimé',
      });
    } catch (error) {
      next(error);
    }
  }

  static async togglePin(req, res, next) {
    try {
      const topic = await forumService.togglePin(req.params.id);
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
      res.json({
        success: true,
        message: topic.isLocked ? 'Sujet verrouillé' : 'Sujet déverrouillé',
        data: topic,
      });
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
