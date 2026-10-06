'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowDown, BookOpen, BriefcaseBusiness, ChevronLeft, ChevronRight, House, Pause, Plane, Play } from 'lucide-react';

const screenshots = [
  { file: 'books-and-pages-light', title: 'Books & pages · Light', alt: 'Cartera in light appearance, with account balances and notebook pages for monthly expenses and a trip.' },
  { file: 'books-and-pages-dark', title: 'Books & pages · Dark', alt: 'Cartera in dark appearance, with account balances and notebook pages for monthly expenses and a trip.' },
  { file: 'monthly-transactions-dark', title: 'Monthly transactions · Dark', alt: 'A monthly page in dark appearance, showing expense categories and individual transaction records.' },
  { file: 'monthly-transactions-light', title: 'Monthly transactions · Light', alt: 'A monthly page in light appearance, showing expense categories and individual transaction records.' },
  { file: 'spending-analysis', title: 'Spending analysis', alt: 'Cartera’s spending breakdown by category, with the corresponding transaction list.' },
  { file: 'monthly-budget', title: 'Monthly budget', alt: 'Cartera’s monthly budget progress above notebook pages and a spending breakdown.' },
  { file: 'trip-transactions', title: 'Trip transactions', alt: 'A Thailand Tour page showing travel expense categories and transaction records.' },
];

export function HeroScreenshotCarousel() {
  const [viewportRef, carousel] = useEmblaCarousel({ loop: true });
  const figureRef = useRef<HTMLElement>(null);
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [documentVisible, setDocumentVisible] = useState(true);
  const playing = !paused && !reducedMotion && visible && !hovered && !focused && documentVisible;

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setReducedMotion(preference.matches);
    const updateVisibility = () => setDocumentVisible(!document.hidden);
    updatePreference();
    updateVisibility();
    preference.addEventListener('change', updatePreference);
    document.addEventListener('visibilitychange', updateVisibility);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.25 });
    if (figureRef.current) observer.observe(figureRef.current);
    return () => {
      preference.removeEventListener('change', updatePreference);
      document.removeEventListener('visibilitychange', updateVisibility);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!carousel) return;
    const updateSelection = () => setSelected(carousel.selectedScrollSnap());
    const stopOnDrag = () => setPaused(true);
    updateSelection();
    carousel.on('select', updateSelection).on('reInit', updateSelection).on('pointerDown', stopOnDrag);
    return () => { carousel.off('select', updateSelection).off('reInit', updateSelection).off('pointerDown', stopOnDrag); };
  }, [carousel]);

  useEffect(() => {
    if (!carousel || !playing) return;
    const timer = window.setInterval(() => carousel.scrollNext(), 5000);
    return () => window.clearInterval(timer);
  }, [carousel, playing, selected]);

  function showScreenshot(index: number) {
    setPaused(true);
    carousel?.scrollTo((index + screenshots.length) % screenshots.length, reducedMotion);
  }

  return (
    <figure ref={figureRef} className="hero-visual" data-motion="hero-notebook" role="region" aria-roledescription="carousel" aria-label="Cartera app screenshots"
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}
      onKeyDown={event => {
        if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
          event.preventDefault();
          showScreenshot(selected + (event.key === 'ArrowRight' ? 1 : -1));
        }
      }}>
      <div className="hero-visual-backdrop" aria-hidden="true" />
      <div className="hero-carousel-body">
        <div className="phone-frame">
          <div className="hero-carousel-viewport" ref={viewportRef}>
            <div className="hero-carousel-track">
              {screenshots.map((screenshot, index) => (
                <div className="hero-carousel-slide" key={screenshot.file} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${screenshots.length}`} aria-hidden={index !== selected}>
                  <Image src={`/screenshots/${screenshot.file}.webp`} alt={screenshot.alt} width={720} height={1560}
                    sizes="(max-width: 600px) 236px, (max-width: 1000px) 250px, 276px" priority={index === 0} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hero-carousel-controls" role="group" aria-label="Screenshot navigation">
          <button type="button" aria-label="Previous screenshot" onClick={() => showScreenshot(selected - 1)}><ChevronLeft size={19} aria-hidden="true" /></button>
          <span className="hero-carousel-count" aria-hidden="true">{selected + 1} / {screenshots.length}</span>
          <button type="button" aria-label={paused || reducedMotion ? 'Play screenshot carousel' : 'Pause screenshot carousel'} disabled={reducedMotion}
            onClick={() => setPaused(value => !value)}>{paused || reducedMotion ? <Play size={15} aria-hidden="true" /> : <Pause size={15} aria-hidden="true" />}</button>
          <button type="button" aria-label="Next screenshot" onClick={() => showScreenshot(selected + 1)}><ChevronRight size={19} aria-hidden="true" /></button>
        </div>
        <div className="hero-carousel-dots" role="group" aria-label="Choose a screenshot">
          {screenshots.map((screenshot, index) => <button type="button" key={screenshot.file} aria-label={`Show ${screenshot.title} (${index + 1} of ${screenshots.length})`}
            aria-current={index === selected ? 'true' : undefined} onClick={() => showScreenshot(index)}><span /></button>)}
        </div>
      </div>
      <div className="hero-notebook" aria-hidden="true"><BookOpen size={25} strokeWidth={1.4} /><p>A page for<br />every part of life</p><span><House size={19} /> Home</span><span><Plane size={19} /> Trips</span><span><BriefcaseBusiness size={19} /> Projects</span></div>
      <div className="hero-sticker" aria-hidden="true"><span>Less guessing.</span><span>More clarity.</span><ArrowDown size={19} /></div>
      <figcaption className="hero-carousel-caption" aria-live={playing ? 'off' : 'polite'} aria-atomic="true">{screenshots[selected].title}</figcaption>
    </figure>
  );
}
