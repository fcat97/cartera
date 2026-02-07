import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowLeft, Clock } from 'lucide-react';
import { format } from 'date-fns';
import { getBlogPost } from '@/lib/blog-data-enhanced';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/structured-data';

const blogPost = getBlogPost('double-entry-bookkeeping-explained')!;

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

export default function DoubleEntryBookkeepingBlogPost() {
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
                  alt={`${blogPost.title} - Understanding double-entry bookkeeping for personal finance management`}
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
                  You've probably heard the term "double-entry bookkeeping" and wondered what makes it different from just writing down what you spend. The answer lies in a powerful principle that has kept businesses' finances accurate for over 500 years—and now powers Cartera's expense tracking system.
                </p>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-primary border-b pb-2">What Is Double-Entry Bookkeeping?</h2>
                  <p>
                    At its core, double-entry bookkeeping is based on one simple truth: <strong>every financial transaction affects at least two accounts</strong>.
                  </p>
                  <p>
                    When you buy groceries with your debit card, two things happen simultaneously:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 pl-4">
                    <li>Your bank account decreases by $100</li>
                    <li>Your groceries expense increases by $100</li>
                  </ol>
                  <p>
                    In double-entry bookkeeping, we record both sides of this transaction. This creates a complete picture of your financial activity and ensures everything balances perfectly.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-primary border-b pb-2">The Accounting Equation</h2>
                  <p>
                    Double-entry bookkeeping maintains a fundamental equation that must always balance:
                  </p>
                  <div className="bg-muted p-4 rounded-lg text-center text-lg font-semibold my-4">
                    Assets = Liabilities + Equity
                  </div>
                  <p>
                    Let's break this down:
                  </p>
                  <ul className="list-disc list-inside space-y-2 pl-4">
                    <li><strong>Assets:</strong> Things you own (cash, bank accounts, property)</li>
                    <li><strong>Liabilities:</strong> Money you owe (credit cards, loans, bills)</li>
                    <li><strong>Equity:</strong> Your net worth (assets minus liabilities)</li>
                  </ul>
                  <p>
                    Every transaction you record must keep this equation balanced. If your assets go up, either your liabilities must go up by the same amount, or your equity must increase. This mathematical certainty is what makes double-entry bookkeeping so reliable.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-primary border-b pb-2">Why Single-Entry Systems Fall Short</h2>
                  <p>
                    Many expense trackers use single-entry systems—you record that you spent $100 on groceries, and that's it. This seems simpler, but it has significant limitations:
                  </p>
                  <ul className="list-disc list-inside space-y-2 pl-4">
                    <li><strong>No complete picture:</strong> You know you spent money, but not where it came from</li>
                    <li><strong>Easy to make errors:</strong> Without built-in validation, mistakes go unnoticed</li>
                    <li><strong>Can't track transfers:</strong> Moving money between accounts is confusing</li>
                    <li><strong>Limited reporting:</strong> You can see expenses but not your overall financial position</li>
                    <li><strong>Difficult reconciliation:</strong> Comparing your records to bank statements is harder</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-primary border-b pb-2">The Cartera Advantage</h2>
                  <p>
                    Cartera uses double-entry bookkeeping behind the scenes, but you don't need to be an accountant to use it. Here's what this means for you:
                  </p>
                  
                  <h3 className="text-xl font-semibold text-foreground">1. Automatic Error Detection</h3>
                  <p>
                    Because everything must balance, Cartera can catch mistakes immediately. If your accounts don't balance, you'll know something needs attention.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground">2. Complete Financial Picture</h3>
                  <p>
                    You can instantly see your net worth, not just your spending. Know exactly where you stand financially at any moment.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground">3. Easy Account Transfers</h3>
                  <p>
                    Moving money from checking to savings? Paying off a credit card from your bank account? These transactions are handled naturally in a double-entry system.
                  </p>

                  <h3 className="text-xl font-semibold text-foreground">4. Professional-Grade Reporting</h3>
                  <p>
                    Generate the same financial reports that businesses use: balance sheets, income statements, and cash flow reports—all automatically maintained by the double-entry system.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-primary border-b pb-2">Real-World Example</h2>
                  <p>
                    Let's walk through a common scenario to see double-entry bookkeeping in action:
                  </p>
                  
                  <div className="bg-muted p-4 rounded-lg my-4 space-y-3">
                    <p><strong>Scenario:</strong> You receive your $3,000 paycheck and deposit it into your checking account.</p>
                    
                    <p><strong>Single-Entry Approach:</strong><br />
                    Record: "Income: $3,000"</p>
                    
                    <p><strong>Double-Entry Approach:</strong><br />
                    Checking Account +$3,000<br />
                    Income +$3,000</p>
                  </div>

                  <p>
                    The double-entry version tells the complete story: your asset (checking account) increased, and so did your equity (through income). Your accounting equation remains balanced.
                  </p>

                  <p>
                    Now you pay $1,200 rent:
                  </p>

                  <div className="bg-muted p-4 rounded-lg my-4 space-y-3">
                    <p><strong>Single-Entry Approach:</strong><br />
                    Record: "Rent Expense: $1,200"</p>
                    
                    <p><strong>Double-Entry Approach:</strong><br />
                    Checking Account -$1,200<br />
                    Rent Expense +$1,200</p>
                  </div>

                  <p>
                    Again, the double-entry approach shows both sides: your asset decreased, and your expenses increased (reducing your equity). Everything still balances.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-primary border-b pb-2">Do You Need to Understand the Details?</h2>
                  <p>
                    <strong>No!</strong> That's the beauty of how Cartera implements double-entry bookkeeping. The app handles all the technical aspects behind the scenes.
                  </p>
                  <p>
                    When you record a transaction in Cartera, you simply think: "I bought groceries with my debit card." You select:
                  </p>
                  <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>From: Checking Account</li>
                    <li>To: Groceries</li>
                    <li>Amount: $100</li>
                  </ul>
                  <p>
                    Cartera automatically creates both entries, maintains the accounting equation, and ensures everything balances. You get all the benefits of professional bookkeeping with the simplicity of writing in a notepad.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-primary border-b pb-2">The Bottom Line</h2>
                  <p>
                    Double-entry bookkeeping has remained the gold standard in accounting for over 500 years because it works. It provides accuracy, completeness, and built-in error checking that single-entry systems simply can't match.
                  </p>
                  <p>
                    With Cartera, you don't need to be an accountant or understand debits and credits. You just need to know where money came from and where it went. Cartera takes care of the rest, giving you the confidence that your financial records are accurate, complete, and always balanced.
                  </p>
                  <p>
                    That's the power of combining centuries-old accounting wisdom with modern, intuitive software design. Try Cartera today and experience the difference that professional-grade bookkeeping can make in your personal finances.
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
