import test from 'node:test';
import assert from 'node:assert/strict';
import { POST } from '../app/api/upload/route.ts';
const request = body => new Request('http://localhost/api/upload', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body });
test('malformed JSON returns 400 instead of a server failure', async () => {
  assert.equal((await POST(request('{'))).status, 400);
});
test('null and truthy but invalid collections return 400', async () => {
  for (const data of [null, { rivers: {}, melds: [], dora: [], hand: [] }, { rivers: [{ area: 'BTM', tiles: [null] }], melds: [], dora: [], hand: [] }]) {
    assert.equal((await POST(request(JSON.stringify(data)))).status, 400);
  }
});
test('documented minimal data remains accepted', async () => {
  const response = await POST(request(JSON.stringify({ rivers: [], melds: [], dora: [], hand: [] })));
  assert.equal(response.status, 200);
  assert.equal((await response.json()).success, true);
});
