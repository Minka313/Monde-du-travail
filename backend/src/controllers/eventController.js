const eventService = require('../services/eventService');

class EventController {
  static async getAllEvents(req, res, next) {
    try {
      const { type } = req.query;
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 20;

      const result = await eventService.getAllEvents(type, page, limit);

      res.json({
        success: true,
        data: result.events,
        pagination: result.pagination,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getEventById(req, res, next) {
    try {
      const event = await eventService.getEventById(req.params.id);
      res.json({
        success: true,
        data: event,
      });
    } catch (error) {
      next(error);
    }
  }

  static async createEvent(req, res, next) {
    try {
      const event = await eventService.createEvent(req.body, req.user.id);
      res.status(201).json({
        success: true,
        message: 'Événement créé',
        data: event,
      });
    } catch (error) {
      next(error);
    }
  }

  static async updateEvent(req, res, next) {
    try {
      const event = await eventService.updateEvent(req.params.id, req.body);
      res.json({
        success: true,
        message: 'Événement mis à jour',
        data: event,
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteEvent(req, res, next) {
    try {
      await eventService.deleteEvent(req.params.id);
      res.json({
        success: true,
        message: 'Événement supprimé',
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = EventController;