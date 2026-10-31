/**
 * Document de référence du club (Espace Bureau) : lecture mise en page, sommaire,
 * modification par la Présidence (texte balisé + aperçu en direct), téléchargement
 * en PDF (impression du navigateur) et en Word (.docx modifiable).
 *
 * Balisage (expliqué dans l'aide de l'éditeur) :
 *   # Partie        ## Section        ### Sous-section        #### Petit titre
 *   - puce          1. liste numérotée                         | tableau | ... |
 *   > citation      > — Auteur                                 **gras**  *italique*
 *   ::: encadre Titre … :::     ::: cartes ### … :::     ::: etapes ### … :::
 * En tête du texte, avant « --- » : titre, sigle, sous-titre, devise, site, mention.
 */
(function () {
  'use strict';

  const DOCX_SRC = 'js/vendor/docx-9.15.0.min.js';
  const ROMAN = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX'];
  const roman = (n) => ROMAN[n] || String(n);
  const esc = (v) => String(v == null ? '' : v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const frDate = (v) => new Date(v).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
  const slug = (s) => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60);

  // ===== Lecture du balisage =====

  const META_KEYS = { titre: 'title', sigle: 'acronym', 'sous-titre': 'subtitle', devise: 'motto', site: 'site', mention: 'mention' };

  function parse(source) {
    let lines = String(source || '').replace(/\r\n?/g, '\n').split('\n');
    const meta = {};
    const sep = lines.findIndex((l) => l.trim() === '---');
    if (sep > -1 && lines.slice(0, sep).every((l) => !l.trim() || /^[\wÀ-ÿ-]+\s*:/.test(l))) {
      lines.slice(0, sep).forEach((l) => {
        const m = l.match(/^([\wÀ-ÿ-]+)\s*:\s*(.*)$/);
        if (m && META_KEYS[m[1].toLowerCase()]) meta[META_KEYS[m[1].toLowerCase()]] = m[2].trim();
      });
      lines = lines.slice(sep + 1);
    }

    const intro = [];
    const chapters = [];
    let target = intro;
    let chapter = null;
    let h2 = 0;
    let h3 = 0;
    let i = 0;

    const collect = (test) => {
      const out = [];
      while (i < lines.length && test(lines[i])) out.push(lines[i++]);
      return out;
    };

    function blocksOf(sub, numbered) {
      // Analyse d'un fragment (contenu d'un encadré, d'une carte, d'une étape)
      const saved = { lines, i, target, chapter, h2, h3 };
      lines = sub; i = 0; target = []; chapter = null;
      const result = target;
      readBlocks(numbered);
      ({ lines, i, chapter, h2, h3 } = saved);
      target = saved.target;
      return result;
    }

    function readBlocks(numbered) {
      while (i < lines.length) {
        const line = lines[i];
        const t = line.trim();
        if (!t) { i += 1; continue; }

        let m = t.match(/^(#{1,4})\s+(.+)$/);
        if (m) {
          i += 1;
          const level = m[1].length;
          const title = m[2].trim();
          if (level === 1 && numbered) {
            chapter = { type: 'chapter', title, num: chapters.length + 1, id: `cd-${chapters.length + 1}-${slug(title)}`, blocks: [] };
            chapters.push(chapter);
            target = chapter.blocks;
            h2 = 0; h3 = 0;
          } else if (level === 2 && numbered) {
            h2 += 1; h3 = 0;
            target.push({ type: 'h2', title, num: `${h2}.`, id: `cd-${chapters.length}-${h2}-${slug(title)}` });
          } else if (level === 3 && numbered) {
            h3 += 1;
            target.push({ type: 'h3', title, num: h2 ? `${h2}.${h3}` : `${h3}.` });
          } else {
            target.push({ type: 'h4', title });
          }
          continue;
        }

        m = t.match(/^:::\s*(encadre|encadré|cartes|etapes|étapes)\b\s*(.*)$/i);
        if (m) {
          i += 1;
          const kind = m[1].toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
          const body = collect((l) => l.trim() !== ':::');
          i += 1; // ligne « ::: » de fermeture
          if (kind === 'encadre') {
            target.push({ type: 'callout', title: m[2].trim(), blocks: blocksOf(body, false) });
          } else {
            const items = [];
            let current = null;
            body.forEach((l) => {
              const head = l.trim().match(/^#{2,4}\s+(.+)$/);
              if (head) { current = { title: head[1].trim(), lines: [] }; items.push(current); } else if (current) current.lines.push(l);
            });
            target.push({ type: kind === 'cartes' ? 'cards' : 'steps', items: items.map((it) => ({ title: it.title, blocks: blocksOf(it.lines, false) })) });
          }
          continue;
        }

        if (/^[-*•]\s+/.test(t)) {
          target.push({ type: 'ul', items: collect((l) => /^\s*[-*•]\s+/.test(l)).map((l) => l.trim().replace(/^[-*•]\s+/, '')) });
          continue;
        }
        if (/^\d+[.)]\s+/.test(t)) {
          // Le numéro tapé est respecté : « 2. » après une liste à puces continue à 2
          const olLines = collect((l) => /^\s*\d+[.)]\s+/.test(l));
          target.push({ type: 'ol', start: parseInt(olLines[0], 10) || 1, items: olLines.map((l) => l.trim().replace(/^\d+[.)]\s+/, '')) });
          continue;
        }
        if (t.startsWith('|')) {
          const rows = collect((l) => l.trim().startsWith('|'))
            .map((l) => l.trim().replace(/^\||\|$/g, '').split('|').map((c) => c.trim()))
            .filter((cells) => !cells.every((c) => /^:?-{2,}:?$/.test(c)));
          target.push({ type: 'table', head: rows[0] || [], rows: rows.slice(1) });
          continue;
        }
        if (t.startsWith('>')) {
          const quoteLines = collect((l) => l.trim().startsWith('>')).map((l) => l.trim().replace(/^>\s?/, ''));
          const citeIndex = quoteLines.findIndex((l) => /^[—–-]\s+/.test(l));
          const cite = citeIndex > -1 ? quoteLines.splice(citeIndex).join(' ').replace(/^[—–-]\s+/, '') : '';
          target.push({ type: 'quote', text: quoteLines.join(' '), cite });
          continue;
        }
        // Paragraphe : lignes consécutives jusqu'à une ligne vide ou un autre bloc
        const para = collect((l) => l.trim() && !/^(#{1,4}\s|:::|[-*•]\s|\d+[.)]\s|\||>)/.test(l.trim()));
        if (para.length) target.push({ type: 'p', text: para.map((l) => l.trim()).join(' ') });
        else i += 1;
      }
    }

    readBlocks(true);
    return { meta, intro, chapters };
  }

  // Texte en ligne : **gras**, *italique*, liens
  function tokens(text) {
    const out = [];
    const re = /\*\*(.+?)\*\*|\*(.+?)\*|(https?:\/\/[^\s<>()]+[^\s<>().,;:!?»])/g;
    let last = 0;
    let m;
    while ((m = re.exec(text))) {
      if (m.index > last) out.push({ text: text.slice(last, m.index) });
      if (m[1] !== undefined) out.push({ text: m[1], bold: true });
      else if (m[2] !== undefined) out.push({ text: m[2], italic: true });
      else out.push({ text: m[3], link: m[3] });
      last = re.lastIndex;
    }
    if (last < text.length) out.push({ text: text.slice(last) });
    return out;
  }

  const inline = (text) => tokens(text).map((tk) => {
    if (tk.bold) return `<strong>${esc(tk.text)}</strong>`;
    if (tk.italic) return `<em>${esc(tk.text)}</em>`;
    if (tk.link) return `<a href="${esc(tk.link)}" target="_blank" rel="noopener">${esc(tk.text.replace(/^https?:\/\//, ''))}</a>`;
    return esc(tk.text);
  }).join('');

  // ===== Rendu HTML (écran et PDF) =====

  function blockHtml(b) {
    switch (b.type) {
      case 'h2': return `<h3 class="cd-h2" id="${b.id}"><span class="cd-num">${esc(b.num)}</span>${inline(b.title)}</h3>`;
      case 'h3': return `<h4 class="cd-h3"><span class="cd-num">${esc(b.num)}</span>${inline(b.title)}</h4>`;
      case 'h4': return `<h5 class="cd-h4">${inline(b.title)}</h5>`;
      // Phrase qui annonce la suite (« … : ») : reste sur la même page que sa liste ou ses cartes
      case 'p': return `<p${/:\s*$/.test(b.text) ? ' class="cd-keep"' : ''}>${inline(b.text)}</p>`;
      case 'ul': return `<ul class="cd-list">${b.items.map((it) => `<li>${inline(it)}</li>`).join('')}</ul>`;
      case 'ol': return `<ol class="cd-olist"${b.start > 1 ? ` start="${b.start}" style="counter-reset: cd-ol ${b.start - 1}"` : ''}>${b.items.map((it) => `<li>${inline(it)}</li>`).join('')}</ol>`;
      case 'table': return `<div class="cd-table-wrap"><table class="cd-table"><thead><tr>${b.head.map((c) => `<th>${inline(c)}</th>`).join('')}</tr></thead>
        <tbody>${b.rows.map((r) => `<tr>${b.head.map((_, k) => `<td>${inline(r[k] || '')}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
      case 'quote': return `<figure class="cd-quote"><blockquote>${inline(b.text)}</blockquote>${b.cite ? `<figcaption>${citeHtml(b.cite)}</figcaption>` : ''}</figure>`;
      case 'callout': return `<aside class="cd-callout">${b.title ? `<p class="cd-callout-title">${inline(b.title)}</p>` : ''}${b.blocks.map(blockHtml).join('')}</aside>`;
      case 'cards': return `<div class="cd-cards${b.items.length === 3 ? ' cd-cards-3' : ''}">${b.items.map((it, k) => `
        <article class="cd-card"><span class="cd-card-index">${String(k + 1).padStart(2, '0')}</span><h5>${inline(it.title)}</h5>${it.blocks.map(blockHtml).join('')}</article>`).join('')}</div>`;
      case 'steps': return `<ol class="cd-steps">${b.items.map((it, k) => `
        <li class="cd-step"><span class="cd-step-dot">${k + 1}</span><div class="cd-step-body"><h5>${inline(it.title)}</h5>${it.blocks.map(blockHtml).join('')}</div></li>`).join('')}</ol>`;
      default: return '';
    }
  }

  // « Nom · Pays · Rôle » : le nom ressort, le reste en sous-titre
  function citeHtml(cite) {
    const [name, ...rest] = cite.split(' · ');
    return `<strong>${inline(name)}</strong>${rest.length ? `<span>${inline(rest.join(' · '))}</span>` : ''}`;
  }

  function coverHtml(meta, info) {
    const title = meta.title || 'Document de référence';
    return `
      <header class="cd-cover">
        <div class="cd-cover-top">
          <img src="${info.assets.logo}" alt="" class="cd-cover-logo" width="64" height="64">
          <span class="cd-cover-org">Le Monde du Travail<small>Club fondé en 2025 · LYNAQE de Sédhiou</small></span>
        </div>
        <div class="cd-cover-main">
          ${meta.mention ? `<p class="cd-cover-kicker">${inline(meta.mention)}</p>` : ''}
          <h1 class="cd-cover-title">${inline(title)}</h1>
          ${meta.acronym ? `<p class="cd-cover-acronym">${inline(meta.acronym)}</p>` : ''}
          <span class="cd-cover-rule" aria-hidden="true"></span>
          ${meta.subtitle ? `<p class="cd-cover-subtitle">${inline(meta.subtitle)}</p>` : ''}
          ${meta.motto ? `<p class="cd-cover-motto">« ${inline(meta.motto.replace(/^«\s*|\s*»$/g, ''))} »</p>` : ''}
        </div>
        <div class="cd-cover-foot">
          <img src="${info.assets.seal}" alt="Sceau WOW" class="cd-cover-seal" width="84" height="84">
          <div>
            ${meta.site ? `<p class="cd-cover-site">${esc(meta.site.replace(/^https?:\/\//, ''))}</p>` : ''}
            <p class="cd-cover-edited">${info.updatedAt ? `Version du ${esc(frDate(info.updatedAt))}` : 'Version d\'origine'}</p>
          </div>
        </div>
      </header>`;
  }

  function tocHtml(doc) {
    return `
      <nav class="cd-toc" aria-label="Sommaire du document">
        <p class="cd-toc-kicker">Sommaire</p>
        <ol>${doc.chapters.map((c) => `
          <li><a href="#${c.id}"><span class="cd-toc-num">${roman(c.num)}</span><span class="cd-toc-title">${inline(c.title)}</span></a></li>`).join('')}
        </ol>
      </nav>`;
  }

  function bodyHtml(doc, info) {
    return `
      ${coverHtml(doc.meta, info)}
      ${tocHtml(doc)}
      ${doc.intro.length ? `<section class="cd-chapter cd-intro">${doc.intro.map(blockHtml).join('')}</section>` : ''}
      ${doc.chapters.map((c) => `
        <section class="cd-chapter" aria-labelledby="${c.id}">
          <header class="cd-chapter-head">
            <span class="cd-chapter-num" aria-hidden="true">${roman(c.num)}</span>
            <div><p class="cd-chapter-kicker">Partie ${roman(c.num)}</p><h2 id="${c.id}">${inline(c.title)}</h2></div>
          </header>
          ${c.blocks.map(blockHtml).join('')}
        </section>`).join('')}
      <footer class="cd-end">
        <img src="${info.assets.mark}" alt="" width="40" height="40">
        <p><strong>${inline(doc.meta.acronym || 'WOW · World Of Work')}</strong>${doc.meta.motto ? `<span>« ${inline(doc.meta.motto.replace(/^«\s*|\s*»$/g, ''))} »</span>` : ''}</p>
      </footer>`;
  }

  // ===== Téléchargement PDF =====

  function assetUrl(path) {
    const local = /\/(frontend|admin-frontend)\//.test(window.location.pathname);
    return new URL(`${local ? '/frontend/' : '/'}${path}`, window.location.origin).href;
  }

  const ASSETS = () => ({ logo: assetUrl('logo.webp'), seal: assetUrl('images/wow-seal.svg'), mark: assetUrl('images/wow-mark.svg') });

  function fileName(doc) {
    return `${doc.meta.title || 'Le Monde du Travail'} – Document de référence`.replace(/[\\/:*?"<>|]/g, '');
  }

  function downloadPdf(source, info) {
    const win = window.open('', '_blank');
    if (!win) { window.alert('Autorise l\'ouverture de fenêtres pour télécharger le PDF.'); return; }
    const doc = parse(source);
    win.document.write(`<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>${esc(fileName(doc))}</title>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap">
      <link rel="stylesheet" href="${assetUrl('css/club-document.css?v=20261101-1')}">
      </head><body class="cd-print-body">
      <div class="cd-print-toolbar"><button type="button" onclick="window.print()">⬇️ Télécharger en PDF</button><small>Dans la fenêtre d'impression, choisis « Enregistrer au format PDF ».</small></div>
      <main class="cd-doc cd-paper">${bodyHtml(doc, { ...info, assets: ASSETS() })}</main>
      </body></html>`);
    win.document.close();
    win.addEventListener('load', () => {
      const ready = win.document.fonts && win.document.fonts.ready ? win.document.fonts.ready : Promise.resolve();
      ready.then(() => setTimeout(() => win.print(), 300));
    });
  }

  // ===== Téléchargement Word (.docx) =====

  let docxLoading = null;
  function loadDocx() {
    if (window.docx) return Promise.resolve(window.docx);
    if (!docxLoading) {
      docxLoading = new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = DOCX_SRC;
        s.onload = () => (window.docx ? resolve(window.docx) : reject(new Error('Module Word indisponible')));
        s.onerror = () => { docxLoading = null; reject(new Error('Module Word indisponible (connexion ?)')); };
        document.head.appendChild(s);
      });
    }
    return docxLoading;
  }

  async function imageBytes(url) {
    try {
      const res = await fetch(url);
      if (!res.ok) return null;
      const blob = await res.blob();
      // Conversion en PNG (Word ne lit ni le WebP ni le SVG)
      const bitmap = await new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = URL.createObjectURL(blob);
      });
      const canvas = document.createElement('canvas');
      canvas.width = 360; canvas.height = 360;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, 360, 360);
      const png = await new Promise((resolve) => canvas.toBlob(resolve, 'image/png'));
      return new Uint8Array(await png.arrayBuffer());
    } catch (_) {
      return null;
    }
  }

  async function downloadDocx(source, info) {
    const D = await loadDocx();
    const doc = parse(source);
    const NAVY = '0F2B46';
    const GOLD = 'B7791F';
    const INK = '1F2937';
    const MUTED = '64748B';
    const FONT = 'Calibri';
    const TITLE_FONT = 'Georgia';

    const runs = (text, base = {}) => tokens(text).map((tk) => (tk.link
      ? new D.ExternalHyperlink({ link: tk.link, children: [new D.TextRun({ text: tk.text.replace(/^https?:\/\//, ''), style: 'Hyperlink', ...base })] })
      : new D.TextRun({ text: tk.text, bold: tk.bold || base.bold, italics: tk.italic || base.italics, color: base.color, size: base.size, font: base.font })));
    const para = (text, opts = {}, base = {}) => new D.Paragraph({ children: runs(text, base), ...opts });

    const borderNone = { style: D.BorderStyle.NONE, size: 0, color: 'FFFFFF' };
    const noBorders = { top: borderNone, bottom: borderNone, left: borderNone, right: borderNone, insideHorizontal: borderNone, insideVertical: borderNone };

    // Encadré : tableau d'une cellule, filet doré à gauche, fond crème
    const box = (children, { fill = 'FFF8E6', line = 'F5A623' } = {}) => new D.Table({
      width: { size: 100, type: D.WidthType.PERCENTAGE },
      borders: { ...noBorders, left: { style: D.BorderStyle.SINGLE, size: 24, color: line } },
      rows: [new D.TableRow({ children: [new D.TableCell({
        shading: { type: D.ShadingType.CLEAR, color: 'auto', fill },
        margins: { top: 120, bottom: 120, left: 200, right: 200 },
        children,
      })] })],
    });
    const spacer = () => new D.Paragraph({ spacing: { after: 60 }, children: [] });

    function blocksDocx(blocks) {
      const out = [];
      blocks.forEach((b) => {
        if (b.type === 'h2') out.push(para(`${b.num} ${b.title}`, { heading: D.HeadingLevel.HEADING_2 }));
        else if (b.type === 'h3') out.push(para(`${b.num} ${b.title}`, { heading: D.HeadingLevel.HEADING_3 }));
        else if (b.type === 'h4') out.push(para(b.title, { heading: D.HeadingLevel.HEADING_4 }));
        else if (b.type === 'p') out.push(para(b.text));
        else if (b.type === 'ul') b.items.forEach((it) => out.push(para(it, { numbering: { reference: 'cd-bullets', level: 0 }, spacing: { after: 40 } })));
        else if (b.type === 'ol') {
          const ref = `cd-num-${out.length}-${Math.random().toString(36).slice(2, 6)}`;
          numberingConfigs.push({ reference: ref, levels: [{ level: 0, format: D.LevelFormat.DECIMAL, text: '%1.', start: b.start || 1, alignment: D.AlignmentType.START, style: { paragraph: { indent: { left: 440, hanging: 300 } } } }] });
          b.items.forEach((it) => out.push(para(it, { numbering: { reference: ref, level: 0 }, spacing: { after: 40 } })));
        } else if (b.type === 'table') {
          const cols = b.head.length || 1;
          out.push(new D.Table({
            width: { size: 100, type: D.WidthType.PERCENTAGE },
            borders: { ...noBorders, insideHorizontal: { style: D.BorderStyle.SINGLE, size: 4, color: 'E2E8F0' }, bottom: { style: D.BorderStyle.SINGLE, size: 8, color: 'F5A623' } },
            rows: [
              new D.TableRow({ tableHeader: true, children: b.head.map((c) => new D.TableCell({
                shading: { type: D.ShadingType.CLEAR, color: 'auto', fill: NAVY },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [para(c, { spacing: { after: 0 } }, { bold: true, color: 'FFFFFF', size: 19 })],
              })) }),
              ...b.rows.map((r, k) => new D.TableRow({ children: Array.from({ length: cols }, (_, j) => new D.TableCell({
                shading: k % 2 ? { type: D.ShadingType.CLEAR, color: 'auto', fill: 'F8FAFC' } : undefined,
                margins: { top: 70, bottom: 70, left: 120, right: 120 },
                children: [para(r[j] || '', { spacing: { after: 0 } }, { bold: j === 0, size: 19, color: j === 0 ? NAVY : undefined })],
              })) })),
            ],
          }));
          out.push(spacer());
        } else if (b.type === 'quote') {
          const children = [para(`« ${b.text} »`, { spacing: { after: 80 } }, { italics: true, size: 26, color: NAVY, font: TITLE_FONT })];
          if (b.cite) children.push(para(`— ${b.cite}`, { alignment: D.AlignmentType.RIGHT, spacing: { after: 0 } }, { color: GOLD, size: 19, bold: true }));
          out.push(box(children, { fill: 'F4F7FB', line: NAVY }), spacer());
        } else if (b.type === 'callout') {
          const inner = [];
          if (b.title) inner.push(para(b.title.toUpperCase(), { spacing: { after: 60 } }, { bold: true, color: GOLD, size: 18 }));
          inner.push(...blocksDocx(b.blocks));
          out.push(box(inner), spacer());
        } else if (b.type === 'cards') {
          b.items.forEach((it, k) => {
            out.push(box([
              para(`${String(k + 1).padStart(2, '0')}  ${it.title}`, { spacing: { after: 60 }, keepNext: true }, { bold: true, color: NAVY, size: 23, font: TITLE_FONT }),
              ...blocksDocx(it.blocks),
            ], { fill: 'FFFFFF', line: 'F5A623' }), spacer());
          });
        } else if (b.type === 'steps') {
          b.items.forEach((it, k) => {
            out.push(para(`Étape ${k + 1}`, { spacing: { before: 160, after: 0 }, keepNext: true }, { bold: true, color: GOLD, size: 17 }));
            out.push(para(it.title, { spacing: { after: 80 }, keepNext: true, border: { bottom: { style: D.BorderStyle.SINGLE, size: 6, color: 'F5A623', space: 2 } } }, { bold: true, color: NAVY, size: 25, font: TITLE_FONT }));
            out.push(...blocksDocx(it.blocks));
          });
          out.push(spacer());
        }
      });
      return out;
    }

    const numberingConfigs = [{
      reference: 'cd-bullets',
      levels: [{ level: 0, format: D.LevelFormat.BULLET, text: '•', alignment: D.AlignmentType.START, style: { paragraph: { indent: { left: 440, hanging: 260 } }, run: { color: 'F5A623', bold: true } } }],
    }];

    const meta = doc.meta;
    const assets = ASSETS();
    const [logo, seal] = await Promise.all([imageBytes(assets.logo), imageBytes(assets.seal)]);

    // Couverture
    const cover = [
      new D.Paragraph({ spacing: { before: 1400 }, alignment: D.AlignmentType.CENTER, children: logo ? [new D.ImageRun({ type: 'png', data: logo, transformation: { width: 92, height: 92 } })] : [] }),
      para('LE MONDE DU TRAVAIL', { alignment: D.AlignmentType.CENTER, spacing: { before: 240, after: 80 } }, { bold: true, color: GOLD, size: 20 }),
      meta.mention ? para(meta.mention, { alignment: D.AlignmentType.CENTER, spacing: { after: 600 } }, { color: MUTED, size: 18 }) : spacer(),
      para(meta.title || 'Document de référence', { alignment: D.AlignmentType.CENTER, spacing: { after: 120 } }, { bold: true, color: NAVY, size: 64, font: TITLE_FONT }),
      meta.acronym ? para(meta.acronym, { alignment: D.AlignmentType.CENTER, spacing: { after: 240 } }, { color: GOLD, size: 26, bold: true }) : spacer(),
      new D.Paragraph({ alignment: D.AlignmentType.CENTER, spacing: { after: 240 }, children: [new D.TextRun({ text: '━━━━━━━━', color: 'F5A623' })] }),
      meta.subtitle ? para(meta.subtitle, { alignment: D.AlignmentType.CENTER, spacing: { after: 360 } }, { color: INK, size: 28 }) : spacer(),
      meta.motto ? para(`« ${meta.motto.replace(/^«\s*|\s*»$/g, '')} »`, { alignment: D.AlignmentType.CENTER, spacing: { after: 1200 } }, { italics: true, color: NAVY, size: 30, font: TITLE_FONT }) : spacer(),
      new D.Paragraph({ alignment: D.AlignmentType.CENTER, children: seal ? [new D.ImageRun({ type: 'png', data: seal, transformation: { width: 84, height: 84 } })] : [] }),
      meta.site ? para(meta.site.replace(/^https?:\/\//, ''), { alignment: D.AlignmentType.CENTER, spacing: { before: 120 } }, { bold: true, color: NAVY, size: 20 }) : spacer(),
      para(info.updatedAt ? `Version du ${frDate(info.updatedAt)}` : 'Version d\'origine', { alignment: D.AlignmentType.CENTER }, { color: MUTED, size: 18 }),
    ];

    // Sommaire (liste fixe : Word peut aussi générer le sien via Références › Table des matières)
    const toc = [
      para('Sommaire', { heading: D.HeadingLevel.TITLE, pageBreakBefore: true }),
      ...doc.chapters.map((c) => new D.Paragraph({
        spacing: { after: 100 },
        tabStops: [{ type: D.TabStopType.LEFT, position: 760 }],
        border: { bottom: { style: D.BorderStyle.DOTTED, size: 4, color: 'CBD5E1', space: 4 } },
        children: [new D.TextRun({ text: roman(c.num), bold: true, color: GOLD, size: 22 }), new D.TextRun({ text: `\t${c.title}`, color: NAVY, size: 22 })],
      })),
    ];

    const body = [];
    if (doc.intro.length) body.push(...blocksDocx(doc.intro));
    doc.chapters.forEach((c) => {
      body.push(para(`PARTIE ${roman(c.num)}`, { pageBreakBefore: true, spacing: { after: 40 } }, { bold: true, color: GOLD, size: 18 }));
      body.push(para(c.title, { heading: D.HeadingLevel.HEADING_1 }));
      body.push(...blocksDocx(c.blocks));
    });
    body.push(new D.Paragraph({ alignment: D.AlignmentType.CENTER, spacing: { before: 480 }, children: [new D.TextRun({ text: meta.acronym || 'WOW · World Of Work', bold: true, color: NAVY, size: 22 })] }));
    if (meta.motto) body.push(para(`« ${meta.motto.replace(/^«\s*|\s*»$/g, '')} »`, { alignment: D.AlignmentType.CENTER }, { italics: true, color: GOLD, size: 22 }));

    const file = new D.Document({
      creator: 'Le Monde du Travail',
      title: fileName(doc),
      description: meta.subtitle || '',
      styles: {
        default: { document: { run: { font: FONT, size: 21, color: INK }, paragraph: { spacing: { after: 120, line: 300 } } } },
        paragraphStyles: [
          { id: 'Title', name: 'Title', basedOn: 'Normal', next: 'Normal', run: { font: TITLE_FONT, size: 44, bold: true, color: NAVY }, paragraph: { spacing: { after: 300 } } },
          { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { font: TITLE_FONT, size: 40, bold: true, color: NAVY }, paragraph: { spacing: { after: 280 }, border: { bottom: { style: D.BorderStyle.SINGLE, size: 12, color: 'F5A623', space: 6 } } } },
          { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { font: TITLE_FONT, size: 30, bold: true, color: NAVY }, paragraph: { spacing: { before: 360, after: 140 }, keepNext: true } },
          { id: 'Heading3', name: 'Heading 3', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 24, bold: true, color: GOLD }, paragraph: { spacing: { before: 240, after: 100 }, keepNext: true } },
          { id: 'Heading4', name: 'Heading 4', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 22, bold: true, color: NAVY }, paragraph: { spacing: { before: 180, after: 80 }, keepNext: true } },
        ],
      },
      numbering: { config: numberingConfigs },
      sections: [
        { properties: { page: { margin: { top: 1200, bottom: 1200, left: 1300, right: 1300 } } }, children: cover },
        {
          properties: { page: { margin: { top: 1300, bottom: 1300, left: 1300, right: 1300 }, pageNumbers: { start: 2 } } },
          headers: { default: new D.Header({ children: [new D.Paragraph({ alignment: D.AlignmentType.RIGHT, children: [new D.TextRun({ text: 'LE MONDE DU TRAVAIL · WOW', bold: true, color: GOLD, size: 15 })] })] }) },
          footers: { default: new D.Footer({ children: [new D.Paragraph({
            tabStops: [{ type: D.TabStopType.RIGHT, position: D.TabStopPosition.MAX }],
            children: [
              new D.TextRun({ text: (meta.site || 'lemondedutravail.org').replace(/^https?:\/\//, ''), color: MUTED, size: 15 }),
              new D.TextRun({ children: ['\tPage ', D.PageNumber.CURRENT, ' / ', D.PageNumber.TOTAL_PAGES], color: MUTED, size: 15 }),
            ],
          })] }) },
          children: [...toc, ...body],
        },
      ],
    });

    const blob = await D.Packer.toBlob(file);
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `${fileName(doc)}.docx`;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
  }

  // ===== Vue dans l'Espace Bureau =====

  const HELP = [
    ['# Titre', 'Nouvelle partie (numérotée I, II, III… et ajoutée au sommaire)'],
    ['## Titre', 'Section de la partie (numérotée 1., 2.…)'],
    ['### Titre', 'Sous-section (1.1, 1.2…)'],
    ['#### Titre', 'Petit titre sans numéro'],
    ['- texte', 'Liste à puces (une ligne par élément)'],
    ['1. texte', 'Liste numérotée'],
    ['**texte**', 'Texte en gras'],
    ['*texte*', 'Texte en italique'],
    ['| A | B |', 'Tableau : une ligne par rangée, la première sert d\'en-tête'],
    ['> texte\n> — Auteur', 'Citation, avec son auteur sur la ligne « — »'],
    ['::: encadre Titre\ntexte\n:::', 'Encadré doré pour un message important'],
    ['::: cartes\n### Titre\ntexte\n:::', 'Cartes côte à côte (valeurs, postes…)'],
    ['::: etapes\n### Phase 1\ntexte\n:::', 'Frise d\'étapes (phases d\'un projet)'],
    ['Ligne vide', 'Sépare deux paragraphes'],
  ];

  const SNIPPETS = {
    chapter: '\n# Titre de la nouvelle partie\n\nTexte d\'introduction.\n',
    section: '\n## Titre de la section\n\n',
    sub: '\n### Titre de la sous-section\n\n',
    bold: ['**', '**', 'texte en gras'],
    italic: ['*', '*', 'texte en italique'],
    list: '\n- Premier élément\n- Deuxième élément\n',
    olist: '\n1. Première étape\n2. Deuxième étape\n',
    table: '\n| Colonne 1 | Colonne 2 |\n| Valeur | Valeur |\n| Valeur | Valeur |\n',
    callout: '\n::: encadre À retenir\nLe message important.\n:::\n',
    cards: '\n::: cartes\n### Première carte\nTexte de la carte.\n\n### Deuxième carte\nTexte de la carte.\n:::\n',
    steps: '\n::: etapes\n### Phase 1 : Titre\n- Action\n- Action\n\n### Phase 2 : Titre\n- Action\n:::\n',
    quote: '\n> La citation.\n> — Auteur · Pays\n',
  };

  const TOOLBAR = [
    ['chapter', 'Partie', 'Nouvelle partie (# Titre)'], ['section', 'Section', 'Section (## Titre)'], ['sub', 'Sous-section', 'Sous-section (### Titre)'],
    ['bold', 'G', 'Gras (**texte**)'], ['italic', 'I', 'Italique (*texte*)'], ['list', '• Liste', 'Liste à puces'], ['olist', '1. Liste', 'Liste numérotée'],
    ['table', 'Tableau', 'Insérer un tableau'], ['callout', 'Encadré', 'Encadré doré'], ['cards', 'Cartes', 'Cartes côte à côte'],
    ['steps', 'Étapes', 'Frise d\'étapes'], ['quote', 'Citation', 'Citation avec auteur'],
  ];

  function render(root, data, api) {
    const doc = parse(data.content);
    const info = { updatedAt: data.updatedAt, assets: ASSETS() };
    const updated = data.updatedAt
      ? `Mis à jour le ${esc(frDate(data.updatedAt))}${data.updatedBy ? ` par ${esc(data.updatedBy)}` : ''}`
      : 'Version d\'origine remise par la Présidence';
    root.innerHTML = `
      <div class="cd-shell">
        <div class="cd-actions">
          <div class="cd-actions-text">
            <h2>📘 Document de référence du club</h2>
            <p>${updated} · ${doc.chapters.length} parties. Présentation, organisation et fonctionnement du Monde du Travail.</p>
          </div>
          <div class="cd-actions-btns">
            <button type="button" class="cd-btn cd-btn-gold" data-cd="pdf">⬇️ PDF</button>
            <button type="button" class="cd-btn" data-cd="docx">📝 Word</button>
            ${data.canEdit ? '<button type="button" class="cd-btn cd-btn-navy" data-cd="edit">✏️ Modifier</button>' : ''}
            ${data.canEdit && data.hasPrevious ? '<button type="button" class="cd-btn cd-btn-ghost" data-cd="restore" title="Annuler la dernière modification enregistrée">↩️ Version précédente</button>' : ''}
          </div>
        </div>
        ${updatesBanner(data)}
        <div class="cd-layout">
          <aside class="cd-side">
            <details class="cd-side-box" open>
              <summary>Sommaire</summary>
              <ol>${doc.chapters.map((c) => `<li><a href="#${c.id}"><span>${roman(c.num)}</span>${inline(c.title)}</a></li>`).join('')}</ol>
            </details>
          </aside>
          <article class="cd-doc cd-screen">${bodyHtml(doc, info)}</article>
        </div>
      </div>`;

    // Le sommaire reste fermé par défaut sur téléphone
    if (window.matchMedia('(max-width: 960px)').matches) root.querySelector('.cd-side-box')?.removeAttribute('open');

    root.querySelectorAll('.cd-side a, .cd-toc a').forEach((a) => a.addEventListener('click', (e) => {
      const el = document.getElementById(a.getAttribute('href').slice(1));
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }));

    root.querySelector('[data-cd="pdf"]').addEventListener('click', () => downloadPdf(data.content, info));
    root.querySelector('[data-cd="docx"]').addEventListener('click', async (e) => {
      const btn = e.currentTarget;
      btn.disabled = true;
      const label = btn.textContent;
      btn.textContent = '⏳ Préparation…';
      try { await downloadDocx(data.content, info); } catch (error) { api.toast(error.message || 'Fichier Word impossible à créer', 'error'); }
      btn.disabled = false;
      btn.textContent = label;
    });
    root.querySelector('[data-cd="edit"]')?.addEventListener('click', () => openEditor(root, data, api));
    root.querySelector('[data-cd="updates"]')?.addEventListener('click', () => openUpdates(root, data, api));
    root.querySelector('[data-cd="restore"]')?.addEventListener('click', async () => {
      const when = data.previousAt ? `du ${frDate(data.previousAt)}` : 'd\'origine';
      if (!window.confirm(`Revenir à la version ${when} ? La version actuelle restera récupérable avec ce même bouton.`)) return;
      try {
        const res = await api.restore();
        api.toast('Version précédente rétablie');
        render(root, res.data, api);
      } catch (error) {
        api.toast(error.message, 'error');
      }
    });
  }

  // ===== Mises à jour du texte de référence (Présidence) =====

  function updatesBanner(data) {
    const list = data.updates || [];
    if (!data.canEdit || !list.length) return '';
    const safe = list.filter((u) => u.status === 'safe').length;
    const edited = list.length - safe;
    return `
      <div class="cd-updates" role="status">
        <p><strong>🔄 Le texte de référence a été mis à jour sur ${list.length} partie${list.length > 1 ? 's' : ''}</strong> que ta version enregistrée ne contient pas encore
        (${list.map((u) => esc(u.title)).join(' · ')}).
        ${safe ? `${safe} peu${safe > 1 ? 'vent' : 't'} être appliquée${safe > 1 ? 's' : ''} sans toucher à tes modifications` : ''}${safe && edited ? ' ; ' : ''}${edited ? `${edited} que tu as modifiée${edited > 1 ? 's' : ''} demande${edited > 1 ? 'nt' : ''} ton choix` : ''}.</p>
        <button type="button" class="cd-btn cd-btn-gold" data-cd="updates">Voir et appliquer</button>
      </div>`;
  }

  // Une partie (« # Titre » + contenu) rendue comme dans le document
  function partHtml(text) {
    const doc = parse(text);
    const c = doc.chapters[0];
    if (!c) return doc.intro.map(blockHtml).join('');
    return `<h4 class="cd-cmp-title">${inline(c.title)}</h4>${c.blocks.map(blockHtml).join('')}`;
  }

  function openUpdates(root, data, api) {
    const overlay = document.createElement('div');
    overlay.className = 'cd-editor cd-merge';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Mises à jour du document');
    overlay.innerHTML = `
      <header class="cd-editor-bar">
        <div class="cd-editor-title"><strong>🔄 Mises à jour du texte de référence</strong><span>Coche les parties à mettre à jour. Les autres parties de ta version ne bougent pas.</span></div>
        <div class="cd-editor-btns">
          <button type="button" class="cd-btn cd-btn-ghost" data-mg="close">Fermer</button>
          <button type="button" class="cd-btn cd-btn-gold" data-mg="apply">✅ Appliquer la sélection</button>
        </div>
      </header>
      <div class="cd-merge-body">
        ${data.updates.map((u) => `
          <section class="cd-merge-item">
            <label class="cd-merge-head">
              <input type="checkbox" value="${esc(u.key)}" ${u.status === 'safe' ? 'checked' : ''}>
              <span class="cd-merge-name">${esc(u.title)}</span>
              <span class="cd-merge-badge ${u.status === 'safe' ? 'is-safe' : 'is-edited'}">${u.status === 'safe' ? 'Tu n\'as pas modifié cette partie' : 'Tu as modifié cette partie : compare avant de choisir'}</span>
            </label>
            <details ${u.status === 'safe' ? '' : 'open'}>
              <summary>Comparer ta version et la mise à jour</summary>
              <div class="cd-merge-cols">
                <div><p class="cd-merge-label">Ta version actuelle</p><div class="cd-doc cd-screen cd-mini">${partHtml(u.mine)}</div></div>
                <div><p class="cd-merge-label">Mise à jour proposée</p><div class="cd-doc cd-screen cd-mini">${partHtml(u.proposed)}</div></div>
              </div>
            </details>
          </section>`).join('')}
        <p class="cd-merge-note">Après application, « ↩️ Version précédente » permet de revenir à ta version actuelle si besoin.</p>
      </div>`;
    document.body.appendChild(overlay);
    document.body.classList.add('bx-no-scroll');
    const close = () => { overlay.remove(); document.body.classList.remove('bx-no-scroll'); };
    overlay.addEventListener('click', async (e) => {
      const action = e.target.closest('[data-mg]')?.dataset.mg;
      if (action === 'close') close();
      if (action !== 'apply') return;
      const keys = [...overlay.querySelectorAll('input[type="checkbox"]:checked')].map((i) => i.value);
      if (!keys.length) { api.toast('Coche au moins une partie', 'error'); return; }
      const btn = e.target.closest('[data-mg]');
      btn.disabled = true;
      btn.textContent = '⏳ Application…';
      try {
        const res = await api.applyUpdates(keys);
        close();
        api.toast(`${keys.length} partie${keys.length > 1 ? 's' : ''} mise${keys.length > 1 ? 's' : ''} à jour ✅`);
        render(root, res.data, api);
      } catch (error) {
        btn.disabled = false;
        btn.textContent = '✅ Appliquer la sélection';
        api.toast(error.message || 'Mise à jour impossible', 'error');
      }
    });
  }

  function openEditor(root, data, api) {
    const overlay = document.createElement('div');
    overlay.className = 'cd-editor';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Modifier le document de référence');
    overlay.innerHTML = `
      <header class="cd-editor-bar">
        <div class="cd-editor-title"><strong>✏️ Modifier le document</strong><span data-ed="status">Aucune modification</span></div>
        <div class="cd-editor-btns">
          <button type="button" class="cd-btn cd-btn-ghost" data-ed="help" aria-expanded="false">❔ Aide</button>
          <button type="button" class="cd-btn cd-btn-ghost" data-ed="cancel">Annuler</button>
          <button type="button" class="cd-btn cd-btn-gold" data-ed="save">💾 Enregistrer</button>
        </div>
      </header>
      <div class="cd-editor-tools" role="toolbar" aria-label="Mise en forme">
        ${TOOLBAR.map(([key, label, title]) => `<button type="button" data-snippet="${key}" title="${esc(title)}" class="${key === 'bold' ? 'is-bold' : key === 'italic' ? 'is-italic' : ''}">${esc(label)}</button>`).join('')}
        <span class="cd-editor-views" role="tablist" aria-label="Affichage">
          <button type="button" data-view="text" class="is-active">Texte</button><button type="button" data-view="preview">Aperçu</button>
        </span>
      </div>
      <div class="cd-editor-help" hidden>
        <p>Écris normalement : la mise en page (couverture, sommaire, numérotation, couleurs) se fait toute seule. Les symboles en début de ligne indiquent le type de bloc.</p>
        <table>${HELP.map(([code, what]) => `<tr><td><code>${esc(code).replace(/\n/g, '<br>')}</code></td><td>${esc(what)}</td></tr>`).join('')}</table>
        <p>Le tout début du texte (avant la ligne <code>---</code>) remplit la couverture : <code>titre:</code>, <code>sigle:</code>, <code>sous-titre:</code>, <code>devise:</code>, <code>site:</code>, <code>mention:</code>.</p>
      </div>
      <div class="cd-editor-panes" data-mode="text">
        <label class="cd-editor-pane cd-editor-text"><span class="cd-sr">Texte du document</span><textarea spellcheck="true" lang="fr"></textarea></label>
        <div class="cd-editor-pane cd-editor-preview"><article class="cd-doc cd-screen cd-mini"></article></div>
      </div>`;
    document.body.appendChild(overlay);
    document.body.classList.add('bx-no-scroll');

    const ta = overlay.querySelector('textarea');
    const preview = overlay.querySelector('.cd-mini');
    const status = overlay.querySelector('[data-ed="status"]');
    ta.value = data.content;
    let dirty = false;
    let timer = null;

    const paint = () => { preview.innerHTML = bodyHtml(parse(ta.value), { updatedAt: new Date(), assets: ASSETS() }); };
    paint();

    const guard = (e) => { if (dirty) { e.preventDefault(); e.returnValue = ''; } };
    window.addEventListener('beforeunload', guard);
    const close = () => {
      window.removeEventListener('beforeunload', guard);
      document.removeEventListener('keydown', onKey, true);
      overlay.remove();
      document.body.classList.remove('bx-no-scroll');
    };

    ta.addEventListener('input', () => {
      if (!dirty) { dirty = true; status.textContent = 'Modifications non enregistrées'; status.classList.add('is-dirty'); }
      clearTimeout(timer);
      timer = setTimeout(paint, 350);
    });

    function insert(key) {
      const snip = SNIPPETS[key];
      const { selectionStart: s, selectionEnd: e, value } = ta;
      let text;
      let caretStart;
      let caretEnd;
      if (Array.isArray(snip)) {
        const inner = value.slice(s, e) || snip[2];
        text = `${snip[0]}${inner}${snip[1]}`;
        caretStart = s + snip[0].length;
        caretEnd = caretStart + inner.length;
      } else {
        text = snip;
        caretStart = s + snip.length;
        caretEnd = caretStart;
      }
      ta.focus();
      ta.setRangeText(text, s, e, 'end');
      ta.setSelectionRange(caretStart, caretEnd);
      ta.dispatchEvent(new Event('input'));
    }

    async function save() {
      const btn = overlay.querySelector('[data-ed="save"]');
      if (!ta.value.trim()) { api.toast('Le document est vide', 'error'); return; }
      btn.disabled = true;
      btn.textContent = '⏳ Enregistrement…';
      try {
        const res = await api.save(ta.value);
        dirty = false;
        close();
        api.toast('Document enregistré ✅');
        render(root, res.data, api);
      } catch (error) {
        btn.disabled = false;
        btn.textContent = '💾 Enregistrer';
        api.toast(error.message || 'Enregistrement impossible', 'error');
      }
    }

    function cancel() {
      if (dirty && !window.confirm('Abandonner les modifications non enregistrées ?')) return;
      close();
    }

    function onKey(e) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') { e.preventDefault(); save(); }
      if (e.key === 'Escape') { e.stopPropagation(); cancel(); }
    }
    document.addEventListener('keydown', onKey, true);

    overlay.addEventListener('click', (e) => {
      const snippet = e.target.closest('[data-snippet]')?.dataset.snippet;
      if (snippet) insert(snippet);
      const view = e.target.closest('[data-view]')?.dataset.view;
      if (view) {
        overlay.querySelector('.cd-editor-panes').dataset.mode = view;
        overlay.querySelectorAll('[data-view]').forEach((b) => b.classList.toggle('is-active', b.dataset.view === view));
        if (view === 'preview') paint();
      }
      const action = e.target.closest('[data-ed]')?.dataset.ed;
      if (action === 'save') save();
      if (action === 'cancel') cancel();
      if (action === 'help') {
        const help = overlay.querySelector('.cd-editor-help');
        help.hidden = !help.hidden;
        e.target.closest('[data-ed]').setAttribute('aria-expanded', String(!help.hidden));
      }
    });
    ta.focus();
    ta.setSelectionRange(0, 0);
    ta.scrollTop = 0;
  }

  async function mount(root, api) {
    root.innerHTML = '<div class="bx-loading"><span class="bx-spinner"></span> Chargement du document…</div>';
    const res = await api.load();
    render(root, res.data, api);
  }

  window.ClubDocument = { parse, mount, downloadPdf, downloadDocx };
})();
