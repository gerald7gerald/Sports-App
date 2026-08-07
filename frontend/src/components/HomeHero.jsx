import React, { useState, useEffect, useRef } from 'react';
import styles from './HomeHero.module.css';

const VIDEOS = [
  '/videos/hero_1.mp4',
  '/videos/hero_2.mp4',
  '/videos/hero_3.mp4',
  '/videos/hero_4.mp4',
];

export default function HomeHero() {
  const [activeLayer, setActiveLayer] = useState(0); // 0 = Video A active, 1 = Video B active
  const [videoASrc, setVideoASrc] = useState(VIDEOS[0]);
  const [videoBSrc, setVideoBSrc] = useState(VIDEOS[1]);

  const indexRef = useRef(0);
  const videoARef = useRef(null);
  const videoBRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (indexRef.current + 1) % VIDEOS.length;
      indexRef.current = nextIndex;

      if (activeLayer === 0) {
        // Prepare Video B with next video & crossfade to B
        setVideoBSrc(VIDEOS[nextIndex]);
        if (videoBRef.current) {
          videoBRef.current.currentTime = 0;
          videoBRef.current.play().catch(() => {});
        }
        setActiveLayer(1);
      } else {
        // Prepare Video A with next video & crossfade to A
        setVideoASrc(VIDEOS[nextIndex]);
        if (videoARef.current) {
          videoARef.current.currentTime = 0;
          videoARef.current.play().catch(() => {});
        }
        setActiveLayer(0);
      }
    }, 5000); // Swaps every 5 seconds

    return () => clearInterval(interval);
  }, [activeLayer]);

  return (
    <section className={styles.heroContainer}>
      {/* Video Layer A */}
      <video
        ref={videoARef}
        src={videoASrc}
        autoPlay
        muted
        playsInline
        loop
        className={`${styles.bgVideo} ${activeLayer === 0 ? styles.active : styles.hidden}`}
      />

      {/* Video Layer B */}
      <video
        ref={videoBRef}
        src={videoBSrc}
        autoPlay
        muted
        playsInline
        loop
        className={`${styles.bgVideo} ${activeLayer === 1 ? styles.active : styles.hidden}`}
      />

      {/* Dark Overlay Tint */}
      <div className={styles.overlay} />

      {/* Center Content Overlay */}
      <div className={styles.content}>
        <div className={styles.eyebrow}>
          <span className={styles.dot} />
          <span>SPORTS APP</span>
        </div>

        <h1 className={styles.headline}>
          TRACK YOUR WORKOUTS,<br />
          BUILD YOUR LEGACY
        </h1>

        <div className={styles.buttonGroup}>
          <a href="/signup" className={styles.primaryBtn}>
            GET STARTED
          </a>
          <a href="/about" className={styles.secondaryBtn}>
            LEARN MORE
          </a>
        </div>
      </div>
    </section>
  );
}