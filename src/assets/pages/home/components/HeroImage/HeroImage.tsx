import { useEffect, useState } from "react";
import styles from "./HeroImage.module.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import OpacityDivider from "../../../../globalComponents/OpacityDivider";
import Tilt from "react-parallax-tilt";
import {
  pngMacaron,
  pngMacaronCake,
  pngMatchaTower,
  pngCupcake,
} from "../../../../images/png";
import { BiSolidDownArrow } from "react-icons/bi";
import Fade from "../../../../globalComponents/Fade/Fade";
import { Link } from "react-router-dom";

const HeroImage = () => {
  const [text] = useTypewriter({
    words: ["HOMEMADE", "DELICIOUS", "CUSTOMIZABLE", "MOUTHWATERING", "UNIQUE"],
    loop: 0,
    delaySpeed: 2000,
    typeSpeed: 120,
  });

  const images = [pngMacaron, pngMacaronCake, pngMatchaTower, pngCupcake];
  const [heroImageIndex, setHeroImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 9000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  // Use the heroImageIndex to display the current image
  const currentImage = images[heroImageIndex];

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 900;

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  const handleScroll = () => {
    // Calculate the position to scroll to (current position + 100vh)
    const scrollToPosition = window.innerHeight;

    // Scroll smoothly to the calculated position
    window.scrollTo({
      top: scrollToPosition,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className={styles.gradient}>
        <div className={styles.heroContentContainer}>
          <div className={styles.textContainer}>
            <Fade onPageLoad={true}>
              <div className={styles.typewriter}>
                <span className={styles.text}>
                  BAKED GOODS THAT ARE
                  <br />
                  <span className={styles.bold}>{text}</span>
                </span>
                <Cursor cursorColor="black" />
              </div>
            </Fade>
            <Fade onPageLoad={true} delay={0.6}>
              <div className={styles.bodyText}>
                At GoPastries, I put my heart into every order and strive to
                create the most delicious baked goods! Between macarons,
                cookies, cupcakes, and much more, I am confident you will find
                something you'll love!
              </div>
            </Fade>
            <Fade onPageLoad={true} delay={1.2}>
              <div className={styles.buttonContainer}>
                <Tilt tiltReverse={true} tiltMaxAngleX={20} tiltMaxAngleY={20}>
                  <Link to="/Menu">
                    <button className={styles.menuButton}>Menu</button>
                  </Link>
                </Tilt>
                <Tilt tiltReverse={true} tiltMaxAngleX={20} tiltMaxAngleY={20}>
                  <Link to="https://docs.google.com/forms/d/e/1FAIpQLSfMXfDq0Eeo-8i81cBC5SCiqRa58fcHZJ19w5_NwWIawPS_XQ/viewform?pli=1">
                    <button className={styles.orderButton}>Order</button>
                  </Link>
                </Tilt>
              </div>
            </Fade>
          </div>
          {width > breakpoint && (
            <div className={styles.graphicsContainer}>
              <Fade onPageLoad={true} delay={1.8}>
                <img
                  className={[styles.macaron, styles.floating].join(" ")}
                  src={currentImage}
                ></img>
              </Fade>
            </div>
          )}
        </div>
        <div className={styles.downButtonContainer}>
          <button onClick={handleScroll} className={styles.downButton}>
            <BiSolidDownArrow className={styles.downArrow}></BiSolidDownArrow>
          </button>
        </div>
        <OpacityDivider />
      </div>
      <div className={styles.formatter}></div>
    </>
  );
};

export default HeroImage;
