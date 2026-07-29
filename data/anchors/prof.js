// POLITEIA — profile notation
//
// Anchor profiles are KEYED BY ITEM ID, not positional. This is what makes the item
// bank expandable: appending an item cannot silently shift every profile in the corpus.
// A profile that lacks a value for an item is treated as an abstention for that anchor,
// and `tools/audit.mjs` reports exactly which anchors are missing which items.
//
// Written as whitespace-separated `id:value` tokens purely for density — 71 object keys
// per anchor across 63 anchors would be unreadable, and unreadable data does not get
// checked by anyone.

export function prof(source) {
  const out = {};
  for (const tok of source.trim().split(/\s+/)) {
    const i = tok.indexOf(':');
    if (i < 0) throw new Error(`prof: malformed token "${tok}"`);
    const id = tok.slice(0, i);
    const v = Number(tok.slice(i + 1));
    if (!Number.isInteger(v) || v < -2 || v > 2) {
      throw new Error(`prof: ${id} has value "${tok.slice(i + 1)}", expected an integer in -2..+2`);
    }
    if (id in out) throw new Error(`prof: duplicate entry for ${id}`);
    out[id] = v;
  }
  return out;
}
