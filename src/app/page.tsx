import Link from 'next/link';
import { ArrowRight, ArrowUpRight, BookOpen, NotebookPen, Wallet, ChartNoAxesColumnIncreasing, Plane, House, BriefcaseBusiness, ShoppingBasket, CalendarDays, CircleCheck, Handshake, Users, ReceiptText, Mic, ImagePlus, HardDrive, LockKeyhole, Cloud, Tags, Coins, Search, Plus, Minus } from 'lucide-react';
import { PlayStoreLink } from '@/components/play-store-link';
import { ContactForm } from '@/components/contact-form';
import { HeroScreenshotCarousel } from '@/components/hero-screenshot-carousel';
import { HomeMotion } from '@/components/home-motion';
import { SITE_DESCRIPTION, SITE_TITLE } from '@/lib/site';
import { createPageMetadata } from '@/lib/seo';
import { generateAppSchema } from '@/lib/structured-data';
import { JsonLd } from '@/components/json-ld';

export const metadata = createPageMetadata({ title: SITE_TITLE, description: SITE_DESCRIPTION, path: '/' });

const questions = [
  ['What is Cartera?', 'Cartera is an Android expense tracker and money manager that brings everyday records, budgets, savings goals, loans, and shared finances together in one financial notebook.'],
  ['How do pages and accounts fit together?', 'Accounts represent where money is held or moves: cash, a bank account, or a card. Pages organize records by context, such as a month, a trip, or a project. Books bring related pages together. Each transaction retains its account and its context.'],
  ['What multi-currency features are included?', 'Cartera supports currency-specific records, balances, and analysis, with both sides of a currency exchange represented in account statements. Each collaboration group uses one configured currency.'],
  ['What does Loan Management include?', 'Loan Management brings money lent, money borrowed, contact details, and related repayments into a dedicated overview. Loans can also be recorded before a contact is attached.'],
  ['What kinds of savings goals does Cartera support?', 'Savings goals support amounts, deadlines, regular contributions, history-based emergency funds, and recurring future costs. Progress measures reflect the type of goal and the financial records available.'],
  ['How are payments and transfers represented?', 'Transfers, savings contributions, bill payments, and group settlements are records of financial activity. Account balances reflect the amounts entered in Cartera, with related activity available in statements and history.'],
  ['Which features are available offline?', 'Personal records use local storage. Cloud sync, AI, and group updates are online features. Collaboration also supports cached reading of previously available records.'],
  ['What backup options are included?', 'Local backup creation and restore during setup are included in the app. Cloud synchronization between Android devices is available according to the current plan and service configuration.'],
  ['How does the assistant work with financial records?', 'The assistant provides transaction lookups, summaries, and supported record creation or editing through chat. Messages, attachments, and relevant records are processed by external AI providers. Recognized transaction details remain editable before saving.'],
  ['How is access to online features determined?', 'Cloud sync, collaboration, voice and image recognition, the assistant, and automatic tagging have access conditions determined by the current plan, usage allowances, and service configuration.'],
];

const everydayTools = [
  { icon: Wallet, title: 'Accounts & sub-accounts', body: 'Balances, statements, and history for cash, cards, bank accounts, and mobile banking records. Sub-accounts add finer organization under a parent account.' },
  { icon: Tags, title: 'Tags, notes & analysis', body: 'Tags and notes keep context with each record. Search, filters, trends, and breakdowns connect summary figures with the transactions behind them.' },
  { icon: Coins, title: 'Multi-currency records', body: 'Currency-specific records and analysis, with both sides of currency exchanges reflected in balances and statements.' },
  { icon: Handshake, title: 'Loans & repayments', body: 'Money lent and borrowed, organized by contact, with loan history and related repayments in Loan Management.' },
];

export default function Home() {
  return (
    <div className="home-page">
      <JsonLd data={generateAppSchema()} />
      <HomeMotion />
      <div className="section-band section-band--mint">
      <section className="hero site-shell" aria-labelledby="hero-title">
        <div className="hero-copy" data-motion="hero-ink">

          <h1 id="hero-title">Your money,<br />organized for<br /><span className="ink-underline">real life.</span></h1>
          <p className="hero-description">Cartera brings everyday spending, budgets, savings goals, and shared finances into one Android app. Notebook-style pages and connected accounts give every part of life its own place.</p>
          <div className="hero-actions">
            <PlayStoreLink />
            <a href="#features" className="text-link">Explore the features <ArrowRight size={18} aria-hidden="true" /></a>
          </div>
          <p className="availability">Available for Android <span aria-hidden="true">·</span> A place for everyday money</p>
        </div>
        <HeroScreenshotCarousel />
      </section>
      </div>

      <section className="how-it-works site-shell" aria-labelledby="how-title">
        <div className="section-heading">

          <h2 id="how-title">Everyday finances, brought together.</h2>
        </div>
        <div className="steps-grid">
          {[
            { icon: BookOpen, title: 'Books & pages', body: 'Notebook-style organization for months, trips, households, and projects.' },
            { icon: NotebookPen, title: 'Transaction records', body: 'Expenses, income, transfers, currency exchanges, and loans in one place.' },
            { icon: ChartNoAxesColumnIncreasing, title: 'Analysis & planning', body: 'Spending trends, budgets, savings goals, and scheduled expenses.' },
          ].map(({ icon: Icon, title, body }) => (
            <div className="step" key={title}>
              <Icon size={38} strokeWidth={1.3} aria-hidden="true" />
              <div><h3>{title}</h3><p>{body}</p></div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-band section-band--soft">
      <section id="features" className="notebook-section site-shell section-space" aria-labelledby="notebook-title">
        <div className="notebook-illustration" data-motion="pages" role="group" aria-label="Example notebook pages for home, travel, and a freelance project">
          <div className="book-spine"><BookOpen size={18} aria-hidden="true" /><span>The everyday book</span><span>3 pages</span></div>
          <div className="example-pages">
            <div className="paper-page paper-page--mint"><House size={24} strokeWidth={1.4} aria-hidden="true" /><span className="page-kicker">HOME</span><h3>October<br />expenses</h3><div className="page-entry"><span>Groceries</span><span>$120</span></div><div className="page-entry"><span>Utilities</span><span>$60</span></div><div className="page-entry"><span>Lunch</span><span>$15</span></div><span className="page-total">The everyday stuff.</span></div>
            <div className="paper-page paper-page--lilac"><Plane size={24} strokeWidth={1.4} aria-hidden="true" /><span className="page-kicker">TRAVEL</span><h3>Weekend<br />away</h3><div className="page-entry"><span>Train tickets</span><span>$40</span></div><div className="page-entry"><span>Stay</span><span>$85</span></div><div className="page-entry"><span>Coffee</span><span>$4</span></div><span className="page-total">The good memories.</span></div>
            <div className="paper-page paper-page--peach"><BriefcaseBusiness size={24} strokeWidth={1.4} aria-hidden="true" /><span className="page-kicker">WORK</span><h3>Client<br />project</h3><div className="page-entry"><span>Income</span><span>$500</span></div><div className="page-entry"><span>Materials</span><span>$25</span></div><div className="page-entry"><span>Travel</span><span>$12</span></div><span className="page-total">A little side hustle.</span></div>
          </div>
          <p className="illustration-caption">Illustrative pages and sample records</p>
        </div>
        <div className="feature-story">

          <h2 id="notebook-title">One life.<br />More than one page.</h2>
          <p>Cartera’s pages give a month, a household, a trip, or a project its own space. Books bring related pages together, while connected accounts retain the financial context behind each record.</p>
          <div className="account-page-explanation">
            <div><Wallet size={22} aria-hidden="true" /><p><strong>Accounts tell you where.</strong><br />Cash, a bank account, a card.</p></div>
            <div><BookOpen size={22} aria-hidden="true" /><p><strong>Pages tell you what for.</strong><br />Home, travel, work, and everything between.</p></div>
          </div>
          <p className="small-note">Notebook simplicity, with connected financial records underneath.</p>
        </div>
      </section>
      </div>

      <section className="planning-section section-space" aria-labelledby="planning-title">
        <div className="site-shell">
          <div className="section-heading heading-with-note">
            <div><h2 id="planning-title">For this month.<br />And your next milestone.</h2></div>
            <p>Everyday spending and future goals,<br />with a clear view of progress.</p>
          </div>
          <div className="planning-grid">
            <article className="planning-card">
              <h3>Budgets that fit your life</h3><p>Weekly, monthly, and yearly budgets combine overall or category limits with spending progress and remaining amounts.</p>
              <div className="sample-panel"><div className="sample-title"><ShoppingBasket size={23} aria-hidden="true" /><span>Monthly groceries</span></div><div className="sample-amount"><span><strong>$120</strong> of $200</span><span>60%</span></div><div className="sample-progress" data-motion="progress"><span style={{ width: '60%' }} /></div><p>$80 of room left in the plan</p></div>
            </article>
            <article className="planning-card">
              <h3>Flexible savings goals</h3><p>Savings goals support targets, deadlines, regular contributions, emergency funds, and recurring future costs.</p>
              <div className="sample-panel sample-panel--saving"><div className="sample-title"><Plane size={23} aria-hidden="true" /><span>Weekend trip</span></div><div className="sample-amount"><span><strong>$80</strong> of $200</span><span>40%</span></div><div className="sample-progress" data-motion="progress"><span style={{ width: '40%' }} /></div><p>A little closer with every contribution</p></div>
            </article>
            <article className="planning-card">
              <h3>Scheduled expenses</h3><p>Scheduled expenses include due dates, recurring periods, recorded payments, and reminders subject to device permissions.</p>
              <div className="sample-panel"><div className="sample-title"><CalendarDays size={23} aria-hidden="true" /><span>Rent <small>Due 10 October</small></span></div><div className="sample-check"><CircleCheck size={17} aria-hidden="true" /><span>September</span><span>Recorded</span></div><div className="sample-check sample-check--pending"><span className="empty-check" aria-hidden="true" /><span>October</span><span>Upcoming</span></div></div>
            </article>
          </div>
          <p className="illustration-caption">Illustrative planning examples with sample financial records.</p>
        </div>
      </section>

      <section className="everyday-section site-shell section-space" aria-labelledby="everyday-title">
        <div className="everyday-heading"><h2 id="everyday-title">From a quick note<br />to a clearer picture.</h2><p>Quick fields and prompt-style entry bring flexibility to everyday recordkeeping. Notes, tags, and analysis connect the details with the bigger picture.</p><div className="entry-options"><span><NotebookPen size={16} aria-hidden="true" /> Quick entry</span><span><Search size={16} aria-hidden="true" /> Prompt input</span></div></div>
        <div className="everyday-tools">{everydayTools.map(({ icon: Icon, title, body }) => <article key={title}><Icon size={25} strokeWidth={1.4} aria-hidden="true" /><div><h3>{title}</h3><p>{body}</p></div></article>)}</div>
      </section>

      <section id="shared-finances" className="shared-section section-space" aria-labelledby="shared-title">
        <div className="site-shell">
          <div className="section-heading heading-with-note"><div><h2 id="shared-title">Shared money.<br />A clearer record.</h2></div><p>Trips and households. Clubs and communities.<br />Dues and customer collections.</p></div>
          <div className="shared-grid">
            <article><Handshake size={32} strokeWidth={1.3} aria-hidden="true" /><h3>Shared costs & settlements</h3><p>Shared expenses, equal or unequal shares, and recorded settlements show who paid and how balances stand.</p><div className="shared-example">Trips <span>·</span> Roommates <span>·</span> Shared groceries</div></article>
            <article><Users size={32} strokeWidth={1.3} aria-hidden="true" /><h3>Shared funds</h3><p>Contributions, expenses, and balances belong to one shared fund, with member access determined by group permissions.</p><div className="shared-example">Club funds <span>·</span> Events <span>·</span> Contributions</div></article>
            <article><ReceiptText size={32} strokeWidth={1.3} aria-hidden="true" /><h3>Dues & collections</h3><p>Recurring dues, charges, recorded payments, and statements make outstanding amounts easier to follow across members or customers.</p><div className="shared-example">Membership dues <span>·</span> Rent <span>·</span> Customer balances</div></article>
          </div>
          <p className="shared-access-note">Online collaboration is available with eligible access. Each group has one configured currency and record visibility based on permissions. Group updates use an internet connection.</p>
        </div>
      </section>

      <div className="section-band section-band--mint">
      <section className="ai-section site-shell section-space" aria-labelledby="ai-title">
        <div><h2 id="ai-title">An assistant for<br />everyday money.</h2><p>The Cartera assistant provides spending summaries, budget information, and record creation or editing through chat. Voice and image entry return transaction details that remain editable before saving.</p><p className="access-note">AI features require eligible access and connectivity. Messages, attachments, and relevant records are processed by external AI providers.</p></div>
        <div className="ai-notes">
          <p className="note-label">Chat, voice & images</p>
          <div className="ai-prompt"><Search size={19} aria-hidden="true" /><span>Spending and budget queries</span></div>
          <div className="ai-prompt"><Mic size={19} aria-hidden="true" /><span>Voice-based transaction entry</span></div>
          <div className="ai-prompt"><ImagePlus size={19} aria-hidden="true" /><span>Image-based transaction recognition</span></div>
          <p className="illustration-caption">Availability and usage allowances vary by plan.</p>
        </div>
      </section>
      </div>

      <section className="data-section site-shell" aria-labelledby="data-title">
        <div className="section-heading"><h2 id="data-title">Local records. Backup and sync.</h2></div>
        <div className="data-grid">
          <article><HardDrive size={27} strokeWidth={1.4} aria-hidden="true" /><h3>Local records & backups</h3><p>Personal records are stored locally, with local backup creation and restore during setup.</p></article>
          <article><LockKeyhole size={27} strokeWidth={1.4} aria-hidden="true" /><h3>App password & automatic lock</h3><p>An app password and configurable automatic lock add privacy to financial screens on the device.</p></article>
          <article><Cloud size={27} strokeWidth={1.4} aria-hidden="true" /><h3>Cloud sync, when available</h3><p>Cloud synchronization keeps personal records connected across Android devices, with eligible access and connectivity.</p></article>
        </div>
        <Link href="/privacy-policy" className="text-link">Read the privacy policy <ArrowUpRight size={16} aria-hidden="true" /></Link>
      </section>

      <section id="faq" className="faq-section site-shell section-space" aria-labelledby="faq-title">
        <div className="faq-heading"><h2 id="faq-title">About Cartera.</h2><p>Product features, access, and everyday use.</p><a href="#contact" className="text-link">Ask us something <ArrowRight size={17} aria-hidden="true" /></a></div>
        <div className="faq-list">{questions.map(([question, answer]) => <details className="faq-item" key={question}><summary><span>{question}</span><Plus className="faq-plus" size={19} aria-hidden="true" /><Minus className="faq-minus" size={19} aria-hidden="true" /></summary><p>{answer}</p></details>)}</div>
      </section>

      <div className="section-band section-band--mint">
      <section id="contact" className="contact-section site-shell" aria-labelledby="contact-title">
        <div><h2 id="contact-title">Cartera support.</h2><p>A direct point of contact for product questions,<br />feedback, and feature suggestions.</p><span className="contact-doodle" aria-hidden="true"><NotebookPen size={76} strokeWidth={.8} /></span></div>
        <ContactForm />
      </section>
      </div>

      <section id="download" className="final-cta site-shell" aria-labelledby="download-title">
        <div className="final-cta-inner">
          <div><h2 id="download-title">Everyday money.<br />One financial notebook.</h2><p>Cartera for Android brings records, planning, and shared finances together.</p></div>
          <div className="final-cta-actions"><PlayStoreLink /><span>One app. Many parts of life.</span></div>
          <BookOpen className="final-cta-book" size={200} strokeWidth={.6} aria-hidden="true" />
        </div>
      </section>
    </div>
  );
}
