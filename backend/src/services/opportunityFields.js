const { z } = require('zod');
const { CATEGORIES, LEVELS, DESTINATIONS, DOMAINS, FUNDING } = require('./opportunityService');

// Règles de saisie d'une annonce : partagées par l'API d'administration et l'import
// des fichiers scripts/data/opportunites (même validation des deux côtés).
const day = z.string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, 'Date attendue au format AAAA-MM-JJ')
  .refine((value) => !Number.isNaN(Date.parse(`${value}T00:00:00Z`)) && new Date(`${value}T00:00:00Z`).toISOString().startsWith(value), 'Date invalide');

const webUrl = z.string().trim().max(500).refine((value) => {
  if (!value) return true;
  try {
    return ['http:', 'https:'].includes(new URL(value).protocol);
  } catch (_) {
    return false;
  }
}, 'Lien http(s) valide requis');

const optionalText = (max) => z.string().max(max).optional().nullable();

const fields = {
  title: z.string().trim().min(3, 'Intitulé requis').max(200),
  organization: z.string().trim().min(2, 'Organisme responsable requis').max(200),
  category: z.enum(CATEGORIES),
  summary: z.string().trim().min(10, 'Résumé requis (10 caractères minimum)').max(600),
  details: optionalText(5000),
  eligibility: optionalText(2000),
  levels: z.array(z.enum(LEVELS)).max(LEVELS.length).optional(),
  destination: z.enum(DESTINATIONS).optional().nullable(),
  country: optionalText(100),
  openingDate: day.optional().nullable(),
  deadline: day.optional().nullable(),
  keyDates: z.array(z.object({ label: z.string().trim().min(2).max(120), date: day })).max(10).optional().nullable(),
  documents: z.array(z.string().max(200)).max(20).optional(),
  benefits: optionalText(1000),
  officialUrl: webUrl.optional().nullable(),
  phaseOverride: z.enum(['RESULTS']).optional().nullable(),
  image: webUrl.optional().nullable(),
  fees: optionalText(300),
  exams: z.array(z.object({
    subject: z.string().trim().min(2).max(200),
    duration: z.string().trim().max(30).optional().nullable(),
    coefficient: z.union([z.string().trim().max(40), z.number()]).optional().nullable(),
  })).max(20).optional().nullable(),
  series: z.array(z.string().trim().max(30)).max(30).optional(),
  ageLimit: optionalText(300),
  places: z.number().int().min(1).max(100000).optional().nullable(),
  applyMode: optionalText(1500),
  contact: optionalText(500),
  sourceNote: optionalText(300),
  recurring: z.boolean().optional(),
  usualPeriod: optionalText(200),
  domains: z.array(z.enum(DOMAINS)).max(DOMAINS.length).optional(),
  location: optionalText(150),
  sessionLabel: optionalText(60),
  funding: z.enum(FUNDING).optional().nullable(),
  selectionSteps: z.array(z.object({
    title: z.string().trim().min(2).max(150),
    detail: z.string().trim().max(600).optional().nullable(),
  })).max(15).optional().nullable(),
  resources: z.array(z.object({
    label: z.string().trim().min(2).max(150),
    url: webUrl.refine((value) => Boolean(value), 'Lien requis'),
  })).max(15).optional().nullable(),
  faq: z.array(z.object({
    question: z.string().trim().min(5).max(250),
    answer: z.string().trim().min(2).max(1500),
  })).max(15).optional().nullable(),
  tips: optionalText(3000),
  // Coché par l'admin : « j'ai vérifié cette annonce sur la source officielle aujourd'hui »
  markVerified: z.boolean().optional(),
};


module.exports = { fields, day, webUrl };
