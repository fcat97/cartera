# Quick SEO Testing Guide

## Testing Your Blog's SEO

### 1. Test Structured Data (JSON-LD)
Visit Google Rich Results Test:
- URL: https://search.google.com/test/rich-results
- Test each blog post URL:
  - `https://cartera.app/blogs/getting-started-with-cartera`
  - `https://cartera.app/blogs/budget-planning-tips`
  - `https://cartera.app/blogs/double-entry-bookkeeping-explained`
- Look for: ✅ BlogPosting schema ✅ BreadcrumbList schema

### 2. Verify Sitemap
- Visit: `https://cartera.app/sitemap.xml`
- Should show all blog posts with:
  - URLs
  - Last modified dates
  - Change frequencies
  - Priority values

### 3. Check Robots.txt
- Visit: `https://cartera.app/robots.txt`
- Should allow all crawlers except `/api/` and `/_next/`
- Should reference sitemap URL

### 4. Test Open Graph Tags
Use Open Graph debugger:
- Facebook: https://developers.facebook.com/tools/debug/
- LinkedIn: https://www.linkedin.com/post-inspector/
- Enter blog post URLs and verify:
  - ✅ Title displays correctly
  - ✅ Description shows
  - ✅ Featured image appears (1200x600)

### 5. Test Twitter Cards
- URL: https://cards-dev.twitter.com/validator
- Enter blog post URLs
- Verify: ✅ Summary large image card ✅ Title ✅ Description ✅ Image

### 6. Submit to Search Engines

#### Google Search Console
1. Go to: https://search.google.com/search-console
2. Add property: `cartera.app`
3. Verify ownership (via DNS or HTML file)
4. Submit sitemap: `https://cartera.app/sitemap.xml`
5. Request indexing for each blog post URL

#### Bing Webmaster Tools
1. Go to: https://www.bing.com/webmasters
2. Add site: `cartera.app`
3. Verify ownership
4. Submit sitemap: `https://cartera.app/sitemap.xml`
5. Request URL inspection for blog posts

### 7. Check Mobile-Friendliness
- URL: https://search.google.com/test/mobile-friendly
- Test all blog post URLs
- Verify: ✅ Mobile-friendly ✅ No errors

### 8. Test Page Speed
- URL: https://pagespeed.web.dev/
- Test blog listing and individual posts
- Target: ✅ 90+ score on mobile ✅ 95+ on desktop

### 9. Local Testing

```bash
# Start dev server
npm run dev

# Test URLs in browser
http://localhost:9002/blogs
http://localhost:9002/blogs/getting-started-with-cartera
http://localhost:9002/sitemap.xml
http://localhost:9002/robots.txt

# View page source and verify:
# - JSON-LD script tags present
# - Meta tags (title, description, og:*, twitter:*)
# - Canonical link tag
# - Semantic HTML (article, time, nav)
```

### 10. Monitor Rankings

#### After 2-4 Weeks
Check if blog posts appear for target keywords:
- "expense tracker tutorial"
- "budget planning tips 2026"
- "double-entry bookkeeping explained"
- "cartera getting started"
- "personal finance beginner guide"

#### Tools to Use
- Google Search Console (Performance report)
- Bing Webmaster Tools (SEO Reports)
- Google Analytics (Organic traffic)
- Ahrefs/SEMrush (Keyword tracking)

## Expected Timeline

- **Week 1**: Submit sitemaps, request indexing
- **Week 2-3**: Google/Bing start crawling and indexing
- **Week 4-6**: Posts appear in search results (lower positions)
- **Month 2-3**: Rankings improve as content gains authority
- **Month 4+**: Stable rankings for targeted keywords

## Quick Wins

1. Share blog posts on social media (creates backlinks)
2. Link to blog from email signatures
3. Reference blog posts in support articles
4. Add blog link to app footer/about pages
5. Cross-promote posts within the blog (internal linking)

## Common Issues & Fixes

### Issue: Structured data errors
- Fix: Validate JSON-LD syntax
- Check: All required fields present

### Issue: Not appearing in search
- Check: Submitted sitemap?
- Check: Robots.txt not blocking?
- Wait: Can take 2-4 weeks

### Issue: Low rankings
- Add: More internal links
- Update: Content regularly
- Build: External backlinks
- Improve: Content quality/length

### Issue: Poor mobile score
- Optimize: Image sizes
- Reduce: JavaScript bundle size
- Enable: Caching headers
