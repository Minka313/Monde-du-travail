/**
 * Retrouver ses données sur tous ses appareils une fois connecté : concours et métiers favoris,
 * résultat du test RIASEC, dossiers de concours cochés. Les pages continuent d'écrire dans le
 * stockage du navigateur ; ce script envoie les changements au compte et récupère ceux faits ailleurs.
 * Données d'un invité : rattachées au compte à la première connexion. Autre compte sur le même
 * appareil : les données du précédent ne lui sont jamais envoyées.
 */
(function () {
  'use strict';

  const SYNCED = /^(opp:favorites|member_favorite_jobs|lmdt_riasec_result|opp:docs:[A-Za-z0-9_-]{1,64})$/;
  const META_KEY = 'lmdt_sync_meta';
  const PENDING_KEY = 'lmdt_sync_pending';
  const RELOAD_FLAG = 'lmdt_sync_reloaded';
  // Pages qui affichent ces données : rechargées une fois si l'autre appareil a changé quelque chose
  const PAGES_SHOWING_DATA = ['profile', 'opportunites', 'opportunite', 'test-riasec', 'job-detail'];

  const storage = window.localStorage;
  if (!storage || !window.Api || !window.Api.me) return;
  const proto = Object.getPrototypeOf(storage);
  const originalSet = proto.setItem;
  const originalRemove = proto.removeItem;
  const rawSet = (key, value) => originalSet.call(storage, key, value);
  const rawRemove = (key) => originalRemove.call(storage, key);
  const readJson = (key, fallback) => { try { return JSON.parse(storage.getItem(key)) ?? fallback; } catch (_) { return fallback; } };

  function currentUserId() {
    const token = window.Api.getToken && window.Api.getToken();
    if (!token) return null;
    try { return JSON.parse(atob(token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/'))).id || null; } catch (_) { return null; }
  }

  const meta = readJson(META_KEY, {});
  meta.times = meta.times || {};
  const pending = new Set(readJson(PENDING_KEY, []));
  const saveMeta = () => rawSet(META_KEY, JSON.stringify(meta));
  const savePending = () => rawSet(PENDING_KEY, JSON.stringify([...pending]));

  let pushTimer = null;
  function schedulePush() {
    clearTimeout(pushTimer);
    pushTimer = setTimeout(push, 1500);
  }

  async function push() {
    const userId = currentUserId();
    if (!userId || !pending.size || (meta.owner && meta.owner !== userId)) return;
    const keys = [...pending].slice(0, 50);
    const entries = keys.map((key) => {
      const raw = storage.getItem(key);
      let value = null;
      if (raw !== null) { try { value = JSON.parse(raw); } catch (_) { value = raw; } }
      return { key, value };
    });
    try {
      await window.Api.me.saveData(entries);
      keys.forEach((key) => pending.delete(key));
      savePending();
      if (pending.size) schedulePush();
    } catch (_) { /* nouvel essai à la prochaine page */ }
  }

  // Toute écriture des pages sur une donnée synchronisée est notée puis envoyée au compte
  function noteChange(key) {
    if (!SYNCED.test(key)) return;
    meta.times[key] = Date.now();
    saveMeta();
    pending.add(key);
    savePending();
    schedulePush();
  }
  proto.setItem = function (key, value) {
    originalSet.call(this, key, value);
    if (this === storage) noteChange(String(key));
  };
  proto.removeItem = function (key) {
    originalRemove.call(this, key);
    if (this === storage) noteChange(String(key));
  };

  const isArray = Array.isArray;
  const union = (a, b) => {
    const seen = new Set();
    return [...a, ...b].filter((item) => {
      const id = JSON.stringify(item);
      if (seen.has(id)) return false;
      seen.add(id);
      return true;
    });
  };

  async function pull(userId) {
    let rows = [];
    try { rows = ((await window.Api.me.getData()) || {}).data || []; } catch (_) { return false; }
    let changed = false;

    // Autre compte que le précédent sur cet appareil : on repart des données du compte
    if (meta.owner && meta.owner !== userId) {
      Object.keys(storage).filter((key) => SYNCED.test(key)).forEach(rawRemove);
      meta.times = {};
      pending.clear();
      changed = true;
    }
    const guestData = !meta.owner;
    meta.owner = userId;

    const server = new Map(rows.map((r) => [r.key, r]));
    server.forEach((row, key) => {
      if (!SYNCED.test(key)) return;
      const serverTime = Date.parse(row.updatedAt) || 0;
      const localRaw = storage.getItem(key);
      const localTime = meta.times[key] || 0;
      const write = (value, time) => { rawSet(key, JSON.stringify(value)); meta.times[key] = time; changed = true; };
      if (localRaw === null) { write(row.value, serverTime); return; }
      let local;
      try { local = JSON.parse(localRaw); } catch (_) { local = localRaw; }
      if (guestData && !localTime) {
        // Données d'avant la connexion : on les ajoute à celles du compte
        if (isArray(local) && isArray(row.value)) {
          const merged = union(row.value, local);
          if (merged.length !== row.value.length) { write(merged, Date.now()); pending.add(key); } else write(row.value, serverTime);
        } else if (local && row.value && local.date && row.value.date) {
          if (Date.parse(local.date) > Date.parse(row.value.date)) { meta.times[key] = Date.now(); pending.add(key); } else write(row.value, serverTime);
        } else write(row.value, serverTime);
        return;
      }
      if (serverTime > localTime && JSON.stringify(local) !== JSON.stringify(row.value)) write(row.value, serverTime);
      else if (localTime > serverTime) pending.add(key);
    });
    // Données présentes seulement sur cet appareil : envoyées au compte
    Object.keys(storage).filter((key) => SYNCED.test(key) && !server.has(key)).forEach((key) => {
      if (!meta.times[key]) meta.times[key] = Date.now();
      pending.add(key);
    });
    saveMeta();
    savePending();
    if (pending.size) schedulePush();
    return changed;
  }

  async function start() {
    const userId = currentUserId();
    if (!userId) return;
    const changed = await pull(userId);
    window.dispatchEvent(new CustomEvent('lmdt:account-synced', { detail: { changed } }));
    const page = (location.pathname.split('/').pop() || 'index').replace(/\.html$/, '');
    let reloaded = false;
    try { reloaded = Boolean(sessionStorage.getItem(RELOAD_FLAG)); } catch (_) { reloaded = true; }
    if (changed && !reloaded && PAGES_SHOWING_DATA.includes(page)) {
      try { sessionStorage.setItem(RELOAD_FLAG, '1'); } catch (_) { /* stockage indisponible */ }
      location.reload();
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
