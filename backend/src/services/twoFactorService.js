const bcrypt = require('bcrypt');
const prisma = require('../config/database');
const totp = require('../utils/totp');
const { BadRequestError, NotFoundError, UnauthorizedError } = require('../utils/errors');
const AuditService = require('./auditService');
const logger = require('../utils/logger');

class TwoFactorService {
  /**
   * Initialise la configuration 2FA pour un utilisateur :
   * génère un secret et l'URI pour l'application d'authentification.
   */
  static async generateSetup(userId) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, email: true, twoFactorEnabled: true },
    });

    if (!user) {
      throw new NotFoundError('Utilisateur introuvable');
    }

    const secret = totp.generateSecret();
    const otpAuthUri = totp.getOtpAuthUri({
      secret,
      accountName: user.email,
      issuer: 'Le Monde du Travail',
    });

    // Sauvegarder le secret temporaire (non encore activé)
    await prisma.user.update({
      where: { id: userId },
      data: { twoFactorSecret: secret },
    });

    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(otpAuthUri)}`;

    return {
      secret,
      otpAuthUri,
      qrCodeUrl,
      twoFactorEnabled: user.twoFactorEnabled,
    };
  }

  /**
   * Valide le premier code TOTP saisi par l'utilisateur et active définitivement le 2FA
   */
  static async verifyAndEnable(userId, token) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, email: true, twoFactorSecret: true, twoFactorEnabled: true },
    });

    if (!user) {
      throw new NotFoundError('Utilisateur introuvable');
    }

    if (!user.twoFactorSecret) {
      throw new BadRequestError('Aucune configuration 2FA initiée. Veuillez régénérer un QR Code.');
    }

    const isValid = totp.verifyTOTP(token, user.twoFactorSecret);
    if (!isValid) {
      throw new BadRequestError('Code à 6 chiffres incorrect ou expiré');
    }

    await prisma.user.update({
      where: { id: userId },
      data: { twoFactorEnabled: true },
    });

    await AuditService.log({
      userId: user.id,
      action: 'auth.2fa.enable',
      module: 'Auth',
      resource: 'User',
      resourceId: user.id,
      result: 'SUCCESS',
    });

    logger.info('2FA activé pour l\'utilisateur', { userId: user.id, email: user.email });

    return {
      success: true,
      message: 'Authentification à deux facteurs (2FA) activée avec succès',
    };
  }

  /**
   * Désactive le 2FA après vérification du mot de passe de l'utilisateur
   */
  static async disable(userId, password) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, email: true, password: true, twoFactorEnabled: true },
    });

    if (!user) {
      throw new NotFoundError('Utilisateur introuvable');
    }

    if (!user.twoFactorEnabled) {
      return { success: true, message: 'Le 2FA n\'est pas activé sur ce compte' };
    }

    if (!password) {
      throw new BadRequestError('Le mot de passe actuel est requis pour désactiver le 2FA');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new UnauthorizedError('Mot de passe incorrect');
    }

    await prisma.user.update({
      where: { id: userId },
      data: {
        twoFactorEnabled: false,
        twoFactorSecret: null,
      },
    });

    await AuditService.log({
      userId: user.id,
      action: 'auth.2fa.disable',
      module: 'Auth',
      resource: 'User',
      resourceId: user.id,
      result: 'SUCCESS',
    });

    logger.info('2FA désactivé pour l\'utilisateur', { userId: user.id, email: user.email });

    return {
      success: true,
      message: 'Authentification à deux facteurs (2FA) désactivée',
    };
  }

  /**
   * Vérifie le statut 2FA actuel de l'utilisateur
   */
  static async getStatus(userId) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, email: true, twoFactorEnabled: true },
    });

    if (!user) {
      throw new NotFoundError('Utilisateur introuvable');
    }

    return {
      enabled: user.twoFactorEnabled,
    };
  }
}

module.exports = TwoFactorService;
