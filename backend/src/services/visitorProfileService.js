/**
 * @file visitorProfileService.js
 * @description Profils anonymes des visiteurs : situation déclarée (facultative),
 * localisation approximative fournie par l'hébergeur (pays, région, ville ; l'adresse IP
 * n'est jamais stockée), fréquentation (visites, pages, temps passé) et tableau de bord.
 */

const prisma = require('../config/database');
const { BadRequestError } = require('../utils/errors');
const AnalyticsService = require('./analyticsService');
const logger = require('../utils/logger');

const STATUSES = ['Collégien', 'Lycéen', 'Étudiant', 'Jeune diplômé', 'Professionnel', 'En reconversion', 'Parent', 'Enseignant ou conseiller'];
const LEVELS = ['Collège', 'Seconde ou Première', 'Terminale / Bac', 'Bac+1 à Bac+3', 'Bac+4 et plus', 'Formation professionnelle', 'Autre'];
const INTERESTS = [
  'Numérique & IA', 'Santé', 'Finance & banque', 'Entrepreneuriat & commerce', 'BTP & architecture',
  'Agriculture & agroalimentaire', 'Énergie & environnement', 'Communication & médias', 'Éducation & social',
  'Industrie & ingénierie', 'Droit & administration', 'Arts & culture', 'Tourisme & hôtellerie',
];
const DEVICES = ['mobile', 'tablet', 'desktop'];
// Une nouvelle visite commence après 30 minutes d'inactivité
const VISIT_GAP_MS = 30 * 60 * 1000;
const MAX_SECONDS_PER_PAGE = 30 * 60;
const SESSION_PATTERN = /^[A-Za-z0-9_-]{8,128}$/;

function cleanHeader(value, max) {
  if (!value || typeof value !== 'string') return null;
  try {
    return decodeURIComponent(value).trim().slice(0, max) || null;
  } catch (_) {
    return value.trim().slice(0, max) || null;
  }
}

/** Localisation approximative transmise par Vercel (aucune adresse IP conservée). */
function geoFromHeaders(headers = {}) {
  const country = cleanHeader(headers['x-vercel-ip-country'], 2);
  return {
    country: country && /^[A-Z]{2}$/.test(country.toUpperCase()) ? country.toUpperCase() : null,
    region: cleanHeader(headers['x-vercel-ip-country-region'], 80),
    city: cleanHeader(headers['x-vercel-ip-city'], 120),
  };
}

const validSession = (sessionId) => typeof sessionId === 'string' && SESSION_PATTERN.test(sessionId);

class VisitorProfileService {
  /** Une page vue : crée ou met à jour le profil (visites, pages, localisation). */
  static async recordVisit({ sessionId, userId = null, device = null, headers = {} }) {
    if (!validSession(sessionId)) return null;
    try {
      const geo = geoFromHeaders(headers);
      const now = new Date();
      const existing = await prisma.visitorProfile.findUnique({ where: { sessionId } });
      const deviceValue = DEVICES.includes(device) ? device : null;
      if (!existing) {
        return await prisma.visitorProfile.create({
          data: { sessionId, userId, device: deviceValue, pagesCount: 1, ...geo },
        });
      }
      const newVisit = now - existing.lastSeenAt > VISIT_GAP_MS;
      return await prisma.visitorProfile.update({
        where: { sessionId },
        data: {
          lastSeenAt: now,
          pagesCount: { increment: 1 },
          ...(newVisit ? { visitsCount: { increment: 1 } } : {}),
          ...(userId ? { userId } : {}),
          ...(deviceValue ? { device: deviceValue } : {}),
          ...(geo.country ? geo : {}),
        },
      });
    } catch (error) {
      // Le suivi ne doit jamais gêner la navigation
      logger.warn(`[Visiteurs] Visite non enregistrée : ${error.message}`);
      return null;
    }
  }

  /** Temps passé sur une page (envoyé à la sortie de page). */
  static async recordEngagement({ sessionId, seconds }) {
    if (!validSession(sessionId)) return;
    const value = Math.min(Math.max(Math.round(Number(seconds) || 0), 0), MAX_SECONDS_PER_PAGE);
    if (!value) return;
    await prisma.visitorProfile.updateMany({ where: { sessionId }, data: { totalSeconds: { increment: value } } });
  }

  /** Profil déclaré par le visiteur (toutes les réponses sont facultatives). */
  static async saveProfile({ sessionId, userId = null, status, educationLevel, interests, headers = {} }) {
    if (!validSession(sessionId)) throw new BadRequestError('Session invalide');
    if (status && !STATUSES.includes(status)) throw new BadRequestError('Situation inconnue');
    if (educationLevel && !LEVELS.includes(educationLevel)) throw new BadRequestError('Niveau inconnu');
    const cleanInterests = [...new Set((Array.isArray(interests) ? interests : []).filter((i) => INTERESTS.includes(i)))].slice(0, 3);

    const data = {
      status: status || null,
      educationLevel: educationLevel || null,
      interests: cleanInterests,
      profiledAt: new Date(),
      ...(userId ? { userId } : {}),
    };
    const profile = await prisma.visitorProfile.upsert({
      where: { sessionId },
      update: data,
      create: { sessionId, pagesCount: 0, ...geoFromHeaders(headers), ...data },
    });
    // Les événements de parcours restent attribués à la situation déclarée
    if (status) await AnalyticsService.saveUserProfile(sessionId, status);
    return { status: profile.status, educationLevel: profile.educationLevel, interests: profile.interests };
  }

  // Dernier profil déclaré par un membre connecté (sur n'importe quel appareil)
  static async getForUser(userId) {
    const profile = await prisma.visitorProfile.findFirst({
      where: { userId, profiledAt: { not: null } },
      orderBy: { profiledAt: 'desc' },
      select: { status: true, educationLevel: true, interests: true, profiledAt: true },
    });
    return profile || null;
  }

  static options() {
    return { statuses: STATUSES, levels: LEVELS, interests: INTERESTS };
  }

  /**
   * Tableau de bord sur une période (7 à 365 jours) : fréquentation, profils,
   * localisation et contenus consultés par profil.
   */
  static async getDashboard({ days = 30 } = {}) {
    const period = Math.min(Math.max(parseInt(days, 10) || 30, 1), 365);
    const since = new Date(Date.now() - period * 86400000);
    const active = { lastSeenAt: { gte: since } };

    const [
      visitors, newVisitors, returning, profiled, engagement,
      byStatus, byLevel, byCountry, byCity, byDevice, interestRows, contentRows, pdfRows, riasecRows,
    ] = await Promise.all([
      prisma.visitorProfile.count({ where: active }),
      prisma.visitorProfile.count({ where: { firstSeenAt: { gte: since } } }),
      prisma.visitorProfile.count({ where: { ...active, visitsCount: { gt: 1 } } }),
      prisma.visitorProfile.count({ where: { ...active, status: { not: null } } }),
      prisma.visitorProfile.aggregate({ where: { ...active, totalSeconds: { gt: 0 } }, _avg: { totalSeconds: true, pagesCount: true }, _count: true }),
      prisma.visitorProfile.groupBy({ by: ['status'], where: { ...active, status: { not: null } }, _count: true }),
      prisma.visitorProfile.groupBy({ by: ['educationLevel'], where: { ...active, educationLevel: { not: null } }, _count: true }),
      prisma.visitorProfile.groupBy({ by: ['country'], where: { ...active, country: { not: null } }, _count: true }),
      prisma.visitorProfile.groupBy({ by: ['city', 'country'], where: { ...active, city: { not: null } }, _count: true }),
      prisma.visitorProfile.groupBy({ by: ['device'], where: { ...active, device: { not: null } }, _count: true }),
      prisma.$queryRaw`SELECT interest, COUNT(*)::int AS count FROM visitor_profiles, unnest(interests) AS interest
        WHERE "lastSeenAt" >= ${since} GROUP BY interest ORDER BY count DESC`,
      prisma.$queryRaw`SELECT COALESCE(user_profile, 'Non renseigné') AS profile, event_type AS type, entity_id AS id, COUNT(*)::int AS count
        FROM analytics_events
        WHERE created_at >= ${since} AND event_type IN ('job_view', 'formation_view') AND entity_id IS NOT NULL
        GROUP BY 1, 2, 3 ORDER BY count DESC LIMIT 400`,
      prisma.$queryRaw`SELECT event_type AS type, COUNT(*)::int AS count FROM analytics_events
        WHERE created_at >= ${since} AND event_type IN ('job_pdf', 'formation_pdf') GROUP BY 1`,
      // Codes de Holland obtenus au test d'orientation (test-riasec.html)
      prisma.$queryRaw`SELECT entity_id AS code, COUNT(*)::int AS count FROM analytics_events
        WHERE created_at >= ${since} AND event_type = 'riasec_result' AND entity_id ~ '^[RIASEC]{3}$'
        GROUP BY 1 ORDER BY count DESC`,
    ]);

    const sorted = (rows, key) => rows
      .map((r) => ({ label: r[key], count: r._count }))
      .sort((a, b) => b.count - a.count);

    // Titres lisibles des formations ; les métiers sont identifiés par leur slug
    const formationSlugs = [...new Set(contentRows.filter((r) => r.type === 'formation_view').map((r) => r.id))];
    const formations = formationSlugs.length
      ? await prisma.formation.findMany({ where: { slug: { in: formationSlugs } }, select: { slug: true, title: true } })
      : [];
    const formationTitle = Object.fromEntries(formations.map((f) => [f.slug, f.title]));
    const titleOf = (row) => (row.type === 'formation_view'
      ? formationTitle[row.id] || row.id
      : row.id.replace(/-/g, ' ').replace(/^./, (c) => c.toUpperCase()));

    const byProfile = {};
    contentRows.forEach((row) => {
      const bucket = (byProfile[row.profile] = byProfile[row.profile] || { profile: row.profile, jobs: [], formations: [], views: 0 });
      bucket.views += row.count;
      const target = row.type === 'job_view' ? bucket.jobs : bucket.formations;
      if (target.length < 5) target.push({ id: row.id, title: titleOf(row), count: row.count });
    });

    return {
      days: period,
      key: await require('./keyIndicatorsService').get(since),
      kpis: {
        visitors,
        newVisitors,
        returning,
        returningRate: visitors ? returning / visitors : 0,
        profiled,
        profiledRate: visitors ? profiled / visitors : 0,
        avgSeconds: Math.round(engagement._avg.totalSeconds || 0),
        avgPages: Math.round((engagement._avg.pagesCount || 0) * 10) / 10,
        pdfDownloads: pdfRows.reduce((n, r) => n + r.count, 0),
      },
      byStatus: sorted(byStatus, 'status'),
      byLevel: sorted(byLevel, 'educationLevel'),
      byInterest: interestRows.map((r) => ({ label: r.interest, count: r.count })),
      byCountry: sorted(byCountry, 'country').slice(0, 10),
      byCity: byCity.map((r) => ({ label: `${r.city}${r.country ? ` (${r.country})` : ''}`, count: r._count }))
        .sort((a, b) => b.count - a.count).slice(0, 10),
      byDevice: sorted(byDevice, 'device'),
      pdf: Object.fromEntries(pdfRows.map((r) => [r.type, r.count])),
      contentByProfile: Object.values(byProfile).sort((a, b) => b.views - a.views),
      riasec: {
        tests: riasecRows.reduce((n, r) => n + r.count, 0),
        byType: Object.entries(riasecRows.reduce((acc, r) => ({ ...acc, [r.code[0]]: (acc[r.code[0]] || 0) + r.count }), {}))
          .map(([label, count]) => ({ label, count })).sort((a, b) => b.count - a.count),
        topCodes: riasecRows.slice(0, 8).map((r) => ({ label: r.code, count: r.count })),
      },
    };
  }
}

VisitorProfileService.STATUSES = STATUSES;
VisitorProfileService.LEVELS = LEVELS;
VisitorProfileService.INTERESTS = INTERESTS;
VisitorProfileService._internal = { geoFromHeaders };
module.exports = VisitorProfileService;
