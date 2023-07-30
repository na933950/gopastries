import { useEffect, useState } from "react";
import Testimonial from "../../globalComponents/Testimonial/Testimonial";
import styles from "./Testimonials.module.css";
import Navbar from "../../globalComponents/Navbar";
import { pageDirectory } from "../../../App";
import OpacityDivider from "../../globalComponents/OpacityDivider";
import Footer from "../../globalComponents/Footer";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import { BiSolidCaretDownCircle, BiSolidCaretUpCircle } from "react-icons/bi";
import { testimonialItems } from "./items";

interface TestimonialProps {
  testimonial: string;
  reviewer: string;
}

const Testimonials = () => {
  const [testimonials, setTestimonials] =
    useState<TestimonialProps[]>(testimonialItems);

  const firstBreakpoint = 1000;
  const secondBreakpoint = 786;
  const [width, setWidth] = useState(window.innerWidth);
  const [numColumns, setNumColumns] = useState(3);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (width > firstBreakpoint) {
      setNumColumns(3);
    } else if (width > secondBreakpoint) {
      setNumColumns(2);
    } else {
      setNumColumns(1);
    }
  }, [width]);

  const recalculateColumns = () => {
    const columns: TestimonialProps[][] = [];
    for (let i = 0; i < numColumns; i++) {
      columns.push([]);
    }
    for (let i = 0; i < testimonials.length; i++) {
      let shortestColumn = 0;
      let shortestLength = Number.MAX_VALUE;
      for (let c = 0; c < numColumns; c++) {
        if (calculateLength(columns[c]) < shortestLength) {
          shortestColumn = c;
          shortestLength = calculateLength(columns[c]);
        }
      }
      columns[shortestColumn].push(testimonials[i]);
    }
    const combinedColumns: TestimonialProps[] = [];
    const maxNumTestimonials = Math.max(...columns.map((col) => col.length));

    for (let i = 0; i < maxNumTestimonials; i++) {
      for (let c = 0; c < numColumns; c++) {
        if (i < columns[c].length) {
          combinedColumns.push(columns[c][i]);
        }
      }
    }

    return combinedColumns;
  };

  useEffect(() => {
    setTestimonials(recalculateColumns());
    setTimeout(() => {
      setTestimonials(recalculateColumns());
    }, 10);
  }, [testimonialItems]);

  const calculateLength = (lst: TestimonialProps[]) => {
    let sum = 0;
    lst.forEach((t) => {
      sum = sum + t.testimonial.length;
    });
    return sum;
  };

  const columns =
    testimonials && testimonials.length > 0
      ? Array.from({ length: numColumns }, (_, columnIndex) => (
          <div key={columnIndex} className={styles.column}>
            {testimonials
              .filter((_, index) => index % numColumns === columnIndex)
              .map((t, index) => (
                <Testimonial
                  key={index}
                  reviewer={t.reviewer === "" ? "Anonymous" : t.reviewer}
                  fadeOnPageLoad={index < 3}
                >
                  {t.testimonial}
                </Testimonial>
              ))}
          </div>
        ))
      : null;

  const [collapsibleOpen, setCollapsibleOpen] = useState(false);
  const [columnsCalculated, setColumnsCalculated] = useState(false);

  const handleToggle = () => {
    setCollapsibleOpen(!collapsibleOpen);
    if (!columnsCalculated) {
      recalculateColumns();
      setColumnsCalculated(true);
    }
  };

  return (
    <>
      <Navbar pages={pageDirectory} />
      <div className={styles.container}>
        <div className={styles.info}>
          <h2 className={styles.page}>TESTIMONIALS</h2>
          <h1 className={styles.header}>What Clients Say</h1>
          <p className={styles.paragraph}>
            At GoPastries, we place huge weight on customer satisfaction and
            take all feedback into account. Please feel free to leave a review
            if you ordered from my small business.
          </p>
          <div className={styles.btnContainer}>
            <Tilt
              tiltReverse={true}
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              className={styles.btn}
            >
              <Link to="https://forms.gle/zY6RQnjuYBn5sVYf9">
                <button className={styles.btn}>Leave a Review</button>
              </Link>
            </Tilt>
          </div>
        </div>
        <div
          className={styles.collapsibleContainer}
          style={{
            height: collapsibleOpen ? "100%" : "100vh",
            mask: collapsibleOpen ? "none" : "var(--mask)",
            WebkitMask: collapsibleOpen ? "none" : "var(--mask)",
          }}
        >
          <div className={styles.testimonialContainer}>{columns}</div>
        </div>
        <div className={styles.toggleContainer}>
          {collapsibleOpen ? (
            <BiSolidCaretUpCircle
              onClick={handleToggle}
              className={styles.toggle}
            ></BiSolidCaretUpCircle>
          ) : (
            <BiSolidCaretDownCircle
              onClick={handleToggle}
              className={styles.toggle}
            ></BiSolidCaretDownCircle>
          )}
        </div>
        <OpacityDivider></OpacityDivider>
      </div>
      <Footer pages={pageDirectory}></Footer>
    </>
  );
};

export default Testimonials;
