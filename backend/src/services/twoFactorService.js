const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const QRCode = require('qrcode');
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

    // Génération locale en mémoire : zéro fuite de secret vers un service tiers
    const qrCodeUrl = await QRCode.toDataURL(otpAuthUri);

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
      data: { twoFactorEnabled: true, twoFactorMethod: 'TOTP' },
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
      select: { id: true, email: true, twoFactorEnabled: true, twoFactorMethod: true },
    });

    if (!user) {
      throw new NotFoundError('Utilisateur introuvable');
    }

    return {
      enabled: user.twoFactorEnabled,
      method: user.twoFactorEnabled ? user.twoFactorMethod : null,
    };
  }

  // ===== Code par e-mail (pour qui n'a pas de téléphone) =====

  static maskEmail(email) {
    const [name, domain] = String(email).split('@');
    return `${name.slice(0, 2)}${'•'.repeat(Math.max(1, name.length - 2))}@${domain}`;
  }

  /**
   * Envoie un code à 6 chiffres valable 10 minutes. Seule son empreinte est gardée en base.
   * Un nouvel envoi n'est possible qu'après 30 secondes.
   */
  static async sendEmailCode(userId, { purpose = 'login' } = {}) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, email: true, firstName: true, twoFactorEmailExpires: true },
    });
    if (!user) throw new NotFoundError('Utilisateur introuvable');
    if (user.twoFactorEmailExpires && user.twoFactorEmailExpires.getTime() - Date.now() > (EMAIL_CODE_MINUTES * 60 - 30) * 1000) {
      throw new BadRequestError('Un code vient d\'être envoyé : patiente quelques secondes avant d\'en demander un autre');
    }

    const code = String(crypto.randomInt(0, 1000000)).padStart(6, '0');
    await prisma.user.update({
      where: { id: userId },
      data: {
        twoFactorEmailCode: await bcrypt.hash(code, 10),
        twoFactorEmailExpires: new Date(Date.now() + EMAIL_CODE_MINUTES * 60 * 1000),
        twoFactorEmailAttempts: 0,
      },
    });

    const EmailService = require('./emailService');
    const intro = purpose === 'setup'
      ? 'Voici ton code pour activer la double authentification par e-mail sur l\'administration du club :'
      : 'Voici ton code de connexion à l\'administration du club :';
    await EmailService.sendMail({
      to: user.email,
      subject: `${code} — ton code de connexion Le Monde du Travail`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:480px;margin:0 auto;color:#0f172a;">
          <p>Bonjour ${String(user.firstName || '').replace(/[<>&"]/g, '')},</p>
          <p>${intro}</p>
          <p style="font-size:32px;font-weight:700;letter-spacing:8px;text-align:center;background:#f1f5f9;border-radius:10px;padding:16px;margin:20px 0;">${code}</p>
          <p>Il est valable ${EMAIL_CODE_MINUTES} minutes. Si tu n'es pas à l'origine de cette demande, change ton mot de passe et préviens la Présidence.</p>
          <p style="color:#64748b;font-size:13px;">Le Monde du Travail — ne transmets jamais ce code à personne, l'équipe du club ne te le demandera jamais.</p>
        </div>`,
    });
    return { sentTo: this.maskEmail(user.email), expiresInMinutes: EMAIL_CODE_MINUTES };
  }

  /** Vérifie le code reçu par e-mail : 5 essais au plus, code à usage unique. */
  static async checkEmailCode(userId, code) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { twoFactorEmailCode: true, twoFactorEmailExpires: true, twoFactorEmailAttempts: true },
    });
    if (!user || !user.twoFactorEmailCode || !user.twoFactorEmailExpires || user.twoFactorEmailExpires < new Date()) {
      return { ok: false, reason: 'Code expiré : demande un nouveau code' };
    }
    if (user.twoFactorEmailAttempts >= EMAIL_CODE_MAX_ATTEMPTS) {
      return { ok: false, reason: 'Trop d\'essais : demande un nouveau code' };
    }
    const ok = /^\d{6}$/.test(String(code)) && await bcrypt.compare(String(code), user.twoFactorEmailCode);
    await prisma.user.update({
      where: { id: userId },
      data: ok
        ? { twoFactorEmailCode: null, twoFactorEmailExpires: null, twoFactorEmailAttempts: 0 }
        : { twoFactorEmailAttempts: { increment: 1 } },
    });
    return ok ? { ok: true } : { ok: false, reason: 'Code incorrect' };
  }

  /** Active la double authentification par e-mail après saisie du code reçu. */
  static async verifyEmailAndEnable(userId, code) {
    const check = await this.checkEmailCode(userId, code);
    if (!check.ok) throw new BadRequestError(check.reason);
    await prisma.user.update({
      where: { id: userId },
      data: { twoFactorEnabled: true, twoFactorMethod: 'EMAIL', twoFactorSecret: null },
    });
    await AuditService.log({
      userId, action: 'auth.2fa.enable', module: 'Auth', resource: 'User', resourceId: userId, result: 'SUCCESS',
      metadata: { method: 'EMAIL' },
    });
    return { success: true, message: 'Double authentification par e-mail activée' };
  }
}

const EMAIL_CODE_MINUTES = 10;
const EMAIL_CODE_MAX_ATTEMPTS = 5;

module.exports = TwoFactorService;
