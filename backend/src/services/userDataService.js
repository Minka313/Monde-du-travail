const prisma = require('../config/database');
const { BadRequestError } = require('../utils/errors');

// Données personnelles synchronisées entre les appareils d'un compte.
// Liste fermée : rien d'autre ne peut être rangé ici.
const KEY_PATTERN = /^(opp:favorites|member_favorite_jobs|lmdt_riasec_result|opp:docs:[A-Za-z0-9_-]{1,64})$/;
// Le corps d'une requête est limité à 10 ko (app.js) : une valeur reste bien en dessous
const MAX_VALUE_BYTES = 6000;
const MAX_KEYS_PER_USER = 300;

class UserDataService {
  static isAllowedKey(key) {
    return typeof key === 'string' && KEY_PATTERN.test(key);
  }

  static async list(userId) {
    const rows = await prisma.userSavedData.findMany({ where: { userId }, select: { key: true, value: true, updatedAt: true } });
    return rows;
  }

  /**
   * Enregistre un lot de valeurs ; value: null supprime la clé.
   */
  static async save(userId, entries) {
    entries.forEach(({ key, value }) => {
      if (!UserDataService.isAllowedKey(key)) throw new BadRequestError(`Donnée non autorisée : ${String(key).slice(0, 80)}`);
      if (value !== null && Buffer.byteLength(JSON.stringify(value)) > MAX_VALUE_BYTES) throw new BadRequestError('Donnée trop volumineuse');
    });
    const toDelete = entries.filter((e) => e.value === null).map((e) => e.key);
    const toSave = entries.filter((e) => e.value !== null);
    if (toSave.length) {
      const existing = await prisma.userSavedData.count({ where: { userId } });
      const known = await prisma.userSavedData.count({ where: { userId, key: { in: toSave.map((e) => e.key) } } });
      if (existing - known + toSave.length > MAX_KEYS_PER_USER) throw new BadRequestError('Trop de données enregistrées sur ce compte');
    }
    await prisma.$transaction([
      ...(toDelete.length ? [prisma.userSavedData.deleteMany({ where: { userId, key: { in: toDelete } } })] : []),
      ...toSave.map(({ key, value }) => prisma.userSavedData.upsert({
        where: { userId_key: { userId, key } },
        update: { value },
        create: { userId, key, value },
      })),
    ]);
    return UserDataService.list(userId);
  }
}

module.exports = UserDataService;
module.exports.KEY_PATTERN = KEY_PATTERN;
