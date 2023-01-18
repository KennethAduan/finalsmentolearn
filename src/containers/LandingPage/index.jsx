import React from "react";
import Header from "../../components/Header/HeaderLanding/Header";
import Hero from "./Hero.jsx";
import Feature from "./Feature";
import Service from "./Service";
import Team from "./Team";
import Footer from "../../components/Footer/FooterLanding/Footer";
import WOW from "wow.js";
import "../../styles/animate.css";
import "../../styles/lineIcons.css";
import "../../styles/Style.css";
import "../../styles/tailwind.css";
const index = () => {
  new WOW().init();
  return (
    <div>
      <Header />
      <Hero />
      <Feature />
      <Service />
      <Team />
      <Footer />
    </div>
  );
};

export default index;
