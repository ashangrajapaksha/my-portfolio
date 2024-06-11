import React from "react";
import Nav from "../../shared/nav/Nav";
import Footer from "../../shared/footer/Footer";
import Intruction from "../intruction/Intruction";
import Education from "../education/Education";
import Project from "../project/Project";
import Contact from "../contact/Contact";
import Experience from "../experience/Experience";
import AboutMe from "../about-me/AboutMe";

function Home() {
  return (
    <div>
      <Intruction />
      <AboutMe />
      <Experience />
      <Education />
      <Project />
      <Contact />
    </div>
  );
}

export default Home;
