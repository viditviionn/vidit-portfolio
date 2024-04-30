import React, { Fragment } from "react";
import { colors } from "../../utils/constants";

import playStoreLogo from "../../assets/playstoreLogo.png";
import Button from "../../components/Button";
import Fade from "react-reveal/Fade";
import { PROJECTS } from "../../utils/projects";

const Projects = () => {

  const handleWebsiteClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <Fragment>
      <div className="section-container-white">
        <span className="heading-sec__main">PROJECTS </span>
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
        <span className="heading-sec__sub mt-4 mb-4">
          Here you will find my recent projects I built for clients <br />
        </span>
        {PROJECTS.map((project, index) => {
          return (
            <Fade bottom>
              <div className="row mt-5" key={index}>
                <div className="col-md-6">
                  <div style={{ paddingRight: "0px" }}>
                    <img
                      src={project.img}
                      style={{ width: "100%" }}
                      alt="logo-img"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <div>
                      <h3
                        className="about__content-title"
                        style={{ marginBottom: "1rem" }}
                      >
                        {project.title}
                      </h3>
                      <span
                        className="heading-sec__sub  mb-4"
                        style={{ textAlign: "start" }}
                      >
                        {project.description}
                      </span>
                      <div className="mt-4 d-flex" style={{gap:'20px', flexWrap:'wrap', justifyContent:'center'}}>
                        {project.weblink && (
                          <div >
                            <Button
                              label={"VISIT WEBSITE"}
                              width="200px"
                              background={colors.mainColor}
                              color={"white"}
                              onClick={() =>
                                handleWebsiteClick(project.weblink)
                              }
                            />
                          </div>
                        )}
                        {project.pslink && (
                          <Button
                            label={
                              <span
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <img
                                  src={playStoreLogo}
                                  style={{
                                    width: "28px",
                                    marginRight: "5px",
                                    marginBottom: "-8px",
                                  }}
                                  alt="logo-img"
                                />
                                Download App{" "}
                              </span>
                            }
                            width="230px"
                            background={colors.mainColor}
                            color={"white"}
                            onClick={() => handleWebsiteClick(project.pslink)}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Projects;
