// silly svg

const PALETTE = [
  '#3d5a80', '#8b3a3a', '#4a6b4a', '#7d6b3f', '#5a4a6b', '#2f6b6b',
  '#8b5a2b', '#445c3a', '#6b3a5a', '#3a4f6b', '#7a4b3a', '#4f4f4f',
];

export const swatchFor = (i) => PALETTE[i % PALETTE.length];

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/**
 * A diverging bar for one axis. Zero is the centre line; the bar runs left for the
 * negative pole and right for the positive one.
 */
export function axisBar(score) {
  const W = 640;
  const H = 22;
  const mid = W / 2;
  const half = (Math.abs(score) / 100) * (W / 2 - 1);
  const x = score >= 0 ? mid : mid - half;

  return `<svg viewBox="0 0 ${W} ${H}" width="100%" height="${H}" role="img"
      aria-label="Score ${score} out of 100" preserveAspectRatio="none">
    <rect x="0" y="${H / 2 - 3}" width="${W}" height="6" fill="#cfc5b4" opacity="0.45"/>
    <rect x="${x}" y="${H / 2 - 6}" width="${Math.max(half, 1)}" height="12" fill="#071a2d"/>
    <line x1="${mid}" y1="0" x2="${mid}" y2="${H}" stroke="#a8192e" stroke-width="1"/>
  </svg>`;
}

/**
 * Engraved plate for the figure who embodies a tradition.
 *
 * Renders `figure.portrait` if one is supplied, and otherwise a typographic plate built
 * from the figure's initials. The fallback is the DEFAULT, not a degraded state:
 *   - Every asset must be local. Fetching portraits from any CDN would hand a third
 *     party the IP address of everyone who takes the instrument, which contradicts the
 *     whole premise that nothing about a session leaves the browser.
 *   - Portraits of pre-1930 figures are public domain, but photographs of living ones
 *     are not. Plus, it's just a pain to implement.
 * To add one: drop a file in img/ and set `portrait: 'img/burke.jpg'` on the ideology/anchor.
 */
export function figurePlate(figure, portrait = null) {
  const W = 150;
  const H = 190;

  if (portrait) {
    return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img"
        aria-label="${esc(figure?.name ?? 'Portrait')}">
      <clipPath id="pl"><rect x="5" y="5" width="${W - 10}" height="${H - 10}"/></clipPath>
      <image href="${esc(portrait)}" x="5" y="5" width="${W - 10}" height="${H - 10}"
        preserveAspectRatio="xMidYMid slice" clip-path="url(#pl)"/>
      <rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" fill="none" stroke="#071a2d"/>
      <rect x="4.5" y="4.5" width="${W - 9}" height="${H - 9}" fill="none" stroke="#071a2d" stroke-width="0.5"/>
    </svg>`;
  }

  const initials = (figure?.name ?? '?')
    .replace(/^(Pope|Saint|St\.?)\s+/i, '')
    .split(/\s+/)
    .filter((w) => /^[A-Za-zÀ-ÿ]/.test(w))
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');

  // Engraved hairlines, denser toward the base, in place of a portrait.
  let rules = '';
  for (let y = 14; y < H - 12; y += 6) {
    const o = 0.05 + 0.11 * (y / H);
    rules += `<line x1="10" y1="${y}" x2="${W - 10}" y2="${y}" stroke="#071a2d" stroke-width="0.5" opacity="${o.toFixed(3)}"/>`;
  }

  return `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img"
      aria-label="${esc(figure?.name ?? 'No figure')}">
    <rect x="0" y="0" width="${W}" height="${H}" fill="#faf6eb"/>
    ${rules}
    <rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" fill="none" stroke="#071a2d"/>
    <rect x="4.5" y="4.5" width="${W - 9}" height="${H - 9}" fill="none" stroke="#071a2d" stroke-width="0.5"/>
    <text x="${W / 2}" y="${H / 2 + 16}" text-anchor="middle"
      font-family="Iowan Old Style, Palatino, Georgia, serif" font-size="52"
      fill="#071a2d" letter-spacing="2">${esc(initials)}</text>
    <line x1="${W / 2 - 20}" y1="${H / 2 + 30}" x2="${W / 2 + 20}" y2="${H / 2 + 30}"
      stroke="#a8192e" stroke-width="1.5"/>
  </svg>`;
}

/** Stacked bar for the admixture fit. */
export function admixtureStack(weights, other = 0) {
  const W = 640;
  const H = 34;
  let x = 0;
  const parts = weights
    .map((w, i) => {
      const width = w.weight * W;
      const rect = `<rect x="${x}" y="0" width="${width}" height="${H}" fill="${swatchFor(i)}">
        <title>${esc(w.anchor.name)} — ${(w.weight * 100).toFixed(1)}%</title></rect>`;
      x += width;
      return rect;
    })
    .join('');

  const rest =
    other > 0
      ? `<rect x="${x}" y="0" width="${other * W}" height="${H}" fill="#cfc5b4">
           <title>Other traditions, each below the threshold — ${(other * 100).toFixed(1)}%</title></rect>`
      : '';

  return `<svg viewBox="0 0 ${W} ${H}" width="100%" height="${H}" role="img"
      aria-label="Admixture proportions" preserveAspectRatio="none">${parts}${rest}</svg>`;
}
