import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { RedirectHandler } from '@/components/redirect-handler';
import { Suspense } from 'react';
import { SITE_URL, SITE_DESCRIPTION } from '@/lib/site';

export const metadata: Metadata = {
  title: {
    default: 'Cartera — Expense Tracker, Budgets & Shared Finances',
    template: '%s | Cartera',
  },
  description: SITE_DESCRIPTION,
  keywords: ['expense tracker', 'budget planner', 'personal finance', 'money management', 'financial app'],
  authors: [{ name: 'UqabMedia' }],
  creator: 'UqabMedia',
  metadataBase: new URL(SITE_URL),
  openGraph: { siteName: 'Cartera', images: [{ url: '/social-preview.png', width: 1200, height: 630 }] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preload" href="/fonts/dm-sans-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/fraunces-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className={cn('font-body antialiased flex flex-col min-h-screen')}>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Suspense fallback={null}>
          <RedirectHandler />
        </Suspense>
        <Header />
        <main id="main-content" className="site-main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
