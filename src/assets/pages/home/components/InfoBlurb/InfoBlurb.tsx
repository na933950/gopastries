import React from "react";
import styles from "./InfoBlurb.module.css";

interface Props {
  heading: string;
  children: React.ReactNode;
  background: string;
}

const InfoBlurb = ({ heading, children, background }: Props) => {
  return (
    <div className={styles.container} style={{ backgroundImage: `url(${background})` }}>
      <h1 className={styles.heading}>{heading}</h1>
      <p className={styles.text}>{children}</p>
    </div>
  );
};

export default InfoBlurb;
