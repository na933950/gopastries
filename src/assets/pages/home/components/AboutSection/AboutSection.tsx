import styles from "./AboutSection.module.css";
import Stat from "../Stat";
import Fade from "../../../../globalComponents/Fade/Fade";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../../../../App";

const AboutSection = () => {
  return (
    <div>
      <span className={styles.header}>ABOUT ME</span>
      <Fade>
        <div className={styles.stats}>
          <Stat className={styles.stat} statValue={7}>
            Months in Business
          </Stat>
          <Stat
            className={styles.stat}
            statValue={1000}
            suffix="+"
            duration={1.5}
          >
            Macarons Baked
          </Stat>
          <Stat className={styles.stat} statValue={15} suffix="+">
            Products
          </Stat>
        </div>
      </Fade>
      <div className={styles.textContainer}>
        <div className={styles.textWrapper}>
          <Fade>
            <span className={styles.text}>
              GoPastries is a home-run bakery that started out of a passion for
              baking in December 2022! We offer wide selection of unique
              products such as macaron cakes, or macaron trees
            </span>
          </Fade>
        </div>
        <Fade>
          <div className={styles.buttonContainer}>
            <Tilt tiltReverse={true} tiltMaxAngleX={20} tiltMaxAngleY={20}>
              <Link onClick={scrollToTop} to="/Menu">
                <button className={styles.menuButton}>See Menu</button>
              </Link>
            </Tilt>
            <Tilt tiltReverse={true} tiltMaxAngleX={20} tiltMaxAngleY={20}>
              <Link to="https://docs.google.com/forms/d/e/1FAIpQLSfMXfDq0Eeo-8i81cBC5SCiqRa58fcHZJ19w5_NwWIawPS_XQ/viewform?pli=1">
                <button className={styles.aboutButton}>Learn More</button>
              </Link>
            </Tilt>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default AboutSection;
