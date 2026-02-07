import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cartera.app';
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date('2026-01-25'),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: new Date('2026-01-25'),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ];

  // Blog posts
  const blogPosts = [
    {
      url: `${baseUrl}/blogs/getting-started-with-cartera`,
      lastModified: new Date('2026-02-01'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs/budget-planning-tips`,
      lastModified: new Date('2026-01-28'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs/double-entry-bookkeeping-explained`,
      lastModified: new Date('2026-01-25'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs/best-expense-tracking-apps-2026`,
      lastModified: new Date('2026-02-06'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
  ];

  return [...staticPages, ...blogPosts];
}
