import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { FileText, Shield, BookOpen, Scale, Infinity, BarChart3, Calendar, Lock, HardDrive, Cloud, CheckCircle, Smartphone } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cartera - Advance Notepad-Style Expense Tracker & Budget Planner',
  description: 'Take control of your finances with Cartera, the ultimate tool for personal and business asset management. Track expenses, manage budgets, and secure your financial data with bank-level encryption.',
  keywords: 'expense tracker, budget planner, personal finance, money management, double-entry bookkeeping, asset management, financial app, expense management, budget app, finance tracker',
  openGraph: {
    title: 'Cartera - Advance Notepad-Style Expense Tracker & Budget Planner',
    description: 'Combining the simplicity of a notepad with the precision of a professional accounting system. Track expenses, manage budgets, and take control of your finances.',
    type: 'website',
    siteName: 'Cartera',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cartera - Expense Tracker & Budget Planner',
    description: 'Take control of your finances with Cartera. Intuitive, secure, and unlimited.',
  },
};

const features = [
  {
    icon: BookOpen,
    title: 'Unique Notepad-Style Organization',
    description: 'Arrange your expenses exactly how you think. Create separate "pages" for different projects, trips, or months. It\'s as easy as writing in a notebook, but with the power of digital calculation.',
    emoji: '📑',
  },
  {
    icon: Scale,
    title: 'Professional Double-Entry Tracking',
    description: 'Experience high-level accuracy. Cartera utilizes a double-entry bookkeeping system to ensure your assets and liabilities always balance. It doesn\'t just track spending; it manages your entire financial ecosystem.',
    emoji: '⚖️',
  },
  {
    icon: Infinity,
    title: 'Unlimited Everything (Free!)',
    description: 'Why pay for more space? Enjoy unlimited accounts and unlimited pages. Whether you have two bank accounts or twenty, and whether you want to track one year or ten, we never cap your data.',
    emoji: '♾️',
  },
  {
    icon: BarChart3,
    title: 'Visual Insights & Graphs',
    description: 'Turn numbers into clarity. View your spending patterns through detailed graphs. Instantly see where your money goes and identify trends to help you save more effectively.',
    emoji: '📊',
  },
  {
    icon: Calendar,
    title: 'Advanced Budget Planning',
    description: 'Stay ahead of your bills. Set custom budgets for weekly, monthly, or yearly cycles. Track your progress in real-time and get notified when you\'re approaching your limits.',
    emoji: '📅',
  },
  {
    icon: Lock,
    title: 'Bank-Level Security',
    description: 'Your financial data is nobody\'s business but yours. Secure your records with a built-in App Lock to keep your sensitive information private.',
    emoji: '🔒',
  },
  {
    icon: HardDrive,
    title: 'Local Backup & Restore',
    description: 'Ownership of your data matters. Export your records and create local backups to ensure you never lose your history. Restore your data to a new device in seconds.',
    emoji: '💾',
  },
  {
    icon: Cloud,
    title: 'Seamless Synchronization',
    description: 'Need your data everywhere? Upgrade to our sync service to access your ledgers across multiple devices. Start tracking on your phone and review on your tablet instantly.',
    emoji: '☁️',
    isPro: true,
  },
];

const whyChoose = [
  { title: 'No Boundaries', description: 'No limits on the number of accounts or ledgers you can create.' },
  { title: 'Intuitive UI', description: 'If you can use a notepad, you can use this app.' },
  { title: 'Precision', description: 'Built on real accounting principles for error-free tracking.' },
  { title: 'Privacy First', description: "We don't sell your data; your local backups stay with you." },
];

export default function Home() {
  const bannerSrc = `banner.png`;

  return (
    <div className="py-8 sm:py-12">
      {/* Hero Section */}
      <section className="text-center py-12 md:py-16">
        <div className="mb-8">
          <Image
            src={bannerSrc}
            alt="Cartera - Expense Tracker and Budget Planner App Banner"
            width={1200}
            height={400}
            className="rounded-lg mx-auto shadow-lg"
            priority
          />
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight">
          Cartera
        </h1>
        <p className="mt-2 text-xl sm:text-2xl font-semibold text-foreground/90">
          Advance Notepad-Style Expense Tracker & Budget Planner
        </p>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-foreground/80 leading-relaxed">
          Take control of your finances with Cartera, the ultimate tool for personal and business asset management.
          Combining the simplicity of a notepad with the precision of a professional accounting system,
          Cartera makes tracking your money intuitive, secure, and limitless.
        </p>
        <p className="mt-4 max-w-2xl mx-auto text-md text-foreground/70">
          Whether you are managing a household budget or tracking small business expenses,
          our "Page & Ledger" system ensures you stay organized without the complexity of traditional finance apps.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-6" asChild>
            <Link href="#download">
              <Smartphone className="mr-2 h-5 w-5" />
              Download Now
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
            <Link href="#features">
              Learn More
            </Link>
          </Button>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">Key Features</h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            Everything you need to manage your finances effectively, all in one powerful app.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 hover:border-primary/30"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <span>{feature.emoji}</span>
                      {feature.title}
                      {feature.isPro && (
                        <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                          Pro
                        </span>
                      )}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Cartera Section */}
      <section className="py-16 bg-muted/30 rounded-2xl px-6 sm:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">Why Choose Cartera?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {whyChoose.map((item, index) => (
            <div key={index} className="text-center p-6">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">{item.title}</h3>
              <p className="text-foreground/70 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Stop Wondering Where Your Money Went
          </h2>
          <p className="text-lg text-foreground/80 mb-8">
            Download Cartera today and start tracking your path to financial freedom!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <a href="https://play.google.com/store/apps/details?id=media.uqab.cartera" target="_blank" rel="noopener noreferrer">
                Get on Google Play
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Legal Documents Section */}
      <section className="py-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-foreground/90">Legal Information</h2>
          <p className="mt-2 text-foreground/70">Your privacy and trust are important to us.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
              <div className="bg-primary/10 p-3 rounded-full">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Understand how we collect, use, and protect your data.
              </p>
              <Button asChild>
                <Link href="/privacy-policy">Read Policy</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
              <div className="bg-primary/10 p-3 rounded-full">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Terms & Conditions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Review the terms that govern your use of the Cartera app.
              </p>
              <Button asChild>
                <Link href="/terms-and-conditions">Read Terms</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12">
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-3xl">Contact Us</CardTitle>
              <CardDescription className="text-center mt-2">
                Have questions? Fill out the form below to get in touch.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
