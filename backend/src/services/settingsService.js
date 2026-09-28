const prisma = require('../config/database');
const { NotFoundError, BadRequestError } = require('../utils/errors');
const logger = require('../utils/logger');

const DEFAULT_SETTINGS = [
  { key: 'site.name', value: 'Le Monde du Travail', category: 'general', label: 'Nom du site' },
  { key: 'site.description', value: 'Club de découverte et d\'accompagnement vers le monde professionnel', category: 'general', label: 'Description du site' },
  { key: 'site.contactEmail', value: 'contact@mondedutravail.com', category: 'general', label: 'Email de contact' },
  { key: 'memberships.allowRegistrations', value: 'true', category: 'membres', label: 'Autoriser les inscriptions' },
  { key: 'platform.maintenanceMode', value: 'false', category: 'plateforme', label: 'Mode maintenance (Bloque l\'accès public)', isSensitive: true },
  { key: 'platform.maintenanceMessage', value: 'Notre équipe effectue actuellement une mise à niveau technique programmée pour optimiser la plateforme. Nous serons de retour très rapidement !', category: 'plateforme', label: 'Message public de maintenance', isSensitive: false },
  { key: 'platform.maintenanceEstimatedReturn', value: 'Bientôt de retour', category: 'plateforme', label: 'Heure de retour estimée (ex: Aujourd\'hui à 15h00 GMT)', isSensitive: false },
  { key: 'platform.allowRegistrations', value: 'true', category: 'plateforme', label: 'Inscriptions ouvertes (paramètre plateforme)', isSensitive: true },
  {
    key: 'home.featured_monthly',
    value: JSON.stringify({
      tag: '🔥 À la Une ce mois-ci',
      title: "Masterclass : L'Art du Pitch & Entretien Décisif",
      description: "Apprenez à captiver votre auditoire en 2 minutes chrono, décryptez les attentes réelles des recruteurs et transformez vos entretiens en offres concrètes.",
      perks: [
        "📅 Samedi 28 Mars 2026",
        "📍 Présentiel & Streaming",
        "🎓 Attestation certifiée",
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
        year: '2024',
        title: 'Fondation du Club & Première Cohorte',
        description: "Naissance de l'initiative à Dakar pour pallier le manque de préparation pratique des diplômés. Lancement des premiers ateliers de simulation d'entretiens et décryptage des codes pro."
      },
      {
        year: '2025',
        title: 'Masterclasses Soft Skills & Réseau Mentorat',
        description: "Structuration d'un catalogue de 12 formations certifiantes et ralliement de plus de 10 professionnels et cadres partenaires pour guider les jeunes en individuel."
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
  // Réseaux Sociaux (Administrables depuis l'espace admin)
  { key: 'social.twitter', value: 'https://x.com', category: 'reseaux', label: 'Lien X (Twitter)', isSensitive: false },
  { key: 'social.linkedin', value: 'https://linkedin.com', category: 'reseaux', label: 'Lien LinkedIn', isSensitive: false },
  { key: 'social.instagram', value: 'https://instagram.com', category: 'reseaux', label: 'Lien Instagram', isSensitive: false },
  { key: 'social.facebook', value: 'https://facebook.com', category: 'reseaux', label: 'Lien Facebook', isSensitive: false },
  { key: 'social.youtube', value: '', category: 'reseaux', label: 'Lien YouTube (optionnel)', isSensitive: false },
  { key: 'social.tiktok', value: '', category: 'reseaux', label: 'Lien TikTok (optionnel)', isSensitive: false },
];

class SettingsService {
  // Crée les paramètres manquants (idempotent, ne touche pas aux valeurs existantes)
  static async ensureDefaults() {
    for (const setting of DEFAULT_SETTINGS) {
      await prisma.setting.upsert({
        where: { key: setting.key },
        update: {},
        create: setting,
      });
    }
  }

  static async getAll() {
    await this.ensureDefaults();
    return prisma.setting.findMany({
      orderBy: [{ category: 'asc' }, { key: 'asc' }],
    });
  }

  /**
   * Retourne les paramètres publics pour le frontend public
   */
  static async getPublicSettings() {
    await this.ensureDefaults();
    const settings = await prisma.setting.findMany({
      where: { isSensitive: false },
      select: { key: true, value: true, category: true, label: true, updatedAt: true },
      orderBy: [{ category: 'asc' }, { key: 'asc' }],
    });

    const result = {};
    for (const s of settings) {
      try {
        result[s.key] = JSON.parse(s.value);
      } catch (_) {
        result[s.key] = s.value;
      }
    }

    // Exposer explicitement l'état public de la maintenance pour le frontend
    const maintSetting = await prisma.setting.findUnique({
      where: { key: 'platform.maintenanceMode' },
      select: { value: true },
    });
    result['platform.maintenanceMode'] = maintSetting?.value === 'true';
    if (!result['platform.maintenanceMessage']) {
      result['platform.maintenanceMessage'] = 'Notre équipe effectue actuellement une mise à niveau technique programmée pour optimiser la plateforme. Nous serons de retour très rapidement !';
    }
    if (!result['platform.maintenanceEstimatedReturn']) {
      result['platform.maintenanceEstimatedReturn'] = 'Bientôt de retour';
    }

    return result;
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
    try {
      return JSON.parse(setting.value);
    } catch (_) {
      return setting.value;
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

    const existing = await prisma.setting.findUnique({ where: { key } });
    if (!existing) {
      throw new NotFoundError('Paramètre non trouvé');
    }

    const updated = await prisma.setting.update({
      where: { key },
      data: { value },
    });

    // Effet immédiat du basculement ou de la modification des paramètres de maintenance
    if (key.startsWith('platform.maintenance')) {
      const { resetMaintenanceCache } = require('../middleware/maintenance');
      resetMaintenanceCache();
    }

    logger.info('Paramètre mis à jour', { key, sensitive: existing.isSensitive });
    return updated;
  }
}

module.exports = SettingsService;
