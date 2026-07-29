// POLITEIA — neutrality and integrity audit
//
// Neutrality is an engineering property with pass criteria, not a stated intention.
// Every check here produces a number. Run on every change to the item bank.
//
//   node tools/audit.mjs

import { readdirSync, existsSync } from 'node:fs';
import { AXES } from '../data/axes.js';
import { ITEMS, MIRROR_PAIRS } from '../data/items.js';
import { DYADS } from '../data/dyads.js';
import { ANCHORS } from '../data/anchors.js';

let failures = 0;
let warnings = 0;

const ok = (name, detail = '') => console.log(`  PASS  ${name}${detail ? '   ' + detail : ''}`);
const warn = (name, detail) => { warnings++; console.log(`  WARN  ${name}   ${detail}`); };
const fail = (name, detail) => { failures++; console.log(`  FAIL  ${name}   ${detail}`); };

console.log('\nAUDIT\n');

// ---- 1. No ideology, thinker, party, or movement named in item text ---------------
// The single most effective neutrality rule in the instrument. An item containing the
// word "capitalism" measures tribal vocabulary, not belief.
console.log('1. Banned vocabulary in item text');
const BANNED = [
  'capitalis', 'socialis', 'communis', 'fascis', 'nazi', 'liberal', 'conservativ',
  'marxis', 'anarchis', 'libertarian', 'progressiv', 'reaction', 'democrat',
  'republican', 'left-wing', 'right-wing', 'leftist', 'rightist', 'woke',
  'burke', 'marx', 'locke', 'rawls', 'nietzsche', 'foucault', 'hayek', 'rothbard',
  'aquinas', 'hobbes', 'rousseau',
];
{
  const hits = [];
  for (const item of ITEMS) {
    const lower = item.text.toLowerCase();
    for (const b of BANNED) if (lower.includes(b)) hits.push(`${item.id}: "${b}"`);
  }
  if (hits.length) fail('banned vocabulary', hits.join(', '));
  else ok('banned vocabulary', `${ITEMS.length} items clean`);
}

// ---- 2. Polarity balance ---------------------------------------------------------
// If most items on an axis load positively, "agree" trends toward one pole and
// agreeable respondents drift there for no substantive reason.
console.log('\n2. Polarity balance per axis (target 40-60% negative)');
for (const axis of AXES) {
  const loaded = ITEMS.filter((i) => i.loadings[axis.id] !== undefined);
  if (!loaded.length) { fail(axis.id, 'no items load on this axis'); continue; }
  const neg = loaded.filter((i) => i.loadings[axis.id] < 0).length;
  const share = neg / loaded.length;
  const detail = `${neg}/${loaded.length} negative (${(share * 100).toFixed(0)}%)`;
  if (share >= 0.4 && share <= 0.6) ok(axis.id, detail);
  else warn(axis.id, detail + ' — outside 40-60%');
}

// ---- 3. Axis coverage ------------------------------------------------------------
console.log('\n3. Axis coverage (Layer 1 >= 8 loadings, Layers 2-3 >= 5)');
for (const axis of AXES) {
  const n = ITEMS.filter((i) => i.loadings[axis.id] !== undefined).length;
  const floor = axis.layer === 1 ? 8 : 5;
  if (n >= floor) ok(axis.id, `${n} loadings`);
  else warn(axis.id, `${n} loadings, want >= ${floor}`);
}

// ---- 4. Mirror pair integrity ----------------------------------------------------
console.log('\n4. Mirror pairs');
{
  let bad = 0;
  for (const [a, b] of MIRROR_PAIRS) {
    const A = ITEMS[a], B = ITEMS[b];
    if (B.mirror !== A.id) { fail('mirror', `${A.id} -> ${B.id} not reciprocal`); bad++; continue; }
    // Mirrors must be logical opposites: their shared primary axis must have opposed signs.
    const shared = Object.keys(A.loadings).filter((k) => k in B.loadings);
    const opposed = shared.some((k) => A.loadings[k] * B.loadings[k] < 0);
    if (!opposed) { fail('mirror', `${A.id}/${B.id} do not load oppositely on any shared axis`); bad++; }
  }
  if (!bad) ok('mirror pairs', `${MIRROR_PAIRS.length} pairs, all reciprocal and opposed`);
}

// ---- 5. Dyad region symmetry -----------------------------------------------------
// THE most important bias check. If the authored tensions cluster on one side of the
// space, the instrument interrogates one side harder than the other — and it does so
// invisibly, because each individual dyad looks fair on its own.
console.log('\n5. Dyad region symmetry (no region > 2x the least-represented)');
{
  const counts = {};
  for (const d of DYADS) counts[d.region] = (counts[d.region] ?? 0) + 1;
  const entries = Object.entries(counts);
  const lo = Math.min(...entries.map(([, n]) => n));
  const hi = Math.max(...entries.map(([, n]) => n));
  const detail = entries.map(([r, n]) => `${r}:${n}`).join('  ');
  if (hi <= lo * 2) ok('dyad regions', detail);
  else warn('dyad regions', `${detail} — ratio ${(hi / lo).toFixed(1)}x`);
}

// ---- 6. Dyads are not mirror pairs -----------------------------------------------
console.log('\n6. Dyads are tensions, not contradictions');
{
  let bad = 0;
  for (const d of DYADS) {
    const [x, y] = d.items;
    const X = ITEMS.find((i) => i.id === x);
    if (X?.mirror === y) { fail('dyad', `${d.id} pairs mirror items ${x}/${y} — that is yea-saying, not a tension`); bad++; }
  }
  if (!bad) ok('dyads', `${DYADS.length} dyads, none pair mirror items`);
}

// ---- 7. Referential integrity ----------------------------------------------------
console.log('\n7. Referential integrity');
{
  const ids = new Set(ITEMS.map((i) => i.id));
  const axisIds = new Set(AXES.map((a) => a.id));
  const dyadIds = new Set(DYADS.map((d) => d.id));
  let bad = 0;
  for (const i of ITEMS) {
    for (const k of Object.keys(i.loadings)) if (!axisIds.has(k)) { fail('loading', `${i.id} -> unknown axis ${k}`); bad++; }
    if (i.mirror && !ids.has(i.mirror)) { fail('mirror', `${i.id} -> unknown item ${i.mirror}`); bad++; }
    for (const d of i.dyad ?? []) if (!dyadIds.has(d)) { fail('dyad ref', `${i.id} -> unknown dyad ${d}`); bad++; }
  }
  for (const d of DYADS) {
    for (const it of d.items) if (!ids.has(it)) { fail('dyad', `${d.id} -> unknown item ${it}`); bad++; }
    for (const it of Object.keys(d.rule)) if (!ids.has(it)) { fail('dyad rule', `${d.id} -> unknown item ${it}`); bad++; }
  }
  if (!bad) ok('references', 'all item, axis, and dyad references resolve');
}

// ---- 8. Anchor variance ----------------------------------------------------------
// An item every tradition answers identically carries no discriminating power, however
// well written. Items are selected to SEPARATE anchors, not to fill axes evenly.
console.log('\n8. Item discriminating power');
{
  const flat = [];
  ITEMS.forEach((item, n) => {
    const vals = ANCHORS.map((a) => a.vector[n]);
    const mean = vals.reduce((s, v) => s + v, 0) / vals.length;
    const sd = Math.sqrt(vals.reduce((s, v) => s + (v - mean) ** 2, 0) / vals.length);
    if (sd < 0.6) flat.push(`${item.id} (sd ${sd.toFixed(2)})`);
  });
  if (flat.length) warn('discrimination', `low-variance items: ${flat.join(', ')}`);
  else ok('discrimination', 'every item separates the anchor set');
}

// ---- 9. Anchor glossaries and sources --------------------------------------------
console.log('\n9. Anchor documentation');
{
  const missing = ANCHORS.filter((a) => !a.glossary || !a.sources?.length).map((a) => a.id);
  if (missing.length) fail('documentation', `missing glossary or sources: ${missing.join(', ')}`);
  else ok('documentation', `${ANCHORS.length} anchors documented with primary sources`);
}


// ---- 10. Deployment hazards ------------------------------------------------------
// GitHub Pages runs Jekyll unless told not to, and Jekyll silently drops any file or
// directory whose name begins with an underscore. The file sits in the repository and
// the build simply refuses to publish it, so everything works locally and 404s in
// production. That cost us the entire results page once. It is cheap to never repeat.
console.log('');
console.log('10. Deployment hazards');
{
  const hidden = [];
  const walk = (dir, prefix = '') => {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      if (e.name === 'node_modules' || e.name.startsWith('.')) continue;
      const rel = prefix + e.name;
      if (e.name.startsWith('_')) hidden.push(rel);
      if (e.isDirectory()) walk(dir + '/' + e.name, rel + '/');
    }
  };
  walk('.');
  const nojekyll = existsSync('.nojekyll');
  if (hidden.length && !nojekyll) {
    fail('jekyll', 'underscore-prefixed paths will 404 on GitHub Pages: ' + hidden.join(', ') + ' - add a .nojekyll file');
  } else if (hidden.length) {
    ok('jekyll', hidden.length + ' underscore path(s), but .nojekyll is present');
  } else if (!nojekyll) {
    warn('jekyll', 'no .nojekyll file; add one before any underscore-prefixed file appears');
  } else {
    ok('jekyll', '.nojekyll present, no underscore-prefixed paths');
  }
}


console.log(`\n${failures} failure(s), ${warnings} warning(s).\n`);
process.exit(failures > 0 ? 1 : 0);
