import React from "react";
import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Team from "../components/Team";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="mx-12">
        <AboutUs />
        <Projects />
      </div>
      <Services />
      <Team />
    </div>
  );
};

export default Home;
