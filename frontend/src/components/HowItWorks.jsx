import styles from './HowItWorks.module.css';

/* ---------- Feature icons (inline SVG, no external dependency) ---------- */

function ZeroClutterIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6 16h20" />
      <path d="M11 9h10" />
      <path d="M13 23h6" />
    </svg>
  );
}

function OverloadIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6 22V16" />
      <path d="M14 22V10" />
      <path d="M22 22V13" />
      <path d="M22 13 27 8" />
      <path d="M22 8h5v5" />
    </svg>
  );
}

function MobileIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="9" y="4" width="14" height="24" rx="2.5" />
      <path d="M14 24h4" />
    </svg>
  );
}

function PrivateNotesIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="8" y="14" width="16" height="12" rx="2" />
      <path d="M11 14v-3a5 5 0 0 1 10 0v3" />
      <circle cx="16" cy="20" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* ---------- Content ---------- */

const STEPS = [
  {
    number: '01',
    title: 'Pick Your Focus',
    description: 'Choose Strength, Sports Performance, or Team Management to tailor the app to what you train.',
  },
  {
    number: '02',
    title: 'Log On The Go',
    description: 'Minimalist, fast inputs built for the gym floor or track sidelines — no wasted taps.',
  },
  {
    number: '03',
    title: 'Track Real Gains',
    description: 'Automatic 1RM and overload calculations turn every session into a clear progress chart.',
  },
];

const FEATURES = [
  {
    Icon: ZeroClutterIcon,
    title: 'Zero Clutter UI',
    description: 'Fast, distraction-free logging with nothing standing between you and your next set.',
  },
  {
    Icon: OverloadIcon,
    title: 'Automated Overload',
    description: 'Target progressions and 1RMs are calculated for you, so the math never slows you down.',
  },
  {
    Icon: MobileIcon,
    title: 'Mobile-First Design',
    description: 'Runs smoothly on phones and tablets, even in low-signal gyms and outdoor fields.',
  },
  {
    Icon: PrivateNotesIcon,
    title: 'Private Coach Notes',
    description: 'Keep internal observations visible only to coaches and program creators.',
  },
];

export default function HowItWorks() {
  return (
    <section className={styles.section} aria-labelledby="how-it-works-heading">
      <div className={styles.header}>
        <p className={styles.eyebrow}>The Process</p>
        <h2 id="how-it-works-heading" className={styles.heading}>
          How It Works
        </h2>
        <p className={styles.subheading}>
          Three steps between you and your next PR.
        </p>
      </div>

      <ol className={styles.stepsList}>
        <div className={styles.stepsLine} aria-hidden="true" />
        {STEPS.map((step, i) => (
          <li
            key={step.number}
            className={styles.step}
            style={{ '--step-delay': `${i * 0.12}s` }}
          >
            <span className={styles.stepNumber} aria-hidden="true">
              {step.number}
            </span>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDescription}>{step.description}</p>
          </li>
        ))}
      </ol>

      <div className={styles.featuresHeader}>
        <h3 className={styles.featuresHeading}>Core Features</h3>
      </div>

      <ul className={styles.featuresGrid}>
        {FEATURES.map((feature, i) => (
          <li
            key={feature.title}
            className={styles.featureCard}
            style={{ '--feature-delay': `${i * 0.08}s` }}
          >
            <span className={styles.featureIconBadge}>
              <feature.Icon className={styles.featureIcon} />
            </span>
            <h4 className={styles.featureTitle}>{feature.title}</h4>
            <p className={styles.featureDescription}>{feature.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}