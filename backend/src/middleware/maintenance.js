const jwt = require('jsonwebtoken');
const prisma = require('../config/database');
const RbacService = require('../services/rbacService');

// Mode maintenance : quand platform.maintenanceMode est actif, seuls
// l'authentification et les administrateurs (settings.manage) passent.
// Le paramètre est mis en cache 30 s pour éviter une requête SQL par appel.

const CACHE_TTL_MS = 30 * 1000;
let cache = {
  active: false,
  message: 'Notre équipe effectue actuellement une mise à niveau technique programmée pour optimiser la plateforme. Nous serons de retour très rapidement !',
  estimatedReturn: 'Bientôt de retour',
  at: 0,
};

async function getMaintenanceStatus() {
  if (Date.now() - cache.at < CACHE_TTL_MS) return cache;
  try {
    const settings = await prisma.setting.findMany({
      where: {
        key: {
          in: [
            'platform.maintenanceMode',
            'platform.maintenanceMessage',
            'platform.maintenanceEstimatedReturn',
          ],
        },
      },
      select: { key: true, value: true },
    });

    const map = {};
    for (const s of settings) {
      map[s.key] = s.value;
    }

    cache = {
      active: map['platform.maintenanceMode'] === 'true',
      message: map['platform.maintenanceMessage'] || 'Notre équipe effectue actuellement une mise à niveau technique programmée pour optimiser la plateforme. Nous serons de retour très rapidement !',
      estimatedReturn: map['platform.maintenanceEstimatedReturn'] || 'Bientôt de retour',
      at: Date.now(),
    };
    return cache;
  } catch (error) {
    // En cas de réveil de base ou latence temporaire, repli gracieux sans 500
    return cache;
  }
}

// À appeler quand un paramètre de maintenance change pour un effet immédiat
function resetMaintenanceCache() {
  cache = {
    ...cache,
    at: 0,
  };
}

// Routes toujours accessibles (connexion et paramètres pour sortir du mode)
const ALWAYS_ALLOWED = [
  '/auth/login',
  '/auth/register',
  '/auth/refresh',
  '/auth/me',
  '/auth/logout',
  '/settings',
];

const maintenanceMode = async (req, res, next) => {
  if (ALWAYS_ALLOWED.some(p => req.path === p || req.path.startsWith(p + '/'))) {
    return next();
  }

  try {
    const maint = await getMaintenanceStatus();
    if (!maint.active) return next();

    // Les administrateurs autorisés passent : ils doivent pouvoir tester et intervenir
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.split(' ')[1];
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      const user = await prisma.user.findUnique({
        where: { id: payload.id },
        select: { id: true, isActive: true },
      });
      if (user?.isActive) {
        const { permissions } = await RbacService.getUserAdminContext(user.id);
        if (permissions.includes('*') || permissions.includes('settings.manage')) {
          return next();
        }
      }
    }
  } catch (error) {
    if (error.code?.startsWith('P') || error.name === 'PrismaClientInitializationError') {
      return next(error);
    }
    // Token invalide : traité comme visiteur
  }

  const maint = await getMaintenanceStatus();
  return res.status(503).json({
    success: false,
    code: 'MAINTENANCE',
    message: maint.message,
    estimatedReturn: maint.estimatedReturn,
  });
};

module.exports = { maintenanceMode, resetMaintenanceCache };
