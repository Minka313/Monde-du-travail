/**
 * Service Worker pour Le Monde du Travail
 * 1. Mise en cache haute performance (Stale-While-Revalidate) des assets statiques & polices
 * 2. Gestionnaire des notifications Push natives (W3C Push API)
 */

const CACHE_NAME = 'lmt-static-v2.5.0';

// Assets critiques pré-mis en cache
const PRECACHE_ASSETS = [
  '/logo.webp',
  '/logo.png',
  '/css/styles.min.css',
  '/js/theme-engine.js',
  '/js/layout.js',
  '/js/main.js'
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
          if (key !== CACHE_NAME && key.startsWith('lmt-')) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => clients.claim())
  );
});

// Interception des requêtes HTTP (Stratégie Stale-While-Revalidate pour assets statiques & images)
self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // 1. Ne JAMAIS intercepter ni bloquer les requêtes API backend ou méthodes non-GET
  if (req.method !== 'GET' || url.pathname.startsWith('/api/') || url.pathname === '/health') {
    return;
  }

  // 2. Traitement des assets statiques éligibles (CSS, JS, images locales, images Unsplash, polices Google Fonts)
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
