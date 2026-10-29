/**
 * Bloc « Questions sur ce concours / ce métier / cette formation » des fiches du site :
 * discussions du forum liées à la fiche et bouton « Poser une question » (titre pré-rempli).
 * Usage : window.ForumLinked.mount(élément, { type: 'opportunity' | 'job' | 'formation', id, title })
 */
(function () {
  'use strict';

  const LABELS = {
    opportunity: { what: 'ce concours', heading: 'Questions sur ce concours' },
    job: { what: 'ce métier', heading: 'Questions sur ce métier' },
    formation: { what: 'cette formation', heading: 'Questions sur cette formation' },
  };
  const esc = (v) => String(v ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  function injectStyles() {
    if (document.getElementById('forumLinkedStyles')) return;
    const style = document.createElement('style');
    style.id = 'forumLinkedStyles';
    style.textContent = `
      .forum-linked { --fl-bg: #ffffff; --fl-ink: #0f172a; --fl-muted: #64748b; --fl-border: #e2e8f0; --fl-accent: #0284c7;
        margin-top: 1.5rem; padding: 1.1rem 1.2rem; border-radius: 14px; border: 1px solid var(--fl-border); background: var(--fl-bg); color: var(--fl-ink); }
      [data-theme="dark"] .forum-linked { --fl-bg: #111827; --fl-ink: #f1f5f9; --fl-muted: #94a3b8; --fl-border: #1f2a3c; --fl-accent: #38bdf8; }
      .forum-linked h2 { margin: 0 0 0.35rem; font-size: 1.1rem; color: var(--fl-ink); }
      .forum-linked p { margin: 0 0 0.8rem; color: var(--fl-muted); font-size: 0.9rem; line-height: 1.5; }
      .forum-linked ul { list-style: none; margin: 0 0 0.9rem; padding: 0; display: flex; flex-direction: column; gap: 0.45rem; }
      .forum-linked li a { display: flex; justify-content: space-between; align-items: center; gap: 0.75rem; padding: 0.6rem 0.75rem; border-radius: 10px;
        border: 1px solid var(--fl-border); text-decoration: none; color: var(--fl-ink); font-weight: 600; font-size: 0.92rem; }
      .forum-linked li a:hover, .forum-linked li a:focus-visible { border-color: var(--fl-accent); }
      .forum-linked li small { color: var(--fl-muted); font-weight: 500; white-space: nowrap; }
      .forum-linked-actions { display: flex; flex-wrap: wrap; gap: 0.5rem; }
      @media print { .forum-linked { display: none !important; } }`;
    document.head.appendChild(style);
  }

  // Mentor connecté : lien direct vers « Signaler / proposer » de son espace, fiche pré-remplie
  function isMentor() {
    try { return (JSON.parse(localStorage.getItem('currentUser') || 'null')?.adminRoles || []).includes('MENTOR_EXPERT'); } catch (_) { return false; }
  }

  function askUrl({ type, id, title }) {
    const params = new URLSearchParams({ contextType: type, contextId: id, contextTitle: title });
    return `forum-create.html?${params}`;
  }

  async function mount(container, ctx) {
    if (!container || !ctx || !LABELS[ctx.type] || !ctx.id || !ctx.title || !window.Api?.forum?.getLinked) return;
    injectStyles();
    const label = LABELS[ctx.type];
    container.classList.add('forum-linked');
    container.innerHTML = `<h2>💬 ${esc(label.heading)}</h2><p>Chargement des discussions…</p>`;
    let data = { topics: [], total: 0 };
    let loadError = false;
    try {
      const res = await window.Api.forum.getLinked(ctx.type, ctx.id);
      data = (res && res.data) || data;
    } catch (error) {
      console.error('Erreur de chargement des discussions liées au forum :', error);
      loadError = true;
    }
    const list = data.topics.length
      ? `<ul>${data.topics.map((t) => {
        const n = t.replyCount || 0;
        const state = t.isResolved || t.bestReplyId ? '✓ résolue' : `${n} réponse${n > 1 ? 's' : ''}`;
        return `<li><a href="forum-topic.html?id=${encodeURIComponent(t.id)}"><span>${esc(t.title)}</span><small>${esc(state)}</small></a></li>`;
      }).join('')}</ul>`
      : '';
    container.innerHTML = `
      <h2>💬 ${esc(label.heading)}</h2>
      <p>${loadError
        ? 'Impossible de charger les discussions pour le moment.'
        : data.total
        ? `${data.total} discussion${data.total > 1 ? 's' : ''} sur le forum du club. Les mentors et les membres y répondent.`
        : `Une question sur ${esc(label.what)} ? Pose-la sur le forum : les mentors et les membres du club te répondent.`}</p>
      ${list}
      <div class="forum-linked-actions">
        <a class="btn btn-primary" href="${esc(askUrl(ctx))}">Poser une question sur ${esc(label.what)}</a>
        ${data.total > data.topics.length ? '<a class="btn btn-outline" href="forum.html">Voir le forum</a>' : ''}
        ${ctx.type !== 'opportunity' && isMentor() ? `<a class="btn btn-outline" href="mentor.html?${new URLSearchParams({ suggest: `${ctx.type}:${ctx.id}`, title: ctx.title })}">✏️ Proposer une correction (mentor)</a>` : ''}
      </div>`;
  }

  window.ForumLinked = { mount, askUrl };
})();
