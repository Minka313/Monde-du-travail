const prisma = require('../config/database');
const { NotFoundError, BadRequestError, ForbiddenError } = require('../utils/errors');
const NotificationService = require('./notificationService');
const EmailService = require('./emailService');
const AuditService = require('./auditService');
const logger = require('../utils/logger');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');

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
    invited: Boolean(a.invitationId),
  };
}

class MentorApplicationService {
  static async submit(data, user = null, invitationToken = null) {
    let invitation = null;
    if (invitationToken) {
      invitation = await MentorApplicationService.openInvitation(invitationToken);
    }
    const email = normalizeEmail(user?.email || data.email);
    const pending = await prisma.mentorApplication.findFirst({ where: { email, status: 'PENDING' } });
    if (pending && !invitation) return { status: 'PENDING', alreadyPending: true };
    if (user && (user.adminRoles || []).includes(MENTOR_ROLE)) throw new BadRequestError('Tu es déjà mentor du club.');
    const fields = {
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
      invitationId: invitation?.id || null,
    };
    // Une candidature déjà en attente de la même personne est complétée, pas dupliquée
    const application = pending
      ? await prisma.mentorApplication.update({ where: { id: pending.id }, data: fields })
      : await prisma.mentorApplication.create({ data: fields });

    if (invitation) {
      await prisma.mentorInvitation.update({ where: { id: invitation.id }, data: { usedAt: new Date() } });
      // Invité par la Présidence : accepté d'office, la Présidence en est avertie
      const result = await MentorApplicationService.acceptInvited(application, invitation);
      return { status: 'ACCEPTED', alreadyPending: false, accepted: true, hasAccount: result.hasAccount, accountCreated: result.accountCreated };
    }

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

  /**
   * Compte du mentor accepté : celui qui porte l'adresse e-mail de la candidature ; s'il n'existe pas, il est créé
   * tout de suite (adhérent, adresse considérée confirmée) et la personne choisit son mot de passe via un lien envoyé
   * par e-mail. L'acceptation et la création du compte ne sont donc plus deux étapes séparées.
   * Un compte désactivé par la Présidence n'est jamais réactivé.
   */
  static async ensureAccount(application) {
    const linked = application.userId
      ? await prisma.user.findUnique({ where: { id: application.userId }, select: { id: true, isActive: true, isVerified: true, role: true } })
      : null;
    const existing = linked || await prisma.user.findFirst({
      where: { email: { equals: application.email, mode: 'insensitive' } },
      select: { id: true, isActive: true, isVerified: true, role: true },
    });
    if (existing) {
      // Compte gratuit créé par la personne mais jamais confirmé : l'acceptation le rend utilisable
      if (!existing.isActive && !existing.isVerified && existing.role === 'VISITOR') {
        await prisma.user.update({ where: { id: existing.id }, data: { isActive: true, isVerified: true } });
        return { id: existing.id, created: false };
      }
      return existing.isActive ? { id: existing.id, created: false } : null;
    }
    const parts = application.fullName.trim().split(/\s+/);
    const firstName = parts[0].length >= 2 ? parts[0] : `${parts[0]}.`;
    const lastName = parts.slice(1).join(' ') || firstName;
    const user = await prisma.user.create({
      data: {
        email: application.email,
        // Mot de passe aléatoire jamais communiqué : la personne en choisit un avec le lien reçu par e-mail
        password: await bcrypt.hash(crypto.randomBytes(32).toString('hex'), 12),
        firstName, lastName, role: 'MEMBER', isActive: true, isVerified: true,
      },
      select: { id: true, email: true, password: true },
    });
    return { id: user.id, created: true, setupUrl: require('./authService').passwordSetupUrl(user) };
  }

  /**
   * Accepte d'office la réponse d'un professionnel invité (rôle mentor, compte créé si besoin). La Présidence est
   * prévenue (cloche + alerte), le professionnel par e-mail.
   */
  static async acceptInvited(application, invitation) {
    const account = await MentorApplicationService.ensureAccount(application);
    if (account) {
      await grantMentorRole(account.id, invitation.createdById);
      await seedProfile(account.id, application);
    }
    await prisma.mentorApplication.update({
      where: { id: application.id },
      data: {
        status: 'ACCEPTED', handledById: invitation.createdById, handledAt: new Date(),
        response: 'Accepté d\'office : invité par la Présidence',
        ...(account ? { userId: account.id, roleGrantedAt: new Date() } : {}),
      },
    });
    const presidents = await prisma.user.findMany({ where: { role: 'ULTRA_ADMIN', isActive: true }, select: { id: true } });
    const detail = !account ? ' Son compte n\'a pas pu être ouvert (compte désactivé) : voir « Mentors ».'
      : account.created ? ' Son compte a été créé et son Espace mentor ouvert : il reçoit un e-mail pour choisir son mot de passe.'
        : ' Son Espace mentor est ouvert.';
    await Promise.allSettled(presidents.map((p) => NotificationService.createNotification({
      userId: p.id,
      type: 'SYSTEM',
      title: `🌟 ${application.fullName} rejoint les mentors`,
      message: `${application.fullName} (${application.profession}) a répondu à ton invitation et est accepté d'office.${detail}`.slice(0, 250),
      url: '/mentor.html?tab=overview',
      dedupeKey: `MENTOR_INVITED_ACCEPTED:${application.id}:${p.id}`,
    })));
    await EmailService.notifyMentorApplicationDecision({
      to: application.email, fullName: application.fullName, accepted: true, response: null, hasAccount: Boolean(account), setupUrl: account?.setupUrl || null,
    }).catch((err) => logger.warn('E-mail d\'acceptation non envoyé', { error: err.message }));
    if (account && !account.created) {
      await NotificationService.createNotification({
        userId: account.id, type: 'SYSTEM', title: '🌟 Bienvenue parmi les mentors',
        message: 'Tu es accepté comme mentor : ton Espace mentor est ouvert.', url: '/mentor.html',
      }).catch(() => {});
    }
    await AuditService.log({
      userId: invitation.createdById, action: 'mentoring.application.accept_invited', module: 'mentoring',
      resource: 'MentorApplication', resourceId: application.id, metadata: { email: application.email, roleGranted: Boolean(account), accountCreated: Boolean(account?.created) },
    }).catch(() => {});
    return { hasAccount: Boolean(account), accountCreated: Boolean(account?.created) };
  }

  // ===== Invitations : la Présidence envoie un lien personnel à un professionnel =====

  static invitationLink(token) {
    const base = (process.env.FRONTEND_URL || 'https://lemondedutravail.org').replace(/\/$/, '');
    return `${base}/devenir-mentor.html?invitation=${encodeURIComponent(token)}`;
  }

  static invitationDto(i) {
    const now = new Date();
    const status = i.revokedAt ? 'REVOKED' : i.usedAt ? 'USED' : i.expiresAt < now ? 'EXPIRED' : 'PENDING';
    return {
      id: i.id, status, inviteeName: i.inviteeName, inviteeEmail: i.inviteeEmail, message: i.message,
      link: MentorApplicationService.invitationLink(i.token), expiresAt: i.expiresAt, createdAt: i.createdAt,
      emailedAt: i.emailedAt, usedAt: i.usedAt, createdBy: fullName(i.createdBy),
    };
  }

  /** Invitation encore utilisable (ni retirée, ni déjà utilisée, ni expirée) — sinon erreur explicite */
  static async openInvitation(token) {
    const invitation = typeof token === 'string' && token.length >= 20 && token.length <= 80
      ? await prisma.mentorInvitation.findUnique({ where: { token }, include: { createdBy: { select: { firstName: true, lastName: true } } } })
      : null;
    if (!invitation || invitation.revokedAt) throw new NotFoundError('Ce lien d\'invitation n\'est plus valable. Demande-en un nouveau à la Présidence.');
    if (invitation.usedAt) throw new BadRequestError('Cette invitation a déjà été utilisée : la Présidence a bien reçu ta réponse.');
    if (invitation.expiresAt < new Date()) throw new BadRequestError('Cette invitation a expiré. Demande-en une nouvelle à la Présidence.');
    return invitation;
  }

  /** Ce que la page « Devenir mentor » affiche et préremplit à l'ouverture du lien */
  static async publicInvitation(token) {
    const invitation = await MentorApplicationService.openInvitation(token);
    return {
      inviteeName: invitation.inviteeName, inviteeEmail: invitation.inviteeEmail, message: invitation.message,
      invitedBy: fullName(invitation.createdBy), expiresAt: invitation.expiresAt,
    };
  }

  static async listInvitations(user) {
    requirePresident(user);
    const rows = await prisma.mentorInvitation.findMany({
      include: { createdBy: { select: { firstName: true, lastName: true } } },
      orderBy: { createdAt: 'desc' }, take: 200,
    });
    return rows.map((i) => MentorApplicationService.invitationDto(i));
  }

  static async createInvitation(user, { inviteeName, inviteeEmail, message, sendEmail }, meta = {}) {
    requirePresident(user);
    const email = inviteeEmail ? normalizeEmail(inviteeEmail) : null;
    if (sendEmail && !email) throw new BadRequestError('Indique une adresse e-mail pour envoyer l\'invitation');
    const created = await prisma.mentorInvitation.create({
      data: {
        token: crypto.randomBytes(24).toString('base64url'),
        createdById: user.id,
        inviteeName: inviteeName?.trim() || null,
        inviteeEmail: email,
        message: message?.trim() || null,
        expiresAt: new Date(Date.now() + 30 * 86400000),
      },
      include: { createdBy: { select: { firstName: true, lastName: true } } },
    });
    await AuditService.log({
      userId: user.id, action: 'mentoring.invitation.create', module: 'mentoring', resource: 'MentorInvitation', resourceId: created.id,
      metadata: { hasEmail: Boolean(email) }, ...meta,
    });
    let emailed = false;
    if (sendEmail) emailed = (await MentorApplicationService.emailInvitation(created)).success;
    const fresh = emailed ? await prisma.mentorInvitation.findUnique({ where: { id: created.id }, include: { createdBy: { select: { firstName: true, lastName: true } } } }) : created;
    return { ...MentorApplicationService.invitationDto(fresh), emailSent: emailed };
  }

  static async emailInvitation(invitation) {
    if (!invitation.inviteeEmail) return { success: false };
    const result = await EmailService.sendMentorInvitation({
      to: invitation.inviteeEmail, name: invitation.inviteeName, message: invitation.message,
      invitedBy: fullName(invitation.createdBy) || 'la Présidence', link: MentorApplicationService.invitationLink(invitation.token), expiresAt: invitation.expiresAt,
    }).catch((err) => { logger.warn('E-mail d\'invitation non envoyé', { error: err.message }); return { success: false }; });
    if (result?.success) await prisma.mentorInvitation.update({ where: { id: invitation.id }, data: { emailedAt: new Date() } });
    return { success: Boolean(result?.success) };
  }

  static async resendInvitation(user, id) {
    requirePresident(user);
    const invitation = await prisma.mentorInvitation.findUnique({ where: { id }, include: { createdBy: { select: { firstName: true, lastName: true } } } });
    if (!invitation) throw new NotFoundError('Invitation introuvable');
    if (!invitation.inviteeEmail) throw new BadRequestError('Cette invitation n\'a pas d\'adresse e-mail');
    if (invitation.revokedAt || invitation.usedAt || invitation.expiresAt < new Date()) throw new BadRequestError('Cette invitation n\'est plus active');
    const { success } = await MentorApplicationService.emailInvitation(invitation);
    if (!success) throw new BadRequestError('L\'e-mail n\'a pas pu être envoyé : copie le lien et envoie-le toi-même');
    return { sent: true };
  }

  static async revokeInvitation(user, id, meta = {}) {
    requirePresident(user);
    const invitation = await prisma.mentorInvitation.findUnique({ where: { id } });
    if (!invitation) throw new NotFoundError('Invitation introuvable');
    if (invitation.usedAt) throw new BadRequestError('Cette invitation a déjà été utilisée');
    await prisma.mentorInvitation.update({ where: { id }, data: { revokedAt: invitation.revokedAt || new Date() } });
    await AuditService.log({ userId: user.id, action: 'mentoring.invitation.revoke', module: 'mentoring', resource: 'MentorInvitation', resourceId: id, ...meta });
    return { id };
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
      account = await MentorApplicationService.ensureAccount(application);
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
      to: application.email, fullName: application.fullName, accepted: decision === 'ACCEPTED', response: note, hasAccount: Boolean(account), setupUrl: account?.setupUrl || null,
    }).catch((err) => logger.warn('E-mail de décision de candidature non envoyé', { error: err.message }));
    if (account && !account.created) {
      await NotificationService.createNotification({
        userId: account.id, type: 'SYSTEM', title: '🌟 Bienvenue parmi les mentors',
        message: 'Ta candidature est acceptée : ton Espace mentor est ouvert.', url: '/mentor.html',
      }).catch(() => {});
    }
    return { ...dto(updated), accountCreated: Boolean(account?.created) };
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
