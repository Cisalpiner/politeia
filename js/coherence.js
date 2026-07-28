// POLITEIA — coherence detection
//
// Evaluates authored dyads against a response vector and returns the tensions that
// fired, ranked by severity.
//
// Contradictions do not fall out of Likert data by accident. They have to be authored
// in. This module only evaluates; the interesting work is in data/dyads.js.

import { DYADS } from '../data/dyads.js';
import { ITEM_INDEX } from '../data/items.js';

const OPS = {
  '>=': (a, b) => a >= b,
  '<=': (a, b) => a <= b,
  '>': (a, b) => a > b,
  '<': (a, b) => a < b,
  '==': (a, b) => a === b,
};

function testClause(value, clause) {
  const m = /^(>=|<=|==|>|<)\s*(-?\d+)$/.exec(clause.trim());
  if (!m) throw new Error(`coherence.js: unparseable rule clause "${clause}"`);
  return OPS[m[1]](value, Number(m[2]));
}

/**
 * @param responses array aligned to ITEMS ('nv' or null count as not-firing)
 * @param stars     Set of starred item ids
 * @returns findings sorted by severity, most severe first
 */
export function coherenceFindings(responses, stars = new Set()) {
  const found = [];

  for (const dyad of DYADS) {
    let fires = true;
    let severity = 0;
    let starred = false;

    for (const [itemId, clause] of Object.entries(dyad.rule)) {
      const n = ITEM_INDEX[itemId];
      if (n === undefined) throw new Error(`coherence.js: dyad ${dyad.id} names unknown item ${itemId}`);
      const v = responses[n];
      if (typeof v !== 'number' || !testClause(v, clause)) {
        fires = false;
        break;
      }
      severity += Math.abs(v);
      if (stars.has(itemId)) starred = true;
    }

    if (!fires) continue;

    // A tension between two things the respondent will not trade away is a genuinely
    // serious finding. A tension between two mild agreements is not.
    found.push({ dyad, severity: starred ? severity * 2 : severity, starred });
  }

  return found.sort((a, b) => b.severity - a.severity);
}

/** Dyad region balance, for the neutrality audit. */
export function dyadRegionCounts() {
  const counts = {};
  for (const d of DYADS) counts[d.region] = (counts[d.region] ?? 0) + 1;
  return counts;
}
