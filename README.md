# Politeia

*πολιτεία — regime, constitution, citizenship.*

An instrument for locating yourself in the Western political tradition.

**Status: 0.5.0.** Two forms from one item bank: a **long form** (116 items, 91 individual traditions) and a **short form** (36 items, 16 tradition families). 17 dyads.
See [`docs/METHOD.md`](docs/METHOD.md) for the
public methodology: axes, arithmetic, and every neutrality check with its pass criterion.

---

## What it does differently

Every comparable instrument — Political Compass, 8values, SapplyValues, 9axes — shares
three design decisions, and those decisions are where the failure lives: Likert
agreement on isolated propositions, axes declared by the author and then filled with
items written to match, and a coordinate as output. Politeia keeps a familiar input
surface, deliberately, and puts the innovation in scoring and presentation.

- **A tension report.** Authored dyads detect commitments that pull against each other
  and put them back to you Socratically. There is no consistency score.
- **Admixture, not a dot.** You are expressed as a mixture of traditions via constrained
  non-negative least squares, the way population genetics expresses ancestry.
- **Acquiescence correction.** Yea-saying is measured from hidden opposed pairs and
  subtracted before anything is scored.
- **"No view" ≠ "Neutral."** Treated as missing data, not as a zero.

## Running it

```bash
node tools/serve.mjs
```

Then open <http://localhost:8017>. ES modules need an http origin, so opening the files
directly with `file://` will not work. There is no build step and no dependencies — the
server exists only for local development. GitHub Pages serves the same files as-is.

## Tests

```bash
npm test
```

- `tools/audit.mjs` — neutrality and integrity checks, all with numeric pass criteria
- `tools/recovery.mjs` — every anchor's own profile must return that anchor as its top
  match. The strongest single check in the suite.
- `tools/smoke.mjs` — engine correctness

## Layout

```
data/       axes, items, anchors, dyads — plain JS data, no CMS
js/         scoring · admixture · coherence · codec · chart · flow
css/        design tokens
tools/      audit · recovery · smoke · dev server
docs/       METHOD.md — publish this
```

Items and anchors live in version control rather than a CMS on purpose. They need diffs,
review, and the audit suite; a CMS would let a future officer silently break the
instrument's balance.

## Privacy

Nothing leaves the browser. No server, no accounts, no analytics, no third-party
requests — not even for fonts. Results are encoded into the URL fragment, which browsers
never transmit, so a shared link is recomputed on the recipient's machine.

## Scope

The Western tradition only, from classical antiquity to the present. Positions are
included on the strength of their influence, not their respectability, and each is
stated as its own adherents would state it.

## Publishing

GitHub Pages project site. Push the repository, enable Pages from the default branch
root, and it serves as-is — there is no build step and no Actions workflow.

Published at <https://cisalpiner.github.io/politeia/>. If the repository is ever renamed,
update the canonical and `og:` URLs in the HTML and the absolute paths in `404.html` —
Pages serves 404s from the site root, so those cannot be relative.

`og-card.png` is the link-preview image, generated from `docs/og-card.svg`. To
regenerate after editing the SVG: run the dev server, open
<http://localhost:8017/tools/og-card.html>, and click the button. The browser is the
rasteriser — crawlers do not render SVG, and there is no build step to hook into.

## Licence

Two licences, by directory. **MIT** for `js/`, `tools/`, `css/`, and the root HTML.
**CC BY-SA 4.0** for `data/` and `docs/` — the item bank, anchor matrix, and
methodology. See [LICENSE](LICENSE) for why the split exists.
