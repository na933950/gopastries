import styles from "./TimelineItem.module.css";
import Spotlight from "../Spotlight";

interface Props {
  children: React.ReactNode;
  title: string;
  date: string;
  img: string;
  fadeOnPageLoad?: boolean;
  reverse?: boolean;
}

const TimelineItem = ({
  children,
  title,
  date,
  img,
}: Props) => {


  const image = (
      <div className={styles.imgContainer}>
        <img className={styles.img} src={img} />
      </div>
  );

  const info = (
      <div className={styles.mobileContainer}>
        {image}
        <div className={styles.infoContainer}>
          <h1 className={styles.date}>{date}</h1>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{children}</p>
        </div>
      </div>
  );

  return (
    <Spotlight>
      <div className={styles.container}>
        {info}
      </div>
      <div className={styles.bottomLineContainer}>
        <div className={styles.bottomLine}></div>
      </div>
    </Spotlight>
  );
};

export default TimelineItem;
