const authService = require('../services/authService');
const logger = require('../utils/logger');

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
  static async me(req, res) {
    res.json({
      success: true,
      data: req.user,
    });
  }
}

module.exports = AuthController;