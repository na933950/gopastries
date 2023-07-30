import React, { useState } from "react";
import styles from "./MacaronCake.module.css";
import { IcMacaronCake } from "../../../../globalComponents/ItemCard/items";
import ItemCard from "../../../../globalComponents/ItemCard";
import { pngMacaron, pngPinkMacaronCake } from "../../../../images/png";
import { useParallax } from "react-scroll-parallax";

const MacaronCake = () => {
  const m1 = useParallax<HTMLImageElement>({ 
    translateY: [0, -100],
    translateX: [0, -50],
    rotate: [-10, -100],
    scale: [1, 1.1]
   });
   const m2 = useParallax<HTMLImageElement>({ 
    translateY: [0, -150],
    translateX: [0, 20],
    rotate: [10, 40],
    scale: [1, 0.5]
   });
   const m3 = useParallax<HTMLImageElement>({ 
    translateY: [0, -200],
    rotate: [20, 200],
    scale: [0.9, 1.2]
   });
  const [macaron1Position, setMacaron1Position] = useState({ top: 0, left: 0 });
  const [macaron2Position, setMacaron2Position] = useState({ top: 0, right: 0 });
  const [macaron3Position, setMacaron3Position] = useState({ top: 0, left: 0});


  const handleMacaronCakeLoad = (
    event: React.SyntheticEvent<HTMLImageElement>
  ) => {
    // Access the macaronCake image dimensions and position
    const cakeImage = event.target as HTMLImageElement;
    const cakeTop = cakeImage.offsetTop;
    const cakeLeft = cakeImage.offsetLeft;
    const cakeRight = cakeImage.offsetLeft;
    const cakeWidth = cakeImage.offsetWidth;

    const macaronImage3 = m3.ref.current; // Get the reference to the macaron image
    const macaronWidth3 = macaronImage3?.offsetWidth || 0;

    // Calculate the initial position of macaron1 relative to the cake image
    const initialMacaronTop = cakeTop - 100; // Adjust the value as needed
    const initialMacaronLeft = cakeLeft; // Adjust the value as needed
    const initialMacaronRight = cakeRight;
    const centerPosition = cakeLeft + (cakeWidth / 2) - (macaronWidth3/2);

    // Update the state with the initial position
    setMacaron1Position({ top: initialMacaronTop, left: initialMacaronLeft });
    setMacaron2Position({ top: initialMacaronTop, right: initialMacaronRight });
    setMacaron3Position({ top: initialMacaronTop, left: centerPosition});

  };

  return (
    <div className={styles.container}>
      <ItemCard {...IcMacaronCake}></ItemCard>
      <div className={styles.graphicsContainer}>
        <img
          ref={m1.ref}
          style={{ ...macaron1Position }}
          className={styles.macaron}
          src={pngMacaron}
        ></img>
        <img
          ref={m2.ref}
          style={{ ...macaron2Position }}
          className={styles.macaron}
          src={pngMacaron}
        ></img>
        <img
          ref={m3.ref}
          style={{ ...macaron3Position }}
          className={styles.macaron}
          src={pngMacaron}
        ></img>
        <img
          onLoad={handleMacaronCakeLoad}
          className={styles.macaronCake}
          src={pngPinkMacaronCake}
        ></img>
      </div>
    </div>
  );
};

export default MacaronCake;
