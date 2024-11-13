import React, { Fragment } from "react";
import Button from "../../components/Button";
import { colors } from "../../utils/constants";
import { Link } from "react-scroll";
import Pulse from "react-reveal/Pulse";
import Reveal from "react-reveal/Reveal";

const Info = () => {
  return (
    <Fragment>
      <div className="container">
        <div
          className="css-p1"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            padding: "120px",
          }}
        >
          <Pulse>
            <h1 className="heading-primary">Hey, I'm Vidit Shukla</h1>
          </Pulse>
          <Reveal effect="fadeInUp">
            <p className="text-primary">
              I'm a Full-Stack Web Developer building the Front-end of Websites
              and Web Applications that leads to the success of the overall
              product. Check out some of my work in the Projects.
            </p>
          </Reveal>
          <div className="mt-3">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70} // Adjust the offset as needed
              duration={500}
            >
              <Button
                label={"PROJECTS"}
                width="250px"
                background={colors.mainColor}
                color={"white"}
              />
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Info;
