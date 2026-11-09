/**
 * Réunions en visio du club : le bureau (et la Présidence) planifie une réunion avec le bureau, les mentors,
 * tous les adhérents ou des personnes choisies. Seuls les invités entrent dans la salle ; l'organisateur
 * (ou la Présidence) l'ouvre, la ferme et y est modérateur.
 */
const crypto = require('crypto');
const prisma = require('../config/database');
const AuditService = require('./auditService');
const NotificationService = require('./notificationService');
const JaasService = require('./jaasService');
const logger = require('../utils/logger');
const { BadRequestError, ForbiddenError, NotFoundError } = require('../utils/errors');

const AUDIENCES = ['BUREAU', 'MENTORS', 'MEMBERS'];
const MENTOR_ROLE = 'MENTOR_EXPERT';
const VISIO_DOMAIN = 'meet.jit.si';
const fullName = (u) => (u ? `${u.firstName} ${u.lastName}`.trim() : null);
const isPresident = (user) => user?.role === 'ULTRA_ADMIN';
const ADHERENT_WHERE = { isActive: true, OR: [{ role: { not: 'VISITOR' } }, { adminRoles: { some: { isActive: true } } }] };

/** Ce qui qualifie une personne pour les groupes invités */
async function profileOf(user) {
  const [assignments, mentorRole] = await Promise.all([
    prisma.clubAssignment.count({ where: { userId: user.id, isActive: true } }),
    prisma.userAdminRole.count({ where: { userId: user.id, isActive: true, status: 'APPROVED', role: { name: MENTOR_ROLE }, OR: [{ expiresAt: null }, { expiresAt: { gt: new Date() } }] } }),
  ]);
  return {
    isBureau: user.role === 'ULTRA_ADMIN' || user.role === 'ADMIN' || assignments > 0,
    isMentor: mentorRole > 0,
    isAdherent: user.role !== 'VISITOR' || (user.adminRoles || []).length > 0,
  };
}

function isInvited(user, meeting, profile) {
  if (meeting.createdById === user.id || isPresident(user)) return true;
  if (meeting.invitees.some((i) => i.userId === user.id)) return true;
  return (meeting.audiences.includes('BUREAU') && profile.isBureau)
    || (meeting.audiences.includes('MENTORS') && profile.isMentor)
    || (meeting.audiences.includes('MEMBERS') && profile.isAdherent);
}

async function canOrganize(user) {
  if (isPresident(user)) return true;
  return (await prisma.clubAssignment.count({ where: { userId: user.id, isActive: true, memberRole: { not: 'EQUIPE' } } })) > 0;
}

const INCLUDE = {
  createdBy: { select: { id: true, firstName: true, lastName: true } },
  invitees: { select: { userId: true, user: { select: { firstName: true, lastName: true } } } },
};

async function load(user, id) {
  const meeting = await prisma.meeting.findUnique({ where: { id }, include: INCLUDE });
  if (!meeting) throw new NotFoundError('Réunion introuvable');
  const profile = await profileOf(user);
  // Une réunion à laquelle on n'est pas invité n'existe pas pour soi
  if (!isInvited(user, meeting, profile)) throw new NotFoundError('Réunion introuvable');
  return { meeting, profile, isHost: meeting.createdById === user.id || isPresident(user) };
}

function dto(meeting, { user, isHost }) {
  const now = Date.now();
  const end = meeting.startsAt.getTime() + meeting.durationMinutes * 60000;
  return {
    id: meeting.id,
    title: meeting.title,
    description: meeting.description,
    startsAt: meeting.startsAt,
    durationMinutes: meeting.durationMinutes,
    audiences: meeting.audiences,
    invitees: isHost ? meeting.invitees.map((i) => ({ id: i.userId, name: fullName(i.user) })) : [],
    organizer: fullName(meeting.createdBy),
    isHost,
    isOrganizer: meeting.createdById === user.id,
    cancelled: Boolean(meeting.cancelledAt),
    live: meeting.visioStatus === 'LIVE' && !meeting.cancelledAt,
    status: meeting.cancelledAt ? 'CANCELLED' : meeting.visioStatus === 'LIVE' ? 'LIVE' : end < now ? 'PAST' : 'UPCOMING',
  };
}

/** Toutes les personnes invitées (sauf l'organisateur) : groupes + personnes choisies */
async function recipientsOf(meeting) {
  const ids = new Set(meeting.invitees.map((i) => i.userId));
  const lists = await Promise.all([
    meeting.audiences.includes('BUREAU')
      ? Promise.all([
        prisma.user.findMany({ where: { isActive: true, role: { in: ['ADMIN', 'ULTRA_ADMIN'] } }, select: { id: true } }),
        prisma.clubAssignment.findMany({ where: { isActive: true, user: { isActive: true } }, select: { userId: true } }),
      ]).then(([a, b]) => [...a.map((u) => u.id), ...b.map((x) => x.userId)]) : [],
    meeting.audiences.includes('MENTORS')
      ? prisma.userAdminRole.findMany({
        where: { isActive: true, status: 'APPROVED', role: { name: MENTOR_ROLE }, user: { isActive: true }, OR: [{ expiresAt: null }, { expiresAt: { gt: new Date() } }] },
        select: { userId: true },
      }).then((r) => r.map((x) => x.userId)) : [],
    meeting.audiences.includes('MEMBERS')
      ? prisma.user.findMany({ where: ADHERENT_WHERE, select: { id: true } }).then((r) => r.map((u) => u.id)) : [],
  ]);
  lists.flat().forEach((id) => ids.add(id));
  ids.delete(meeting.createdById);
  return [...ids];
}

async function notifyAll(userIds, payload) {
  for (let i = 0; i < userIds.length; i += 25) {
    await Promise.allSettled(userIds.slice(i, i + 25).map((userId) => NotificationService.createNotification({ userId, type: 'SYSTEM', ...payload })
      .catch((err) => logger.warn(`[Réunions] notification non envoyée : ${err.message}`))));
  }
}

const when = (d) => new Date(d).toLocaleString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit', timeZone: 'Africa/Dakar' });

function clean(data) {
  const title = String(data.title || '').trim();
  if (title.length < 3) throw new BadRequestError('Donne un titre à la réunion (3 caractères minimum)');
  const startsAt = new Date(data.startsAt);
  if (Number.isNaN(startsAt.getTime())) throw new BadRequestError('Date de réunion invalide');
  const audiences = [...new Set((data.audiences || []).filter((a) => AUDIENCES.includes(a)))];
  return {
    title: title.slice(0, 120),
    description: data.description ? String(data.description).trim().slice(0, 1500) || null : null,
    startsAt,
    durationMinutes: Math.min(Math.max(Number(data.durationMinutes) || 60, 15), 480),
    audiences,
  };
}

async function validInvitees(userIds) {
  const ids = [...new Set((Array.isArray(userIds) ? userIds : []).filter((v) => typeof v === 'string'))].slice(0, 200);
  if (!ids.length) return [];
  return (await prisma.user.findMany({ where: { id: { in: ids }, ...ADHERENT_WHERE }, select: { id: true } })).map((u) => u.id);
}

class MeetingService {
  static async context(user) {
    const profile = await profileOf(user);
    return { canOrganize: await canOrganize(user), ...profile, jaas: JaasService.isConfigured() };
  }

  /** Réunions à venir et récentes qui concernent la personne */
  static async list(user) {
    const profile = await profileOf(user);
    const since = new Date(Date.now() - 14 * 86400000);
    const rows = await prisma.meeting.findMany({
      where: { startsAt: { gte: since } },
      include: INCLUDE,
      orderBy: { startsAt: 'asc' },
      take: 200,
    });
    return rows
      .filter((m) => isInvited(user, m, profile))
      .map((m) => dto(m, { user, isHost: m.createdById === user.id || isPresident(user) }));
  }

  static async create(user, data, meta = {}) {
    if (!(await canOrganize(user))) throw new ForbiddenError('Seuls la Présidence et les titulaires de poste du bureau planifient une réunion');
    const base = clean(data);
    const invitees = await validInvitees(data.inviteeIds);
    if (!base.audiences.length && !invitees.length) throw new BadRequestError('Choisis au moins un groupe ou une personne à inviter');
    const created = await prisma.meeting.create({
      data: { ...base, createdById: user.id, invitees: { create: invitees.filter((id) => id !== user.id).map((userId) => ({ userId })) } },
      include: INCLUDE,
    });
    await AuditService.log({ userId: user.id, action: 'meeting.create', module: 'meetings', resource: 'Meeting', resourceId: created.id, metadata: { audiences: base.audiences, invitees: invitees.length }, ...meta });
    const recipients = await recipientsOf(created);
    await notifyAll(recipients, {
      title: `📅 Réunion en visio : ${created.title}`,
      message: `${when(created.startsAt)} · organisée par ${fullName(created.createdBy)}.`,
      url: `/visio.html?reunion=${created.id}`,
      dedupeKey: null,
    });
    return { ...dto(created, { user, isHost: true }), notified: recipients.length };
  }

  static async update(user, id, data, meta = {}) {
    const { meeting, isHost } = await load(user, id);
    if (!isHost) throw new ForbiddenError('Seul l\'organisateur modifie la réunion');
    if (meeting.cancelledAt) throw new BadRequestError('Cette réunion est annulée');
    const base = clean({ ...meeting, ...data, audiences: data.audiences ?? meeting.audiences });
    const invitees = data.inviteeIds !== undefined ? await validInvitees(data.inviteeIds) : null;
    if (!base.audiences.length && !(invitees ?? meeting.invitees).length) throw new BadRequestError('Choisis au moins un groupe ou une personne à inviter');
    const moved = base.startsAt.getTime() !== meeting.startsAt.getTime();
    const updated = await prisma.meeting.update({
      where: { id },
      data: {
        ...base,
        ...(invitees ? { invitees: { deleteMany: {}, create: invitees.filter((x) => x !== meeting.createdById).map((userId) => ({ userId })) } } : {}),
      },
      include: INCLUDE,
    });
    await AuditService.log({ userId: user.id, action: 'meeting.update', module: 'meetings', resource: 'Meeting', resourceId: id, ...meta });
    if (moved) {
      await notifyAll(await recipientsOf(updated), {
        title: `🔄 Réunion déplacée : ${updated.title}`, message: `Nouvelle date : ${when(updated.startsAt)}.`, url: `/visio.html?reunion=${id}`,
      });
    }
    return dto(updated, { user, isHost });
  }

  static async cancel(user, id, meta = {}) {
    const { meeting, isHost } = await load(user, id);
    if (!isHost) throw new ForbiddenError('Seul l\'organisateur annule la réunion');
    if (meeting.cancelledAt) return { id };
    await prisma.meeting.update({ where: { id }, data: { cancelledAt: new Date(), visioStatus: 'CLOSED' } });
    await AuditService.log({ userId: user.id, action: 'meeting.cancel', module: 'meetings', resource: 'Meeting', resourceId: id, ...meta });
    await notifyAll(await recipientsOf(meeting), { title: `❌ Réunion annulée : ${meeting.title}`, message: `Elle était prévue ${when(meeting.startsAt)}.`, url: '/reunions.html' });
    return { id };
  }

  /** Adhérents qu'on peut inviter (organisateurs) */
  static async people(user, { search } = {}) {
    if (!(await canOrganize(user))) throw new ForbiddenError('Réservé aux organisateurs');
    const term = String(search || '').trim();
    const rows = await prisma.user.findMany({
      where: {
        ...ADHERENT_WHERE, id: { not: user.id },
        ...(term ? { AND: [{ OR: [{ firstName: { contains: term, mode: 'insensitive' } }, { lastName: { contains: term, mode: 'insensitive' } }] }] } : {}),
      },
      select: { id: true, firstName: true, lastName: true }, orderBy: [{ firstName: 'asc' }, { lastName: 'asc' }], take: 300,
    });
    return rows.map((u) => ({ id: u.id, name: fullName(u) }));
  }

  // ===== Salle de visio (même forme que les séances de mentorat : la page visio.html les traite pareil) =====

  static async getVisio(user, id) {
    const { meeting, isHost } = await load(user, id);
    const live = meeting.visioStatus === 'LIVE' && Boolean(meeting.visioRoomId) && !meeting.cancelledAt;
    const jaas = JaasService.isConfigured();
    return {
      formationId: meeting.id,
      slug: null,
      title: meeting.title,
      objectives: [meeting.description, `Organisée par ${fullName(meeting.createdBy)}`].filter(Boolean).join('\n\n'),
      duration: `${meeting.durationMinutes} min`,
      location: 'Visio du club',
      syllabus: [],
      startDate: meeting.startsAt,
      visioEnabled: !meeting.cancelledAt,
      cancelled: Boolean(meeting.cancelledAt),
      visioStatus: live ? 'LIVE' : 'INACTIVE',
      visioScheduledAt: meeting.startsAt,
      roomId: live ? meeting.visioRoomId : null,
      provider: jaas ? 'jaas' : 'jitsi',
      meetingUrl: live && !jaas ? `https://${VISIO_DOMAIN}/${meeting.visioRoomId}` : null,
      isModerator: isHost,
      domain: jaas ? JaasService.DOMAIN : VISIO_DOMAIN,
      maxDurationMinutes: jaas ? null : 95,
      userName: fullName(user) || null,
      kind: 'reunion',
    };
  }

  static async setVisio(user, id, open) {
    const { meeting, isHost } = await load(user, id);
    if (!isHost) throw new ForbiddenError('Seul l\'organisateur ouvre la salle');
    if (open && meeting.cancelledAt) throw new BadRequestError('Cette réunion est annulée');
    const roomId = open ? (meeting.visioStatus === 'LIVE' && meeting.visioRoomId ? meeting.visioRoomId : `lmdt-reunion-${crypto.randomBytes(8).toString('hex')}`) : meeting.visioRoomId;
    const wasLive = meeting.visioStatus === 'LIVE';
    await prisma.meeting.update({ where: { id }, data: { visioStatus: open ? 'LIVE' : 'CLOSED', visioRoomId: roomId } });
    if (open && !wasLive) {
      await notifyAll(await recipientsOf(meeting), {
        title: `🟢 La salle est ouverte : ${meeting.title}`, message: 'Rejoins la réunion en visio.', url: `/visio.html?reunion=${id}`,
      });
    }
    return MeetingService.getVisio(user, id);
  }

  static async join(user, id, name) {
    if (!JaasService.isConfigured()) throw new BadRequestError('La visio intégrée n\'est pas activée : utilisez le lien de la réunion.');
    const { meeting, isHost } = await load(user, id);
    if (meeting.visioStatus !== 'LIVE' || !meeting.visioRoomId || meeting.cancelledAt) throw new BadRequestError('La salle n\'est pas encore ouverte.');
    const displayName = String(name || '').replace(/[<>]/g, '').trim().slice(0, 60) || fullName(user) || 'Participant';
    return {
      ...JaasService.publicInfo(meeting.visioRoomId),
      jwt: JaasService.createToken({ room: meeting.visioRoomId, user, name: displayName, moderator: isHost }),
      displayName,
      isModerator: isHost,
    };
  }
}

module.exports = MeetingService;
