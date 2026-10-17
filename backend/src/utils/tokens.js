const crypto = require('crypto');
const jwt = require('jsonwebtoken');

/**
 * Empreinte courte du hash de mot de passe, embarquée dans les jetons (claim `pv`).
 * Dès que le mot de passe change, l'empreinte change : toutes les sessions ouvertes
 * avec l'ancien mot de passe deviennent invalides, sans table ni colonne supplémentaire.
 */
function passwordFingerprint(passwordHash) {
  return crypto.createHash('sha256').update(String(passwordHash)).digest('hex').slice(0, 16);
}

/**
 * Indique si le jeton correspond toujours au mot de passe actuel.
 * Les jetons émis avant l'introduction du claim `pv` restent acceptés jusqu'à leur
 * expiration naturelle (transition sans déconnexion massive).
 */
function matchesPassword(payload, passwordHash) {
  return payload.pv === undefined || payload.pv === passwordFingerprint(passwordHash);
}

function signAccessToken(user) {
  return jwt.sign(
    { id: user.id, email: user.email, role: user.role, pv: passwordFingerprint(user.password) },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRE || '7d' }
  );
}

function signRefreshToken(user) {
  return jwt.sign(
    { id: user.id, pv: passwordFingerprint(user.password) },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: process.env.JWT_REFRESH_EXPIRE || '30d' }
  );
}

/**
 * Vérifie un jeton d'accès.
 * Les jetons à usage restreint (ex. scope '2fa_verification', émis après le seul
 * mot de passe) sont signés avec la même clé : ils doivent être refusés ici,
 * sinon ils ouvriraient la session sans le code 2FA.
 */
function verifyAccessToken(token) {
  const payload = jwt.verify(token, process.env.JWT_SECRET);
  if (payload.scope) {
    throw new jwt.JsonWebTokenError('Jeton non valable pour l\'accès');
  }
  return payload;
}

module.exports = {
  passwordFingerprint,
  matchesPassword,
  signAccessToken,
  signRefreshToken,
  verifyAccessToken,
};
