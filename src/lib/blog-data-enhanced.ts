import { blogPosts } from './blog-data';

interface BlogPostData {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  featuredImage: string;
  author: string;
  keywords: string[];
  readingTime: number; // in minutes
}

export const blogPostsEnhanced: BlogPostData[] = [
  {
    slug: 'getting-started-with-cartera',
    title: 'Getting Started with Cartera: Your Financial Journey Begins Here',
    date: '2026-02-01',
    excerpt: 'Learn how to set up your first expense tracker and start managing your finances like a pro with Cartera\'s intuitive notepad-style interface.',
    featuredImage: 'blog-getting-started.jpg',
    author: 'Cartera Team',
    keywords: ['expense tracker tutorial', 'personal finance beginner', 'budget tracking app', 'financial planning guide', 'money management tips'],
    readingTime: 8,
  },
  {
    slug: 'budget-planning-tips',
    title: '5 Essential Budget Planning Tips for 2026',
    date: '2026-01-28',
    excerpt: 'Master the art of budget planning with these proven strategies. Discover how to set realistic goals and stick to your financial plan.',
    featuredImage: 'blog-budget-tips.jpg',
    author: 'Cartera Team',
    keywords: ['budget planning', 'financial tips', 'money saving strategies', '50/30/20 rule', 'zero-based budgeting'],
    readingTime: 10,
  },
  {
    slug: 'double-entry-bookkeeping-explained',
    title: 'Double-Entry Bookkeeping Explained: Why It Matters',
    date: '2026-01-25',
    excerpt: 'Understand the power of double-entry bookkeeping and how Cartera uses this professional accounting method to keep your finances accurate and balanced.',
    featuredImage: 'blog-bookkeeping.jpg',
    author: 'Cartera Team',
    keywords: ['double-entry bookkeeping', 'accounting basics', 'financial accuracy', 'bookkeeping explained', 'personal accounting'],
    readingTime: 12,
  },
  {
    slug: 'best-expense-tracking-apps-2026',
    title: 'Top 8 Best Expense Tracking Apps in 2026: Comprehensive Comparison',
    date: '2026-02-06',
    excerpt: 'Discover the best expense tracking apps of 2026. Compare features, pricing, and user ratings to find the perfect budget management tool for your needs.',
    featuredImage: 'blog-app-comparison.jpg',
    author: 'Cartera Team',
    keywords: ['best expense tracking app 2026', 'budget app comparison', 'expense tracker review', 'money management app', 'personal finance app', 'expense tracking software'],
    readingTime: 18,
  },
];

export function getBlogPost(slug: string) {
  return blogPostsEnhanced.find(post => post.slug === slug);
}
