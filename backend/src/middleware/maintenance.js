const jwt = require('jsonwebtoken');
const prisma = require('../config/database');
const RbacService = require('../services/rbacService');

// Mode maintenance : quand platform.maintenanceMode est actif, seuls
// l'authentification et les administrateurs (settings.manage) passent.
// Le paramètre est mis en cache 30 s pour éviter une requête SQL par appel.

const CACHE_TTL_MS = 30 * 1000;
let cache = { value: false, at: 0 };

async function isMaintenanceActive() {
  if (Date.now() - cache.at < CACHE_TTL_MS) return cache.value;
  const setting = await prisma.setting.findUnique({
    where: { key: 'platform.maintenanceMode' },
    select: { value: true },
  });
  cache = { value: setting?.value === 'true', at: Date.now() };
  return cache.value;
}

// À appeler quand le paramètre change pour un effet immédiat
function resetMaintenanceCache() {
  cache = { value: false, at: 0 };
}

// Routes toujours accessibles (connexion et paramètres pour sortir du mode)
const ALWAYS_ALLOWED = [
  '/api/auth/login',
  '/api/auth/refresh',
  '/api/auth/me',
  '/api/auth/logout',
  '/api/settings',
];

const maintenanceMode = async (req, res, next) => {
  try {
    if (!(await isMaintenanceActive())) return next();

    if (ALWAYS_ALLOWED.some(p => req.path === p || req.path.startsWith(p + '/'))) {
      return next();
    }

    // Les administrateurs autorisés passent : ils doivent pouvoir intervenir
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
    // Token invalide ou erreur : traité comme visiteur
  }

  return res.status(503).json({
    success: false,
    code: 'MAINTENANCE',
    message: 'La plateforme est en cours de maintenance. Revenez bientôt !',
  });
};

module.exports = { maintenanceMode, resetMaintenanceCache };
