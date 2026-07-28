// POLITEIA — short-form validation
//
// Two questions the short form has to answer before it is honest to ship:
//
//   1. Does each family's own profile return that family? (recovery, as for anchors)
//   2. Does it still do so when scored on ONLY the 34 short items? This is the real
//      test — a family that separates on 95 items and collapses on 34 would make the
//      short form a lie rather than a coarser truth.
//
//   node tools/families.mjs

import { ITEMS, SHORT_ITEMS, SHORT_IDS } from '../data/items.js';
import { FAMILY_VECTORS } from '../data/families.js';
import { ANCHORS } from '../data/anchors.js';
import { admixture, nearestNeighbours, cosine } from '../js/admixture.js';
import { axisScores } from '../js/scoring.js';

const pad = (s, n) => String(s).padEnd(n).slice(0, n);
const pct = (x) => `${(x * 100).toFixed(0)}%`.padStart(4);

let failures = 0;
let warnings = 0;

// Restrict a full-length vector to the short subset; everything else becomes no-data.
const toShort = (v) => ITEMS.map((it, i) => (SHORT_IDS.has(it.id) ? Math.round(v[i]) : 'nv'));

console.log(`\nSHORT FORM — ${FAMILY_VECTORS.length} families, ${SHORT_ITEMS.length} of ${ITEMS.length} items\n`);
console.log(pad('family', 34), pad('top match (34 items)', 34), 'self  margin  status');
console.log('-'.repeat(92));

for (const fam of FAMILY_VECTORS) {
  const responses = toShort(fam.vector);
  const nn = nearestNeighbours(responses, FAMILY_VECTORS);
  const mix = admixture(responses, FAMILY_VECTORS, { prefilterK: FAMILY_VECTORS.length });

  const top = nn[0];
  const self = mix.weights.find((w) => w.anchor.id === fam.id)?.weight ?? 0;
  const margin = top.similarity - (nn[1]?.similarity ?? 0);

  let status = 'ok';
  if (top.anchor.id !== fam.id) { status = 'FAIL'; failures++; }
  else if (self < 0.35) { status = 'warn'; warnings++; }
  else if (margin < 0.04) { status = 'warn'; warnings++; }

  console.log(pad(fam.name, 34), pad(top.anchor.name, 34), pct(self), margin.toFixed(3).padStart(7), ' ' + status);
}

// Every axis must still be determinable from 34 items, or the short form silently
// reports "insufficiently determined" across the board.
console.log('\nAXIS COVERAGE ON THE SHORT SUBSET\n');
{
  const probe = ITEMS.map((it) => (SHORT_IDS.has(it.id) ? 1 : 'nv'));
  const scores = axisScores(probe, new Set(), SHORT_IDS);
  for (const [axis, s] of Object.entries(scores)) {
    const line = `${pad(axis, 16)} ${s.answered}/${s.loaded} items`;
    if (!s.determined) { console.log(`  FAIL  ${line} — undetermined`); failures++; }
    else console.log(`  PASS  ${line}`);
  }
}

// Polarity within the short subset specifically. The long form being balanced does not
// imply the subset is.
console.log('\nPOLARITY ON THE SHORT SUBSET (target 40-60% negative)\n');
{
  const axes = new Set(SHORT_ITEMS.flatMap((i) => Object.keys(i.loadings)));
  for (const axis of axes) {
    const loaded = SHORT_ITEMS.filter((i) => i.loadings[axis] !== undefined);
    const neg = loaded.filter((i) => i.loadings[axis] < 0).length;
    const share = neg / loaded.length;
    const detail = `${pad(axis, 16)} ${neg}/${loaded.length} negative (${(share * 100).toFixed(0)}%)`;
    if (share >= 0.4 && share <= 0.6) console.log(`  PASS  ${detail}`);
    else { console.log(`  WARN  ${detail}`); warnings++; }
  }
}

// Which families are hardest to tell apart on 34 items?
console.log('\nCLOSEST FAMILY PAIRS (on the short subset)\n');
{
  const idx = ITEMS.map((it, i) => (SHORT_IDS.has(it.id) ? i : -1)).filter((i) => i >= 0);
  const pairs = [];
  for (let i = 0; i < FAMILY_VECTORS.length; i++) {
    for (let j = i + 1; j < FAMILY_VECTORS.length; j++) {
      const a = idx.map((k) => FAMILY_VECTORS[i].vector[k]);
      const b = idx.map((k) => FAMILY_VECTORS[j].vector[k]);
      pairs.push({ a: FAMILY_VECTORS[i], b: FAMILY_VECTORS[j], c: cosine(a, b) });
    }
  }
  pairs.sort((x, y) => y.c - x.c);
  for (const p of pairs.slice(0, 6)) {
    console.log(pad(p.a.name, 34), pad(p.b.name, 34), p.c.toFixed(3) + (p.c > 0.9 ? '  <-- too close' : ''));
  }
}

console.log(`\nMEMBERSHIP\n`);
for (const f of FAMILY_VECTORS) {
  console.log(`  ${f.name} (${f.members.length})`);
  console.log(`      ${f.memberNames.join(' · ')}`);
}

console.log(`\n${failures} failure(s), ${warnings} warning(s).  [${ANCHORS.length} anchors in ${FAMILY_VECTORS.length} families]\n`);
process.exit(failures > 0 ? 1 : 0);
