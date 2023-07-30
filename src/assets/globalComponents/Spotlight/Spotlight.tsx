import React, { useRef, useEffect, useState } from "react";
import styles from "./Spotlight.module.css";

interface Props {
  children: React.ReactNode;
}

const Spotlight = ({ children }: Props) => {
  const [opacity, setOpacity] = useState(0.3);
  const spotlightRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (spotlightRef.current) {
      const elementRect = spotlightRef.current.getBoundingClientRect();
      const elementCenter = elementRect.top + elementRect.height / 2;
      const windowHeight = window.innerHeight;
      const containerTop = windowHeight * 0.3; // 20vh from the top
      const containerBottom = windowHeight * 0.7; // 80vh from the top
      let calculatedOpacity = 0.2;
      if (elementCenter > 0 && elementCenter < windowHeight) {
        if (elementCenter < containerTop) {
            calculatedOpacity = 0.2 + (0.8 * (1 - Math.abs(elementCenter - containerTop) / containerTop));
          } else if (elementCenter >= containerTop && elementCenter <= containerBottom) {
            calculatedOpacity = 1;
          } else if (elementCenter > containerBottom) {
            calculatedOpacity = 1 - (0.8 * ((elementCenter - containerBottom) / (windowHeight - containerBottom)));
          } 
      }
      setOpacity(calculatedOpacity);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={spotlightRef}
      className={styles.spotlight}
      style={{ opacity }}
    >
      {children}
    </div>
  );
};

export default Spotlight;
