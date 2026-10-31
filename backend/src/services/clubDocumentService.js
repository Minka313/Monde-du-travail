/**
 * Document de référence du club (présentation, organisation, fonctionnement).
 * Lu par les membres du bureau, modifié par la Présidence. Stocké dans les réglages :
 * version en cours + version précédente (pour revenir en arrière après une erreur).
 */
const prisma = require('../config/database');
const AuditService = require('./auditService');
const DEFAULT_CONTENT = require('../data/clubDocument');
const { BadRequestError, ForbiddenError } = require('../utils/errors');

const KEY = 'club.reference_document';
const MAX_LENGTH = 120000;
// Texte d'origine : toujours récupérable comme « version précédente »
const ORIGINAL = { content: DEFAULT_CONTENT, updatedAt: null, updatedBy: 'Version d\'origine' };

function parse(row) {
  if (!row) return null;
  try { return JSON.parse(row.value); } catch (_) { return null; }
}

async function canRead(user) {
  if (user.role === 'ULTRA_ADMIN') return true;
  const count = await prisma.clubAssignment.count({ where: { userId: user.id, isActive: true } });
  return count > 0;
}

function dto(stored, user) {
  const current = stored?.current;
  return {
    content: current?.content || DEFAULT_CONTENT,
    isDefault: !current,
    updatedAt: current?.updatedAt || null,
    updatedBy: current?.updatedBy || null,
    hasPrevious: Boolean(stored?.previous),
    previousAt: stored?.previous?.updatedAt || null,
    canEdit: user.role === 'ULTRA_ADMIN',
  };
}

class ClubDocumentService {
  static async get(user) {
    if (!(await canRead(user))) throw new ForbiddenError('Document réservé aux membres du bureau');
    const row = await prisma.setting.findUnique({ where: { key: KEY } });
    return dto(parse(row), user);
  }

  static async save(user, content, meta = {}) {
    if (user.role !== 'ULTRA_ADMIN') throw new ForbiddenError('Seule la Présidence peut modifier le document');
    const text = String(content || '').replace(/\r\n?/g, '\n');
    if (!text.trim()) throw new BadRequestError('Le document est vide');
    if (text.length > MAX_LENGTH) throw new BadRequestError('Le document est trop long');

    const row = await prisma.setting.findUnique({ where: { key: KEY } });
    const stored = parse(row) || {};
    const author = await prisma.user.findUnique({ where: { id: user.id }, select: { firstName: true, lastName: true } });
    const next = {
      current: {
        content: text,
        updatedAt: new Date().toISOString(),
        updatedBy: [author?.firstName, author?.lastName].filter(Boolean).join(' ') || 'Présidence',
      },
      // La version remplacée reste disponible (y compris le texte d'origine)
      previous: stored.current || ORIGINAL,
    };
    await ClubDocumentService.write(next);
    await AuditService.log({
      userId: user.id, action: 'club_document.update', module: 'organization', resource: 'Setting',
      resourceId: KEY, metadata: { length: text.length }, ...meta,
    });
    return dto(next, user);
  }

  static async restorePrevious(user, meta = {}) {
    if (user.role !== 'ULTRA_ADMIN') throw new ForbiddenError('Seule la Présidence peut modifier le document');
    const stored = parse(await prisma.setting.findUnique({ where: { key: KEY } }));
    if (!stored?.previous) throw new BadRequestError('Aucune version précédente');
    const next = { current: stored.previous.updatedAt ? stored.previous : null, previous: stored.current || ORIGINAL };
    await ClubDocumentService.write(next);
    await AuditService.log({
      userId: user.id, action: 'club_document.restore', module: 'organization', resource: 'Setting', resourceId: KEY, ...meta,
    });
    return dto(next, user);
  }

  static async write(value) {
    // Sensible : jamais servi par les réglages publics
    const data = { value: JSON.stringify(value), category: 'organization', label: 'Document de référence du club', isSensitive: true };
    await prisma.setting.upsert({ where: { key: KEY }, update: data, create: { key: KEY, ...data } });
  }
}

ClubDocumentService.DEFAULT_CONTENT = DEFAULT_CONTENT;
module.exports = ClubDocumentService;
