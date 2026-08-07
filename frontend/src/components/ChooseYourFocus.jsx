import { useState } from 'react';
import styles from './ChooseYourFocus.module.css';

/* ---------- Inline icons (no external icon library needed) ---------- */

function DumbbellIcon(props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" {...props}>
      <path d="M6 20v8" />
      <path d="M10 16v16" />
      <path d="M14 22v4" />
      <path d="M34 22v4" />
      <path d="M38 16v16" />
      <path d="M42 20v8" />
      <path d="M14 24h20" />
    </svg>
  );
}

function SpeedIcon(props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M24 6a18 18 0 0 1 15.6 27" />
      <path d="M8.4 33A18 18 0 0 1 24 6" />
      <path d="M24 26 33 15" />
      <circle cx="24" cy="26" r="3" fill="currentColor" stroke="none" />
      <path d="M14 38h20" />
    </svg>
  );
}

function ClipboardIcon(props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="10" y="8" width="28" height="34" rx="3" />
      <path d="M18 8v-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
      <path d="M16 20h16" />
      <path d="M16 27h16" />
      <path d="M16 34h10" />
    </svg>
  );
}

/* ---------- Content data ---------- */

const PATHS = [
  {
    id: 'strength',
    title: 'Strength & Conditioning',
    description: 'Weight room programming, 1RM tracking, and volume analytics.',
    Icon: DumbbellIcon,
    image: '/images/lift.jpg',
    features: [
      'Auto-calculated 1-rep max from working sets',
      'Volume load tracking across every session',
      'Progressive overload alerts when you plateau',
      'Set, rep, and weight logging built for the gym floor',
    ],
  },
  {
    id: 'performance',
    title: 'Sports Performance',
    description: 'Speed, agility, and on-field metrics for competitive athletes.',
    Icon: SpeedIcon,
    image: '/images/racing.jpg',
    features: [
      'Sport-specific training notes and practice logs',
      'Positional performance tracking tailored to your role',
      'Customized drill timers for agility and reaction work',
      'Detailed coach feedback on form and game readiness',
    ],
  },
  {
    id: 'team',
    title: 'Team Management',
    description: 'Rosters, program assignments, and coaching tools in one place.',
    Icon: ClipboardIcon,
    image: '/images/coaching.jpg',
    features: [
      'Roster and position management for the whole team',
      'Assign programs to individuals or full squads',
      'Coach dashboard with private athlete notes',
      'Shareable progress reports for athletes and parents',
    ],
  },
];

export default function ChooseYourFocus() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = PATHS[activeIndex];

  return (
    <section className={styles.section} aria-labelledby="focus-heading">
      <div className={styles.header}>
        <p className={styles.eyebrow}>Built for every path</p>
        <h2 id="focus-heading" className={styles.heading}>
          Choose Your Focus
        </h2>
        <p className={styles.subheading}>
          Pick a path below to see what the app tracks for you.
        </p>
      </div>

      <div className={styles.cardGrid} role="group" aria-label="Focus areas">
        {PATHS.map((path, i) => {
          const isActive = i === activeIndex;
          return (
            <button
              key={path.id}
              type="button"
              data-path={path.id}
              className={`${styles.card} ${isActive ? styles.cardActive : ''}`}
              onClick={() => setActiveIndex(i)}
              aria-pressed={isActive}
              aria-controls="focus-preview"
            >
              <span className={styles.iconBadge}>
                <path.Icon className={styles.icon} />
              </span>
              <span className={styles.cardTitle}>{path.title}</span>
              <span className={styles.cardDescription}>{path.description}</span>
            </button>
          );
        })}
      </div>

      <div id="focus-preview" className={styles.preview} role="region" aria-live="polite">
        <div key={active.id} className={styles.previewInner}>
          <div className={styles.previewText}>
            <span className={styles.previewLabel}>{active.title}</span>
            <ul className={styles.featureList}>
              {active.features.map((feature) => (
                <li key={feature} className={styles.featureItem}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.imageCard} data-path={active.id}>
  <img 
    src={active.image} 
    alt={active.title} 
    className={styles.previewImage} 
  />
</div>
        </div>
      </div>
    </section>
  );
}