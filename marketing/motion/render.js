/**
 * Rendu du film image par image : Chromium (Playwright) capture chaque image de index.html,
 * ffmpeg les assemble en H.264. Usage :
 *   node render.js --format h|v [--out out/] [--preview 1.5,8,20] [--fps 30]
 * Variables : CHROME (exécutable Chromium), PLAYWRIGHT (chemin du module playwright-core).
 * --preview enregistre seulement quelques images PNG pour contrôle.
 */
const path = require('path');
const fs = require('fs');
const { spawn } = require('child_process');

const { chromium } = require(process.env.PLAYWRIGHT || 'playwright-core');
const arg = (name, def) => { const i = process.argv.indexOf(`--${name}`); return i > -1 ? process.argv[i + 1] : def; };
const format = arg('format', 'h');
const out = path.resolve(arg('out', path.join(__dirname, 'out')));
const preview = arg('preview');
fs.mkdirSync(out, { recursive: true });

(async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROME || undefined });
  const size = format === 'v' ? { width: 1080, height: 1920 } : { width: 1920, height: 1080 };
  const page = await browser.newPage({ viewport: size, deviceScaleFactor: 1 });
  page.on('pageerror', (e) => { console.error('Erreur page :', e.message); process.exitCode = 1; });
  await page.goto(`file://${path.join(__dirname, 'index.html')}?format=${format}`);
  await page.evaluate(() => document.fonts.ready);
  await page.waitForFunction(() => Array.from(document.images).every((i) => i.complete));
  const meta = await page.evaluate(() => window.MOTION);
  const fps = Number(arg('fps', meta.fps));
  fs.writeFileSync(path.join(out, `cues-${format}.json`), JSON.stringify({ duration: meta.duration, sections: meta.sections, cues: meta.cues }, null, 2));

  if (preview) {
    for (const t of preview.split(',').map(Number)) {
      await page.evaluate((x) => window.renderAt(x), t);
      await page.screenshot({ path: path.join(out, `preview-${format}-${t}.png`) });
    }
    console.log(`Aperçus enregistrés dans ${out}`);
    await browser.close();
    return;
  }

  const total = Math.round(meta.duration * fps);
  const file = path.join(out, `video-${format}.mp4`);
  const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(fps), '-c:v', 'mjpeg', '-i', '-',
    // Débit plafonné aux recommandations YouTube / TikTok (~12 Mb/s en 1080p30) : fichiers légers à publier
    '-vf', 'format=yuv420p', '-c:v', 'libx264', '-preset', 'medium', '-crf', '18', '-maxrate', '12M', '-bufsize', '24M', '-profile:v', 'high',
    '-movflags', '+faststart', file], { stdio: ['pipe', 'inherit', 'inherit'] });
  const cdp = await page.context().newCDPSession(page);
  const started = Date.now();
  for (let i = 0; i < total; i += 1) {
    await page.evaluate((x) => window.renderAt(x), i / fps);
    const { data } = await cdp.send('Page.captureScreenshot', { format: 'jpeg', quality: 93, optimizeForSpeed: true });
    const jpg = Buffer.from(data, 'base64');
    if (!ff.stdin.write(jpg)) await new Promise((r) => ff.stdin.once('drain', r));
    if (i % (fps * 5) === 0) console.log(`${format} : ${Math.round((i / total) * 100)} % (${Math.round((Date.now() - started) / 1000)} s)`);
  }
  ff.stdin.end();
  await new Promise((r) => ff.on('close', r));
  await browser.close();
  console.log(`Vidéo : ${file} (${total} images, ${meta.duration.toFixed(1)} s)`);
})().catch((e) => { console.error(e); process.exit(1); });
