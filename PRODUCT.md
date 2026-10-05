# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

This repository is Cartera’s promotional website. The product it describes is an Android app; a mobile website is not a released browser version of that app.

## Users

The primary audience is people organizing everyday personal money: spending, income, accounts, budgets, and savings.

Other audiences established by the product brief include couples and families, friends and travelers, roommates, freelancers, small-business owners, clubs and communities, and people saving for a goal. Their jobs include keeping household costs clear, separating a trip or project, recording money owed, maintaining a shared fund, and following collections.

## Product Purpose

Help visitors understand Cartera, recognize a practical use case, and download the Android app from Google Play.

Cartera helps people record and organize expenses, income, loans, budgets, savings goals, upcoming costs, and shared finances. Website success means clearer understanding and a usable path to Google Play. A website download click is not proof of an app installation.

## Positioning

“Your money, organized for real life.”

The product is a financial notebook with calculation and planning built in. Pages group financial records by context; books organize pages; accounts record where money is held or moves. These concepts should remain understandable without accounting jargon.

## Operating Context

- The website is built with Next.js App Router, React, TypeScript, and Tailwind and exports static files to out/.
- The existing development command is npm run dev, using port 9002.
- Visitors may evaluate the website on a phone or desktop before using the Android app.
- Personal app records use local storage. Cloud sync, AI, and collaboration rely on online services with access conditions.
- Cartera records financial activity. It does not hold, send, invest, or automatically debit money for users.
- Public website: https://cartera.yellowbytes.dev/.
- Verified download route: https://play.google.com/store/apps/details?id=media.uqab.cartera.

## Capabilities and Constraints

The supplied Android-source brief establishes implementation evidence for:

- Expenses, income, transfers, currency exchanges, editable records, drafts, notes, and tags.
- Quick entry and prompt-style transaction input.
- Books, pages, linked records, archive flows, and planned-spending to-do pages.
- Accounts, sub-accounts, balances, statements, and balance history.
- Budgets with overall or category limits and spending progress.
- Flexible savings goals based on amounts, dates, regular contributions, recorded financial history, or recurring future costs.
- Scheduled expenses, unpaid occurrences, recorded payments, and permission-dependent reminders.
- Loan records, contacts, and repayment history.
- Completed-transaction analysis, filters, search, trends, and breakdowns.
- Local backup and restore during setup, an app password, and configurable automatic lock.

Conditional capabilities include cloud sync, collaboration, voice/image recognition, the assistant, and automatic categorization. Access depends on plans, usage allowances, connectivity, service configuration, and sometimes permissions or sufficient records. AI messages, attachments, and relevant retrieved records are processed by external AI providers.

Shared finances have three distinct jobs: settle costs after people pay separately; maintain a shared fund; and track charges, recorded payments, and outstanding collections. Each group uses one configured currency. Record visibility depends on permissions. Current group writes require connectivity; cached reading is separate from offline editing.

Repository implementation is not proof of availability in the public Play release. Prices, free allowances, subscription names, trials, advanced group availability, full translation coverage, and release screenshot approval remain open facts.

Do not promote tax calculation, standalone currency-rate tools, document report export, unverified spreadsheet entry points, or roadmap features as released capabilities. Do not imply bank connectivity, payment processing, investing, credit scoring, biometric unlock, guaranteed accuracy, security certification, or released iOS/browser/desktop apps.

Preserve /blogs, /privacy-policy, and /terms-and-conditions, or provide correct redirects. Keep support and legal content reachable. Existing legal documents must not be silently replaced using the marketing brief.

## Brand Commitments

- The public name is Cartera; the Play listing identifies it as “Cartera: Expense Tracker.” PlanIt is an internal Android-project name.
- Preserve the actual app icon and the approved financial-notebook identity.
- Use direct, practical, understandable language tied to real everyday uses.
- Marketing copy describes Cartera’s capabilities and benefits in declarative language. Product sections describe the offering rather than instructing visitors or listing prohibitions. Buttons and essential form feedback retain clear action wording.
- Avoid unsupported superlatives, invented proof, blanket free/unlimited claims, or promises that records can never be lost.
- UqabMedia is the existing publisher attribution; changes need confirmed ownership information.

## Evidence on Hand

- docs/cartera-website-revamp-brief.md: the supplied product/content handoff, prepared 5 October 2026 against Android repository version 3.4.01. It distinguishes implemented, conditional, upcoming, and commercially unverified facts.
- docs/website-revamp-handoff.md: implementation notes, verification, asset provenance, and publication checks.
- src/app/page.tsx: the approved website draft and product explanations.
- public/icon.png: the actual Android app icon copied from appCartera/src/main/icon.png.
- public/screenshots/analysis.webp: a real development-build Analysis capture without names, contacts, or account identifiers. Its dataset and correspondence to the public release still need owner approval.
- docs/previews/: desktop and mobile captures of the website draft.
- Existing blog and legal content is retained. Historical blog ratings, prices, launch language, and budget-alert claims need editorial verification.
- No verified testimonials, review ratings, user counts, rankings, or savings statistics have been provided.
- media.uqab@gmail.com is inherited from existing legal content; whether it is currently monitored remains unconfirmed.
- The current contact form prepares an email draft. The visitor must send it in their email app; it is not a server-delivered submission service.

## Product Principles

1. Make ordinary financial recordkeeping understandable before introducing advanced group workflows.
2. Explain accounts and pages through their practical jobs: where money is recorded and what a record is for.
3. Keep product claims proportional to the evidence; disclose relevant access conditions beside conditional features.
4. Preserve the distinction between recording financial activity and moving actual money.
5. Make download, support, and legal information easy to reach.

## Accessibility & Inclusion

The brief requires accessible heading order, sufficient contrast, visible keyboard focus, meaningful screenshot alternatives, comfortable touch targets, responsive layouts, and reduced-motion support. Keep the primary promise and download action clear on mobile.

Optimize image weight and layout stability. Do not assume that the app’s source-language list proves complete translations or Arabic RTL readiness.

## Development Workflow

Commit the current work before making further changes, as requested by the owner. Use code-first implementation and retain Impeccable v4.3.1.
