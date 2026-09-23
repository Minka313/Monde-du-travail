/**
 * Service Worker pour Le Monde du Travail
 * Gestionnaire des notifications Push natives (W3C Push API)
 */

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

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
    icon: data.icon || 'logo.png',
    badge: data.badge || 'logo.png',
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
