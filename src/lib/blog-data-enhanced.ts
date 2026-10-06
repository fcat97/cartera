import { blogPosts } from './blog-data';

const articleDetails: Record<string, { keywords: string[]; readingTime: number; seoTitle: string }> = {
  'getting-started-with-cartera': {
    seoTitle: 'Getting Started: Accounts & Expense Tracking',
    keywords: ['expense tracker tutorial', 'personal finance beginner', 'budget tracking app', 'financial planning guide', 'money management tips'],
    readingTime: 8,
  },
  'budget-planning-tips': {
    seoTitle: '5 Essential Budget Planning Tips for 2026',
    keywords: ['budget planning', 'financial tips', 'money saving strategies', '50/30/20 rule', 'zero-based budgeting'],
    readingTime: 10,
  },
  'double-entry-bookkeeping-explained': {
    seoTitle: 'Double-Entry Bookkeeping Explained',
    keywords: ['double-entry bookkeeping', 'accounting basics', 'financial accuracy', 'bookkeeping explained', 'personal accounting'],
    readingTime: 12,
  },
  'best-expense-tracking-apps-2026': {
    seoTitle: 'Best Expense Tracking Apps 2026: 8 Apps Compared',
    keywords: ['expense tracking apps', 'budget app comparison', 'expense tracker review', 'money management app', 'personal finance app'],
    readingTime: 12,
  },
};

export const blogPostsEnhanced = blogPosts.map(post => ({
  ...post,
  author: 'Cartera Team',
  ...articleDetails[post.slug],
}));

export function getBlogPost(slug: string) {
  return blogPostsEnhanced.find(post => post.slug === slug);
}
