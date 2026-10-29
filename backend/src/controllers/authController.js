const authService = require('../services/authService');
const prisma = require('../config/database');
const logger = require('../utils/logger');
const r2Storage = require('../services/r2StorageService');

const AVATAR_USER_FIELDS = {
  id: true, email: true, firstName: true, lastName: true, role: true, avatarUrl: true, isActive: true, isVerified: true,
};

class AuthController {
  // Inscription
  static async register(req, res, next) {
    try {
      const user = await authService.register(req.body);
      res.status(201).json({
        success: true,
        message: 'Inscription réussie. Votre compte est en attente de validation par un administrateur.',
        data: user,
      });
    } catch (error) {
      next(error);
    }
  }

  static async registerVisitor(req, res, next) {
    try {
      const user = await authService.registerVisitor(req.body);
      res.status(201).json({
        success: true,
        message: 'Compte créé ! Ouvre l\'e-mail que nous venons d\'envoyer et clique sur le lien pour l\'activer.',
        data: user,
      });
    } catch (error) {
      next(error);
    }
  }

  static async verifyEmail(req, res, next) {
    try {
      const data = await authService.verifyVisitorEmail(req.body.token);
      res.json({ success: true, message: 'Adresse confirmée : ton compte est actif, tu peux te connecter.', data });
    } catch (error) {
      next(error);
    }
  }

  static async resendVerification(req, res, next) {
    try {
      await authService.resendVisitorVerification(req.body.email);
      res.json({ success: true, message: 'Si un compte en attente correspond à cette adresse, un nouveau lien vient d\'être envoyé.' });
    } catch (error) {
      next(error);
    }
  }

  static async getMembershipStatus(req, res, next) {
    try {
      res.json({ success: true, data: await authService.getMembershipStatus(req.user.id) });
    } catch (error) {
      next(error);
    }
  }

  static async requestMembership(req, res, next) {
    try {
      const data = await authService.requestMembership(req.user.id, req.body.motivation);
      res.status(data.alreadyPending ? 200 : 201).json({
        success: true,
        message: data.alreadyPending ? 'Ta demande d\'adhésion est déjà en cours d\'examen.' : 'Demande envoyée ! Le bureau du club va l\'examiner.',
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  // Connexion
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      logger.debug('Login attempt', { email, password: password ? '***' : '(empty)' });
      const result = await authService.login(
        email,
        password,
        req.ip || req.connection?.remoteAddress,
        req.get('user-agent')
      );

      // Si le compte exige une validation 2FA, renvoyer le tempToken sans initialiser la session finale
      if (result.require2FA) {
        return res.json({
          success: true,
          require2FA: true,
          message: 'Code à deux facteurs requis',
          data: result,
        });
      }

      // Stocker le refresh token dans un cookie HttpOnly
      res.cookie('refreshToken', result.refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 jours
      });

      res.json({
        success: true,
        message: 'Connexion réussie',
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  // Connexion étape 2 : validation du code 2FA
  static async resendLogin2FA(req, res, next) {
    try {
      const data = await authService.resendLogin2FACode(req.body?.tempToken);
      res.json({ success: true, message: `Nouveau code envoyé à ${data.sentTo}`, data });
    } catch (error) {
      next(error);
    }
  }

  static async login2FA(req, res, next) {
    try {
      const { tempToken, code } = req.body;
      const result = await authService.login2FA(
        tempToken,
        code,
        req.ip || req.connection?.remoteAddress,
        req.get('user-agent')
      );

      res.cookie('refreshToken', result.refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 30 * 24 * 60 * 60 * 1000,
      });

      res.json({
        success: true,
        message: 'Connexion 2FA réussie',
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  // Rafraîchir le token
  static async refresh(req, res, next) {
    try {
      // Support refresh token provided either via HttpOnly cookie or request body
      const refreshToken = (req.cookies && req.cookies.refreshToken) || (req.body && req.body.refreshToken);
      const result = await authService.refreshToken(refreshToken);

      res.json({
        success: true,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  // Déconnexion
  static async logout(req, res) {
    try {
      if (req.user?.id) {
        await authService.logout(
          req.user.id,
          req.ip || req.connection?.remoteAddress,
          req.get('user-agent')
        );
      }
    } catch (error) {
      // Ne pas bloquer la déconnexion si l'audit échoue
      console.error('Logout audit error:', error);
    }
    
    res.clearCookie('refreshToken');
    res.json({
      success: true,
      message: 'Déconnexion réussie',
    });
  }

  // Me (profil de l'utilisateur connecté)
  static async me(req, res, next) {
    try {
      // Postes occupés au bureau : ouvrent l'accès à l'espace bureau du site
      const assignments = await prisma.clubAssignment.findMany({
        where: { userId: req.user.id, isActive: true },
        select: { memberRole: true, position: { select: { id: true, title: true } } },
      });
      res.json({
        success: true,
        data: {
          ...req.user,
          bureauPositions: assignments.map((a) => ({ ...a.position, memberRole: a.memberRole })),
        },
      });
    } catch (error) {
      next(error);
    }
  }

  // Avatar illustré (SVG généré par la page profil), adresse d'image, ou null pour revenir aux initiales.
  // Les photos personnelles passent par uploadAvatar (fichier envoyé au stockage).
  static async updateAvatar(req, res, next) {
    try {
      const { avatarUrl } = req.body || {};
      const value = avatarUrl === null || avatarUrl === '' ? null : avatarUrl;
      const valid = value === null || (typeof value === 'string' && (
        (value.startsWith('data:image/svg+xml') && value.length <= 8 * 1024)
        || (/^https:\/\/[^\s"'<>]+$/.test(value) && value.length <= 1000)
      ));
      if (!valid) {
        return res.status(400).json({ success: false, message: 'Avatar invalide : choisissez un avatar illustré ou importez une photo.' });
      }
      const updatedUser = await prisma.user.update({ where: { id: req.user.id }, data: { avatarUrl: value }, select: AVATAR_USER_FIELDS });
      return res.json({ success: true, message: value ? 'Photo de profil mise à jour avec succès' : 'Photo de profil supprimée', data: updatedUser });
    } catch (error) {
      next(error);
    }
  }

  // Photo personnelle : image recadrée par la page profil, déposée dans le stockage (dossier avatars)
  static async uploadAvatar(req, res, next) {
    try {
      const file = req.file;
      if (!file) return res.status(400).json({ success: false, message: 'Aucune photo reçue.' });
      const b = file.buffer;
      const isJpeg = b.length > 3 && b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff;
      const isPng = b.length > 8 && b.toString('hex', 0, 8) === '89504e470d0a1a0a';
      const isWebp = b.length > 12 && b.toString('ascii', 0, 4) === 'RIFF' && b.toString('ascii', 8, 12) === 'WEBP';
      if (!isJpeg && !isPng && !isWebp) {
        return res.status(400).json({ success: false, message: 'Format non reconnu : utilisez une photo JPG, PNG ou WebP.' });
      }
      const mimeType = isJpeg ? 'image/jpeg' : isPng ? 'image/png' : 'image/webp';
      const stored = await r2Storage.uploadFile({ buffer: b, originalName: `avatar.${mimeType.split('/')[1]}`, mimeType, folder: 'avatars' });
      const updatedUser = await prisma.user.update({ where: { id: req.user.id }, data: { avatarUrl: stored.url }, select: AVATAR_USER_FIELDS });
      return res.json({ success: true, message: 'Photo de profil enregistrée', data: updatedUser });
    } catch (error) {
      next(error);
    }
  }

  // Demande de réinitialisation de mot de passe (Forgot Password)
  static async forgotPassword(req, res, next) {
    try {
      const { email } = req.body;
      const result = await authService.requestPasswordReset(
        email,
        req.ip || req.connection?.remoteAddress,
        req.get('user-agent')
      );
      res.json({
        success: true,
        message: result.message,
      });
    } catch (error) {
      next(error);
    }
  }

  // Réinitialisation effective du mot de passe (Reset Password)
  static async resetPassword(req, res, next) {
    try {
      const { token, newPassword } = req.body;
      const result = await authService.resetPassword(
        token,
        newPassword,
        req.ip || req.connection?.remoteAddress,
        req.get('user-agent')
      );
      res.json({
        success: true,
        message: result.message,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AuthController;