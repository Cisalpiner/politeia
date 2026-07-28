// POLITEIA — admixture and nearest-neighbour
//
// The respondent is expressed as a MIXTURE of traditions rather than as a coordinate.
// Given anchor profiles A_k and a respondent vector u, solve
//
//     minimise  ‖ u − Σ_k π_k A_k ‖²  +  λ‖π‖²
//     subject to  π_k ≥ 0,  Σ_k π_k = 1
//
// i.e. non-negative least squares on the probability simplex, with ridge
// regularisation. Solved by projected gradient descent. No dependencies.
//
// a coefficient is the share of the respondent's ANSWER PATTERN accounted for by that
// tradition's characteristic pattern. it's not necessarily a claim about what the respondent is,
// endorses, or would endorse. if you read it with just a little glance, "31% X" looks like an accusation. It isn't
// one, and the interface is responsible for saying so BEFORE it shows the figure.

/** Anchors kept after cosine prefiltering. Stabilises an underdetermined fit. */
export const PREFILTER_K = 20;
/** Ridge strength. Tuned so a one-step change to one item moves no weight much. */
export const RIDGE = 0.06;
/** Weights below this are pooled into "other" rather than reported. */
export const REPORT_FLOOR = 0.03;

const dot = (a, b) => a.reduce((s, v, i) => s + v * b[i], 0);
const norm = (a) => Math.sqrt(dot(a, a));

function meanCentre(v) {
  const m = v.reduce((s, x) => s + x, 0) / (v.length || 1);
  return v.map((x) => x - m);
}

export function cosine(a, b) {
  const ca = meanCentre(a);
  const cb = meanCentre(b);
  const d = norm(ca) * norm(cb);
  return d === 0 ? 0 : dot(ca, cb) / d;
}

/** Euclidean projection onto the probability simplex (Duchi et al., 2008). */
export function projectSimplex(v) {
  const n = v.length;
  const sorted = [...v].sort((a, b) => b - a);
  let cumulative = 0;
  let rho = -1;
  let theta = 0;
  for (let j = 0; j < n; j++) {
    cumulative += sorted[j];
    const t = (cumulative - 1) / (j + 1);
    if (sorted[j] - t > 0) {
      rho = j;
      theta = t;
    }
  }
  if (rho < 0) return v.map(() => 1 / n);
  return v.map((x) => Math.max(0, x - theta));
}

/**
 * Nearest neighbours by cosine similarity over answered items only.
 * Returns every anchor, ranked. Nothing is hidden.
 */
export function nearestNeighbours(responses, anchors) {
  const idx = responses.map((r, i) => (typeof r === 'number' ? i : -1)).filter((i) => i >= 0);
  if (!idx.length) return [];
  const u = idx.map((i) => responses[i]);
  return anchors
    .map((a) => ({ anchor: a, similarity: cosine(u, idx.map((i) => a.vector[i])) }))
    .sort((x, y) => y.similarity - x.similarity);
}

/**
 * Admixture fit.
 *
 * @returns {{weights: Array<{anchor, weight}>, other: number, residual: number, fit: number}}
 *   `fit` is 1 − (residual / null-model residual): roughly, how much better the mixture
 *   explains the respondent than the flat average of the candidate anchors does.
 */
export function admixture(responses, anchors, opts = {}) {
  const K = opts.prefilterK ?? PREFILTER_K;
  const lambda = opts.ridge ?? RIDGE;
  const floor = opts.reportFloor ?? REPORT_FLOOR;
  const iterations = opts.iterations ?? 800;

  const idx = responses.map((r, i) => (typeof r === 'number' ? i : -1)).filter((i) => i >= 0);
  if (idx.length < 5) {
    return { weights: [], other: 0, residual: Infinity, fit: 0, insufficient: true };
  }

  const u = idx.map((i) => responses[i]);

  // 1. Prefilter to the K most similar anchors. With ~60 anchors and ~65 items the
  //    system is underdetermined; unregularised NNLS over the whole roster returns
  //    sparse solutions that swing wildly when one answer changes.
  const ranked = nearestNeighbours(responses, anchors).slice(0, Math.min(K, anchors.length));
  const cand = ranked.map((r) => r.anchor);
  const A = cand.map((a) => idx.map((i) => a.vector[i]));
  const k = A.length;
  const m = u.length;

  // 2. Projected gradient descent.
  //    f(π)  = ‖u − Aᵀπ‖² + λ‖π‖²
  //    ∇f(π) = −2A(u − Aᵀπ) + 2λπ
  let frob = 0;
  for (const row of A) frob += dot(row, row);
  const L = 2 * (frob + lambda); // Lipschitz upper bound
  const step = 1 / L;

  let pi = new Array(k).fill(1 / k);

  for (let t = 0; t < iterations; t++) {
    // residual r = u − Aᵀπ
    const r = new Array(m).fill(0);
    for (let j = 0; j < m; j++) {
      let acc = 0;
      for (let i = 0; i < k; i++) acc += pi[i] * A[i][j];
      r[j] = u[j] - acc;
    }
    const grad = new Array(k);
    for (let i = 0; i < k; i++) grad[i] = -2 * dot(A[i], r) + 2 * lambda * pi[i];
    pi = projectSimplex(pi.map((p, i) => p - step * grad[i]));
  }

  // 3. Residual and fit quality.
  const resid = (() => {
    let acc = 0;
    for (let j = 0; j < m; j++) {
      let s = 0;
      for (let i = 0; i < k; i++) s += pi[i] * A[i][j];
      acc += (u[j] - s) ** 2;
    }
    return acc;
  })();
  const flat = idx.map((_, j) => A.reduce((s, row) => s + row[j], 0) / k);
  const nullResid = u.reduce((s, x, j) => s + (x - flat[j]) ** 2, 0);
  const fit = nullResid > 0 ? Math.max(0, 1 - resid / nullResid) : 0;

  // 4. Report.
  const all = cand
    .map((a, i) => ({ anchor: a, weight: pi[i] }))
    .sort((x, y) => y.weight - x.weight);
  const weights = all.filter((w) => w.weight >= floor);
  const other = all.filter((w) => w.weight < floor).reduce((s, w) => s + w.weight, 0);

  return { weights, other, residual: resid, fit, insufficient: false };
}

/**
 * The respondent's most unusual commitment relative to their dominant ideology: the item
 * on which they deviate furthest from the tradition they most resemble.
 */
export function mostUnusual(responses, anchor, items) {
  let best = null;
  responses.forEach((r, i) => {
    if (typeof r !== 'number') return;
    const gap = Math.abs(r - anchor.vector[i]);
    if (!best || gap > best.gap) best = { gap, item: items[i], theirs: r, anchors: anchor.vector[i] };
  });
  return best && best.gap >= 2 ? best : null;
}
