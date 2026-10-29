const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const prisma = require('../config/database');
const { UnauthorizedError, ConflictError, BadRequestError, ForbiddenError } = require('../utils/errors');
const logger = require('../utils/logger');
const AuditService = require('./auditService');
const RbacService = require('./rbacService');
const EmailService = require('./emailService');
const SettingsService = require('./settingsService');
const totp = require('../utils/totp');
const { signAccessToken, signRefreshToken, matchesPassword } = require('../utils/tokens');

class AuthService {
  // Inscription d'un nouveau membre : le compte reste inactif et une demande
  // d'adhésion est créée pour validation par un administrateur.
  static async register(userData) {
    const { email, password, firstName, lastName, motivation } = userData;

    if (!(await SettingsService.registrationsOpen())) {
      throw new ForbiddenError('Les inscriptions sont momentanément fermées. Reviens bientôt !');
    }

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

    await AuthService.notifyMembershipRequest(user, motivation);

    return user;
  }

  // E-mails (candidat + bureau) et alerte dans l'admin pour chaque demande d'adhésion
  static async notifyMembershipRequest(user, motivation) {
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

    // Alerte dans l'admin pour toutes les personnes qui valident les adhésions
    try {
      const notificationService = require('./notificationService');
      const approvers = await prisma.user.findMany({
        where: {
          isActive: true,
          OR: [
            { role: 'ULTRA_ADMIN' },
            { adminRoles: { some: { isActive: true, status: 'APPROVED', role: { permissions: { some: { permission: { code: 'membership.approve' } } } } } } },
          ],
        },
        select: { id: true },
      });
      await Promise.allSettled(approvers.map((a) => notificationService.createNotification({
        userId: a.id,
        type: 'MEMBERSHIP',
        title: '📋 Nouvelle demande d\'adhésion',
        message: `${user.firstName} ${user.lastName} souhaite rejoindre le club.`,
        url: '/admin-frontend/index.html#approvals',
        dedupeKey: `MEMBERSHIP:${user.id}:SUBMITTED:${a.id}`,
      })));
    } catch (err) {
      logger.warn('Alerte des validateurs non envoyée', { error: err.message });
    }

  }

  /**
   * Compte visiteur gratuit : forum, alertes, profil d'orientation. Actif dès que l'adresse
   * e-mail est confirmée ; l'adhésion au club (formations, mentorat) se demande ensuite.
   */
  static async registerVisitor({ email, password, firstName, lastName }) {
    if (!(await SettingsService.registrationsOpen())) {
      throw new ForbiddenError('Les inscriptions sont momentanément fermées. Reviens bientôt !');
    }
    const normalizedEmail = email.trim().toLowerCase();
    if (await prisma.user.findFirst({ where: { email: { equals: normalizedEmail, mode: 'insensitive' } } })) {
      throw new ConflictError('Cet email est déjà utilisé');
    }
    const user = await prisma.user.create({
      data: {
        email: normalizedEmail,
        password: await bcrypt.hash(password, 12),
        firstName,
        lastName,
        role: 'VISITOR',
        isActive: false,
        isVerified: false,
      },
      select: { id: true, email: true, firstName: true, lastName: true, role: true, createdAt: true },
    });
    logger.info('Nouveau compte visiteur (confirmation e-mail envoyée)', { userId: user.id });
    await AuthService.sendVisitorVerification(user);
    return user;
  }

  static visitorVerificationToken(userId) {
    return jwt.sign({ sub: userId, purpose: 'verify-email' }, process.env.JWT_SECRET, { expiresIn: '48h' });
  }

  static async sendVisitorVerification(user) {
    const base = (process.env.FRONTEND_URL || 'https://lemondedutravail.org').replace(/\/$/, '');
    const url = `${base}/login?verifier=${encodeURIComponent(AuthService.visitorVerificationToken(user.id))}`;
    return EmailService.notifyVisitorVerification({ to: user.email, firstName: user.firstName, url });
  }

  // Lien de confirmation reçu par e-mail : active le compte visiteur
  static async verifyVisitorEmail(token) {
    let payload;
    try {
      payload = jwt.verify(token, process.env.JWT_SECRET);
    } catch (_) {
      throw new BadRequestError('Lien expiré ou invalide : demande un nouveau lien depuis la page de connexion.');
    }
    if (payload.purpose !== 'verify-email') throw new BadRequestError('Lien invalide');
    const user = await prisma.user.findUnique({ where: { id: payload.sub }, select: { id: true, role: true, isVerified: true } });
    if (!user) throw new BadRequestError('Compte introuvable');
    if (user.role === 'VISITOR' && !user.isVerified) {
      await prisma.user.update({ where: { id: user.id }, data: { isActive: true, isVerified: true } });
    }
    return { verified: true };
  }

  // Nouveau lien : même réponse que l'adresse existe ou non (pas de divulgation des comptes)
  static async resendVisitorVerification(email) {
    const user = await prisma.user.findFirst({
      where: { email: { equals: String(email || '').trim().toLowerCase(), mode: 'insensitive' }, role: 'VISITOR', isVerified: false },
      select: { id: true, email: true, firstName: true },
    });
    if (user) await AuthService.sendVisitorVerification(user);
    return { sent: true };
  }

  // Un visiteur demande à rejoindre le club : demande d'adhésion examinée par le bureau
  static async requestMembership(userId, motivation) {
    const user = await prisma.user.findUnique({ where: { id: userId }, select: { id: true, email: true, firstName: true, lastName: true, role: true, createdAt: true } });
    if (!user) throw new BadRequestError('Compte introuvable');
    if (user.role !== 'VISITOR') throw new BadRequestError('Tu es déjà adhérent du club.');
    const pending = await prisma.membershipRequest.findFirst({ where: { userId, status: 'PENDING' } });
    if (pending) return { status: 'PENDING', alreadyPending: true };
    await prisma.membershipRequest.create({ data: { userId, motivation: motivation || '', status: 'PENDING' } });
    await AuthService.notifyMembershipRequest(user, motivation);
    return { status: 'PENDING', alreadyPending: false };
  }

  static async getMembershipStatus(userId) {
    const user = await prisma.user.findUnique({ where: { id: userId }, select: { role: true } });
    const last = await prisma.membershipRequest.findFirst({ where: { userId }, orderBy: { createdAt: 'desc' }, select: { status: true, createdAt: true, reviewedAt: true } });
    return { isVisitor: user?.role === 'VISITOR', request: last };
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

    if (!user.isActive && user.role === 'VISITOR' && !user.isVerified) {
      throw new ForbiddenError('Confirme d\'abord ton adresse e-mail : clique sur le lien que nous t\'avons envoyé (pense aux spams).');
    }

    if (!user.isActive) {
      throw new ForbiddenError('Votre compte n\'est pas encore activé. Veuillez contacter un administrateur.');
    }

    // Si le 2FA est activé sur le compte, émettre un jeton temporaire scoped
    const emailMethod = user.twoFactorEnabled && user.twoFactorMethod === 'EMAIL';
    if (emailMethod || (user.twoFactorEnabled && user.twoFactorSecret)) {
      const tempToken = jwt.sign(
        { id: user.id, email: user.email, scope: '2fa_verification' },
        process.env.JWT_SECRET,
        { expiresIn: emailMethod ? '15m' : '5m' }
      );
      // Méthode « code par e-mail » : le code part automatiquement
      let sentTo = null;
      if (emailMethod) {
        const TwoFactorService = require('./twoFactorService');
        sentTo = (await TwoFactorService.sendEmailCode(user.id).catch(() => ({ sentTo: TwoFactorService.maskEmail(user.email) }))).sentTo;
      }

      return {
        require2FA: true,
        method: emailMethod ? 'EMAIL' : 'TOTP',
        ...(sentTo ? { sentTo } : {}),
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

    const accessToken = signAccessToken(user);
    const refreshToken = signRefreshToken(user);

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
  // Nouveau code par e-mail pendant la connexion (code non reçu ou expiré)
  static async resendLogin2FACode(tempToken) {
    let payload;
    try {
      payload = jwt.verify(tempToken, process.env.JWT_SECRET);
    } catch (err) {
      throw new UnauthorizedError('Session expirée : reconnecte-toi avec ton mot de passe');
    }
    if (payload.scope !== '2fa_verification') throw new UnauthorizedError('Jeton invalide');
    const user = await prisma.user.findUnique({ where: { id: payload.id }, select: { id: true, isActive: true, twoFactorMethod: true } });
    if (!user || !user.isActive || user.twoFactorMethod !== 'EMAIL') throw new BadRequestError('Renvoi impossible pour ce compte');
    const TwoFactorService = require('./twoFactorService');
    return TwoFactorService.sendEmailCode(user.id);
  }

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

    if (user.twoFactorMethod === 'EMAIL') {
      const TwoFactorService = require('./twoFactorService');
      const check = await TwoFactorService.checkEmailCode(user.id, code);
      if (!check.ok) throw new UnauthorizedError(check.reason);
    } else if (!totp.verifyTOTP(code, user.twoFactorSecret)) {
      throw new UnauthorizedError('Code 2FA incorrect ou expiré');
    }

    const accessToken = signAccessToken(user);
    const refreshToken = signRefreshToken(user);

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

      // Mot de passe changé depuis l'émission du jeton : session révoquée
      if (!matchesPassword(payload, user.password)) {
        throw new UnauthorizedError('Session révoquée');
      }

      const newAccessToken = signAccessToken(user);

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

    const baseUrl = process.env.FRONTEND_URL || 'https://lemondedutravail.org';
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