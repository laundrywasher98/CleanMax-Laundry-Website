import { readFileSync, readdirSync, statSync } from 'fs';
import { join, sep } from 'path';

function walk(dir, out = []) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    const s = statSync(p);
    if (s.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

const pages = walk('app').filter((f) => f.endsWith('page.tsx'));

function fileToRoute(f) {
  let r = f.replace(/^app[\\/]/, '').replace(/[\\/]page\.tsx$/, '');
  r = r.replace(/\([^)]+\)[\\/]?/g, '');
  r = r.split(sep).join('/');
  return '/' + r;
}

const routes = [...new Set(pages.map(fileToRoute).map((r) => (r === '/' ? '/' : r)))];

const citiesSrc = readFileSync('data/cities.ts', 'utf8');
const cities = [...citiesSrc.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
let industries = [];
try {
  const s = readFileSync('data/industries.ts', 'utf8');
  industries = [...s.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
} catch {}
let blogSlugs = [];
try {
  const s = readFileSync('data/blogPosts.ts', 'utf8');
  blogSlugs = [...s.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
} catch {}

console.log('--- Route templates ---');
for (const r of routes.sort()) console.log(r);
console.log('\nCities:', cities.length, 'Industries:', industries.length, 'Blog:', blogSlugs.length);

const valid = new Set();
for (const r of routes) {
  if (!r.includes('[')) {
    valid.add(r);
    continue;
  }
  if (r.includes('[city]') && !r.includes('[...')) {
    for (const c of cities) valid.add(r.replace('[city]', c));
    continue;
  }
  if (r.includes('[slug]') && r.includes('/blog/')) {
    for (const sl of blogSlugs) valid.add(r.replace('[slug]', sl));
    continue;
  }
  if (r.includes('[...slug]') && r.includes('/commercial-laundry/')) {
    for (const i of industries) {
      valid.add(r.replace('/[...slug]', '/' + i));
      for (const c of cities) valid.add(r.replace('/[...slug]', '/' + i + '/' + c));
    }
    continue;
  }
}

const codeFiles = walk('components')
  .concat(walk('app'))
  .filter((f) => f.endsWith('.tsx') || f.endsWith('.ts'));
const hrefRE = /href\s*=\s*["'](\/[^"'#?]*)["']/g;
const hrefs = new Set();
for (const f of codeFiles) {
  const src = readFileSync(f, 'utf8');
  let m;
  while ((m = hrefRE.exec(src)) !== null) hrefs.add(m[1]);
}

console.log('\n--- Unique internal hrefs:', hrefs.size, '---');
const broken = [];
const sorted = [...hrefs].sort();
for (const h of sorted) {
  const norm = h === '/' ? '/' : h.replace(/\/$/, '');
  const ok =
    valid.has(norm) ||
    valid.has(norm + '/') ||
    // /es prefix also valid if the non-prefixed form is valid
    (norm.startsWith('/es/') && valid.has(norm.slice(3)));
  if (!ok) broken.push(h);
  console.log((ok ? 'OK ' : 'XX ') + h);
}
console.log('\nBroken internal hrefs:', broken.length);
for (const b of broken) console.log('  ' + b);
