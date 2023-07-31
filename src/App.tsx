import "./App.css";
import Home from "./assets/pages/home/Home";
import { ParallaxProvider } from 'react-scroll-parallax';
import { AiOutlineHome, AiOutlineShoppingCart, AiOutlineQuestionCircle } from "react-icons/ai";
import { BiFoodMenu } from "react-icons/bi";
import {HiOutlineChatBubbleLeftEllipsis} from "react-icons/hi2";

export const pages = ["Home", "Menu", "Order", "About", "Contact", "Testimonials"];

export const pageDirectory = {
  "Home":{
    path: "/home",
    icon: <AiOutlineHome />
  },
  "Menu": {
    path: "/menu",
    icon: <BiFoodMenu />
  },
  "Order": {
    path: "https://docs.google.com/forms/d/e/1FAIpQLSfMXfDq0Eeo-8i81cBC5SCiqRa58fcHZJ19w5_NwWIawPS_XQ/viewform?pli=1",
    icon: <AiOutlineShoppingCart />
  },
  "About": {
    path: "/about",
    icon: <AiOutlineQuestionCircle />
  },
  "Testimonials": {
    path: "/testimonials",
    icon: <HiOutlineChatBubbleLeftEllipsis />
  }
}

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

function App() {
  return (
    <ParallaxProvider>
      <Home />
    </ParallaxProvider>
  );
}

export default App;
