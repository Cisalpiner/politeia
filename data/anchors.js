// POLITEIA — anchor/ideology index (61 traditions)
//
// Anchors are split across data/anchors/*.js by era, purely so that each file stays
// small enough to be read and argued with. This file assembles them, validates them
// against the item bank, and derives the dense vectors the engine consumes.
//
// PROFILING RULES (docs/METHOD.md §5):
//   1. Anchors are profiled FROM INSIDE. The question is always "how would a committed,
//      intelligent adherent answer this," never "how would a critic characterise them."
//   2. Where a tradition genuinely contains internal disagreement on an item, the value
//      is 0 and the disagreement is noted. Fake precision is worse than abstention.
//   3. `sources` cite the tradition's own canonical statements, not summaries.
//
// The anchor matrix is the largest bias surface in this project — far larger than item
// wording, and far less visible, because nobody audits a number in a data file the way
// they audit a sentence they can read. Recovery testing (tools/recovery.mjs) is what
// catches errors here.

import { ITEMS, ITEM_IDS } from './items.js';
import { CLASSICAL } from './anchors/classical.js';
import { EARLY_MODERN } from './anchors/early-modern.js';
import { REVOLUTIONARY } from './anchors/revolutionary.js';
import { NINETEENTH_LIBERAL } from './anchors/nineteenth-liberal.js';
import { NINETEENTH_RADICAL } from './anchors/nineteenth-radical.js';
import { TWENTIETH_A } from './anchors/twentieth-a.js';
import { TWENTIETH_B } from './anchors/twentieth-b.js';
import { CONTEMPORARY } from './anchors/contemporary.js';
import { EXPANSION } from './anchors/expansion.js';

const BASE = [
  ...CLASSICAL,
  ...EARLY_MODERN,
  ...REVOLUTIONARY,
  ...NINETEENTH_LIBERAL,
  ...NINETEENTH_RADICAL,
  ...TWENTIETH_A,
  ...TWENTIETH_B,
  ...CONTEMPORARY,
];

/**
 * Resolve derived anchors: a parent plus the items on which the doctrine departs from
 * it. Derivation is declarative on purpose — "Trotskyism is Leninism except on permanent
 * revolution, national particularism, and the bureaucracy" is a checkable claim, where
 * a hundred loose integers would be an unauditable wall.
 *
 * Bases must be fully profiled and must themselves be non-derived, so the roster stays
 * one level deep and no anchor can inherit an error through a chain.
 */
const BY_ID = Object.fromEntries(BASE.map((a) => [a.id, a]));
const DERIVED = EXPANSION.map((e) => {
  const base = BY_ID[e.basedOn];
  if (!base) throw new Error(`anchors: ${e.id} derives from unknown or itself-derived anchor "${e.basedOn}"`);
  const { basedOn, d, ...rest } = e;
  for (const id of Object.keys(d)) {
    if (!(id in base.p)) throw new Error(`anchors: ${e.id} overrides "${id}", which its base ${basedOn} does not profile`);
  }
  return { ...rest, derivedFrom: basedOn, overrides: Object.keys(d).length, p: { ...base.p, ...d } };
});

const RAW = [...BASE, ...DERIVED];

const known = new Set(ITEM_IDS);
const seen = new Set();

export const ANCHORS = RAW.map((a) => {
  if (seen.has(a.id)) throw new Error(`anchors: duplicate anchor id "${a.id}"`);
  seen.add(a.id);

  // An unknown item id is always a mistake — a typo, or an item that was retired while
  // a profile still refers to it. Fail loudly; a silently ignored key would quietly
  // degrade this anchor's placement forever.
  for (const id of Object.keys(a.p)) {
    if (!known.has(id)) throw new Error(`anchors: ${a.id} profiles unknown item "${id}"`);
  }

  // A MISSING item is not an error. Appending an item to the bank leaves every existing
  // profile silent about it, and silence is treated as abstention until someone fills it
  // in. tools/audit.mjs reports exactly which anchors are missing which items.
  const missing = ITEM_IDS.filter((id) => !(id in a.p));

  return {
    ...a,
    missing,
    /** Dense vector aligned to ITEMS order; unprofiled items score 0. */
    vector: ITEMS.map((it) => a.p[it.id] ?? 0),
    /** Indices this anchor has an actual opinion about. */
    specified: ITEMS.map((it, n) => (it.id in a.p ? n : -1)).filter((n) => n >= 0),
  };
});

export const ANCHOR_BY_ID = Object.fromEntries(ANCHORS.map((a) => [a.id, a]));
export const ERAS = [...new Set(ANCHORS.map((a) => a.era))];
