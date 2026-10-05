# Cartera website revamp

The draft follows the approved ivory, forest-green, and notebook visual direction. It keeps the existing Next.js static-export architecture and Google Play download route. Deployment has not been performed.

## What changed

- Marketing copy describes the product’s capabilities and benefits in declarative language. Feature sections and FAQs focus on the offering; action labels remain clear.
- Rebuilt the homepage around everyday finances, books and pages, accounts, recording and analysis, budgets, savings goals, scheduled expenses, loans, and the three shared-finance jobs.
- Added nearby access and connectivity notes for collaboration, cloud sync, voice/images, and the assistant. External AI processing is disclosed beside the assistant story.
- Added responsive navigation, keyboard focus and skip navigation, expandable FAQs, reduced-motion support, and contact validation.
- The contact form opens a properly encoded email draft. It never claims a message was delivered. Visitors send it in their email app; a direct email link is also provided.
- Kept blog and legal URLs and existing legal text. Updated metadata, sitemap, robots, blog canonicals, and structured-data URLs to https://cartera.yellowbytes.dev.
- Used the existing app icon, an optimized real Analysis capture, locally hosted DM Sans and Fraunces fonts with OFL licenses, and a social preview.

## Assets

- public/icon.png: copied from appCartera/src/main/icon.png in the Android repository.
- public/screenshots/analysis.webp: optimized copy of the existing /tmp/planit-analysis-overview.png capture. Its matching UI hierarchy identifies media.uqab.cartera.dev; it shows USD analysis and no names, contacts, or account identifiers. This is a development-build capture, not verification of the current Play release. The owner should approve the dataset and confirm/replace it against the releasable build before publication.
- The notebook, budget, and savings graphics are HTML/CSS explanations, labeled as illustrative examples, rather than app screenshots.
- public/fonts/: Google Fonts Latin subsets and original OFL license files.
- public/social-preview.png: 1200 × 630 brand preview with no ratings or review claims.
- docs/previews/cartera-desktop.png and cartera-mobile.png: screenshots of the running draft.

## Review before publication

1. Confirm features available in the current public Android build, especially advanced group flows.
2. Confirm current plans, usage allowances, and access to collaboration, sync, AI, voice, images, and automatic tagging. The homepage includes no pricing table or free/unlimited claim.
3. Approve a current app screenshot with a fictional dataset. The development capture is useful for review, but production availability remains unverified.
4. Confirm media.uqab@gmail.com, inherited from existing legal pages, is monitored. The draft uses an email action, not a server-delivered contact submission. A hosted submission service needs a real destination and delivery verification.
5. Confirm publisher attribution and review existing privacy/terms for current cloud, collaboration, and AI processing. Existing legal content has been preserved.
6. Existing blog copy predates this revamp. The app-comparison article contains historical prices, ratings, and launch wording, and the getting-started article mentions budget alerts. These need editorial verification before publication; this change preserves their content and routes.

## Local commands

    npm ci
    npm run dev
    npm run typecheck
    npm test
    npm run build

The dev server runs on port 9002. The build produces a static site in out/.

## Verification

- TypeScript typecheck and the contact-email test passed. The test checks that delimiter-like text cannot add recipients or email headers.
- The production build passed with all pages statically exported; lint remains skipped by the existing build configuration.
- Browser checks covered desktop and widths 320, 375, 390, 650, 768, 900, 1024, and 1440; mobile download visibility; Google Play links and section anchors; menu close behavior; FAQ expansion; contact validation and email-draft feedback; existing routes and local assets; footer links; and reduced motion.
- The homepage had no automated WCAG A/AA violations in axe-core checks, no browser script errors, and no failed asset requests.
- An independent read-only review found no critical or important issues.
