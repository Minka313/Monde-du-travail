/**
 * Service Worker pour Le Monde du Travail
 * 1. Mise en cache haute performance (Stale-While-Revalidate) des assets statiques & polices
 * 2. Pages et données publiques gardées pour la consultation hors connexion (application installable)
 * 3. Gestionnaire des notifications Push natives (W3C Push API)
 */

const CACHE_NAME = 'lmt-static-v2.6.0';
// Pages et réponses de l'API publique déjà consultées (réseau d'abord, copie en secours)
const PAGES_CACHE = 'lmt-pages-v1';
const MAX_PAGES = 60;
const OFFLINE_URL = '/offline.html';
// API publique utile hors connexion (jamais de requête authentifiée)
const OFFLINE_API = [/^\/api\/opportunities(\/[^/]+)?$/, /^\/api\/settings\/public/, /^\/api\/stats$/];

// Assets critiques pré-mis en cache
const PRECACHE_ASSETS = [
  '/logo.webp',
  '/logo.png',
  '/css/styles.min.css',
  '/js/theme-engine.js',
  '/js/layout.js',
  '/js/main.js',
  OFFLINE_URL,
  '/manifest.webmanifest',
  '/images/app/icon-192.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS).catch((err) => {
        // En cas d'échec sur un asset facultatif, ne pas bloquer l'installation
        console.warn('[SW] Pré-cache partiel:', err);
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME && key !== PAGES_CACHE && key.startsWith('lmt-')) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => clients.claim())
  );
});

async function trimPages(cache) {
  const keys = await cache.keys();
  await Promise.all(keys.slice(0, Math.max(0, keys.length - MAX_PAGES)).map((key) => cache.delete(key)));
}

// Réseau d'abord ; en cas d'échec, la dernière copie enregistrée
async function networkFirst(req, fallbackUrl) {
  const cache = await caches.open(PAGES_CACHE);
  try {
    const response = await fetch(req);
    if (response && response.status === 200 && response.type === 'basic') {
      await cache.put(req, response.clone());
      trimPages(cache);
    }
    return response;
  } catch (err) {
    const cached = await cache.match(req, { ignoreVary: true });
    if (cached) return cached;
    if (fallbackUrl) {
      const fallback = await caches.match(fallbackUrl);
      if (fallback) return fallback;
    }
    throw err;
  }
}

// Interception des requêtes HTTP (Stratégie Stale-While-Revalidate pour assets statiques & images)
self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  if (req.method !== 'GET') return;

  // 1. API : seules les lectures publiques du site sont gardées pour le hors connexion
  if (url.pathname.startsWith('/api/') || url.pathname === '/health') {
    if (url.origin === self.location.origin && !req.headers.has('Authorization') && OFFLINE_API.some((re) => re.test(url.pathname))) {
      event.respondWith(networkFirst(req));
    }
    return;
  }

  // 2. Pages du site public (pas l'administration) : réseau d'abord, copie hors connexion
  if (req.mode === 'navigate') {
    if (url.origin === self.location.origin && !url.pathname.startsWith('/admin')) {
      event.respondWith(networkFirst(req, OFFLINE_URL));
    }
    return;
  }

  // 3. Traitement des assets statiques éligibles (CSS, JS, images locales, images Unsplash, polices Google Fonts)
  const isStaticAsset =
    url.pathname.endsWith('.css') ||
    url.pathname.endsWith('.js') ||
    url.pathname.endsWith('.webp') ||
    url.pathname.endsWith('.png') ||
    url.pathname.endsWith('.jpg') ||
    url.pathname.endsWith('.jpeg') ||
    url.pathname.endsWith('.svg') ||
    url.hostname === 'images.unsplash.com' ||
    url.hostname === 'fonts.gstatic.com' ||
    url.hostname === 'fonts.googleapis.com';

  if (!isStaticAsset) {
    return;
  }

  event.respondWith(
    caches.match(req).then((cachedResponse) => {
      const fetchPromise = fetch(req).then((networkResponse) => {
        if (networkResponse && (networkResponse.status === 200 || networkResponse.type === 'opaque')) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(req, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => cachedResponse);

      // Si présent en cache : réponse immédiate (0ms), mise à jour silencieuse en arrière-plan
      return cachedResponse || fetchPromise;
    })
  );
});

// ================= GESTION DES NOTIFICATIONS PUSH =================

// Écoute des notifications Push envoyées par le serveur (Web Push VAPID)
self.addEventListener('push', (event) => {
  let data = {};
  if (event.data) {
    try {
      data = event.data.json();
    } catch (_) {
      data = { title: 'Le Monde du Travail', body: event.data.text() };
    }
  }

  const title = data.title || 'Le Monde du Travail';
  const options = {
    body: data.body || 'Vous avez une nouvelle notification',
    icon: data.icon || 'logo.webp',
    badge: data.badge || 'logo.webp',
    image: data.image || undefined,
    vibrate: data.vibrate || [200, 100, 200],
    tag: data.id || 'lmt-notification-' + Date.now(),
    renotify: true,
    data: {
      url: data.url || '/',
      id: data.id,
    },
    actions: [
      { action: 'open', title: 'Ouvrir' },
      { action: 'close', title: 'Fermer' },
    ],
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

// Gestion du clic sur la notification push
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'close') {
    return;
  }

  const targetUrl = event.notification.data?.url || '/';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      // Si une fenêtre est déjà ouverte sur le site, on lui donne le focus
      for (const client of clientList) {
        if ('focus' in client) {
          if (client.url.includes(targetUrl) || targetUrl === '/') {
            client.focus();
            if (targetUrl !== '/' && !client.url.includes(targetUrl)) {
              client.navigate(targetUrl);
            }
            return;
          }
        }
      }
      // Sinon, ouvrir une nouvelle fenêtre
      if (clients.openWindow) {
        return clients.openWindow(targetUrl);
      }
    })
  );
});
