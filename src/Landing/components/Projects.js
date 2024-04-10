import React, { Fragment } from "react";
import { colors } from "../../utils/constants";
import abbypagesProImg from "../../assets/abbypages.png";
import belayLink from "../../assets/belayLink.png";
import nokelsTv from "../../assets/nokelsTV.png";
import slushDating from "../../assets/Slush dating.png";
import krustty from "../../assets/krustty.png";
import hdfc from "../../assets/hdfc.jpg";
import Inergy from "../../assets/Inergy.png";
import playStoreLogo from "../../assets/playstoreLogo.png";
import Button from "../../components/Button";
import Fade from "react-reveal/Fade";

const Projects = () => {
  const projects = [
    {
      img: Inergy,
      title: "Innergy",
      pslink: "https://play.google.com/store/apps/details?id=com.imih.innergy",
      description:
        "Discover holistic well-being with Innergy, This app is for reducing stress, staying active, and embracing a plant-based lifestyle.",
    },
    {
      img: krustty,
      title: "Krustty",
      weblink: "https://krustty.com/",
      pslink: "https://play.google.com/store/apps/details?id=com.krustty",
      description:
        "Book your table and order your meals in advance Find offers directly on the Krustty app.   Invite your loved ones and share the bill.",
    },
    {
      img: belayLink,
      title: "Belaylink",
      weblink: "https://dev.belaylink.com/",
      description:
        "Create your sports profile and find your stoke. Update what you are up to, and let people reach out to you. Connect and do sports together. Follow friends and stay posted for their activities.",
    },
    {
      img: hdfc,
      title: "Banks Marketing Audit",
      pslink: "https://play.google.com/store/apps/details?id=com.audit.Kreate",
      description:
        "This app is focused on Auditing Marketing related aspects. With periodic marketing audit institutions can monitor, manage and improve seamless customer experience across their branches.",
    },
    {
      img: abbypagesProImg,
      title: "AbbyPages",
      weblink: "https://www.abbypages.com/",
      description:
        "On-demand services web application, just like Yelp, allows customers to book the services in one click. It also provides User Reviews and Recommendations of Best Restaurants, Shopping, Nightlife, Food, Entertainment, Things to Do, Services and More. Facilitates scheduling the Appointment, Hire for Job on an hourly or fixed amount, Payments, Live tracking of orders, KYC system.",
    },
   
    {
      img: nokelsTv,
      title: "Nokels TV",
      pslink:
        "https://play.google.com/store/apps/details?id=com.nokelstv&pli=1/",
      description:
        "NokelsTV is a Video streaming platform that distributes African movies and tv shows. NokelsTV is a subscription based app and release movies and tv shows on a monthly basis",
    },
    {
      img: slushDating,
      title: "Slush Dating",
      pslink:
        "https://www.slushdating.com/",
      description:
        "Create your profile. Book onto an event. Go through a series of 3-minute video dates. During your dates, you can decide whether you like or dislike that person",
    },
   
   
    
  ];
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
        {projects.map((project, index) => {
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
                      <div className="mt-4 text-start d-flex">
                        {project.weblink && (
                          <div style={{ marginRight: "20px" }}>
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
