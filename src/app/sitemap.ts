import type { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-data';
import { absoluteUrl } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl('/'), lastModified: '2026-10-06' },
    { url: absoluteUrl('/blogs'), lastModified: '2026-10-06' },
    { url: absoluteUrl('/privacy-policy'), lastModified: '2026-01-25' },
    { url: absoluteUrl('/terms-and-conditions'), lastModified: '2026-01-25' },
    // Publication dates are not evidence of later edits. Omit unknown modification dates.
    ...blogPosts.map(post => ({ url: absoluteUrl(`/blogs/${post.slug}`) })),
  ];
}
