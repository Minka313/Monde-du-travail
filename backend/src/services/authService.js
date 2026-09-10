const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const prisma = require('../config/database');
const { UnauthorizedError, ConflictError, BadRequestError } = require('../utils/errors');
const logger = require('../utils/logger');
const AuditService = require('./auditService');
const RbacService = require('./rbacService');
const totp = require('../utils/totp');

class AuthService {
  // Inscription d'un nouveau membre : le compte reste inactif et une demande
  // d'adhésion est créée pour validation par un administrateur.
  static async register(userData) {
    const { email, password, firstName, lastName, motivation } = userData;

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new ConflictError('Cet email est déjà utilisé');
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
        role: 'MEMBER',
        isActive: false,
        isVerified: false,
        memberships: {
          create: {
            motivation: motivation || '',
            status: 'PENDING',
          },
        },
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        createdAt: true,
      },
    });

    logger.info('Nouvelle inscription (demande d\'adhésion créée)', { userId: user.id, email: user.email });

    return user;
  }

  // Connexion
  static async login(email, password, ipAddress, userAgent) {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new UnauthorizedError('Email ou mot de passe incorrect');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedError('Email ou mot de passe incorrect');
    }

    if (!user.isActive) {
      throw new UnauthorizedError('Votre compte n\'est pas encore activé. Veuillez contacter un administrateur.');
    }

    // Si le 2FA est activé sur le compte, émettre un jeton temporaire scoped
    if (user.twoFactorEnabled && user.twoFactorSecret) {
      const tempToken = jwt.sign(
        { id: user.id, email: user.email, scope: '2fa_verification' },
        process.env.JWT_SECRET,
        { expiresIn: '5m' }
      );

      return {
        require2FA: true,
        tempToken,
        user: {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role,
        },
      };
    }

    const accessToken = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRE || '7d' }
    );

    const refreshToken = jwt.sign(
      { id: user.id },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: process.env.JWT_REFRESH_EXPIRE || '30d' }
    );

    // Mettre à jour lastLoginAt
    await prisma.user.update({
      where: { id: user.id },
      data: { lastLoginAt: new Date() },
    });

    // Audit log pour connexion
    await AuditService.log({
      userId: user.id,
      action: 'auth.login',
      module: 'Auth',
      resource: 'User',
      resourceId: user.id,
      ipAddress: ipAddress || null,
      userAgent: userAgent || null,
      result: 'SUCCESS',
      metadata: { email: user.email, role: user.role },
    });

    logger.info('Connexion réussie', { userId: user.id, email: user.email });

    // Contexte administratif effectif (permissions + rôles admin) pour l'UI
    const { permissions, adminRoles } = await RbacService.getUserAdminContext(user.id);

    return {
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        permissions,
        adminRoles,
      },
      accessToken,
      refreshToken,
    };
  }

  // Connexion étape 2 : validation du code 2FA
  static async login2FA(tempToken, code, ipAddress, userAgent) {
    if (!tempToken || !code) {
      throw new BadRequestError('Jeton temporaire et code à 6 chiffres requis');
    }

    let payload;
    try {
      payload = jwt.verify(tempToken, process.env.JWT_SECRET);
    } catch (err) {
      throw new UnauthorizedError('Session temporaire 2FA expirée ou invalide');
    }

    if (payload.scope !== '2fa_verification') {
      throw new UnauthorizedError('Jeton invalide pour la vérification 2FA');
    }

    const user = await prisma.user.findUnique({
      where: { id: payload.id },
    });

    if (!user || !user.isActive) {
      throw new UnauthorizedError('Utilisateur introuvable ou compte inactif');
    }

    const isValid = totp.verifyTOTP(code, user.twoFactorSecret);
    if (!isValid) {
      throw new UnauthorizedError('Code 2FA incorrect ou expiré');
    }

    const accessToken = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRE || '7d' }
    );

    const refreshToken = jwt.sign(
      { id: user.id },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: process.env.JWT_REFRESH_EXPIRE || '30d' }
    );

    await prisma.user.update({
      where: { id: user.id },
      data: { lastLoginAt: new Date() },
    });

    await AuditService.log({
      userId: user.id,
      action: 'auth.login.2fa',
      module: 'Auth',
      resource: 'User',
      resourceId: user.id,
      ipAddress: ipAddress || null,
      userAgent: userAgent || null,
      result: 'SUCCESS',
      metadata: { email: user.email, role: user.role },
    });

    logger.info('Connexion 2FA réussie', { userId: user.id, email: user.email });

    const { permissions, adminRoles } = await RbacService.getUserAdminContext(user.id);

    return {
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        permissions,
        adminRoles,
      },
      accessToken,
      refreshToken,
    };
  }

  // Déconnexion
  static async logout(userId, ipAddress, userAgent) {
    // Audit log pour déconnexion
    await AuditService.log({
      userId,
      action: 'auth.logout',
      module: 'Auth',
      resource: 'User',
      resourceId: userId,
      ipAddress: ipAddress || null,
      userAgent: userAgent || null,
      result: 'SUCCESS',
    });
  }

  // Rafraîchir le token
  static async refreshToken(refreshToken) {
    if (!refreshToken) {
      throw new UnauthorizedError('Refresh token manquant');
    }

    try {
      const payload = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);

      const user = await prisma.user.findUnique({
        where: { id: payload.id },
      });

      if (!user || !user.isActive) {
        throw new UnauthorizedError('Utilisateur non trouvé ou inactif');
      }

      const newAccessToken = jwt.sign(
        { id: user.id, email: user.email, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRE || '7d' }
      );

      return { accessToken: newAccessToken };
    } catch (error) {
      throw new UnauthorizedError('Refresh token invalide ou expiré');
    }
  }
}

module.exports = AuthService;