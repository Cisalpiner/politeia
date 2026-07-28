// POLITEIA — results rendering

import { LAYER } from '../data/axes.js';
import { ITEMS, SHORT_IDS } from '../data/items.js';
import { ANCHORS } from '../data/anchors.js';
import { FAMILY_VECTORS } from '../data/families.js';
import { axisScores, acquiescenceBias, abstentionRate } from './scoring.js';
import { admixture, nearestNeighbours, mostUnusual } from './admixture.js';
import { coherenceFindings } from './coherence.js';
import { readFragment } from './codec.js';
import { axisBar, admixtureStack, swatchFor, figurePlate } from './chart.js';

const $ = (s) => document.querySelector(s);
const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const pct = (x) => `${(x * 100).toFixed(1)}%`;

/**
 * Render whatever result the address bar currently carries.
 *
 * Bound to `hashchange` as well as run at load: a fragment-only change does not reload
 * the document, so without this, following a second result link in the same tab would
 * leave the first person's result on screen under someone else's URL.
 */
function boot() {
  const decoded = readFragment();
  if (!decoded) {
    $('#out').innerHTML = `<div class="narrow">
      <h1>No result to show</h1>
      <p>The result is in the address bar; since this is just blank, you won't see any results.</p>
      <p><a href="quiz.html">Take the instrument →</a></p></div>`;
    return;
  }
  render(decoded.responses, decoded.stars, decoded.short);
}

boot();
window.addEventListener('hashchange', boot);

function axisRow(axis, s) {
  if (!s.determined) {
    return `<div class="axis-row">
      <div class="axis-heads"><b>${esc(axis.neg)}</b><b>${esc(axis.pos)}</b></div>
      <div class="axis-undetermined">Insufficiently determined — you answered
        ${s.answered} of ${s.loaded} items bearing on this axis.</div>
    </div>`;
  }
  const side = s.score === 0 ? 'balanced' : s.score > 0 ? axis.pos : axis.neg;
  return `<div class="axis-row">
    <div class="axis-heads"><b>${esc(axis.neg)}</b><b>${esc(axis.pos)}</b></div>
    ${axisBar(s.score)}
    <div class="axis-value">${s.score > 0 ? '+' : ''}${s.score} &nbsp;·&nbsp; ${esc(side)}</div>
  </div>`;
}

function render(responses, stars, short = false) {
  // The short form is scored against tradition FAMILIES; the long form against
  // individual traditions. Both are just arrays of things carrying a `.vector`, so the
  // engine is identical and only the reference set changes.
  const REF = short ? FAMILY_VECTORS : ANCHORS;
  const activeIds = short ? SHORT_IDS : null;
  const noun = short ? 'families' : 'traditions';

  const scores = axisScores(responses, stars, activeIds);
  const mix = admixture(responses, REF, short ? { prefilterK: REF.length } : {});
  const neighbours = nearestNeighbours(responses, REF);
  const findings = coherenceFindings(responses, stars);
  const bias = acquiescenceBias(responses);
  const abstain = abstentionRate(responses, activeIds);
  const top = mix.weights[0]?.anchor ?? neighbours[0]?.anchor;
  const odd = top ? mostUnusual(responses, top, ITEMS) : null;

  const html = [];

  // ---- 1. Values --------------------------------------------------------------
  html.push(`<div class="narrow"><h1>Your result</h1></div>
  <section class="section"><h2>Values</h2>
    <p class="small narrow">Five axes, scored from &minus;100 to +100.</p>
    ${LAYER(1).map((a) => axisRow(a, scores[a.id])).join('')}</section>`);

  // ---- 2. The verdict ---------------------------------------------------------
  if (top) {
    const share = mix.weights[0]?.weight;
    const f = top.figure;
    html.push(`<section class="verdict">
      <div class="label verdict-kicker">${short ? 'Your nearest family of traditions' : 'Your nearest tradition'}</div>
      <div class="verdict-body">
        <div class="verdict-plate">
          ${figurePlate(f, top.portrait)}
          ${f?.name ? `<div class="verdict-figure"><b>${esc(f.name)}</b>${f.dates ? `<br><span class="era">${esc(f.dates)}</span>` : ''}</div>` : ''}
        </div>
        <div class="verdict-text">
          <h2>${esc(top.name)}</h2>
          <div class="era verdict-meta">${short ? `${top.members.length} traditions` : esc(top.era)}${
            share ? ` &nbsp;·&nbsp; <span class="num">${pct(share)}</span> of your answer pattern` : ''
          }</div>
          <p>${esc(top.glossary)}</p>
          ${short && top.memberNames ? `<p class="small verdict-members"><b>Contains:</b> ${top.memberNames.map(esc).join(' · ')}</p>` : ''}
          ${
            f?.quote
              ? `<blockquote>${esc(f.quote)}<cite>${esc(f.name)}${f.quoteSource ? `, <i>${esc(f.quoteSource)}</i>` : ''}</cite></blockquote>`
              : ''
          }
          <p class="small verdict-caveat">This is a <i>mixture coefficient</i>: the share
          of your answer pattern which matches this tradition's (compared to others') characteristic
          pattern. This isn't exactly a statement on how much you agree with it, or what you are. You may share a tradition's reasoning and reject its
          conclusions entirely.</p>
        </div>
      </div>
    </section>`);
  }

  // ---- 3. Temperament ---------------------------------------------------------
  html.push(`<section class="section"><h2>Temperament</h2>
    <p class="small narrow">Not what you believe, although how you would pursue it. This is a
    separate thing because these dispositions cut across the value axes. You can be a
    revolutionary anything.</p>
    ${LAYER(2).map((a) => axisRow(a, scores[a.id])).join('')}
    ${LAYER(3).map((a) => axisRow(a, scores[a.id])).join('')}</section>`);

  // ---- 4. Admixture -----------------------------------------------------------
  if (mix.insufficient) {
    html.push(`<section class="section"><h2>Admixture</h2>
      <p>Too few items answered to fit a mixture.</p></section>`);
  } else {
    html.push(`<section class="section"><h2>Admixture</h2>
      ${admixtureStack(mix.weights, mix.other)}
      <div class="table-scroll"><table>
        <thead><tr><th>Tradition</th><th>Era</th><th class="num">Share</th></tr></thead>
        <tbody>${mix.weights
          .map(
            (w, i) => `<tr>
              <td><span class="swatch" style="background:${swatchFor(i)}"></span>${esc(w.anchor.name)}</td>
              <td class="era">${short ? `${w.anchor.members.length} traditions` : esc(w.anchor.era)}</td>
              <td class="num">${pct(w.weight)}</td></tr>`
          )
          .join('')}
        ${mix.other > 0 ? `<tr><td><span class="swatch" style="background:#cfc5b4"></span>Other ${noun}, each below 3%</td><td class="era">—</td><td class="num">${pct(mix.other)}</td></tr>` : ''}
        </tbody></table></div>
      <p class="small">Fit: ${pct(mix.fit)} of the variation in your answers is explained
      by this mixture, relative to a flat average of the candidate traditions. A low fit
      means you do not sit neatly inside any combination of them.</p>
    </section>`);
  }

  // ---- 5. Nearest neighbours --------------------------------------------------
  html.push(`<section class="section"><h2>Nearest ${noun}</h2>
    <p class="small narrow">Every ${short ? 'family' : 'anchor'} in the instrument, ranked by
    similarity to your answer pattern.</p>
    <div class="table-scroll"><table>
      <thead><tr><th class="num">#</th><th>Tradition</th><th>Era</th><th class="num">Similarity</th></tr></thead>
      <tbody>${neighbours
        .map(
          (n, i) => `<tr>
            <td class="num">${i + 1}</td>
            <td>${esc(n.anchor.name)}</td>
            <td class="era">${short ? `${n.anchor.members.length} traditions` : esc(n.anchor.era)}</td>
            <td class="num">${n.similarity >= 0 ? '+' : ''}${n.similarity.toFixed(2)}</td></tr>`
        )
        .join('')}</tbody></table></div></section>`);

  // ---- 6. Most unusual --------------------------------------------------------
  if (odd) {
    html.push(`<section class="section"><h2>Your most unusual commitment</h2>
      <p class="narrow">Relative to <b>${esc(top.name)}</b>, the tradition you most
      resemble, this is where you diverge furthest:</p>
      <div class="finding"><div class="tension">“${esc(odd.item.text)}”</div>
      <p class="small">You answered ${odd.theirs > 0 ? '+' : ''}${odd.theirs};
      that tradition would answer ${odd.anchors > 0 ? '+' : ''}${odd.anchors}.</p></div>
    </section>`);
  }

  // ---- 7. Tensions ------------------------------------------------------------
  html.push(`<section class="section"><h2>Tensions</h2>
    <p class="small narrow">Commitments you hold that don't complement eachother. These aren't
    necessarily errors, but it's worth thinking about. Some of the best political thinkers believe in tensions deliberately.</p>
    ${
      findings.length
        ? findings
            .slice(0, 5)
            .map(
              (f) => `<div class="finding">
                ${f.starred ? '<div class="flag">Involves a non-negotiable</div>' : ''}
                <div class="tension">${esc(f.dyad.tension)}</div>
                <div class="question">${esc(f.dyad.question)}</div></div>`
            )
            .join('')
        : '<p class="narrow">No authored tension fired on your answers. That is not a certificate of coherence — it means none of the specific pairs this instrument tests for came up.</p>'
    }</section>`);

  // ---- 8. Response character --------------------------------------------------
  html.push(`<section class="section"><h2>How you answered</h2>
    <div class="table-scroll"><table><tbody>
      <tr><td>Acquiescence</td><td class="num">${bias >= 0 ? '+' : ''}${bias.toFixed(2)}</td>
        <td class="small">${
          Math.abs(bias) < 0.15
            ? 'No meaningful tendency to agree or disagree with statements as presented. No correction was needed.'
            : bias > 0
              ? 'You tended to agree with statements as presented, including with both halves of opposed pairs. Your scores were corrected downward for this.'
              : 'You tended to disagree with statements as presented. Your scores were corrected upward for this.'
        }</td></tr>
      <tr><td>Abstention</td><td class="num">${pct(abstain)}</td>
        <td class="small">Items you declined. These were excluded rather than scored as neutral.</td></tr>
    </tbody></table></div></section>`);

  // ---- 9. Glossary ------------------------------------------------------------
  const named = [...new Set([...mix.weights.map((w) => w.anchor), ...neighbours.slice(0, 5).map((n) => n.anchor)])];
  if (short) {
    html.push(`<section class="section"><h2>Go further</h2>
      <p class="narrow">This was the short form: 36 statements, placing you among 16
      families. The long form asks all 95 and places you among <b>63 individual
      traditions</b>. It's the difference between "Anarchism" and knowing whether you are
      nearer Proudhon, Bakunin, or Kropotkin.</p>
      <p style="margin-top:var(--s5)"><a class="btn" href="quiz.html" style="text-decoration:none">Take the long form →</a></p>
    </section>`);
  }

  html.push(`<section class="section"><h2>What these ${noun} hold</h2>
    <dl class="glossary">${named
      .map((a) => `<dt>${esc(a.name)} <span class="era">· ${short ? `${a.members.length} traditions` : esc(a.era)}</span></dt><dd>${esc(a.glossary)}${short && a.memberNames ? `<div class="small" style="margin-top:var(--s2)">${a.memberNames.map(esc).join(' · ')}</div>` : ''}</dd>`)
      .join('')}</dl></section>`);

  // ---- 10. Share --------------------------------------------------------------
  html.push(`<section class="section"><h2>Keep or share this</h2>
    <p class="small narrow">Your entire result is encoded in the link below. Anyone opening
    the link gets the same result in theirs.</p>
    <div class="share">
      <input id="share-url" readonly value="${esc(location.href)}">
      <button class="btn btn-ghost" id="copy">Copy link</button>
      <a class="btn btn-ghost" href="quiz.html">Retake</a>
    </div></section>`);

  $('#out').innerHTML = html.join('');

  $('#copy')?.addEventListener('click', async () => {
    const btn = $('#copy');
    try {
      await navigator.clipboard.writeText(location.href);
      btn.textContent = 'Copied';
    } catch {
      $('#share-url').select();
      btn.textContent = 'Press Ctrl+C';
    }
    setTimeout(() => (btn.textContent = 'Copy link'), 2000);
  });
}
