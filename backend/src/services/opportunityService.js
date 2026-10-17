const prisma = require('../config/database');
const { NotFoundError, BadRequestError } = require('../utils/errors');

// Rubrique « Concours & opportunités »
const CATEGORIES = ['BOURSE', 'CONCOURS', 'EXAMEN', 'ADMISSION'];
const LEVELS = ['COLLEGE', 'LYCEE', 'BACHELIER', 'ETUDIANT'];
const DESTINATIONS = ['SENEGAL', 'AFRIQUE', 'INTERNATIONAL'];
// UPCOMING : candidatures pas encore ouvertes ; OPEN : ouvertes ;
// CLOSED : date limite passée ; RESULTS : résultats publiés (forçage manuel)
const PHASES = ['UPCOMING', 'OPEN', 'CLOSED', 'RESULTS'];

const PUBLIC_LIMIT = 300;
const CREATOR_SELECT = { createdBy: { select: { id: true, firstName: true, lastName: true } } };

// Les dates sont saisies au jour près (AAAA-MM-JJ). Dakar est à UTC+0 :
// une date limite court jusqu'à la fin de la journée.
function parseDay(value, endOfDay = false) {
  if (!value) return null;
  return new Date(`${value}T${endOfDay ? '23:59:59.999' : '00:00:00.000'}Z`);
}

function normalizeKeyDates(keyDates) {
  if (!Array.isArray(keyDates) || keyDates.length === 0) return null;
  return keyDates
    .map((d) => ({ label: d.label.trim(), date: d.date }))
    .sort((a, b) => a.date.localeCompare(b.date));
}

function computePhase(opportunity, now = new Date()) {
  if (opportunity.phaseOverride) return opportunity.phaseOverride;
  if (opportunity.openingDate && now < opportunity.openingDate) return 'UPCOMING';
  if (opportunity.deadline && now > opportunity.deadline) return 'CLOSED';
  return 'OPEN';
}

// Ouvertes d'abord (date limite la plus proche en tête), puis à venir, puis terminées
const PHASE_ORDER = { OPEN: 0, UPCOMING: 1, CLOSED: 2, RESULTS: 2 };

function compareForDisplay(a, b) {
  const order = PHASE_ORDER[a.phase] - PHASE_ORDER[b.phase];
  if (order !== 0) return order;
  const aTime = a.deadline ? a.deadline.getTime() : null;
  const bTime = b.deadline ? b.deadline.getTime() : null;
  if (aTime === bTime) return b.updatedAt - a.updatedAt;
  if (aTime === null) return 1;
  if (bTime === null) return -1;
  // Terminées : la plus récente d'abord
  return PHASE_ORDER[a.phase] === 2 ? bTime - aTime : aTime - bTime;
}

function withPhase(opportunity, now) {
  return { ...opportunity, phase: computePhase(opportunity, now) };
}

function buildData(data) {
  const out = {};
  const text = ['title', 'organization', 'category', 'summary'];
  const optionalText = ['details', 'eligibility', 'destination', 'country', 'benefits', 'officialUrl', 'phaseOverride', 'image'];
  for (const key of text) if (data[key] !== undefined) out[key] = data[key].trim();
  for (const key of optionalText) {
    if (data[key] !== undefined) out[key] = typeof data[key] === 'string' && data[key].trim() ? data[key].trim() : null;
  }
  if (data.levels !== undefined) out.levels = [...new Set(data.levels)];
  if (data.documents !== undefined) out.documents = data.documents.map((d) => d.trim()).filter(Boolean);
  if (data.openingDate !== undefined) out.openingDate = parseDay(data.openingDate);
  if (data.deadline !== undefined) out.deadline = parseDay(data.deadline, true);
  if (data.keyDates !== undefined) out.keyDates = normalizeKeyDates(data.keyDates);
  return out;
}

function assertDateOrder(openingDate, deadline) {
  if (openingDate && deadline && openingDate > deadline) {
    throw new BadRequestError("La date d'ouverture doit précéder la date limite");
  }
}

class OpportunityService {
  static async getPublished({ category, level, destination, phase, search } = {}, now = new Date()) {
    const where = { status: 'PUBLISHED' };
    if (category) where.category = category;
    if (level) where.levels = { has: level };
    if (destination) where.destination = destination;
    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { organization: { contains: search, mode: 'insensitive' } },
        { summary: { contains: search, mode: 'insensitive' } },
        { country: { contains: search, mode: 'insensitive' } },
      ];
    }

    const rows = await prisma.opportunity.findMany({
      where,
      take: PUBLIC_LIMIT,
      orderBy: { updatedAt: 'desc' },
      select: {
        id: true, title: true, organization: true, category: true, summary: true,
        levels: true, destination: true, country: true, openingDate: true, deadline: true,
        officialUrl: true, lastVerifiedAt: true, phaseOverride: true, image: true, updatedAt: true,
      },
    });

    return rows
      .map((row) => withPhase(row, now))
      .filter((row) => !phase || row.phase === phase)
      .sort(compareForDisplay)
      .map(({ phaseOverride, ...row }) => row);
  }

  static async getForAdmin({ status, search, category } = {}) {
    const where = {};
    if (status) where.status = status;
    if (category) where.category = category;
    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { organization: { contains: search, mode: 'insensitive' } },
      ];
    }
    const rows = await prisma.opportunity.findMany({ where, orderBy: { updatedAt: 'desc' }, include: CREATOR_SELECT });
    const now = new Date();
    return rows.map((row) => withPhase(row, now));
  }

  static async getById(id) {
    const opportunity = await prisma.opportunity.findUnique({ where: { id }, include: CREATOR_SELECT });
    if (!opportunity) throw new NotFoundError('Annonce non trouvée');
    return withPhase(opportunity);
  }

  static async create(data, userId) {
    const fields = buildData(data);
    assertDateOrder(fields.openingDate, fields.deadline);
    const created = await prisma.opportunity.create({
      data: {
        ...fields,
        lastVerifiedAt: data.markVerified ? new Date() : null,
        status: 'DRAFT',
        createdById: userId,
      },
      include: CREATOR_SELECT,
    });
    return withPhase(created);
  }

  static async update(id, data) {
    const current = await this.getById(id);
    const fields = buildData(data);
    assertDateOrder(
      fields.openingDate !== undefined ? fields.openingDate : current.openingDate,
      fields.deadline !== undefined ? fields.deadline : current.deadline,
    );

    if (data.markVerified) {
      fields.lastVerifiedAt = new Date();
    } else if (fields.officialUrl !== undefined && fields.officialUrl !== current.officialUrl) {
      // Nouvelle source : l'ancienne vérification ne vaut plus
      fields.lastVerifiedAt = null;
    }
    if (current.status === 'PUBLISHED' && (fields.officialUrl === null || fields.lastVerifiedAt === null)) {
      throw new BadRequestError("Une annonce publiée doit garder un lien officiel vérifié : cochez la vérification de la nouvelle source ou dépubliez l'annonce");
    }

    const updated = await prisma.opportunity.update({ where: { id }, data: fields, include: CREATOR_SELECT });
    return withPhase(updated);
  }

  static async publish(id) {
    const current = await this.getById(id);
    if (!current.officialUrl) {
      throw new BadRequestError('Publication impossible : ajoutez le lien officiel de l\'annonce');
    }
    if (!current.lastVerifiedAt) {
      throw new BadRequestError('Publication impossible : confirmez avoir vérifié l\'annonce sur la source officielle');
    }
    return this.setStatus(id, 'PUBLISHED');
  }

  static async unpublish(id) {
    await this.getById(id);
    return this.setStatus(id, 'DRAFT');
  }

  static async archive(id) {
    await this.getById(id);
    return this.setStatus(id, 'ARCHIVED');
  }

  static async setStatus(id, status) {
    const updated = await prisma.opportunity.update({ where: { id }, data: { status }, include: CREATOR_SELECT });
    return withPhase(updated);
  }

  static async remove(id) {
    await this.getById(id);
    await prisma.opportunity.delete({ where: { id } });
  }
}

module.exports = OpportunityService;
module.exports.CATEGORIES = CATEGORIES;
module.exports.LEVELS = LEVELS;
module.exports.DESTINATIONS = DESTINATIONS;
module.exports.PHASES = PHASES;
module.exports.computePhase = computePhase;
