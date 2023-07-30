import React, { useEffect, useState } from "react";
import styles from "./ItemCard.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Fade from "../Fade/Fade";
import { Link } from "react-router-dom";

export interface IcProps {
  imgWide: string;
  imgTall: string;
  category: string;
  title: string;
  children: string;
  price: string;
  formerPrice?: string;
  onPageLoad?: boolean;
}

const ItemCard = ({
  imgWide,
  imgTall,
  category,
  title,
  children,
  price,
  formerPrice,
  onPageLoad,
}: IcProps) => {
  const [cardWidth, setCardWidth] = useState(0);

  // Function to update the cardWidth state when the component mounts or window size changes
  useEffect(() => {
    function handleResize() {
      setCardWidth(itemCardRef.current?.offsetWidth || 0);
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const itemCardRef = React.useRef<HTMLDivElement>(null);

  // Calculate the appropriate grid template class based on the cardWidth
  const breakpoint = 750;
  const gridTemplateClass =
    cardWidth < breakpoint ? styles.productGridSmall : styles.productGridLarge;

  return (
    <Fade onPageLoad={onPageLoad}>
      <article
        ref={itemCardRef}
        className={`${styles.product} ${gridTemplateClass}`}
      >
        <picture className={styles.productImg}>
          <img src={cardWidth < breakpoint ? imgWide : imgTall} alt="" />
        </picture>
        <div className={styles.productContent}>
          <span className={styles.category}>{category}</span>

          <span className={styles.productTitle}>{title}</span>

          <span className={styles.productInfo}>{children}</span>

          <div className={styles.flexGroup}>
            <span className={styles.productPrice}>{price}</span>
            <span className={styles.originalPrice}>
              <s>{formerPrice}</s>
            </span>
          </div>

          <Link
            to="https://docs.google.com/forms/d/e/1FAIpQLSfMXfDq0Eeo-8i81cBC5SCiqRa58fcHZJ19w5_NwWIawPS_XQ/viewform?pli=1"
            className={styles.button}
          >
            <AiOutlineShoppingCart />
            Order
          </Link>
        </div>
      </article>
    </Fade>
  );
};

export default ItemCard;
