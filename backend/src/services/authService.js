const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const prisma = require('../config/database');
const { UnauthorizedError, ConflictError, BadRequestError } = require('../utils/errors');
const logger = require('../utils/logger');
const AuditService = require('./auditService');
const RbacService = require('./rbacService');

class AuthService {
  // Inscription d'un nouveau membre
  static async register(userData) {
    const { email, password, firstName, lastName } = userData;

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

    logger.info('Nouvelle inscription', { userId: user.id, email: user.email });

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