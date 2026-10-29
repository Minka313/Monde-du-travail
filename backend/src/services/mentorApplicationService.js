const prisma = require('../config/database');
const { NotFoundError, BadRequestError, ForbiddenError } = require('../utils/errors');
const NotificationService = require('./notificationService');
const EmailService = require('./emailService');
const AuditService = require('./auditService');
const logger = require('../utils/logger');

// Candidatures « Devenir mentor » : déposées depuis le site (avec ou sans compte),
// examinées par la Présidence. Acceptée : le rôle MENTOR_EXPERT est attribué au compte qui porte
// cet e-mail, tout de suite s'il existe, sinon à sa première connexion.
const MENTOR_ROLE = 'MENTOR_EXPERT';
const fullName = (u) => (u ? `${u.firstName} ${u.lastName}`.trim() : null);
const isPresident = (user) => user?.role === 'ULTRA_ADMIN';
const normalizeEmail = (e) => String(e || '').trim().toLowerCase();

function requirePresident(user) {
  if (!isPresident(user)) throw new ForbiddenError('Action réservée à la Présidence');
}

// Profil de mentor pré-rempli avec la candidature (le mentor le complète ensuite)
async function seedProfile(userId, application) {
  if (!application) return;
  await prisma.mentorProfile.upsert({
    where: { userId },
    update: {},
    create: {
      userId,
      headline: application.profession || null,
      organization: application.organization || null,
      domains: application.domains || null,
      experience: application.experience || null,
      linkedinUrl: application.linkedinUrl || null,
    },
  });
}

async function grantMentorRole(userId, grantedById = null) {
  const role = await prisma.adminRole.upsert({
    where: { name: MENTOR_ROLE },
    update: {},
    create: { name: MENTOR_ROLE, description: 'Mentor & Expert', isSystem: true, requiresApproval: false },
  });
  await prisma.userAdminRole.upsert({
    where: { userId_adminRoleId: { userId, adminRoleId: role.id } },
    update: { status: 'APPROVED', isActive: true, reviewedAt: new Date(), reviewedBy: grantedById, expiresAt: null },
    create: { userId, adminRoleId: role.id, status: 'APPROVED', isActive: true, assignedBy: grantedById, reviewedBy: grantedById, reviewedAt: new Date() },
  });
  // Un mentor fait partie du club : un compte gratuit devient adhérent
  await prisma.user.updateMany({ where: { id: userId, role: 'VISITOR' }, data: { role: 'MEMBER' } });
}

function dto(a) {
  return {
    id: a.id, status: a.status, fullName: a.fullName, email: a.email, phone: a.phone, profession: a.profession,
    organization: a.organization, domains: a.domains, experience: a.experience, motivation: a.motivation,
    availability: a.availability, linkedinUrl: a.linkedinUrl, response: a.response, createdAt: a.createdAt,
    handledAt: a.handledAt, handledBy: fullName(a.handledBy), hasAccount: Boolean(a.userId), roleGranted: Boolean(a.roleGrantedAt),
  };
}

class MentorApplicationService {
  static async submit(data, user = null) {
    const email = normalizeEmail(user?.email || data.email);
    const pending = await prisma.mentorApplication.findFirst({ where: { email, status: 'PENDING' } });
    if (pending) return { status: 'PENDING', alreadyPending: true };
    if (user && (user.adminRoles || []).includes(MENTOR_ROLE)) throw new BadRequestError('Tu es déjà mentor du club.');
    const application = await prisma.mentorApplication.create({
      data: {
        userId: user?.id || null,
        fullName: user ? fullName(user) : data.fullName.trim(),
        email,
        phone: data.phone?.trim() || null,
        profession: data.profession.trim(),
        organization: data.organization?.trim() || null,
        domains: data.domains.trim(),
        experience: data.experience?.trim() || null,
        motivation: data.motivation.trim(),
        availability: data.availability?.trim() || null,
        linkedinUrl: data.linkedinUrl?.trim() || null,
      },
    });
    const presidents = await prisma.user.findMany({ where: { role: 'ULTRA_ADMIN', isActive: true }, select: { id: true } });
    await Promise.allSettled(presidents.map((p) => NotificationService.createNotification({
      userId: p.id,
      type: 'SYSTEM',
      title: '🌟 Candidature de mentor',
      message: `${application.fullName} · ${application.profession} · ${application.domains}`.slice(0, 200),
      url: '/mentor.html?tab=applications',
      dedupeKey: `MENTOR_APPLICATION:${application.id}:${p.id}`,
    })));
    return { status: 'PENDING', alreadyPending: false };
  }

  static async list(user) {
    requirePresident(user);
    const rows = await prisma.mentorApplication.findMany({
      include: { handledBy: { select: { firstName: true, lastName: true } } },
      orderBy: { createdAt: 'desc' },
      take: 200,
    });
    return rows.sort((a, b) => (a.status === 'PENDING' ? 0 : 1) - (b.status === 'PENDING' ? 0 : 1)).map(dto);
  }

  static async decide(user, id, { decision, response }, meta = {}) {
    requirePresident(user);
    const application = await prisma.mentorApplication.findUnique({ where: { id } });
    if (!application) throw new NotFoundError('Candidature introuvable');
    if (application.status !== 'PENDING') throw new BadRequestError('Cette candidature a déjà été traitée');
    const note = String(response || '').trim() || null;
    if (decision === 'DECLINED' && !note) throw new BadRequestError('Explique ta réponse au candidat');

    let account = null;
    if (decision === 'ACCEPTED') {
      account = application.userId
        ? await prisma.user.findUnique({ where: { id: application.userId }, select: { id: true } })
        : await prisma.user.findFirst({ where: { email: { equals: application.email, mode: 'insensitive' }, isActive: true }, select: { id: true } });
      if (account) {
        await grantMentorRole(account.id, user.id);
        await seedProfile(account.id, application);
      }
    }
    const updated = await prisma.mentorApplication.update({
      where: { id },
      data: {
        status: decision, response: note, handledById: user.id, handledAt: new Date(),
        ...(account ? { userId: account.id, roleGrantedAt: new Date() } : {}),
      },
      include: { handledBy: { select: { firstName: true, lastName: true } } },
    });
    await AuditService.log({
      userId: user.id, action: `mentoring.application.${decision === 'ACCEPTED' ? 'accept' : 'decline'}`, module: 'mentoring',
      resource: 'MentorApplication', resourceId: id, metadata: { email: application.email, roleGranted: Boolean(account) }, ...meta,
    });
    await EmailService.notifyMentorApplicationDecision({
      to: application.email, fullName: application.fullName, accepted: decision === 'ACCEPTED', response: note, hasAccount: Boolean(account),
    }).catch((err) => logger.warn('E-mail de décision de candidature non envoyé', { error: err.message }));
    if (account) {
      await NotificationService.createNotification({
        userId: account.id, type: 'SYSTEM', title: '🌟 Bienvenue parmi les mentors',
        message: 'Ta candidature est acceptée : ton Espace mentor est ouvert.', url: '/mentor.html',
      }).catch(() => {});
    }
    return dto(updated);
  }

  // Candidature acceptée avant la création du compte : rôle attribué à la première connexion
  static async grantPendingRole(user) {
    const pending = await prisma.mentorApplication.findFirst({
      where: { status: 'ACCEPTED', roleGrantedAt: null, email: { equals: normalizeEmail(user.email), mode: 'insensitive' } },
    });
    if (!pending) return false;
    await grantMentorRole(user.id, pending.handledById);
    await seedProfile(user.id, pending);
    await prisma.mentorApplication.update({ where: { id: pending.id }, data: { userId: user.id, roleGrantedAt: new Date() } });
    return true;
  }
}

module.exports = MentorApplicationService;
module.exports.grantMentorRole = grantMentorRole;
