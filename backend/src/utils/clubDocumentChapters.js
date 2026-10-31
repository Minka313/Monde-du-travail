/**
 * Découpage du document de référence en parties (« # Titre ») pour comparer la version
 * enregistrée par la Présidence avec le texte de référence mis à jour, partie par partie.
 */
const crypto = require('crypto');

const PREAMBLE = '__preamble__';

const normalize = (text) => String(text || '')
  .replace(/\r\n?/g, '\n')
  .split('\n').map((l) => l.replace(/\s+$/, '')).join('\n')
  .replace(/\n{3,}/g, '\n\n')
  .trim();

const titleKey = (title) => String(title || '').replace(/\s+/g, ' ').trim().toLowerCase();
const hash = (text) => crypto.createHash('sha1').update(normalize(text)).digest('hex').slice(0, 16);

/** Parties du document : en-tête (couverture + introduction) puis une entrée par « # Titre ». */
function split(content) {
  const lines = String(content || '').replace(/\r\n?/g, '\n').split('\n');
  const parts = [{ key: PREAMBLE, title: 'Couverture et introduction', lines: [] }];
  lines.forEach((line) => {
    const m = line.match(/^#\s+(\S.*)$/);
    if (m) parts.push({ key: titleKey(m[1]), title: m[1].trim(), lines: [line] });
    else parts[parts.length - 1].lines.push(line);
  });
  return parts.map((p) => ({ key: p.key, title: p.title, text: normalize(p.lines.join('\n')) }));
}

const join = (parts) => `${parts.map((p) => p.text).filter(Boolean).join('\n\n')}\n`;

module.exports = { PREAMBLE, normalize, titleKey, hash, split, join };
