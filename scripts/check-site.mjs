// Check the static site using Node's standard library; no dependencies are needed.
// Run from any directory: node scripts/check-site.mjs
import assert from 'node:assert/strict';
import { readFileSync, statSync } from 'node:fs';
import { resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Script, runInNewContext } from 'node:vm';

const root = fileURLToPath(new URL('../', import.meta.url));
const read = (file) => readFileSync(resolve(root, file), 'utf8');

// Compile both scripts before checking the editable content object.
for (const file of ['app.js', 'research.js']) {
  new Script(read(file), { filename: file });
}
const context = { window: {} };
runInNewContext(read('research.js'), context, { filename: 'research.js', timeout: 1000 });
const portfolio = context.window.portfolio;
assert.ok(portfolio?.profile, 'research.js must define window.portfolio.profile');
assert.ok(Array.isArray(portfolio.publications), 'publications must be an array');
assert.ok(Array.isArray(portfolio.projects), 'projects must be an array');

const ids = [...portfolio.publications, ...portfolio.projects].map((item) => item.id);
assert.ok(
  ids.every((id) => typeof id === 'string' && id.length),
  'Every work needs an id'
);
assert.equal(new Set(ids).size, ids.length, 'Publication and project ids must be unique');

// Collect media and downloads from the content, plus HTML and CSS dependencies.
const files = new Set(['index.html', 'styles.css', 'app.js', 'research.js']);
function collectAssets(value) {
  if (typeof value === 'string' && value.startsWith('assets/')) {
    files.add(value);
  } else if (value && typeof value === 'object') {
    Object.values(value).forEach(collectAssets);
  }
}
collectAssets(portfolio);

for (const file of ['index.html', 'styles.css']) {
  const pattern = /(?:src|href)="([^"#]+)"|url\(['"]?([^)'"#]+)['"]?\)/g;
  for (const match of read(file).matchAll(pattern)) {
    const url = match[1] || match[2];
    if (!/^(https?:|data:|mailto:)/.test(url)) files.add(url);
  }
}

for (const file of files) {
  const path = resolve(root, file);
  assert.ok(path.startsWith(resolve(root) + sep), `Asset is outside the website: ${file}`);
  const info = statSync(path);
  assert.ok(info.isFile() && info.size > 0, `Missing or empty website file: ${file}`);
}
assert.ok(statSync(resolve(root, '.nojekyll')).isFile(), '.nojekyll is required for Pages');

console.log(
  `Checked ${files.size} website files, ${portfolio.publications.length} publications, and ${portfolio.projects.length} projects.`
);
