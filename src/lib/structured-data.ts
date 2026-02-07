interface ArticleStructuredData {
  '@context': string;
  '@type': string;
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: {
    '@type': string;
    name: string;
    url: string;
  };
  publisher: {
    '@type': string;
    name: string;
    logo: {
      '@type': string;
      url: string;
    };
  };
  mainEntityOfPage: {
    '@type': string;
    '@id': string;
  };
  keywords: string;
}

export function generateArticleSchema(
  slug: string,
  title: string,
  description: string,
  datePublished: string,
  keywords: string[],
  imageUrl: string
): ArticleStructuredData {
  const baseUrl = 'https://cartera.app';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    image: `${baseUrl}${imageUrl}`,
    datePublished: datePublished,
    dateModified: datePublished,
    author: {
      '@type': 'Organization',
      name: 'Cartera Team',
      url: baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Cartera',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/icon.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/blogs/${slug}`,
    },
    keywords: keywords.join(', '),
  };
}

interface BreadcrumbStructuredData {
  '@context': string;
  '@type': string;
  itemListElement: Array<{
    '@type': string;
    position: number;
    name: string;
    item: string;
  }>;
}

export function generateBreadcrumbSchema(
  blogTitle: string,
  blogSlug: string
): BreadcrumbStructuredData {
  const baseUrl = 'https://cartera.app';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${baseUrl}/blogs`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: blogTitle,
        item: `${baseUrl}/blogs/${blogSlug}`,
      },
    ],
  };
}

interface BlogListStructuredData {
  '@context': string;
  '@type': string;
  itemListElement: Array<{
    '@type': string;
    position: number;
    url: string;
    name: string;
  }>;
}

export function generateBlogListSchema(
  blogPosts: Array<{ slug: string; title: string }>
): BlogListStructuredData {
  const baseUrl = 'https://cartera.app';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: blogPosts.map((post, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${baseUrl}/blogs/${post.slug}`,
      name: post.title,
    })),
  };
}
