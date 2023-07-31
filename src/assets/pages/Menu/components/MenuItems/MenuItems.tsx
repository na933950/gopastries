import styles from './MenuItems.module.css';
import ItemCard from '../../../../globalComponents/ItemCard';
import { IcProps } from '../../../../globalComponents/ItemCard/ItemCard';
import { useEffect, useState } from 'react';

interface Props {
  allItems: IcProps[];
  onClick?: () => void;
}

const MenuItems = ({ allItems, onClick }: Props) => {
  const firstBreakpoint = 1000;
  const secondBreakpoint = 786;
  const [width, setWidth] = useState(window.innerWidth);
  const [numColumns, setNumColumns] = useState(3);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener('resize', handleResize);
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

  // Split allItems into columns based on the numColumns state
  const columns = Array.from({ length: numColumns }, (_, columnIndex) => (
    <div key={columnIndex} className={styles.column}>
      {allItems
        .filter((_, index) => index % numColumns === columnIndex) // Filter items for each column based on index
        .map((item, index) => (
          <ItemCard key={index} onPageLoad={index < 1} onClick={onClick} {...item} />
        ))}
    </div>
  ));

  return <div className={styles.container}>{columns}</div>;
};

export default MenuItems;
