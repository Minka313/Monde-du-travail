const prisma = require('../config/database');

// Indicateurs clés de l'admin (onglet « Profils visiteurs ») : parcours d'orientation,
// concours les plus consultés, alertes, application installée et e-mails envoyés.
const count = (rows, type) => rows.find((r) => r.type === type)?.count || 0;

class KeyIndicatorsService {
  static async get(since) {
    const [eventRows, riasecMembers, newMembers, topOpportunities, alerts, emailRows, recentEmails] = await Promise.all([
      prisma.$queryRaw`SELECT event_type AS type, COUNT(*)::int AS count FROM analytics_events
        WHERE created_at >= ${since} AND event_type IN ('riasec_start', 'riasec_result', 'riasec_pdf', 'riasec_share',
          'opportunity_view', 'opportunity_ics', 'opportunity_alert', 'pwa_prompt', 'pwa_install', 'pwa_installed', 'pwa_dismiss',
          'account_nudge_view', 'account_nudge_click', 'account_nudge_dismiss', 'account_created', 'membership_requested')
        GROUP BY 1`,
      // Inscriptions de la période dont l'appareil avait d'abord fait le test RIASEC
      prisma.$queryRaw`SELECT COUNT(DISTINCT u.id)::int AS count FROM users u
        JOIN visitor_profiles vp ON vp."userId" = u.id
        JOIN analytics_events e ON e.session_id = vp."sessionId" AND e.event_type = 'riasec_result' AND e.created_at <= u."createdAt"
        WHERE u."createdAt" >= ${since}`,
      prisma.user.count({ where: { createdAt: { gte: since } } }),
      prisma.$queryRaw`SELECT e.entity_id AS id, o.title, o.slug, COUNT(*)::int AS count FROM analytics_events e
        JOIN opportunities o ON o.id = e.entity_id
        WHERE e.created_at >= ${since} AND e.event_type = 'opportunity_view'
        GROUP BY 1, 2, 3 ORDER BY count DESC LIMIT 8`,
      Promise.all([
        prisma.opportunityAlert.count({ where: { confirmedAt: { not: null } } }),
        prisma.opportunityAlert.count({ where: { createdAt: { gte: since } } }),
        prisma.opportunityAlert.count({ where: { createdAt: { gte: since }, confirmedAt: { not: null } } }),
      ]),
      prisma.auditLog.groupBy({ by: ['action'], where: { module: 'Email', createdAt: { gte: since } }, _count: true }),
      prisma.auditLog.findMany({
        where: { module: 'Email' },
        orderBy: { createdAt: 'desc' },
        take: 25,
        select: { createdAt: true, action: true, metadata: true },
      }),
    ]);

    const started = count(eventRows, 'riasec_start');
    const completed = count(eventRows, 'riasec_result');
    const [activeAlerts, requestedAlerts, confirmedAlerts] = alerts;
    const emails = Object.fromEntries(emailRows.map((r) => [r.action, r._count]));

    return {
      riasec: {
        started,
        completed,
        completionRate: started ? Math.min(completed / started, 1) : 0,
        pdf: count(eventRows, 'riasec_pdf'),
        shares: count(eventRows, 'riasec_share'),
        thenMembers: riasecMembers[0]?.count || 0,
        newMembers,
      },
      opportunities: {
        views: count(eventRows, 'opportunity_view'),
        calendar: count(eventRows, 'opportunity_ics'),
        top: topOpportunities.map((r) => ({ id: r.id, slug: r.slug, label: r.title, count: r.count })),
      },
      alerts: { active: activeAlerts, requested: requestedAlerts, confirmed: confirmedAlerts },
      accounts: {
        nudgeViews: count(eventRows, 'account_nudge_view'),
        nudgeClicks: count(eventRows, 'account_nudge_click'),
        nudgeDismissed: count(eventRows, 'account_nudge_dismiss'),
        created: count(eventRows, 'account_created'),
        membershipRequests: count(eventRows, 'membership_requested'),
        newVisitorAccounts: await prisma.user.count({ where: { role: 'VISITOR', createdAt: { gte: since } } }),
      },
      mentoring: {
        activePairs: await prisma.mentorship.count({ where: { status: 'ACTIVE' } }),
        sessionsDone: await prisma.mentorSession.count({ where: { status: 'DONE', scheduledAt: { gte: since } } }),
        requests: await prisma.mentorRequest.count({ where: { createdAt: { gte: since } } }),
        applications: await prisma.mentorApplication.count({ where: { createdAt: { gte: since } } }),
        ...(await prisma.mentorSession.aggregate({ where: { feedbackAt: { gte: since } }, _avg: { menteeRating: true }, _count: { menteeRating: true } })
          .then((r) => ({ averageRating: r._count.menteeRating ? Math.round(r._avg.menteeRating * 10) / 10 : null, ratingsCount: r._count.menteeRating }))),
      },
      app: {
        prompts: count(eventRows, 'pwa_prompt'),
        accepted: count(eventRows, 'pwa_install'),
        installed: count(eventRows, 'pwa_installed'),
        dismissed: count(eventRows, 'pwa_dismiss'),
      },
      emails: {
        sent: emails['email.sent'] || 0,
        failed: emails['email.failed'] || 0,
        recent: recentEmails.map((e) => ({
          at: e.createdAt,
          ok: e.action === 'email.sent',
          to: (e.metadata?.to || []).join(', '),
          subject: e.metadata?.subject || '',
          mode: e.metadata?.mode || null,
          error: e.metadata?.error || null,
        })),
      },
    };
  }
}

module.exports = KeyIndicatorsService;
