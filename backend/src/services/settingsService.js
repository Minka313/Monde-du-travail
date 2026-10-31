const prisma = require('../config/database');
const { NotFoundError, BadRequestError } = require('../utils/errors');
const logger = require('../utils/logger');
const { z } = require('zod');

const DEFAULT_SETTINGS = [
  { key: 'site.contactEmail', value: 'lemondedutravailsen@gmail.com', category: 'general', label: "Email de contact de l'organisation (affiché sur le site, adresse de réponse des emails)" },
  { key: 'platform.maintenanceMode', value: 'false', category: 'plateforme', label: 'Mode maintenance (Bloque l\'accès public)', isSensitive: true },
  { key: 'platform.maintenanceMessage', value: 'Notre équipe effectue actuellement une mise à niveau technique programmée pour optimiser la plateforme. Nous serons de retour très rapidement !', category: 'plateforme', label: 'Message public de maintenance', isSensitive: false },
  { key: 'platform.maintenanceEstimatedReturn', value: 'Bientôt de retour', category: 'plateforme', label: 'Heure de retour estimée (ex: Aujourd\'hui à 15h00 GMT)', isSensitive: false },
  { key: 'platform.allowRegistrations', value: 'true', category: 'membres', label: 'Inscriptions ouvertes (demandes d\'adhésion depuis le site)', isSensitive: true },
  {
    key: 'home.featured_monthly',
    value: JSON.stringify({
      tag: '🔥 À la Une ce mois-ci',
      title: "Masterclass : L'Art du Pitch & Entretien Décisif",
      description: "Apprenez à captiver votre auditoire en 2 minutes chrono, décryptez les attentes réelles des recruteurs et transformez vos entretiens en offres concrètes.",
      perks: [
        "📅 Samedi 28 Mars 2026",
        "📍 Présentiel & Streaming",
        "🛠️ Ateliers pratiques",
        "👥 Limité à 30 places"
      ],
      primaryButtonText: "Réserver ma place",
      primaryButtonLink: "formations.html",
      sideboxBadge: "⚡ Session Intensive",
      sideboxCounter: "4h",
      sideboxDesc: "D'exercices réels avec simulations filmées et débriefing personnalisé par des professionnels RH.",
      sideboxButtonText: "Voir le programme",
      sideboxButtonLink: "formations.html"
    }),
    category: 'vitrine',
    label: 'À la Une ce mois-ci (Page d\'accueil)',
    isSensitive: false
  },
  {
    key: 'about.timeline_steps',
    value: JSON.stringify([
      {
        year: '2025',
        title: 'Fondation du Club au LYNAQE de Sédhiou',
        description: "Naissance de l'initiative au Lycée Nation-Armée pour la Qualité et l'Équité (LYNAQE) de Sédhiou, pour préparer concrètement les jeunes au monde professionnel. Lancement des premiers ateliers : simulation d'entretiens, prise de parole et décryptage des codes pro."
      },
      {
        year: '2025 – 2026',
        title: 'Masterclasses Soft Skills & Réseau Mentorat',
        description: "Structuration d'un catalogue de formations et ralliement de professionnels et cadres partenaires pour guider les jeunes en individuel."
      },
      {
        year: '2026',
        title: 'Plateforme Numérique & Communauté Ouverte',
        description: "Déploiement de l'espace membre interactif, du forum d'entraide et du référentiel des 21 familles de métiers d'avenir pour impacter des milliers de jeunes."
      }
    ]),
    category: 'vitrine',
    label: 'Grandes étapes du Club (Page À Propos)',
    isSensitive: false
  },
  // Contenus éditoriaux : vides tant que l'équipe ne les a pas renseignés (aucune donnée fictive)
  { key: 'home.testimonials', value: '[]', category: 'vitrine', label: 'Témoignages des membres (Page d\'accueil)', isSensitive: false },
  { key: 'about.mentors', value: '[]', category: 'vitrine', label: 'Mentors et leur mot (Page À Propos)', isSensitive: false },
  // Réseaux Sociaux (Administrables depuis l'espace admin)
  { key: 'social.twitter', value: 'https://x.com', category: 'reseaux', label: 'Lien X (Twitter)', isSensitive: false },
  { key: 'social.linkedin', value: 'https://linkedin.com', category: 'reseaux', label: 'Lien LinkedIn', isSensitive: false },
  { key: 'social.instagram', value: 'https://instagram.com', category: 'reseaux', label: 'Lien Instagram', isSensitive: false },
  { key: 'social.facebook', value: 'https://facebook.com', category: 'reseaux', label: 'Lien Facebook', isSensitive: false },
  { key: 'social.youtube', value: '', category: 'reseaux', label: 'Lien YouTube (optionnel)', isSensitive: false },
  { key: 'social.tiktok', value: '', category: 'reseaux', label: 'Lien TikTok (optionnel)', isSensitive: false },
];

let defaultsEnsured = false;
let cachedPublicSettings = null;
let cachedPublicSettingsTime = 0;
const PUBLIC_SETTINGS_CACHE_TTL_MS = 60 * 1000; // 60s cache mémoire

// Anciens paramètres sans effet sur le site : conservés en base mais masqués de l'admin
const DEPRECATED_KEYS = ['site.name', 'site.description', 'memberships.allowRegistrations'];
// Gérés par leur propre écran (Espace Bureau) : absents de la page Paramètres
const PRIVATE_KEYS = ['club.reference_document'];

// Valeurs par défaut d'origine devenues fausses (histoire du club inventée, ancienne adresse).
// Tant qu'elles n'ont pas été modifiées dans l'admin, la nouvelle valeur par défaut s'applique.
const LEGACY_DEFAULTS = {
  'site.contactEmail': ['contact@mondedutravail.com'],
  'about.timeline_steps': [JSON.stringify([
    { year: '2024', title: 'Fondation du Club & Première Cohorte', description: "Naissance de l'initiative à Dakar pour pallier le manque de préparation pratique des diplômés. Lancement des premiers ateliers de simulation d'entretiens et décryptage des codes pro." },
    { year: '2025', title: 'Masterclasses Soft Skills & Réseau Mentorat', description: "Structuration d'un catalogue de 12 formations certifiantes et ralliement de plus de 10 professionnels et cadres partenaires pour guider les jeunes en individuel." },
    { year: '2026', title: 'Plateforme Numérique & Communauté Ouverte', description: "Déploiement de l'espace membre interactif, du forum d'entraide et du référentiel des 21 familles de métiers d'avenir pour impacter des milliers de jeunes." },
  ])],
};
// Les formations du club ne sont pas certifiantes : aucun avantage de ce type n'est annoncé
const CERTIFICATION_CLAIM = /attestation certifi|certifiant|certificat/i;

// Contenus éditoriaux saisis dans l'admin : structure vérifiée avant enregistrement
const photoUrl = z.string().trim().max(500)
  .refine((v) => !v || /^https:\/\//i.test(v), 'La photo doit être un lien https (photo importée)')
  .optional().nullable();
const memberRef = z.string().trim().max(40).optional().nullable();
const EDITORIAL_SCHEMAS = {
  'home.testimonials': z.array(z.object({
    quote: z.string().trim().min(10, 'Témoignage trop court').max(600),
    name: z.string().trim().max(80).optional().nullable(),
    role: z.string().trim().max(120).optional().nullable(),
    photo: photoUrl,
    userId: memberRef,
  }).refine((t) => t.name || t.userId, 'Indiquez le nom ou reliez un membre')).max(12),
  'about.mentors': z.array(z.object({
    name: z.string().trim().max(80).optional().nullable(),
    role: z.string().trim().min(2, 'Fonction requise').max(120),
    bio: z.string().trim().max(400).optional().nullable(),
    quote: z.string().trim().max(600).optional().nullable(),
    photo: photoUrl,
    linkedin: z.string().trim().max(300).refine((v) => !v || /^https:\/\/([a-z]+\.)?linkedin\.com\//i.test(v), 'Lien LinkedIn invalide').optional().nullable(),
    userId: memberRef,
  }).refine((m) => m.name || m.userId, 'Indiquez le nom ou reliez un membre')).max(24),
};

const sameJson = (a, b) => {
  try { return JSON.stringify(JSON.parse(a)) === JSON.stringify(JSON.parse(b)); } catch (_) { return a === b; }
};

function currentValue(key, value) {
  const legacy = LEGACY_DEFAULTS[key];
  if (legacy && legacy.some((old) => sameJson(old, value))) {
    return DEFAULT_SETTINGS.find((d) => d.key === key).value;
  }
  if (key === 'home.featured_monthly') {
    try {
      const featured = JSON.parse(value);
      if (Array.isArray(featured.perks)) featured.perks = featured.perks.filter((p) => !CERTIFICATION_CLAIM.test(p));
      return JSON.stringify(featured);
    } catch (_) { return value; }
  }
  return value;
}

class SettingsService {
  static invalidatePublicCache() {
    cachedPublicSettings = null;
    cachedPublicSettingsTime = 0;
  }

  // Crée les paramètres manquants (idempotent, ne s'exécute qu'au besoin pour ne pas saturer la DB)
  static async ensureDefaults(force = false) {
    if (defaultsEnsured && !force) return;
    try {
      // Seuls les paramètres absents sont créés (les anciens paramètres en base ne comptent pas)
      const existing = new Set((await prisma.setting.findMany({ select: { key: true } })).map((s) => s.key));
      const missing = DEFAULT_SETTINGS.filter((setting) => force || !existing.has(setting.key));
      for (const setting of missing) {
        await prisma.setting.upsert({
          where: { key: setting.key },
          update: {},
          create: setting,
        });
      }
      defaultsEnsured = true;
    } catch (e) {
      logger.warn('Initialisation des paramètres par défaut reportée:', e.message);
    }
  }

  static async getAll() {
    await this.ensureDefaults();
    const settings = await prisma.setting.findMany({
      where: { key: { notIn: [...DEPRECATED_KEYS, ...PRIVATE_KEYS] } },
      orderBy: [{ category: 'asc' }, { key: 'asc' }],
    });
    // Libellé et rubrique à jour depuis le code (les lignes existantes gardent leur valeur)
    return settings.map((setting) => {
      const defaults = DEFAULT_SETTINGS.find((d) => d.key === setting.key);
      const value = currentValue(setting.key, setting.value);
      return defaults ? { ...setting, value, label: defaults.label, category: defaults.category } : { ...setting, value };
    });
  }

  // Les inscriptions sont ouvertes sauf si l'admin les a explicitement fermées
  static async registrationsOpen() {
    const setting = await prisma.setting.findUnique({
      where: { key: 'platform.allowRegistrations' },
      select: { value: true },
    });
    return setting?.value !== 'false';
  }

  /**
   * Retourne les paramètres publics pour le frontend public avec mise en cache mémoire
   */
  static async getPublicSettings() {
    const now = Date.now();
    if (cachedPublicSettings && (now - cachedPublicSettingsTime < PUBLIC_SETTINGS_CACHE_TTL_MS)) {
      return cachedPublicSettings;
    }

    await this.ensureDefaults();
    const settings = await prisma.setting.findMany({
      where: { isSensitive: false },
      select: { key: true, value: true, category: true, label: true, updatedAt: true },
      orderBy: [{ category: 'asc' }, { key: 'asc' }],
    });

    const result = {};
    for (const s of settings) {
      const value = currentValue(s.key, s.value);
      try {
        result[s.key] = JSON.parse(value);
      } catch (_) {
        result[s.key] = value;
      }
    }
    await this.attachMemberPhotos(result);

    // Exposer explicitement l'état public de la maintenance pour le frontend
    const maintSetting = await prisma.setting.findUnique({
      where: { key: 'platform.maintenanceMode' },
      select: { value: true },
    });
    result['platform.maintenanceMode'] = maintSetting?.value === 'true';
    result['platform.allowRegistrations'] = await this.registrationsOpen();
    for (const key of DEPRECATED_KEYS) delete result[key];
    if (!result['platform.maintenanceMessage']) {
      result['platform.maintenanceMessage'] = 'Notre équipe effectue actuellement une mise à niveau technique programmée pour optimiser la plateforme. Nous serons de retour très rapidement !';
    }
    if (!result['platform.maintenanceEstimatedReturn']) {
      result['platform.maintenanceEstimatedReturn'] = 'Bientôt de retour';
    }

    cachedPublicSettings = result;
    cachedPublicSettingsTime = now;
    return result;
  }

  // Témoignage ou mentor relié à un compte membre : sa photo de profil et son nom suivent le compte
  static async attachMemberPhotos(result) {
    const lists = ['home.testimonials', 'about.mentors'].filter((key) => Array.isArray(result[key]));
    const ids = [...new Set(lists.flatMap((key) => result[key].map((item) => item && item.userId).filter(Boolean)))];
    if (!ids.length) return;
    const users = await prisma.user.findMany({
      where: { id: { in: ids }, isActive: true },
      select: { id: true, firstName: true, lastName: true, avatarUrl: true },
    });
    const byId = new Map(users.map((u) => [u.id, u]));
    for (const key of lists) {
      result[key] = result[key].map((item) => {
        const user = item && byId.get(item.userId);
        if (!user) return item;
        return {
          ...item,
          name: item.name || `${user.firstName} ${user.lastName}`.trim(),
          photo: user.avatarUrl || item.photo || null,
        };
      });
    }
  }

  static async getPublicSetting(key) {
    if (key === 'platform.maintenanceMode') {
      const setting = await prisma.setting.findUnique({
        where: { key: 'platform.maintenanceMode' },
        select: { value: true },
      });
      return setting?.value === 'true';
    }

    const setting = await prisma.setting.findUnique({
      where: { key },
      select: { key: true, value: true, isSensitive: true },
    });
    if (!setting || setting.isSensitive) {
      throw new NotFoundError('Paramètre non trouvé ou confidentiel');
    }
    const value = currentValue(setting.key, setting.value);
    try {
      return JSON.parse(value);
    } catch (_) {
      return value;
    }
  }

  static async getSetting(key) {
    const setting = await prisma.setting.findUnique({ where: { key } });
    if (!setting) {
      throw new NotFoundError('Paramètre non trouvé');
    }
    return setting;
  }

  static async updateSetting(key, value) {
    if (typeof value !== 'string') {
      throw new BadRequestError('La valeur du paramètre doit être une chaîne');
    }

    await this.ensureDefaults();
    const existing = PRIVATE_KEYS.includes(key) ? null : await prisma.setting.findUnique({ where: { key } });
    if (!existing) {
      throw new NotFoundError('Paramètre non trouvé');
    }
    if (EDITORIAL_SCHEMAS[key]) {
      let parsed;
      try { parsed = JSON.parse(value); } catch (_) { throw new BadRequestError('Contenu illisible (JSON attendu)'); }
      const check = EDITORIAL_SCHEMAS[key].safeParse(parsed);
      if (!check.success) throw new BadRequestError(check.error.errors[0].message);
      value = JSON.stringify(check.data);
    }

    const updated = await prisma.setting.update({
      where: { key },
      data: { value },
    });

    // Effet immédiat du basculement ou de la modification des paramètres de maintenance
    this.invalidatePublicCache();
    if (key.startsWith('platform.maintenance')) {
      const { resetMaintenanceCache } = require('../middleware/maintenance');
      resetMaintenanceCache();
    }

    logger.info('Paramètre mis à jour', { key, sensitive: existing.isSensitive });
    return updated;
  }
}

module.exports = SettingsService;
