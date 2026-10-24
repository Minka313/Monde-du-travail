const logger = require('../utils/logger');
const { captureServerError } = require('../utils/monitoring');

const errorHandler = async (err, req, res, next) => {
  if (!err) {
    return next();
  }

  let statusCode = err.statusCode || 500;
  let message = err.message || 'Erreur serveur interne';

  logger.error('Erreur serveur', {
    error: err.message,
    stack: err.stack,
    url: req?.url,
    method: req?.method,
    ip: req?.ip,
  });

  if (err.code === 'P2002') {
    statusCode = 400;
    message = 'Cette ressource existe déjà';
  } else if (err.code === 'P2025') {
    statusCode = 404;
    message = 'Ressource non trouvée';
  } else if (err.type === 'entity.too.large') {
    // Corps JSON trop gros (ex. ancienne page profil qui envoyait la photo en texte)
    statusCode = 413;
    message = 'Envoi trop volumineux. Recharge la page (Ctrl+Maj+R sur ordinateur) puis réessaie.';
  } else if (err.name === 'ZodError') {
    statusCode = 400;
    message = err.errors?.map((e) => e.message).join(', ') || 'Validation invalide';
  }

  // Seules les erreurs inattendues (5xx) remontent au suivi
  if (statusCode >= 500) {
    await captureServerError(err, req);
    // En production, le message brut d'une erreur imprévue (Prisma, SDK...) peut
    // révéler des détails internes : seul un message prévu par le code est renvoyé.
    if (process.env.NODE_ENV === 'production' && !err.isOperational) {
      message = 'Erreur serveur interne';
    }
  }

  res.status(statusCode).json({
    success: false,
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};

module.exports = errorHandler;