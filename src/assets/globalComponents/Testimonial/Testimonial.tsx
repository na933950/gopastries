import styles from "./Testimonial.module.css";
import Fade from "../Fade/Fade";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";

interface Props {
  children: string;
  reviewer?: string;
  fadeOnPageLoad?: boolean;
}

const Testimonial = ({
  children,
  reviewer = "Anonymous",
  fadeOnPageLoad = false,
}: Props) => {
  return (
    <Fade onPageLoad={fadeOnPageLoad}>
      <div className={styles.container}>
        <p className={styles.review}>
          <BiSolidQuoteAltLeft className={styles.quote} />
          <span className={styles.child}> {children} </span>
          <BiSolidQuoteAltRight className={styles.quote} />
        </p>
        <span className={styles.reviewer}>{reviewer}</span>
      </div>
    </Fade>
  );
};

export default Testimonial;
