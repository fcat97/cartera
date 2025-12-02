import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FileText, Shield, Home } from 'lucide-react';

export function Header() {
  const iconSrc = `/icon.png`;
  
  return (
    <header className="bg-card shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={iconSrc}
            alt="Cartera Logo"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="text-2xl font-bold text-primary">Cartera</span>
        </Link>
        <nav className="flex items-center space-x-1 sm:space-x-2">
          <Button variant="ghost" asChild>
            <Link href="/">
              <Home className="mr-0 sm:mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Home</span>
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/privacy-policy">
              <Shield className="mr-0 sm:mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Privacy</span>
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/terms-and-conditions">
              <FileText className="mr-0 sm:mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Terms</span>
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
