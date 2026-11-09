const express = require('express');
const rateLimit = require('express-rate-limit');
const { z } = require('zod');
const { optionalAuth } = require('../middleware/auth');
const validate = require('../middleware/validate');
const MentorApplicationService = require('../services/mentorApplicationService');

// Candidature « Devenir mentor » : ouverte à tous, avec ou sans compte
const router = express.Router();

const applyLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Trop de candidatures envoyées. Réessaie dans une heure.' },
});

const schema = z.object({
  body: z.object({
    fullName: z.string().trim().min(3, 'Indique ton nom complet').max(150),
    email: z.string().trim().email('Adresse e-mail invalide').max(200),
    phone: z.string().trim().max(40).nullable().optional(),
    profession: z.string().trim().min(2, 'Indique ton métier ou tes études').max(150),
    organization: z.string().trim().max(150).nullable().optional(),
    domains: z.string().trim().min(2, 'Indique tes domaines d\'expertise').max(300),
    experience: z.string().trim().max(1500).nullable().optional(),
    motivation: z.string().trim().min(30, 'Explique ta motivation en quelques phrases (30 caractères minimum)').max(3000),
    availability: z.string().trim().max(300).nullable().optional(),
    linkedinUrl: z.string().trim().url('Lien invalide').max(300).refine((u) => /^https?:\/\//.test(u), 'Lien invalide').nullable().optional().or(z.literal('')),
    invitation: z.string().max(80).optional(),
    consent: z.literal(true, { errorMap: () => ({ message: 'Accepte que le club conserve ta candidature pour l\'examiner' }) }),
  }).strict(),
});

// Page personnelle d'un professionnel invité : le lien porte un jeton secret
const lookupLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 60, standardHeaders: true, legacyHeaders: false, message: { success: false, message: 'Trop de tentatives. Réessaie plus tard.' } });
router.get('/invitation/:token', lookupLimiter, async (req, res, next) => {
  try {
    res.set('Cache-Control', 'no-store');
    res.json({ success: true, data: await MentorApplicationService.publicInvitation(req.params.token) });
  } catch (error) { next(error); }
});

router.post('/', applyLimiter, optionalAuth, validate(schema), async (req, res, next) => {
  try {
    const { consent, invitation, ...data } = req.body;
    let user = null;
    if (req.user?.id) {
      const prisma = require('../config/database');
      user = await prisma.user.findUnique({ where: { id: req.user.id }, select: { id: true, email: true, firstName: true, lastName: true } });
      if (user) user.adminRoles = (await require('../services/rbacService').getUserAdminContext(user.id)).adminRoles;
    }
    const result = await MentorApplicationService.submit(data, user, invitation || null);
    res.status(result.alreadyPending ? 200 : 201).json({
      success: true,
      message: result.accepted
        ? (result.accountCreated
          ? 'Merci et bienvenue parmi les mentors du club ! Ta candidature est acceptée et ton compte est créé : un e-mail t\'est envoyé pour choisir ton mot de passe.'
          : 'Merci et bienvenue parmi les mentors du club ! Ta candidature est acceptée : la Présidence en est prévenue et tu reçois un e-mail de confirmation.')
        : result.alreadyPending
          ? 'Ta candidature est déjà en cours d\'examen : la Présidence te répondra par e-mail.'
          : 'Merci ! Ta candidature est transmise à la Présidence du club, qui te répondra par e-mail.',
      data: result,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
