import { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import styles from "./Stat.module.css";

interface Props {
    children: string;
    statValue: number;
    suffix?: string;
    duration?: number;
    className?: string;
}

const Stat = ({ children, statValue, suffix, duration = 5, className }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const statRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Trigger when at least 50% of the component is visible
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => {
      if (statRef.current) {
        observer.unobserve(statRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={statRef}
      className={`${styles.statContainer} ${className || ''} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.fadingContainer}>
        <CountUp
          className={`${styles.statValue} ${isVisible ? styles.moveUp : ''}`}
          end={statValue}
          duration={duration}
          useEasing={true}
          separator=","
          suffix={suffix}
        />
        <span className={styles.statName}>{children}</span>
      </div>
    </div>
  );
};

export default Stat;
