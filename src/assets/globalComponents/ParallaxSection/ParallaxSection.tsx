import styles from "./ParallaxSection.module.css";
import Fade from "../Fade/FadeOnScroll";
import { useEffect, useState } from "react";

interface Props {
  img: string;
  vertImg: string;
  children?: string;
  height?: string;
}

const ParallaxSection = ({
  img,
  vertImg,
  children,
  height = "50vh",
}: Props) => {
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setDeviceWidth(window.innerWidth);
    });
  }, []);

  const breakpoint = 786;
  const backgroundBreakpoint = 600;
  const backgroundPosition =
    deviceWidth > backgroundBreakpoint ? "center" : "bottom";

  return (
    <div className={styles.parallaxContainer} style={{ minHeight: height }}>
      <div
        className={styles.parallax}
        style={{
          backgroundImage:
            deviceWidth > breakpoint ? `url(${img})` : `url(${vertImg})`,
          backgroundPosition: backgroundPosition,
        }}
      ></div>
      <div className={styles.textContainer}>
        <Fade>
          <span className={styles.text}>{children}</span>
        </Fade>
      </div>
    </div>
  );
};

export default ParallaxSection;
