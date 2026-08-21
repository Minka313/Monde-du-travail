const bcrypt = require('bcrypt');
const prisma = require('../config/database');

// Double confirmation des actions critiques : la requête doit porter le mot
// de passe de l'appelant dans l'en-tête `x-confirm-password`.
// Réponses distinctes pour que le frontend puisse afficher l'invite adaptée :
// - REAUTH_REQUIRED : en-tête absent
// - REAUTH_INVALID  : mot de passe incorrect
const requireReauth = async (req, res, next) => {
  try {
    const password = req.get('x-confirm-password');

    if (!password) {
      return res.status(403).json({
        success: false,
        code: 'REAUTH_REQUIRED',
        message: 'Confirmation requise : renseignez votre mot de passe pour effectuer cette action critique.',
      });
    }

    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: { password: true },
    });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(403).json({
        success: false,
        code: 'REAUTH_INVALID',
        message: 'Mot de passe de confirmation incorrect.',
      });
    }

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = requireReauth;
