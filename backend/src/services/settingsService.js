const prisma = require('../config/database');
const { NotFoundError, BadRequestError } = require('../utils/errors');
const logger = require('../utils/logger');

const DEFAULT_SETTINGS = [
  { key: 'site.name', value: 'Le Monde du Travail', category: 'general', label: 'Nom du site' },
  { key: 'site.description', value: 'Club de découverte et d\'accompagnement vers le monde professionnel', category: 'general', label: 'Description du site' },
  { key: 'site.contactEmail', value: 'contact@mondedutravail.com', category: 'general', label: 'Email de contact' },
  { key: 'memberships.allowRegistrations', value: 'true', category: 'membres', label: 'Autoriser les inscriptions' },
  { key: 'platform.maintenanceMode', value: 'false', category: 'plateforme', label: 'Mode maintenance', isSensitive: true },
  { key: 'platform.allowRegistrations', value: 'true', category: 'plateforme', label: 'Inscriptions ouvertes (paramètre plateforme)', isSensitive: true },
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

    logger.info('Paramètre mis à jour', { key, sensitive: existing.isSensitive });
    return updated;
  }
}

module.exports = SettingsService;
