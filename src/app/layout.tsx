import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { RedirectHandler } from '@/components/redirect-handler';
import { Suspense } from 'react';
import { SITE_URL, SITE_TITLE, SITE_DESCRIPTION } from '@/lib/site';
import { JsonLd } from '@/components/json-ld';
import { generateSiteSchema } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: '%s | Cartera',
  },
  description: SITE_DESCRIPTION,
  authors: [{ name: 'UqabMedia' }],
  creator: 'UqabMedia',
  metadataBase: new URL(SITE_URL),
  applicationName: 'Cartera',
  icons: { icon: [{ url: '/icon.png', type: 'image/png', sizes: '512x512' }], apple: '/icon.png' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preload" href="/fonts/plus-jakarta-sans-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className={cn('font-body antialiased flex flex-col min-h-screen')}>
        <JsonLd data={generateSiteSchema()} />
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
