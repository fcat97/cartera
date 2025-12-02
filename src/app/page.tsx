import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { FileText, Shield } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';

export default function Home() {
  const bannerSrc = `banner.png`;

  return (
    <div className="py-8 sm:py-12">
      <section className="text-center py-12 md:py-16">
        <div className="mb-8">
          <Image
            src={bannerSrc}
            alt="Cartera Banner"
            width={1200}
            height={400}
            className="rounded-lg mx-auto"
            priority
          />
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight">
          Welcome to Cartera
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          Your privacy and trust are important to us. Here you can find our legal documents and get in touch.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
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
      </section>

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
