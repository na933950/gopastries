import styles from "./Modal.module.css";
import { AiOutlineClose } from "react-icons/ai";

interface Props {
    closeModal: () => void,
}

const Modal = ({ closeModal }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.topRow}>
        <h2>Orders Closed</h2>
        <AiOutlineClose className={styles.closeBtn} onClick={closeModal}/>
      </div>
      <div className={styles.p}>
        <p>
          Due to a high volume of orders, I am unable to accomodate any further
          orders before December 2nd. Thank you for your understanding. Please
          feel free to continue browsing my items and website!
        </p>
      </div>
    </div>
  );
};

export default Modal;
