const express = require('express');
const router = express.Router();
const { z } = require('zod');
const authController = require('../controllers/authController');
const { authenticate, optionalAuth } = require('../middleware/auth');
const validate = require('../middleware/validate');
const multer = require('multer');
const { BadRequestError } = require('../utils/errors');

// Photo de profil : fichier en mémoire (serverless), 3 Mo au plus, images uniquement
const avatarUpload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 3 * 1024 * 1024, files: 1 },
  fileFilter: (req, file, cb) => (['image/jpeg', 'image/png', 'image/webp'].includes(file.mimetype)
    ? cb(null, true)
    : cb(new BadRequestError('Format non supporté : choisissez une photo JPG, PNG ou WebP.'))),
});
const receiveAvatar = (req, res, next) => avatarUpload.single('file')(req, res, (err) => {
  if (err instanceof multer.MulterError && err.code === 'LIMIT_FILE_SIZE') return next(new BadRequestError('Photo trop lourde (3 Mo au maximum).'));
  return next(err);
});

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

// Limiteur ciblé pour la connexion : ne compte que les échecs (skipSuccessfulRequests)
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20, // 20 tentatives infructueuses par IP
  skipSuccessfulRequests: true,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Trop de tentatives de connexion infructueuses. Veuillez patienter 15 minutes avant de réessayer.',
  },
});

// Limiteur pour les inscriptions pour éviter le spam de création de comptes
const registerLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 heure
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Trop de demandes d\'inscription depuis cette adresse. Veuillez réessayer plus tard.',
  },
});

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
router.post('/register', registerLimiter, validate(registerSchema), authController.register);
router.post('/login', loginLimiter, validate(loginSchema), authController.login);
router.post('/login-2fa', loginLimiter, validate(login2FASchema), authController.login2FA);
router.post('/login-2fa/resend', loginLimiter, authController.resendLogin2FA);
router.post('/forgot-password', forgotPasswordLimiter, validate(forgotPasswordSchema), authController.forgotPassword);
router.post('/reset-password', validate(resetPasswordSchema), authController.resetPassword);
router.post('/refresh', validate(refreshSchema), authController.refresh);
router.post('/logout', authenticate, authController.logout);
router.get('/me', authenticate, authController.me);
router.put('/me/avatar', authenticate, authController.updateAvatar);
router.post('/me/avatar/upload', authenticate, receiveAvatar, authController.uploadAvatar);

module.exports = router;