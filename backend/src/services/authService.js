const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const prisma = require('../config/database');
const { UnauthorizedError, ConflictError, BadRequestError } = require('../utils/errors');
const logger = require('../utils/logger');
const AuditService = require('./auditService');
const RbacService = require('./rbacService');
const EmailService = require('./emailService');
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

    // Notifications par email (fiabilisées pour l'environnement Serverless Vercel)
    try {
      await Promise.allSettled([
        EmailService.notifyCandidateMembershipSubmitted({
          to: user.email,
          candidateName: user.firstName,
        }),
        EmailService.notifyAdminNewMembership({
          candidateName: `${user.firstName} ${user.lastName}`,
          candidateEmail: user.email,
          motivation: motivation || '',
          createdAt: user.createdAt,
        }),
      ]);
    } catch (err) {
      logger.warn('Erreur lors de l\'envoi des emails de notification d\'adhésion', { error: err.message });
    }

    return user;
  }

  // Connexion
  static async login(email, password, ipAddress, userAgent) {
    const normalizedEmail = (email || '').trim().toLowerCase();
    let user = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    if (!user) {
      user = await prisma.user.findFirst({
        where: {
          email: {
            equals: normalizedEmail,
            mode: 'insensitive',
          },
        },
      });
    }

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
        avatarUrl: user.avatarUrl || null,
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

  // 1. Demande de réinitialisation de mot de passe (Forgot Password)
  static async requestPasswordReset(email, ipAddress, userAgent) {
    if (!email) {
      throw new BadRequestError('Adresse email requise');
    }

    const normalizedEmail = email.trim().toLowerCase();
    const user = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    // Protection anti-énumération : réponse générique sans lever d'erreur
    if (!user || !user.isActive) {
      logger.info('Demande de réinitialisation pour email inexistant ou inactif', { email: normalizedEmail });
      return {
        message: 'Si cette adresse correspond à un compte actif, un lien de réinitialisation vient de vous être envoyé.',
      };
    }

    // Le secret de signature intègre le hash actuel du mot de passe :
    // - Dès que le mot de passe change, le token devient instantanément caduc.
    // - Zéro champ supplémentaire ou migration de table requise.
    const resetSecret = (process.env.JWT_SECRET || 'jwt_secret_dev') + user.password;
    const resetToken = jwt.sign(
      { id: user.id, email: user.email, scope: 'password_reset' },
      resetSecret,
      { expiresIn: '15m' }
    );

    const baseUrl = process.env.FRONTEND_URL || 'https://monde-du-travail.vercel.app';
    const resetUrl = `${baseUrl.replace(/\/$/, '')}/frontend/reset-password.html?token=${encodeURIComponent(resetToken)}`;

    // Envoi de l'email via Resend
    try {
      await EmailService.notifyPasswordReset({
        to: user.email,
        recipientName: user.firstName,
        resetUrl,
      });
    } catch (err) {
      logger.warn('Échec envoi email réinitialisation mot de passe', { error: err.message, userId: user.id });
    }

    // Audit log
    await AuditService.log({
      userId: user.id,
      action: 'auth.password_reset_requested',
      module: 'Auth',
      resource: 'User',
      resourceId: user.id,
      ipAddress: ipAddress || null,
      userAgent: userAgent || null,
      result: 'SUCCESS',
    }).catch(() => {});

    return {
      message: 'Si cette adresse correspond à un compte actif, un lien de réinitialisation vient de vous être envoyé.',
    };
  }

  // 2. Réinitialisation effective du mot de passe avec le token (Reset Password)
  static async resetPassword(token, newPassword, ipAddress, userAgent) {
    if (!token) {
      throw new BadRequestError('Jeton de réinitialisation requis');
    }
    if (!newPassword || newPassword.length < 8) {
      throw new BadRequestError('Le mot de passe doit contenir au moins 8 caractères');
    }

    let decoded;
    try {
      decoded = jwt.decode(token);
    } catch (err) {
      throw new BadRequestError('Le lien de réinitialisation est invalide ou corrompu');
    }

    if (!decoded || !decoded.id || decoded.scope !== 'password_reset') {
      throw new BadRequestError('Le lien de réinitialisation est invalide ou corrompu');
    }

    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
    });

    if (!user || !user.isActive) {
      throw new BadRequestError('Utilisateur introuvable ou compte désactivé');
    }

    const resetSecret = (process.env.JWT_SECRET || 'jwt_secret_dev') + user.password;
    try {
      jwt.verify(token, resetSecret);
    } catch (err) {
      if (err.name === 'TokenExpiredError') {
        throw new BadRequestError('Ce lien de réinitialisation a expiré (validité 15 minutes). Veuillez refaire une demande.');
      }
      throw new BadRequestError('Ce lien de réinitialisation est invalide ou a déjà été utilisé.');
    }

    const hashedPassword = await bcrypt.hash(newPassword, 12);

    await prisma.user.update({
      where: { id: user.id },
      data: { password: hashedPassword },
    });

    logger.info('Mot de passe réinitialisé avec succès', { userId: user.id, email: user.email });

    await AuditService.log({
      userId: user.id,
      action: 'auth.password_reset_completed',
      module: 'Auth',
      resource: 'User',
      resourceId: user.id,
      ipAddress: ipAddress || null,
      userAgent: userAgent || null,
      result: 'SUCCESS',
    }).catch(() => {});

    return {
      success: true,
      message: 'Votre mot de passe a été réinitialisé avec succès. Vous pouvez maintenant vous connecter.',
    };
  }
}

module.exports = AuthService;