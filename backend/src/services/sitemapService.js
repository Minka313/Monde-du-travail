const prisma = require('../config/database');

// Pages publiques indexables (les pages de compte, d'admin et de visio sont exclues)
const STATIC_PAGES = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/metiers', changefreq: 'weekly', priority: '0.9' },
  { path: '/opportunites', changefreq: 'daily', priority: '0.8' },
  { path: '/formations', changefreq: 'weekly', priority: '0.8' },
  { path: '/test-riasec', changefreq: 'monthly', priority: '0.8' },
  { path: '/blog', changefreq: 'daily', priority: '0.8' },
  { path: '/forum', changefreq: 'daily', priority: '0.7' },
  { path: '/about', changefreq: 'monthly', priority: '0.5' },
  { path: '/guide', changefreq: 'monthly', priority: '0.5' },
  { path: '/legal', changefreq: 'yearly', priority: '0.3' },
];

// Les fiches métiers sont rendues depuis le catalogue d'orientation, indexé par slug.
// Un métier dont l'id est un cuid (créé dans l'admin, absent du catalogue) n'a pas
// de fiche consultable : on ne l'envoie pas aux moteurs de recherche.
const CUID_PATTERN = /^c[a-z0-9]{24}$/;
const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function escapeXml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function urlEntry(loc, { lastmod, changefreq, priority } = {}) {
  return [
    '  <url>',
    `    <loc>${escapeXml(loc)}</loc>`,
    lastmod ? `    <lastmod>${new Date(lastmod).toISOString().slice(0, 10)}</lastmod>` : null,
    changefreq ? `    <changefreq>${changefreq}</changefreq>` : null,
    priority ? `    <priority>${priority}</priority>` : null,
    '  </url>',
  ].filter(Boolean).join('\n');
}

class SitemapService {
  /**
   * Construit le sitemap XML à partir du contenu publié.
   * @param {string} baseUrl origine publique, sans slash final (ex. https://exemple.com)
   */
  static async build(baseUrl) {
    const [posts, jobs, formations, opportunities] = await Promise.all([
      prisma.post.findMany({
        where: { status: 'PUBLISHED' },
        select: { slug: true, updatedAt: true },
        orderBy: { updatedAt: 'desc' },
      }),
      prisma.job.findMany({
        where: { status: 'PUBLISHED' },
        select: { id: true, updatedAt: true },
        orderBy: { updatedAt: 'desc' },
      }),
      prisma.formation.findMany({
        where: { status: 'PUBLISHED', slug: { not: null } },
        select: { slug: true, updatedAt: true },
        orderBy: { updatedAt: 'desc' },
      }),
      prisma.opportunity.findMany({
        where: { status: 'PUBLISHED', slug: { not: null } },
        select: { slug: true, updatedAt: true },
        orderBy: { updatedAt: 'desc' },
      }),
    ]);

    const entries = [
      ...STATIC_PAGES.map((page) => urlEntry(`${baseUrl}${page.path}`, page)),
      ...posts.map((post) => urlEntry(
        `${baseUrl}/blog-post.html?slug=${encodeURIComponent(post.slug)}`,
        { lastmod: post.updatedAt, changefreq: 'monthly', priority: '0.6' }
      )),
      ...jobs
        .filter((job) => SLUG_PATTERN.test(job.id) && !CUID_PATTERN.test(job.id))
        .map((job) => urlEntry(
          `${baseUrl}/metier?slug=${encodeURIComponent(job.id)}`,
          { lastmod: job.updatedAt, changefreq: 'monthly', priority: '0.6' }
        )),
      ...formations
        .filter((formation) => SLUG_PATTERN.test(formation.slug))
        .map((formation) => urlEntry(
          `${baseUrl}/formation-detail?slug=${encodeURIComponent(formation.slug)}`,
          { lastmod: formation.updatedAt, changefreq: 'monthly', priority: '0.7' }
        )),
      ...opportunities
        .filter((opportunity) => SLUG_PATTERN.test(opportunity.slug))
        .map((opportunity) => urlEntry(
          `${baseUrl}/opportunite?slug=${encodeURIComponent(opportunity.slug)}`,
          { lastmod: opportunity.updatedAt, changefreq: 'weekly', priority: '0.7' }
        )),
    ];

    return [
      '<?xml version="1.0" encoding="UTF-8"?>',
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
      ...entries,
      '</urlset>',
      '',
    ].join('\n');
  }
}

module.exports = SitemapService;
