import styles from "./Footer.module.css";
import logo from "../../images/gopastrieslogo.png";

interface PageInfo {
  path: string;
  icon: React.ReactNode;
}

interface PageDirectory {
  [key: string]: PageInfo;
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
          GoPastries is a Board-of-Health-certified, Residential Kitchen bakery
          in Natick, MA, that started out of a passion for baking in December
          2022! I offer wide selection of customizable products.
          Feel free to call me at (857) 400-0545 with any questions!
        </p>
        <a href="mailto:gopastries@gmail.com" className={styles.email}>
          gopastries@gmail.com
        </a>
      </div>
      <div className={styles.linksContainer}>
        <div className={styles.pagesContainer}>
          <p className={styles.linkHeader}>Pages</p>
          {Object.keys(pages).map((page) => (
            <a className={styles.link} href={pages[page].path}>
              {page}
            </a>
          ))}
        </div>
        <div className={styles.mediaContainer}>
          <p className={styles.linkHeader}>Social</p>
          <a
            className={styles.link}
            href="https://www.instagram.com/gopastries/?igshid=MzRlODBiNWFlZA%3D%3D"
          >
            Instagram
          </a>
          <a
            className={styles.link}
            href="https://www.facebook.com/profile.php?id=100087416521769&paipv=0&eav=Afam0tvjx1Fghu2ijzF_3W3mU1B0IW7N96kmb8-os00pbWaHAAVFTODvukZkTubsrbs&_rdr"
          >
            Facebook
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
