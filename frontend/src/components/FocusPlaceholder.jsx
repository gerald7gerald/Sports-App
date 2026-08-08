import styles from './FocusPlaceholder.module.css';

/**
 * Temporary placeholder for focus areas that don't have a dedicated
 * workspace built yet. Swap each usage out for a real component
 * (mirroring WorkoutWorkspace) as that work comes online.
 */
export default function FocusPlaceholder({ title, description }) {
  return (
    <section className={styles.placeholder}>
      <p className={styles.eyebrow}>Coming Soon</p>
      <h1 className={styles.heading}>{title}</h1>
      <p className={styles.description}>{description}</p>
    </section>
  );
}