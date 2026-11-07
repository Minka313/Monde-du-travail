/**
 * Salon des membres : espace de discussion réservé aux adhérents du club.
 * Accès : tout compte autre que VISITOR (adhérent, bureau, administrateur). Les visiteurs, même connectés,
 * n'y entrent pas tant que la Présidence ne les a pas acceptés comme adhérents.
 * Bureau = Présidence, administrateurs et titulaires d'un poste : ils écrivent dans les salons d'annonces
 * et peuvent retirer un message.
 */
const prisma = require('../config/database');
const AuditService = require('./auditService');
const { BadRequestError, ForbiddenError, NotFoundError } = require('../utils/errors');

const MAX_BODY = 2000;
const PAGE = 60;
const FLOOD_WINDOW_MS = 10000;
const FLOOD_MAX = 6;

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

async function getChannel(id, { forPosting = false } = {}) {
  const channel = await prisma.chatChannel.findUnique({ where: { id } });
  if (!channel) throw new NotFoundError('Salon introuvable');
  if (forPosting && channel.isArchived) throw new BadRequestError('Ce salon est archivé');
  return channel;
}

function authorName(u) { return `${u.firstName} ${u.lastName}`.trim(); }

function messageDto(m, { me, staff, isStaffViewer }) {
  const deleted = Boolean(m.deletedAt);
  return {
    id: m.id,
    channelId: m.channelId,
    body: deleted ? '' : m.body,
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

class SalonService {
  static async ensureDefaults() {
    if (await prisma.chatChannel.count()) return;
    await prisma.chatChannel.createMany({ data: DEFAULT_CHANNELS, skipDuplicates: true });
  }

  static async listChannels(user) {
    await requireAdherent(user);
    await SalonService.ensureDefaults();
    const channels = await prisma.chatChannel.findMany({ where: { isArchived: false }, orderBy: [{ position: 'asc' }, { createdAt: 'asc' }] });
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
        staffOnlyPost: c.staffOnlyPost, canPost: !c.staffOnlyPost || viewerStaff,
        unread, lastMessageAt: last?.createdAt || null,
      };
    }));
    return { channels: rows, isStaff: viewerStaff, isPresident: user.role === 'ULTRA_ADMIN' };
  }

  /** Derniers messages d'un salon, ou ceux arrivés après `after` (actualisation régulière) */
  static async listMessages(user, channelId, { after, before } = {}) {
    await requireAdherent(user);
    await getChannel(channelId);
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
    return {
      messages: rows.map((m) => messageDto(m, { me: user.id, staff, isStaffViewer })),
      hasMore: !after && rows.length === PAGE,
      serverTime,
    };
  }

  static async post(user, channelId, { body, replyToId }) {
    await requireAdherent(user);
    const channel = await getChannel(channelId, { forPosting: true });
    const isStaffViewer = (await staffIds([user.id])).has(user.id);
    if (channel.staffOnlyPost && !isStaffViewer) throw new ForbiddenError('Seul le bureau écrit dans ce salon');
    const text = cleanBody(body);
    if (!text) throw new BadRequestError('Écris un message');
    if (text.length > MAX_BODY) throw new BadRequestError(`Message trop long (${MAX_BODY} caractères maximum)`);

    const recent = await prisma.chatMessage.count({ where: { authorId: user.id, createdAt: { gt: new Date(Date.now() - FLOOD_WINDOW_MS) } } });
    if (recent >= FLOOD_MAX) throw Object.assign(new BadRequestError('Doucement : attends quelques secondes avant d\'écrire à nouveau'), { statusCode: 429 });

    let replyTo = null;
    if (replyToId) {
      replyTo = await prisma.chatMessage.findUnique({ where: { id: replyToId }, select: { id: true, channelId: true } });
      if (!replyTo || replyTo.channelId !== channelId) throw new BadRequestError('Le message auquel tu réponds est introuvable');
    }
    const created = await prisma.chatMessage.create({
      data: { channelId, authorId: user.id, body: text, replyToId: replyTo?.id || null },
      include: MESSAGE_INCLUDE,
    });
    await SalonService.markRead(user, channelId);
    return messageDto(created, { me: user.id, staff: await staffIds([user.id]), isStaffViewer });
  }

  static async edit(user, messageId, body) {
    await requireAdherent(user);
    const message = await prisma.chatMessage.findUnique({ where: { id: messageId } });
    if (!message || message.deletedAt) throw new NotFoundError('Message introuvable');
    if (message.authorId !== user.id) throw new ForbiddenError('Tu ne peux modifier que tes messages');
    const text = cleanBody(body);
    if (!text) throw new BadRequestError('Le message est vide');
    if (text.length > MAX_BODY) throw new BadRequestError(`Message trop long (${MAX_BODY} caractères maximum)`);
    const updated = await prisma.chatMessage.update({ where: { id: messageId }, data: { body: text, editedAt: new Date() }, include: MESSAGE_INCLUDE });
    return messageDto(updated, { me: user.id, staff: await staffIds([user.id]), isStaffViewer: (await staffIds([user.id])).has(user.id) });
  }

  static async remove(user, messageId, meta = {}) {
    await requireAdherent(user);
    const message = await prisma.chatMessage.findUnique({ where: { id: messageId } });
    if (!message || message.deletedAt) throw new NotFoundError('Message introuvable');
    const own = message.authorId === user.id;
    if (!own && !(await staffIds([user.id])).has(user.id)) throw new ForbiddenError('Tu ne peux supprimer que tes messages');
    // Le texte est effacé : un message retiré n'est plus lisible, même par le bureau
    await prisma.chatMessage.update({ where: { id: messageId }, data: { deletedAt: new Date(), body: '' } });
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
    await getChannel(channelId);
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

  static async createChannel(user, { name, description, icon, staffOnlyPost }) {
    if (user.role !== 'ULTRA_ADMIN') throw new ForbiddenError('Seule la Présidence crée des salons');
    const title = String(name || '').trim();
    if (title.length < 2) throw new BadRequestError('Donne un nom au salon');
    let slug = slugify(title) || 'salon';
    if (await prisma.chatChannel.findUnique({ where: { slug } })) slug = `${slug}-${Date.now().toString(36).slice(-4)}`;
    const position = (await prisma.chatChannel.count()) + 1;
    return prisma.chatChannel.create({
      data: { slug, name: title.slice(0, 60), description: description ? String(description).slice(0, 200) : null, icon: (icon || '💬').slice(0, 8), staffOnlyPost: Boolean(staffOnlyPost), position },
    });
  }

  static async updateChannel(user, id, patch) {
    if (user.role !== 'ULTRA_ADMIN') throw new ForbiddenError('Seule la Présidence modifie les salons');
    await getChannel(id);
    const data = {};
    if (patch.name !== undefined) data.name = String(patch.name).trim().slice(0, 60);
    if (patch.description !== undefined) data.description = patch.description ? String(patch.description).slice(0, 200) : null;
    if (patch.icon !== undefined) data.icon = String(patch.icon).slice(0, 8) || '💬';
    if (patch.staffOnlyPost !== undefined) data.staffOnlyPost = Boolean(patch.staffOnlyPost);
    if (patch.isArchived !== undefined) data.isArchived = Boolean(patch.isArchived);
    if (data.name !== undefined && data.name.length < 2) throw new BadRequestError('Donne un nom au salon');
    return prisma.chatChannel.update({ where: { id }, data });
  }
}

SalonService.DEFAULT_CHANNELS = DEFAULT_CHANNELS;
module.exports = SalonService;
