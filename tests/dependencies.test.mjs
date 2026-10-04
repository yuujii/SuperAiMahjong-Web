import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { mkdtemp, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const require = createRequire(import.meta.url);
const nextRequire = createRequire(require.resolve('next/package.json'));
const postcss = nextRequire('postcss');

test('Next resolves the patched PostCSS and its plugin/process API remains compatible', async () => {
  assert.equal(nextRequire('postcss/package.json').version, '8.5.28');
  const result = await postcss([require('autoprefixer')({ overrideBrowserslist: ['ie 11'] })])
    .process('a { user-select: none }', { from: undefined });
  assert.match(result.css, /-ms-user-select/);
  assert.deepEqual(result.warnings(), []);
});

test('untrusted absolute sourceMappingURL cannot disclose an unrelated map', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'mahjong-postcss-'));
  try {
    const mapPath = join(directory, 'unrelated.map');
    const marker = 'synthetic-regression-content';
    await writeFile(mapPath, JSON.stringify({ version: 3, sources: ['unrelated.css'], names: [], mappings: '', sourcesContent: [marker] }));
    const result = await postcss([]).process(`a { color: red }\n/*# sourceMappingURL=${mapPath} */`, { map: true, from: undefined });
    assert.equal(JSON.stringify(result.map?.toJSON() ?? {}).includes(marker), false);
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});
