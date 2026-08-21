const { z } = require('zod');
const { BadRequestError } = require('../utils/errors');
const logger = require('../utils/logger');

const validate = (schema) => {
  return (req, res, next) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        logger.debug('Validation failed', { body: req.body, errors: error.errors });
        const message = error.errors.map((e) => `${e.path.join('.')}: ${e.message}`).join(', ');
        return next(new BadRequestError(message));
      }
      next(error);
    }
  };
};

module.exports = validate;