import { ArrowUpRight } from 'lucide-react';
import { GOOGLE_PLAY_URL } from '@/lib/site';

export function PlayStoreLink({ className = '', compact = false }: { className?: string; compact?: boolean }) {
  return (
    <a href={GOOGLE_PLAY_URL} className={`play-store-link ${compact ? 'play-store-link--compact' : ''} ${className}`}>
      <svg aria-hidden="true" viewBox="0 0 24 26" width="21" height="23" fill="none">
        <path d="M2 2 15 13 2 24V2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="m2 2 18 10c.8.4.8 1.6 0 2L2 24M10 8l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
      <span>{compact ? 'Google Play' : 'Get it on Google Play'}</span>
      <ArrowUpRight size={17} aria-hidden="true" className="play-store-arrow" />
    </a>
  );
}
