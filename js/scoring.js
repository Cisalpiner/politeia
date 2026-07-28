// POLITEIA — axis scoring
//
// Response encoding used throughout:
//   number in -2..+2  a real answer
//   'nv'              no view (missing data, NOT a zero)
//   null | undefined  not yet answered
//
// The distinction between 'nv' and 0 is load-bearing. "Neutral" means the respondent
// weighed both sides and landed in the middle; "no view" means there is no data. Every
// other instrument of this kind conflates them, which quietly corrupts every downstream
// computation.

import { AXES } from '../data/axes.js';
import { ITEMS, MIRROR_PAIRS } from '../data/items.js';

/** Minimum share of an axis's items that must be answered for it to be reported. */
export const COVERAGE_FLOOR = 0.6;

const isAnswer = (r) => typeof r === 'number';
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

/**
 * Superlinear conviction weighting.
 * Anchored at s(0)=0, s(1)=1, s(2)=2.5 and smooth in between, so that a strong
 * conviction dominates a mild lean instead of being averaged into mush.
 */
export function superlinear(x) {
  return x + 0.25 * x * Math.max(0, Math.abs(x) - 1);
}

/**
 * Acquiescence (yea-saying) bias, estimated from mirror pairs.
 *
 * Mirror pairs are logical opposites, so a respondent free of response bias satisfies
 * r_a ≈ -r_b, and the pair mean is ≈ 0. A respondent who agrees with both halves is
 * exhibiting acquiescence rather than centrism, and the pair mean is positive.
 */
export function acquiescenceBias(responses) {
  const means = [];
  for (const [a, b] of MIRROR_PAIRS) {
    if (!isAnswer(responses[a]) || !isAnswer(responses[b])) continue;
    means.push((responses[a] + responses[b]) / 2);
  }
  if (!means.length) return 0;
  return means.reduce((s, v) => s + v, 0) / means.length;
}

/**
 * Bias-corrected response vector. Entries are numbers or null (null = no data).
 * Correction is applied on the raw -2..+2 scale, before superlinear weighting.
 */
export function correctedVector(responses) {
  const bias = acquiescenceBias(responses);
  return responses.map((r) => (isAnswer(r) ? r - bias : null));
}

/**
 * Axis scores in [-100, 100], positive toward each axis's `pos` pole.
 *
 * @param responses array aligned to ITEMS
 * @param stars     Set of starred item ids (non-negotiables), weighted x1.5
 */
export function axisScores(responses, stars = new Set(), activeIds = null) {
  const corrected = correctedVector(responses);
  const out = {};
  // Coverage is measured against the items the respondent was actually SHOWN. Without
  // this the short form would report every axis as insufficiently determined, because
  // it offers four items on an axis that carries twenty in the long form.
  const offered = (it) => activeIds === null || activeIds.has(it.id);

  for (const axis of AXES) {
    let num = 0;
    let den = 0;
    let loaded = 0;
    let answered = 0;

    ITEMS.forEach((item, n) => {
      const w = item.loadings[axis.id];
      if (w === undefined || !offered(item)) return;
      loaded += 1;
      if (corrected[n] === null) return;
      answered += 1;
      const starMul = stars.has(item.id) ? 1.5 : 1.0;
      num += w * superlinear(corrected[n]) * starMul;
      den += Math.abs(w) * starMul;
    });

    const coverage = loaded ? answered / loaded : 0;

    // Coverage guard. Reporting a number the instrument cannot support is worse than
    // admitting it does not know.
    if (coverage < COVERAGE_FLOOR || den === 0) {
      out[axis.id] = { determined: false, coverage, answered, loaded, score: null };
    } else {
      out[axis.id] = {
        determined: true,
        coverage,
        answered,
        loaded,
        score: clamp(Math.round(((num / den) / 2.5) * 100), -100, 100),
      };
    }
  }

  return out;
}

/** Share of OFFERED items the respondent declined. Reported, not corrected for. */
export function abstentionRate(responses, activeIds = null) {
  const pool = ITEMS.filter((it) => activeIds === null || activeIds.has(it.id));
  if (!pool.length) return 0;
  const n = pool.filter((it) => responses[ITEMS.indexOf(it)] === 'nv').length;
  return n / pool.length;
}
