/**
 * Film de présentation du club Le Monde du Travail (WOW · World Of Work).
 * Animation déterministe : window.renderAt(t) dessine l'image à l'instant t (secondes),
 * render.js capture chaque image puis ffmpeg assemble la vidéo. Deux montages partagent
 * les mêmes scènes : « h » (YouTube 16:9, ~60 s) et « v » (TikTok 9:16, ~40 s).
 */
(function () {
  'use strict';

  const params = new URLSearchParams(location.search);
  const F = params.get('format') === 'v' ? 'v' : 'h';
  const H = F === 'h';
  const W = H ? 1920 : 1080;
  const HT = H ? 1080 : 1920;
  document.documentElement.className = F;
  const stage = document.getElementById('stage');
  const A = 'assets/';

  // ===================== Moteur d'animation =====================

  const tracks = new Map();
  const IDENT = { o: 1, x: 0, y: 0, xp: 0, yp: 0, s: 1, r: 0, blur: 0 };
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const E = {
    lin: (p) => p,
    out: (p) => (p >= 1 ? 1 : 1 - Math.pow(2, -10 * p)),
    in: (p) => (p <= 0 ? 0 : Math.pow(2, 10 * p - 10)),
    io: (p) => (p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2),
    back: (p) => { const c = 1.6; return 1 + (c + 1) * Math.pow(p - 1, 3) + c * Math.pow(p - 1, 2); },
    soft: (p) => 1 - Math.pow(1 - p, 3),
  };
  const list = (el) => (el instanceof Element ? [el] : Array.from(el));
  const track = (el) => {
    if (!tracks.has(el)) tracks.set(el, { base: { ...IDENT }, tw: [] });
    return tracks.get(el);
  };
  function set(el, props) { list(el).forEach((e) => Object.assign(track(e).base, props)); }
  function tw(el, t, d, props, ease = 'out', stagger = 0) {
    list(el).forEach((e, i) => track(e).tw.push({ t: t + i * stagger, d, p: props, ease }));
  }

  const CUES = [];
  const cue = (t, type, gain = 1) => CUES.push({ t: +t.toFixed(3), type, gain });

  function apply(el, v) {
    const st = el.style;
    st.opacity = clamp(v.o);
    // Élément invisible : on ne le peint pas (gros gain en rendu logiciel)
    st.visibility = v.o <= 0.002 ? 'hidden' : '';
    st.transform = `translate(${v.x}px, ${v.y}px) translate(${v.xp}%, ${v.yp}%) scale(${v.s}) rotate(${v.r}deg)`;
    st.filter = v.blur > 0.05 ? `blur(${v.blur}px)` : 'none';
    if ('ct' in v || 'cr' in v || 'cb' in v || 'cl' in v) st.clipPath = `inset(${v.ct || 0}% ${v.cr || 0}% ${v.cb || 0}% ${v.cl || 0}%)`;
    if ('wd' in v) st.width = `${v.wd}px`;
    if ('ht' in v) st.height = `${v.ht}px`;
    if ('bgx' in v) st.backgroundPosition = `${v.bgx}% 50%`;
    if ('ls' in v) st.letterSpacing = `${v.ls}em`;
    if ('dash' in v) st.strokeDashoffset = (1 - v.dash) * (el.__len || 1);
    if ('n' in v) el.textContent = Math.round(v.n).toLocaleString('fr-FR');
  }

  function renderAt(T) {
    for (const [el, k] of tracks) {
      const v = { ...k.base };
      for (const w of k.tw) {
        if (T < w.t) continue;
        const e = E[w.ease](w.d ? clamp((T - w.t) / w.d) : 1);
        for (const key in w.p) {
          const from = v[key] ?? IDENT[key] ?? 0;
          v[key] = from + (w.p[key] - from) * e;
        }
      }
      apply(el, v);
    }
    ambient(T);
  }

  // ===================== Outils de mise en page =====================

  const html = (s) => { const d = document.createElement('div'); d.innerHTML = s.trim(); return d.firstElementChild; };
  function add(parent, s) { const el = html(s); parent.appendChild(el); return el; }
  const $ = (root, sel) => root.querySelector(sel);
  const $$ = (root, sel) => root.querySelectorAll(sel);

  // Mots découpés pour une révélation par masque ; *texte* = italique doré
  function words(text) {
    return text.split(' ').map((w) => {
      const em = /^\*.*\*[.,!?]?$/.test(w);
      const clean = w.replace(/\*/g, '');
      return `<span class="w"><span class="wi">${em ? `<em>${clean}</em>` : clean}</span></span>`;
    }).join(' ');
  }
  function reveal(el, t, { stagger = 0.07, d = 0.9 } = {}) {
    const inner = $$(el, '.wi');
    // Le dégradé doré (background-clip: text) doit être porté par chaque mot animé
    if (el.classList.contains('gold-text')) { el.classList.remove('gold-text'); inner.forEach((w) => w.classList.add('gold-text')); }
    set(inner, { yp: 115, o: 0 });
    tw(inner, t, d, { yp: 0, o: 1 }, 'out', stagger);
    return t + inner.length * stagger + d;
  }
  function popIn(el, t, { y = 40, d = 0.8, stagger = 0, s = 0.96, blur = 8 } = {}) {
    set(el, { o: 0, y, s, blur });
    tw(el, t, d, { o: 1, y: 0, s: 1, blur: 0 }, 'out', stagger);
  }
  function fadeOut(el, t, { d = 0.45, y = -30, blur = 10 } = {}) {
    tw(el, t, d, { o: 0, y, blur }, 'in');
  }

  // Entrée / sortie de scène : léger zoom et flou
  function scene(t0, d, cls = '') {
    const el = add(stage, `<section class="scene ${cls}"></section>`);
    set(el, { o: 0, s: 1.05, blur: 14 });
    tw(el, t0, 0.55, { o: 1, s: 1, blur: 0 }, 'out');
    tw(el, t0 + d - 0.42, 0.42, { o: 0, s: 0.97, blur: 12 }, 'in');
    return el;
  }
  function transition(t) {
    tw(sweep, t - 0.3, 0.001, { o: 1, xp: -100 }, 'lin');
    tw(sweep, t - 0.3, 0.75, { xp: 100 }, 'io');
    tw(sweep, t + 0.45, 0.001, { o: 0 }, 'lin');
    cue(t - 0.45, 'whoosh');
  }
  function flash(t, strength = 1) {
    tw(flashEl, t, 0.06, { o: strength }, 'lin');
    tw(flashEl, t + 0.06, 0.9, { o: 0 }, 'out');
  }

  const phone = (src, cls = '') => `<div class="phone ${cls}"><div class="screen"><div class="notch"></div><img src="${A}shots/${src}"></div><div class="glare"></div></div>`;
  const laptop = (src, cls = '') => `<div class="laptop ${cls}"><div class="lid"><div class="screen"><img src="${A}shots/${src}"><div class="glare"></div></div></div><div class="base"></div></div>`;

  // ===================== Fond permanent =====================

  const bg = add(stage, '<div class="layer" id="bg"><div class="grid-lines"></div><div class="blob blob-sky"></div><div class="blob blob-gold"></div></div>');
  const grid = $(bg, '.grid-lines');
  const blobSky = $(bg, '.blob-sky');
  const blobGold = $(bg, '.blob-gold');
  const dust = [];
  let seed = 7;
  const rnd = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
  for (let i = 0; i < 38; i += 1) {
    const el = add(bg, '<div class="dust"></div>');
    dust.push({ el, x: rnd() * W, y: rnd() * HT, sp: 8 + rnd() * 26, ph: rnd() * 6.28, sz: 0.4 + rnd() * 0.9 });
  }
  function ambient(T) {
    blobSky.style.transform = `translate(${W * 0.05 + Math.sin(T * 0.21) * 160}px, ${HT * 0.1 + Math.cos(T * 0.17) * 120}px)`;
    blobGold.style.transform = `translate(${W * 0.55 + Math.cos(T * 0.19) * 180}px, ${HT * 0.45 + Math.sin(T * 0.23) * 140}px)`;
    grid.style.transform = `translate(${(T * 6) % 120}px, ${(T * 4) % 120}px)`;
    for (const p of dust) {
      const y = ((p.y - T * p.sp) % HT + HT) % HT;
      p.el.style.transform = `translate(${p.x + Math.sin(T * 0.6 + p.ph) * 24}px, ${y}px) scale(${p.sz})`;
      p.el.style.opacity = 0.25 + 0.45 * (0.5 + 0.5 * Math.sin(T * 1.3 + p.ph));
    }
  }

  // Calques supérieurs créés d'emblée (utilisés par les scènes), affichés au-dessus via z-index
  const sweep = add(stage, '<div class="layer" id="sweep" style="z-index:40"></div>');
  const flashEl = add(stage, '<div class="layer" id="flash" style="z-index:41"></div>');
  add(stage, '<div class="layer" id="vignette" style="z-index:42"></div>');
  const brand = add(stage, `<div id="brandmark" style="z-index:43"><img src="${A}img/wow-seal.svg">WOW · Le Monde du Travail</div>`);
  const fade = add(stage, '<div class="layer" style="background:#000;z-index:44"></div>');

  // ===================== Montage =====================

  const PLAN = H
    ? { hook: [0, 5], gap: [5, 5.4], logo: [10.4, 5.2], org: [15.6, 6.8], mentors: [22.4, 4.2], pilot: [26.6, 4.2], values: [30.8, 4.8], platform: [35.6, 13.8], montage: [49.4, 4.2], cta: [53.6, 6.4] }
    : { hook: [0, 3.6], gap: [3.6, 4.2], logo: [7.8, 3.6], org: [11.4, 4.4], mentors: [15.8, 3.4], pilot: [19.2, 3.2], values: [22.4, 3.3], platform: [25.7, 8.5], montage: [34.2, 2.4], cta: [36.6, 4.4] };
  const DURATION = PLAN.cta[0] + PLAN.cta[1];

  // ---------- 1. L'accroche ----------
  {
    const [t0, d] = PLAN.hook;
    const el = scene(t0, d);
    tw(el, t0, 0.001, { o: 1, s: 1, blur: 0 }, 'lin'); // première image : pas de fondu
    const line = add(el, `<div class="hairline" style="left:50%;top:${HT / 2 + (H ? 205 : 250)}px"></div>`);
    set(line, { wd: 0, xp: -50, o: 1 });
    tw(line, t0 + 0.15, 1.3, { wd: H ? 980 : 760 }, 'io');
    const box = add(el, `<div class="center"><div class="display xl">${words('On sort diplômé.')}</div><div class="display xl gold-text" style="margin-top:${H ? 10 : 24}px;font-style:italic">${words('Rarement prêt.')}</div></div>`);
    const [l1, l2] = $$(box, '.display');
    reveal(l1, t0 + 0.45, { stagger: 0.12, d: 1 });
    const k = d / 5;
    reveal(l2, t0 + 1.9 * k + 0.2, { stagger: 0.14, d: 1 });
    set($$(l2, '.wi'), { bgx: 100 });
    tw($$(l2, '.wi'), t0 + 1.9 * k, 2.6, { bgx: 0 }, 'soft');
    cue(t0 + 0.4, 'hit', 0.5);
    cue(t0 + 1.9 * k + 0.2, 'hit', 0.8);
  }

  // ---------- 2. Le fossé, puis le pont ----------
  {
    const [t0, d] = PLAN.gap;
    const el = scene(t0, d);
    transition(t0);
    const G = H
      ? { l: [160, 640, 700], r: [1220, 640, 1760], path: 'M700 640 Q960 790 1220 640', msgTop: 860, sideTop: 430 }
      : { l: [80, 860, 420], r: [660, 860, 1000], path: 'M420 860 Q540 990 660 860', msgTop: 1180, sideTop: 0 };
    const left = add(el, `<div class="gap-side" style="left:${G.l[0]}px;top:${G.l[1] - 150}px"><span class="kicker">L'école</span><strong>Le diplôme</strong></div>`);
    const right = add(el, `<div class="gap-side" style="right:${W - G.r[2]}px;top:${G.r[1] - 150}px;text-align:right"><span class="kicker">Le terrain</span><strong>Le premier poste</strong></div>`);
    const svg = add(el, `<svg class="bridge" width="${W}" height="${HT}" viewBox="0 0 ${W} ${HT}" style="left:0;top:0">
      <line x1="${G.l[0]}" y1="${G.l[1]}" x2="${G.l[2]}" y2="${G.l[1]}" stroke="#f5a623" stroke-width="3" class="ledge"/>
      <line x1="${G.r[0]}" y1="${G.r[1]}" x2="${G.r[2]}" y2="${G.r[1]}" stroke="#f5a623" stroke-width="3" class="ledge"/>
      <path class="arc" d="${G.path}"/><path class="deck" d="${G.path}" transform="translate(0 -14)"/></svg>`);
    const cliffL = add(el, `<div class="cliff" style="left:${G.l[2] - 2}px;top:${G.l[1]}px;height:220px"></div>`);
    const cliffR = add(el, `<div class="cliff" style="left:${G.r[0]}px;top:${G.r[1]}px;height:220px"></div>`);
    const msg1 = add(el, `<div class="lead" style="position:absolute;left:${H ? 0 : 80}px;right:${H ? 0 : 80}px;top:${G.msgTop}px;text-align:center">${words('Entre les deux, un fossé que personne ne comble.')}</div>`);
    const msg2 = add(el, `<div class="display m" style="position:absolute;left:0;right:0;top:${G.msgTop - (H ? 20 : 10)}px;text-align:center">${words('Le club, c\'est ce *pont.*')}</div>`);
    const k = d / 5.4;
    popIn(left, t0 + 0.3, { y: 30 });
    popIn(right, t0 + 0.5, { y: 30 });
    const ledges = $$(svg, '.ledge');
    set(ledges, { o: 0 });
    tw(ledges, t0 + 0.4, 0.6, { o: 1 }, 'out', 0.15);
    set([cliffL, cliffR], { o: 0, ct: 0, cb: 100 });
    tw([cliffL, cliffR], t0 + 0.6, 0.9, { o: 1, cb: 0 }, 'out', 0.1);
    reveal(msg1, t0 + 0.9 * k, { stagger: 0.05, d: 0.7 });
    fadeOut(msg1, t0 + 2.9 * k);
    const arc = $(svg, '.arc');
    const deck = $(svg, '.deck');
    [arc, deck].forEach((p) => { p.__len = p.getTotalLength(); p.style.strokeDasharray = p === arc ? `${p.__len}` : '2 16'; });
    set(arc, { dash: 0 });
    tw(arc, t0 + 2.6 * k, 1.1, { dash: 1 }, 'io');
    set(deck, { o: 0 });
    tw(deck, t0 + 3.2 * k, 0.6, { o: 1 });
    reveal(msg2, t0 + 3.2 * k, { stagger: 0.09, d: 0.9 });
    cue(t0 + 2.6 * k, 'riser', 0.6);
    cue(t0 + 3.2 * k, 'hit', 0.9);
  }

  // ---------- 3. Le logo ----------
  {
    const [t0, d] = PLAN.logo;
    const el = scene(t0, d);
    flash(t0 + 0.05, 0.9);
    cue(t0, 'impact', 1);
    const box = add(el, `<div class="center">
      <div class="logo-wrap"><div class="ring"></div><div class="ring"></div><div class="logo-halo"></div><img class="logo-img" src="${A}img/logo.png"></div>
      <div class="brand-title">LE MONDE DU TRAVAIL</div>
      <div class="brand-sub">WOW · World Of Work</div>
      <div class="brand-sub" style="margin-top:10px;letter-spacing:0.22em;color:#cbd5e1">Club fondé en 2025 · LYNAQE de Sédhiou</div></div>`);
    const halo = $(box, '.logo-halo');
    const logo = $(box, '.logo-img');
    set(halo, { o: 0, s: 0.4 });
    tw(halo, t0, 0.9, { o: 1, s: 1 }, 'out');
    set(logo, { o: 0, s: 0.72, blur: 20, r: -6 });
    tw(logo, t0 + 0.1, 1.2, { o: 1, s: 1, blur: 0, r: 0 }, 'back');
    tw(logo, t0 + 1.3, d - 1.3, { s: 1.04 }, 'lin');
    $$(box, '.ring').forEach((r, i) => {
      r.style.cssText = 'width:520px;height:520px;left:50%;top:50%;margin:-260px 0 0 -260px';
      set(r, { o: 0.9, s: 0.6 });
      tw(r, t0 + 0.05 + i * 0.25, 1.6, { o: 0, s: 1.8 }, 'out');
    });
    const title = $(box, '.brand-title');
    set(title, { o: 0, ls: 0.9, blur: 10 });
    tw(title, t0 + 0.7, 1.4, { o: 1, ls: H ? 0.34 : 0.24, blur: 0 }, 'out');
    popIn($$(box, '.brand-sub'), t0 + 1.2, { y: 16, stagger: 0.2 });
  }

  // ---------- 4. L'organisation ----------
  {
    const [t0, d] = PLAN.org;
    const el = scene(t0, d);
    transition(t0);
    const head = add(el, `<div style="position:absolute;left:0;right:0;top:${H ? 110 : 270}px;text-align:center;padding:0 60px">
      <div class="kicker">L'organisation</div>
      <div class="display m" style="margin-top:22px">${words(H ? 'Un bureau. Des pôles. *Une* *mission.*' : 'Un bureau, des pôles, *une* *mission.*')}</div></div>`);
    popIn($(head, '.kicker'), t0 + 0.2, { y: 14 });
    reveal($(head, '.display'), t0 + 0.35, { stagger: 0.06 });
    const nodes = [
      ['📝', 'Secrétariat général', 'Comptes rendus & archives'], ['💰', 'Trésorerie', 'Budget & transparence'],
      ['📣', 'Communication & Médias', 'Image & réseaux'], ['🎓', 'Pédagogie & Formations', 'Ateliers & programmes'],
      ['🤝', 'Partenariats', 'Relations extérieures'], ['🚀', 'Projets & Innovation', 'Initiatives du club'],
      ['🧭', 'Organisation & Logistique', 'Événements & moyens'], ['🏡', 'Accueil & Vie associative', 'Intégration des membres'],
    ];
    const org = add(el, `<div class="org">
      <div class="org-top">
        <div class="node lead-node"><span class="ico">⭐</span><b>Présidence</b><span>Coordination générale</span></div>
        <div class="node lead-node"><span class="ico">🧩</span><b>Vice-Présidence</b><span>Appui & suivi des pôles</span></div>
      </div>
      <div class="org-trunk"></div><div class="org-bus"></div>
      <div class="org-grid">${nodes.map(([i, b, s]) => `<div class="node small"><span class="ico">${i}</span><b>${b}</b><span>${s}</span></div>`).join('')}</div></div>`);
    const k = d / 6.8;
    popIn($$(org, '.org-top .node'), t0 + 0.9 * k, { y: 30, stagger: 0.14 });
    set($(org, '.org-trunk'), { o: 0, ct: 0, cb: 100 });
    tw($(org, '.org-trunk'), t0 + 1.5 * k, 0.5, { o: 1, cb: 0 }, 'out');
    set($(org, '.org-bus'), { cl: 50, cr: 50 });
    tw($(org, '.org-bus'), t0 + 1.8 * k, 0.7, { cl: 0, cr: 0 }, 'io');
    popIn($$(org, '.org-grid .node'), t0 + 2.1 * k, { y: 36, stagger: H ? 0.08 : 0.06 });
    cue(t0 + 0.9 * k, 'hit', 0.5);
    cue(t0 + 2.1 * k, 'tick', 0.6);
    const foot = add(el, `<div style="position:absolute;left:0;right:0;top:${H ? 955 : 1560}px;text-align:center"><span class="chip">Chaque pôle rend compte à la Présidence</span></div>`);
    popIn(foot, t0 + 4.4 * k, { y: 20 });
  }

  // ---------- 4 bis. Les mentors ----------
  {
    const [t0, d] = PLAN.mentors;
    const el = scene(t0, d);
    transition(t0);
    const head = add(el, `<div style="position:absolute;left:0;right:0;top:${H ? 150 : 300}px;text-align:center;padding:0 60px">
      <div class="kicker">Les mentors</div>
      <div class="display m" style="margin-top:22px">${words(H ? 'Des pros du terrain, *engagés* *pour* *la* *relève.*' : 'Des pros du terrain, *engagés* *pour* *la* *relève.*')}</div></div>`);
    popIn($(head, '.kicker'), t0 + 0.2, { y: 14 });
    reveal($(head, '.display'), t0 + 0.3, { stagger: 0.05 });
    const people = [
      ['AB', 'Ressources humaines', 'Directeur RH · 15 ans de recrutement'],
      ['SF', 'Data & IA', 'Lead Data Architect · mentor tech'],
      ['MT', 'Stratégie & prise de parole', 'Consultant · formateur en leadership'],
    ];
    const grid = add(el, `<div class="mentors">${people.map(([i, b, s]) => `<div class="mentor"><div class="avatar">${i}</div><div><b>${b}</b><span>${s}</span></div></div>`).join('')}</div>`);
    popIn($$(grid, '.mentor'), t0 + 0.8, { y: 40, stagger: 0.15 });
    const chips = add(el, `<div class="chips" style="position:absolute;left:60px;right:60px;top:${H ? 680 : 1420}px">
      <span class="chip">🎙️ Formations animées</span><span class="chip">🤝 Mentorat 1-to-1</span><span class="chip">💬 Lien direct avec la Présidence</span></div>`);
    popIn($$(chips, '.chip'), t0 + 1.6, { y: 20, stagger: 0.12 });
    cue(t0 + 0.8, 'tick', 0.5);
  }

  // ---------- 4 ter. Le pilotage en ligne ----------
  {
    const [t0, d] = PLAN.pilot;
    const el = scene(t0, d);
    transition(t0);
    const text = add(el, `<div class="phase-text">
      <div class="kicker">Le pilotage</div>
      <h3>${words('Chaque poste *rend* *compte.*')}</h3>
      <p>Rapports par poste, validation par la Présidence, échéances et synthèse : le club se pilote comme une organisation.</p></div>`);
    popIn($(text, '.kicker'), t0 + 0.2, { y: 14 });
    reveal($(text, 'h3'), t0 + 0.3, { stagger: 0.07 });
    popIn($(text, 'p'), t0 + 0.9, { y: 20 });
    if (H) {
      const lap = add(el, laptop('bureau-pres-d.jpg'));
      lap.style.cssText = 'left:900px;top:230px;width:900px';
      set(lap, { o: 0, x: 160, r: 2 });
      tw(lap, t0 + 0.4, 1.2, { o: 1, x: 0, r: 0 }, 'out');
      tw(lap, t0 + 1.6, d, { x: -30 }, 'lin');
      const ph = add(el, phone('mentor-mfull.jpg'));
      ph.style.cssText = 'left:780px;top:430px;transform-origin:top left';
      set(ph, { o: 0, y: 120, s: 0.62 });
      tw(ph, t0 + 0.9, 1.1, { o: 1, y: 0, s: 0.68 }, 'out');
      const img = $(ph, 'img');
      tw(img, t0 + 1.6, 2.4, { y: -620 }, 'io');
    } else {
      const ph = add(el, phone('bureau-mfull.jpg'));
      ph.style.cssText = 'left:345px;top:900px;transform-origin:top center';
      set(ph, { o: 0, y: 160, s: 1.02 });
      tw(ph, t0 + 0.35, 1.0, { o: 1, y: 0, s: 1.08 }, 'out');
      tw($(ph, 'img'), t0 + 1.2, 1.8, { y: -560 }, 'io');
    }
  }

  // ---------- 5. Les valeurs ----------
  {
    const [t0, d] = PLAN.values;
    const el = scene(t0, d);
    transition(t0);
    const vals = [
      ['innovation', 'Innovation.', 'La créativité au service des défis de notre temps.'],
      ['ethique', 'Éthique.', 'Des pratiques professionnelles responsables et intègres.'],
      ['citoyennete', 'Citoyenneté.', 'Des acteurs de changement pour leur communauté.'],
    ];
    const step = d / 3;
    vals.forEach(([img, word, sub], i) => {
      const t = t0 + i * step;
      const cut = add(el, `<div class="cut" style="opacity:0"><div class="photo" style="background-image:url(${A}img/${img}.webp)"></div><div class="tint"></div>
        <div class="center" style="padding:0 70px"><div class="kicker" style="margin-bottom:26px">Nos valeurs</div><div class="value-word gold-text">${word}</div><div class="value-sub">${sub}</div></div></div>`);
      set(cut, { o: 0 });
      tw(cut, t, 0.12, { o: 1 }, 'lin');
      if (i < 2) tw(cut, t + step, 0.12, { o: 0 }, 'lin');
      const photo = $(cut, '.photo');
      set(photo, { s: 1.08 });
      tw(photo, t, step + 0.4, { s: 1.2 }, 'lin');
      const w = $(cut, '.value-word');
      set(w, { o: 0, s: 1.18, blur: 16, bgx: 100 });
      tw(w, t + 0.05, 0.7, { o: 1, s: 1, blur: 0 }, 'out');
      tw(w, t, step + 0.4, { bgx: 0 }, 'lin');
      popIn($(cut, '.value-sub'), t + 0.3, { y: 18, d: 0.6 });
      flash(t, 0.45);
      cue(t, 'impact', 0.55);
    });
  }

  // ---------- 6. La plateforme ----------
  {
    const [t0, d] = PLAN.platform;
    const intro = H ? 1.9 : 1.3;
    const el = scene(t0, d);
    transition(t0);
    const head = add(el, `<div class="center" style="padding:0 70px"><div class="kicker">La plateforme</div><div class="display l" style="margin-top:24px">${words('Tout le parcours, *au* *même* *endroit.*')}</div></div>`);
    popIn($(head, '.kicker'), t0 + 0.15, { y: 14 });
    reveal($(head, '.display'), t0 + 0.25, { stagger: 0.06, d: 0.8 });
    fadeOut(head, t0 + intro - 0.35, { d: 0.35 });

    const phases = [
      { num: '01', kick: 'Comprendre', stat: 535, h: 'fiches métiers', p: '21 familles de métiers : quotidien réel, salaires, compétences et débouchés.', lap: 'jobs-d.jpg', ph: 'job-mfull.jpg' },
      { num: '02', kick: 'S\'entraîner', stat: 12, h: 'formations complètes', p: 'Programmes, quiz et plans d\'action, avec des fiches PDF signées WOW.', lap: 'formation-d.jpg', ph: 'formation-mfull.jpg', wow: true },
      { num: '03', kick: 'Se connecter', h: 'Mentorat, forum & visio en direct', p: 'Une salle virtuelle intégrée, un forum d\'entraide et des mentors qui ouvrent des portes.', lap: 'visio-d.jpg', ph: 'forum-mfull.jpg' },
    ];
    const step = (d - intro) / 3;
    phases.forEach((ph, i) => {
      const t = t0 + intro + i * step;
      const g = add(el, '<div class="layer"></div>');
      set(g, { o: 0 });
      tw(g, t, 0.3, { o: 1 }, 'out');
      if (i < 2) tw(g, t + step - 0.3, 0.3, { o: 0, x: -80 }, 'in');
      const txt = add(g, `<div class="phase-text">
        <div style="display:flex;align-items:baseline;gap:24px"><span class="phase-num">${ph.num}</span><span class="kicker">${ph.kick}</span></div>
        ${ph.stat ? `<div class="stat gold-text" style="margin-top:6px">0</div>` : ''}
        <h3 style="margin-top:${ph.stat ? 4 : 24}px">${ph.h}</h3>
        <p>${ph.p}</p>
        ${ph.wow ? `<div class="badge-wow"><img src="${A}img/wow-seal.svg">Fiche signée WOW · World Of Work</div>` : ''}</div>`);
      popIn($(txt, '.phase-num'), t + 0.05, { y: 30 });
      popIn($(txt, '.kicker'), t + 0.15, { y: 14 });
      const stat = $(txt, '.stat');
      if (stat) {
        set(stat, { n: 0, o: 0, bgx: 100 });
        tw(stat, t + 0.15, 0.3, { o: 1 });
        tw(stat, t + 0.15, Math.min(1.4, step * 0.55), { n: ph.stat, bgx: 0 }, 'soft');
      }
      popIn($(txt, 'h3'), t + 0.3, { y: 24 });
      popIn($(txt, 'p'), t + 0.45, { y: 20 });
      if (ph.wow) popIn($(txt, '.badge-wow'), t + 0.7, { y: 16, s: 0.9 });
      cue(t, i ? 'whoosh' : 'hit', 0.7);

      if (H) {
        const lap = add(g, laptop(ph.lap));
        lap.style.cssText = 'left:880px;top:200px;width:940px';
        set(lap, { o: 0, x: 220, r: 1.5 });
        tw(lap, t + 0.1, 1.1, { o: 1, x: 0, r: 0 }, 'out');
        tw(lap, t + 1.2, step, { x: -24 }, 'lin');
        const p = add(g, phone(ph.ph));
        p.style.cssText = 'left:790px;top:420px;transform-origin:top left';
        set(p, { o: 0, y: 140, s: 0.66 });
        tw(p, t + 0.35, 1.0, { o: 1, y: 0, s: 0.7 }, 'out');
        tw($(p, 'img'), t + 1.1, step - 1.1, { y: -900 }, 'io');
      } else {
        const p = add(g, phone(ph.ph));
        p.style.cssText = 'left:345px;top:930px;transform-origin:top center';
        set(p, { o: 0, y: 200, s: 1.02, r: 3 });
        tw(p, t + 0.12, 0.9, { o: 1, y: 0, s: 1.06, r: 0 }, 'out');
        tw($(p, 'img'), t + 0.8, step - 0.8, { y: -700 }, 'io');
      }
    });
  }

  // ---------- 7. Montage rythmé ----------
  {
    const [t0, d] = PLAN.montage;
    const el = scene(t0, d);
    const cuts = H
      ? [['S\'orienter.', 'img/orientation.webp'], ['Se former.', 'img/formations_hero.webp'], ['Prendre la parole.', 'img/communication.webp'], ['Diriger.', 'img/leadership.webp'], ['Se connecter.', 'img/about_team.webp'], ['S\'engager.', 'img/citoyennete.webp'], ['Ensemble.', 'img/hero_senegalese_youth.webp']]
      : [['S\'orienter.', 'img/orientation.webp'], ['Se former.', 'img/formations_hero.webp'], ['Se connecter.', 'img/about_team.webp'], ['Ensemble.', 'img/hero_senegalese_youth.webp']];
    const step = d / cuts.length;
    cuts.forEach(([word, img], i) => {
      const t = t0 + i * step;
      const c = add(el, `<div class="cut"><div class="shot" style="background-image:url(${A}${img})"></div><div class="tint"></div><div class="center"><div class="cut-word">${word}</div></div></div>`);
      set(c, { o: 0 });
      tw(c, t, 0.05, { o: 1 }, 'lin');
      if (i < cuts.length - 1) tw(c, t + step, 0.05, { o: 0 }, 'lin');
      const shot = $(c, '.shot');
      set(shot, { s: 1.16, x: i % 2 ? 30 : -30 });
      tw(shot, t, step + 0.2, { s: 1.04, x: 0 }, 'lin');
      const w = $(c, '.cut-word');
      set(w, { o: 0, s: 1.25, blur: 12 });
      tw(w, t, 0.35, { o: 1, s: 1, blur: 0 }, 'out');
      cue(t, 'kick', 0.9);
    });
  }

  // ---------- 8. Signature finale ----------
  {
    const [t0, d] = PLAN.cta;
    const el = scene(t0, d);
    tw(el, t0 + d - 0.42, 0.001, { o: 1, s: 1, blur: 0 }, 'lin'); // la fin est gérée par le fondu au noir
    flash(t0 + 0.05, 0.8);
    cue(t0, 'impact', 1);
    const box = add(el, `<div class="center" style="padding:0 60px">
      <img class="seal" src="${A}img/wow-seal.svg">
      <div class="display m cta-line">${words('Demain se prépare *aujourd\'hui.*')}</div>
      <div class="kicker" style="margin-top:46px">Rejoins le club</div>
      <div class="url">lemondedutravail.org</div>
      <div class="sig">WOW · World Of Work · Le Monde du Travail</div></div>`);
    const seal = $(box, '.seal');
    set(seal, { o: 0, s: 0.5, r: -40, blur: 14 });
    tw(seal, t0 + 0.05, 1.3, { o: 1, s: 1, r: 0, blur: 0 }, 'back');
    tw(seal, t0 + 1.35, d, { r: 10 }, 'lin');
    reveal($(box, '.display'), t0 + 0.8, { stagger: 0.09 });
    popIn($(box, '.kicker'), t0 + 1.7, { y: 14 });
    popIn($(box, '.url'), t0 + 1.9, { y: 24, s: 0.9 });
    popIn($(box, '.sig'), t0 + 2.3, { y: 12 });
    cue(t0 + 1.9, 'hit', 0.6);
  }

  // ===================== Calques supérieurs =====================

  set(brand, { o: 0 });
  tw(brand, PLAN.gap[0] + 0.4, 0.6, { o: 1 });
  tw(brand, PLAN.logo[0], 0.2, { o: 0 });
  tw(brand, PLAN.org[0] + 0.4, 0.6, { o: 1 });
  tw(brand, PLAN.cta[0], 0.3, { o: 0 });
  set(sweep, { o: 0 });
  set(flashEl, { o: 0 });
  set(fade, { o: 0 });
  tw(fade, DURATION - 0.7, 0.7, { o: 1 }, 'io');
  tracks.forEach((k) => k.tw.sort((a, b) => a.t - b.t));

  window.renderAt = renderAt;
  window.MOTION = { format: F, width: W, height: HT, duration: DURATION, fps: 30, sections: PLAN, cues: CUES.sort((a, b) => a.t - b.t) };

  // Aperçu dans un navigateur : ?t=… fige une image, ?play lit le film
  const fit = () => { const s = Math.min(innerWidth / W, innerHeight / HT); if (!navigator.webdriver) stage.style.transform = `scale(${s})`; stage.style.transformOrigin = 'top left'; };
  if (!navigator.webdriver) { fit(); addEventListener('resize', fit); }
  if (params.has('t')) renderAt(parseFloat(params.get('t')));
  else if (params.has('play')) { const start = performance.now(); const loop = () => { renderAt(((performance.now() - start) / 1000) % DURATION); requestAnimationFrame(loop); }; loop(); }
  else renderAt(0);
})();
