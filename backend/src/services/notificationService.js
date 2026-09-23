const webpush = require('web-push');
const prisma = require('../config/database');
const logger = require('../utils/logger');
const { BadRequestError, ForbiddenError, NotFoundError, UnauthorizedError } = require('../utils/errors');

const VAPID_PUBLIC_KEY = process.env.VAPID_PUBLIC_KEY || null;
const VAPID_PRIVATE_KEY = process.env.VAPID_PRIVATE_KEY || null;
const VAPID_SUBJECT = process.env.VAPID_SUBJECT || 'mailto:contact@mondedutravail.com';

// Initialisation VAPID
try {
  if (VAPID_PUBLIC_KEY && VAPID_PRIVATE_KEY) {
    webpush.setVapidDetails(VAPID_SUBJECT, VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY);
    logger.info('Web Push VAPID initialisé avec succès');
  } else {
    logger.warn('Web Push désactivé : clés VAPID manquantes');
  }
} catch (err) {
  logger.error(`Échec de l'initialisation VAPID: ${err.message}`);
}

class NotificationService {
  /**
   * Clé publique VAPID pour le frontend
   */
  getVapidPublicKey() {
    return VAPID_PUBLIC_KEY;
  }

  /**
   * Enregistrer ou mettre à jour un abonnement Web Push
   */
  async saveSubscription(userId, { endpoint, keys, userAgent }) {
    if (!userId || !endpoint || !keys?.p256dh || !keys?.auth) {
      throw new BadRequestError('Données de souscription push invalides');
    }

    const existing = await prisma.pushSubscription.findUnique({ where: { endpoint } });
    if (existing?.userId && existing.userId !== userId) {
      throw new ForbiddenError('Cet abonnement Push appartient déjà à un autre compte');
    }

    return await prisma.pushSubscription.upsert({
      where: { endpoint },
      update: {
        userId: userId || null,
        p256dh: keys.p256dh,
        auth: keys.auth,
        userAgent: userAgent || null,
        updatedAt: new Date(),
      },
      create: {
        userId: userId || null,
        endpoint,
        p256dh: keys.p256dh,
        auth: keys.auth,
        userAgent: userAgent || null,
      },
    });
  }

  /**
   * Supprimer un abonnement Web Push (désactivation)
   */
  async removeSubscription(userId, endpoint) {
    if (!userId || !endpoint) return false;
    try {
      await prisma.pushSubscription.deleteMany({
        where: { endpoint, userId },
      });
      return true;
    } catch (err) {
      logger.error(`Erreur suppression subscription: ${err.message}`);
      return false;
    }
  }

  /**
   * Créer et émettre une notification (ciblée ou globale)
   */
  async createNotification({ userId = null, type = 'SYSTEM', title, message, url = null, imageUrl = null, dedupeKey = null }) {
    if (!title || !message) {
      throw new Error('Le titre et le message de la notification sont requis');
    }

    // Une clé d'événement rend les publications rejouables sans créer de doublon.
    const notification = dedupeKey
      ? await prisma.notification.upsert({
        where: { dedupeKey },
        update: {},
        create: { userId: userId || null, type, title, message, url, imageUrl, dedupeKey },
      })
      : await prisma.notification.create({
        data: { userId: userId || null, type, title, message, url, imageUrl },
      });

    // 2. Envoi du Push natif en tâche de fond (asynchrone)
    this.sendPushNotification({ userId, notification }).catch(err => {
      logger.error(`Erreur envoi push natif: ${err.message}`);
    });

    return notification;
  }

  /**
   * Diffusion d'une alerte générale à tous les membres et abonnés (Broadcast)
   */
  async broadcastNotification({ type = 'ANNOUNCEMENT', title, message, url = null, imageUrl = null, dedupeKey = null }) {
    return await this.createNotification({
      userId: null,
      type,
      title,
      message,
      url,
      imageUrl,
      dedupeKey,
    });
  }

  /**
   * Envoi du push via web-push aux abonnements concernés
   */
  async sendPushNotification({ userId, notification }) {
    if (!VAPID_PUBLIC_KEY || !VAPID_PRIVATE_KEY) {
      return;
    }

    const payload = JSON.stringify({
      id: notification.id,
      title: notification.title,
      body: notification.message,
      icon: '/frontend/logo.png',
      badge: '/frontend/logo.png',
      image: notification.imageUrl || undefined,
      url: notification.url || '/frontend/index.html',
      type: notification.type,
      createdAt: notification.createdAt,
      vibrate: [200, 100, 200],
    });

    // Récupérer les abonnements cibles
    let subscriptions = [];
    if (userId) {
      subscriptions = await prisma.pushSubscription.findMany({
        where: { userId },
      });
    } else {
      // Broadcast : tous les abonnements enregistrés
      subscriptions = await prisma.pushSubscription.findMany();
    }

    if (!subscriptions || subscriptions.length === 0) {
      return;
    }

    const deadEndpoints = [];

    const sendPromises = subscriptions.map(async sub => {
      const pushSubscription = {
        endpoint: sub.endpoint,
        keys: {
          p256dh: sub.p256dh,
          auth: sub.auth,
        },
      };

      try {
        await webpush.sendNotification(pushSubscription, payload, {
          TTL: 86400, // 24 heures
        });
      } catch (err) {
        // 410 Gone ou 404 Not Found : l'utilisateur a désinstallé ou révoqué l'autorisation
        if (err.statusCode === 410 || err.statusCode === 404) {
          deadEndpoints.push(sub.endpoint);
        } else {
          logger.warn(`Échec push endpoint ${sub.endpoint.slice(0, 30)}...: ${err.message}`);
        }
      }
    });

    await Promise.allSettled(sendPromises);

    // Purge automatique des endpoints révoqués
    if (deadEndpoints.length > 0) {
      await prisma.pushSubscription.deleteMany({
        where: { endpoint: { in: deadEndpoints } },
      }).catch(() => {});
      logger.info(`Nettoyage de ${deadEndpoints.length} abonnements push expirés/révoqués`);
    }
  }

  /**
   * Récupérer les notifications de l'utilisateur (personnelles + globales)
   */
  async getUserNotifications(userId = null, { page = 1, limit = 20, unreadOnly = false } = {}) {
    const pageNum = Math.max(1, parseInt(page, 10) || 1);
    const limitNum = Math.min(50, Math.max(1, parseInt(limit, 10) || 20));
    const skip = (pageNum - 1) * limitNum;

    if (!userId) {
      throw new UnauthorizedError('Authentification requise pour consulter les notifications');
    }

    const where = {
      OR: [
        { userId },
        ...(unreadOnly ? [{ userId: null, reads: { none: { userId } } }] : [{ userId: null }]),
      ],
    };

    const [items, total, unreadCount] = await Promise.all([
      prisma.notification.findMany({
        where,
        include: { reads: { where: { userId }, select: { id: true } } },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limitNum,
      }),
      prisma.notification.count({ where }),
      prisma.notification.count({
        where: {
          OR: [
            { userId, isRead: false },
            { userId: null, reads: { none: { userId } } },
          ],
        },
      }),
    ]);

    const normalizedItems = items.map(item => ({
      ...item,
      isRead: item.userId ? item.isRead : item.reads.length > 0,
      reads: undefined,
    }));

    return {
      notifications: normalizedItems,
      total,
      unreadCount,
      page: pageNum,
      totalPages: Math.ceil(total / limitNum),
    };
  }

  /**
   * Marquer une notification comme lue
   */
  async markAsRead(notificationId, userId = null) {
    if (!userId) {
      throw new UnauthorizedError('Authentification requise pour marquer une notification comme lue');
    }

    const notif = await prisma.notification.findUnique({
      where: { id: notificationId },
    });

    if (!notif) {
      throw new NotFoundError('Notification introuvable');
    }

    // Sécurité : si la notification est privée, vérifier qu'elle appartient bien à l'utilisateur
    if (notif.userId && notif.userId !== userId) {
      throw new ForbiddenError('Accès non autorisé à cette notification');
    }

    if (!notif.userId) {
      await prisma.notificationRead.upsert({
        where: { notificationId_userId: { notificationId, userId } },
        update: { readAt: new Date() },
        create: { notificationId, userId },
      });
      return { ...notif, isRead: true, readAt: new Date() };
    }

    return await prisma.notification.update({
      where: { id: notificationId },
      data: {
        isRead: true,
        readAt: new Date(),
      },
    });
  }

  /**
   * Tout marquer comme lu pour l'utilisateur
   */
  async markAllAsRead(userId = null) {
    if (!userId) {
      throw new UnauthorizedError('Authentification requise pour marquer les notifications comme lues');
    }

    const where = { userId, isRead: false };

    const result = await prisma.notification.updateMany({
      where,
      data: {
        isRead: true,
        readAt: new Date(),
      },
    });

    const unreadBroadcasts = await prisma.notification.findMany({
      where: { userId: null, reads: { none: { userId } } },
      select: { id: true },
    });

    if (unreadBroadcasts.length > 0) {
      await prisma.notificationRead.createMany({
        data: unreadBroadcasts.map(({ id }) => ({ notificationId: id, userId })),
        skipDuplicates: true,
      });
    }

    return { updatedCount: result.count + unreadBroadcasts.length };
  }

  /**
   * Statistiques administrateur
   */
  async getStats() {
    const [subscribersCount, totalNotifications, unreadCount] = await Promise.all([
      prisma.pushSubscription.count(),
      prisma.notification.count(),
      prisma.notification.count({ where: { isRead: false } }),
    ]);

    return {
      subscribersCount,
      totalNotifications,
      unreadCount,
    };
  }
}

module.exports = new NotificationService();
