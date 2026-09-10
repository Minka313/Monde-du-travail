require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cookieParser = require('cookie-parser');
const logger = require('./utils/logger');
const errorHandler = require('./middleware/errorHandler');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const eventRoutes = require('./routes/events');
const jobRoutes = require('./routes/jobs');
const formationRoutes = require('./routes/formations');
const forumRoutes = require('./routes/forum');
const adminRoutes = require('./routes/admin');
const blogRoutes = require('./routes/blog');
const rbacRoutes = require('./routes/rbac');
const approvalRoutes = require('./routes/approvals');
const superDashboardRoutes = require('./routes/superDashboard');
const settingsRoutes = require('./routes/settings');
const twoFactorRoutes = require('./routes/twoFactorRoutes');
const prisma = require('./config/database');
const app = express();

// ===== MIDDLEWARES GLOBAUX =====

// Sécurité des headers HTTP
app.use(helmet());

// CORS
const isProduction = process.env.NODE_ENV === 'production';
const allowedOrigins = isProduction
  ? [process.env.FRONTEND_URL || 'http://localhost:3000']
  : ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:5500', 'http://localhost:5501', 'http://127.0.0.1:3000', 'http://127.0.0.1:5500', 'null'];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Origin not allowed by CORS'));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

// Fix CORS for file:// protocol in development
if (!isProduction) {
  app.use((req, res, next) => {
    const origin = req.headers.origin;
    if (!origin || origin === 'null' || origin === 'file://') {
      res.header('Access-Control-Allow-Origin', origin || 'null');
      res.header('Access-Control-Allow-Credentials', 'true');
      res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    }
    next();
  });
}

// Limitation du taux de requêtes
// 500 requêtes / 15 min : une navigation normale du site public fait
// 5-10 appels par page, 100 était trop bas pour la production.
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 500,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Trop de requêtes, veuillez réessayer plus tard.' },
});
app.use('/api/', limiter);

// Limitation stricte pour l'authentification
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Trop de tentatives de connexion, veuillez réessayer dans 15 minutes.' },
});

// Parsing du corps de la requête
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());

// Mode maintenance (paramètre platform.maintenanceMode, bypass admin)
const { maintenanceMode } = require('./middleware/maintenance');
app.use('/api', maintenanceMode);

// ===== ROUTES =====

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// API Routes
app.use('/api/auth', authLimiter, authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/formations', formationRoutes);
app.use('/api/forum', forumRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/rbac', rbacRoutes);
app.use('/api/approvals', approvalRoutes);
app.use('/api/super-dashboard', superDashboardRoutes);
app.use('/api/settings', settingsRoutes);
app.use('/api/admin/2fa', twoFactorRoutes);

// ===== GESTION DES ERREURS =====

// Route non trouvée
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} non trouvée`,
  });
});

// Gestionnaire d'erreurs global
app.use(errorHandler);

// ===== DÉMARRAGE DU SERVEUR =====

const PORT = process.env.PORT || 5000;

if (require.main === module) {
  const server = app.listen(PORT, () => {
    logger.info(`Serveur démarré sur le port ${PORT}`, {
      env: process.env.NODE_ENV,
      nodeEnv: process.env.NODE_ENV,
    });
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
  });

  // Graceful shutdown
  const shutdown = () => {
    console.log('\nArrêt du serveur...');
    server.close(async () => {
      await prisma.$disconnect();
      console.log('Serveur arrêté');
      process.exit(0);
    });
  };

  process.on('SIGINT', () => shutdown('SIGINT'));
  process.on('SIGTERM', () => shutdown('SIGTERM'));
}

module.exports = { app, prisma };