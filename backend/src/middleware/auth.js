const jwt = require('jsonwebtoken');
const { UnauthorizedError, ForbiddenError } = require('../utils/errors');
const { authorize } = require('./rbac');
const prisma = require('../config/database');
const RbacService = require('../services/rbacService');
const AuditService = require('../services/auditService');


// Un compte est considéré administrateur s'il a le rôle de base ADMIN/ULTRA_ADMIN
// OU au moins un rôle admin effectif dans la table RBAC.
const isAdminAccount = (user) =>
  ['ADMIN', 'ULTRA_ADMIN'].includes(user?.role) || (user?.adminRoles || []).length > 0;

// Vérifie que le token JWT est présent et valide
const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedError("Token d'authentification manquant");
    }

    const token = authHeader.split(' ')[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    const user = await prisma.user.findUnique({
      where: { id: payload.id },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        isActive: true,
        isVerified: true,
      },
    });

    if (!user) {
      throw new UnauthorizedError('Utilisateur introuvable');
    }

    if (!user.isActive) {
      throw new ForbiddenError('Compte désactivé');
    }

    req.user = user;
    const { permissions, adminRoles } = await RbacService.getUserAdminContext(user.id);
    req.user.permissions = permissions;
    req.user.adminRoles = adminRoles;
    next();
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      return next(new UnauthorizedError('Token invalide'));
    }
    if (error.name === 'TokenExpiredError') {
      return next(new UnauthorizedError('Token expiré'));
    }
    next(error);
  }
};

// Audit middleware pour tracer les accès admin
const auditAdminAccess = async (req, res, next) => {
  try {
    if (isAdminAccount(req.user)) {
      await AuditService.log({
        userId: req.user.id,
        action: 'admin.access',
        module: req.path.split('/')[2] || 'admin',
        resource: req.method + ' ' + req.path,
        ipAddress: req.ip || req.connection?.remoteAddress,
        userAgent: req.get('user-agent'),
        result: 'GRANTED',
      });
    }
  } catch (error) {
    // Ne pas bloquer la requête si l'audit échoue
    console.error('Audit log error:', error);
  }
  next();
};

// Vérifie que l'utilisateur est admin (tous rôles administratifs)
const authorizeAdmin = (req, res, next) => {
  if (!isAdminAccount(req.user)) {
    return next(new ForbiddenError('Accès réservé aux administrateurs'));
  }
  next();
};

// Vérifie que l'utilisateur est ULTRA_ADMIN
const authorizeUltraAdmin = (req, res, next) => {
  if (req.user.role !== 'ULTRA_ADMIN') {
    return next(new ForbiddenError('Accès réservé au super-administrateur'));
  }
  next();
};

// Vérifie que l'utilisateur a un rôle admin approuvé
const requireApproval = async (req, res, next) => {
  try {
    if (req.user.role === 'ULTRA_ADMIN' || req.user.role === 'ADMIN') {
      return next();
    }

    const effectiveRoles = await prisma.userAdminRole.count({
      where: {
        userId: req.user.id,
        isActive: true,
        status: 'APPROVED',
        OR: [
          { expiresAt: null },
          { expiresAt: { gt: new Date() } },
        ],
      },
    });

    if (effectiveRoles === 0) {
      return next(new ForbiddenError('Votre accès administratif n\'est pas approuvé ou a expiré'));
    }

    next();
  } catch (error) {
    next(error);
  }
};

// Vérifie que l'utilisateur est membre ou admin
const authorizeMember = (req, res, next) => {
  if (req.user.role === 'VISITOR' && (req.user.adminRoles || []).length === 0) {
    return next(new ForbiddenError('Accès réservé aux membres'));
  }
  next();
};

// Optionnel : utilisateur connecté OU visiteur
const optionalAuth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.split(' ')[1];
      req.user = jwt.verify(token, process.env.JWT_SECRET);
    }
  } catch (error) {
    // Silently ignore invalid tokens for optional auth
  }
  next();
};

module.exports = {
  authenticate,
  authorizeAdmin,
  authorizeUltraAdmin,
  authorizeMember,
  requireApproval,
  optionalAuth,
  authorize,
  auditAdminAccess,
};