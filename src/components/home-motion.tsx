'use client';

import { useEffect } from 'react';

/** Adds one-time motion to illustrations; all content is visible without JavaScript. */
export function HomeMotion() {
  useEffect(() => {
    const root = document.querySelector('.home-page');
    if (!root || !('IntersectionObserver' in window) || !('animate' in Element.prototype)) return;

    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const seen = new WeakSet<Element>();
    const active = new Set<Animation>();
    const ease = 'cubic-bezier(0.16, 1, 0.3, 1)';
    let observer: IntersectionObserver | undefined;

    function animate(element: Element | null, keyframes: Keyframe[], delay = 0, duration = 700) {
      if (!element) return;
      const animation = element.animate(keyframes, { duration, delay, easing: ease });
      active.add(animation);
      animation.finished.then(() => active.delete(animation), () => active.delete(animation));
    }

    function play(element: Element) {
      switch (element.getAttribute('data-motion')) {
        case 'hero-ink':
          element.classList.add('motion-played');
          break;
        case 'hero-notebook': {
          const phone = element.querySelector('.phone-frame');
          const notebook = element.querySelector('.hero-notebook');
          animate(phone, [{ transform: 'translateY(12px) rotate(-3deg)' }, { transform: 'none' }]);
          if (notebook) animate(notebook, [{ transform: 'translateY(18px) rotate(12deg)' }, { transform: getComputedStyle(notebook).transform }], 80);
          break;
        }
        case 'pages':
          element.querySelectorAll('.paper-page').forEach((page, index) => {
            animate(page, [{ transform: `translateX(${22 - index * 22}px) rotate(0deg)` }, { transform: getComputedStyle(page).transform }], index * 60, 620);
          });
          break;
        case 'progress':
          animate(element.querySelector('span'), [{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }], 0, 750);
          break;
        case 'shared-ledger':
          element.querySelectorAll('.shared-connector').forEach((line, index) => {
            animate(line, [{ strokeDasharray: '1', strokeDashoffset: '1' }, { strokeDasharray: '1', strokeDashoffset: '0' }], index * 80, 700);
          });
          element.querySelectorAll('.shared-person').forEach((person, index) => {
            animate(person, [{ transform: 'translateY(9px)', opacity: .65 }, { transform: 'none', opacity: 1 }], index * 80, 600);
          });
          animate(element.querySelector('.shared-ledger-book'), [{ transform: 'translateY(12px) rotate(-4deg)' }, { transform: 'rotate(-2deg)' }], 100, 700);
          break;
      }
    }

    function stop() {
      observer?.disconnect();
      active.forEach(animation => animation.cancel());
      active.clear();
    }

    function update() {
      stop();
      if (preference.matches || document.hidden) return;
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting || seen.has(entry.target)) return;
          seen.add(entry.target);
          play(entry.target);
          observer?.unobserve(entry.target);
        });
      }, { threshold: 0.25, rootMargin: '0px 0px -24px 0px' });
      root?.querySelectorAll('[data-motion]').forEach(element => {
        if (!seen.has(element)) observer?.observe(element);
      });
    }

    update();
    preference.addEventListener('change', update);
    document.addEventListener('visibilitychange', update);
    return () => {
      stop();
      preference.removeEventListener('change', update);
      document.removeEventListener('visibilitychange', update);
    };
  }, []);

  return null;
}
