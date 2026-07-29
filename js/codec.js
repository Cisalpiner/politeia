// POLITEIA — result encoding
//
// A completed instrument packs into a short base64url string carried in the URL
// FRAGMENT (after the #). Fragments are never transmitted to the server — the recipient
// of a shared link recomputes the entire result in their own browser. This is how
// sharing, group comparison, and drift tracking all work with no backend and no data
// collection of any kind.
//
// Layout:
//   byte 0        mode: 1 = long form, 2 = short form
//   bytes 1..     responses, 3 bits each: 0 = no view, 1..5 = -2..+2
//   then          star bitmask, 1 bit per item
//
// Only the items belonging to the mode are packed, so a short result stays short:
// 36 items is ~27 characters, 116 items is 80.
//
// A DECODED SHORT RESULT IS A FULL-LENGTH VECTOR. Items outside the short subset come
// back as 'nv' — genuinely no data, which is exactly what they are. Everything
// downstream already skips 'nv', so admixture and coherence need no notion of which
// form was taken. Only the axis coverage guard does, and it is told explicitly.

import { ITEMS, ITEM_INDEX, SHORT_ITEMS } from '../data/items.js';

export const MODE_LONG = 1;
export const MODE_SHORT = 2;

const itemsFor = (mode) => (mode === MODE_SHORT ? SHORT_ITEMS : ITEMS);

function packBits(values, bitsPer) {
  const out = [];
  let acc = 0;
  let accBits = 0;
  for (const v of values) {
    acc = (acc << bitsPer) | v;
    accBits += bitsPer;
    while (accBits >= 8) {
      accBits -= 8;
      out.push((acc >> accBits) & 0xff);
    }
  }
  if (accBits > 0) out.push((acc << (8 - accBits)) & 0xff);
  return out;
}

function unpackBits(bytes, bitsPer, count) {
  const out = [];
  let acc = 0;
  let accBits = 0;
  let p = 0;
  while (out.length < count) {
    while (accBits < bitsPer) {
      acc = (acc << 8) | (bytes[p++] ?? 0);
      accBits += 8;
    }
    accBits -= bitsPer;
    out.push((acc >> accBits) & ((1 << bitsPer) - 1));
    acc &= (1 << accBits) - 1;
  }
  return out;
}

const b64url = {
  encode(bytes) {
    let s = '';
    for (const b of bytes) s += String.fromCharCode(b);
    return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  },
  decode(str) {
    const pad = str.replace(/-/g, '+').replace(/_/g, '/');
    const bin = atob(pad + '='.repeat((4 - (pad.length % 4)) % 4));
    return Array.from(bin, (c) => c.charCodeAt(0));
  },
};

/**
 * @param responses full-length array aligned to ITEMS ('nv' or -2..2)
 * @param stars     Set of item ids
 * @param mode      MODE_LONG or MODE_SHORT
 */
export function encode(responses, stars = new Set(), mode = MODE_LONG) {
  const items = itemsFor(mode);
  const codes = items.map((it) => {
    const r = responses[ITEM_INDEX[it.id]];
    return typeof r === 'number' ? r + 3 : 0;
  });
  const starBits = items.map((it) => (stars.has(it.id) ? 1 : 0));
  return b64url.encode([mode, ...packBits(codes, 3), ...packBits(starBits, 1)]);
}

export function decode(str) {
  const bytes = b64url.decode(str);
  const mode = bytes[0];
  if (mode !== MODE_LONG && mode !== MODE_SHORT) {
    throw new Error(`codec: unsupported mode ${mode}`);
  }
  const items = itemsFor(mode);
  const n = items.length;
  const respBytes = Math.ceil((n * 3) / 8);
  const codes = unpackBits(bytes.slice(1, 1 + respBytes), 3, n);
  const starVals = unpackBits(bytes.slice(1 + respBytes), 1, n);

  // Full-length vector; anything outside this mode's subset is genuinely no data.
  const responses = ITEMS.map(() => 'nv');
  const stars = new Set();
  items.forEach((it, i) => {
    if (codes[i] !== 0) responses[ITEM_INDEX[it.id]] = codes[i] - 3;
    if (starVals[i] === 1) stars.add(it.id);
  });

  return { responses, stars, mode, short: mode === MODE_SHORT };
}

export function readFragment(hash = location.hash) {
  const m = /[#&]r=([A-Za-z0-9_-]+)/.exec(hash);
  if (!m) return null;
  try {
    return decode(m[1]);
  } catch {
    return null;
  }
}
