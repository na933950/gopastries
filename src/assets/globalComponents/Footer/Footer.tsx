import styles from "./Footer.module.css";
import logo from "../../images/gopastrieslogo.png";

interface PageDirectory {
  [key: string]: string;
}

interface Props {
  pages: PageDirectory;
}

const Footer = ({ pages }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.descriptionContainer}>
        <div>
          <img className={styles.logo} src={logo} />
        </div>
        <p className={styles.description}>
          GoPastries is a home-run bakery based out of Natick, MA 01760. <br />
          Feel free to call me at 508-904-1038 with any questions!
        </p>
        <a href="mailto:gopastries@gmail.com" className={styles.email}>
          gopastries@gmail.com
        </a>
      </div>

      <div className={styles.linksContainer}>
        {Object.keys(pages).map((page) => (
          <a className={styles.link} href={pages[page]}>
            {page}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
