import { BookOpen, House, Plane, ShoppingBasket, UserRound } from 'lucide-react';

const members = [
  { name: 'Maya', key: 'maya', expense: 'Groceries', amount: '$48', icon: ShoppingBasket },
  { name: 'Sam', key: 'sam', expense: 'Stay', amount: '$180', icon: House },
  { name: 'Alex', key: 'alex', expense: 'Travel', amount: '$36', icon: Plane },
];

export function SharedLedgerIllustration() {
  return (
    <figure className="shared-ledger-illustration" role="img" aria-labelledby="shared-ledger-caption">
      <div className="shared-ledger-scene" data-motion="shared-ledger" aria-hidden="true">
        <svg className="shared-connections" viewBox="0 0 600 520" fill="none" preserveAspectRatio="none">
          <path className="shared-connector" pathLength="1" d="M65 105 C65 170 115 190 180 190" />
          <path className="shared-connector" pathLength="1" d="M480 58 C480 95 440 108 440 155" />
          <path className="shared-connector" pathLength="1" d="M65 430 C65 360 105 350 180 350" />
          <circle cx="65" cy="105" r="5" /><circle cx="480" cy="58" r="5" /><circle cx="65" cy="430" r="5" />
        </svg>

        {members.map(({ name, key, icon: Icon }) => (
          <div className={`shared-person shared-person--${key}`} key={key}>
            <span className={`shared-avatar shared-avatar--${key}`}><UserRound strokeWidth={1.5} /><span className="shared-person-expense"><Icon size={17} strokeWidth={1.7} /></span></span>
            <strong>{name}</strong>
          </div>
        ))}

        <div className="shared-ledger-book">
          <div className="shared-ledger-binding" />
          <div className="shared-ledger-header">
            <div><BookOpen size={25} strokeWidth={1.5} /><h3>Weekend trip</h3><p>Shared ledger · USD</p></div>
            <div className="shared-ledger-members">
              <div>{members.map(({ name, key }) => <span className={`shared-avatar shared-avatar--${key}`} key={name}><UserRound strokeWidth={1.8} /></span>)}</div>
              <span>3 members</span>
            </div>
          </div>
          <div className="shared-ledger-entries">
            {members.map(({ name, key, expense, amount }) => (
              <div className="shared-ledger-entry" key={key}>
                <span className={`shared-avatar shared-avatar--${key}`}><UserRound strokeWidth={1.8} /></span>
                <div><strong>{expense}</strong><span>Recorded by {name}</span></div>
                <strong>{amount}</strong>
              </div>
            ))}
          </div>
          <div className="shared-ledger-total"><span>Shared expenses</span><strong>$264</strong></div>
        </div>
      </div>
      <figcaption id="shared-ledger-caption"><span className="sr-only">Maya, Sam, and Alex each contribute expense records to the same ledger. </span>Illustrative shared ledger · amounts in USD</figcaption>
    </figure>
  );
}
