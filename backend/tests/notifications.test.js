const request = require('supertest');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const webpush = require('web-push');
const { app } = require('../src/app');

const prisma = new PrismaClient();

describe('Notifications & Web Push API', () => {
  jest.setTimeout(45000);
  const PASSWORD = 'TestPassword123!';
  let ultraToken, memberToken;
  let ultraUser, memberUser;
  let sendNotificationSpy;

  const testEndpoint = 'https://updates.push.services.mozilla.com/wpush/v2/test-token-123456';
  const memberEndpoint = 'https://fcm.googleapis.com/fcm/send/test-fcm-endpoint-789';

  beforeAll(async () => {
    // Spy on webpush to avoid external network requests during tests
    sendNotificationSpy = jest.spyOn(webpush, 'sendNotification').mockImplementation(async () => ({
      statusCode: 201,
      body: '',
      headers: {},
    }));

    // Cleanup existing test data
    await prisma.pushSubscription.deleteMany({
      where: { endpoint: { in: [testEndpoint, memberEndpoint] } },
    });
    await prisma.notification.deleteMany({
      where: {
        OR: [
          { title: { contains: 'Test Notif' } },
          { user: { email: { contains: '@notif.test.com' } } },
        ],
      },
    });
    await prisma.user.deleteMany({
      where: { email: { contains: '@notif.test.com' } },
    });

    // Create test users
    const hash = await bcrypt.hash(PASSWORD, 10);
    ultraUser = await prisma.user.create({
      data: {
        email: 'ultra@notif.test.com',
        password: hash,
        firstName: 'Ultra',
        lastName: 'Admin',
        role: 'ULTRA_ADMIN',
        isActive: true,
        isVerified: true,
      },
    });

    memberUser = await prisma.user.create({
      data: {
        email: 'member@notif.test.com',
        password: hash,
        firstName: 'Normal',
        lastName: 'Member',
        role: 'MEMBER',
        isActive: true,
        isVerified: true,
      },
    });

    const createToken = user =>
      jwt.sign({ id: user.id, email: user.email, role: user.role }, process.env.JWT_SECRET || 'test-secret', {
        expiresIn: '1d',
      });

    ultraToken = createToken(ultraUser);
    memberToken = createToken(memberUser);
  }, 45000);

  afterAll(async () => {
    if (sendNotificationSpy) {
      sendNotificationSpy.mockRestore();
    }
    await prisma.pushSubscription.deleteMany({
      where: { endpoint: { in: [testEndpoint, memberEndpoint] } },
    });
    await prisma.notification.deleteMany({
      where: {
        OR: [
          { title: { contains: 'Test Notif' } },
          { user: { email: { contains: '@notif.test.com' } } },
        ],
      },
    });
    await prisma.user.deleteMany({
      where: { email: { contains: '@notif.test.com' } },
    });
    await prisma.$disconnect();
  }, 45000);

  describe('GET /api/notifications/vapid-key', () => {
    it('doit renvoyer la clé publique VAPID sans authentification', async () => {
      const res = await request(app).get('/api/notifications/vapid-key');
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(typeof res.body.data.publicKey).toBe('string');
      expect(res.body.data.publicKey.length).toBeGreaterThan(10);
    });
  });

  describe('POST /api/notifications/subscribe', () => {
    it('doit échouer avec 400 si le body est incomplet', async () => {
      const res = await request(app)
        .post('/api/notifications/subscribe')
        .send({ endpoint: 'https://bad-endpoint.com' });
      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
    });

    it('doit enregistrer une souscription anonyme avec succès', async () => {
      const res = await request(app)
        .post('/api/notifications/subscribe')
        .send({
          endpoint: testEndpoint,
          keys: {
            p256dh: 'BNcRdreALRFXTkOOUHK1EtK2wtaz5Ry4YfYCA_0QT9ScVUpg',
            auth: 'tBHItJI5svbpez7KI4CCXg',
          },
        });

      expect(res.status).toBe(201);
      expect(res.body.success).toBe(true);

      // Vérifier en base
      const sub = await prisma.pushSubscription.findUnique({
        where: { endpoint: testEndpoint },
      });
      expect(sub).not.toBeNull();
      expect(sub.userId).toBeNull();
    });

    it('doit associer le userId lorsque l’utilisateur est authentifié', async () => {
      const res = await request(app)
        .post('/api/notifications/subscribe')
        .set('Authorization', `Bearer ${memberToken}`)
        .send({
          endpoint: memberEndpoint,
          keys: {
            p256dh: 'BNcRdreALRFXTkOOUHK1EtK2wtaz5Ry4YfYCA_0QT9ScVUpg',
            auth: 'tBHItJI5svbpez7KI4CCXg',
          },
        });

      expect(res.status).toBe(201);
      const sub = await prisma.pushSubscription.findUnique({
        where: { endpoint: memberEndpoint },
      });
      expect(sub).not.toBeNull();
      expect(sub.userId).toBe(memberUser.id);
    });
  });

  describe('POST /api/notifications/broadcast', () => {
    it('doit refuser 401 si non authentifié', async () => {
      const res = await request(app)
        .post('/api/notifications/broadcast')
        .send({ title: 'Test Notif Non Auth', message: 'Contenu' });
      expect(res.status).toBe(401);
    });

    it('doit refuser 403 si appel par un membre ordinaire', async () => {
      const res = await request(app)
        .post('/api/notifications/broadcast')
        .set('Authorization', `Bearer ${memberToken}`)
        .send({ title: 'Test Notif Member', message: 'Contenu' });
      expect(res.status).toBe(403);
    });

    it('doit autoriser Ultra Admin et diffuser la notification avec succès', async () => {
      const res = await request(app)
        .post('/api/notifications/broadcast')
        .set('Authorization', `Bearer ${ultraToken}`)
        .send({
          type: 'ANNOUNCEMENT',
          title: 'Test Notif Annonce Officielle',
          message: 'Message test de diffusion push globale',
          url: '/frontend/blog.html',
        });

      expect(res.status).toBe(201);
      expect(res.body.success).toBe(true);
      expect(res.body.data.title).toBe('Test Notif Annonce Officielle');
      expect(res.body.data.type).toBe('ANNOUNCEMENT');
    });
  });

  describe('GET /api/notifications (Centre In-App)', () => {
    it('doit retourner 200 avec les alertes publiques pour un visiteur non authentifié', async () => {
      const res = await request(app).get('/api/notifications');
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(Array.isArray(res.body.data)).toBe(true);
    });

    it('doit retourner la liste des notifications et le décompte des non lues', async () => {
      const res = await request(app)
        .get('/api/notifications')
        .set('Authorization', `Bearer ${memberToken}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(Array.isArray(res.body.data)).toBe(true);
      expect(res.body.pagination).toBeDefined();
      expect(typeof res.body.pagination.unreadCount).toBe('number');
      // La notification broadcast précédente doit être visible
      const found = res.body.data.find(n => n.title === 'Test Notif Annonce Officielle');
      expect(found).toBeDefined();
    });
  });

  describe('PATCH /api/notifications/:id/read & read-all', () => {
    let createdNotif;

    beforeAll(async () => {
      createdNotif = await prisma.notification.create({
        data: {
          userId: memberUser.id,
          type: 'FORUM',
          title: 'Test Notif Réponse Forum',
          message: 'Quelqu un a répondu à votre sujet',
        },
      });
    }, 45000);

    it('doit marquer une notification spécifique comme lue', async () => {
      const res = await request(app)
        .patch(`/api/notifications/${createdNotif.id}/read`)
        .set('Authorization', `Bearer ${memberToken}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.isRead).toBe(true);
    });

    it('doit marquer toutes les notifications comme lues', async () => {
      const res = await request(app)
        .patch('/api/notifications/read-all')
        .set('Authorization', `Bearer ${memberToken}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
    });
  });

  describe('GET /api/notifications/stats', () => {
    it('doit retourner 403 pour un membre ordinaire', async () => {
      const res = await request(app)
        .get('/api/notifications/stats')
        .set('Authorization', `Bearer ${memberToken}`);
      expect(res.status).toBe(403);
    });

    it('doit retourner les statistiques globales pour Ultra Admin', async () => {
      const res = await request(app)
        .get('/api/notifications/stats')
        .set('Authorization', `Bearer ${ultraToken}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(typeof res.body.data.subscribersCount).toBe('number');
      expect(typeof res.body.data.totalNotifications).toBe('number');
      expect(typeof res.body.data.unreadCount).toBe('number');
    });
  });

  describe('POST /api/notifications/unsubscribe', () => {
    it('doit désactiver et supprimer un abonnement', async () => {
      const res = await request(app)
        .post('/api/notifications/unsubscribe')
        .send({ endpoint: testEndpoint });

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);

      const sub = await prisma.pushSubscription.findUnique({
        where: { endpoint: testEndpoint },
      });
      expect(sub).toBeNull();
    });
  });
});
