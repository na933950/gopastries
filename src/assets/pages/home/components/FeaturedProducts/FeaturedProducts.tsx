import ItemCard from "../../../../globalComponents/ItemCard/ItemCard";
import { IcMacaron, IcMatcha, IcMacaronTree } from "../../../../globalComponents/ItemCard/items"
import styles from "./FeaturedProducts.module.css";

const FeaturedProducts = () => {

  const items = [IcMacaron, IcMatcha, IcMacaronTree]

  return (
    <div className={styles.container}>
      <span className={styles.title}>FEATURED PRODUCTS</span>
      <div className={styles.itemsContainer}>
        {items.map(
          ({
            imgWide,
            imgTall,
            category,
            title,
            children,
            price,
            formerPrice,
          }) => (
            <ItemCard
              imgWide={imgWide}
              imgTall={imgTall}
              category={category}
              title={title}
              price={price}
              formerPrice={formerPrice}
            >
              {children}
            </ItemCard>
          )
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
