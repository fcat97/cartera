# Cartera — App Details and Website Revamp Handoff

Prepared: 5 October 2026  
Current website: https://cartera.yellowbytes.dev/  
Android download: https://play.google.com/store/apps/details?id=media.uqab.cartera  
Repository version reviewed: 3.4.01, version code 30401

## 1. Purpose and how to use this brief

Revamp Cartera's promotional website using the product description, feature inventory, suggested copy, and website structure below. The website should help visitors understand the app, recognize a use case that fits them, and download it from Google Play.

This brief is grounded in the current Android source, English store-listing files, bundled release notes, and the existing website, retrieved on the date above. It is a content and product handoff; it does not establish that every implementation in the repository has reached the public Play release. No device walkthrough or production entitlement audit was performed.

Feature status used throughout:

| Status | Meaning for the website agent |
|---|---|
| **Implemented** | Present in the current app source and connected to a user-facing flow. Suitable for the proposed feature inventory; verify against the downloadable build before publication. |
| **Conditional** | Implemented, but access depends on subscription entitlements, remote configuration, connectivity, permissions, or sufficient transaction history. Explain relevant conditions. |
| **Experimental / upcoming** | Debug-only, explicitly marked coming soon, or present without a confirmed user entry point. Keep out of claims about available features. |
| **Unverified commercial claim** | Pricing, free allowances, guarantees, or similar claims that source inspection cannot settle. Obtain current product information before publishing. |

The website recommendations are editorial proposals, not additional app features. The feature descriptions below are the product facts to work from.

## 2. Product identity

**Public name:** Cartera. The Play listing title is “Cartera: Expense Tracker.” Use Cartera consistently in website copy, metadata, navigation, and screenshots.

**Internal project name:** PlanIt. This is the repository and theme name, not the name to introduce to prospective customers.

**Platform:** Android, with an existing Google Play download link. Do not display an App Store badge or imply an iOS, browser, or desktop version is available.

**Product category:** Expense tracker, budget planner, money manager, loan tracker, and shared-finance organizer.

**Core concept:** A financial notebook with calculation and planning built in. People organize transactions into pages and books, track balances across accounts, plan spending and saving, and keep personal or group records together.

**Suggested positioning:**

> Your money, organized for real life.

**One-sentence description:**

> Cartera helps you track expenses, income, loans, budgets, savings goals, and shared finances in a flexible financial notebook.

**Short app description:**

> Keep everyday money organized with Cartera. Record spending and income, separate your records into pages, track accounts and loans, and plan budgets, savings goals, and upcoming payments. Use voice, images, or the Cartera assistant when available on your plan, and keep shared costs and collections clear with collaborative ledgers.

**Full app description:**

> Cartera is an Android money manager that brings everyday financial records into one organized place. Its notebook-style pages let you separate a household budget, a trip, a freelance project, or a small-business cash book while keeping your account balances connected.
>
> Record expenses, income, transfers, and currency exchanges. Add notes and tags, track money lent or borrowed, review account statements, and explore your financial activity through summaries, trends, and category breakdowns. Choose a quick transaction form or a prompt-style input, with voice and image entry available according to your plan.
>
> Plan what comes next with weekly, monthly, and yearly budgets, flexible savings goals, and scheduled expenses. Set a savings target, work toward a deadline, build a regular habit, or estimate an emergency fund from your own financial history. Review upcoming and unpaid bills, record payments against the right period, and follow your progress over time.
>
> For shared finances, Cartera supports records for people who pay separately and settle together, groups that maintain a shared fund, and organizers who collect payments from members or customers. Shared balances, payment histories, statements, and permission controls help participants understand the records relevant to them.
>
> Personal records use local storage, with local backup and a restore flow. Cloud sync, collaboration, and AI services use online features with access determined by the current configuration and plan. An app password and configurable automatic lock help keep financial screens private on your device.

## 3. Who the app is for

| Audience | Their job | Features to emphasize |
|---|---|---|
| Individuals | Keep track of everyday money and understand spending | Quick entry, accounts, tags, analysis, budgets |
| Couples and families | Organize household spending and upcoming costs | Household pages, budgets, scheduled expenses, shared records |
| Friends and travelers | Record a trip and work out who owes whom | Trip pages, expense splits, settlements, currency records |
| Roommates | Keep shared groceries, rent, and utility costs clear | Shared expenses, unequal shares, balances, collections |
| Freelancers | Separate projects and review income and costs | Books and pages, income tracking, tags, account statements |
| Small-business owners | Maintain a straightforward cash book and outstanding balances | Accounts, transaction records, loans, customer collections |
| Clubs and communities | Maintain a shared fund and collect dues transparently | Contributions, recurring dues, member statements, approvals |
| People saving for a goal | See a target, a practical pace, and progress | Savings presets, milestones, required contributions, estimated finish |

Lead the home page with everyday personal finances. Introduce group use cases as a second major story, with advanced collections and treasury capabilities explained further down or on a dedicated page.

## 4. Complete feature inventory

### 4.1 Expense, income, transfer, and exchange records

**Status: Implemented.**

- Record expenses and income against your accounts.
- Record transfers between accounts.
- Record currency exchanges with both currencies reflected in balances and statements.
- Set an amount, currency, label, date/time, account, tags, page associations, and an optional note as applicable to the transaction type.
- Edit and delete records through the app's transaction flows.
- Keep draft transactions separate from completed activity. Analysis excludes drafts.
- Link related transactions through parent/child relationships where the transaction flow supports them.
- Use a default page and default currency to reduce repeated choices.

**Benefit:** Keep different kinds of money movement in one system without treating an account transfer as new income or spending.

**Suggested copy:** “Track what you spend, earn, move, and exchange.”

Do not describe recordkeeping as bank connectivity or a payment service. Selecting a bank account in Cartera is not evidence of automatic bank imports or a connection to the user's bank.

### 4.2 Two ways to enter transactions

**Status: Implemented; voice and image enhancements are conditional.**

- **Quick input:** A compact transaction entry flow for structured entry.
- **Prompt input:** A text field with suggestions and editable chips for transaction details.
- Prompt controls support amount, currency, tags, time, accounts, page selection, transaction type, and drafts.
- Users choose their preferred input mode in settings.
- Recognized voice/image results can be reviewed and edited before saving.

**Benefit:** People can use the entry style that fits their habits.

**Suggested copy:** “Add a transaction your way: quick fields, a prompt, voice, or an image.”

Do not suggest that every plain-text prompt is an unrestricted AI conversation. The structured prompt field and the AI assistant are distinct experiences.

### 4.3 Books, pages, and notebook-style organization

**Status: Implemented.**

- Create pages for a month, trip, project, household, event, or another context.
- Group pages into named books.
- Create, rename, and organize books and pages.
- Move a page between books.
- Link pages and view linked records.
- Archive and unarchive pages.
- Use draft pages where appropriate.
- Associate a budget with a page and review progress alongside its transactions.
- Share a page as text through the existing page-sharing action.

**Benefit:** Keep the context of each transaction visible rather than forcing every record into one undifferentiated list.

**Suggested copy:** “A page for every part of your life.”

Example pages: “October expenses,” “Cox's Bazar trip,” “Home renovation,” and “Client project.” These are example user-created labels, not built-in templates.

### 4.4 To-do pages for planned spending

**Status: Implemented.**

- Create a to-do page for planned transaction items.
- Add, edit, and remove items with their amounts and related details.
- Set a reminder date where supported by the item flow.
- Complete an item through transaction entry, recording the expense and removing the to-do item.

**Benefit:** Keep a purchase or payment intention separate from money already spent.

**Suggested copy:** “Plan a purchase, then turn it into a recorded expense.”

Keep this as a supporting financial feature. Do not position Cartera as a general project-management or task-management product.

### 4.5 Accounts and sub-accounts

**Status: Implemented.**

- Maintain account records for cash, bank accounts, debit cards, credit cards, and mobile banking.
- Use account types and names to identify where money is recorded.
- Track account balances and transaction statements.
- Create sub-accounts under a parent account for finer organization.
- Deactivate and reactivate accounts through supported account flows.
- Use an existing account or a newly created account to hold a savings goal's recorded money.
- Review account balance history and net balance over time.

**Benefit:** See money by account and organize smaller pots without losing the broader context.

**Suggested copy:** “Keep cash, cards, bank accounts, and savings organized.”

Account and savings balances are records maintained by the app. Cartera does not physically hold, transfer, or invest money on the user's behalf.

### 4.6 Multi-currency tracking

**Status: Implemented.**

- Choose a base currency and use other supported currencies in transaction records.
- Select currencies throughout relevant transaction and planning flows.
- Record both sides of a currency exchange.
- Review currency-specific balances and statements.
- Scope transaction analysis to a selected currency.

**Benefit:** Record spending and money movement across currencies without losing which currency an amount belongs to.

**Suggested copy:** “Track money across currencies.”

Do not promise a live exchange-rate dashboard, trading, remittance, or guaranteed real-time conversion. The standalone **Currency Rate** quick link currently shows “Coming Soon.” Personal multi-currency support also does not establish multi-currency support inside a single collaboration group; groups use one configured currency.

### 4.7 Loans, debts, and contacts

**Status: Implemented.**

- Record money lent and borrowed.
- Associate loan records with contacts.
- Use the dedicated Loan Management screen to review loan-related activity grouped by person.
- Record a loan without selecting a contact; unnamed loans are grouped together and can be identified later.
- Follow related repayment records and loan history through the transaction flow.

**Benefit:** Keep a clear record of money owed to you and money you owe others.

**Suggested copy:** “Remember who owes you—and what you owe.”

Do not imply credit scoring, lending approval, debt collection, automated interest calculations, or bank loan servicing.

### 4.8 Budgets

**Status: Implemented.**

- Set weekly, monthly, or yearly budgets.
- Create a budget for one period or a repeating budget.
- Use an overall spending limit or limits by category/tag.
- See current spending, remaining room, progress, average daily spending, and estimated expense.
- Pin a budget for convenient access from the dashboard.
- Attach an existing budget to a page and see its progress with page activity.
- Open budget details and inspect contributing transactions.
- Review unusual expenses flagged by the budget flow.
- Exclude a transaction from a particular budget without excluding it from every other budget.
- Review ended budgets with their dates and final totals.

**Benefit:** Compare spending with your plan while retaining control over one-off expenses that should be evaluated separately.

**Suggested copy:** “Budgets that make your spending easier to judge.”

The existing website and store text mention budget alerts. This review confirmed progress displays and unusual-expense review, but did not establish threshold push notifications. Use “see when spending approaches your limit” unless the shipping build verifies proactive notifications. Do not promote envelope funding, rollover, or automatic cash allocation based solely on roadmap documents.

### 4.9 Flexible savings goals

**Status: Implemented; history-based calculations require sufficient records.**

The goal creator offers five starting points:

| Starting point | What a user can plan |
|---|---|
| **Just Saving** | Save toward an amount, a date, or both at their own pace; add milestones. |
| **Before a Date** | Reach a target by a deadline, optionally with a calculated pace that adjusts as progress changes. |
| **Regular Saving** | Save a fixed amount or a percentage of recorded income each period, with optional target/deadline. |
| **Emergency Fund** | Set a target from a number of months of recorded expenses or income. |
| **Recurring Expense** | Build a pot for a cost that returns each cycle. |

Supporting capabilities:

- Weekly, monthly, quarterly, and yearly contribution periods.
- Fixed, flexible, or minimum contribution expectations where applicable.
- Amount already saved, with the source account recorded.
- A destination account for the savings records.
- Contributions and withdrawals through transaction entry.
- Saved amount, remaining amount, progress, and time left.
- Required or average contribution and estimated finish where the goal supports them.
- On-track, ahead, behind, reached, completed, and overdue states as applicable.
- Named milestones, contribution history, and a regular-saving streak where applicable.
- Complete and reopen goals.
- Advance a repeating goal to its next cycle, optionally recording the expense.

**Benefit:** A savings goal can fit an uncertain income, a firm deadline, a habitual contribution, or a recurring future cost.

**Suggested copy:** “A savings plan that fits the way you save.”

Explain percentage-of-income saving as a contribution expectation calculated from recorded income. Do not imply automatic bank withdrawals, automatic investing, or guaranteed completion. Shared goal funding across people or multiple destination accounts is not established by the personal goal creator reviewed here.

### 4.10 Scheduled expenses and reminders

**Status: Implemented; notifications depend on device permissions and configuration.**

- Create scheduled expenses with an amount, due date or recurring cadence, and an optional reminder.
- Support fixed dates and recurring daily, weekly, monthly, or yearly schedules.
- See upcoming, due, and overdue unpaid occurrences.
- Record payments against the relevant occurrence, including missed or upcoming periods.
- Distinguish paid occurrences from unpaid ones.
- Revise a scheduled expense's amount or due day without discarding earlier versions.
- Review the schedule's revision history.
- Complete, resume, edit, or delete supported plans.
- Set a separate daily expense-entry reminder at a chosen time in settings.

**Benefit:** Keep expected bills and the periods actually paid visible.

**Suggested copy:** “Keep upcoming payments and missed periods in view.”

“Pay” in these screens means record a payment. Do not imply that Cartera sends money to a biller, automatically debits an account, or provides a released month-grid bill calendar. The calendar view appears in roadmap material.

### 4.11 Dashboard, search, and transaction analysis

**Status: Implemented.**

- Review financial summaries and charts on the home dashboard and relevant detail screens.
- Open **Analysis** to filter and inspect completed transactions.
- Build and edit a query with filter chips and transaction search.
- See income, expense, net amount, and transaction count for matching activity.
- Review daily, weekly, and monthly trends.
- Inspect a period in the chart.
- Explore grouped breakdowns, ranked amounts, counts, and shares.
- Tap supported breakdown groups to refine the analysis.
- Use a currency selector to scope the analysis consistently.
- Review account statements and balance history for an account-level view.

**Benefit:** Move from a total to the transactions that explain it.

**Suggested copy:** “See the pattern. Find the details.”

Analysis treats transfers and exchanges separately from income and expense. Tag/group memberships can overlap, so grouped totals do not always form mutually exclusive slices. Use actual app results in screenshots rather than inventing totals to fit a chart.

### 4.12 Tags and automatic categorization

**Status: Manual tags implemented; automatic tagging conditional.**

- Add tags to organize and find transactions.
- Use tags/categories in budgets and transaction analysis.
- Use editable tag suggestions in prompt input.
- Background AI tagging can apply ordinary category tags to eligible records when enabled for the authenticated user and permitted by service configuration and quota.

**Benefit:** Make records easier to retrieve and compare by category.

**Suggested copy:** “Organize transactions with tags, with AI categorization when available.”

Do not promise immediate categorization of every transaction or an unrestricted free allowance. Automatic tagging is a service-controlled background capability and is less suitable as a hero claim until production availability is confirmed.

### 4.13 Voice, image entry, and the Cartera assistant

**Status: Conditional.**

**Voice and images:** Record a voice note or select/crop an image for supported recognition flows. Review extracted transaction details and save recognized records. These flows reduce typing; they still require users to check the result.

**Assistant:** Ask questions about your Cartera records and perform supported actions in chat. The implemented tools cover transaction lookup and totals, record creation and editing, accounts, books, pages, to-do items, budgets, plans, and savings goals. Text, voice, and image attachments are supported according to entitlements.

Examples for website storytelling:

- “How much did I spend this month?”
- “Show my budget status.”
- “Lunch 450 from Cash.”
- “Create a savings goal for a new laptop.”

These are illustrative requests, not promises of an exact transcript or result.

Other implemented assistant behavior:

- Preview and confirmation cards for destructive or sensitive actions such as deleting, moving, or deactivating supported records.
- Undo for eligible changes while the relevant records have not changed further.
- Visible AI allowance and reset information.
- Responses can follow the user's language, as described in the release notes.
- A clear privacy notice before the conversation.

**Benefit:** Ask about your own financial records and reduce the steps involved in supported app actions.

**Suggested copy:** “Ask Cartera about your money.”

Important conditions: AI availability, allowances, voice access, and image access depend on the plan and remote configuration. These services need connectivity. Messages and data retrieved to answer them are sent to AI providers such as OpenAI and Google, as disclosed in the app. Do not claim on-device AI, private local model execution, unlimited AI, professional financial advice, or autonomous access to the user's bank. Bring-your-own-model support is described as a future direction in the app notice, not a released capability.

### 4.14 Shared finances: three main jobs

**Status: Conditional; substantial implementations exist in the current source. Verify release and server availability before prominently marketing advanced flows.**

#### A. Settle together

People pay separately, record the costs, and see who should pay whom.

- Create a group and add participants.
- Record personally paid expenses.
- Choose which participants share a cost.
- Use equal or custom splits.
- Review balances and settlement obligations.
- Record settlements and review activity history.

**Examples:** Friends' trips, roommate bills, group outings, family events.

**Suggested copy:** “Shared costs. Clear balances.”

#### B. Shared fund

People contribute to one recorded pot and track spending from it.

- Record contributions and group-funded expenses.
- Review the shared balance and activity.
- Record where group money is held using cash locations.
- Record movement between cash locations without treating it as new money for the group.
- Handle personally paid costs and supported reimbursement flows where appropriate.
- Organize money by purpose and inspect purpose reports.

**Examples:** Clubs, mess households, event funds, community projects, office petty cash.

**Suggested copy:** “One shared fund, a clear record of every contribution and expense.”

The shared fund is a ledger of money held elsewhere, not a Cartera bank account or escrow service.

#### C. Collect from people

An organizer records charges, payments, and outstanding balances for members or customers.

- Maintain a member/customer roster.
- Create charges and record full or partial payments.
- Review each person's statement and outstanding balance.
- Allocate payments oldest-first, manually, or as credit through the available flows.
- Handle supported waivers, write-offs, charge cancellation, and credit refunds.
- Use recurring collections and inspect individual collection periods.
- Share reminders through supported channels such as WhatsApp and SMS.
- Close periods and review statement history.

**Examples:** Membership dues, tuition records, rent/seat fees, customer balances, organizational collections.

**Suggested copy:** “Know what was charged, paid, and still outstanding.”

Do not imply payment processing, automatic bank collection, a complete invoicing system, or inventory management.

### 4.15 Advanced group controls, campaigns, and evidence

**Status: Conditional; verify these source-backed flows in the production build before publishing individual claims.**

- Group setup options include trips, shared funds, monthly dues, voluntary fundraisers, customer collections, and a simple starting group.
- One-off levies and voluntary fundraising campaigns have separate flows and reporting.
- Fundraisers can have a target/end date. Voluntary non-contributors do not become overdue merely because they did not contribute.
- Campaign summaries distinguish collected, spent, remaining, and outstanding amounts as applicable.
- Group membership, invitations, and configurable capabilities govern who can do what.
- Confirmation and approval queues keep pending actions distinct from confirmed records.
- Approval policies support configured approvers and thresholds.
- Purpose allocation and reallocation flows support more detailed group fund organization.
- Receipt/document attachment flows associate evidence with group events.
- Event details and history preserve a record of activity and supported corrections.
- Shared statements and period/campaign closure help organizers review the outcome.

**Benefit:** Provide a traceable shared record when several people contribute, spend, approve, or collect money.

**Suggested copy:** “Keep the group record clear, from the first contribution to the final statement.”

Limits that must remain visible in feature explanations:

- Collaboration writes require connectivity in the current baseline; cached reading is distinct from offline editing.
- A collaboration group uses one currency, locked after its first confirmed entry.
- Visibility depends on permissions; avoid promising that every participant sees every record.
- Recording, approving, confirming, and actually paying are different states.
- Attachments are optional evidence, not a prerequisite for every money record.
- Do not call this certified accounting, regulated custody, or guaranteed fraud prevention.

### 4.16 Local records, backups, and cloud sync

**Status: Local storage and backup/restore implemented; cloud sync conditional.**

- Personal records are maintained in a local database.
- Create a local backup through the system file picker.
- Restore a local backup through the onboarding/setup flow, including backup verification and progress feedback.
- Use the implemented cloud synchronization system when entitled and configured.
- Review sync status through the relevant app flow.

**Benefit:** Keep an exportable backup and, when available, synchronize personal records between Android devices.

**Suggested copy:** “Keep a local backup. Sync across devices when you need it.”

The settings-screen restore item is commented out, while onboarding has an active restore path. Describe restore accurately; do not advertise a one-tap restore button in Settings. Local backup export is different from a polished PDF/Excel transaction report, which is currently marked upcoming.

The existing site says sync is Pro; newer store text says “Start free.” Entitlements are remotely configured. Neither statement alone settles the current free sync allowance or pricing. Publish a plan comparison only after checking the live offering.

### 4.17 App lock, language, and preferences

**Status: Implemented, with some actions restricted in guest mode.**

- Set an app password.
- Configure automatic lock timing.
- Choose a default currency, default page, and transaction input mode.
- Set the daily expense-entry reminder.
- Choose the device language or an in-app language preference.
- The source includes English, Arabic, Bangla, German, Spanish, French, Hindi, Indonesian, Brazilian Portuguese, and Turkish.
- Access support/contact and account-management actions through the app.
- Guest mode exists, with restrictions on some creation, security, and online features.

**Benefit:** Make the app fit the user's language, recording habits, and device privacy needs.

**Suggested copy:** “Your language. Your defaults. Your financial notebook.”

Before claiming all ten languages are fully launch-ready, check current translation coverage and Arabic RTL readiness. Do not copy “no restart needed” from the store description: the current settings implementation recreates the Activity when language changes. Do not promise biometric unlock or device-level encryption based on the password-lock feature.

### 4.18 Accounting foundation and free core

**Status: Accounting implementation and public listing claims reviewed; commercial scope requires confirmation.**

The public product story describes double-entry accounting as the foundation of Cartera's records. Present it as a structural benefit that connects account movements and balances, with notebook simplicity as the main user experience.

**Suggested copy:** “Notebook simplicity, with connected financial records underneath.”

The English store listing describes unlimited accounts, pages, and transactions in the free core. Use that wording only after confirming the current released offering. It does not establish unlimited cloud storage, AI, collaboration, attachment uploads, or other online services.

Avoid “error-free,” “always accurate,” “professional accountant replacement,” or claims that every user's records must balance correctly regardless of input.

## 5. Features and claims to exclude from the launch story

| Item | Finding | Website treatment |
|---|---|---|
| Tax calculator | Opens in debug builds with sample rule packs; release quick link says coming soon | Omit from available features |
| Standalone Currency Rate tool | Quick link says coming soon | Omit; retain the separate, implemented multi-currency tracking story |
| Document report export | `exportReport()` returns “Coming Soon” | Omit PDF/Excel report promises; local backup export and page text sharing are separate |
| Formula/spreadsheet screen | Screen and engine exist, but this review found route registration without a confirmed user launch action | Treat as experimental until a shipping entry flow is verified |
| Bill calendar, recurring-income automation, envelope funding/rollover, auto-save rules, round-up saving, automatic recurring-expense detection | Roadmap documents exist; this review did not establish released end-to-end features | Do not promote merely because a roadmap file exists |
| Own/local AI model | Mentioned as future work in the assistant privacy notice | Do not present as available |
| Offline collaboration writes | Baseline supports online writes and cached reads | Do not claim groups can add/edit money records offline |
| iOS/web/desktop app | Not established by this Android repository | No platform badges or browser-app CTA |
| Automatic bank sync, bill payment, cards issued by Cartera, investing, credit scoring | Not established | Omit |
| “Bank-level security,” “never lose data,” “restore in seconds,” “instant sync,” “unlimited everything” | Existing marketing wording exceeds the evidence reviewed | Replace with specific, defensible descriptions |
| User counts, ratings, testimonials, savings statistics, rankings | No verified evidence collected | Do not invent social proof |

Do not build a pricing table from generic sample benefit strings in subscription UI code. Examples such as project/storage limits or premium articles are not a verified Cartera offering.

## 6. Current website audit

The current home page includes a hero, eight feature cards, reasons to choose Cartera, a Google Play download section, privacy/terms links, and a contact form. It links to `/blogs`, `/privacy-policy`, and `/terms-and-conditions`.

### Keep and strengthen

- The familiar notebook/page concept.
- Personal and small-business examples.
- A prominent Google Play CTA.
- The free core story, once current scope is checked.
- Local backup, app lock, and synchronization described accurately.
- Existing blog and legal URLs.

### Add

- Current app screenshots that explain the interface and important user journeys.
- Savings goals and their flexible starting points.
- Scheduled expenses, missed periods, and schedule revisions.
- Loans and the dedicated Loan Management screen.
- Currency exchanges and Analysis.
- Voice/image input and the assistant, with access conditions.
- Three distinct shared-finance stories: settle together, shared fund, collections.
- A simple “How it works” section and practical FAQs.
- A clearer distinction between free local recordkeeping and online services.

### Rewrite

- “Advance Notepad-Style…” → natural language such as “Your money, organized for real life.”
- “Unlimited Everything (Free!)” → specifically identify the verified unlimited core resources.
- “Bank-Level Security” → explain app password and automatic lock.
- “Error-free tracking” → describe connected records without guaranteeing perfect outcomes.
- “Real-time alerts” → use the verified budget progress behavior unless notifications are demonstrated.
- “Everyone sees the same numbers” → describe a shared record with access determined by permissions.

The existing footer names **UqabMedia**, while the domain uses **yellowbytes.dev**. Confirm the public company/publisher attribution before changing it. Do not infer ownership from the domain name.

## 7. Recommended website structure

Start with a focused promotional home page. Use expandable feature groups or supporting pages for the advanced inventory so the home page remains readable on a phone.

| Order | Section | What it should communicate |
|---|---|---|
| 1 | Navigation | Cartera logo, Features, Shared finances, FAQ, Blog, Google Play CTA |
| 2 | Hero | Main promise, short description, real app screenshot, download action |
| 3 | How it works | Create accounts/pages → record money → review and plan |
| 4 | Notebook organization | Books, pages, accounts, and practical examples |
| 5 | Spending and analysis | Easy entry, tags, trends, and drill-down |
| 6 | Plan ahead | Budgets, savings goals, and scheduled expenses |
| 7 | Loans and shared finances | Who owes whom; the three group models |
| 8 | AI assistance | Voice/image entry and assistant with conditional availability |
| 9 | Data and privacy | Local records, backup, app lock, cloud/AI disclosures |
| 10 | Plans | Verified free-core scope and online options; omit prices until confirmed |
| 11 | FAQ | Answer practical product/access questions |
| 12 | Final CTA and footer | Google Play, Blog, Contact, Privacy, Terms, verified publisher |

Optional supporting routes: `/features`, `/shared-finances`, and `/help`. These are proposed website pages, not existing routes or a request to build a new app backend.

## 8. Suggested website copy

### Hero

**Eyebrow:** Expense tracking, planning, and shared finances

**Headline:** Your money, organized for real life.

**Description:** Track everyday spending, plan your next goal, and keep shared costs clear. Cartera brings accounts, notebook-style pages, budgets, and loans into one Android app.

**Primary CTA:** Get it on Google Play  
**Secondary CTA:** Explore the features

Avoid unverified badges such as “Trusted by 50,000 people” or “100% secure.”

### Feature cards

| Title | Copy |
|---|---|
| A page for every part of life | Separate a trip, household budget, or project into its own page, then organize your pages into books. |
| Add money records your way | Use quick entry or a prompt. Voice and image entry are available according to your plan. |
| Know where your money goes | Explore income, expenses, trends, and breakdowns, then inspect the transactions behind them. |
| Make a plan for spending | Set overall or category budgets and follow your progress through the week, month, or year. |
| Save at your own pace | Work toward a target, a date, a regular habit, or an emergency fund based on your history. |
| Keep payments in view | Track scheduled expenses, unpaid periods, and the payments you record against them. |
| Keep loans clear | Record money lent and borrowed, with contacts and a dedicated loan overview. |
| Make shared money easier to follow | Split costs, keep a shared fund, or track collections with balances and statements. |

### Savings section

**Headline:** A goal can start with an amount, a date, or a habit.

**Body:** Save for something specific or build a buffer for the unexpected. Choose a target, set a pace, or let Cartera calculate the contribution needed for a deadline. Add money, see your progress, and adjust as life changes.

### Shared-finance section

**Headline:** Keep the shared record clear.

**Body:** Whether friends paid separately, a club maintains one fund, or an organizer collects dues, Cartera helps keep contributions, costs, and outstanding balances understandable.

**Three labels:** Settle together · Shared fund · Collect from people

### AI section

**Headline:** Ask Cartera about your money.

**Body:** Check spending, review budgets, and manage supported records by chat. Use voice or an image when available, and review recognized details before saving.

**Access note:** AI features require an eligible plan and connectivity. Messages and relevant data are processed by external AI providers.

### Data section

**Headline:** Keep your records within reach.

**Body:** Create a local backup, restore it during setup, and use cloud sync when available on your plan. Add an app password and choose when Cartera locks automatically.

### Final CTA

**Headline:** Give your money a place to make sense.

**Body:** Start organizing your everyday finances with Cartera for Android.

**Button:** Get it on Google Play

## 9. FAQ copy

**What is Cartera?**  
Cartera is an Android expense tracker and money manager for everyday records, budgets, savings goals, loans, and shared finances.

**How are pages different from accounts?**  
Accounts record where money is held or moves. Pages group records by context, such as a month, trip, or project. Books organize pages.

**Can I use more than one currency?**  
Yes. Cartera supports currency-specific records and exchanges. A collaboration group uses one configured currency.

**Can I track money I lent or borrowed?**  
Yes. Record loans and review their activity in Loan Management. You can attach a contact or record the person later.

**Can I plan savings without a fixed deadline?**  
Yes. Goals can use an amount, a date, a regular contribution, or a history-based target. The available progress measures depend on the goal you choose.

**Does Cartera move money for me?**  
Cartera records money movements and payments. Account transfers, contributions, and settlements in the app are records of financial activity, not a banking or payment service.

**Does it work offline?**  
Personal records use local storage. Cloud sync and AI need connectivity. Current collaboration writes require an internet connection; cached reading is a separate capability.

**Can I back up and restore my records?**  
Yes. Create a local backup from the app and restore a backup through setup. Cloud synchronization is available according to the current plan and service configuration.

**Is Cartera free?**  
The public listing describes a free core with unlimited accounts, pages, and transactions. Online services may have plan requirements or usage allowances. Verify the current offering and replace this answer with the confirmed commercial wording before launch.

**How does the AI assistant handle my data?**  
Messages and the data retrieved to answer them are processed by external AI providers, as disclosed in the app. AI access and usage limits depend on the current plan and configuration.

**Can groups use it for dues and collections?**  
The current source includes shared expenses, shared funds, recurring collections, charges, payments, and statements. Confirm the intended release's enabled group features before publishing this answer as a launch promise.

**Is there an iPhone or browser app?**  
The verified download route in this brief is the Android app on Google Play. Do not claim additional platforms without an official released product link.

The two answers with explicit verification instructions are draft handoff copy, not text to publish verbatim.

## 10. Screenshots and visual direction

Use the actual Cartera icon from `appCartera/src/main/icon.png` and screenshots of the current releasable app. App styling references are in `DESIGN.md` and `feature/coreAndroid`.

Suggested screenshot sequence:

| Frame | Show | Caption |
|---|---|---|
| 1 | Home dashboard with sample records | Your everyday money, at a glance |
| 2 | Books/pages and a trip/project page | A page for every part of life |
| 3 | Quick/prompt transaction entry | Record spending your way |
| 4 | Budget progress and category limits | Make a plan for spending |
| 5 | Savings goal with target and progress | Turn a goal into a plan |
| 6 | Scheduled expense with unpaid occurrences | Keep upcoming payments in view |
| 7 | Loan Management or Analysis | Find the details behind your balances |
| 8 | Enabled collaboration flow | Keep shared money clear |
| 9 | Enabled assistant conversation | Ask Cartera about your money |

Use a consistent fictional dataset. Keep amounts, dates, currencies, and labels consistent across frames. Never expose real contacts, receipts, account numbers, or conversation history.

Design direction: a calm, legible financial notebook. Give real app screens room to explain the product. Draw visual cues from Cartera's pages, cards, chips, progress indicators, and planning colors. Avoid generic finance illustrations replacing the interface, decorative graphs that imply nonexistent functionality, or heavy animation that makes the download path harder to find.

The HTML wireframes under `docs/collab_page/` and tax prototypes are design references, not proof of the released app interface. Do not use tax prototype screenshots as promotional app screenshots.

## 11. Website requirements and acceptance criteria

- Every download button links to the existing Google Play URL.
- The primary promise and download action are clear without scrolling on mobile.
- Visitors can understand accounts versus pages without learning accounting jargon.
- Budgets, savings goals, scheduled expenses, loans, and the three shared-finance jobs are represented accurately.
- Plan-dependent features have nearby access notes rather than a blanket “everything free” claim.
- Prices, trial durations, limits, ratings, and testimonials come from verified current information.
- Preserve `/blogs`, `/privacy-policy`, and `/terms-and-conditions`, or provide correct redirects if the existing site architecture changes.
- Keep legal pages and support reachable from every page. Link existing legal content; do not silently generate replacement legal terms from this marketing brief.
- Confirm the contact form sends to a monitored destination and provides working success/error feedback. The store contact file contains a no-reply address, so it should not be assumed to be a support inbox.
- Use accessible heading order, contrast, visible keyboard focus, meaningful screenshot alternative text, and large enough touch targets.
- Respect reduced-motion preferences and optimize image size and layout stability.
- Check all internal links, download links, navigation, mobile layouts, and contact submissions before handoff.
- Use descriptive metadata and an appropriate social preview. Do not invent review/rating structured data.
- If conversion measurement is requested, define actual events such as Google Play CTA clicks. Do not claim app installs from website clicks alone.

Suggested SEO title: **Cartera — Expense Tracker, Budgets & Shared Finances**

Suggested meta description: **Track expenses, loans, budgets, savings goals, and shared costs with Cartera. Organize your money in notebook-style pages. Available for Android.**

## 12. Publication facts still needing confirmation

These checks resolve product facts before launch; the next agent can design and draft from this brief while they are gathered.

1. Which repository features are included and enabled in the current public Google Play build?
2. Current subscription names, regional prices, trial terms, free allowances, and access to sync, collaboration, voice, images, assistant, and automatic tagging.
3. Whether any proactive budget threshold notification is enabled in that build.
4. Which advanced group flows are intended to be promoted prominently at launch.
5. Current translation coverage and Arabic RTL readiness.
6. Correct public publisher/company attribution and a monitored support destination.
7. Current privacy policy accuracy for cloud, collaboration, and AI processing.
8. Approved screenshots, icon/brand assets, and any real testimonials or ratings the owner wants to use.

Unconfirmed items should not prevent producing a reviewable website draft. Use precise conditional descriptions or leave the relevant pricing/social-proof module out until the facts are supplied.

## 13. Repository evidence index

Paths are relative to the repository root. Prefer live source and shipping release notes when older design documents or marketing text conflict.

| Area | Source |
|---|---|
| Public name and app description | `appCartera/store-listing/en-US/title.txt`, `short_description.txt`, `full_description.txt` |
| Version | `appCartera/version.properties` |
| Latest product additions | `appCartera/src/main/assets/changelog/30401.html`, `30400.html`, `30303.html` |
| Main app sections | `feature/libCartera/src/main/kotlin/media/uqab/libCartera/presentation/feature/home/HomeTabs.kt` |
| Accounts and transaction types | `feature/libCartera/src/main/kotlin/media/uqab/libCartera/domain/model/TrxAccountType.kt`, `TrxType.kt` |
| Accounts and sub-accounts | `feature/libCartera/src/main/kotlin/media/uqab/libCartera/presentation/feature/account_all/DialogEditAccount.kt` |
| Pages and sharing | `feature/libCartera/src/main/kotlin/media/uqab/libCartera/presentation/feature/page_details/PageDetailsScreen.kt` |
| To-do pages | `feature/libCartera/src/main/kotlin/media/uqab/libCartera/presentation/feature/page_details/todo_page/` |
| Input modes and defaults | `feature/libCartera/src/main/kotlin/media/uqab/libCartera/presentation/feature/settings/SettingsScreen.kt` |
| Budgets | `feature/libCartera/src/main/kotlin/media/uqab/libCartera/domain/model/BudgetPlan.kt`, `presentation/feature/budget/` |
| Savings starting points | `feature/libCartera/src/main/kotlin/media/uqab/libCartera/feature/plan_saving/presentation/goal_create/GoalPreset.kt` |
| Savings details | `feature/libCartera/src/main/kotlin/media/uqab/libCartera/feature/plan_saving/presentation/goal_detail/SavingGoalDetailScreen.kt` |
| Scheduled expenses | `feature/libCartera/src/main/kotlin/media/uqab/libCartera/presentation/feature/plan/PlanningScreen.kt`, `ScheduledExpenseCard.kt`, `ScheduledExpenseRow.kt` in the same directory |
| Analysis | `feature/libCartera/src/main/kotlin/media/uqab/libCartera/feature/analysis/presentation/AnalysisSections.kt`, `presentation/feature/filter/FilterScreen.kt` |
| Loans | `feature/libCartera/src/main/kotlin/media/uqab/libCartera/presentation/feature/loan_management/LoanManagementScreen.kt` |
| Statements and balance history | `feature/libCartera/src/main/kotlin/media/uqab/libCartera/presentation/feature/account_state/AccountStatementScreen.kt`, `presentation/feature/balance_history/BalanceHistoryScreen.kt` |
| Assistant capabilities | `feature/libCartera/src/main/kotlin/media/uqab/libCartera/feature/agent/domain/tools/`, `feature/libCartera/src/main/kotlin/media/uqab/libCartera/feature/agent/presentation/AgentChatScreen.kt` |
| AI privacy and status text | `feature/libCartera/src/main/res/values/strings.xml` — `agent_privacy_note`, `agent_locked_body`, quota and availability strings |
| Automatic tagging | `feature/libCartera/src/main/kotlin/media/uqab/libCartera/feature/auto_tagging/` |
| Plan gating | `feature/libCartera/src/main/kotlin/media/uqab/libCartera/domain/inapp/subscription/Entitlement.kt` |
| Collaboration implementation | `feature/libCartera/src/main/kotlin/media/uqab/libCartera/feature/collab/ui/`, `feature/libCartera/src/main/kotlin/media/uqab/libCartera/feature/collab/domain/` |
| Collaboration product vocabulary and constraints | `docs/collab_page/collaboration-use-case-catalogue.md`, `collaboration-mobile-ux-phased-design-brief.md` |
| Restore entry point | `feature/libCartera/src/main/kotlin/media/uqab/libCartera/presentation/feature/onboarding/OnBoardingScreen.kt` |
| Coming-soon tools | `feature/libCartera/src/main/kotlin/media/uqab/libCartera/presentation/feature/settings/SettingsScreen.kt`, `SettingsViewModel.kt` |
| Debug-only tax data | `feature/libCartera/src/main/kotlin/media/uqab/libCartera/feature/tax/data/AssetTaxGraphRepository.kt` |
| Languages | `feature/libCartera/src/main/kotlin/media/uqab/libCartera/domain/model/AppLanguage.kt`, `appCartera/store-listing/README.md` |
| Visual foundations | `DESIGN.md`, `feature/coreAndroid/`, `appCartera/src/main/icon.png` |

## 14. Copy-and-paste prompt for the website agent

> Revamp the promotional website at https://cartera.yellowbytes.dev/ for **Cartera**, the Android expense tracker and money manager. Read `docs/cartera-website-revamp-brief.md` as the product/content handoff. If you cannot access that repository file, use the attached contents of the brief.
>
> The goal is to help visitors understand the product and download it from https://play.google.com/store/apps/details?id=media.uqab.cartera. The public brand is Cartera; PlanIt is the internal repository name.
>
> Build the page around “Your money, organized for real life.” Explain notebook-style books/pages, expenses and income, accounts and sub-accounts, tags, transfers and currency exchanges, budgets, flexible savings goals, scheduled expenses, loans, and transaction analysis. Present shared finances through three clear jobs: settle together, maintain a shared fund, and collect payments from people. Introduce voice/image entry and the Cartera assistant with the correct access and data-processing notes.
>
> Use real app screenshots and the existing app icon. Make the page clear, responsive, accessible, and fast. Include a prominent Google Play CTA, how-it-works section, practical feature stories, FAQs, and reachable contact/legal links. Preserve the existing blog, privacy, and terms URLs or their redirects. Check the contact form actually works.
>
> Follow the brief's status distinctions. Repository implementation is not proof that a feature is enabled in the public release. Confirm live prices, plan access, and release availability before publishing. Do not invent ratings, testimonials, download counts, unlimited online services, security guarantees, bank connections, or other platforms. Tax calculation, standalone currency-rate tools, document report export, and unverified roadmap features must not appear as available features. Personal multi-currency records and local backup are implemented and distinct from those upcoming tools.
>
> Start by inspecting the existing website project and identifying content and asset changes. Produce a complete, reviewable revamp using the source-backed facts in the brief and precise conditional wording where access is still unconfirmed. Keep publication/deployment as a separate step requiring the owner's instruction. Provide the finished draft, changed files, verification results, and any unresolved publication facts.
