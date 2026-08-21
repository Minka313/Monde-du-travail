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
    password: z.string().min(6, 'Le mot de passe doit contenir au moins 6 caractères'),
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

// Routes
router.post('/register', validate(registerSchema), authController.register);
router.post('/login', validate(loginSchema), authController.login);
router.post('/refresh', validate(refreshSchema), authController.refresh);
router.post('/logout', authenticate, authController.logout);
router.get('/me', authenticate, authController.me);

module.exports = router;