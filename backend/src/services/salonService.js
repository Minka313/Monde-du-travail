/**
 * Salon des membres : espace de discussion réservé aux adhérents du club.
 * Accès : tout compte autre que VISITOR (adhérent, bureau, administrateur). Les visiteurs, même connectés,
 * n'y entrent pas tant que la Présidence ne les a pas acceptés comme adhérents.
 * Groupes privés : créés par la Présidence, visibles et lisibles seulement par les personnes qu'elle choisit
 * (la Présidence les voit tous). Un salon privé est introuvable (404) pour les autres.
 * Bureau = Présidence, administrateurs et titulaires d'un poste : ils écrivent dans les salons d'annonces
 * et peuvent retirer un message.
 */
const prisma = require('../config/database');
const AuditService = require('./auditService');
const notificationService = require('./notificationService');
const r2Storage = require('./r2StorageService');
const logger = require('../utils/logger');
const { BadRequestError, ForbiddenError, NotFoundError } = require('../utils/errors');

const MAX_BODY = 2000;
const PAGE = 60;
const FLOOD_WINDOW_MS = 10000;
const FLOOD_MAX = 6;
const MAX_ATTACHMENTS = 4;
const MAX_MENTIONS = 10;
const FILE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'application/pdf'];

const DEFAULT_CHANNELS = [
  { slug: 'general', name: 'Général', icon: '💬', description: 'Le salon de tout le club : échanges libres et entraide du quotidien.', position: 1 },
  { slug: 'annonces', name: 'Annonces', icon: '📣', description: 'Informations officielles du bureau : réunions, décisions, rendez-vous.', staffOnlyPost: true, position: 2 },
  { slug: 'projets', name: 'Projets', icon: '🌱', description: 'Agrinova et les autres projets du club : avancement, idées, coups de main.', position: 3 },
  { slug: 'orientation', name: 'Orientation et concours', icon: '🎓', description: 'Concours, bourses, filières : partage ce que tu as appris, demande conseil.', position: 4 },
];

const slugify = (value) => String(value).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 40);
const cleanBody = (value) => String(value ?? '').replace(/\r\n?/g, '\n').replace(/\n{4,}/g, '\n\n\n').trim();

function isAdherent(user) {
  return user.role !== 'VISITOR' || (user.adminRoles || []).length > 0;
}

async function staffIds(userIds) {
  const ids = [...new Set(userIds)];
  if (!ids.length) return new Set();
  const [users, assignments] = await Promise.all([
    prisma.user.findMany({ where: { id: { in: ids }, role: { in: ['ADMIN', 'ULTRA_ADMIN'] } }, select: { id: true } }),
    prisma.clubAssignment.findMany({ where: { userId: { in: ids }, isActive: true }, select: { userId: true } }),
  ]);
  return new Set([...users.map((u) => u.id), ...assignments.map((a) => a.userId)]);
}

async function requireAdherent(user) {
  if (!isAdherent(user)) throw new ForbiddenError('Le salon est réservé aux adhérents du club');
}

const isPresident = (user) => user.role === 'ULTRA_ADMIN';

async function canSeeChannel(user, channel) {
  if (!channel.isPrivate || isPresident(user)) return true;
  return Boolean(await prisma.chatMember.findUnique({ where: { channelId_userId: { channelId: channel.id, userId: user.id } }, select: { id: true } }));
}

// Un groupe privé dont on ne fait pas partie n'existe pas : même réponse qu'un salon inconnu
async function getChannel(id, user, { forPosting = false } = {}) {
  const channel = await prisma.chatChannel.findUnique({ where: { id } });
  if (!channel || !(await canSeeChannel(user, channel))) throw new NotFoundError('Salon introuvable');
  if (forPosting && channel.isArchived) throw new BadRequestError('Ce salon est archivé');
  return channel;
}

/** Adhérents pouvant lire un salon (pour les mentions et la sélection de membres) */
async function peopleOf(channel) {
  const select = { id: true, firstName: true, lastName: true };
  if (channel.isPrivate) {
    const [members, presidents] = await Promise.all([
      prisma.chatMember.findMany({ where: { channelId: channel.id, user: { isActive: true } }, select: { user: { select } } }),
      prisma.user.findMany({ where: { role: 'ULTRA_ADMIN', isActive: true }, select }),
    ]);
    const map = new Map();
    [...members.map((m) => m.user), ...presidents].forEach((u) => map.set(u.id, u));
    return [...map.values()];
  }
  return prisma.user.findMany({ where: { isActive: true, OR: [{ role: { not: 'VISITOR' } }, { adminRoles: { some: { isActive: true } } }] }, select, orderBy: { firstName: 'asc' }, take: 500 });
}

function authorName(u) { return `${u.firstName} ${u.lastName}`.trim(); }

function messageDto(m, { me, staff, isStaffViewer, names }) {
  const deleted = Boolean(m.deletedAt);
  return {
    id: m.id,
    channelId: m.channelId,
    body: deleted ? '' : m.body,
    attachments: deleted ? [] : (Array.isArray(m.attachments) ? m.attachments : []),
    mentions: deleted ? [] : (names?.filter((n) => (m.mentions || []).includes(n.id)) || []),
    deleted,
    createdAt: m.createdAt,
    editedAt: m.editedAt,
    author: { id: m.author.id, name: authorName(m.author), avatarUrl: m.author.avatarUrl || null, isStaff: staff.has(m.author.id) },
    replyTo: m.replyTo ? {
      id: m.replyTo.id,
      authorName: authorName(m.replyTo.author),
      excerpt: m.replyTo.deletedAt ? 'Message supprimé' : m.replyTo.body.slice(0, 120),
    } : null,
    mine: m.authorId === me,
    canEdit: !deleted && m.authorId === me,
    canDelete: !deleted && (m.authorId === me || isStaffViewer),
  };
}

const MESSAGE_INCLUDE = {
  author: { select: { id: true, firstName: true, lastName: true, avatarUrl: true } },
  replyTo: { select: { id: true, body: true, deletedAt: true, author: { select: { firstName: true, lastName: true } } } },
};

/** Mentions valides : des personnes qui ont accès au salon, jamais soi-même */
async function validMentions(channel, user, ids) {
  const wanted = [...new Set((Array.isArray(ids) ? ids : []).filter((v) => typeof v === 'string'))].slice(0, MAX_MENTIONS);
  if (!wanted.length) return [];
  const people = await peopleOf(channel);
  const allowed = new Set(people.map((p) => p.id));
  return wanted.filter((id) => allowed.has(id) && id !== user.id);
}

function validAttachments(list) {
  if (list == null) return [];
  if (!Array.isArray(list) || list.length > MAX_ATTACHMENTS) throw new BadRequestError(`${MAX_ATTACHMENTS} fichiers maximum par message`);
  const base = String(r2Storage.publicDomain || '').replace(/\/+$/, '');
  return list.map((a) => {
    const url = String(a?.url || '');
    // Seuls les fichiers téléversés sur le stockage du club sont acceptés (pas de lien externe déguisé)
    if (!base || !url.startsWith(`${base}/`)) throw new BadRequestError('Fichier joint non valide');
    if (!FILE_TYPES.includes(a.mimeType)) throw new BadRequestError('Type de fichier non autorisé');
    return { url, name: String(a.name || 'fichier').slice(0, 200), mimeType: a.mimeType, size: Number.isFinite(a.size) ? a.size : 0 };
  });
}

class SalonService {
  static async ensureDefaults() {
    if (await prisma.chatChannel.count()) return;
    await prisma.chatChannel.createMany({ data: DEFAULT_CHANNELS, skipDuplicates: true });
  }

  static visibleWhere(user) {
    return isPresident(user)
      ? { isArchived: false }
      : { isArchived: false, OR: [{ isPrivate: false }, { members: { some: { userId: user.id } } }] };
  }

  static async listChannels(user) {
    await requireAdherent(user);
    await SalonService.ensureDefaults();
    const channels = await prisma.chatChannel.findMany({
      where: SalonService.visibleWhere(user),
      orderBy: [{ position: 'asc' }, { createdAt: 'asc' }],
      include: { _count: { select: { members: true } } },
    });
    const reads = await prisma.chatRead.findMany({ where: { userId: user.id } });
    const lastRead = new Map(reads.map((r) => [r.channelId, r.lastReadAt]));
    const viewerStaff = (await staffIds([user.id])).has(user.id);
    const rows = await Promise.all(channels.map(async (c) => {
      // Un salon jamais ouvert n'affiche pas tout son historique comme « non lu »
      const since = lastRead.get(c.id);
      const [unread, last] = await Promise.all([
        since ? prisma.chatMessage.count({ where: { channelId: c.id, deletedAt: null, createdAt: { gt: since }, authorId: { not: user.id } } }) : 0,
        prisma.chatMessage.findFirst({ where: { channelId: c.id, deletedAt: null }, orderBy: { createdAt: 'desc' }, select: { createdAt: true } }),
      ]);
      return {
        id: c.id, slug: c.slug, name: c.name, icon: c.icon, description: c.description,
        staffOnlyPost: c.staffOnlyPost, isPrivate: c.isPrivate, memberCount: c.isPrivate ? c._count.members : null,
        canPost: !c.staffOnlyPost || viewerStaff,
        unread, lastMessageAt: last?.createdAt || null,
      };
    }));
    return { channels: rows, isStaff: viewerStaff, isPresident: isPresident(user) };
  }

  /** Personnes qu'on peut mentionner dans ce salon */
  static async people(user, channelId) {
    await requireAdherent(user);
    const channel = await getChannel(channelId, user);
    const people = await peopleOf(channel);
    return people.filter((p) => p.id !== user.id).map((p) => ({ id: p.id, name: authorName(p) })).sort((a, b) => a.name.localeCompare(b.name, 'fr'));
  }

  /** Derniers messages d'un salon, ou ceux arrivés après `after` (actualisation régulière) */
  static async listMessages(user, channelId, { after, before } = {}) {
    await requireAdherent(user);
    await getChannel(channelId, user);
    const isStaffViewer = (await staffIds([user.id])).has(user.id);
    // Curseur pris AVANT la lecture, avec un léger recouvrement : aucun message ne passe entre deux actualisations
    const serverTime = new Date(Date.now() - 2000).toISOString();
    let rows;
    if (after) {
      const since = new Date(after);
      if (Number.isNaN(since.getTime())) throw new BadRequestError('Date invalide');
      // Nouveaux messages, mais aussi ceux modifiés ou supprimés depuis : le client les remplace
      rows = await prisma.chatMessage.findMany({
        where: { channelId, OR: [{ createdAt: { gt: since } }, { editedAt: { gt: since } }, { deletedAt: { gt: since } }] },
        orderBy: { createdAt: 'asc' }, take: 200, include: MESSAGE_INCLUDE,
      });
    } else {
      const where = { channelId, ...(before ? { createdAt: { lt: new Date(before) } } : {}) };
      rows = (await prisma.chatMessage.findMany({ where, orderBy: { createdAt: 'desc' }, take: PAGE, include: MESSAGE_INCLUDE })).reverse();
    }
    const staff = await staffIds(rows.map((m) => m.authorId));
    const names = await mentionNames(rows);
    return {
      messages: rows.map((m) => messageDto(m, { me: user.id, staff, isStaffViewer, names })),
      hasMore: !after && rows.length === PAGE,
      serverTime,
    };
  }

  static async post(user, channelId, { body, replyToId, mentionIds, attachments }) {
    await requireAdherent(user);
    const channel = await getChannel(channelId, user, { forPosting: true });
    const isStaffViewer = (await staffIds([user.id])).has(user.id);
    if (channel.staffOnlyPost && !isStaffViewer) throw new ForbiddenError('Seul le bureau écrit dans ce salon');
    const text = cleanBody(body);
    const files = validAttachments(attachments);
    if (!text && !files.length) throw new BadRequestError('Écris un message');
    if (text.length > MAX_BODY) throw new BadRequestError(`Message trop long (${MAX_BODY} caractères maximum)`);

    const recent = await prisma.chatMessage.count({ where: { authorId: user.id, createdAt: { gt: new Date(Date.now() - FLOOD_WINDOW_MS) } } });
    if (recent >= FLOOD_MAX) throw Object.assign(new BadRequestError('Doucement : attends quelques secondes avant d\'écrire à nouveau'), { statusCode: 429 });

    let replyTo = null;
    if (replyToId) {
      replyTo = await prisma.chatMessage.findUnique({ where: { id: replyToId }, select: { id: true, channelId: true, authorId: true } });
      if (!replyTo || replyTo.channelId !== channelId) throw new BadRequestError('Le message auquel tu réponds est introuvable');
    }
    const mentions = await validMentions(channel, user, mentionIds);
    const created = await prisma.chatMessage.create({
      data: { channelId, authorId: user.id, body: text, replyToId: replyTo?.id || null, mentions, attachments: files.length ? files : undefined },
      include: MESSAGE_INCLUDE,
    });
    await SalonService.markRead(user, channelId);
    await SalonService.notify({ user, channel, message: created, replyAuthorId: replyTo?.authorId, mentions });
    return messageDto(created, { me: user.id, staff: await staffIds([user.id]), isStaffViewer, names: await mentionNames([created]) });
  }

  /** Alerte (cloche + notification poussée si activée) : réponse à son message, mention. Jamais bloquant. */
  static async notify({ user, channel, message, replyAuthorId, mentions }) {
    try {
      const who = `${user.firstName || ''} ${user.lastName || ''}`.trim();
      const author = who || (await prisma.user.findUnique({ where: { id: user.id }, select: { firstName: true, lastName: true } }).then(authorName));
      const excerpt = (message.body || 'a envoyé un fichier').slice(0, 100);
      const url = `salon.html?salon=${encodeURIComponent(channel.slug)}`;
      const targets = new Map();
      if (replyAuthorId && replyAuthorId !== user.id) targets.set(replyAuthorId, `${author} a répondu à ton message`);
      mentions.forEach((id) => targets.set(id, `${author} t'a mentionné`));
      const jobs = [...targets.entries()].map(([userId, title]) => notificationService.createNotification({
        userId, type: 'SYSTEM', title: `💬 ${title}`, message: `${channel.isPrivate ? 'Groupe' : 'Salon'} « ${channel.name} » : ${excerpt}`, url,
        dedupeKey: `salon:${message.id}:${userId}`,
      }));
      await Promise.allSettled(jobs);
    } catch (error) {
      logger.warn(`[Salon] notification non envoyée : ${error.message}`);
    }
  }

  static async upload(user, file) {
    await requireAdherent(user);
    if (!file) throw new BadRequestError('Aucun fichier sélectionné');
    if (!FILE_TYPES.includes(file.mimetype)) throw new BadRequestError('Formats acceptés : JPEG, PNG, WebP, GIF et PDF');
    const result = await r2Storage.uploadFile({ buffer: file.buffer, originalName: file.originalname, mimeType: file.mimetype, folder: 'salon' });
    return { url: result.url, name: String(file.originalname || 'fichier').slice(0, 200), mimeType: file.mimetype, size: result.size || file.size };
  }

  static async edit(user, messageId, body) {
    await requireAdherent(user);
    const message = await prisma.chatMessage.findUnique({ where: { id: messageId } });
    if (!message || message.deletedAt) throw new NotFoundError('Message introuvable');
    await getChannel(message.channelId, user);
    if (message.authorId !== user.id) throw new ForbiddenError('Tu ne peux modifier que tes messages');
    const text = cleanBody(body);
    const hasFiles = Array.isArray(message.attachments) && message.attachments.length > 0;
    if (!text && !hasFiles) throw new BadRequestError('Le message est vide');
    if (text.length > MAX_BODY) throw new BadRequestError(`Message trop long (${MAX_BODY} caractères maximum)`);
    const updated = await prisma.chatMessage.update({ where: { id: messageId }, data: { body: text, editedAt: new Date() }, include: MESSAGE_INCLUDE });
    const isStaffViewer = (await staffIds([user.id])).has(user.id);
    return messageDto(updated, { me: user.id, staff: await staffIds([user.id]), isStaffViewer, names: await mentionNames([updated]) });
  }

  static async remove(user, messageId, meta = {}) {
    await requireAdherent(user);
    const message = await prisma.chatMessage.findUnique({ where: { id: messageId } });
    if (!message || message.deletedAt) throw new NotFoundError('Message introuvable');
    await getChannel(message.channelId, user);
    const own = message.authorId === user.id;
    if (!own && !(await staffIds([user.id])).has(user.id)) throw new ForbiddenError('Tu ne peux supprimer que tes messages');
    // Le texte est effacé : un message retiré n'est plus lisible, même par le bureau
    await prisma.chatMessage.update({ where: { id: messageId }, data: { deletedAt: new Date(), body: '', mentions: [], attachments: null } });
    if (!own) {
      await AuditService.log({
        userId: user.id, action: 'salon.message_removed', module: 'salon', resource: 'ChatMessage', resourceId: messageId,
        metadata: { authorId: message.authorId, channelId: message.channelId }, ...meta,
      });
    }
    return { id: messageId };
  }

  static async markRead(user, channelId) {
    await requireAdherent(user);
    await getChannel(channelId, user);
    await prisma.chatRead.upsert({
      where: { userId_channelId: { userId: user.id, channelId } },
      update: { lastReadAt: new Date() },
      create: { userId: user.id, channelId },
    });
    return { ok: true };
  }

  /** Total de messages non lus (pastille du menu) */
  static async unreadTotal(user) {
    if (!isAdherent(user)) return { unread: 0 };
    const { channels } = await SalonService.listChannels(user);
    return { unread: channels.reduce((n, c) => n + c.unread, 0) };
  }

  // ===== Présidence : salons et groupes privés =====

  static requirePresident(user) {
    if (!isPresident(user)) throw new ForbiddenError('Seule la Présidence gère les salons');
  }

  /** Adhérents que la Présidence peut inviter dans un groupe privé */
  static async candidates(user, { search } = {}) {
    SalonService.requirePresident(user);
    const term = String(search || '').trim();
    const rows = await prisma.user.findMany({
      where: {
        isActive: true, id: { not: user.id },
        OR: [{ role: { not: 'VISITOR' } }, { adminRoles: { some: { isActive: true } } }],
        ...(term ? { AND: [{ OR: [{ firstName: { contains: term, mode: 'insensitive' } }, { lastName: { contains: term, mode: 'insensitive' } }] }] } : {}),
      },
      select: { id: true, firstName: true, lastName: true },
      orderBy: [{ firstName: 'asc' }, { lastName: 'asc' }],
      take: 300,
    });
    return rows.map((u) => ({ id: u.id, name: authorName(u) }));
  }

  static async validMemberIds(userIds) {
    const ids = [...new Set((Array.isArray(userIds) ? userIds : []).filter((v) => typeof v === 'string'))].slice(0, 300);
    if (!ids.length) return [];
    const rows = await prisma.user.findMany({
      where: { id: { in: ids }, isActive: true, OR: [{ role: { not: 'VISITOR' } }, { adminRoles: { some: { isActive: true } } }] },
      select: { id: true },
    });
    return rows.map((r) => r.id);
  }

  static async createChannel(user, { name, description, icon, staffOnlyPost, isPrivate, memberIds }) {
    SalonService.requirePresident(user);
    const title = String(name || '').trim();
    if (title.length < 2) throw new BadRequestError('Donne un nom au salon');
    let slug = slugify(title) || 'salon';
    if (await prisma.chatChannel.findUnique({ where: { slug } })) slug = `${slug}-${Date.now().toString(36).slice(-4)}`;
    const position = (await prisma.chatChannel.count()) + 1;
    const members = isPrivate ? await SalonService.validMemberIds(memberIds) : [];
    if (isPrivate && !members.length) throw new BadRequestError('Choisis au moins une personne pour le groupe privé');
    return prisma.chatChannel.create({
      data: {
        slug, name: title.slice(0, 60), description: description ? String(description).slice(0, 200) : null,
        icon: (icon || (isPrivate ? '🔒' : '💬')).slice(0, 8), staffOnlyPost: Boolean(staffOnlyPost) && !isPrivate, isPrivate: Boolean(isPrivate), position,
        ...(isPrivate ? { members: { create: members.map((userId) => ({ userId })) } } : {}),
      },
    });
  }

  static async updateChannel(user, id, patch) {
    SalonService.requirePresident(user);
    await getChannel(id, user);
    const data = {};
    if (patch.name !== undefined) data.name = String(patch.name).trim().slice(0, 60);
    if (patch.description !== undefined) data.description = patch.description ? String(patch.description).slice(0, 200) : null;
    if (patch.icon !== undefined) data.icon = String(patch.icon).slice(0, 8) || '💬';
    if (patch.staffOnlyPost !== undefined) data.staffOnlyPost = Boolean(patch.staffOnlyPost);
    if (patch.isArchived !== undefined) data.isArchived = Boolean(patch.isArchived);
    if (data.name !== undefined && data.name.length < 2) throw new BadRequestError('Donne un nom au salon');
    return prisma.chatChannel.update({ where: { id }, data });
  }

  static async getMembers(user, channelId) {
    SalonService.requirePresident(user);
    const channel = await getChannel(channelId, user);
    if (!channel.isPrivate) throw new BadRequestError('Ce salon est ouvert à tous les adhérents');
    const rows = await prisma.chatMember.findMany({ where: { channelId }, select: { user: { select: { id: true, firstName: true, lastName: true } } } });
    return rows.map((r) => ({ id: r.user.id, name: authorName(r.user) })).sort((a, b) => a.name.localeCompare(b.name, 'fr'));
  }

  /** Remplace la liste des membres d'un groupe privé. Les personnes retirées perdent l'accès (leurs messages restent). */
  static async setMembers(user, channelId, userIds) {
    SalonService.requirePresident(user);
    const channel = await getChannel(channelId, user);
    if (!channel.isPrivate) throw new BadRequestError('Ce salon est ouvert à tous les adhérents');
    const wanted = await SalonService.validMemberIds(userIds);
    if (!wanted.length) throw new BadRequestError('Un groupe privé garde au moins une personne');
    await prisma.$transaction([
      prisma.chatMember.deleteMany({ where: { channelId, userId: { notIn: wanted } } }),
      prisma.chatMember.createMany({ data: wanted.map((userId) => ({ channelId, userId })), skipDuplicates: true }),
    ]);
    // Une personne retirée ne garde pas de pastille « non lu » sur un groupe qu'elle ne voit plus
    await prisma.chatRead.deleteMany({ where: { channelId, userId: { notIn: wanted } } });
    return SalonService.getMembers(user, channelId);
  }
}

async function mentionNames(rows) {
  const ids = [...new Set(rows.flatMap((m) => m.mentions || []))];
  if (!ids.length) return [];
  const users = await prisma.user.findMany({ where: { id: { in: ids } }, select: { id: true, firstName: true, lastName: true } });
  return users.map((u) => ({ id: u.id, name: authorName(u) }));
}

SalonService.DEFAULT_CHANNELS = DEFAULT_CHANNELS;
module.exports = SalonService;
