import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: {
    default: 'Cartera - Expense Tracker & Budget Planner',
    template: '%s | Cartera',
  },
  description: 'Take control of your finances with Cartera, the ultimate notepad-style expense tracker and budget planner. Track expenses, manage budgets, and secure your financial data.',
  keywords: ['expense tracker', 'budget planner', 'personal finance', 'money management', 'financial app'],
  authors: [{ name: 'UqabMedia' }],
  creator: 'UqabMedia',
  metadataBase: new URL('https://cartera.app'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased flex flex-col min-h-screen')}>
        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
