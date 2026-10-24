#!/usr/bin/env node
/**
 * Génère les fichiers SVG statiques du sceau WOW (frontend/images/wow-seal.svg et wow-mark.svg)
 * à partir de frontend/js/wow-brand.js, pour les usages en <img> (pied de page, impression).
 * Usage : node scripts/build-wow-assets.js
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const FRONTEND = path.resolve(__dirname, '..', 'frontend');
const context = { document: { currentScript: { dataset: { loader: 'off' } } }, Math, Date, String, URL };
context.window = context;
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(FRONTEND, 'js', 'wow-brand.js'), 'utf8'), context);

// Identifiants stables : les fichiers ne changent que si le dessin change
const stable = (svg, name) => svg.replace(/wow\d+[a-z0-9]{0,4}(?=[gnq]|top|bot)/g, name).trim();
fs.writeFileSync(path.join(FRONTEND, 'images', 'wow-seal.svg'), `${stable(context.WowBrand.seal(200), 'seal')}\n`);
fs.writeFileSync(path.join(FRONTEND, 'images', 'wow-mark.svg'), `${stable(context.WowBrand.seal(48), 'mark')}\n`);
console.log('Sceau WOW généré : frontend/images/wow-seal.svg, frontend/images/wow-mark.svg');
