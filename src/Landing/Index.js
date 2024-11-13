import React, { Fragment } from "react";
import Header from "./components/Header";
import Info from "./components/Info";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import { Element } from "react-scroll";
// import Contact from "./components/Contact";

const Index = () => {
  return (
    <Fragment>
      <div id="site-wrapper" className="site-wrapper home-main hero-background">
        <Header />
        <div className="content-wrap">
          <Element name="info">
            <Info />
          </Element>
          <Element name="aboutMe">
            <AboutMe />
          </Element>
          <Element name="projects">
            <Projects />
          </Element>
          {/* <Element name="contact">
            <Contact />
          </Element> */}
        </div>
      </div>
    </Fragment>
  );
};

export default Index;
