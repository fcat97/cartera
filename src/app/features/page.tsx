import Link from 'next/link';
import { FeatureIcon } from '@/components/feature-icon';
import { JsonLd } from '@/components/json-ld';
import inventory from '@/lib/feature-inventory.json';
import { createPageMetadata } from '@/lib/seo';
import { absoluteUrl } from '@/lib/site';

export const metadata = createPageMetadata({
  title: 'Expense Tracking, Budget & Shared Ledger Features',
  description: 'Explore Cartera’s Android features: books and pages, accounts, budgets, savings goals, loans, local backups, AI entry, and shared financial ledgers.',
  path: '/features',
});

const groupDescriptions = [
  'A place for everyday transactions, accounts, and the context behind them.',
  'Spending patterns, future costs, and milestones, connected to the same records.',
  'Local storage, backup options, and preferences for a personal financial notebook.',
  'Online features depend on eligible access, usage allowances, and service configuration. AI processing uses external providers.',
];

const groupIds = ['everyday-records', 'planning-and-perspective', 'personal-by-design', 'connected-possibilities'];

export default function FeaturesPage() {
  const url = absoluteUrl('/features');
  const features = inventory.flatMap(group => group.features);

  return (
    <div className="features-page">
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'CollectionPage', '@id': `${url}#webpage`, url,
            name: 'Cartera features',
            isPartOf: { '@id': `${absoluteUrl('/')}#website` },
            mainEntity: {
              '@type': 'ItemList', numberOfItems: features.length,
              itemListElement: features.map((feature, index) => ({
                '@type': 'ListItem', position: index + 1,
                name: feature.title, url: `${url}#${feature.id}`,
              })),
            },
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
              { '@type': 'ListItem', position: 2, name: 'Features', item: url },
            ],
          },
        ],
      }} />
      <header className="features-page-heading">
        <nav aria-label="Breadcrumb" className="features-breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Features</span>
        </nav>
        <h1>Cartera features</h1>
        <p>Books and accounts, budgets and savings, and shared finances. A closer look at the features that bring everyday money together.</p>
        <nav aria-label="Feature categories" className="feature-category-links">
          {inventory.map((group, index) => <a href={`#${groupIds[index]}`} key={group.title}>{group.title}</a>)}
        </nav>
      </header>
      <div className="feature-detail-groups">
        {inventory.map((group, index) => (
          <section id={groupIds[index]} key={group.title} aria-labelledby={`${groupIds[index]}-title`}>
            <div className="feature-detail-group-heading">
              <h2 id={`${groupIds[index]}-title`}>{group.title}</h2>
              <p>{groupDescriptions[index]}</p>
            </div>
            <div className="feature-detail-grid">
              {group.features.map(feature => (
                <article id={feature.id} key={feature.id} className="feature-detail-card" aria-labelledby={`${feature.id}-title`}>
                  <span className="feature-detail-icon"><FeatureIcon name={feature.icon} /></span>
                  <h3 id={`${feature.id}-title`}>{feature.title}</h3>
                  <p className="feature-detail-summary">{feature.lines.join(' ')}</p>
                  <p>{feature.details}</p>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
      <div className="features-page-footer">
        <Link href="/#features" className="text-link">Back to the overview</Link>
      </div>
    </div>
  );
}
