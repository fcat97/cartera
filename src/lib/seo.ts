import type { Metadata } from 'next';
import { absoluteUrl } from './site';

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  image?: { url: string; width: number; height: number; alt: string };
  article?: { publishedTime: string; author: string };
}

export function createPageMetadata({ title, description, path, image, article }: PageMetadataOptions): Metadata {
  const url = absoluteUrl(path);
  const socialTitle = path === '/' ? title : `${title} | Cartera`;
  const preview = image ?? {
    url: '/social-preview.png', width: 1200, height: 630,
    alt: 'Cartera expense tracker and budget planner for Android.',
  };
  const social = {
    title: socialTitle, description, url, siteName: 'Cartera', locale: 'en_US',
    images: [{ ...preview, url: absoluteUrl(preview.url) }],
  };

  return {
    title: path === '/' ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    ...(article ? { authors: [{ name: article.author }] } : {}),
    openGraph: article
      ? { ...social, type: 'article', publishedTime: article.publishedTime, authors: [article.author] }
      : { ...social, type: 'website' },
    twitter: {
      card: 'summary_large_image', title: socialTitle, description,
      images: [{ url: absoluteUrl(preview.url), alt: preview.alt }],
    },
  };
}
