#!/usr/bin/env node
/**
 * Empreintes de toutes les versions publiées du texte de référence du document du club,
 * partie par partie (backend/src/data/clubDocumentHistory.json). Elles permettent de savoir
 * si la Présidence a modifié une partie ou si elle peut recevoir la mise à jour sans risque.
 *
 * À relancer après chaque modification de backend/src/data/clubDocument.js, une fois commitée :
 *   node scripts/club-document-history.js
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const Module = require('module');
const { split, hash } = require('../backend/src/utils/clubDocumentChapters');

const ROOT = path.resolve(__dirname, '..');
const FILE = 'backend/src/data/clubDocument.js';
const OUT = path.join(ROOT, 'backend/src/data/clubDocumentHistory.json');

const commits = execSync(`git log --format=%h -- ${FILE}`, { cwd: ROOT, encoding: 'utf8' }).trim().split('\n').filter(Boolean);
const sources = commits.map((c) => execSync(`git show ${c}:${FILE}`, { cwd: ROOT, encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 }));
sources.push(fs.readFileSync(path.join(ROOT, FILE), 'utf8'));

const history = {};
sources.forEach((src) => {
  const m = new Module(FILE);
  m._compile(src, path.join(ROOT, FILE));
  split(m.exports).forEach((part) => {
    history[part.key] = history[part.key] || [];
    const h = hash(part.text);
    if (!history[part.key].includes(h)) history[part.key].push(h);
  });
});

fs.writeFileSync(OUT, `${JSON.stringify(history, null, 1)}\n`);
console.log(`${Object.keys(history).length} parties, ${sources.length} versions → ${path.relative(ROOT, OUT)}`);
