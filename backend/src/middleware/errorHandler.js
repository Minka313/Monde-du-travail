const logger = require('../utils/logger');
const { BadRequestError, NotFoundError } = require('../utils/errors');

const errorHandler = (err, req, res, next) => {
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
  } else if (err.name === 'ZodError') {
    statusCode = 400;
    message = err.errors?.map((e) => e.message).join(', ') || 'Validation invalide';
  }

  res.status(statusCode).json({
    success: false,
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};

module.exports = errorHandler;