const crypto = require('crypto');

// Alphabet RFC 4648 Base32
const BASE32_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';

/**
 * Encode un Buffer en chaîne Base32 (RFC 4648)
 */
function base32Encode(buffer) {
  let bits = 0;
  let value = 0;
  let output = '';

  for (let i = 0; i < buffer.length; i++) {
    value = (value << 8) | buffer[i];
    bits += 8;

    while (bits >= 5) {
      output += BASE32_ALPHABET[(value >>> (bits - 5)) & 31];
      bits -= 5;
    }
  }

  if (bits > 0) {
    output += BASE32_ALPHABET[(value << (5 - bits)) & 31];
  }

  return output;
}

/**
 * Décode une chaîne Base32 en Buffer
 */
function base32Decode(str) {
  const cleanStr = str.toUpperCase().replace(/[\s-]/g, '');
  let bits = 0;
  let value = 0;
  const bytes = [];

  for (let i = 0; i < cleanStr.length; i++) {
    const idx = BASE32_ALPHABET.indexOf(cleanStr[i]);
    if (idx === -1) {
      throw new Error(`Caractère Base32 invalide : ${cleanStr[i]}`);
    }

    value = (value << 5) | idx;
    bits += 5;

    if (bits >= 8) {
      bytes.push((value >>> (bits - 8)) & 255);
      bits -= 8;
    }
  }

  return Buffer.from(bytes);
}

/**
 * Génère un secret TOTP aléatoire (20 octets = 160 bits, recommandé RFC 4226)
 */
function generateSecret(numBytes = 20) {
  const randomBytes = crypto.randomBytes(numBytes);
  return base32Encode(randomBytes);
}

/**
 * Calcule le code TOTP à 6 chiffres pour un secret et un instant donnés (RFC 6238)
 */
function generateTOTP(secretBase32, options = {}) {
  const timeStep = options.timeStep || 30; // 30 secondes par défaut
  const digits = options.digits || 6;
  const timeMs = options.time || Date.now();

  const counter = Math.floor(timeMs / 1000 / timeStep);
  const counterBuffer = Buffer.alloc(8);
  counterBuffer.writeBigInt64BE(BigInt(counter));

  const key = base32Decode(secretBase32);
  const hmac = crypto.createHmac('sha1', key);
  hmac.update(counterBuffer);
  const digest = hmac.digest();

  // Dynamic truncation RFC 4226
  const offset = digest[digest.length - 1] & 0x0f;
  const codeInt =
    ((digest[offset] & 0x7f) << 24) |
    ((digest[offset + 1] & 0xff) << 16) |
    ((digest[offset + 2] & 0xff) << 8) |
    (digest[offset + 3] & 0xff);

  const otp = codeInt % 10 ** digits;
  return otp.toString().padStart(digits, '0');
}

/**
 * Vérifie la validité d'un code TOTP avec une tolérance temporelle (fenêtre)
 */
function verifyTOTP(token, secretBase32, options = {}) {
  if (!token || !secretBase32) return false;

  const cleanToken = String(token).trim();
  if (!/^\d{6}$/.test(cleanToken)) return false;

  const window = options.window !== undefined ? options.window : 1; // +/- 1 time step (30s avant/après)
  const timeStep = options.timeStep || 30;
  const now = Date.now();

  for (let offset = -window; offset <= window; offset++) {
    const checkTime = now + offset * timeStep * 1000;
    const expected = generateTOTP(secretBase32, { timeStep, time: checkTime });

    // Comparaison timing-safe pour contrer les attaques par timing
    const bufExpected = Buffer.from(expected, 'utf8');
    const bufActual = Buffer.from(cleanToken, 'utf8');
    if (bufExpected.length === bufActual.length && crypto.timingSafeEqual(bufExpected, bufActual)) {
      return true;
    }
  }

  return false;
}

/**
 * Construit l'URI otpauth:// standardisée pour les applications d'authentification
 */
function getOtpAuthUri({ secret, accountName, issuer = 'Le Monde du Travail' }) {
  const encIssuer = encodeURIComponent(issuer);
  const encAccount = encodeURIComponent(accountName);
  return `otpauth://totp/${encIssuer}:${encAccount}?secret=${secret}&issuer=${encIssuer}&algorithm=SHA1&digits=6&period=30`;
}

module.exports = {
  generateSecret,
  generateTOTP,
  verifyTOTP,
  getOtpAuthUri,
  base32Encode,
  base32Decode,
};
