const notificationService = require('../services/notificationService');
const { ServiceUnavailableError } = require('../utils/errors');

class NotificationController {
  /**
   * Obtenir la clé publique VAPID
   */
  static async getVapidKey(req, res, next) {
    try {
      const publicKey = notificationService.getVapidPublicKey();
      if (!publicKey) {
        throw new ServiceUnavailableError('Les notifications Push ne sont pas configurées');
      }
      res.json({
        success: true,
        data: { publicKey },
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Enregistrer un abonnement Web Push
   */
  static async subscribe(req, res, next) {
    try {
      const { endpoint, keys, userAgent } = req.body;
      const userId = req.user.id;

      if (!endpoint || !keys) {
        return res.status(400).json({
          success: false,
          message: 'Abonnement incomplet : endpoint et clés requis',
        });
      }

      const subscription = await notificationService.saveSubscription(userId, {
        endpoint,
        keys,
        userAgent: userAgent || req.headers['user-agent'],
      });

      res.status(201).json({
        success: true,
        message: 'Abonnement aux notifications activé avec succès',
        data: subscription,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Se désabonner des notifications Web Push
   */
  static async unsubscribe(req, res, next) {
    try {
      const { endpoint } = req.body;
      if (!endpoint) {
        return res.status(400).json({
          success: false,
          message: 'Endpoint requis pour le désabonnement',
        });
      }

      await notificationService.removeSubscription(req.user.id, endpoint);

      res.json({
        success: true,
        message: 'Désabonnement pris en compte',
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Obtenir les notifications In-App
   */
  static async getNotifications(req, res, next) {
    try {
      const userId = req.user.id;
      const { page, limit, unreadOnly } = req.query;

      const result = await notificationService.getUserNotifications(userId, {
        page,
        limit,
        unreadOnly: unreadOnly === 'true' || unreadOnly === true,
      });

      res.json({
        success: true,
        data: result.notifications,
        pagination: {
          page: result.page,
          totalPages: result.totalPages,
          total: result.total,
          unreadCount: result.unreadCount,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Marquer une notification comme lue
   */
  static async markAsRead(req, res, next) {
    try {
      const { id } = req.params;
      const userId = req.user.id;

      const notification = await notificationService.markAsRead(id, userId);

      res.json({
        success: true,
        message: 'Notification marquée comme lue',
        data: notification,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Tout marquer comme lu
   */
  static async markAllAsRead(req, res, next) {
    try {
      const userId = req.user.id;
      const result = await notificationService.markAllAsRead(userId);

      res.json({
        success: true,
        message: 'Toutes les notifications ont été marquées comme lues',
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Diffusion administrative d'une notification (Broadcast)
   */
  static async broadcast(req, res, next) {
    try {
      const { title, message, url, imageUrl, type } = req.body;

      if (!title || !message) {
        return res.status(400).json({
          success: false,
          message: 'Le titre et le message sont obligatoires',
        });
      }

      if (url && (!url.startsWith('/') || url.startsWith('//') || /[\r\n]/.test(url))) {
        return res.status(400).json({
          success: false,
          message: 'L’URL de notification doit être un chemin interne',
        });
      }

      const notification = await notificationService.broadcastNotification({
        type: type || 'ANNOUNCEMENT',
        title,
        message,
        url: url || '/frontend/index.html',
        imageUrl: imageUrl || null,
      });

      res.status(201).json({
        success: true,
        message: 'Notification diffusée à tous les membres et abonnés avec succès',
        data: notification,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Statistiques administrateur
   */
  static async getStats(req, res, next) {
    try {
      const stats = await notificationService.getStats();
      res.json({
        success: true,
        data: stats,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = NotificationController;
