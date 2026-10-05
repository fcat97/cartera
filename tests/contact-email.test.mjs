import assert from 'node:assert/strict';
import { test } from 'node:test';

let createSupportEmailDraft;
try {
  ({ createSupportEmailDraft } = await import('../src/lib/contact-email.ts'));
} catch (error) {
  if (error.code !== 'ERR_MODULE_NOT_FOUND') throw error;
}

test('email drafts keep user-entered delimiters out of recipients and headers', () => {
  assert.equal(typeof createSupportEmailDraft, 'function', 'The form needs an actual email action');
  const draft = new URL(createSupportEmailDraft({
    name: 'Alex & Sam',
    email: 'alex@example.com',
    message: 'Budget question? Amount = $20 & tax = $2.\nPlease keep both lines.\n&bcc=someone@example.com',
  }));
  assert.equal(draft.protocol, 'mailto:');
  assert.equal(draft.pathname, 'media.uqab@gmail.com');
  assert.equal(draft.searchParams.get('bcc'), null);
  assert.equal(draft.searchParams.get('subject'), 'Cartera support — Alex & Sam');
  assert.equal(draft.searchParams.get('body'), 'Name: Alex & Sam\nReply to: alex@example.com\n\nBudget question? Amount = $20 & tax = $2.\nPlease keep both lines.\n&bcc=someone@example.com');
});
