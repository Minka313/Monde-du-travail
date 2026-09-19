const express = require('express');
const router = express.Router();
const { z } = require('zod');
const authController = require('../controllers/authController');
const { authenticate, optionalAuth } = require('../middleware/auth');
const validate = require('../middleware/validate');

// Schémas de validation Zod
const registerSchema = z.object({
  body: z.object({
    email: z.string().email('Email invalide'),
    password: z.string()
      .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
      .regex(/[a-zA-Z]/, 'Le mot de passe doit contenir au moins une lettre')
      .regex(/[0-9]/, 'Le mot de passe doit contenir au moins un chiffre'),
    firstName: z.string().min(2, 'Prénom requis'),
    lastName: z.string().min(2, 'Nom requis'),
    motivation: z.string().max(1000, 'Motivation trop longue (max 1000 caractères)').optional(),
  }),
});

const loginSchema = z.object({
  body: z.object({
    email: z.string().email('Email invalide'),
    password: z.string().min(1, 'Mot de passe requis'),
  }),
});

const refreshSchema = z.object({
  body: z.object({
    // Accept refresh token from body OR from HttpOnly cookie (handled in controller)
    refreshToken: z.string().min(1, 'Refresh token requis').optional(),
  }),
});

const login2FASchema = z.object({
  body: z.object({
    tempToken: z.string().min(10, 'Jeton temporaire requis'),
    code: z.string().length(6, 'Le code doit contenir 6 chiffres'),
  }),
});

const rateLimit = require('express-rate-limit');

// Limiteur de requêtes spécifique pour prévenir le spam d'envoi d'emails
const forgotPasswordLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Trop de demandes de réinitialisation. Veuillez patienter 15 minutes avant de réessayer.',
  },
});

const forgotPasswordSchema = z.object({
  body: z.object({
    email: z.string().email('Email invalide'),
  }),
});

const resetPasswordSchema = z.object({
  body: z.object({
    token: z.string().min(10, 'Jeton de réinitialisation requis'),
    newPassword: z.string()
      .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
      .regex(/[a-zA-Z]/, 'Le mot de passe doit contenir au moins une lettre')
      .regex(/[0-9]/, 'Le mot de passe doit contenir au moins un chiffre'),
  }),
});

// Routes
router.post('/register', validate(registerSchema), authController.register);
router.post('/login', validate(loginSchema), authController.login);
router.post('/login-2fa', validate(login2FASchema), authController.login2FA);
router.post('/forgot-password', forgotPasswordLimiter, validate(forgotPasswordSchema), authController.forgotPassword);
router.post('/reset-password', validate(resetPasswordSchema), authController.resetPassword);
router.post('/refresh', validate(refreshSchema), authController.refresh);
router.post('/logout', authenticate, authController.logout);
router.get('/me', authenticate, authController.me);
router.put('/me/avatar', authenticate, authController.updateAvatar);

module.exports = router;