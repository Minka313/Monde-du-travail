(function() {
  'use strict';

  window.AppConfig = {
    API_BASE: (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.protocol === 'file:')
      ? 'http://localhost:5000/api'
      : '/api',
    APP_NAME: 'Le Monde du Travail',
    VERSION: '1.0.0',
    // Suivi des erreurs du navigateur : URL du « Loader Script » Sentry
    // (Sentry > Settings > Projects > Loader Script). Vide = désactivé.
    SENTRY_LOADER_URL: '',
  };

  // Les URL peuvent contenir des jetons (ex. réinitialisation de mot de passe) : on retire la query string
  function stripQuery(url) {
    return typeof url === 'string' ? url.split('?')[0].split('#')[0] : url;
  }

  var loaderUrl = window.AppConfig.SENTRY_LOADER_URL;
  if (loaderUrl && /^https:\/\/js\.sentry-cdn\.com\//.test(loaderUrl) && window.location.protocol === 'https:') {
    window.sentryOnLoad = function () {
      window.Sentry.init({
        sendDefaultPii: false,
        tracesSampleRate: 0,
        replaysSessionSampleRate: 0,
        replaysOnErrorSampleRate: 0,
        beforeSend: function (event) {
          if (event.request) {
            event.request.url = stripQuery(event.request.url);
            delete event.request.headers;
            delete event.request.cookies;
            delete event.request.query_string;
          }
          delete event.user;
          return event;
        },
        beforeBreadcrumb: function (crumb) {
          if (crumb.data) {
            if (crumb.data.url) crumb.data.url = stripQuery(crumb.data.url);
            if (crumb.data.from) crumb.data.from = stripQuery(crumb.data.from);
            if (crumb.data.to) crumb.data.to = stripQuery(crumb.data.to);
          }
          return crumb;
        },
      });
    };
    var script = document.createElement('script');
    script.src = loaderUrl;
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);
  }
})();
