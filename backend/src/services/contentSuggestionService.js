const prisma = require('../config/database');
const { NotFoundError, BadRequestError, ForbiddenError } = require('../utils/errors');
const NotificationService = require('./notificationService');
const AuditService = require('./auditService');
const logger = require('../utils/logger');

// Signalements et propositions de modification des fiches formations et métiers par les mentors.
// Rien n'est modifié directement : les responsables du contenu (admins Formations / Métiers)
// ou la Présidence appliquent la proposition dans l'administration, puis la marquent traitée.
const TYPES = {
  formation: { permission: 'formation.update', label: 'Formation', adminHash: 'formations' },
  job: { permission: 'metier.update', label: 'Métier', adminHash: 'metiers' },
};
const KINDS = ['ERREUR', 'MISE_A_JOUR', 'AJOUT', 'AUTRE'];
const STATUSES = ['OPEN', 'APPLIED', 'REJECTED'];
const fullName = (u) => (u ? `${u.firstName} ${u.lastName}`.trim() : null);

const isPresident = (user) => user?.role === 'ULTRA_ADMIN';
const isMentor = (user) => (user?.adminRoles || []).includes('MENTOR_EXPERT');
const reviewTypes = (user) => (isPresident(user) ? Object.keys(TYPES) : Object.keys(TYPES).filter((t) => (user?.permissions || []).includes(TYPES[t].permission)));

// Formations : vérifiées en base. Métiers : fiches du catalogue d'orientation (fichiers du site),
// identifiées par leur slug et leur titre, recherchés côté navigateur dans le catalogue.
async function findTarget(type, slug, title) {
  if (type === 'formation') return prisma.formation.findUnique({ where: { slug }, select: { slug: true, title: true } });
  const clean = String(title || '').trim();
  return clean.length >= 2 ? { slug, title: clean.slice(0, 200) } : null;
}

function dto(s) {
  return {
    id: s.id, targetType: s.targetType, targetId: s.targetId, targetTitle: s.targetTitle, kind: s.kind, section: s.section,
    message: s.message, proposal: s.proposal, status: s.status, response: s.response, createdAt: s.createdAt, resolvedAt: s.resolvedAt,
    author: s.author ? { id: s.author.id, fullName: fullName(s.author) } : null,
    resolvedBy: s.resolvedBy ? fullName(s.resolvedBy) : null,
  };
}

const INCLUDE = { author: { select: { id: true, firstName: true, lastName: true } }, resolvedBy: { select: { firstName: true, lastName: true } } };

class ContentSuggestionService {
  static canSuggest(user) { return isMentor(user) || isPresident(user); }
  static reviewTypes(user) { return reviewTypes(user); }

  // Recherche d'une fiche à signaler (titre ou identifiant)
  static async searchTargets(user, type, q) {
    if (!ContentSuggestionService.canSuggest(user)) throw new ForbiddenError('Réservé aux mentors du club');
    if (!TYPES[type]) throw new BadRequestError('Type de fiche inconnu');
    const query = String(q || '').trim();
    if (query.length < 2 || type !== 'formation') return [];
    const rows = await prisma.formation.findMany({
      where: { slug: { not: null }, OR: [{ title: { contains: query, mode: 'insensitive' } }, { slug: { contains: query.toLowerCase() } }] },
      select: { slug: true, title: true }, take: 12, orderBy: { title: 'asc' },
    });
    return rows.map((r) => ({ id: r.slug, title: r.title }));
  }

  static async create(user, data) {
    if (!ContentSuggestionService.canSuggest(user)) throw new ForbiddenError('Réservé aux mentors du club');
    const type = TYPES[data.targetType];
    if (!type) throw new BadRequestError('Type de fiche inconnu');
    if (!KINDS.includes(data.kind)) throw new BadRequestError('Type de signalement inconnu');
    const target = await findTarget(data.targetType, data.targetId, data.targetTitle);
    if (!target) throw new NotFoundError('Fiche introuvable');
    const message = String(data.message || '').trim();
    if (message.length < 10) throw new BadRequestError('Décris le problème ou la modification en quelques mots (10 caractères minimum).');

    const suggestion = await prisma.contentSuggestion.create({
      data: {
        authorId: user.id,
        targetType: data.targetType,
        targetId: target.slug,
        targetTitle: target.title,
        kind: data.kind,
        section: data.section?.trim() || null,
        message,
        proposal: data.proposal?.trim() || null,
      },
      include: INCLUDE,
    });

    // Prévenir la Présidence et les responsables du module concerné
    const reviewers = await prisma.user.findMany({
      where: {
        isActive: true,
        id: { not: user.id },
        OR: [
          { role: 'ULTRA_ADMIN' },
          { adminRoles: { some: { isActive: true, status: 'APPROVED', role: { permissions: { some: { permission: { code: type.permission } } } } } } },
        ],
      },
      select: { id: true },
    });
    await Promise.allSettled(reviewers.map((r) => NotificationService.createNotification({
      userId: r.id,
      type: 'SYSTEM',
      title: `✏️ Proposition sur une fiche ${type.label.toLowerCase()}`,
      message: `${fullName(user)} : « ${target.title} » — ${message.slice(0, 140)}`,
      url: `/admin-frontend/index.html#suggestions`,
      dedupeKey: `SUGGESTION:${suggestion.id}:${r.id}`,
    }))).catch((err) => logger.warn('Notification de proposition non envoyée', { error: err.message }));
    return dto(suggestion);
  }

  static async listMine(user) {
    const rows = await prisma.contentSuggestion.findMany({ where: { authorId: user.id }, include: INCLUDE, orderBy: { createdAt: 'desc' }, take: 100 });
    return rows.map(dto);
  }

  static async listForReview(user, { status = 'OPEN' } = {}) {
    const types = reviewTypes(user);
    if (!types.length) throw new ForbiddenError('Réservé aux responsables des fiches et à la Présidence');
    const where = { targetType: { in: types } };
    if (STATUSES.includes(status)) where.status = status;
    const rows = await prisma.contentSuggestion.findMany({ where, include: INCLUDE, orderBy: { createdAt: status === 'OPEN' ? 'asc' : 'desc' }, take: 200 });
    return rows.map(dto);
  }

  static async resolve(user, id, { status, response }, meta = {}) {
    const suggestion = await prisma.contentSuggestion.findUnique({ where: { id } });
    if (!suggestion) throw new NotFoundError('Proposition introuvable');
    if (!reviewTypes(user).includes(suggestion.targetType)) throw new ForbiddenError('Réservé aux responsables de ces fiches');
    if (!['APPLIED', 'REJECTED'].includes(status)) throw new BadRequestError('Décision invalide');
    if (suggestion.status !== 'OPEN') throw new BadRequestError('Cette proposition a déjà été traitée');
    const note = String(response || '').trim() || null;
    if (status === 'REJECTED' && !note) throw new BadRequestError('Explique au mentor pourquoi la proposition n\'est pas retenue');
    const updated = await prisma.contentSuggestion.update({
      where: { id }, data: { status, response: note, resolvedById: user.id, resolvedAt: new Date() }, include: INCLUDE,
    });
    await AuditService.log({
      userId: user.id, action: `content.suggestion.${status === 'APPLIED' ? 'apply' : 'reject'}`, module: 'mentoring',
      resource: 'ContentSuggestion', resourceId: id, metadata: { target: `${suggestion.targetType}:${suggestion.targetId}` }, ...meta,
    });
    await NotificationService.createNotification({
      userId: suggestion.authorId,
      type: 'SYSTEM',
      title: status === 'APPLIED' ? '✅ Ta proposition a été appliquée' : 'Ta proposition sur une fiche',
      message: `« ${suggestion.targetTitle} »${note ? ` : ${note.slice(0, 160)}` : ' : merci pour ta contribution !'}`,
      url: '/mentor.html?tab=suggestions',
      dedupeKey: `SUGGESTION_DONE:${id}`,
    }).catch(() => {});
    return dto(updated);
  }
}

module.exports = ContentSuggestionService;
module.exports.KINDS = KINDS;
