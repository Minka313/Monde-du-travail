// Préchargé par scripts/importer-opportunites-prod.sh : lit backend/.env (dotenv comprend les « & » de
// l'adresse de la base, pas le shell) et allonge le délai de connexion à 60 s (erreur P1001 sinon).
const path = require('path');
require(path.resolve(__dirname, '../backend/node_modules/dotenv')).config({ path: path.resolve(__dirname, '../backend/.env') });
delete process.env.NODE_ENV;
const url = process.env.DATABASE_URL;
if (!url) { console.error('DATABASE_URL absent de backend/.env.'); process.exit(1); }
if (!/connect_timeout=/.test(url)) process.env.DATABASE_URL = `${url}${url.includes('?') ? '&' : '?'}connect_timeout=60`;
