import { timelineItems } from "../../../globalComponents/TimelineItem/items";
import TimelineItem from "../../../globalComponents/TimelineItem";
import styles from "./Timeline.module.css";

export const Timeline = () => {
  return (
    <div className={styles.container}>
      <div className={styles.timeline}>
        {timelineItems.map((item, index) => (
          <TimelineItem {...item} fadeOnPageLoad={index === 0}></TimelineItem>
        ))}
      </div>
    </div>
  );
};
