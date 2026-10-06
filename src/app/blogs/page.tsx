import { BlogCard } from '@/components/blog-card';
import { blogPosts } from '@/lib/blog-data';
import { blogPostsEnhanced } from '@/lib/blog-data-enhanced';
import { generateBlogListSchema } from '@/lib/structured-data';
import { BookText } from 'lucide-react';
import { createPageMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';

export const metadata = createPageMetadata({
  title: 'Expense Tracking & Budget Planning Guides',
  description: 'Cartera guides cover expense tracking, budget planning, and financial recordkeeping, with tutorials and app comparisons.',
  path: '/blogs',
});

export default function BlogsPage() {
  const blogListSchema = generateBlogListSchema(
    blogPostsEnhanced.map(post => ({ slug: post.slug, title: post.title }))
  );

  return (
    <>
      <JsonLd data={blogListSchema} />
      
      <div className="py-8 sm:py-12">
      {/* Header Section */}
      <section className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
          <BookText className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Expert tips, guides, and insights to help you master your finances and get the most out of Cartera.
        </p>
      </section>

      {/* Blog Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {blogPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </section>
    </div>
    </>
  );
}
