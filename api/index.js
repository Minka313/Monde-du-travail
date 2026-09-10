// Adaptateur Serverless pour Vercel
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../backend/.env') });

const { app } = require('../backend/src/app');

module.exports = app;
