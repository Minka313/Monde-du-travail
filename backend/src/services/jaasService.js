const jwt = require('jsonwebtoken');
const { ServiceUnavailableError } = require('../utils/errors');

/**
 * JaaS (Jitsi as a Service, 8x8) : réunion intégrée au site. Chaque participant reçoit
 * un jeton signé par notre clé privée qui l'autorise dans une seule salle, avec son rôle.
 * Inactif tant que JAAS_APP_ID, JAAS_KEY_ID et JAAS_PRIVATE_KEY ne sont pas renseignés :
 * la salle virtuelle utilise alors meet.jit.si dans un nouvel onglet.
 */
const DOMAIN = '8x8.vc';
const TOKEN_HOURS = 4;

function config() {
  const appId = (process.env.JAAS_APP_ID || '').trim();
  const keyId = (process.env.JAAS_KEY_ID || '').trim();
  // Vercel conserve les retours à la ligne ; on accepte aussi une clé collée sur une ligne avec « \n »
  const privateKey = (process.env.JAAS_PRIVATE_KEY || '').replace(/\\n/g, '\n').trim();
  if (!appId || !keyId || !privateKey) return null;
  return { appId, kid: keyId.includes('/') ? keyId : `${appId}/${keyId}`, privateKey };
}

function isConfigured() {
  return Boolean(config());
}

function publicInfo(roomId) {
  const cfg = config();
  if (!cfg) return null;
  return { domain: DOMAIN, appId: cfg.appId, roomName: `${cfg.appId}/${roomId}`, scriptUrl: `https://${DOMAIN}/${cfg.appId}/external_api.js` };
}

/** Jeton d'accès à une salle : `room` est le nom de salle seul (sans l'AppID). */
function createToken({ room, user = {}, name, moderator = false }) {
  const cfg = config();
  if (!cfg) throw new ServiceUnavailableError('Visio intégrée non configurée');
  const now = Math.floor(Date.now() / 1000);
  const payload = {
    aud: 'jitsi',
    iss: 'chat',
    sub: cfg.appId,
    room,
    iat: now,
    nbf: now - 10,
    exp: now + TOKEN_HOURS * 3600,
    context: {
      user: {
        id: user.id || `invite-${now.toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
        name: (name || 'Participant').slice(0, 60),
        avatar: user.avatarUrl || '',
        email: '',
        moderator: moderator ? 'true' : 'false',
      },
      // Options payantes désactivées : seul le volume d'utilisateurs est facturé
      features: {
        livestreaming: false,
        recording: false,
        transcription: false,
        'outbound-call': false,
        'sip-outbound-call': false,
      },
    },
  };
  return jwt.sign(payload, cfg.privateKey, { algorithm: 'RS256', header: { kid: cfg.kid, typ: 'JWT' } });
}

module.exports = { DOMAIN, isConfigured, publicInfo, createToken };
