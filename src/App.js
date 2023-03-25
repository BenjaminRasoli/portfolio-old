import React, { useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import Information from "./components/Information/Information";
import Crafts from "./components/Crafts/Crafts";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import "aos/dist/aos.css";
import AOS from "aos";

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init();
  }, []);
  return (
    <>
      <NavBar />
      <Information  />
      <Crafts />
      <About />
      <Contact />
    </>
  );
};

export default App;
