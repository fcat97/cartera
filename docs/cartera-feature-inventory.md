# Cartera feature inventory

Prepared 6 October 2026 from the website revamp brief, reviewed against Android source version 3.4.01. Each feature has two descriptive lines for the website. The inventory covers feature families rather than every individual editing action.

## Everyday records

| Feature | Description line 1 | Description line 2 | Brief evidence |
| --- | --- | --- | --- |
| Books & pages | Notebook spaces for months, trips, and projects. | Related pages belong together in books. | §4.3 |
| Expenses & income | Everyday spending and earnings in one record. | Amounts, dates, and accounts stay connected. | §4.1 |
| Quick & prompt entry | Compact fields or structured prompt input. | Suggested details remain editable before saving. | §4.2 |
| Accounts & sub-accounts | Cash, cards, bank, and mobile banking records. | Sub-accounts add another layer of organization. | §4.5 |
| Transfers & exchanges | Money movements between recorded accounts. | Both sides appear in balances and statements. | §4.1, §4.6 |
| Multiple currencies | Currency-specific records and balances. | Spending analysis retains its currency context. | §4.6 |
| Loans & repayments | Money lent and borrowed, organized by contact. | Repayments and history accompany each loan. | §4.7 |
| Tags & notes | Categories and context alongside transactions. | Tagged records connect to budgets and analysis. | §4.1, §4.12 |

## Planning & perspective

| Feature | Description line 1 | Description line 2 | Brief evidence |
| --- | --- | --- | --- |
| Flexible budgets | Weekly, monthly, and yearly spending limits. | Overall and category progress show what remains. | §4.8 |
| Savings goals | Targets, deadlines, and regular saving plans. | Emergency funds and future costs have a place too. | §4.9 |
| Scheduled expenses | Due dates and recurrence for expected costs. | Payment records and reminders follow each period. | §4.10; reminders depend on device permissions |
| Planned spending | To-do pages hold intended expenses. | Completed items connect to transaction entry. | §4.4 |
| Dashboard & charts | Summaries and trends across recorded activity. | Period breakdowns reveal spending patterns. | §4.11 |
| Search & filters | Transaction search with flexible filter chips. | Matching records explain the figures behind totals. | §4.11 |
| Statements & history | Account statements and balance history. | Related movements keep their financial context. | §4.5, §4.11 |
| Connected accounting | A double-entry foundation connects records. | Account movements and balances belong together. | §4.18 |

## Personal by design

| Feature | Description line 1 | Description line 2 | Brief evidence |
| --- | --- | --- | --- |
| Local & offline records | Personal records live in the app’s local database. | Everyday recordkeeping is available offline. | §4.16 |
| Backup & restore | Local backup files preserve personal records. | Restore is available during app setup. | §4.16 |
| App password & lock | Password protection for access to the app. | Automatic lock timing fits recording habits. | §4.17; some guest restrictions |
| Language & preferences | App language, currency, and entry defaults. | Daily entry reminders support a regular habit. | §4.17; reminders depend on device permissions |

## Connected possibilities

These online capabilities depend on eligible access, usage allowances, and service configuration. Recognition results remain editable. AI uses external providers. Groups use one configured currency, updates require internet access, and record visibility depends on permissions.

| Feature | Description line 1 | Description line 2 | Brief evidence |
| --- | --- | --- | --- |
| Cloud sync | Personal records synchronized across Android devices. | Sync status reflects available online access. | §4.16; conditional |
| Voice & image entry | Recognition from voice notes and selected images. | Extracted transaction details remain editable. | §4.2, §4.13; conditional |
| Cartera assistant | Record lookups and summaries through chat. | Supported records and plans can be created or edited. | §4.13; conditional |
| Automatic tagging | AI category tags for eligible transactions. | Availability follows configuration and allowances. | §4.12; conditional |
| Shared costs & settlements | Group expenses with equal or custom shares. | Recorded settlements explain who owes whom. | §4.14A; conditional |
| Shared funds | Contributions and expenses in a group fund. | Balances and activity connect members’ records. | §4.14B; conditional |
| Dues & collections | Recurring charges and full or partial payment records. | Member and customer statements show what is owed. | §4.14C; conditional |
| Group access & history | Membership and permissions shape shared access. | Group activity preserves a shared financial record. | §4.14, §4.15; conditional; excludes unverified advanced flows |

## Release checks and exclusions

The earlier website’s eight cards are represented here by books/pages, connected accounting, dashboard/charts, budgets, app lock, backup/restore, and cloud sync. Its blanket “unlimited everything (free)” and “bank-level security” claims are not supported by the brief’s release evidence and are excluded.

Advanced campaigns, approval policies and thresholds, group receipt attachments, and purpose allocation are source-backed but require verification in the production app before they receive individual marketing claims (§4.15). They are not advertised as separate available features in this section.

Upcoming or unverified tax tools, live currency rates, PDF/Excel reports, spreadsheet formulas, bill calendars, recurring income automation, envelope/rollover budgeting, local AI, and iOS/web clients remain outside this inventory (§5). Bank records and payment records do not imply bank connectivity or payment processing.

## Presentation

The homepage shows all 28 feature titles in compact, pale cards on a white background. Six columns on desktop reduce to four, three, and two as the available width decreases. Each title links to its description on `/features`; a single “See details” link opens the full collection. The overview contains no descriptions or screenshots.

The dedicated features page presents description cards in the four groups above. Four columns on desktop become three, two, and one on smaller screens. Each card includes its two-line summary and an additional source-backed explanation. Online access conditions appear alongside the online group, with feature-specific constraints in the relevant descriptions. Header and footer Features links point to the dedicated page; the homepage’s Explore the features link still targets the compact overview.
