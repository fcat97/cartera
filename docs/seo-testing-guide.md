# SEO verification and publication

Canonical site: https://cartera.yellowbytes.dev/. Implementation checked 6 October 2026.

## Local verification

```bash
npm test
npm run build
npm run seo:check
```

Run the build with the development server stopped: both use `.next/`. Restart `npm run dev` after production verification. The export is in `out/`.

The SEO check reads the exported HTML, sitemap, and robots.txt. It verifies unique titles and descriptions, matching canonical and Open Graph URLs, local social images, one primary heading per page, parseable JSON-LD, factual app metadata, article publication dates, breadcrumbs, internal links and section anchors, and an unindexed 404 page. The `/features` collection also checks its structured feature count and description anchors. CI runs this check before uploading the Pages artifact. It does not simulate Google indexing or assign a Lighthouse score.

## Publication checks

1. Deploy the checked `out/` artifact to the canonical domain. Confirm HTTPS and that unknown routes return a real HTTP 404 rather than the homepage. Check that each sitemap page returns HTTP 200 and that CSS, JavaScript, fonts, and images load.
2. Inspect [robots.txt](https://cartera.yellowbytes.dev/robots.txt) and [sitemap.xml](https://cartera.yellowbytes.dev/sitemap.xml). Rendering assets under `/_next/` must be crawlable. Only actual public pages belong in the sitemap.
3. In the verified [Google Search Console](https://search.google.com/search-console) property for this domain, submit `https://cartera.yellowbytes.dev/sitemap.xml`. Use URL Inspection for the homepage and four article URLs. Account ownership and deployment are required; these actions are not performed by the local implementation.
4. Use [Rich Results Test](https://search.google.com/test/rich-results) for the deployed articles. Validate general app/site schema with [Schema Markup Validator](https://validator.schema.org/). Inspect rendered content and canonical selection in Search Console.
5. Check previews with [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) and [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/). The homepage uses `social-preview.png`; articles use their own 1200 × 600 images.
6. Measure the deployed homepage and articles with [PageSpeed Insights](https://pagespeed.web.dev/). Address measured regressions rather than assuming a score from local checks. Monitor Search Console impressions, clicks, indexing, and Core Web Vitals after publication.

## Known boundaries

App price and ratings are unverified, so they are omitted from structured data. The application schema describes the product, but it does not currently meet all of Google's software-app rich-result requirements. Existing historical blog comparisons, prices, ratings, and product-release claims still need editorial verification. Legal text remains the existing owner's content.

No indexing timeline or ranking increase is promised. Search engines choose snippets, canonical URLs, and result presentation. No new analytics tracker, ownership token, or account connection was added.

## Sources

- [Google: JavaScript SEO and crawlable rendering assets](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)
- [Google: canonical URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [Google: sitemap creation and modification dates](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Google: article structured data](https://developers.google.com/search/docs/appearance/structured-data/article)
- [Google: software-app rich-result requirements](https://developers.google.com/search/docs/appearance/structured-data/software-app)
- [Next.js: safe JSON-LD rendering](https://nextjs.org/docs/app/guides/json-ld)
