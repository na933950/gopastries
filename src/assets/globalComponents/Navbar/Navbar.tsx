import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import logo from "../../images/gopastrieslogo.png";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";

interface PageDirectory {
  [key: string]: string;
}

interface Props {
  pages: PageDirectory;
}

const Navbar = ({ pages }: Props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 786;

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  const [dropdownSprings, dropdownApi] = useSpring(() => ({
    from: { left: "-50%", display: "none" },
  }));

  const [overlaySprings, overlayApi] = useSpring(() => ({
    from: { display: "none", opacity: 0 },
  }));

  const handleDropdownOpen = () => {
    dropdownApi.start({
      from: {
        left: "-50%",
        display: "none",
      },
      to: {
        left: "0%",
        display: "block",
      },
    });
    overlayApi.start({
      from: { display: "none", opacity: 0 },
      to: { display: "block", opacity: 0.25 },
    });
  };

  const handleDropdownClose = () => {
    dropdownApi.start({
      from: {
        left: "0%",
        display: "block",
      },
      to: [
        {
          left: "-65%",
        },
        {
          display: "none",
        },
      ],
    });
    overlayApi.start({
      from: {
        opacity: 0.25,
      },
      to: [
        {
          opacity: 0,
        },
        {
          display: "none",
        },
      ],
    });
  };

  const desktopNavbar = (
    <div className={styles.navLinkWrapper}>
      <ul className={styles.navLinks}>
      {Object.keys(pages).map((page) => (
          <li key={page}>
            <Link to={pages[page]} className={styles.navLink}>
              {page}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  const mobileNavbar = (
    <div className={styles.mobileNavbar}>
      <button className={styles.hamburger} onClick={handleDropdownOpen}>
        &#9776;
      </button>
    </div>
  );

  const mobileNavbarOptions = (
    <animated.div
      style={{ overflow: "hidden", ...dropdownSprings }}
      className={styles.dropdownMenu}
    >
      <div className={styles.dropdownHeader}>
        <div className={styles.logoDropdownContainer}>
          <img
            src={logo}
            alt="Go Pastries Logo"
            className={styles.logoDropdown}
          />
        </div>
        <div className={styles.dropdownCloseContainer}>
          <button
            className={styles.dropdownClose}
            onClick={handleDropdownClose}
          >
            &#x2715;
          </button>
        </div>
      </div>
      <ul className={styles.dropdownMenuUL}>
      {Object.keys(pages).map((page) => (
          <li key={page} className={styles.navLinkItem}>
            <Link to={pages[page]} className={styles.dropdownLink}>
              {page}
            </Link>
          </li>
        ))}
      </ul>
    </animated.div>
  );

  return (
    <>
      <animated.div
        className={styles.overlay}
        style={{ ...overlaySprings }}
        onClick={handleDropdownClose}
      ></animated.div>
      <div className={styles.overlay} onClick={handleDropdownClose}></div>
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Go Pastries Logo" className={styles.logo} />
        </div>
        {width > breakpoint ? desktopNavbar : mobileNavbar}
      </nav>
      {mobileNavbarOptions}
    </>
  );
};

export default Navbar;
