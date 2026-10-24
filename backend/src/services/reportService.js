/**
 * @file reportService.js
 * @description Rapports d'activité des postes du bureau : rédaction, soumission,
 * validation par la Présidence, échéances et synthèse.
 *
 * Lecture d'un rapport :
 * - l'auteur, toujours (y compris ses brouillons) ;
 * - l'Ultra Admin et les titulaires d'un poste « seesAllReports » : tout rapport soumis ;
 * - le titulaire d'un poste : les rapports soumis de son équipe et des postes qui lui rendent compte ;
 * - tout membre du bureau : les rapports validés.
 * Seul l'Ultra Admin (Présidence) valide ou demande des corrections.
 */

const prisma = require('../config/database');
const { NotFoundError, BadRequestError, ForbiddenError } = require('../utils/errors');
const { REPORT_TEMPLATES, templateKeyFor } = require('../config/reportTemplates');
const AuditService = require('./auditService');
const NotificationService = require('./notificationService');
const logger = require('../utils/logger');

const FREQUENCIES = ['NONE', 'MONTHLY', 'QUARTERLY', 'ANNUAL'];
const EDITABLE_STATUSES = ['DRAFT', 'NEEDS_CHANGES'];
// Nombre de périodes passées examinées pour détecter les retards
const LOOKBACK_PERIODS = 6;
const MONTHS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
const DAY_MS = 86400000;

// ===== Périodes =====

function periodKeyFor(frequency, date = new Date()) {
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth();
  if (frequency === 'MONTHLY') return `${year}-${String(month + 1).padStart(2, '0')}`;
  if (frequency === 'QUARTERLY') return `${year}-T${Math.floor(month / 3) + 1}`;
  if (frequency === 'ANNUAL') return String(year);
  return null;
}

function parsePeriod(key) {
  if (!key) return null;
  let match = /^(\d{4})-(\d{2})$/.exec(key);
  if (match) {
    const year = Number(match[1]);
    const month = Number(match[2]) - 1;
    if (month < 0 || month > 11) return null;
    return {
      key, frequency: 'MONTHLY',
      start: new Date(Date.UTC(year, month, 1)),
      end: new Date(Date.UTC(year, month + 1, 1)),
      label: `${MONTHS[month].charAt(0).toUpperCase()}${MONTHS[month].slice(1)} ${year}`,
    };
  }
  match = /^(\d{4})-T([1-4])$/.exec(key);
  if (match) {
    const year = Number(match[1]);
    const quarter = Number(match[2]);
    return {
      key, frequency: 'QUARTERLY',
      start: new Date(Date.UTC(year, (quarter - 1) * 3, 1)),
      end: new Date(Date.UTC(year, quarter * 3, 1)),
      label: `${quarter === 1 ? '1er' : `${quarter}e`} trimestre ${year}`,
    };
  }
  match = /^(\d{4})$/.exec(key);
  if (match) {
    const year = Number(match[1]);
    return {
      key, frequency: 'ANNUAL',
      start: new Date(Date.UTC(year, 0, 1)),
      end: new Date(Date.UTC(year + 1, 0, 1)),
      label: `Année ${year}`,
    };
  }
  return null;
}

function shiftPeriod(key, offset) {
  const period = parsePeriod(key);
  if (!period) return null;
  const start = new Date(period.start);
  if (period.frequency === 'MONTHLY') start.setUTCMonth(start.getUTCMonth() + offset);
  if (period.frequency === 'QUARTERLY') start.setUTCMonth(start.getUTCMonth() + offset * 3);
  if (period.frequency === 'ANNUAL') start.setUTCFullYear(start.getUTCFullYear() + offset);
  return periodKeyFor(period.frequency, start);
}

function dueDateFor(key, dueDays) {
  const period = parsePeriod(key);
  return period ? new Date(period.end.getTime() + dueDays * DAY_MS) : null;
}

// Périodes proposées à la rédaction : la période en cours et les précédentes
function periodOptions(frequency, now = new Date()) {
  const current = periodKeyFor(frequency, now);
  if (!current) return [];
  return Array.from({ length: LOOKBACK_PERIODS }, (_, i) => {
    const key = shiftPeriod(current, -i);
    return { key, label: parsePeriod(key).label };
  });
}

/**
 * Échéances d'un poste : chaque période depuis la prise de fonction (au plus
 * LOOKBACK_PERIODS en arrière) est rendue, en retard ou à rendre.
 */
function computeDeadlines(position, since, renderedKeys, now = new Date()) {
  const frequency = position.reportFrequency;
  if (!FREQUENCIES.includes(frequency) || frequency === 'NONE' || !since) return null;

  const current = periodKeyFor(frequency, now);
  const oldest = shiftPeriod(current, -LOOKBACK_PERIODS);
  let key = periodKeyFor(frequency, since);
  if (parsePeriod(key).start < parsePeriod(oldest).start) key = oldest;

  const periods = [];
  while (key && parsePeriod(key).start <= parsePeriod(current).start) {
    const dueDate = dueDateFor(key, position.reportDueDays);
    let status = 'DUE';
    if (renderedKeys.has(key)) status = 'DONE';
    else if (dueDate < now) status = 'LATE';
    periods.push({ key, label: parsePeriod(key).label, dueDate, status });
    key = shiftPeriod(key, 1);
  }

  return {
    frequency,
    periods,
    late: periods.filter((p) => p.status === 'LATE'),
    next: periods.find((p) => p.status === 'DUE') || null,
  };
}

// ===== Contenu =====

const MAX_TEXT = { text: 300, textarea: 8000, select: 100 };
const MAX_CELL = 500;
const MAX_ROWS = 200;
const MAX_AMOUNT = 1e12;

function cleanString(value, max) {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

function cleanDate(value) {
  return typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value) ? value : '';
}

function cleanNumber(value, { integer = false, min = -MAX_AMOUNT } = {}) {
  if (value === '' || value === null || value === undefined) return null;
  const n = Number(value);
  if (!Number.isFinite(n) || n < min || n > MAX_AMOUNT) return null;
  return integer ? Math.round(n) : n;
}

function cleanCell(column, value) {
  if (column.type === 'amount') return cleanNumber(value, { integer: true, min: 0 });
  if (column.type === 'number') return cleanNumber(value);
  if (column.type === 'date') return cleanDate(value);
  return cleanString(value, MAX_CELL);
}

const isEmptyValue = (v) => v === null || v === '' || (Array.isArray(v) && v.length === 0);

// Ne conserve que les sections du modèle, au format attendu
function sanitizeContent(template, content = {}) {
  const source = content && typeof content === 'object' ? content : {};
  const result = {};
  for (const section of template.sections) {
    const raw = source[section.key];
    if (section.type === 'table') {
      const rows = Array.isArray(raw) ? raw.slice(0, MAX_ROWS) : [];
      result[section.key] = rows
        .map((row) => Object.fromEntries(section.columns.map((col) => [col.key, cleanCell(col, row?.[col.key])])))
        .filter((row) => Object.values(row).some((v) => !isEmptyValue(v)));
    } else if (section.type === 'number') {
      result[section.key] = cleanNumber(raw);
    } else if (section.type === 'date') {
      result[section.key] = cleanDate(raw);
    } else if (section.type === 'select') {
      const value = cleanString(raw, MAX_TEXT.select);
      result[section.key] = section.options.includes(value) ? value : '';
    } else {
      result[section.key] = cleanString(raw, MAX_TEXT[section.type] || MAX_TEXT.textarea);
    }
  }
  return result;
}

function sumTable(template, content, tableKey) {
  const section = template.sections.find((s) => s.key === tableKey);
  if (!section) return 0;
  const amountKeys = section.columns.filter((c) => c.type === 'amount').map((c) => c.key);
  return (content[tableKey] || []).reduce(
    (total, row) => total + amountKeys.reduce((sum, key) => sum + (row[key] || 0), 0), 0);
}

function computeTotals(template, content) {
  if (!template.totals) return { incomeTotal: 0, expenseTotal: 0 };
  return {
    incomeTotal: sumTable(template, content, template.totals.income),
    expenseTotal: sumTable(template, content, template.totals.expense),
  };
}

function missingRequired(template, content) {
  return template.sections
    .filter((s) => s.required && isEmptyValue(content[s.key] ?? null))
    .map((s) => s.label);
}

// ===== Droits =====

const USER_SUMMARY = { id: true, firstName: true, lastName: true, avatarUrl: true };
const fullName = (u) => (u ? `${u.firstName} ${u.lastName}`.trim() : null);

/**
 * Contexte de lecture d'un utilisateur, calculé depuis ses affectations actives.
 */
async function getViewerScope(user) {
  const assignments = await prisma.clubAssignment.findMany({
    where: { userId: user.id, isActive: true },
    include: { position: { include: { subordinates: { select: { id: true } } } } },
    orderBy: { position: { order: 'asc' } },
  });

  const isUltra = user.role === 'ULTRA_ADMIN';
  const held = assignments.filter((a) => a.memberRole !== 'EQUIPE');
  const supervisedPositionIds = [...new Set(held.flatMap((a) => [a.positionId, ...a.position.subordinates.map((s) => s.id)]))];

  return {
    userId: user.id,
    isUltra,
    assignments,
    canReview: isUltra,
    seesAll: isUltra || held.some((a) => a.position.seesAllReports),
    supervisedPositionIds,
    isBureauMember: isUltra || assignments.length > 0,
  };
}

function readWhere(scope) {
  const or = [{ authorId: scope.userId }];
  if (scope.seesAll) or.push({ status: { not: 'DRAFT' } });
  if (scope.supervisedPositionIds.length) {
    or.push({ positionId: { in: scope.supervisedPositionIds }, status: { not: 'DRAFT' } });
  }
  if (scope.isBureauMember) or.push({ status: 'VALIDATED' });
  return { OR: or };
}

function canRead(scope, report) {
  if (report.authorId === scope.userId) return true;
  if (report.status === 'DRAFT') return false;
  if (scope.seesAll) return true;
  if (scope.supervisedPositionIds.includes(report.positionId)) return true;
  return scope.isBureauMember && report.status === 'VALIDATED';
}

// ===== Présentation =====

function toDto(report, scope) {
  const templateKey = templateKeyFor(report.position);
  const isAuthor = report.authorId === scope.userId;
  return {
    id: report.id,
    title: report.title,
    status: report.status,
    periodKey: report.periodKey,
    periodLabel: parsePeriod(report.periodKey)?.label || null,
    templateKey,
    content: report.content,
    attachments: report.attachments || [],
    incomeTotal: report.incomeTotal,
    expenseTotal: report.expenseTotal,
    submittedAt: report.submittedAt,
    reviewedAt: report.reviewedAt,
    reviewComment: report.reviewComment,
    reviewedBy: fullName(report.reviewedBy),
    createdAt: report.createdAt,
    updatedAt: report.updatedAt,
    position: { id: report.position.id, title: report.position.title, category: report.position.category },
    author: { id: report.author.id, fullName: fullName(report.author), avatarUrl: report.author.avatarUrl },
    events: (report.events || []).map((e) => ({
      action: e.action, comment: e.comment, createdAt: e.createdAt, actor: fullName(e.actor),
    })),
    permissions: {
      edit: isAuthor && EDITABLE_STATUSES.includes(report.status),
      submit: isAuthor && EDITABLE_STATUSES.includes(report.status),
      delete: (isAuthor && report.status === 'DRAFT') || scope.isUltra,
      review: scope.canReview && report.status === 'SUBMITTED',
    },
  };
}

const LIST_INCLUDE = {
  position: true,
  author: { select: USER_SUMMARY },
  reviewedBy: { select: USER_SUMMARY },
};

const DETAIL_INCLUDE = {
  ...LIST_INCLUDE,
  events: { orderBy: { createdAt: 'asc' }, include: { actor: { select: USER_SUMMARY } } },
};

async function notify(userIds, payload) {
  for (const userId of new Set(userIds)) {
    try {
      await NotificationService.createNotification({ userId, type: 'SYSTEM', ...payload });
    } catch (error) {
      logger.error(`[Rapports] Notification impossible pour ${userId} : ${error.message}`);
    }
  }
}

// Destinataires d'une soumission : Présidence, lecteurs globaux et supérieurs directs
async function reviewerIdsFor(report) {
  const [ultras, readers] = await Promise.all([
    prisma.user.findMany({ where: { role: 'ULTRA_ADMIN', isActive: true }, select: { id: true } }),
    prisma.clubAssignment.findMany({
      where: {
        isActive: true,
        memberRole: { not: 'EQUIPE' },
        OR: [
          { position: { seesAllReports: true } },
          { positionId: report.positionId },
          ...(report.position.reportsToId ? [{ positionId: report.position.reportsToId }] : []),
        ],
      },
      select: { userId: true },
    }),
  ]);
  return [...ultras, ...readers.map((r) => ({ id: r.userId }))]
    .map((u) => u.id)
    .filter((id) => id !== report.authorId);
}

class ReportService {
  static getTemplates() {
    return REPORT_TEMPLATES;
  }

  /**
   * Espace bureau de l'utilisateur : postes, modèles, périodes et échéances.
   */
  static async getContext(user, now = new Date()) {
    const scope = await getViewerScope(user);
    const positionIds = scope.assignments.map((a) => a.positionId);
    const rendered = positionIds.length
      ? await prisma.positionReport.findMany({
        where: { positionId: { in: positionIds }, status: { not: 'DRAFT' }, periodKey: { not: null } },
        select: { positionId: true, periodKey: true },
      })
      : [];

    const positions = scope.assignments.map((a) => {
      const keys = new Set(rendered.filter((r) => r.positionId === a.positionId).map((r) => r.periodKey));
      return {
        assignmentId: a.id,
        memberRole: a.memberRole,
        mandateYear: a.mandateYear,
        position: {
          id: a.position.id,
          title: a.position.title,
          category: a.position.category,
          templateKey: templateKeyFor(a.position),
          reportFrequency: a.position.reportFrequency,
          reportDueDays: a.position.reportDueDays,
        },
        periods: periodOptions(a.position.reportFrequency, now),
        // Les échéances incombent aux titulaires, pas aux membres d'équipe
        deadlines: a.memberRole === 'EQUIPE' ? null : computeDeadlines(a.position, a.startDate, keys, now),
      };
    });

    const pendingReview = scope.seesAll
      ? await prisma.positionReport.count({ where: { status: 'SUBMITTED', authorId: { not: user.id } } })
      : 0;

    return {
      isBureauMember: scope.isBureauMember,
      canReview: scope.canReview,
      seesAll: scope.seesAll,
      supervises: scope.supervisedPositionIds.length > 0,
      pendingReview,
      positions,
      templates: REPORT_TEMPLATES,
    };
  }

  /**
   * Liste filtrée des rapports lisibles.
   * scope : mine | team | review | bureau (défaut : tout ce qui est lisible)
   */
  static async list(user, filters = {}) {
    const scope = await getViewerScope(user);
    if (!scope.isBureauMember) throw new ForbiddenError('Espace réservé aux membres du bureau');

    const and = [readWhere(scope)];
    if (filters.scope === 'mine') and.push({ authorId: user.id });
    if (filters.scope === 'team') {
      and.push({ positionId: { in: scope.supervisedPositionIds }, authorId: { not: user.id } });
    }
    if (filters.scope === 'review') and.push({ status: 'SUBMITTED', authorId: { not: user.id } });
    if (filters.scope === 'bureau') and.push({ status: 'VALIDATED' });
    if (filters.status) and.push({ status: filters.status });
    if (filters.positionId) and.push({ positionId: filters.positionId });
    if (filters.periodKey) and.push({ periodKey: filters.periodKey });

    const reports = await prisma.positionReport.findMany({
      where: { AND: and },
      include: LIST_INCLUDE,
      orderBy: [{ updatedAt: 'desc' }],
      take: 200,
    });
    return reports.map((r) => toDto(r, scope));
  }

  static async getById(user, id) {
    const scope = await getViewerScope(user);
    const report = await prisma.positionReport.findUnique({ where: { id }, include: DETAIL_INCLUDE });
    if (!report || !canRead(scope, report)) throw new NotFoundError('Rapport introuvable');
    return toDto(report, scope);
  }

  static async create(user, data) {
    const scope = await getViewerScope(user);
    const assignment = scope.assignments.find((a) => a.positionId === data.positionId);
    if (!assignment) throw new ForbiddenError('Vous n\'occupez pas ce poste');

    const position = assignment.position;
    const template = REPORT_TEMPLATES[templateKeyFor(position)];
    const periodKey = ReportService.checkPeriod(position, data.periodKey);
    const content = sanitizeContent(template, data.content);

    const report = await prisma.positionReport.create({
      data: {
        positionId: position.id,
        authorId: user.id,
        periodKey,
        title: (data.title || '').trim() || `${template.label}${periodKey ? ` — ${parsePeriod(periodKey).label}` : ''}`,
        content,
        attachments: data.attachments || [],
        ...computeTotals(template, content),
      },
      include: DETAIL_INCLUDE,
    });
    return toDto(report, scope);
  }

  static async update(user, id, data) {
    const scope = await getViewerScope(user);
    const existing = await prisma.positionReport.findUnique({ where: { id }, include: { position: true } });
    if (!existing || existing.authorId !== user.id) throw new NotFoundError('Rapport introuvable');
    if (!EDITABLE_STATUSES.includes(existing.status)) {
      throw new BadRequestError('Un rapport soumis ou validé ne peut plus être modifié');
    }

    const template = REPORT_TEMPLATES[templateKeyFor(existing.position)];
    const update = {};
    if (data.title !== undefined) update.title = data.title.trim() || existing.title;
    if (data.periodKey !== undefined) update.periodKey = ReportService.checkPeriod(existing.position, data.periodKey);
    if (data.attachments !== undefined) update.attachments = data.attachments;
    if (data.content !== undefined) {
      update.content = sanitizeContent(template, data.content);
      Object.assign(update, computeTotals(template, update.content));
    }

    const report = await prisma.positionReport.update({ where: { id }, data: update, include: DETAIL_INCLUDE });
    return toDto(report, scope);
  }

  // La période doit correspondre au rythme du poste (facultative s'il n'en a pas)
  static checkPeriod(position, periodKey) {
    if (!periodKey) {
      if (position.reportFrequency !== 'NONE') throw new BadRequestError('Indiquez la période couverte par le rapport');
      return null;
    }
    const period = parsePeriod(periodKey);
    if (!period) throw new BadRequestError('Période invalide');
    if (position.reportFrequency !== 'NONE' && period.frequency !== position.reportFrequency) {
      throw new BadRequestError('La période ne correspond pas au rythme de rapport du poste');
    }
    return periodKey;
  }

  static async remove(user, id, meta = {}) {
    const scope = await getViewerScope(user);
    const report = await prisma.positionReport.findUnique({ where: { id } });
    if (!report || !canRead(scope, report)) throw new NotFoundError('Rapport introuvable');
    const isAuthorDraft = report.authorId === user.id && report.status === 'DRAFT';
    if (!isAuthorDraft && !scope.isUltra) {
      throw new ForbiddenError('Seuls les brouillons peuvent être supprimés par leur auteur');
    }

    await prisma.positionReport.delete({ where: { id } });
    await AuditService.log({
      userId: user.id, action: 'report.delete', module: 'organization', resource: 'PositionReport',
      resourceId: id, metadata: { title: report.title, status: report.status }, ...meta,
    });
  }

  static async submit(user, id, meta = {}) {
    const scope = await getViewerScope(user);
    const existing = await prisma.positionReport.findUnique({ where: { id }, include: { position: true } });
    if (!existing || existing.authorId !== user.id) throw new NotFoundError('Rapport introuvable');
    if (!EDITABLE_STATUSES.includes(existing.status)) throw new BadRequestError('Ce rapport a déjà été soumis');

    const template = REPORT_TEMPLATES[templateKeyFor(existing.position)];
    const missing = missingRequired(template, existing.content || {});
    if (missing.length) throw new BadRequestError(`Sections obligatoires à compléter : ${missing.join(', ')}`);

    // La Présidence n'a pas à valider ses propres rapports
    const selfValidated = scope.canReview;
    const now = new Date();
    const report = await prisma.positionReport.update({
      where: { id },
      data: {
        status: selfValidated ? 'VALIDATED' : 'SUBMITTED',
        submittedAt: now,
        ...(selfValidated ? { reviewedAt: now, reviewedById: user.id } : {}),
        events: { create: { actorId: user.id, action: selfValidated ? 'VALIDATED' : 'SUBMITTED' } },
      },
      include: DETAIL_INCLUDE,
    });

    await AuditService.log({
      userId: user.id, action: 'report.submit', module: 'organization', resource: 'PositionReport',
      resourceId: id, metadata: { title: report.title, position: report.position.title }, ...meta,
    });

    if (!selfValidated) {
      await notify(await reviewerIdsFor(report), {
        title: `📄 Nouveau rapport : ${report.position.title}`,
        message: `${fullName(report.author)} a soumis « ${report.title} ».`,
        url: `/bureau.html?report=${report.id}`,
      });
    }
    return toDto(report, scope);
  }

  static async review(user, id, { decision, comment }, meta = {}) {
    const scope = await getViewerScope(user);
    if (!scope.canReview) throw new ForbiddenError('Seule la Présidence peut examiner les rapports');

    const existing = await prisma.positionReport.findUnique({ where: { id } });
    if (!existing) throw new NotFoundError('Rapport introuvable');
    if (existing.status !== 'SUBMITTED') throw new BadRequestError('Seul un rapport soumis peut être examiné');
    const note = (comment || '').trim();
    if (decision === 'NEEDS_CHANGES' && !note) {
      throw new BadRequestError('Expliquez les corrections attendues');
    }

    const report = await prisma.positionReport.update({
      where: { id },
      data: {
        status: decision,
        reviewedAt: new Date(),
        reviewedById: user.id,
        reviewComment: note || null,
        events: { create: { actorId: user.id, action: decision, comment: note || null } },
      },
      include: DETAIL_INCLUDE,
    });

    await AuditService.log({
      userId: user.id, action: `report.${decision === 'VALIDATED' ? 'validate' : 'request_changes'}`,
      module: 'organization', resource: 'PositionReport', resourceId: id,
      metadata: { title: report.title, position: report.position.title }, ...meta,
    });

    await notify([report.authorId], decision === 'VALIDATED'
      ? { title: '✅ Rapport validé', message: `« ${report.title} » a été validé par la Présidence.`, url: `/bureau.html?report=${id}` }
      : { title: '✏️ Corrections demandées', message: `« ${report.title} » : ${note.slice(0, 180)}`, url: `/bureau.html?report=${id}` });

    return toDto(report, scope);
  }

  /**
   * Synthèse pour la Présidence : situation de chaque poste et trésorerie de l'année.
   */
  static async getSummary(user, { year } = {}, now = new Date()) {
    const scope = await getViewerScope(user);
    if (!scope.seesAll) throw new ForbiddenError('Synthèse réservée à la Présidence');

    const targetYear = Number(year) || now.getUTCFullYear();
    const [positions, reports] = await Promise.all([
      prisma.clubPosition.findMany({
        orderBy: [{ order: 'asc' }, { createdAt: 'asc' }],
        include: {
          reportsTo: { select: { id: true, title: true } },
          assignments: { where: { isActive: true }, include: { user: { select: USER_SUMMARY } } },
        },
      }),
      prisma.positionReport.findMany({
        where: { status: { not: 'DRAFT' } },
        select: {
          id: true, positionId: true, periodKey: true, status: true, title: true,
          submittedAt: true, incomeTotal: true, expenseTotal: true,
        },
        orderBy: { submittedAt: 'desc' },
      }),
    ]);

    const rows = positions.map((position) => {
      const holders = position.assignments.filter((a) => a.memberRole !== 'EQUIPE');
      const own = reports.filter((r) => r.positionId === position.id);
      const since = holders.reduce((min, a) => (!min || a.startDate < min ? a.startDate : min), null);
      const deadlines = holders.length
        ? computeDeadlines(position, since, new Set(own.filter((r) => r.periodKey).map((r) => r.periodKey)), now)
        : null;
      return {
        id: position.id,
        title: position.title,
        category: position.category,
        templateKey: templateKeyFor(position),
        reportTemplate: position.reportTemplate,
        reportFrequency: position.reportFrequency,
        reportDueDays: position.reportDueDays,
        seesAllReports: position.seesAllReports,
        reportsTo: position.reportsTo,
        holders: holders.map((a) => ({ userId: a.user.id, fullName: fullName(a.user) })),
        teamCount: position.assignments.length - holders.length,
        counts: {
          submitted: own.filter((r) => r.status === 'SUBMITTED').length,
          needsChanges: own.filter((r) => r.status === 'NEEDS_CHANGES').length,
          validated: own.filter((r) => r.status === 'VALIDATED').length,
        },
        lastReport: own[0] || null,
        late: deadlines?.late || [],
        next: deadlines?.next || null,
      };
    });

    // Trésorerie : rapports financiers validés de l'année, par période
    const treasuryPositionIds = new Set(rows.filter((r) => REPORT_TEMPLATES[r.templateKey].totals).map((r) => r.id));
    const byPeriod = {};
    reports
      .filter((r) => r.status === 'VALIDATED' && treasuryPositionIds.has(r.positionId))
      .filter((r) => (r.periodKey ? r.periodKey.startsWith(String(targetYear)) : r.submittedAt?.getUTCFullYear() === targetYear))
      .forEach((r) => {
        const key = r.periodKey || 'hors-periode';
        byPeriod[key] = byPeriod[key] || { key, label: parsePeriod(r.periodKey)?.label || 'Hors période', income: 0, expense: 0, reports: 0 };
        byPeriod[key].income += r.incomeTotal;
        byPeriod[key].expense += r.expenseTotal;
        byPeriod[key].reports += 1;
      });
    const periods = Object.values(byPeriod).sort((a, b) => a.key.localeCompare(b.key));
    const income = periods.reduce((s, p) => s + p.income, 0);
    const expense = periods.reduce((s, p) => s + p.expense, 0);

    const occupied = rows.filter((r) => r.holders.length);
    return {
      year: targetYear,
      kpis: {
        toReview: reports.filter((r) => r.status === 'SUBMITTED').length,
        needsChanges: reports.filter((r) => r.status === 'NEEDS_CHANGES').length,
        validated: reports.filter((r) => r.status === 'VALIDATED').length,
        latePositions: occupied.filter((r) => r.late.length).length,
        upToDatePositions: occupied.filter((r) => !r.late.length).length,
        occupiedPositions: occupied.length,
      },
      positions: rows,
      treasury: { income, expense, balance: income - expense, periods },
    };
  }

  static async updatePositionSettings(user, id, data, meta = {}) {
    const position = await prisma.clubPosition.findUnique({ where: { id } });
    if (!position) throw new NotFoundError('Poste introuvable');

    const update = {};
    if (data.reportFrequency !== undefined) update.reportFrequency = data.reportFrequency;
    if (data.reportDueDays !== undefined) update.reportDueDays = data.reportDueDays;
    if (data.seesAllReports !== undefined) update.seesAllReports = data.seesAllReports;
    if (data.reportTemplate !== undefined) {
      if (data.reportTemplate && !REPORT_TEMPLATES[data.reportTemplate]) throw new BadRequestError('Modèle de rapport inconnu');
      update.reportTemplate = data.reportTemplate || null;
    }
    if (data.reportsToId !== undefined) {
      if (data.reportsToId === id) throw new BadRequestError('Un poste ne peut pas se rendre compte à lui-même');
      if (data.reportsToId && !(await prisma.clubPosition.findUnique({ where: { id: data.reportsToId } }))) {
        throw new BadRequestError('Poste supérieur introuvable');
      }
      update.reportsToId = data.reportsToId || null;
    }

    const updated = await prisma.clubPosition.update({ where: { id }, data: update });
    await AuditService.log({
      userId: user.id, action: 'report.settings', module: 'organization', resource: 'ClubPosition',
      resourceId: id, metadata: { title: position.title, ...update }, ...meta,
    });
    return updated;
  }
}

ReportService.FREQUENCIES = FREQUENCIES;
ReportService._internal = { periodKeyFor, parsePeriod, shiftPeriod, computeDeadlines, sanitizeContent, computeTotals };

module.exports = ReportService;
