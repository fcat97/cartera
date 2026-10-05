import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { GOOGLE_PLAY_URL } from '@/lib/site';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell">
        <div className="footer-top">
          <div>
            <Link href="/" className="brand" aria-label="Cartera home">
              <Image src="/icon.png" alt="" width={38} height={38} />
              <span>Cartera</span>
            </Link>
            <p>A little structure for everyday money.</p>
          </div>
          <nav aria-label="Footer navigation" className="footer-navigation">
            <Link href="/#features">Features</Link>
            <Link href="/blogs">Blog</Link>
            <Link href="/#contact">Contact</Link>
            <Link href="/privacy-policy">Privacy policy</Link>
            <Link href="/terms-and-conditions">Terms & conditions</Link>
            <a href={GOOGLE_PLAY_URL}>Google Play <ArrowUpRight size={14} aria-hidden="true" /></a>
          </nav>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} UqabMedia. All rights reserved.</p>
          <p>Made for the way life adds up.</p>
        </div>
      </div>
    </footer>
  );
}
