

import { ITEMS, ITEM_INDEX, SHORT_ITEMS } from '../data/items.js';
import { encode, MODE_LONG, MODE_SHORT } from './codec.js';

const BLOCK = 5;
const MAX_STARS = 5;

// the form that's being taken. The short form asks a 36-item subset and places the
// respondent among tradition FAMILIES; the long form asks all 116 and places them among
// individual ideologies instead
const SHORT = new URLSearchParams(location.search).get('form') === 'short';
const MODE = SHORT ? MODE_SHORT : MODE_LONG;
const ACTIVE = SHORT ? SHORT_ITEMS : ITEMS;
const N = ACTIVE.length;

// Sessions are stored per form, so starting the short version never clobbers a
// half-finished long one.
const STORE = `politeia.session.${SHORT ? 'short' : 'long'}.v2`;

const $ = (sel) => document.querySelector(sel);

const state = {
  order: [],            // display order, as indices into ITEMS
  responses: new Array(ITEMS.length).fill(null),
  stars: new Set(),
  block: 0,
  phase: 'items',       // 'items' | 'stars'
};

// ---------------------------------------------------------------- ordering

/**
 * Randomised order, subject to the constraint that mirror partners and the two halves
 * of a dyad never land in the same block of five. Showing them together turns
 * a measurement into a puzzle the quiz taker can see through.
 */
function buildOrder() {
  const conflicts = new Map();
  const add = (a, b) => {
    if (!conflicts.has(a)) conflicts.set(a, new Set());
    conflicts.get(a).add(b);
  };
  ITEMS.forEach((it) => {
    if (it.mirror) { add(it.id, it.mirror); add(it.mirror, it.id); }
  });
  ITEMS.forEach((a) =>
    ITEMS.forEach((b) => {
      if (a.id === b.id || !a.dyad || !b.dyad) return;
      if (a.dyad.some((d) => b.dyad.includes(d))) add(a.id, b.id);
    })
  );

  for (let attempt = 0; attempt < 400; attempt++) {
    const idx = ACTIVE.map((it) => ITEM_INDEX[it.id]);
    for (let i = idx.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [idx[i], idx[j]] = [idx[j], idx[i]];
    }
    let ok = true;
    for (let b = 0; b < idx.length && ok; b += BLOCK) {
      const ids = idx.slice(b, b + BLOCK).map((i) => ITEMS[i].id);
      for (const id of ids) {
        const bad = conflicts.get(id);
        if (bad && ids.some((o) => o !== id && bad.has(o))) { ok = false; break; }
      }
    }
    if (ok) return idx;
  }
  console.warn('politeia: block constraint unsatisfied; using sequential order');
  return ACTIVE.map((it) => ITEM_INDEX[it.id]);
}

// ---------------------------------------------------------------- persistence

function save() {
  try {
    localStorage.setItem(
      STORE,
      JSON.stringify({ order: state.order, responses: state.responses, stars: [...state.stars], block: state.block, phase: state.phase })
    );
  } catch { /* private browsing, quota, etc. — the session simply won't resume */ }
}

function restore() {
  try {
    const raw = localStorage.getItem(STORE);
    if (!raw) return false;
    const d = JSON.parse(raw);
    if (!Array.isArray(d.order) || d.order.length !== N) return false;
    Object.assign(state, { order: d.order, responses: d.responses, stars: new Set(d.stars), block: d.block, phase: d.phase });
    return true;
  } catch { return false; }
}

// ---------------------------------------------------------------- render

const SCALE = [
  { v: -2, label: 'Strongly<br>disagree', name: 'Strongly disagree' },
  { v: -1, label: 'Disagree', name: 'Disagree' },
  { v: 0, label: 'Neutral', name: 'Neutral' },
  { v: 1, label: 'Agree', name: 'Agree' },
  { v: 2, label: 'Strongly<br>agree', name: 'Strongly agree' },
];

function answeredCount() {
  return state.order.filter((i) => state.responses[i] !== null).length;
}

function renderProgress() {
  const done = answeredCount();
  const pct = (done / N) * 100;
  $('#progress-text').textContent = `${done} of ${N} answered`;
  $('#progress-fill').style.width = `${pct}%`;
}

function renderItems() {
  const start = state.block * BLOCK;
  const slice = state.order.slice(start, start + BLOCK);

  $('#stage').innerHTML = slice
    .map((idx, k) => {
      const item = ITEMS[idx];
      const r = state.responses[idx];
      const opts = SCALE.map(
        (s) =>
          `<button class="scale-opt" type="button" data-idx="${idx}" data-v="${s.v}"
             aria-label="${s.name}" aria-pressed="${r === s.v}">${s.label}</button>`
      ).join('');
      return `<div class="item">
        <div class="item-n">${String(start + k + 1).padStart(2, '0')} / ${N}</div>
        <div class="item-text">${item.text}</div>
        <div class="scale">
          ${opts}
          <button class="scale-opt scale-noview" type="button" data-idx="${idx}" data-v="nv"
            aria-label="No view" aria-pressed="${r === 'nv'}"
            title="Not the same as Neutral. This excludes the item rather than scoring it as a zero.">No view</button>
        </div>
      </div>`;
    })
    .join('');

  $('#next').textContent = start + BLOCK >= N ? 'Continue' : 'Next';
  $('#back').style.visibility = state.block === 0 ? 'hidden' : 'visible';
  syncBlockState();
  window.scrollTo({ top: 0, behavior: 'auto' });
}

/**
 * Update progress and the Next button without rebuilding the block.
 *
 * Re-rendering on every answer would reset scroll position and destroy focus, which
 * means a respondent answering the third item of five gets thrown back to the top of
 * the page. Selection state is toggled in place instead.
 */
function syncBlockState() {
  if (state.phase !== 'items') return;
  const start = state.block * BLOCK;
  const slice = state.order.slice(start, start + BLOCK);
  $('#next').disabled = !slice.every((i) => state.responses[i] !== null);
  renderProgress();
}

function renderStars() {
  // Offer only the items the respondent actually felt strongly about.
  const strong = state.order.filter((i) => Math.abs(state.responses[i] ?? 0) === 2);
  const pool = strong.length ? strong : state.order.filter((i) => Math.abs(state.responses[i] ?? 0) >= 1);

  $('#stage').innerHTML = `
    <div class="narrow">
      <h2>Non-negotiables</h2>
      <p>Of the statements you felt most strongly about, mark up to ${MAX_STARS} you would
      not trade away for anything; the commitments you would keep no matter what.</p>
      <p class="small">This step is optional. It sharpens the tension report and gives
      strongly held positions more weight, but the instrument works without it.</p>
    </div>
    <ul class="star-list">${
      pool.length
        ? pool
            .map((idx) => {
              const item = ITEMS[idx];
              const r = state.responses[idx];
              const stance = r > 0 ? `You agreed${r === 2 ? ' strongly' : ''}` : `You disagreed${r === -2 ? ' strongly' : ''}`;
              return `<li class="star-row">
                <button class="star-toggle" type="button" data-star="${item.id}"
                  aria-pressed="${state.stars.has(item.id)}" aria-label="Mark as non-negotiable">★</button>
                <div><div>${item.text}</div><div class="stance">${stance}</div></div>
              </li>`;
            })
            .join('')
        : '<li class="small">You did not agree or disagree strongly with anything.</li>'
    }</ul>`;

  $('#next').disabled = false;
  $('#next').textContent = 'See results';
  $('#back').style.visibility = 'visible';
  updateStarCount();
  renderProgress();
}

function updateStarCount() {
  const el = $('#star-count');
  if (el) el.textContent = `${state.stars.size} of ${MAX_STARS} marked`;
}

function render() {
  $('#star-count').style.display = state.phase === 'stars' ? '' : 'none';
  if (state.phase === 'items') renderItems();
  else renderStars();
}

// ---------------------------------------------------------------- events

$('#stage').addEventListener('click', (e) => {
  const opt = e.target.closest('.scale-opt');
  if (opt) {
    const idx = Number(opt.dataset.idx);
    const raw = opt.dataset.v;
    state.responses[idx] = raw === 'nv' ? 'nv' : Number(raw);
    // Toggle only this item's own buttons. See syncBlockState().
    for (const sib of $('#stage').querySelectorAll(`.scale-opt[data-idx="${idx}"]`)) {
      sib.setAttribute('aria-pressed', String(sib === opt));
    }
    save();
    syncBlockState();
    return;
  }
  const star = e.target.closest('.star-toggle');
  if (star) {
    const id = star.dataset.star;
    if (state.stars.has(id)) state.stars.delete(id);
    else if (state.stars.size < MAX_STARS) state.stars.add(id);
    else return;
    star.setAttribute('aria-pressed', String(state.stars.has(id)));
    updateStarCount();
    save();
  }
});

$('#next').addEventListener('click', () => {
  if (state.phase === 'items') {
    if ((state.block + 1) * BLOCK >= N) state.phase = 'stars';
    else state.block += 1;
    save();
    render();
  } else {
    localStorage.removeItem(STORE);
    try {
      const past = JSON.parse(localStorage.getItem('politeia.history.v1') ?? '[]');
      past.push({ code: encode(state.responses, state.stars, MODE), short: SHORT });
      localStorage.setItem('politeia.history.v1', JSON.stringify(past.slice(-20)));
    } catch { /* history is a convenience, not a requirement */ }
    location.href = `results.html#r=${encode(state.responses, state.stars, MODE)}`;
  }
});

$('#back').addEventListener('click', () => {
  if (state.phase === 'stars') state.phase = 'items';
  else if (state.block > 0) state.block -= 1;
  save();
  render();
});

// ---------------------------------------------------------------- boot

if (!restore()) {
  state.order = buildOrder();
  save();
}
render();
