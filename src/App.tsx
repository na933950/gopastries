import "./App.css";
import Home from "./assets/pages/home/Home";
import { ParallaxProvider } from 'react-scroll-parallax';

export const pages = ["Home", "Menu", "Order", "About", "Contact", "Testimonials"];

export const pageDirectory = {
  "Home":"/home",
  "Menu": "/menu",
  "Order": "https://docs.google.com/forms/d/e/1FAIpQLSfMXfDq0Eeo-8i81cBC5SCiqRa58fcHZJ19w5_NwWIawPS_XQ/viewform?pli=1",
  "About": "/about",
  "Testimonials": "/testimonials"
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
