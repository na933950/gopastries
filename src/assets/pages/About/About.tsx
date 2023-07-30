import styles from "./About.module.css";
import Navbar from "../../globalComponents/Navbar";
import { pageDirectory } from "../../../App";
import { MdLocationOn } from "react-icons/md";
import Timeline from "./Timeline";
import OpacityDivider from "../../globalComponents/OpacityDivider";
import Footer from "../../globalComponents/Footer";

const About = () => {

  return (
    <div>
      <Navbar pages={pageDirectory}></Navbar>
      <div className={styles.container}>
        <div className={styles.info}>
          <h1 className={styles.header}>How it All Started</h1>
          <p className={styles.paragraph}>
            Coming from a career in nursing, I never thought I would end up
            where I am, but I have always loved to bake! Over many years of
            perfecting my recipe, I am so thankful to have been able to launch
            in December, 2022 and to my community for supporting me with so many
            orders!
          </p>
          <p className={styles.locationText}>
            <MdLocationOn className={styles.locationLogo} />
            Natick, MA
          </p>
        </div>
        <div
          className={styles.timelineContainer}
        >
          <Timeline />
        </div>
        <OpacityDivider />
      </div>
      <Footer pages={pageDirectory} />
    </div>
  );
};

export default About;
