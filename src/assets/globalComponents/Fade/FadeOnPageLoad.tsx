import React from "react";
import styles from "./FadeOnPageLoad.module.css";

interface Props {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const FadeOnPageLoad = ({ children, delay = 0, className }: Props) => {
  return (
    <div className={[styles.fade, className].join(" ")} style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  );
};

export default FadeOnPageLoad;
