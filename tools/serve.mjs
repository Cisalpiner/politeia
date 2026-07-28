// POLITEIA — minimal static server for local development.
//
// ES modules require an http origin; opening the files directly with file:// will not
// work. This exists only so you can look at the thing locally. It is not deployed —
// GitHub Pages serves the same files with no server code of ours involved.
//
//   node tools/serve.mjs [port]

import { createServer } from 'node:http';
import { readFile, writeFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = normalize(join(fileURLToPath(import.meta.url), '..', '..'));
const PORT = Number(process.argv[2] ?? 8017);

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.md': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
};

// Dev-only write endpoint used by tools/og-card.html to save the rasterised link
// preview. Deliberately narrow: one hard-coded destination, POST only, no path taken
// from the request at all. This server is never deployed — GitHub Pages serves the
// static files with no code of ours running.
const WRITABLE = 'og-card.png';

createServer(async (req, res) => {
  const url = decodeURIComponent((req.url ?? '/').split('?')[0]);

  if (req.method === 'POST' && url === '/_write/og-card.png') {
    const chunks = [];
    for await (const c of req) chunks.push(c);
    const png = Buffer.from(Buffer.concat(chunks).toString('utf8'), 'base64');
    if (png.subarray(0, 8).toString('hex') !== '89504e470d0a1a0a') {
      res.writeHead(400).end('not a PNG');
      return;
    }
    await writeFile(join(ROOT, WRITABLE), png);
    res.writeHead(200, { 'content-type': 'text/plain' }).end(`wrote ${WRITABLE} (${png.length} bytes)`);
    return;
  }

  const rel = url === '/' ? 'index.html' : url.replace(/^\/+/, '');
  const path = normalize(join(ROOT, rel));

  if (!path.startsWith(ROOT)) {
    res.writeHead(403).end('forbidden');
    return;
  }
  try {
    const body = await readFile(path);
    res.writeHead(200, {
      'content-type': TYPES[extname(path)] ?? 'application/octet-stream',
      'cache-control': 'no-store',
    });
    res.end(body);
  } catch {
    res.writeHead(404, { 'content-type': 'text/plain' }).end('not found');
  }
}).listen(PORT, () => console.log(`politeia → http://localhost:${PORT}`));
