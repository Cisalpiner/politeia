// POLITEIA — engine smoke tests
//
// Hand-checked cases for the parts of the engine that are easy to get subtly wrong.
//
//   node tools/smoke.mjs

import { ITEMS, ITEM_INDEX } from '../data/items.js';
import { ANCHORS, ANCHOR_BY_ID } from '../data/anchors.js';
import { axisScores, acquiescenceBias, superlinear } from '../js/scoring.js';
import { admixture, projectSimplex } from '../js/admixture.js';
import { coherenceFindings } from '../js/coherence.js';
import { encode, decode } from '../js/codec.js';

let failed = 0;
const check = (name, cond, detail = '') => {
  console.log(`  ${cond ? 'PASS' : 'FAIL'}  ${name}${detail ? '   ' + detail : ''}`);
  if (!cond) failed++;
};
const near = (a, b, eps = 1e-6) => Math.abs(a - b) < eps;

console.log('\nSMOKE TESTS\n');

// ---- superlinear weighting -------------------------------------------------------
console.log('superlinear weighting');
check('s(0) = 0', near(superlinear(0), 0));
check('s(1) = 1', near(superlinear(1), 1));
check('s(2) = 2.5', near(superlinear(2), 2.5));
check('s(-2) = -2.5', near(superlinear(-2), -2.5));
check('monotone', superlinear(1.5) > superlinear(1) && superlinear(2) > superlinear(1.5));

// ---- simplex projection ----------------------------------------------------------
console.log('\nsimplex projection');
{
  const p = projectSimplex([0.5, 0.9, -0.3, 0.2]);
  check('sums to 1', near(p.reduce((s, v) => s + v, 0), 1, 1e-9));
  check('non-negative', p.every((v) => v >= 0));
  const already = projectSimplex([0.25, 0.25, 0.25, 0.25]);
  check('fixed point on the simplex', already.every((v) => near(v, 0.25, 1e-9)));
}

// ---- acquiescence correction -----------------------------------------------------
console.log('\nacquiescence correction');
{
  const neutral = new Array(ITEMS.length).fill(0);
  check('no bias on all-neutral', near(acquiescenceBias(neutral), 0));

  // A yea-sayer: agrees with everything, including both halves of every opposed pair.
  const yea = new Array(ITEMS.length).fill(2);
  check('yea-sayer detected', acquiescenceBias(yea) > 1.5, `bias = ${acquiescenceBias(yea).toFixed(2)}`);

  // After correction a pure yea-sayer carries almost no signal, which is right: someone
  // who agreed with every statement told us nothing about their politics.
  const scores = axisScores(yea);
  const maxAbs = Math.max(...Object.values(scores).filter((s) => s.determined).map((s) => Math.abs(s.score)));
  check('yea-sayer scores collapse toward zero', maxAbs < 15, `largest |score| = ${maxAbs}`);

  // A coherent respondent answering one pole consistently should NOT be corrected away.
  const burke = ANCHOR_BY_ID.burkean.vector;
  check('coherent respondent barely corrected', Math.abs(acquiescenceBias(burke)) < 0.4,
    `bias = ${acquiescenceBias(burke).toFixed(2)}`);
}

// ---- no-view is not neutral ------------------------------------------------------
console.log('\nno view vs neutral');
{
  const allNeutral = new Array(ITEMS.length).fill(0);
  const allNoView = new Array(ITEMS.length).fill('nv');
  const sN = axisScores(allNeutral);
  const sX = axisScores(allNoView);
  check('all-neutral is determined', Object.values(sN).every((s) => s.determined));
  check('all-no-view is undetermined', Object.values(sX).every((s) => !s.determined));
  check('all-no-view yields no admixture', admixture(allNoView, ANCHORS).insufficient === true);
}

// ---- admixture returns a genuine mixture, not a collapse -------------------------
console.log('\nadmixture on a blended respondent');
{
  // Halfway between Burkean conservatism and Lockean liberalism, rounded to the scale.
  const a = ANCHOR_BY_ID.burkean.vector;
  const b = ANCHOR_BY_ID.lockean.vector;
  const blend = a.map((v, i) => Math.round((v + b[i]) / 2));

  const mix = admixture(blend, ANCHORS);
  const names = mix.weights.map((w) => `${w.anchor.name} ${(w.weight * 100).toFixed(0)}%`);
  console.log('        ' + names.join(' · '));

  check('returns more than one component', mix.weights.length > 1);
  check('does not collapse to a single anchor', (mix.weights[0]?.weight ?? 1) < 0.9,
    `top = ${((mix.weights[0]?.weight ?? 1) * 100).toFixed(0)}%`);
  const ids = mix.weights.map((w) => w.anchor.id);
  check('recovers at least one parent', ids.includes('burkean') || ids.includes('lockean'),
    ids.join(', '));
  check('weights sum to 1', near(mix.weights.reduce((s, w) => s + w.weight, 0) + mix.other, 1, 1e-6));
}

// ---- stability: one changed answer must not swing the fit ------------------------
console.log('\nadmixture stability');
{
  const base = ANCHOR_BY_ID.rawlsian.vector;
  const m0 = admixture(base, ANCHORS);
  let worst = 0;
  let worstItem = '';
  for (let i = 0; i < base.length; i++) {
    const perturbed = [...base];
    perturbed[i] = Math.max(-2, Math.min(2, perturbed[i] + 1));
    const m1 = admixture(perturbed, ANCHORS);
    for (const w of m0.weights) {
      const after = m1.weights.find((x) => x.anchor.id === w.anchor.id)?.weight ?? 0;
      const delta = Math.abs(after - w.weight);
      if (delta > worst) { worst = delta; worstItem = ITEMS[i].id; }
    }
  }
  check('one-step change moves no weight more than 20pts', worst < 0.20,
    `worst = ${(worst * 100).toFixed(1)}pts at ${worstItem}`);
}

// ---- coherence -------------------------------------------------------------------
console.log('\ncoherence detection');
{
  const quiet = new Array(ITEMS.length).fill(0);
  check('no dyad fires on all-neutral', coherenceFindings(quiet).length === 0);

  // Construct a respondent who trips d02 exactly: common ownership AND pure consent.
  const r = new Array(ITEMS.length).fill(0);
  r[ITEM_INDEX.i02] = 2;
  r[ITEM_INDEX.i13] = 2;
  const f = coherenceFindings(r);
  check('d02 fires when both halves are agreed', f.some((x) => x.dyad.id === 'd02'));

  // Starring one half must escalate severity.
  const plain = coherenceFindings(r).find((x) => x.dyad.id === 'd02').severity;
  const starred = coherenceFindings(r, new Set(['i13'])).find((x) => x.dyad.id === 'd02').severity;
  check('starring doubles severity', near(starred, plain * 2), `${plain} -> ${starred}`);

  // A dyad must never be satisfiable by a no-view.
  const nv = new Array(ITEMS.length).fill(0);
  nv[ITEM_INDEX.i02] = 'nv';
  nv[ITEM_INDEX.i13] = 2;
  check('no view cannot fire a dyad', !coherenceFindings(nv).some((x) => x.dyad.id === 'd02'));
}

// ---- codec round trip ------------------------------------------------------------
console.log('\ncodec');
{
  const responses = ITEMS.map((_, i) => (i % 7 === 0 ? 'nv' : ((i % 5) - 2)));
  const stars = new Set(['i03', 'i19']);
  const code = encode(responses, stars);
  const back = decode(code);
  check('responses round-trip', JSON.stringify(back.responses) === JSON.stringify(responses));
  check('stars round-trip', [...back.stars].sort().join() === [...stars].sort().join());
  // Scales with the bank rather than asserting a fixed length: 3 bits of response plus
  // 1 star bit per item is 0.5 bytes, and base64 costs 4/3, so ~0.67 chars per item is
  // the floor. Anything under 0.8 means the packing has not regressed.
  check('code packs efficiently', code.length < ITEMS.length * 0.8,
    `${code.length} chars for ${ITEMS.length} items (${(code.length / ITEMS.length).toFixed(2)}/item)`);
}

console.log(`\n${failed} failure(s).\n`);
process.exit(failed > 0 ? 1 : 0);
