import React, { Fragment } from "react";
import { adminMailId, colors } from "../../utils/constants";
import Button from "../../components/Button";
import {  Link } from "react-scroll";
import Fade from "react-reveal/Fade";

const AboutMe = () => {
  const skills = [
    "React/Next JS",
    "React Native",
    "JavaScript",
    "Node/Express/Nest",
    "Python/Django",
    "PHP/Laravel",
    "AWS/Azure/GCP",
    "HTML/CSS",
    "Material UI/TailWind",
    "Mobile Apps (iOS/Android)",
    "Websites development",
    "Web applications development",
    "Data Intensive Applications",
    "Highly scalable Backend",
    "GraphQL/API development",
    "SaaS",
    "Github",
    "Responsive Design",
    "SEO",
  ];
  return (
    <Fragment>
      <div className="section-container-white">
        <Fade bottom>
          <span className="heading-sec__main">ABOUT ME </span>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                border: `3px solid ${colors.mainColor}`,
                width: "40px",
                textAlign: "center",
                borderRadius: "10px",
              }}
            ></div>
          </div>
        </Fade>
        <Fade bottom>
          <span className="heading-sec__sub mt-4 mb-4">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms
            <br /> of programming and technology
          </span>
        </Fade>
        <Fade bottom>
          <div className="row mt-5">
            <div className="col-md-6 mt-3">
              <div style={{ paddingRight: "30px" }}>
                <h3 className="about__content-title">Get to know me!</h3>
                <span
                  className="heading-sec__sub mt-4 mb-2"
                  // style={{ textAlign: "start" }}
                >
                  I am passionate about building excellent software that
                  improves the lives of those around me. I specialize in
                  creating software for clients ranging from individuals and
                  small-businesses all the way to large enterprise corporations.
                  What would you do if you had a software expert available at
                  your fingertips?
                </span>

                <span
                  className="heading-sec__sub mt-4 mb-2"
                  // style={{ textAlign: "start" }}
                >
                  I'm open to <b>Job</b> opportunities where I can contribute,
                  learn and grow. If you have a good opportunity that matches my
                  skills and experience then don't hesitate to{" "}
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70} // Adjust the offset as needed
                    duration={500}
                  >
                    <b className="contact-css7">Contact</b>&nbsp;
                  </Link>
                  me or email me at{" "}
                  <span
                    style={{
                      color: colors.mainColor,
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    <a href={`mailto:${adminMailId}`}>{adminMailId}</a>
                  </span>
                  .
                </span>
              </div>
            </div>
            <div className="col-md-6 mt-3">
              <h3 className="about__content-title">My Skills</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap:'12px', justifyContent:'center' }}>
                {skills.map((skill, index) => {
                  return (
                    <div key={index} className="css-skill">
                      {" "}
                      {skill}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
        <div className="mt-5 text-center">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70} // Adjust the offset as needed
            duration={500}
          >
            <Button
              label={"CONTACT"}
              width="200px"
              background={colors.mainColor}
              color={"white"}
            />
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutMe;
