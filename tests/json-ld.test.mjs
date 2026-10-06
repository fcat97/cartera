import assert from 'node:assert/strict';
import { test } from 'node:test';

let serializeJsonLd;
try {
  ({ serializeJsonLd } = await import('../src/lib/json-ld.ts'));
} catch (error) {
  if (error.code !== 'ERR_MODULE_NOT_FOUND') throw error;
}

test('JSON-LD cannot close its script element through article content', () => {
  assert.equal(typeof serializeJsonLd, 'function', 'JSON-LD needs a safe serializer');
  const content = { headline: '</script><script>alert("injected")</script>', description: 'Books & pages < savings' };
  const serialized = serializeJsonLd(content);
  assert.equal(serialized.includes('<'), false);
  assert.deepEqual(JSON.parse(serialized), content);
});
