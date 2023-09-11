import Navbar from "../../globalComponents/Navbar";
import { pageDirectory } from "../../../App";
import styles from "./Menu.module.css";
import MenuItems from "./components/MenuItems/MenuItems";
import Footer from "../../globalComponents/Footer";
import OpacityDivider from "../../globalComponents/OpacityDivider";
import { allItems } from "../../globalComponents/ItemCard/items";
import { useState } from "react";

const Menu = () => {
  const categories = [
    "All Categories",
    "Macaron",
    "Cookie",
    "Bread",
    "Cupcake",
  ];
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [search, setSearch] = useState("");

  const onSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const onSearch = (query: string) => {
    setSearch(query);
  };

  return (
    <>
      <Navbar pages={pageDirectory}></Navbar>
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <span className={styles.header}>Our Menu</span>
          <p className={styles.paragraph}>
            All items are processed on shared equipment with Milk, Tree nuts,
            Fish, Soybean, Egg, Wheat, Crustaceans, Sesame, and Peanuts
          </p>
        </div>
        <div className={styles.filterContainer}>
          <input
            type="search"
            placeholder="Search Item..."
            className={styles.select}
            onChange={(event) => onSearch(event.target.value)}
          ></input>
          <select
            className={styles.select}
            onChange={(event) => onSelectCategory(event.target.value)}
          >
            {categories.map((c) => (
              <option className={styles.option} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <MenuItems
          allItems={allItems.filter((item) => {
            return (
              (selectedCategory === "All Categories" ||
                selectedCategory.toLowerCase() ===
                  item.category.toLowerCase()) &&
              (search === "" ||
                item.title.toLowerCase().includes(search.toLowerCase()))
            );
          })}
        ></MenuItems>
        <OpacityDivider></OpacityDivider>
      </div>
      <Footer pages={pageDirectory}></Footer>
    </>
  );
};

export default Menu;
