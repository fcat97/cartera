'use client';

import { useState } from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { contactSchema } from '@/lib/schema';
import { createSupportEmailDraft, SUPPORT_EMAIL } from '@/lib/contact-email';

export function ContactForm() {
  const [error, setError] = useState('');
  const [draftOpened, setDraftOpened] = useState(false);

  function openDraft(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setDraftOpened(false);
    const formData = new FormData(event.currentTarget);
    const result = contactSchema.safeParse({
      name: String(formData.get('name') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
      message: String(formData.get('message') ?? '').trim(),
    });
    if (!result.success) {
      setError(result.error.issues[0]?.message ?? 'Check your details and try again.');
      return;
    }
    window.location.href = createSupportEmailDraft(result.data);
    setDraftOpened(true);
  }

  return (
    <form onSubmit={openDraft} className="contact-form" aria-label="Prepare a support email">
      <div className="contact-form-row">
        <div className="form-field">
          <label htmlFor="contact-name">Your name</label>
          <input id="contact-name" name="name" autoComplete="name" placeholder="Alex" required minLength={2} maxLength={100} />
        </div>
        <div className="form-field">
          <label htmlFor="contact-email">Email address</label>
          <input id="contact-email" name="email" autoComplete="email" type="email" placeholder="alex@example.com" required maxLength={254} />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="contact-message">How can we help?</label>
        <textarea id="contact-message" name="message" placeholder="Questions, feedback, or a feature suggestion…" rows={4} required minLength={10} maxLength={2000} aria-describedby="contact-note contact-feedback" />
      </div>
      <button type="submit" className="play-store-link contact-submit"><Mail size={18} aria-hidden="true" /> Open email draft <ArrowUpRight size={17} aria-hidden="true" /></button>
      <p className="form-note" id="contact-note">This form prepares a draft in your email app. Direct email: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.</p>
      <p id="contact-feedback" className={`form-feedback ${error ? 'form-feedback--error' : ''}`} role="status" aria-live="polite">
        {error || (draftOpened ? 'Messages are sent through your email app. If no draft opened, direct email is available at the address above.' : '')}
      </p>
    </form>
  );
}
