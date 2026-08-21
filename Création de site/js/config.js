(function() {
  'use strict';

  window.AppConfig = {
    API_BASE: (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.protocol === 'file:')
      ? 'http://localhost:5000/api'
      : '/api',
    APP_NAME: 'Le Monde du Travail',
    VERSION: '1.0.0',
  };
})();
