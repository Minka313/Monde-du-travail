const crypto = require('crypto');
const prisma = require('../config/database');
const { NotFoundError, BadRequestError } = require('../utils/errors');
const EmailService = require('./emailService');
const logger = require('../utils/logger');

// Alertes e-mail « Suivre cette annonce » : sans compte, l'adresse est confirmée par un lien.
// Événements : ouverture des candidatures, J-7 et J-2 avant la date limite,
// publication de la nouvelle session d'un concours déjà suivi.
const DAY = 86400000;
const CONFIRM_THROTTLE_MS = 2 * 60 * 1000;
// Plafond d'e-mails par passage (offre gratuite Resend : 100 par jour) ; le reste part au passage suivant
const MAX_PER_RUN = 40;
// Le plus urgent d'abord : un seul e-mail par personne et par passage
const PRIORITY = ['D2', 'D7', 'OPEN', 'SESSION'];

const day = (date) => new Date(date).toISOString().slice(0, 10);
const baseUrl = () => (process.env.FRONTEND_URL || 'https://lemondedutravail.org').replace(/\/$/, '');
const pageUrl = (o, params = '') => `${baseUrl()}/opportunite?${o.slug ? `slug=${encodeURIComponent(o.slug)}` : `id=${encodeURIComponent(o.id)}`}${params}`;

function dueEvents(alert, o, now = new Date()) {
  const events = [];
  if (o.deadline) {
    const left = new Date(o.deadline) - now;
    if (left > 0 && left <= 2 * DAY) events.push(`D2:${day(o.deadline)}`);
    else if (left > 2 * DAY && left <= 7 * DAY) events.push(`D7:${day(o.deadline)}`);
  }
  if (o.openingDate) {
    const since = now - new Date(o.openingDate);
    if (since >= 0 && since < 3 * DAY && (!o.deadline || now <= new Date(o.deadline))) events.push(`OPEN:${day(o.openingDate)}`);
  }
  if (alert.announceSession) events.push(`SESSION:${o.id}`);
  return events
    .filter((key) => !alert.sentKeys.includes(key))
    .sort((a, b) => PRIORITY.indexOf(a.split(':')[0]) - PRIORITY.indexOf(b.split(':')[0]));
}

class OpportunityAlertService {
  static async subscribe(opportunityId, email) {
    const opportunity = await prisma.opportunity.findUnique({ where: { id: opportunityId }, select: { id: true, slug: true, title: true, status: true } });
    if (!opportunity || opportunity.status !== 'PUBLISHED') throw new NotFoundError('Annonce non trouvée');
    const address = email.trim().toLowerCase();

    let alert = await prisma.opportunityAlert.findUnique({ where: { opportunityId_email: { opportunityId, email: address } } });
    if (alert?.confirmedAt) return { status: 'ALREADY' };
    if (alert?.confirmSentAt && Date.now() - alert.confirmSentAt < CONFIRM_THROTTLE_MS) return { status: 'PENDING' };
    if (!alert) {
      alert = await prisma.opportunityAlert.create({ data: { opportunityId, email: address, token: crypto.randomBytes(24).toString('hex') } });
    }
    await EmailService.notifyOpportunityAlertConfirm({ to: address, title: opportunity.title, confirmUrl: pageUrl(opportunity, `&alerte_confirmer=${alert.token}`) });
    await prisma.opportunityAlert.update({ where: { id: alert.id }, data: { confirmSentAt: new Date() } });
    return { status: 'PENDING' };
  }

  static async findByToken(token) {
    const alert = typeof token === 'string' && /^[a-f0-9]{48}$/.test(token)
      ? await prisma.opportunityAlert.findUnique({ where: { token }, include: { opportunity: { select: { id: true, slug: true, title: true } } } })
      : null;
    if (!alert) throw new BadRequestError('Lien invalide ou déjà utilisé');
    return alert;
  }

  static async confirm(token) {
    const alert = await this.findByToken(token);
    if (!alert.confirmedAt) await prisma.opportunityAlert.update({ where: { id: alert.id }, data: { confirmedAt: new Date() } });
    return { title: alert.opportunity.title };
  }

  static async unsubscribe(token) {
    const alert = await this.findByToken(token);
    await prisma.opportunityAlert.delete({ where: { id: alert.id } });
    return { title: alert.opportunity.title };
  }

  // Nouvelle session (fiche dupliquée) : les personnes qui suivaient l'ancienne sont reprises
  static async carryOver(fromId, toId) {
    const alerts = await prisma.opportunityAlert.findMany({ where: { opportunityId: fromId, confirmedAt: { not: null } }, select: { email: true } });
    if (!alerts.length) return 0;
    const { count } = await prisma.opportunityAlert.createMany({
      data: alerts.map((a) => ({ opportunityId: toId, email: a.email, token: crypto.randomBytes(24).toString('hex'), confirmedAt: new Date(), announceSession: true })),
      skipDuplicates: true,
    });
    return count;
  }

  static async sendDueAlerts(now = new Date()) {
    const alerts = await prisma.opportunityAlert.findMany({
      where: {
        confirmedAt: { not: null },
        opportunity: { status: 'PUBLISHED' },
        OR: [
          { announceSession: true },
          { opportunity: { deadline: { gt: now, lte: new Date(now.getTime() + 7 * DAY) } } },
          { opportunity: { openingDate: { gte: new Date(now.getTime() - 3 * DAY), lte: now } } },
        ],
      },
      include: { opportunity: { select: { id: true, slug: true, title: true, organization: true, openingDate: true, deadline: true, officialUrl: true } } },
      orderBy: { createdAt: 'asc' },
    });

    let sent = 0;
    for (const alert of alerts) {
      const keys = dueEvents(alert, alert.opportunity, now);
      if (!keys.length) continue;
      if (sent >= MAX_PER_RUN) break;
      const o = alert.opportunity;
      const result = await EmailService.notifyOpportunityAlert({
        to: alert.email,
        kind: keys[0].split(':')[0],
        opportunity: o,
        url: pageUrl(o),
        unsubscribeUrl: pageUrl(o, `&alerte_arreter=${alert.token}`),
      });
      if (!result?.success) {
        logger.warn('Alerte annonce non envoyée', { alertId: alert.id, error: result?.error });
        continue;
      }
      sent += 1;
      // Les événements moins urgents du même passage sont considérés comme couverts
      await prisma.opportunityAlert.update({ where: { id: alert.id }, data: { sentKeys: { push: keys }, announceSession: false } });
    }
    return { due: alerts.length, sent };
  }
}

module.exports = OpportunityAlertService;
module.exports.dueEvents = dueEvents;
