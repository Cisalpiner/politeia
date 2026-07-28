// POLITEIA — recovery test
//
// The strongest single check in the suite.
//
// Feed each anchor's own profile back into the instrument as if it were a respondent.
// A tradition must return ITSELF as its top match, with a substantial admixture weight.
// If Distributism's own answers do not come back as Distributism, then the item bank
// cannot distinguish it from its neighbours, and either the items or the profile are
// wrong. This is far cheaper to learn now than after three thousand matrix judgements.
//
//   node tools/recovery.mjs

import { ANCHORS } from '../data/anchors.js';
import { admixture, nearestNeighbours, cosine } from '../js/admixture.js';

const WEIGHT_FLOOR = 0.4; // self-weight an anchor must reach in its own admixture fit
const MARGIN_FLOOR = 0.05; // cosine margin over the runner-up

const pad = (s, n) => String(s).padEnd(n).slice(0, n);
const pct = (x) => `${(x * 100).toFixed(0)}%`.padStart(4);

let failures = 0;
let warnings = 0;
const confusions = [];

console.log(`\nRECOVERY — ${ANCHORS.length} anchors, ${ANCHORS[0].vector.length} items\n`);
console.log(pad('anchor', 30), pad('top match', 30), 'self  margin  status');
console.log('-'.repeat(84));

for (const anchor of ANCHORS) {
  const responses = anchor.vector;
  const nn = nearestNeighbours(responses, ANCHORS);
  const mix = admixture(responses, ANCHORS);

  const top = nn[0];
  const runnerUp = nn[1];
  const selfWeight = mix.weights.find((w) => w.anchor.id === anchor.id)?.weight ?? 0;
  const margin = top.similarity - (runnerUp?.similarity ?? 0);

  let status = 'ok';
  if (top.anchor.id !== anchor.id) {
    status = 'FAIL';
    failures += 1;
    confusions.push([anchor.name, top.anchor.name, 'top match is another tradition']);
  } else if (selfWeight < WEIGHT_FLOOR) {
    status = 'warn';
    warnings += 1;
    confusions.push([anchor.name, runnerUp?.anchor.name ?? '—', `self-weight ${pct(selfWeight)} below floor`]);
  } else if (margin < MARGIN_FLOOR) {
    status = 'warn';
    warnings += 1;
    confusions.push([anchor.name, runnerUp?.anchor.name ?? '—', `margin ${margin.toFixed(3)} too thin`]);
  }

  console.log(
    pad(anchor.name, 30),
    pad(top.anchor.name, 30),
    pct(selfWeight),
    margin.toFixed(3).padStart(7),
    ' ' + status
  );
}

// Pairwise near-degeneracy: which anchors are hardest to tell apart?
console.log('\nCLOSEST PAIRS (profile cosine — candidates for merging or for new discriminating items)\n');
const pairs = [];
for (let i = 0; i < ANCHORS.length; i++) {
  for (let j = i + 1; j < ANCHORS.length; j++) {
    pairs.push({ a: ANCHORS[i], b: ANCHORS[j], c: cosine(ANCHORS[i].vector, ANCHORS[j].vector) });
  }
}
pairs.sort((x, y) => y.c - x.c);
for (const p of pairs.slice(0, 8)) {
  const flag = p.c > 0.9 ? '  <-- too close' : '';
  console.log(pad(p.a.name, 32), pad(p.b.name, 32), p.c.toFixed(3) + flag);
}

if (confusions.length) {
  console.log('\nISSUES\n');
  for (const [a, b, why] of confusions) console.log(`  ${a}  →  ${b}   (${why})`);
}

console.log(`\n${failures} failure(s), ${warnings} warning(s).\n`);
process.exit(failures > 0 ? 1 : 0);
