import test from 'node:test';
import assert from 'node:assert/strict';
import { isMahjongGameData } from '../utils/validateGameData.ts';
import { parseGameTimeline } from '../utils/gameTimeline.ts';
const valid = () => ({ rivers: [{ area: 'BTM', tiles: ['東', '白'] }], melds: [], dora: ['一萬'], hand: ['赤五萬'] });

test('documented minimal snapshot is accepted without detector metadata', () => {
  assert.equal(isMahjongGameData(valid()), true);
  const steps = parseGameTimeline(valid());
  assert.equal(steps.length, 3);
  assert.deepEqual(steps.at(-1).rivers.BTM, ['東', '白']);
});
test('invalid roots and collections are rejected before timeline/render access', () => {
  for (const input of [null, [], {}, 'text', { ...valid(), rivers: {} }, { ...valid(), melds: true }, { ...valid(), hand: null }, { ...valid(), dora: [null] }, { ...valid(), hand: [42] }]) {
    assert.equal(isMahjongGameData(input), false);
    assert.throws(() => parseGameTimeline(input), /Invalid game data structure/);
  }
});
test('invalid, null, and duplicate areas are rejected instead of overwriting rivers', () => {
  for (const rivers of [[null], [{ area: '__proto__', tiles: [] }], [{ area: 'BTM', tiles: [] }, { area: 'BTM', tiles: ['東'] }], [{ area: 'BTM', tiles: '東' }]]) {
    assert.equal(isMahjongGameData({ ...valid(), rivers }), false);
  }
});
test('timeline size is bounded across all areas', () => {
  assert.equal(isMahjongGameData({ ...valid(), rivers: [{ area: 'BTM', tiles: Array(136).fill('東') }] }), true);
  assert.equal(isMahjongGameData({ ...valid(), rivers: [{ area: 'BTM', tiles: Array(100).fill('東') }, { area: 'RT', tiles: Array(100).fill('東') }] }), false);
});
test('empty snapshots produce a single playable snapshot', () => {
  assert.equal(parseGameTimeline({ rivers: [], melds: [], dora: [], hand: [] }).length, 1);
});
