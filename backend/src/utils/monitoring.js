/**
 * Suivi des erreurs serveur (Sentry).
 * Totalement inactif sans SENTRY_DSN (et toujours inactif pendant les tests).
 * Seules les erreurs 5xx sont envoyées, sans données personnelles :
 * ni cookies, ni en-têtes, ni corps de requête, ni paramètres d'URL.
 */
let Sentry = null;

function scrubEvent(event) {
  if (event.request) {
    delete event.request.cookies;
    delete event.request.headers;
    delete event.request.data;
    delete event.request.query_string;
    if (event.request.url) event.request.url = event.request.url.split('?')[0];
  }
  delete event.user;
  return event;
}

function initMonitoring(env = process.env) {
  if (!env.SENTRY_DSN || env.NODE_ENV === 'test') return false;

  Sentry = require('@sentry/node');
  Sentry.init({
    dsn: env.SENTRY_DSN,
    environment: env.VERCEL_ENV || env.NODE_ENV || 'development',
    release: env.VERCEL_GIT_COMMIT_SHA || undefined,
    sendDefaultPii: false,
    tracesSampleRate: 0,
    // Capture d'erreurs uniquement : pas d'instrumentation automatique (démarrage à froid léger)
    skipOpenTelemetrySetup: true,
    defaultIntegrations: false,
    beforeSend: scrubEvent,
  });
  return true;
}

/**
 * Envoie une erreur serveur et attend son expédition : sur Vercel, la fonction
 * peut être gelée dès la réponse envoyée.
 */
async function captureServerError(error, req) {
  if (!Sentry) return;
  try {
    Sentry.withScope((scope) => {
      scope.setTag('method', req?.method);
      scope.setTag('route', req?.route?.path || req?.baseUrl || req?.path);
      scope.setContext('request', { method: req?.method, path: (req?.originalUrl || '').split('?')[0] });
      Sentry.captureException(error);
    });
    await Sentry.flush(1500);
  } catch (_) {
    // Le suivi ne doit jamais empêcher de répondre au client
  }
}

module.exports = { initMonitoring, captureServerError, scrubEvent };
