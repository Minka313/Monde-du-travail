const E = require('../../frontend/js/riasec-engine');
const { codes } = require('../../scripts/data/riasec-job-codes.json');

// Test d'orientation RIASEC : mesure de chaque type, indicateurs et affinité métier
const answerAll = (mode, fn) => Object.fromEntries(E.buildQuestions(mode).map((q, i) => [q.id, fn(q, i)]));

describe('Moteur RIASEC', () => {
  it('pose 8 activités par type (4 en express), sans doublon, en alternant les types', () => {
    const full = E.buildQuestions('complet');
    const express = E.buildQuestions('express');
    expect(full).toHaveLength(48);
    expect(express).toHaveLength(24);
    E.ORDER.forEach((t) => {
      expect(full.filter((q) => q.type === t)).toHaveLength(8);
      expect(express.filter((q) => q.type === t)).toHaveLength(4);
    });
    expect(new Set(full.map((q) => q.id)).size).toBe(48);
    expect(new Set(full.map((q) => q.text)).size).toBe(48);
    for (let i = 1; i < full.length; i += 1) expect(full[i].type).not.toBe(full[i - 1].type);
  });

  it('mesure chaque type séparément et donne le code des 3 types dominants', () => {
    const answers = answerAll('complet', (q) => ({ I: 4, R: 3, C: 2, E: 1, A: 0, S: 0 }[q.type]));
    const r = E.score(answers, { mode: 'complet', seconds: 400 });
    expect(r.scores).toEqual({ R: 75, I: 100, A: 0, S: 0, E: 25, C: 50 });
    expect(r.code).toBe('IRC');
    expect(r.indicators).toMatchObject({ level: 'fort', differentiation: 100, differentiationLabel: 'net', consistency: 'forte', reliable: true });
  });

  it('signale les réponses toutes identiques et les ex æquo', () => {
    const r = E.score(answerAll('express', () => 3), { mode: 'express', seconds: 200 });
    expect(r.indicators.warnings).toContain('uniform');
    expect(r.indicators.reliable).toBe(false);
    expect(r.ties.length).toBeGreaterThan(0);
    expect(r.indicators.differentiationLabel).toBe('peu marqué');
  });

  it('signale une passation trop rapide et un test incomplet', () => {
    const answers = answerAll('express', (q, i) => i % 5);
    expect(E.score(answers, { mode: 'express', seconds: 10 }).indicators.warnings).toContain('fast');
    delete answers.R1;
    expect(E.score(answers, { mode: 'express' }).indicators.warnings).toContain('incomplete');
  });

  it('mesure la cohérence sur l\'hexagone', () => {
    expect(E.hexDistance('R', 'I')).toBe(1);
    expect(E.hexDistance('R', 'C')).toBe(1);
    expect(E.hexDistance('R', 'A')).toBe(2);
    expect(E.hexDistance('R', 'S')).toBe(3);
  });

  it('calcule une affinité honnête : maximale pour le même code, faible pour le code opposé', () => {
    const scores = { R: 10, I: 90, A: 20, S: 15, E: 30, C: 70 };
    expect(E.affinity(scores, 'ICE')).toBeGreaterThan(90);
    expect(E.affinity(scores, 'SAR')).toBeLessThan(40);
    expect(E.affinity(scores, 'XYZ')).toBeNull();
  });

  it('filtre les métiers par niveau d\'études d\'entrée', () => {
    expect(E.entryLevel('CAP / Bac Pro à Bac +2')).toBe(0);
    expect(E.entryLevel('Bac +3 à Bac +5')).toBe(3);
    expect(E.entryLevel('Bac +5 (Ingénieur)')).toBe(5);
    expect(E.entryLevel(undefined)).toBeNull();
    const jobs = [
      { id: 'a', title: 'A', riasec: 'ICE', level: 'Bac +5' },
      { id: 'b', title: 'B', riasec: 'ICR', level: 'Bac +2 à Bac +3' },
      { id: 'c', title: 'C', riasec: 'SAE', level: 'CAP' },
    ];
    const scores = { R: 40, I: 90, A: 10, S: 10, E: 50, C: 70 };
    expect(E.matchJobs(scores, jobs).map((m) => m.job.id)).toEqual(['a', 'b', 'c']);
    expect(E.matchJobs(scores, jobs, { maxLevel: 2 }).map((m) => m.job.id)).toEqual(['b', 'c']);
  });

  it('dispose d\'un code valide pour chaque métier du catalogue, avec les 6 types représentés', () => {
    const values = Object.values(codes);
    expect(values.length).toBeGreaterThan(500);
    values.forEach((c) => expect(c).toMatch(/^(?!.*(.).*\1)[RIASEC]{3}$/));
    E.ORDER.forEach((t) => expect(values.filter((c) => c[0] === t).length).toBeGreaterThan(20));
  });
});
