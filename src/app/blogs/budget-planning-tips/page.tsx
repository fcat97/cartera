import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowLeft, Clock } from 'lucide-react';
import { format } from 'date-fns';
import { getBlogPost } from '@/lib/blog-data-enhanced';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/structured-data';

const blogPost = getBlogPost('budget-planning-tips')!;

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

export default function BudgetPlanningTipsBlogPost() {
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
                  alt={`${blogPost.title} - Essential strategies for effective budget planning and financial success`}
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
                  Creating a budget is one thing—sticking to it is another. These five essential tips will help you build a budget that works for your lifestyle and actually helps you achieve your financial goals in 2026.
                </p>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-primary border-b pb-2">1. Start with the 50/30/20 Rule</h2>
                  <p>
                    The 50/30/20 rule is a simple but effective budgeting framework that divides your after-tax income into three categories:
                  </p>
                  <ul className="list-disc list-inside space-y-2 pl-4">
                    <li><strong>50% for Needs:</strong> Essential expenses like rent, utilities, groceries, and insurance</li>
                    <li><strong>30% for Wants:</strong> Discretionary spending like dining out, entertainment, and hobbies</li>
                    <li><strong>20% for Savings & Debt:</strong> Emergency fund, retirement, and paying down debt</li>
                  </ul>
                  <p>
                    This framework provides structure while remaining flexible enough to adapt to your unique situation. Use Cartera to categorize your expenses and see how your spending aligns with this rule.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-primary border-b pb-2">2. Track Every Dollar (Yes, Really)</h2>
                  <p>
                    Small purchases add up faster than you think. That daily coffee? $5 × 20 workdays = $100 per month. Streaming subscriptions you forgot about? Another $50. These "invisible" expenses can derail even the best-planned budget.
                  </p>
                  <p>
                    The solution? Track everything for at least one month. Cartera's notepad-style interface makes this painless—just jot down each purchase as it happens. You'll be amazed at what you discover about your spending habits.
                  </p>
                  <p>
                    <strong>Pro tip:</strong> Set a reminder on your phone to log expenses at the end of each day. Five minutes of consistency can reveal thousands in potential savings.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-primary border-b pb-2">3. Build Your Emergency Fund First</h2>
                  <p>
                    Before you aggressively pay down debt or invest, establish a safety net. Financial experts recommend 3-6 months of expenses in an easily accessible emergency fund.
                  </p>
                  <p>
                    Start small if you need to—even $500 can cover many common emergencies like car repairs or medical bills. Then gradually build it up:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 pl-4">
                    <li><strong>First milestone:</strong> $1,000 for minor emergencies</li>
                    <li><strong>Second milestone:</strong> One month of expenses</li>
                    <li><strong>Final goal:</strong> 3-6 months of expenses</li>
                  </ol>
                  <p>
                    Create a separate "Emergency Fund" account in Cartera and watch it grow. Seeing your progress visualized makes it easier to stay motivated.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-primary border-b pb-2">4. Use the Zero-Based Budget Method</h2>
                  <p>
                    Zero-based budgeting means every dollar has a job. Your income minus all your planned expenses and savings should equal zero.
                  </p>
                  <p>
                    Here's how it works:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 pl-4">
                    <li>Write down your monthly income</li>
                    <li>List all fixed expenses (rent, insurance, loan payments)</li>
                    <li>Allocate funds to variable expenses (groceries, gas, entertainment)</li>
                    <li>Assign remaining money to savings goals or debt payoff</li>
                    <li>Make sure Income - Expenses = $0</li>
                  </ol>
                  <p>
                    This method prevents money from "disappearing" into vague categories. With Cartera's double-entry system, you can see exactly where every dollar is allocated and ensure your budget truly balances.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-primary border-b pb-2">5. Review and Adjust Monthly</h2>
                  <p>
                    Your budget isn't set in stone. Life changes, and your budget should too. Schedule a monthly "budget date" with yourself (or your partner) to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Review last month's spending</li>
                    <li>Identify categories where you overspent or underspent</li>
                    <li>Adjust next month's allocations based on what you learned</li>
                    <li>Celebrate your wins (however small!)</li>
                    <li>Plan for upcoming irregular expenses (birthdays, holidays, car maintenance)</li>
                  </ul>
                  <p>
                    Cartera's visual insights and graphs make this review process quick and enlightening. You can spot trends at a glance and make informed decisions about where to adjust.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-primary border-b pb-2">Bonus Tip: Automate What You Can</h2>
                  <p>
                    Set up automatic transfers to savings accounts and automatic bill payments for fixed expenses. This "pay yourself first" approach removes temptation and ensures your financial priorities are met before discretionary spending begins.
                  </p>
                  <p>
                    Record these automated transactions in Cartera so your ledger stays current and you maintain a complete picture of your finances.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-primary border-b pb-2">Common Budgeting Mistakes to Avoid</h2>
                  <ul className="list-disc list-inside space-y-2 pl-4">
                    <li><strong>Being too restrictive:</strong> Leave room for fun or you'll burn out</li>
                    <li><strong>Ignoring irregular expenses:</strong> Budget for annual costs by setting aside money monthly</li>
                    <li><strong>Not tracking cash:</strong> Cash spending counts too!</li>
                    <li><strong>Giving up after one bad month:</strong> Budget "failures" are learning opportunities</li>
                    <li><strong>Comparing yourself to others:</strong> Your budget should fit your life, not someone else's</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-primary border-b pb-2">Start Your Budget Journey Today</h2>
                  <p>
                    Remember: a budget isn't about restriction—it's about intentionality. It's about making conscious choices that align with your values and goals. With these five tips and a tool like Cartera to keep you on track, 2026 can be your most financially empowered year yet.
                  </p>
                  <p>
                    Ready to take control? Download Cartera and start building a budget that actually works for your life.
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
