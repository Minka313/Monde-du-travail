const logger = require('../utils/logger');
const { BadRequestError, NotFoundError } = require('../utils/errors');

const errorHandler = (err, req, res, next) => {
  if (!err) {
    return next();
  }

  let error = { ...err };
  error.message = err.message || 'Erreur serveur interne';

  logger.error('Erreur serveur', {
    error: err.message,
    stack: err.stack,
    url: req?.url,
    method: req?.method,
    ip: req?.ip,
  });

  if (err.code === 'P2002') {
    error = new BadRequestError('Cette ressource existe déjà');
  }
  if (err.code === 'P2025') {
    error = new NotFoundError('Ressource non trouvée');
  }

  if (err.name === 'ZodError') {
    const message = err.errors?.map((e) => e.message).join(', ') || 'Validation invalide';
    error = new BadRequestError(message);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    message: error.message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};

module.exports = errorHandler;