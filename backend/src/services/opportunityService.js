const prisma = require('../config/database');
const { NotFoundError, BadRequestError } = require('../utils/errors');

// Rubrique « Concours & opportunités »
const CATEGORIES = ['BOURSE', 'CONCOURS', 'EXAMEN', 'ADMISSION', 'STAGE', 'PROGRAMME'];
// PRIMAIRE : CM2 (Prytanée, Mariama Ba) ; DIPLOME : licence ou master ; PROFESSIONNEL : en poste (concours professionnels)
const LEVELS = ['PRIMAIRE', 'COLLEGE', 'LYCEE', 'BACHELIER', 'ETUDIANT', 'DIPLOME', 'PROFESSIONNEL'];
const DESTINATIONS = ['SENEGAL', 'AFRIQUE', 'INTERNATIONAL'];
// UPCOMING : candidatures pas encore ouvertes ; OPEN : ouvertes ;
// CLOSED : date limite passée ; RESULTS : résultats publiés (forçage manuel)
const PHASES = ['UPCOMING', 'OPEN', 'CLOSED', 'RESULTS'];
// Domaines d'études ou de métier visés : filtre « Domaine » de la page publique
const DOMAINS = ['PLURIDISCIPLINAIRE', 'INGENIERIE', 'NUMERIQUE', 'SCIENCES', 'SANTE', 'DEFENSE', 'ENSEIGNEMENT',
  'ADMINISTRATION', 'ECONOMIE', 'AGRICULTURE', 'COMMUNICATION', 'SPORT'];
// Prise en charge : FULL = bourse complète, PARTIAL = partielle, NONE = aucun financement
const FUNDING = ['FULL', 'PARTIAL', 'NONE'];
const REPORT_KINDS = ['DATE', 'LIEN', 'CONDITIONS', 'FRAIS', 'ARNAQUE', 'AUTRE'];

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

// Session annuelle passée (date limite dépassée) ou pas encore datée : la prochaine session est attendue
function isNextSession(opportunity, now = new Date()) {
  if (!opportunity.recurring || opportunity.phaseOverride) return false;
  if (opportunity.deadline) return now > opportunity.deadline;
  return !opportunity.openingDate;
}

// Concours annuel passé : la session suivante est attendue un an après la précédente
// (date d'ouverture, sinon date limite). L'équipe est prévenue 30 jours avant.
const SESSION_REMINDER_DAYS = 30;
function expectedSessionAt(opportunity, now = new Date()) {
  if (!opportunity.deadline || !isNextSession(opportunity, now)) return null;
  const expected = new Date(opportunity.openingDate || opportunity.deadline);
  expected.setUTCFullYear(expected.getUTCFullYear() + 1);
  return expected;
}

function isSessionReminderDue(opportunity, now = new Date()) {
  const expected = expectedSessionAt(opportunity, now);
  return Boolean(expected) && now >= new Date(expected.getTime() - SESSION_REMINDER_DAYS * 86400000);
}

// Épreuves : matière obligatoire, durée et coefficient facultatifs
function normalizeExams(exams) {
  if (!Array.isArray(exams) || exams.length === 0) return null;
  return exams
    .map((e) => ({ subject: e.subject.trim(), ...(e.duration ? { duration: e.duration.trim() } : {}), ...(e.coefficient != null && e.coefficient !== '' ? { coefficient: String(e.coefficient).trim() } : {}) }))
    .filter((e) => e.subject);
}

// Étapes de sélection, liens utiles et FAQ : listes d'objets dont on garde les champs non vides
function normalizeList(list, keys) {
  if (!Array.isArray(list) || list.length === 0) return null;
  const out = list
    .map((entry) => Object.fromEntries(keys
      .map((key) => [key, typeof entry[key] === 'string' ? entry[key].trim() : entry[key]])
      .filter(([, value]) => value)))
    .filter((entry) => entry[keys[0]]);
  return out.length ? out : null;
}

// « Concours d'entrée — EPT (Thiès) » → « concours-d-entree-ept-thies »
function slugify(text) {
  return String(text)
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80)
    .replace(/-+$/g, '') || 'annonce';
}

async function uniqueSlug(text) {
  const base = slugify(text);
  for (let i = 1; ; i += 1) {
    const candidate = i === 1 ? base : `${base}-${i}`;
    const taken = await prisma.opportunity.findUnique({ where: { slug: candidate }, select: { id: true } });
    if (!taken) return candidate;
  }
}

function computePhase(opportunity, now = new Date()) {
  if (opportunity.phaseOverride) return opportunity.phaseOverride;
  if (isNextSession(opportunity, now)) return 'UPCOMING';
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
  return { ...opportunity, phase: computePhase(opportunity, now), nextSession: isNextSession(opportunity, now) };
}

function buildData(data) {
  const out = {};
  const text = ['title', 'organization', 'category', 'summary'];
  const optionalText = ['details', 'eligibility', 'destination', 'country', 'benefits', 'officialUrl', 'phaseOverride', 'image',
    'fees', 'ageLimit', 'applyMode', 'contact', 'sourceNote', 'usualPeriod', 'location', 'sessionLabel', 'funding', 'tips'];
  for (const key of text) if (data[key] !== undefined) out[key] = data[key].trim();
  for (const key of optionalText) {
    if (data[key] !== undefined) out[key] = typeof data[key] === 'string' && data[key].trim() ? data[key].trim() : null;
  }
  if (data.levels !== undefined) out.levels = [...new Set(data.levels)];
  if (data.documents !== undefined) out.documents = data.documents.map((d) => d.trim()).filter(Boolean);
  if (data.openingDate !== undefined) out.openingDate = parseDay(data.openingDate);
  if (data.deadline !== undefined) out.deadline = parseDay(data.deadline, true);
  if (data.keyDates !== undefined) out.keyDates = normalizeKeyDates(data.keyDates);
  if (data.series !== undefined) out.series = [...new Set(data.series.map((x) => x.trim()).filter(Boolean))];
  if (data.exams !== undefined) out.exams = normalizeExams(data.exams);
  if (data.places !== undefined) out.places = data.places || null;
  if (data.recurring !== undefined) out.recurring = Boolean(data.recurring);
  if (data.domains !== undefined) out.domains = [...new Set(data.domains)];
  if (data.selectionSteps !== undefined) out.selectionSteps = normalizeList(data.selectionSteps, ['title', 'detail']);
  if (data.resources !== undefined) out.resources = normalizeList(data.resources, ['label', 'url']);
  if (data.faq !== undefined) out.faq = normalizeList(data.faq, ['question', 'answer']);
  return out;
}

function assertDateOrder(openingDate, deadline) {
  if (openingDate && deadline && openingDate > deadline) {
    throw new BadRequestError("La date d'ouverture doit précéder la date limite");
  }
}

class OpportunityService {
  static async getPublished({ category, level, destination, phase, search, domain, series } = {}, now = new Date()) {
    const where = { status: 'PUBLISHED' };
    if (category) where.category = category;
    if (level) where.levels = { has: level };
    if (destination) where.destination = destination;
    if (domain) where.domains = { has: domain };
    if (series) where.series = { has: series.toUpperCase() };
    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { organization: { contains: search, mode: 'insensitive' } },
        { summary: { contains: search, mode: 'insensitive' } },
        { country: { contains: search, mode: 'insensitive' } },
        { series: { has: search.toUpperCase() } },
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
        fees: true, series: true, places: true, recurring: true, usualPeriod: true, ageLimit: true,
        slug: true, domains: true, location: true, sessionLabel: true, funding: true, keyDates: true,
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
    const rows = await prisma.opportunity.findMany({
      where,
      orderBy: { updatedAt: 'desc' },
      include: { ...CREATOR_SELECT, _count: { select: { reports: { where: { status: 'OPEN' } } } } },
    });
    const now = new Date();
    return rows.map((row) => ({
      ...withPhase(row, now),
      expectedSessionAt: expectedSessionAt(row, now),
      sessionReminderDue: row.status === 'PUBLISHED' && isSessionReminderDue(row, now),
    }));
  }

  /**
   * Prévient (notification dans l'admin + push) les personnes qui gèrent la rubrique
   * quand la session suivante d'un concours annuel approche. Rejouable sans doublon :
   * chaque rappel n'est envoyé qu'une fois par session et par personne.
   */
  static async sendSessionReminders(now = new Date()) {
    const candidates = await prisma.opportunity.findMany({
      where: { status: 'PUBLISHED', recurring: true, phaseOverride: null, deadline: { lt: now } },
      select: { id: true, title: true, organization: true, openingDate: true, deadline: true, recurring: true, phaseOverride: true, usualPeriod: true },
    });
    const due = candidates.filter((o) => isSessionReminderDue(o, now));
    if (!due.length) return { due: 0, sent: 0 };

    const team = await prisma.user.findMany({
      where: {
        isActive: true,
        OR: [
          { role: 'ULTRA_ADMIN' },
          { adminRoles: { some: { isActive: true, status: 'APPROVED', role: { permissions: { some: { permission: { code: 'opportunite.update' } } } } } } },
        ],
      },
      select: { id: true },
    });

    const pending = due.flatMap((o) => {
      const expected = expectedSessionAt(o, now);
      return team.map((u) => ({ o, expected, userId: u.id, dedupeKey: `OPPORTUNITY:SESSION:${o.id}:${expected.toISOString().slice(0, 10)}:${u.id}` }));
    });
    // Le push part à chaque création : on écarte d'abord les rappels déjà envoyés
    const already = await prisma.notification.findMany({
      where: { dedupeKey: { in: pending.map((p) => p.dedupeKey) } },
      select: { dedupeKey: true },
    });
    const sentKeys = new Set(already.map((n) => n.dedupeKey));
    const toSend = pending.filter((p) => !sentKeys.has(p.dedupeKey));

    const notificationService = require('./notificationService');
    const results = await Promise.allSettled(toSend.map(({ o, expected, userId, dedupeKey }) => notificationService.createNotification({
      userId,
      type: 'SYSTEM',
      title: '📅 Nouvelle session à préparer',
      message: `${o.title} (${o.organization}) : la prochaine session est attendue vers le ${expected.toLocaleDateString('fr-FR', { timeZone: 'UTC' })}${o.usualPeriod ? ` (${o.usualPeriod})` : ''}. Vérifiez le site officiel et créez la fiche de la nouvelle session.`,
      url: '/admin-frontend/index.html#opportunites',
      dedupeKey,
    })));
    return { due: due.length, sent: results.filter((r) => r.status === 'fulfilled').length };
  }

  static async getById(id) {
    const opportunity = await prisma.opportunity.findUnique({ where: { id }, include: CREATOR_SELECT });
    if (!opportunity) throw new NotFoundError('Annonce non trouvée');
    return withPhase(opportunity);
  }

  // Fiche publique : par slug (liens partagés, sitemap) ou par identifiant
  static async getBySlugOrId(key) {
    const bySlug = await prisma.opportunity.findUnique({ where: { slug: key }, include: CREATOR_SELECT });
    return bySlug ? withPhase(bySlug) : this.getById(key);
  }

  static async create(data, userId) {
    const fields = buildData(data);
    assertDateOrder(fields.openingDate, fields.deadline);
    const created = await prisma.opportunity.create({
      data: {
        ...fields,
        slug: await uniqueSlug(fields.title),
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

  // « Nouvelle session » : copie en brouillon, sans les dates ni la vérification de l'ancienne session
  static async duplicate(id, userId) {
    const source = await this.getById(id);
    const omit = ['id', 'slug', 'status', 'createdAt', 'updatedAt', 'createdById', 'createdBy', 'phase', 'nextSession',
      'openingDate', 'deadline', 'keyDates', 'lastVerifiedAt', 'phaseOverride', 'sessionLabel'];
    const data = Object.fromEntries(Object.entries(source).filter(([key]) => !omit.includes(key)));
    ['exams', 'selectionSteps', 'resources', 'faq'].forEach((key) => {
      if (data[key] === null) delete data[key];
    });
    const title = `${source.title} (nouvelle session)`;
    const created = await prisma.opportunity.create({
      data: { ...data, title, slug: await uniqueSlug(title), status: 'DRAFT', createdById: userId },
      include: CREATOR_SELECT,
    });
    // Les jeunes qui suivaient la session précédente seront prévenus à la publication
    await require('./opportunityAlertService').carryOver(source.id, created.id);
    return withPhase(created);
  }

  // Signalement public : seulement sur une annonce publiée
  static async createReport(id, { kind, message, contact }) {
    const opportunity = await prisma.opportunity.findUnique({ where: { id }, select: { id: true, status: true } });
    if (!opportunity || opportunity.status !== 'PUBLISHED') throw new NotFoundError('Annonce non trouvée');
    return prisma.opportunityReport.create({
      data: { opportunityId: id, kind, message: message.trim(), contact: contact?.trim() || null },
      select: { id: true, createdAt: true },
    });
  }

  static async listReports({ status = 'OPEN' } = {}) {
    return prisma.opportunityReport.findMany({
      where: status ? { status } : {},
      orderBy: { createdAt: 'desc' },
      take: 200,
      include: { opportunity: { select: { id: true, title: true, slug: true } } },
    });
  }

  static async resolveReport(reportId) {
    const report = await prisma.opportunityReport.findUnique({ where: { id: reportId } });
    if (!report) throw new NotFoundError('Signalement non trouvé');
    return prisma.opportunityReport.update({ where: { id: reportId }, data: { status: 'RESOLVED', resolvedAt: new Date() } });
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
module.exports.DOMAINS = DOMAINS;
module.exports.FUNDING = FUNDING;
module.exports.REPORT_KINDS = REPORT_KINDS;
module.exports.slugify = slugify;
module.exports.computePhase = computePhase;
module.exports.isNextSession = isNextSession;
module.exports.expectedSessionAt = expectedSessionAt;
module.exports.isSessionReminderDue = isSessionReminderDue;
module.exports.buildData = buildData;
