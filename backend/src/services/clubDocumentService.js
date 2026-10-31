/**
 * Document de référence du club (présentation, organisation, fonctionnement).
 * Lu par les membres du bureau, modifié par la Présidence. Stocké dans les réglages :
 * version en cours + version précédente (pour revenir en arrière après une erreur).
 */
const prisma = require('../config/database');
const AuditService = require('./auditService');
const DEFAULT_CONTENT = require('../data/clubDocument');
const { BadRequestError, ForbiddenError } = require('../utils/errors');
const Chapters = require('../utils/clubDocumentChapters');
const HISTORY = require('../data/clubDocumentHistory.json');

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

/**
 * Parties du texte de référence mises à jour depuis que la Présidence a enregistré sa version.
 * « safe » : la Présidence n'a pas touché cette partie (elle correspond à une ancienne version
 * de référence) ; « edited » : elle l'a modifiée, c'est à elle de choisir.
 */
function pendingUpdates(content) {
  const mine = new Map(Chapters.split(content).map((p) => [p.key, p]));
  return Chapters.split(DEFAULT_CONTENT).flatMap((latest) => {
    const known = HISTORY[latest.key] || [];
    if (known.length < 2) return []; // partie jamais modifiée dans le texte de référence
    const own = mine.get(latest.key);
    if (!own) return [];
    const ownHash = Chapters.hash(own.text);
    if (ownHash === Chapters.hash(latest.text)) return [];
    return [{ key: latest.key, title: latest.title, status: known.includes(ownHash) ? 'safe' : 'edited', mine: own.text, proposed: latest.text }];
  });
}

function dto(stored, user) {
  const current = stored?.current;
  const canEdit = user.role === 'ULTRA_ADMIN';
  return {
    content: current?.content || DEFAULT_CONTENT,
    isDefault: !current,
    updatedAt: current?.updatedAt || null,
    updatedBy: current?.updatedBy || null,
    hasPrevious: Boolean(stored?.previous),
    previousAt: stored?.previous?.updatedAt || null,
    canEdit,
    updates: canEdit && current ? pendingUpdates(current.content) : [],
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

  // Applique à la version de la Présidence les parties choisies du texte de référence mis à jour
  static async applyUpdates(user, keys, meta = {}) {
    if (user.role !== 'ULTRA_ADMIN') throw new ForbiddenError('Seule la Présidence peut modifier le document');
    const stored = parse(await prisma.setting.findUnique({ where: { key: KEY } }));
    if (!stored?.current) throw new BadRequestError('Ton document suit déjà le texte de référence');
    const wanted = new Set(pendingUpdates(stored.current.content).filter((u) => keys.includes(u.key)).map((u) => u.key));
    if (!wanted.size) throw new BadRequestError('Aucune mise à jour à appliquer');
    const latest = new Map(Chapters.split(DEFAULT_CONTENT).map((p) => [p.key, p]));
    const merged = Chapters.join(Chapters.split(stored.current.content).map((p) => (wanted.has(p.key) ? latest.get(p.key) : p)));
    return ClubDocumentService.save(user, merged, meta);
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
