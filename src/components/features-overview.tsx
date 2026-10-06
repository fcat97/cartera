import {
  ArchiveRestore, ArrowLeftRight, BookOpen, CalendarDays,
  ChartNoAxesColumnIncreasing, ChartPie, Cloud, Coins, GitCompareArrows,
  Handshake, HardDrive, History, Languages, ListChecks, LockKeyhole,
  MessagesSquare, NotebookPen, ReceiptText, Scale, ScanLine, Search,
  Sparkles, Tags, Target, TextCursorInput, UserRoundCheck, Users, Wallet,
} from 'lucide-react';
import inventory from '@/lib/feature-inventory.json';

const icons = {
  ArchiveRestore, ArrowLeftRight, BookOpen, CalendarDays,
  ChartNoAxesColumnIncreasing, ChartPie, Cloud, Coins, GitCompareArrows,
  Handshake, HardDrive, History, Languages, ListChecks, LockKeyhole,
  MessagesSquare, NotebookPen, ReceiptText, Scale, ScanLine, Search,
  Sparkles, Tags, Target, TextCursorInput, UserRoundCheck, Users, Wallet,
};

const introductions = [
  'The details of daily life, with a place for every record.',
  'Today’s activity, the bigger picture, and what lies ahead.',
  'Local records, familiar defaults, and a financial notebook that feels personal.',
  'Online tools and shared records bring more people and possibilities together.',
];

export function FeaturesOverview() {
  return (
    <section id="features" className="features-overview site-shell" aria-labelledby="features-title">
      <div className="features-overview-heading">
        <h2 id="features-title">Everyday finances,<br />brought together.</h2>
        <p>From the first expense to a shared ledger, Cartera gives everyday money a place. Records, plans, and people belong in the same picture.</p>
      </div>

      <div className="feature-groups">
        {inventory.map((group, index) => (
          <div className="feature-group" key={group.title}>
            <div className="feature-group-heading">
              <h3>{group.title}</h3>
              <p>{introductions[index]}</p>
            </div>
            <ul className="feature-circle-grid">
              {group.features.map((feature) => {
                const Icon = icons[feature.icon as keyof typeof icons];
                return (
                  <li className="feature-circle-item" key={feature.title}>
                    <span className="feature-circle" aria-hidden="true">
                      <Icon size={32} strokeWidth={1.5} />
                    </span>
                    <h4>{feature.title}</h4>
                    <p>{feature.lines.map((line) => <span key={line}>{line}</span>)}</p>
                  </li>
                );
              })}
            </ul>
            {index === inventory.length - 1 && (
              <div className="feature-access-note">
                <p>Online features depend on eligible access, usage allowances, and service configuration. AI uses external providers; recognized details remain editable before saving.</p>
                <p>Shared groups use one configured currency. Updates require internet access, and record visibility depends on group permissions. Transfers and payments are financial records.</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
