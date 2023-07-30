import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./assets/pages/home/Home.tsx";
import { ParallaxProvider } from "react-scroll-parallax";
import Menu from "./assets/pages/Menu/Menu.tsx";
import Testimonials from "./assets/pages/Testimonials/Testimonials.tsx";
import About from "./assets/pages/About/About.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/home",
    element: <Home></Home>
  },
  {
    path: "/menu",
    element: <Menu></Menu>
  },
  {
    path: "/testimonials",
    element: <Testimonials></Testimonials>
  },
  {
    path: "/about",
    element: <About></About>
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ParallaxProvider>
      <RouterProvider router={router} />
    </ParallaxProvider>
  </React.StrictMode>
);
