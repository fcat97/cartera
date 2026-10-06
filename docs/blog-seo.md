# Blog SEO

The blog listing and all four articles use the same article data and shared page-metadata builder. Titles receive the site's suffix once; descriptions, canonical URLs, Open Graph URLs, large Twitter cards, image dimensions, and author metadata are emitted in static HTML.

Article images use root-relative public paths and absolute metadata/schema URLs. Article `BlogPosting` data identifies the visible title, description, publication date, image, author, publisher, and canonical page. `BreadcrumbList` matches the visible navigation; the listing's `ItemList` uses the same titles and URLs as its cards. JSON-LD escapes `<` so article content cannot close the script element.

The comparison article's card and metadata use its existing visible publication date, 15 January 2026. Unknown article modification dates are omitted rather than presented as today's date. The sitemap derives article routes from the blog data. The site-wide publisher remains UqabMedia.

`npm run build` followed by `npm run seo:check` verifies the exported pages. The Pages workflow runs the check before uploading the artifact. See [SEO verification and publication](seo-testing-guide.md) for live checks and Search Console submission.

Historical article content was retained. App comparison prices, ratings, superlatives, release claims, and other time-sensitive details require an editorial fact-check before treating them as current. This implementation does not promise ranking gains, guarantee rich results, or submit URLs to search accounts.
