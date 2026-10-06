import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

// Check the actual static artifact; no browser, credentials, or extra dependency required.
const output = resolve('out');
assert.ok(existsSync(resolve(output, 'sitemap.xml')), 'Run npm run build before checking SEO');
const sitemap = readFileSync(resolve(output, 'sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => new URL(match[1]));
assert.ok(urls.length > 0, 'The sitemap must contain pages');
const origin = urls[0].origin;
assert.equal(new Set(urls.map(url => url.href)).size, urls.length, 'Sitemap URLs must be unique');
const robots = readFileSync(resolve(output, 'robots.txt'), 'utf8');
assert.ok(!/Disallow:\s*\/_next\/?/i.test(robots), 'Crawlers need the rendering assets under /_next/');
assert.ok(robots.includes(`Sitemap: ${origin}/sitemap.xml`), 'Robots must reference the canonical sitemap');

function attributes(tag) {
  return Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, key, value]) => [key, value]));
}

function localAsset(value) {
  const url = new URL(value);
  assert.equal(url.origin, origin, `Asset belongs to an unexpected domain: ${value}`);
  assert.ok(existsSync(resolve(output, `.${decodeURIComponent(url.pathname)}`)), `Missing image: ${value}`);
}

const titles = new Set();
const descriptions = new Set();
const pagePaths = new Set(urls.map(url => url.pathname));
for (const url of urls) {
  assert.equal(url.origin, origin, 'All sitemap pages must use the canonical domain');
  const file = url.pathname === '/' ? 'index.html' : `${url.pathname.slice(1)}.html`;
  assert.ok(existsSync(resolve(output, file)), `Sitemap points to a missing page: ${url.href}`);
  const html = readFileSync(resolve(output, file), 'utf8');
  const head = html.match(/<head>([\s\S]*?)<\/head>/)?.[1];
  assert.ok(head, `${file} needs a rendered head`);
  const title = head.match(/<title>(.*?)<\/title>/)?.[1];
  assert.ok(title && !titles.has(title), `${file} needs a unique title`);
  assert.ok(!/\| Cartera \| Cartera/.test(title), `${file} duplicates the site name suffix`);
  titles.add(title);
  const meta = [...head.matchAll(/<meta\b[^>]*>/g)].map(match => attributes(match[0]));
  const value = key => meta.find(tag => tag.name === key || tag.property === key)?.content;
  const description = value('description');
  assert.ok(description && !descriptions.has(description), `${file} needs a unique description`);
  descriptions.add(description);
  const canonicals = [...head.matchAll(/<link\b[^>]*>/g)].map(match => attributes(match[0])).filter(tag => tag.rel === 'canonical');
  assert.equal(canonicals.length, 1, `${file} needs one canonical URL`);
  assert.equal(new URL(canonicals[0].href).href, url.href, `${file} canonical must match the sitemap`);
  assert.equal(new URL(value('og:url')).href, url.href, `${file} needs its own Open Graph URL`);
  assert.ok(value('og:title') && value('og:description') && value('og:site_name'), `${file} needs complete social metadata`);
  assert.equal(value('twitter:card'), 'summary_large_image', `${file} needs a large social preview`);
  localAsset(value('og:image'));
  localAsset(value('twitter:image'));
  assert.ok(!meta.some(tag => tag.name === 'robots' && /noindex|nofollow/.test(tag.content)), `${file} blocks indexing`);
  assert.equal([...html.matchAll(/<h1\b/g)].length, 1, `${file} needs one primary heading in its HTML`);

  const schemas = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].flatMap(match => {
    const schema = JSON.parse(match[1]);
    assert.equal(schema['@context'], 'https://schema.org');
    return schema['@graph'] ?? [schema];
  });
  assert.ok(schemas.some(schema => schema['@type'] === 'WebSite'), `${file} needs website identity`);
  if (url.pathname === '/') {
    const app = schemas.find(schema => schema['@type'] === 'MobileApplication');
    assert.ok(app, 'The homepage needs factual application structured data');
    assert.equal(app.operatingSystem, 'Android');
    assert.equal(app.applicationCategory, 'FinanceApplication');
    assert.equal(app.offers, undefined, 'Unverified prices must not enter structured data');
    assert.equal(app.aggregateRating, undefined, 'Unverified ratings must not enter structured data');
    assert.equal(new URL(app.downloadUrl).searchParams.get('id'), 'media.uqab.cartera');
    localAsset(app.image);
  } else if (url.pathname.startsWith('/blogs/')) {
    const article = schemas.find(schema => schema['@type'] === 'BlogPosting');
    assert.ok(article, `${file} needs article structured data`);
    assert.equal(article.mainEntityOfPage['@id'], url.href);
    localAsset(article.image);
    assert.ok(html.includes(`dateTime="${new Date(article.datePublished).toISOString()}"`), `${file} publication dates must match visible content`);
    const breadcrumb = schemas.find(schema => schema['@type'] === 'BreadcrumbList');
    assert.equal(breadcrumb?.itemListElement.at(-1).item, url.href, `${file} needs matching breadcrumbs`);
  } else if (url.pathname === '/features') {
    const collection = schemas.find(schema => schema['@type'] === 'CollectionPage');
    assert.equal(collection?.url, url.href, 'The feature collection needs its own canonical identity');
    const list = collection.mainEntity;
    assert.equal(list?.['@type'], 'ItemList', 'The feature collection needs a structured feature list');
    assert.equal(list.numberOfItems, list.itemListElement.length, 'The feature count must match the structured list');
    assert.ok(list.numberOfItems > 0, 'The feature collection must contain features');
    for (const item of list.itemListElement) {
      const featureUrl = new URL(item.url);
      assert.equal(featureUrl.origin + featureUrl.pathname, url.href, 'Feature URLs must belong to their collection');
      assert.ok(featureUrl.hash && html.includes(`id="${featureUrl.hash.slice(1)}"`), `Missing feature description: ${item.name}`);
    }
    const breadcrumb = schemas.find(schema => schema['@type'] === 'BreadcrumbList');
    assert.equal(breadcrumb?.itemListElement.at(-1).item, url.href, 'The feature collection needs matching breadcrumbs');
  }

  for (const [, rawHref] of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
    if ((!rawHref.startsWith('/') && !rawHref.startsWith('#')) || rawHref.startsWith('//')) continue;
    const href = new URL(rawHref, url);
    assert.ok(pagePaths.has(href.pathname) || existsSync(resolve(output, `.${href.pathname}`)), `${file} links to a missing route: ${rawHref}`);
    if (href.hash) {
      const targetFile = href.pathname === '/' ? 'index.html' : `${href.pathname.slice(1)}.html`;
      const targetHtml = href.pathname === url.pathname ? html : readFileSync(resolve(output, targetFile), 'utf8');
      assert.ok(targetHtml.includes(`id="${decodeURIComponent(href.hash.slice(1))}"`), `${file} links to a missing section: ${rawHref}`);
    }
  }
  console.log(`PASS ${url.pathname}: metadata, canonicals, images, headings, structured data, internal links`);
}
const notFound = readFileSync(resolve(output, '404.html'), 'utf8');
assert.ok(/name="robots" content="[^"]*noindex/.test(notFound), 'The 404 page must remain unindexed');
console.log(`PASS: ${urls.length} indexable pages, sitemap, robots, and 404 indexing policy`);
