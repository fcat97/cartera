import { absoluteUrl, GOOGLE_PLAY_URL, SITE_DESCRIPTION } from './site';

export function generateSiteSchema() {
  const home = absoluteUrl('/');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization', '@id': `${home}#publisher`, name: 'UqabMedia',
        url: home, logo: { '@type': 'ImageObject', url: absoluteUrl('/icon.png') },
      },
      {
        '@type': 'WebSite', '@id': `${home}#website`, name: 'Cartera', url: home,
        description: SITE_DESCRIPTION, inLanguage: 'en', publisher: { '@id': `${home}#publisher` },
      },
    ],
  };
}

export function generateAppSchema() {
  const home = absoluteUrl('/');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage', '@id': `${home}#webpage`, url: home,
        name: 'Cartera — Your money, organized for real life.', description: SITE_DESCRIPTION,
        isPartOf: { '@id': `${home}#website` }, mainEntity: { '@id': `${home}#app` }, inLanguage: 'en',
      },
      {
        '@type': 'MobileApplication', '@id': `${home}#app`, name: 'Cartera',
        applicationCategory: 'FinanceApplication', operatingSystem: 'Android',
        description: SITE_DESCRIPTION, url: home, downloadUrl: GOOGLE_PLAY_URL,
        image: absoluteUrl('/icon.png'), publisher: { '@id': `${home}#publisher` },
        screenshot: [
          absoluteUrl('/screenshots/books-and-pages-light.webp'),
          absoluteUrl('/screenshots/spending-analysis.webp'),
          absoluteUrl('/screenshots/monthly-budget.webp'),
        ],
        featureList: ['Expense and income records', 'Books and notebook pages', 'Budgets', 'Savings goals', 'Loan records', 'Shared financial records'],
      },
    ],
  };
}

interface ArticleStructuredData {
  '@context': string;
  '@type': string;
  headline: string;
  description: string;
  image: string;
  datePublished: string;
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
  const baseUrl = absoluteUrl('/');
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    image: absoluteUrl(imageUrl),
    datePublished: new Date(datePublished).toISOString(),
    author: {
      '@type': 'Organization',
      name: 'Cartera Team',
      url: baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'UqabMedia',
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/icon.png'),
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': absoluteUrl(`/blogs/${slug}`),
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
  const baseUrl = absoluteUrl('/');
  
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
        item: absoluteUrl('/blogs'),
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: blogTitle,
        item: absoluteUrl(`/blogs/${blogSlug}`),
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
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: blogPosts.map((post, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: absoluteUrl(`/blogs/${post.slug}`),
      name: post.title,
    })),
  };
}
