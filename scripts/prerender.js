/* eslint-disable no-console */
// Post-build prerender: writes one standalone HTML file per route
// (build/<route>/index.html) with its own <title>, description, canonical,
// Open Graph tags, JSON-LD breadcrumbs and a crawlable content snapshot,
// plus sitemap.xml and robots.txt.
//
// Dependency-free on purpose. It must never break a deploy: on any error the
// regular SPA build in build/index.html is left untouched and the script exits 0.
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'src');
const BUILD = path.join(ROOT, 'build');

// ---- tiny ESM -> CJS loader for the plain-data modules in src/ -------------
const cache = {};
function compile(source, file) {
  const names = [];
  let code = source
    .replace(/^import\s+\{([^}]+)\}\s+from\s+['"]([^'"]+)['"];?/gm, (_, specs, from) => {
      const mapped = specs.split(',').map((s) => s.trim()).filter(Boolean)
        .map((s) => s.replace(/\s+as\s+/, ': ')).join(', ');
      return `const { ${mapped} } = require('${from}');`;
    })
    .replace(/^export\s+(const|let|var)\s+([A-Za-z_$][\w$]*)/gm, (_, kw, n) => { names.push(n); return `${kw} ${n}`; })
    .replace(/^export\s+function\s+([A-Za-z_$][\w$]*)/gm, (_, n) => { names.push(n); return `function ${n}`; });
  if (/^\s*(import|export)\s/m.test(code)) {
    throw new Error(`Unsupported import/export syntax in ${file}`);
  }
  return code + `\n;Object.assign(exports, { ${names.join(', ')} });\n`;
}
function load(file) {
  if (cache[file]) return cache[file].exports;
  const mod = { exports: {} };
  cache[file] = mod;
  const fn = new Function('require', 'exports', 'module', compile(fs.readFileSync(file, 'utf8'), file));
  const localRequire = (spec) => {
    if (!spec.startsWith('.')) return require(spec);
    const base = path.resolve(path.dirname(file), spec);
    const resolved = [base, base + '.js'].find((f) => fs.existsSync(f) && fs.statSync(f).isFile());
    if (!resolved) throw new Error(`Cannot resolve ${spec} from ${file}`);
    return load(resolved);
  };
  fn(localRequire, mod.exports, mod);
  return mod.exports;
}

// ---- helpers ----------------------------------------------------------------
const esc = (s) => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function siteUrl() {
  let u = process.env.SITE_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL || '';
  if (!u) return '';
  if (!/^https?:\/\//.test(u)) u = 'https://' + u;
  return u.replace(/\/+$/, '');
}

function snapshot(meta) {
  const crumbs = meta.crumbs.length
    ? `<nav aria-label="Breadcrumb" style="font-size:13px;margin-bottom:24px"><a href="/">Home</a>${meta.crumbs
        .map((c, i) => (i === meta.crumbs.length - 1 ? ` / <span>${esc(c.label)}</span>` : ` / <a href="${esc(c.path)}">${esc(c.label)}</a>`))
        .join('')}</nav>`
    : '';
  const links = meta.links.length
    ? `<h2 style="font-size:20px;margin:32px 0 12px">Explore</h2><ul style="columns:2;padding-left:18px;line-height:1.9">${meta.links
        .map((l) => `<li><a href="${esc(l.path)}">${esc(l.label)}</a></li>`).join('')}</ul>`
    : '';
  // Replaced by React on first render (createRoot), so visitors only see it for a split second.
  return `<div data-prerender="1" style="background:#f4f1ea;min-height:100vh;padding:120px 24px 80px;font-family:Inter,Arial,sans-serif;color:#101820"><main style="max-width:960px;margin:0 auto">${crumbs}<h1 style="font-family:'Cormorant Garamond',Georgia,serif;font-weight:500;font-size:44px;line-height:1.1;margin:0 0 20px">${esc(meta.h1)}</h1><p style="font-size:17px;line-height:1.65;max-width:720px">${esc(meta.lead)}</p>${links}</main></div>`;
}

function render(template, meta, base) {
  const url = base ? base + (meta.path === '/' ? '/' : meta.path) : '';
  const ld = [];
  if (meta.crumbs.length && base) {
    ld.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [{ label: 'Home', path: '/' }, ...meta.crumbs].map((c, i) => ({
        '@type': 'ListItem', position: i + 1, name: c.label, item: base + (c.path === '/' ? '/' : c.path),
      })),
    });
  }
  if (meta.kind === 'home') {
    ld.push({ '@context': 'https://schema.org', '@type': 'Organization', name: 'NK&CO', url: base || undefined });
  }
  const head = [
    url && `<link rel="canonical" href="${esc(url)}" />`,
    '<meta name="robots" content="index, follow" />',
    '<meta property="og:site_name" content="NK&amp;CO" />',
    `<meta property="og:type" content="${meta.kind === 'episode' ? 'article' : 'website'}" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    url && `<meta property="og:url" content="${esc(url)}" />`,
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${esc(meta.title)}" />`,
    `<meta name="twitter:description" content="${esc(meta.description)}" />`,
    ...ld.map((o) => `<script type="application/ld+json">${JSON.stringify(o).replace(/</g, '\\u003c')}</script>`),
  ].filter(Boolean).join('\n    ');

  let html = template
    .replace(/<title>[\s\S]*?<\/title>/, () => `<title>${esc(meta.title)}</title>`)
    .replace(/<meta\s+name="description"[^>]*>/, () => `<meta name="description" content="${esc(meta.description)}" />`)
    .replace('</head>', () => `    ${head}\n  </head>`)
    .replace('<div id="root"></div>', () => `<div id="root">${snapshot(meta)}</div>`);
  if (!html.includes('data-prerender')) throw new Error('Could not locate <div id="root"></div> in build/index.html');
  return html;
}

// ---- main -------------------------------------------------------------------
function main() {
  const indexFile = path.join(BUILD, 'index.html');
  if (!fs.existsSync(indexFile)) { console.warn('[prerender] build/index.html not found, skipping'); return; }
  const template = fs.readFileSync(indexFile, 'utf8');
  const base = siteUrl();
  if (!base) console.warn('[prerender] No SITE_URL set: canonical URLs and sitemap will be skipped.');

  const { getAllRoutes, getRouteMeta } = load(path.join(SRC, 'lib', 'routeMeta.js'));
  const routes = getAllRoutes();
  const today = new Date().toISOString().slice(0, 10);
  const sitemap = [];
  let written = 0;

  routes.forEach((route) => {
    const meta = getRouteMeta(route);
    if (!meta) { console.warn(`[prerender] no metadata for ${route}, skipped`); return; }
    const html = render(template, meta, base);
    const out = route === '/' ? indexFile : path.join(BUILD, route.replace(/^\//, ''), 'index.html');
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, html);
    written += 1;
    sitemap.push({ loc: base + (route === '/' ? '/' : route), priority: meta.priority });
  });

  if (base) {
    const xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
      sitemap.map((u) => `  <url><loc>${esc(u.loc)}</loc><lastmod>${today}</lastmod><priority>${u.priority.toFixed(1)}</priority></url>`).join('\n') +
      '\n</urlset>\n';
    fs.writeFileSync(path.join(BUILD, 'sitemap.xml'), xml);
  }
  fs.writeFileSync(path.join(BUILD, 'robots.txt'), `User-agent: *\nAllow: /\n${base ? `\nSitemap: ${base}/sitemap.xml\n` : ''}`);
  console.log(`[prerender] wrote ${written} static pages${base ? ' + sitemap.xml' : ''} + robots.txt`);
}

try {
  main();
} catch (err) {
  console.warn('[prerender] failed, falling back to the plain SPA build:', err && err.message);
}
