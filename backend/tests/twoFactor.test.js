const request = require('supertest');
const { app } = require('../src/app');
const prisma = require('../src/config/database');
const totp = require('../src/utils/totp');
const bcrypt = require('bcrypt');

describe('Two-Factor Authentication (2FA / TOTP)', () => {
  let userToken;
  let userId;
  const userEmail = 'test2fa@mondedutravail.com';
  const userPassword = 'TestPassword123!';

  beforeAll(async () => {
    // Créer un utilisateur de test dédié pour le 2FA
    const hash = await bcrypt.hash(userPassword, 10);
    const user = await prisma.user.upsert({
      where: { email: userEmail },
      update: { password: hash, isActive: true, isVerified: true, twoFactorEnabled: false, twoFactorSecret: null },
      create: {
        email: userEmail,
        password: hash,
        firstName: 'Test2FA',
        lastName: 'Admin',
        role: 'ADMIN',
        isActive: true,
        isVerified: true,
      },
    });
    userId = user.id;

    // Login pour récupérer le token
    const loginRes = await request(app)
      .post('/api/auth/login')
      .send({ email: userEmail, password: userPassword });
    userToken = loginRes.body.data.accessToken;
  });

  afterAll(async () => {
    await prisma.user.deleteMany({ where: { email: userEmail } });
    await prisma.$disconnect();
  });

  describe('TOTP Utility Functions', () => {
    it('should generate a 32-character base32 secret', () => {
      const secret = totp.generateSecret();
      expect(secret).toBeDefined();
      expect(typeof secret).toBe('string');
      expect(secret.length).toBe(32);
    });

    it('should generate a 6-digit numeric TOTP code', () => {
      const secret = totp.generateSecret();
      const code = totp.generateTOTP(secret);
      expect(code).toMatch(/^\d{6}$/);
    });

    it('should verify valid TOTP code and reject invalid or corrupted code', () => {
      const secret = totp.generateSecret();
      const validCode = totp.generateTOTP(secret);
      expect(totp.verifyTOTP(validCode, secret)).toBe(true);
      expect(totp.verifyTOTP('000000', secret)).toBe(false);
      expect(totp.verifyTOTP('invalid', secret)).toBe(false);
      expect(totp.verifyTOTP(null, secret)).toBe(false);
    });

    it('should generate valid otpauth URI', () => {
      const secret = totp.generateSecret();
      const uri = totp.getOtpAuthUri({ secret, accountName: 'user@test.com' });
      expect(uri).toContain('otpauth://totp/');
      expect(uri).toContain(`secret=${secret}`);
    });
  });

  describe('2FA Management Endpoints', () => {
    let generatedSecret;

    it('GET /api/admin/2fa/status - should report disabled initially', async () => {
      const res = await request(app)
        .get('/api/admin/2fa/status')
        .set('Authorization', `Bearer ${userToken}`);
      expect(res.status).toBe(200);
      expect(res.body.data.enabled).toBe(false);
    });

    it('POST /api/admin/2fa/setup - should generate setup secret and qrCodeUrl', async () => {
      const res = await request(app)
        .post('/api/admin/2fa/setup')
        .set('Authorization', `Bearer ${userToken}`);
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.secret).toBeDefined();
      expect(res.body.data.qrCodeUrl).toContain('https://api.qrserver.com');
      generatedSecret = res.body.data.secret;
    });

    it('POST /api/admin/2fa/verify - should reject invalid 6-digit code', async () => {
      const res = await request(app)
        .post('/api/admin/2fa/verify')
        .set('Authorization', `Bearer ${userToken}`)
        .send({ code: '999999' });
      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
    });

    it('POST /api/admin/2fa/verify - should activate 2FA with valid TOTP code', async () => {
      const validCode = totp.generateTOTP(generatedSecret);
      const res = await request(app)
        .post('/api/admin/2fa/verify')
        .set('Authorization', `Bearer ${userToken}`)
        .send({ code: validCode });
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);

      const statusRes = await request(app)
        .get('/api/admin/2fa/status')
        .set('Authorization', `Bearer ${userToken}`);
      expect(statusRes.body.data.enabled).toBe(true);
    });

    it('POST /api/auth/login - should require 2FA after activation', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({ email: userEmail, password: userPassword });
      expect(res.status).toBe(200);
      expect(res.body.require2FA).toBe(true);
      expect(res.body.data.tempToken).toBeDefined();

      // Finaliser avec login-2fa
      const tempToken = res.body.data.tempToken;
      const validCode = totp.generateTOTP(generatedSecret);

      const finalRes = await request(app)
        .post('/api/auth/login-2fa')
        .send({ tempToken, code: validCode });
      expect(finalRes.status).toBe(200);
      expect(finalRes.body.data.accessToken).toBeDefined();
    });

    it('POST /api/admin/2fa/disable - should reject wrong password', async () => {
      const res = await request(app)
        .post('/api/admin/2fa/disable')
        .set('Authorization', `Bearer ${userToken}`)
        .send({ password: 'WrongPassword!' });
      expect(res.status).toBe(401);
    });

    it('POST /api/admin/2fa/disable - should disable 2FA with correct password', async () => {
      const res = await request(app)
        .post('/api/admin/2fa/disable')
        .set('Authorization', `Bearer ${userToken}`)
        .send({ password: userPassword });
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);

      const statusRes = await request(app)
        .get('/api/admin/2fa/status')
        .set('Authorization', `Bearer ${userToken}`);
      expect(statusRes.body.data.enabled).toBe(false);
    });
  });
});
