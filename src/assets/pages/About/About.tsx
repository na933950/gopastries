import styles from "./About.module.css";
import Navbar from "../../globalComponents/Navbar";
import { pageDirectory } from "../../../App";
import { MdLocationOn } from "react-icons/md";
import Timeline from "./Timeline";
import OpacityDivider from "../../globalComponents/OpacityDivider";
import Footer from "../../globalComponents/Footer";
import Fade from "../../globalComponents/Fade/Fade";

const About = () => {
  return (
    <div>
      <Navbar pages={pageDirectory}></Navbar>
      <div className={styles.container}>
        <div className={styles.info}>
          <h1 className={styles.header}>About Me</h1>
          <p className={styles.paragraph}>
            <Fade onPageLoad={true}>
              My name is Gopa Mukherjee and I live in Natick, MA with my husband
              and three boys. I have always had a passion for baking. After
              working as an emergency room nurse at a Level One Trauma Center
              for over 22 years, I left the emergency room in December, 2021,
              but didn't leave nursing; I knew it was time to launch my baking
              career.
              <br />
            </Fade>
            <Fade onPageLoad={true}>
              <br />
              I baked my first macaron in 2016 when my son Noah (who coded this
              website from scratch!) came home from school and told me he wanted
              me to make one. I didn't even know what they were at the time and
              boy, they were a big flop! I quickly learned about macarons, how
              they have "feet" and shells should not have cracks. They are
              delicate shells with a bit of chewiness. I was determined to
              figure out how to bake them and finally with a lot of patience and
              practice, I succeeded!
              <br />
            </Fade>
            <Fade onPageLoad={true}>
              <br />
              My colleagues were always thankful when I brought in baked goods
              (and still are). Over many years of perfecting my recipes, I am
              thankful to have been able to launch GoPastries LLC in December,
              2022. Thank you to my community and friends for supporting me with
              your business!
            </Fade>
          </p>
          <p className={styles.locationText}>
            <MdLocationOn className={styles.locationLogo} />
            Natick, MA
          </p>
        </div>
        <div className={styles.timelineContainer}>
          <Timeline />
        </div>
        <OpacityDivider />
      </div>
      <Footer pages={pageDirectory} />
    </div>
  );
};

export default About;
