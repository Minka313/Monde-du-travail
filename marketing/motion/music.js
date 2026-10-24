/**
 * Bande-son originale du film, synthétisée de zéro (aucun échantillon, aucun droit à céder) :
 * nappes cinématiques en la mineur, basse pulsée, arpèges, batterie légère et effets calés
 * sur les transitions de l'animation (cues-<format>.json produit par render.js).
 *   node music.js --format h|v [--out out/]  →  out/music-<format>.wav (48 kHz, stéréo)
 */
const fs = require('fs');
const path = require('path');

const arg = (name, def) => { const i = process.argv.indexOf(`--${name}`); return i > -1 ? process.argv[i + 1] : def; };
const format = arg('format', 'h');
const out = path.resolve(arg('out', path.join(__dirname, 'out')));
const { duration, sections: S, cues } = JSON.parse(fs.readFileSync(path.join(out, `cues-${format}.json`), 'utf8'));

const SR = 48000;
const N = Math.ceil((duration + 0.5) * SR);
const L = new Float32Array(N);
const R = new Float32Array(N);
const sendL = new Float32Array(N); // bus de réverbération
const sendR = new Float32Array(N);
const TAU = Math.PI * 2;
let seed = 12345;
const noise = () => { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x3fffffff - 1; };
const mtof = (m) => 440 * Math.pow(2, (m - 69) / 12);
const at = (t) => Math.max(0, Math.min(N - 1, Math.round(t * SR)));
const smooth = (x) => x * x * (3 - 2 * x);

// Énergie de la musique au fil du film (0 = intime, 1 = plein)
const mark = (k) => S[k][0];
const ENERGY = [
  [0, 0.3], [mark('gap'), 0.4], [mark('logo'), 0.55], [mark('org'), 0.6], [mark('values'), 0.75],
  [mark('platform'), 0.85], [mark('montage'), 1], [mark('cta'), 0.7], [duration, 0.5],
];
function energy(t) {
  for (let i = 1; i < ENERGY.length; i += 1) {
    if (t <= ENERGY[i][0]) {
      const [t0, e0] = ENERGY[i - 1];
      const [t1, e1] = ENERGY[i];
      return e0 + (e1 - e0) * smooth(Math.min(1, (t - t0) / Math.max(0.001, Math.min(1.5, t1 - t0))));
    }
  }
  return ENERGY[ENERGY.length - 1][1];
}

// Table d'onde « scie douce » (12 harmoniques) pour les nappes
const TBL = 4096;
const saw = new Float32Array(TBL);
for (let i = 0; i < TBL; i += 1) for (let h = 1; h <= 12; h += 1) saw[i] += Math.sin((TAU * h * i) / TBL) / h * (h > 6 ? 0.6 : 1);

// ---------- Harmonie : Am – F – C – G (96 BPM, une mesure = 2,5 s) ----------
const BPM = 96;
const BEAT = 60 / BPM;
const BAR = BEAT * 4;
const CHORDS = [[57, 60, 64, 69], [53, 57, 60, 65], [55, 60, 64, 67], [55, 59, 62, 67]];
const ROOTS = [45, 41, 48, 43];
const chordAt = (t) => Math.floor(t / BAR) % 4;

// Nappe : voix désaccordées, filtre passe-bas qui s'ouvre avec l'énergie
(function pad() {
  const voices = [];
  CHORDS[0].forEach((_, n) => [-7, 0, 7].forEach((det) => voices.push({ n, det, ph: ((n * 3 + det) * 0.137 + 5) % 1, pan: (n / 3 - 0.5) * 0.8 + det / 30 })));
  let lpL = 0; let lpR = 0; let lp2L = 0; let lp2R = 0;
  for (let i = 0; i < N; i += 1) {
    const t = i / SR;
    const c = chordAt(t);
    const pos = (t % BAR) / BAR;
    const prev = (c + 3) % 4;
    const xf = Math.min(1, pos / 0.12); // fondu enchaîné entre accords
    let sl = 0; let sr = 0;
    for (const v of voices) {
      const f = mtof(CHORDS[c][v.n] * xf + CHORDS[prev][v.n] * (1 - xf)) * Math.pow(2, v.det / 1200);
      v.ph = (v.ph + f / SR) % 1;
      const s = saw[(v.ph * TBL) | 0];
      sl += s * (0.5 - v.pan * 0.5);
      sr += s * (0.5 + v.pan * 0.5);
    }
    const e = energy(t);
    const cutoff = 300 + 2400 * e + 300 * Math.sin(t * 0.4);
    const a = 1 - Math.exp((-TAU * cutoff) / SR);
    lpL += a * (sl - lpL); lpR += a * (sr - lpR);
    lp2L += a * (lpL - lp2L); lp2R += a * (lpR - lp2R);
    const g = 0.034 * (0.6 + 0.4 * e) * Math.min(1, t / 1.5);
    L[i] += lp2L * g; R[i] += lp2R * g;
    sendL[i] += lp2L * g * 0.6; sendR[i] += lp2R * g * 0.6;
  }
}());

// Pompage façon « sidechain » sur les temps quand la batterie joue
function duck(t) {
  if (t < mark('org')) return 1;
  const p = (t % BEAT) / BEAT;
  return 0.55 + 0.45 * Math.min(1, p / 0.45);
}
for (let i = 0; i < N; i += 1) { const d = duck(i / SR); L[i] *= d; R[i] *= d; }

// ---------- Basse ----------
(function bass() {
  let ph = 0;
  for (let i = at(mark('gap')); i < N; i += 1) {
    const t = i / SR;
    const f = mtof(ROOTS[chordAt(t)] - 12);
    ph = (ph + f / SR) % 1;
    const p = (t % BEAT) / BEAT;
    const env = t < mark('org') ? 0.6 : Math.min(1, p / 0.08) * (1 - 0.5 * p);
    const s = (Math.sin(TAU * ph) + 0.25 * Math.sin(TAU * ph * 2)) * env * 0.085 * energy(t) * Math.min(1, (t - mark('gap')) / 2);
    L[i] += s; R[i] += s;
  }
}());

// ---------- Percussions ----------
function kick(t, gain = 1) {
  const i0 = at(t);
  let ph = 0;
  for (let k = 0; k < SR * 0.45 && i0 + k < N; k += 1) {
    const x = k / SR;
    const f = 45 + 110 * Math.exp(-x * 28);
    ph += f / SR;
    const s = Math.sin(TAU * ph) * Math.exp(-x * 9) * 0.42 * gain + (k < 160 ? noise() * 0.08 * gain * (1 - k / 160) : 0);
    L[i0 + k] += s; R[i0 + k] += s;
  }
}
function hat(t, gain = 1, pan = 0) {
  const i0 = at(t);
  let hp = 0; let prev = 0;
  for (let k = 0; k < SR * 0.06 && i0 + k < N; k += 1) {
    const n = noise();
    hp = 0.92 * (hp + n - prev); prev = n;
    const s = hp * Math.exp((-k / SR) * 70) * 0.05 * gain;
    L[i0 + k] += s * (1 - pan); R[i0 + k] += s * (1 + pan);
  }
}
for (let t = mark('org'); t < mark('cta') + 2 * BAR; t += BEAT) {
  const e = energy(t);
  if (t < mark('montage') || t >= mark('cta')) kick(t, 0.55 * e);
  if (t >= mark('values')) { hat(t + BEAT / 2, 0.8 * e, 0.2); hat(t + BEAT / 4, 0.35 * e, -0.3); hat(t + (3 * BEAT) / 4, 0.35 * e, 0.3); }
}

// ---------- Arpèges (plateforme et fin) ----------
function pluck(t, midi, gain, pan) {
  const i0 = at(t);
  const f = mtof(midi);
  for (let k = 0; k < SR * 0.9 && i0 + k < N; k += 1) {
    const x = k / SR;
    const env = Math.exp(-x * 5);
    const s = Math.sin(TAU * f * x + 1.4 * Math.exp(-x * 9) * Math.sin(TAU * f * 2 * x)) * env * gain;
    L[i0 + k] += s * (1 - pan) * 0.5; R[i0 + k] += s * (1 + pan) * 0.5;
    sendL[i0 + k] += s * 0.35; sendR[i0 + k] += s * 0.35;
  }
}
{
  const pattern = [0, 1, 2, 3, 2, 1, 3, 2];
  let n = 0;
  for (let t = mark('platform'); t < duration - 1; t += BEAT / 2, n += 1) {
    if (t >= mark('montage') && t < mark('cta')) continue;
    const ch = CHORDS[chordAt(t)];
    pluck(t, ch[pattern[n % 8]] + 12, 0.07 * energy(t), n % 2 ? 0.45 : -0.45);
  }
}

// ---------- Effets synchronisés ----------
function whoosh(t, gain) {
  const len = 0.9;
  const i0 = at(t);
  let bp1 = 0; let bp2 = 0;
  for (let k = 0; k < SR * len && i0 + k < N; k += 1) {
    const x = k / (SR * len);
    const env = Math.pow(Math.sin(Math.PI * Math.pow(x, 0.8)), 2);
    const fc = 300 + 5000 * x;
    const a = 1 - Math.exp((-TAU * fc) / SR);
    bp1 += a * (noise() - bp1); bp2 += a * (bp1 - bp2);
    const s = (bp1 - bp2) * env * 0.5 * gain;
    const pan = -0.8 + 1.6 * x;
    L[i0 + k] += s * (1 - pan); R[i0 + k] += s * (1 + pan);
    sendL[i0 + k] += s * 0.4; sendR[i0 + k] += s * 0.4;
  }
}
function riser(t, gain) {
  const len = 1.3;
  const i0 = at(t - len);
  let ph = 0; let lp = 0;
  for (let k = 0; k < SR * len && i0 + k < N; k += 1) {
    const x = k / (SR * len);
    ph += (220 + 660 * x * x) / SR;
    const fc = 400 + 6000 * x * x;
    lp += (1 - Math.exp((-TAU * fc) / SR)) * (noise() - lp);
    const s = (lp * 0.35 + Math.sin(TAU * ph) * 0.05) * x * x * gain;
    L[i0 + k] += s; R[i0 + k] += s;
    sendL[i0 + k] += s * 0.5; sendR[i0 + k] += s * 0.5;
  }
}
function hit(t, gain) {
  const i0 = at(t);
  const c = CHORDS[chordAt(t)];
  for (let k = 0; k < SR * 1.6 && i0 + k < N; k += 1) {
    const x = k / SR;
    let s = 0;
    [c[0] + 12, c[2] + 12, c[3] + 24].forEach((m, j) => { s += Math.sin(TAU * mtof(m) * x) * Math.exp(-x * (2.5 + j)); });
    s = s * 0.05 * gain + Math.sin(TAU * 70 * x) * Math.exp(-x * 14) * 0.25 * gain;
    L[i0 + k] += s; R[i0 + k] += s;
    sendL[i0 + k] += s * 0.7; sendR[i0 + k] += s * 0.7;
  }
}
function impact(t, gain) {
  const i0 = at(t);
  let ph = 0; let lp = 0;
  for (let k = 0; k < SR * 2.5 && i0 + k < N; k += 1) {
    const x = k / SR;
    ph += (38 + 90 * Math.exp(-x * 9)) / SR;
    lp += (1 - Math.exp((-TAU * (300 + 4000 * Math.exp(-x * 6))) / SR)) * (noise() - lp);
    const s = (Math.sin(TAU * ph) * Math.exp(-x * 3) * 0.45 + lp * Math.exp(-x * 4) * 0.5) * gain;
    L[i0 + k] += s; R[i0 + k] += s;
    sendL[i0 + k] += s * 0.6; sendR[i0 + k] += s * 0.6;
  }
  hit(t, gain * 0.9);
}
const tick = (t, gain) => { for (let j = 0; j < 4; j += 1) hat(t + j * 0.08, 1.4 * gain, j % 2 ? 0.5 : -0.5); };
const FX = { whoosh, riser, hit, impact, tick, kick: (t, g) => { kick(t, 0.9 * g); hat(t, g); } };
cues.forEach((c) => FX[c.type]?.(c.t, c.gain));

// ---------- Réverbération (Schroeder) sur le bus d'envoi ----------
function reverb(input, delaysMs) {
  const outp = new Float32Array(N);
  const combs = delaysMs.map((ms) => ({ buf: new Float32Array(Math.round((ms * SR) / 1000)), i: 0, lp: 0 }));
  const aps = [5.0, 1.7].map((ms) => ({ buf: new Float32Array(Math.round((ms * SR) / 1000)), i: 0 }));
  for (let n = 0; n < N; n += 1) {
    let s = 0;
    for (const c of combs) {
      const y = c.buf[c.i];
      c.lp = y * 0.75 + c.lp * 0.25;
      c.buf[c.i] = input[n] + c.lp * 0.84;
      c.i = (c.i + 1) % c.buf.length;
      s += y;
    }
    s *= 0.25;
    for (const a of aps) {
      const y = a.buf[a.i];
      const v = s + y * 0.5;
      a.buf[a.i] = v;
      a.i = (a.i + 1) % a.buf.length;
      s = y - v * 0.5;
    }
    outp[n] = s;
  }
  return outp;
}
const revL = reverb(sendL, [29.7, 37.1, 41.1, 43.7]);
const revR = reverb(sendR, [31.3, 36.7, 40.3, 45.1]);

// ---------- Mixage final ----------
let peak = 0;
// Coupe-bas à 35 Hz : supprime le grondement inaudible qui mange la dynamique
const hpA = Math.exp((-TAU * 35) / SR);
let hxL = 0; let hyL = 0; let hxR = 0; let hyR = 0;
for (let i = 0; i < N; i += 1) {
  const xl = L[i] + revL[i] * 0.55; const xr = R[i] + revR[i] * 0.55;
  hyL = hpA * (hyL + xl - hxL); hxL = xl; hyR = hpA * (hyR + xr - hxR); hxR = xr;
  L[i] = hyL; R[i] = hyR;
}
for (let i = 0; i < N; i += 1) {
  const t = i / SR;
  const fade = Math.min(1, t / 0.4) * Math.min(1, Math.max(0, (duration - t) / 1.2));
  L[i] = Math.tanh(L[i] * 1.2) * fade;
  R[i] = Math.tanh(R[i] * 1.2) * fade;
  peak = Math.max(peak, Math.abs(L[i]), Math.abs(R[i]));
}
const norm = 0.89 / (peak || 1);
const data = Buffer.alloc(44 + N * 4);
data.write('RIFF', 0); data.writeUInt32LE(36 + N * 4, 4); data.write('WAVE', 8);
data.write('fmt ', 12); data.writeUInt32LE(16, 16); data.writeUInt16LE(1, 20); data.writeUInt16LE(2, 22);
data.writeUInt32LE(SR, 24); data.writeUInt32LE(SR * 4, 28); data.writeUInt16LE(4, 32); data.writeUInt16LE(16, 34);
data.write('data', 36); data.writeUInt32LE(N * 4, 40);
for (let i = 0; i < N; i += 1) {
  data.writeInt16LE(Math.round(L[i] * norm * 32767), 44 + i * 4);
  data.writeInt16LE(Math.round(R[i] * norm * 32767), 46 + i * 4);
}
const file = path.join(out, `music-${format}.wav`);
fs.writeFileSync(file, data);
console.log(`Bande-son : ${file} (${duration.toFixed(1)} s)`);
