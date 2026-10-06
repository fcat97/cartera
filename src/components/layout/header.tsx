'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { PlayStoreLink } from '@/components/play-store-link';

const navigation = [
  { href: '/#features', label: 'Features' },
  { href: '/#shared-finances', label: 'Shared finances' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/blogs', label: 'Blog' },
];

export function Header() {
  const menu = useRef<HTMLDetailsElement>(null);
  const closeMenu = () => menu.current?.removeAttribute('open');
  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !menu.current?.contains(event.target)) {
        menu.current?.removeAttribute('open');
      }
    };
    document.addEventListener('pointerdown', closeOutside);
    return () => document.removeEventListener('pointerdown', closeOutside);
  }, []);
  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <Link href="/" className="brand" aria-label="Cartera home" onClick={closeMenu}>
          <Image src="/icon.png" alt="" width={44} height={44} priority />
          <span>Cartera</span>
        </Link>
        <nav className="desktop-navigation" aria-label="Main navigation">
          {navigation.map(({ href, label }) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <div className="header-actions">
          <PlayStoreLink compact className="header-download" />
          <details ref={menu} className="mobile-menu" onKeyDown={(event) => {
            if (event.key === 'Escape') { closeMenu(); menu.current?.querySelector('summary')?.focus(); }
          }}>
            <summary aria-label="Toggle navigation">
              <Menu className="menu-open-icon" size={23} aria-hidden="true" />
              <X className="menu-close-icon" size={23} aria-hidden="true" />
            </summary>
            <nav aria-label="Mobile navigation" className="mobile-navigation">
              {navigation.map(({ href, label }) => <Link key={href} href={href} onClick={closeMenu}>{label}</Link>)}
              <Link href="/#contact" onClick={closeMenu}>Contact</Link>
              <Link href="/privacy-policy" onClick={closeMenu}>Privacy</Link>
              <Link href="/terms-and-conditions" onClick={closeMenu}>Terms</Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
