import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import inventory from '@/lib/feature-inventory.json';

export function FeaturesOverview() {
  return (
    <section id="features" className="features-overview site-shell" aria-labelledby="features-title">
      <div className="features-overview-heading">
        <h2 id="features-title">Everyday finances, brought together.</h2>
        <p>Records, plans, and shared finances, all part of your financial notebook.</p>
      </div>
      <ul className="feature-title-grid">
        {inventory.flatMap(group => group.features).map(feature => (
          <li key={feature.id}>
            <Link href={`/features#${feature.id}`} className="feature-title-card">
              {feature.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="features-overview-footer">
        <Link href="/features" className="feature-details-link">
          See details <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
