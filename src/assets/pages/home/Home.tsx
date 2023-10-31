import Navbar from "../../globalComponents/Navbar";
import { pageDirectory } from "../../../App";
import HeroImage from "./components/HeroImage";
import AboutSection from "./components/AboutSection";
import ParallaxSection from "../../globalComponents/ParallaxSection";
import parallaxOne from "../../images/horizontal/cupcakeflowerbouquet.jpg";
import parallaxTwo from "../../images/horizontal/macaronstack.jpg";
import parallaxThree from "../../images/horizontal/matchastackwide.jpg";
import {
  verticalMacaron,
  verticalMatchaStack,
  verticalHazelnutCookies,
} from "../../images/vertical";
import reviews from "../../reviews";
import FeaturedProducts from "./components/FeaturedProducts";
import MacaronCake from "./components/MacaronCake/MacaronCake";
import Footer from "../../globalComponents/Footer";
import Modal from "./components/Modal";
import { useEffect, useState } from "react";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsModalOpen(true);
    }, 3000);
  }, []);

  return (
    <>
      {isModalOpen ? <Modal closeModal={() => setIsModalOpen(false)}/> : null}

      <Navbar pages={pageDirectory}></Navbar>

      <HeroImage></HeroImage>

      <AboutSection></AboutSection>

      <ParallaxSection
        height="65vh"
        img={parallaxOne}
        vertImg={verticalHazelnutCookies}
      >
        {reviews[0]}
      </ParallaxSection>

      <FeaturedProducts></FeaturedProducts>

      <ParallaxSection
        height="65vh"
        img={parallaxTwo}
        vertImg={verticalMacaron}
      >
        {reviews[1]}
      </ParallaxSection>

      <MacaronCake></MacaronCake>

      <ParallaxSection
        height="65vh"
        img={parallaxThree}
        vertImg={verticalMatchaStack}
      >
        {reviews[2]}
      </ParallaxSection>

      <Footer pages={pageDirectory}></Footer>
    </>
  );
};

export default Home;
