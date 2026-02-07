import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowLeft, Clock } from 'lucide-react';
import { format } from 'date-fns';
import { getBlogPost } from '@/lib/blog-data-enhanced';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/structured-data';

const blogPost = getBlogPost('getting-started-with-cartera')!;

export const metadata: Metadata = {
  title: blogPost.title,
  description: blogPost.excerpt,
  keywords: blogPost.keywords,
  authors: [{ name: blogPost.author }],
  openGraph: {
    title: blogPost.title,
    description: blogPost.excerpt,
    type: 'article',
    publishedTime: blogPost.date,
    authors: [blogPost.author],
    images: [
      {
        url: `https://cartera.app${blogPost.featuredImage}`,
        width: 1200,
        height: 600,
        alt: blogPost.title,
      },
    ],
    siteName: 'Cartera',
  },
  twitter: {
    card: 'summary_large_image',
    title: blogPost.title,
    description: blogPost.excerpt,
    images: [`https://cartera.app${blogPost.featuredImage}`],
  },
  alternates: {
    canonical: `https://cartera.app/blogs/${blogPost.slug}`,
  },
};

export default function GettingStartedBlogPost() {
  const publishDate = new Date(blogPost.date);
  
  const articleSchema = generateArticleSchema(
    blogPost.slug,
    blogPost.title,
    blogPost.excerpt,
    blogPost.date,
    blogPost.keywords,
    blogPost.featuredImage
  );
  
  const breadcrumbSchema = generateBreadcrumbSchema(blogPost.title, blogPost.slug);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <div className="py-8 sm:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb Navigation */}
          <nav className="mb-6 text-sm text-muted-foreground" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-foreground">Home</Link></li>
              <li>/</li>
              <li><Link href="/blogs" className="hover:text-foreground">Blog</Link></li>
              <li>/</li>
              <li className="text-foreground">{blogPost.title}</li>
            </ol>
          </nav>

          <Button variant="ghost" asChild className="mb-6">
            <Link href="/blogs">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <article itemScope itemType="https://schema.org/BlogPosting">
            <div className="mb-8">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={publishDate.toISOString()} itemProp="datePublished">
                    {format(publishDate, 'MMMM dd, yyyy')}
                  </time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{blogPost.readingTime} min read</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6" itemProp="headline">
                {blogPost.title}
              </h1>
              <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden mb-8">
                <Image
                  src={blogPost.featuredImage}
                  alt={`${blogPost.title} - Comprehensive guide to getting started with Cartera expense tracking app`}
                  fill
                  className="object-cover"
                  priority
                  itemProp="image"
                />
              </div>
              <meta itemProp="author" content={blogPost.author} />
              <meta itemProp="dateModified" content={blogPost.date} />
            </div>

          <Card>
            <CardContent className="prose dark:prose-invert max-w-none text-foreground/80 text-base leading-relaxed px-6 sm:px-8 md:px-10 py-8" itemProp="articleBody">
              <div className="space-y-6">
                <p className="text-lg">
                  Starting your journey to financial freedom doesn't have to be complicated. With Cartera's intuitive notepad-style interface, you can begin tracking your expenses and managing your budget in just a few simple steps.
                </p>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-primary border-b pb-2">Why Choose Cartera?</h2>
                  <p>
                    Cartera combines the simplicity of writing in a notebook with the power of professional accounting software. Whether you're tracking personal expenses or managing business finances, Cartera adapts to your needs without overwhelming you with complexity.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-primary border-b pb-2">Step 1: Create Your First Page</h2>
                  <p>
                    Think of Cartera's "pages" like tabs in a physical notebook. You might create separate pages for:
                  </p>
                  <ul className="list-disc list-inside space-y-2 pl-4">
                    <li><strong>Monthly Expenses</strong> - Track your day-to-day spending</li>
                    <li><strong>Business Travel</strong> - Keep work expenses separate</li>
                    <li><strong>Vacation Budget</strong> - Plan and track your trip spending</li>
                    <li><strong>Home Projects</strong> - Monitor renovation costs</li>
                  </ul>
                  <p>
                    Each page is independent, allowing you to organize your finances exactly how you think about them.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-primary border-b pb-2">Step 2: Set Up Your Accounts</h2>
                  <p>
                    Accounts represent where your money lives - your checking account, savings, cash, credit cards, etc. Cartera uses double-entry bookkeeping, which means every transaction is recorded twice: once where the money comes from, and once where it goes.
                  </p>
                  <p>
                    Don't worry if that sounds technical - Cartera handles all the complexity behind the scenes. You just need to:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 pl-4">
                    <li>Add your bank accounts with their current balances</li>
                    <li>Add any credit cards or loans</li>
                    <li>Set up expense categories (groceries, utilities, entertainment, etc.)</li>
                  </ol>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-primary border-b pb-2">Step 3: Record Your First Transaction</h2>
                  <p>
                    Recording a transaction is as simple as writing in a notepad. For example, if you bought groceries with your debit card:
                  </p>
                  <ul className="list-disc list-inside space-y-2 pl-4">
                    <li><strong>From:</strong> Checking Account</li>
                    <li><strong>To:</strong> Groceries (expense category)</li>
                    <li><strong>Amount:</strong> $75.00</li>
                    <li><strong>Note:</strong> Weekly shopping at SuperMart</li>
                  </ul>
                  <p>
                    That's it! Cartera automatically updates your account balances and keeps everything balanced using professional accounting principles.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-primary border-b pb-2">Step 4: Set Your Budget</h2>
                  <p>
                    Once you've recorded a few transactions, set up budgets for your expense categories. Cartera will track your spending against these budgets in real-time and alert you when you're approaching your limits.
                  </p>
                  <p>
                    Start with realistic numbers based on your past spending, then adjust as you learn more about your financial habits.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-primary border-b pb-2">Step 5: Review Your Insights</h2>
                  <p>
                    The real power of Cartera comes from its visual insights. Check the graphs and charts to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>See where your money is going</li>
                    <li>Identify spending trends over time</li>
                    <li>Compare your actual spending to your budget</li>
                    <li>Find opportunities to save more</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-primary border-b pb-2">Pro Tips for Success</h2>
                  <ul className="list-disc list-inside space-y-2 pl-4">
                    <li><strong>Be Consistent:</strong> Record transactions daily or weekly for best results</li>
                    <li><strong>Use Notes:</strong> Add context to your transactions so you remember why you spent the money</li>
                    <li><strong>Review Regularly:</strong> Spend 10 minutes each week reviewing your spending patterns</li>
                    <li><strong>Backup Your Data:</strong> Use Cartera's export feature to create local backups</li>
                    <li><strong>Start Simple:</strong> Don't try to track everything at once - begin with your major expenses and expand gradually</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-primary border-b pb-2">Ready to Take Control?</h2>
                  <p>
                    Your financial journey starts with a single transaction. Download Cartera today and experience how easy expense tracking can be when it's designed around the way you actually think about money.
                  </p>
                  <p>
                    Remember: the goal isn't perfection, it's awareness. Every transaction you record is a step toward better financial health and peace of mind.
                  </p>
                </section>
              </div>
            </CardContent>
          </Card>
        </article>
      </div>
    </div>
    </>
  );
}
