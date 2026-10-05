export const SUPPORT_EMAIL = 'media.uqab@gmail.com';

/** Opens a draft; delivery happens only when the visitor sends it in their email app. */
export function createSupportEmailDraft(fields: { name: string; email: string; message: string }) {
  const subject = `Cartera support — ${fields.name}`;
  const body = `Name: ${fields.name}\nReply to: ${fields.email}\n\n${fields.message}`;
  return `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
