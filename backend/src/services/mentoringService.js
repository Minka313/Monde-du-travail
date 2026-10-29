/**
 * @file mentoringService.js
 * @description Espace Mentor : binômes de mentorat, formations animées, comptes rendus
 * soumis à la Présidence et messagerie de coordination mentor ↔ Présidence.
 *
 * Un mentor est un compte doté du rôle MENTOR_EXPERT (approuvé et actif).
 * La Présidence est l'Ultra Admin. Les comptes rendus contiennent des informations
 * sur les mentorés : seuls leur auteur et la Présidence les lisent.
 */

const prisma = require('../config/database');
const { NotFoundError, BadRequestError, ForbiddenError } = require('../utils/errors');
const { MENTOR_TEMPLATES } = require('../config/reportTemplates');
const ReportService = require('./reportService');
const FormationService = require('./formationService');
const NotificationService = require('./notificationService');
const AuditService = require('./auditService');
const logger = require('../utils/logger');

const { sanitizeContent, missingRequired } = ReportService._internal;
const MENTOR_ROLE = 'MENTOR_EXPERT';
const EDITABLE = ['DRAFT', 'NEEDS_CHANGES'];
const MENTORSHIP_STATUSES = ['ACTIVE', 'PAUSED', 'ENDED'];
const REGISTRATION_STATUSES = ['PENDING', 'CONFIRMED', 'ATTENDED', 'CANCELLED'];
const USER_SUMMARY = { id: true, firstName: true, lastName: true, email: true, avatarUrl: true };
const fullName = (u) => (u ? `${u.firstName} ${u.lastName}`.trim() : null);

const isPresident = (user) => user?.role === 'ULTRA_ADMIN';
// Le mentorat est réservé aux adhérents du club (pas aux comptes gratuits)
const isAdherent = (user) => Boolean(user) && user.role !== 'VISITOR';
const REQUEST_FORMATS = ['Peu importe', 'Présentiel', 'Visio', 'Téléphone', 'WhatsApp'];
const isMentor = (user) => (user?.adminRoles || []).includes(MENTOR_ROLE);

function requireMentorOrPresident(user) {
  if (!isMentor(user) && !isPresident(user)) throw new ForbiddenError('Espace réservé aux mentors et à la Présidence');
}

function requirePresident(user) {
  if (!isPresident(user)) throw new ForbiddenError('Action réservée à la Présidence');
}

async function presidentIds() {
  const users = await prisma.user.findMany({ where: { role: 'ULTRA_ADMIN', isActive: true }, select: { id: true } });
  return users.map((u) => u.id);
}

async function notify(userIds, payload) {
  for (const userId of new Set(userIds)) {
    try {
      await NotificationService.createNotification({ userId, type: 'SYSTEM', ...payload });
    } catch (error) {
      logger.error(`[Mentorat] Notification impossible pour ${userId} : ${error.message}`);
    }
  }
}

// Comptes dotés du rôle MENTOR_EXPERT effectif
async function mentorUserIds() {
  const roles = await prisma.userAdminRole.findMany({
    where: {
      isActive: true,
      status: 'APPROVED',
      role: { name: MENTOR_ROLE },
      OR: [{ expiresAt: null }, { expiresAt: { gt: new Date() } }],
    },
    select: { userId: true },
  });
  return [...new Set(roles.map((r) => r.userId))];
}

async function assertTrainer(user, formationId) {
  if (isPresident(user)) return;
  const link = await prisma.formationTrainer.findUnique({ where: { formationId_userId: { formationId, userId: user.id } } });
  if (!link) throw new ForbiddenError('Vous n\'animez pas cette formation');
}

// ===== Présentation des comptes rendus (format compatible avec ReportView) =====

function reportDto(report, user) {
  const isAuthor = report.authorId === user.id;
  const subject = report.kind === 'MENTORAT'
    ? `Mentorat · ${report.mentorship?.menteeName || 'mentoré'}`
    : `Formation · ${report.formation?.title || 'session'}`;
  return {
    id: report.id,
    kind: report.kind,
    templateKey: report.kind,
    title: report.title,
    status: report.status,
    content: report.content,
    attachments: report.attachments || [],
    incomeTotal: 0,
    expenseTotal: 0,
    periodLabel: null,
    submittedAt: report.submittedAt,
    reviewedAt: report.reviewedAt,
    reviewComment: report.reviewComment,
    reviewedBy: fullName(report.reviewedBy),
    createdAt: report.createdAt,
    updatedAt: report.updatedAt,
    mentorship: report.mentorship ? { id: report.mentorship.id, menteeName: report.mentorship.menteeName } : null,
    formation: report.formation ? { id: report.formation.id, title: report.formation.title, slug: report.formation.slug } : null,
    // Champs attendus par ReportView (rendu et PDF partagés avec les rapports du bureau)
    position: { id: report.kind, title: subject },
    author: { id: report.author.id, fullName: fullName(report.author), avatarUrl: report.author.avatarUrl },
    events: report.history || [],
    permissions: {
      edit: isAuthor && EDITABLE.includes(report.status),
      submit: isAuthor && EDITABLE.includes(report.status),
      delete: (isAuthor && report.status === 'DRAFT') || isPresident(user),
      review: isPresident(user) && !isAuthor && report.status === 'SUBMITTED',
    },
  };
}

const REPORT_INCLUDE = {
  author: { select: USER_SUMMARY },
  reviewedBy: { select: USER_SUMMARY },
  mentorship: { select: { id: true, menteeName: true, mentorId: true } },
  formation: { select: { id: true, title: true, slug: true } },
};

function historyEntry(user, action, comment = null) {
  return { action, actorId: user.id, actor: fullName(user), comment, createdAt: new Date().toISOString() };
}

class MentoringService {
  static isMentor(user) { return isMentor(user); }

  /** Vue d'ensemble de l'espace : rôle, binômes, formations, compteurs. */
  static async getContext(user) {
    requireMentorOrPresident(user);
    const president = isPresident(user);
    const [mentorships, trainings, unread, toReview] = await Promise.all([
      prisma.mentorship.findMany({
        where: president ? {} : { mentorId: user.id },
        include: {
          mentor: { select: USER_SUMMARY },
          mentee: { select: USER_SUMMARY },
          reports: { select: { id: true, status: true, createdAt: true }, orderBy: { createdAt: 'desc' } },
        },
        orderBy: [{ status: 'asc' }, { startDate: 'desc' }],
      }),
      prisma.formation.findMany({
        where: president ? {} : { trainers: { some: { userId: user.id } } },
        select: {
          id: true, slug: true, title: true, icon: true, status: true, startDate: true, endDate: true, location: true,
          visioStatus: true, visioScheduledAt: true,
          trainers: { select: { user: { select: USER_SUMMARY } } },
          _count: { select: { registrations: true } },
        },
        orderBy: { title: 'asc' },
      }),
      president
        ? prisma.staffMessage.count({ where: { readAt: null, authorId: { not: user.id } } })
        : prisma.staffMessage.count({ where: { threadUserId: user.id, authorId: { not: user.id }, readAt: null } }),
      president ? prisma.mentorReport.count({ where: { status: 'SUBMITTED', authorId: { not: user.id } } }) : 0,
    ]);
    const [pendingRequests, openSuggestions] = await Promise.all([
      president ? prisma.mentorRequest.count({ where: { status: 'PENDING' } }) : 0,
      president ? prisma.contentSuggestion.count({ where: { status: 'OPEN' } }) : 0,
    ]);

    return {
      isMentor: isMentor(user),
      isPresident: president,
      templates: MENTOR_TEMPLATES,
      unreadMessages: unread,
      pendingReview: toReview,
      pendingRequests,
      openSuggestions,
      mentorships: mentorships.map((m) => ({
        id: m.id,
        status: m.status,
        goals: m.goals,
        startDate: m.startDate,
        endDate: m.endDate,
        mentor: { id: m.mentor.id, fullName: fullName(m.mentor) },
        mentee: m.mentee ? { id: m.mentee.id, fullName: fullName(m.mentee), email: m.mentee.email } : null,
        menteeName: m.menteeName,
        menteeContact: m.menteeContact,
        reportsCount: m.reports.length,
        lastReportAt: m.reports[0]?.createdAt || null,
      })),
      formations: trainings.map((f) => ({
        id: f.id,
        slug: f.slug,
        title: f.title,
        icon: f.icon,
        status: f.status,
        startDate: f.startDate,
        endDate: f.endDate,
        location: f.location,
        visioStatus: f.visioStatus,
        visioScheduledAt: f.visioScheduledAt,
        registrationsCount: f._count.registrations,
        trainers: f.trainers.map((t) => ({ id: t.user.id, fullName: fullName(t.user) })),
      })),
    };
  }

  // ===== Mentors et binômes (Présidence) =====

  static async listMentors(user) {
    requirePresident(user);
    const ids = await mentorUserIds();
    const users = await prisma.user.findMany({
      where: { id: { in: ids } },
      select: {
        ...USER_SUMMARY,
        _count: { select: { mentorships: true, formationTrainings: true, mentorReports: true } },
      },
      orderBy: { firstName: 'asc' },
    });
    return users.map((u) => ({
      id: u.id,
      fullName: fullName(u),
      email: u.email,
      avatarUrl: u.avatarUrl,
      mentorshipsCount: u._count.mentorships,
      formationsCount: u._count.formationTrainings,
      reportsCount: u._count.mentorReports,
    }));
  }

  static async searchMembers(user, q) {
    requirePresident(user);
    const query = String(q || '').trim();
    if (query.length < 2) return [];
    const users = await prisma.user.findMany({
      where: {
        isActive: true,
        role: { not: 'VISITOR' },
        OR: [
          { firstName: { contains: query, mode: 'insensitive' } },
          { lastName: { contains: query, mode: 'insensitive' } },
          { email: { contains: query, mode: 'insensitive' } },
        ],
      },
      select: USER_SUMMARY,
      take: 10,
    });
    return users.map((u) => ({ id: u.id, fullName: fullName(u), email: u.email }));
  }

  static async createMentorship(user, data, meta = {}) {
    requirePresident(user);
    const mentorIds = await mentorUserIds();
    if (!mentorIds.includes(data.mentorId)) throw new BadRequestError('Ce compte n\'est pas mentor');

    let menteeName = (data.menteeName || '').trim();
    if (data.menteeId) {
      const mentee = await prisma.user.findUnique({ where: { id: data.menteeId }, select: USER_SUMMARY });
      if (!mentee) throw new NotFoundError('Mentoré introuvable');
      if (mentee.id === data.mentorId) throw new BadRequestError('Un mentor ne peut pas être son propre mentoré');
      const menteeAccount = await prisma.user.findUnique({ where: { id: mentee.id }, select: { role: true } });
      if (!isAdherent(menteeAccount)) throw new BadRequestError('Le mentorat est réservé aux adhérents : ce compte gratuit doit d\'abord adhérer au club');
      menteeName = menteeName || fullName(mentee);
    }
    if (!menteeName) throw new BadRequestError('Indiquez le mentoré');

    const mentorship = await prisma.mentorship.create({
      data: {
        mentorId: data.mentorId,
        menteeId: data.menteeId || null,
        menteeName,
        menteeContact: data.menteeContact || null,
        goals: data.goals || null,
        createdById: user.id,
      },
    });
    // Binôme formé à partir d'une demande d'accompagnement : la demande est close
    if (data.requestId) {
      await prisma.mentorRequest.updateMany({
        where: { id: data.requestId, status: 'PENDING' },
        data: { status: 'MATCHED', mentorshipId: mentorship.id, handledById: user.id, handledAt: new Date() },
      });
    }
    await AuditService.log({
      userId: user.id, action: 'mentoring.mentorship.create', module: 'mentoring', resource: 'Mentorship',
      resourceId: mentorship.id, metadata: { mentorId: data.mentorId, menteeName }, ...meta,
    });
    await notify([data.mentorId], {
      title: '🤝 Nouveau mentoré',
      message: `La Présidence vous confie l'accompagnement de ${menteeName}.`,
      url: '/mentor.html',
    });
    if (data.menteeId) {
      await notify([data.menteeId], {
        title: '🤝 Ton mentor t\'attend',
        message: 'Un mentor du club t\'a été attribué. Il va prendre contact avec toi : retrouve-le dans « Mon espace ».',
        url: '/profile.html#profileMentorshipBox',
      });
    }
    return mentorship;
  }

  static async updateMentorship(user, id, data, meta = {}) {
    const mentorship = await prisma.mentorship.findUnique({ where: { id } });
    if (!mentorship) throw new NotFoundError('Binôme introuvable');
    const president = isPresident(user);
    if (!president && mentorship.mentorId !== user.id) throw new ForbiddenError('Ce binôme ne vous est pas confié');

    const update = {};
    if (data.goals !== undefined) update.goals = data.goals || null;
    if (data.menteeContact !== undefined) update.menteeContact = data.menteeContact || null;
    if (data.status !== undefined) {
      if (!president) throw new ForbiddenError('Seule la Présidence change le statut d\'un binôme');
      if (!MENTORSHIP_STATUSES.includes(data.status)) throw new BadRequestError('Statut invalide');
      update.status = data.status;
      update.endDate = data.status === 'ENDED' ? new Date() : null;
    }
    const updated = await prisma.mentorship.update({ where: { id }, data: update });
    await AuditService.log({
      userId: user.id, action: 'mentoring.mentorship.update', module: 'mentoring', resource: 'Mentorship',
      resourceId: id, metadata: update, ...meta,
    });
    return updated;
  }

  // ===== Côté mentoré : mon mentor, ma demande d'accompagnement =====

  static async getMyMentoring(user) {
    const [mentorships, request] = await Promise.all([
      prisma.mentorship.findMany({
        where: { menteeId: user.id, status: { in: ['ACTIVE', 'PAUSED'] } },
        include: {
          mentor: { select: { id: true, firstName: true, lastName: true, avatarUrl: true } },
          // Seule la date de la prochaine séance sort des comptes rendus (confidentiels)
          reports: { where: { kind: 'MENTORAT', status: { not: 'DRAFT' } }, select: { content: true, createdAt: true }, orderBy: { createdAt: 'desc' }, take: 1 },
        },
        orderBy: { startDate: 'desc' },
      }),
      prisma.mentorRequest.findFirst({ where: { userId: user.id }, orderBy: { createdAt: 'desc' } }),
    ]);
    const today = new Date().toISOString().slice(0, 10);
    return {
      canRequest: isAdherent(user) && !mentorships.length && request?.status !== 'PENDING',
      isAdherent: isAdherent(user),
      formats: REQUEST_FORMATS,
      mentorships: mentorships.map((m) => {
        const next = m.reports[0]?.content?.prochaineSeance;
        return {
          id: m.id,
          status: m.status,
          goals: m.goals,
          startDate: m.startDate,
          mentor: { id: m.mentor.id, fullName: fullName(m.mentor), avatarUrl: m.mentor.avatarUrl },
          nextSession: typeof next === 'string' && next >= today ? next : null,
          lastSessionAt: m.reports[0]?.createdAt || null,
        };
      }),
      request: request ? {
        id: request.id, status: request.status, goals: request.goals, domain: request.domain, format: request.format,
        availability: request.availability, response: request.response, createdAt: request.createdAt,
      } : null,
    };
  }

  static async requestMentor(user, data) {
    if (!isAdherent(user)) throw new ForbiddenError('Le mentorat est réservé aux adhérents du club : demande d\'abord ton adhésion depuis « Mon espace ».');
    const [pending, active] = await Promise.all([
      prisma.mentorRequest.findFirst({ where: { userId: user.id, status: 'PENDING' } }),
      prisma.mentorship.findFirst({ where: { menteeId: user.id, status: { in: ['ACTIVE', 'PAUSED'] } } }),
    ]);
    if (active) throw new BadRequestError('Tu as déjà un mentor du club.');
    if (pending) throw new BadRequestError('Ta demande est déjà en cours d\'examen par la Présidence.');
    const goals = String(data.goals || '').trim();
    if (goals.length < 10) throw new BadRequestError('Explique en quelques mots ce que tu attends de l\'accompagnement (10 caractères minimum).');
    const request = await prisma.mentorRequest.create({
      data: {
        userId: user.id,
        goals,
        domain: data.domain?.trim() || null,
        format: REQUEST_FORMATS.includes(data.format) ? data.format : null,
        availability: data.availability?.trim() || null,
      },
    });
    await notify(await presidentIds(), {
      title: '🙋 Nouvelle demande de mentor',
      message: `${fullName(user)} souhaite être accompagné(e)${request.domain ? ` (${request.domain})` : ''}.`,
      url: '/mentor.html?tab=requests',
    });
    return request;
  }

  static async cancelMentorRequest(user, id) {
    const request = await prisma.mentorRequest.findUnique({ where: { id } });
    if (!request || request.userId !== user.id) throw new NotFoundError('Demande introuvable');
    if (request.status !== 'PENDING') throw new BadRequestError('Cette demande a déjà été traitée');
    return prisma.mentorRequest.update({ where: { id }, data: { status: 'CANCELLED' } });
  }

  static async listMentorRequests(user) {
    requirePresident(user);
    const requests = await prisma.mentorRequest.findMany({
      where: { status: { in: ['PENDING', 'MATCHED', 'DECLINED'] } },
      include: { user: { select: USER_SUMMARY }, handledBy: { select: USER_SUMMARY } },
      orderBy: [{ status: 'desc' }, { createdAt: 'asc' }],
      take: 200,
    });
    return requests
      .sort((a, b) => (a.status === 'PENDING' ? 0 : 1) - (b.status === 'PENDING' ? 0 : 1))
      .map((r) => ({
        id: r.id, status: r.status, goals: r.goals, domain: r.domain, format: r.format, availability: r.availability,
        response: r.response, createdAt: r.createdAt, handledAt: r.handledAt, handledBy: fullName(r.handledBy),
        user: { id: r.user.id, fullName: fullName(r.user), email: r.user.email, avatarUrl: r.user.avatarUrl },
      }));
  }

  static async declineMentorRequest(user, id, response, meta = {}) {
    requirePresident(user);
    const request = await prisma.mentorRequest.findUnique({ where: { id } });
    if (!request) throw new NotFoundError('Demande introuvable');
    if (request.status !== 'PENDING') throw new BadRequestError('Cette demande a déjà été traitée');
    const note = String(response || '').trim();
    if (note.length < 5) throw new BadRequestError('Explique ta réponse à l\'adhérent');
    const updated = await prisma.mentorRequest.update({
      where: { id }, data: { status: 'DECLINED', response: note, handledById: user.id, handledAt: new Date() },
    });
    await AuditService.log({
      userId: user.id, action: 'mentoring.request.decline', module: 'mentoring', resource: 'MentorRequest', resourceId: id, ...meta,
    });
    await notify([request.userId], {
      title: 'Ta demande de mentor',
      message: note.slice(0, 180),
      url: '/profile.html#profileMentorshipBox',
    });
    return updated;
  }

  // ===== Formations animées =====

  static async setTrainer(user, formationId, trainerId, assign, meta = {}) {
    requirePresident(user);
    const formation = await prisma.formation.findUnique({ where: { id: formationId }, select: { id: true, title: true, slug: true } });
    if (!formation) throw new NotFoundError('Formation introuvable');
    if (assign) {
      if (!(await mentorUserIds()).includes(trainerId)) throw new BadRequestError('Ce compte n\'est pas mentor');
      await prisma.formationTrainer.upsert({
        where: { formationId_userId: { formationId, userId: trainerId } },
        update: {},
        create: { formationId, userId: trainerId },
      });
      await notify([trainerId], {
        title: '🎓 Formation à animer',
        message: `La Présidence vous confie l'animation de « ${formation.title} ».`,
        url: '/mentor.html',
      });
    } else {
      await prisma.formationTrainer.deleteMany({ where: { formationId, userId: trainerId } });
    }
    await AuditService.log({
      userId: user.id, action: assign ? 'mentoring.trainer.assign' : 'mentoring.trainer.remove', module: 'mentoring',
      resource: 'Formation', resourceId: formationId, metadata: { trainerId, title: formation.title }, ...meta,
    });
  }

  static async getRegistrations(user, formationId) {
    await assertTrainer(user, formationId);
    return FormationService.getRegistrations(formationId, { pageSize: 500 });
  }

  static async updateRegistrationStatus(user, registrationId, status) {
    if (!REGISTRATION_STATUSES.includes(status)) throw new BadRequestError('Statut invalide');
    const registration = await prisma.formationRegistration.findUnique({ where: { id: registrationId }, select: { formationId: true } });
    if (!registration) throw new NotFoundError('Inscription introuvable');
    await assertTrainer(user, registration.formationId);
    return FormationService.updateRegistrationStatus(registrationId, status);
  }

  static async updateSchedule(user, formationId, data, meta = {}) {
    await assertTrainer(user, formationId);
    const update = {};
    ['startDate', 'endDate'].forEach((key) => {
      if (data[key] === undefined) return;
      const date = data[key] ? new Date(data[key]) : null;
      if (date && Number.isNaN(date.getTime())) throw new BadRequestError('Date invalide');
      update[key] = date;
    });
    if (data.location !== undefined) update.location = data.location || null;
    if (update.startDate && update.endDate && update.endDate < update.startDate) {
      throw new BadRequestError('La date de fin précède la date de début');
    }
    const formation = await prisma.formation.update({ where: { id: formationId }, data: update });
    await AuditService.log({
      userId: user.id, action: 'mentoring.formation.schedule', module: 'mentoring', resource: 'Formation',
      resourceId: formationId, metadata: update, ...meta,
    });
    return formation;
  }

  static async startVisio(user, formationId, scheduledAt) {
    await assertTrainer(user, formationId);
    return FormationService.startVisioSession(formationId, { user, scheduledAt });
  }

  static async stopVisio(user, formationId) {
    await assertTrainer(user, formationId);
    return FormationService.stopVisioSession(formationId);
  }

  // ===== Comptes rendus =====

  static async listReports(user, { scope, status } = {}) {
    requireMentorOrPresident(user);
    const where = { AND: [] };
    // Confidentialité : l'auteur et la Présidence seulement ; les brouillons restent à leur auteur
    if (isPresident(user)) where.AND.push({ OR: [{ authorId: user.id }, { status: { not: 'DRAFT' } }] });
    else where.AND.push({ authorId: user.id });
    if (scope === 'mine') where.AND.push({ authorId: user.id });
    if (scope === 'review') where.AND.push({ status: 'SUBMITTED', authorId: { not: user.id } });
    if (status) where.AND.push({ status });
    const reports = await prisma.mentorReport.findMany({ where, include: REPORT_INCLUDE, orderBy: { updatedAt: 'desc' }, take: 200 });
    return reports.map((r) => reportDto(r, user));
  }

  static async getReport(user, id) {
    requireMentorOrPresident(user);
    const report = await prisma.mentorReport.findUnique({ where: { id }, include: REPORT_INCLUDE });
    const readable = report && (report.authorId === user.id || (isPresident(user) && report.status !== 'DRAFT'));
    if (!readable) throw new NotFoundError('Compte rendu introuvable');
    return reportDto(report, user);
  }

  static async createReport(user, data) {
    if (!isMentor(user)) throw new ForbiddenError('Seuls les mentors rédigent des comptes rendus');
    const template = MENTOR_TEMPLATES[data.kind];
    if (!template) throw new BadRequestError('Type de compte rendu inconnu');

    let subject;
    if (data.kind === 'MENTORAT') {
      const mentorship = await prisma.mentorship.findUnique({ where: { id: data.mentorshipId || '' } });
      if (!mentorship || mentorship.mentorId !== user.id) throw new ForbiddenError('Ce binôme ne vous est pas confié');
      subject = mentorship.menteeName;
    } else {
      if (!data.formationId) throw new BadRequestError('Indiquez la formation');
      await assertTrainer(user, data.formationId);
      const formation = await prisma.formation.findUnique({ where: { id: data.formationId }, select: { title: true } });
      subject = formation.title;
    }

    const report = await prisma.mentorReport.create({
      data: {
        authorId: user.id,
        kind: data.kind,
        mentorshipId: data.kind === 'MENTORAT' ? data.mentorshipId : null,
        formationId: data.kind === 'SESSION_FORMATION' ? data.formationId : null,
        title: (data.title || '').trim() || `${template.label} — ${subject}`,
        content: sanitizeContent(template, data.content),
        attachments: data.attachments || [],
      },
      include: REPORT_INCLUDE,
    });
    return reportDto(report, user);
  }

  static async updateReport(user, id, data) {
    const existing = await prisma.mentorReport.findUnique({ where: { id } });
    if (!existing || existing.authorId !== user.id) throw new NotFoundError('Compte rendu introuvable');
    if (!EDITABLE.includes(existing.status)) throw new BadRequestError('Un compte rendu soumis ou validé ne peut plus être modifié');
    const update = {};
    if (data.title !== undefined) update.title = data.title.trim() || existing.title;
    if (data.content !== undefined) update.content = sanitizeContent(MENTOR_TEMPLATES[existing.kind], data.content);
    if (data.attachments !== undefined) update.attachments = data.attachments;
    const report = await prisma.mentorReport.update({ where: { id }, data: update, include: REPORT_INCLUDE });
    return reportDto(report, user);
  }

  static async deleteReport(user, id, meta = {}) {
    const report = await prisma.mentorReport.findUnique({ where: { id } });
    if (!report) throw new NotFoundError('Compte rendu introuvable');
    const authorDraft = report.authorId === user.id && report.status === 'DRAFT';
    if (!authorDraft && !(isPresident(user) && report.status !== 'DRAFT')) {
      throw new ForbiddenError('Seuls les brouillons peuvent être supprimés par leur auteur');
    }
    await prisma.mentorReport.delete({ where: { id } });
    await AuditService.log({
      userId: user.id, action: 'mentoring.report.delete', module: 'mentoring', resource: 'MentorReport',
      resourceId: id, metadata: { title: report.title }, ...meta,
    });
  }

  static async submitReport(user, id, meta = {}) {
    const existing = await prisma.mentorReport.findUnique({ where: { id } });
    if (!existing || existing.authorId !== user.id) throw new NotFoundError('Compte rendu introuvable');
    if (!EDITABLE.includes(existing.status)) throw new BadRequestError('Ce compte rendu a déjà été soumis');
    const missing = missingRequired(MENTOR_TEMPLATES[existing.kind], existing.content || {});
    if (missing.length) throw new BadRequestError(`Sections obligatoires à compléter : ${missing.join(', ')}`);

    const report = await prisma.mentorReport.update({
      where: { id },
      data: {
        status: 'SUBMITTED',
        submittedAt: new Date(),
        history: [...(existing.history || []), historyEntry(user, 'SUBMITTED')],
      },
      include: REPORT_INCLUDE,
    });
    await AuditService.log({
      userId: user.id, action: 'mentoring.report.submit', module: 'mentoring', resource: 'MentorReport',
      resourceId: id, metadata: { title: report.title }, ...meta,
    });
    await notify((await presidentIds()).filter((pid) => pid !== user.id), {
      title: `📝 Compte rendu de ${fullName(report.author)}`,
      message: `« ${report.title} » attend votre validation.`,
      url: '/mentor.html?report=' + report.id,
    });
    return reportDto(report, user);
  }

  static async reviewReport(user, id, { decision, comment }, meta = {}) {
    requirePresident(user);
    const existing = await prisma.mentorReport.findUnique({ where: { id } });
    if (!existing) throw new NotFoundError('Compte rendu introuvable');
    if (existing.status !== 'SUBMITTED') throw new BadRequestError('Seul un compte rendu soumis peut être examiné');
    const note = (comment || '').trim();
    if (decision === 'NEEDS_CHANGES' && !note) throw new BadRequestError('Expliquez les corrections attendues');

    const report = await prisma.mentorReport.update({
      where: { id },
      data: {
        status: decision,
        reviewedAt: new Date(),
        reviewedById: user.id,
        reviewComment: note || null,
        history: [...(existing.history || []), historyEntry(user, decision, note || null)],
      },
      include: REPORT_INCLUDE,
    });
    await AuditService.log({
      userId: user.id, action: `mentoring.report.${decision === 'VALIDATED' ? 'validate' : 'request_changes'}`,
      module: 'mentoring', resource: 'MentorReport', resourceId: id, metadata: { title: report.title }, ...meta,
    });
    await notify([report.authorId], decision === 'VALIDATED'
      ? { title: '✅ Compte rendu validé', message: `« ${report.title} » a été validé par la Présidence.`, url: `/mentor.html?report=${id}` }
      : { title: '✏️ Corrections demandées', message: `« ${report.title} » : ${note.slice(0, 180)}`, url: `/mentor.html?report=${id}` });
    return reportDto(report, user);
  }

  // ===== Messagerie mentor ↔ Présidence =====

  /** Fils de discussion (Présidence) : un par mentor, avec le dernier message et les non-lus. */
  static async listThreads(user) {
    requirePresident(user);
    const ids = await mentorUserIds();
    const [users, last, unread] = await Promise.all([
      prisma.user.findMany({ where: { id: { in: ids } }, select: USER_SUMMARY }),
      prisma.staffMessage.findMany({ where: { threadUserId: { in: ids } }, orderBy: { createdAt: 'desc' }, distinct: ['threadUserId'] }),
      prisma.staffMessage.groupBy({ by: ['threadUserId'], where: { threadUserId: { in: ids }, readAt: null, authorId: { not: user.id } }, _count: true }),
    ]);
    return users.map((u) => {
      const lastMessage = last.find((m) => m.threadUserId === u.id);
      return {
        threadUserId: u.id,
        fullName: fullName(u),
        lastMessage: lastMessage ? { body: lastMessage.body.slice(0, 140), createdAt: lastMessage.createdAt } : null,
        unread: unread.find((g) => g.threadUserId === u.id)?._count || 0,
      };
    }).sort((a, b) => new Date(b.lastMessage?.createdAt || 0) - new Date(a.lastMessage?.createdAt || 0));
  }

  static resolveThread(user, threadUserId) {
    if (isPresident(user)) {
      if (!threadUserId) throw new BadRequestError('Indiquez le fil de discussion');
      return threadUserId;
    }
    if (!isMentor(user)) throw new ForbiddenError('Messagerie réservée aux mentors et à la Présidence');
    return user.id;
  }

  static async getMessages(user, threadUserId) {
    const thread = MentoringService.resolveThread(user, threadUserId);
    const messages = await prisma.staffMessage.findMany({
      where: { threadUserId: thread },
      include: { author: { select: USER_SUMMARY } },
      orderBy: { createdAt: 'asc' },
      take: 300,
    });
    // Lecture : les messages reçus passent à « lu »
    await prisma.staffMessage.updateMany({ where: { threadUserId: thread, authorId: { not: user.id }, readAt: null }, data: { readAt: new Date() } });
    return messages.map((m) => ({
      id: m.id,
      body: m.body,
      createdAt: m.createdAt,
      readAt: m.readAt,
      mine: m.authorId === user.id,
      author: { id: m.author.id, fullName: fullName(m.author), avatarUrl: m.author.avatarUrl },
    }));
  }

  static async sendMessage(user, { threadUserId, body }) {
    const thread = MentoringService.resolveThread(user, threadUserId);
    if (isPresident(user) && !(await mentorUserIds()).includes(thread)) throw new BadRequestError('Ce compte n\'est pas mentor');
    const text = String(body || '').trim();
    if (!text) throw new BadRequestError('Message vide');
    const message = await prisma.staffMessage.create({ data: { threadUserId: thread, authorId: user.id, body: text.slice(0, 4000) } });

    const recipients = isPresident(user) ? [thread] : (await presidentIds()).filter((id) => id !== user.id);
    await notify(recipients, {
      title: `💬 Message de ${fullName(user)}`,
      message: text.slice(0, 160),
      url: isPresident(user) ? '/mentor.html#messages' : `/mentor.html?thread=${thread}#messages`,
    });
    return { id: message.id, body: message.body, createdAt: message.createdAt, mine: true };
  }
}

MentoringService.MENTOR_ROLE = MENTOR_ROLE;
module.exports = MentoringService;
