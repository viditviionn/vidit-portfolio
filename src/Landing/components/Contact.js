import React, { Fragment, useEffect, useState } from "react";
import { adminMailId, colors } from "../../utils/constants";
import Button from "../../components/Button";
import Jump from "react-reveal/Jump";
import RubberBand from "react-reveal/RubberBand";

const Contact = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showValidError, setShowValidError] = useState(false);

  const [messageData, setMessageData] = useState({
    message: "",
    name: "",
    email: "",
  });

  useEffect(() => {
    if (showSuccess) {
      setTimeout(() => {
        setShowSuccess(false);
      }, 2000);
    }
  }, [showSuccess]);

  useEffect(() => {
    if (showValidError) {
      setTimeout(() => {
        setShowValidError(false);
      }, 2000);
    }
  }, [showValidError]);

  const handleEmailClick = () => {
    if (messageData.name !== "" && messageData.email !== "") {
      var mailtoLink =
        "mailto:" +
        adminMailId +
        "?subject=" +
        encodeURIComponent(
          `Contact from vidit Portfolio by ${messageData.name}`
        ) +
        "&body=" +
        encodeURIComponent(
          "Sender's Name: " +
            messageData.name +
            "\n\n" +
            "Sender's Email: " +
            messageData.email +
            "\n\n" +
            "Message: " +
            messageData.message
        );

      window.location.href = mailtoLink;
      setMessageData({
        message: "",
        name: "",
        email: "",
      });
    } else {
      setShowValidError(true);
    }
  };

  return (
    <Fragment>
      <Jump>
        <div
          className="section-container-transparent"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span className="heading-sec__main">CONTACT </span>
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
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as <br />
            possible or mail me at{" "}
            <span
              style={{
                color: colors.mainColor,
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              <a href={`mailto:${adminMailId}`}>{adminMailId}</a>
            </span>
          </span>
          <div className="contact-fleld-container">
            <div className="mb-3">
              <label
                htmlFor="formGroupExampleInput"
                className="form-label contact__form-label"
              >
                Name
              </label>
              <input
                type="text"
                className="form-control contact__form-input"
                id="formGroupExampleInput"
                placeholder="Enter your name"
                onChange={(e) =>
                  setMessageData({ ...messageData, name: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="formGroupExampleInput2"
                className="form-label contact__form-label"
              >
                Email
              </label>
              <input
                type="email"
                required
                className="form-control contact__form-input"
                id="formGroupExampleInput2"
                placeholder="Enter your email"
                onChange={(e) =>
                  setMessageData({ ...messageData, email: e.target.value })
                }
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="formGroupExampleInput2"
                className="form-label contact__form-label"
              >
                Message
              </label>
              <textarea
                rows={8}
                type="text"
                className="form-control contact__form-input"
                id="formGroupExampleInput2"
                placeholder="Enter your message"
                onChange={(e) =>
                  setMessageData({ ...messageData, message: e.target.value })
                }
              />
            </div>
            {showValidError && (
              <div
                className="alert alert-danger mt-3"
                style={{ marginBottom: "-30px" }}
                role="alert"
              >
                Enter required fields!
              </div>
            )}
            <div
              style={{
                textAlign: "center",
                marginTop: showValidError ? "50px" : "unset",
              }}
            >
              <RubberBand>
                <Button
                  label={"SUBMIT"}
                  width="200px"
                  background={colors.mainColor}
                  color={"white"}
                  onClick={handleEmailClick}
                />
              </RubberBand>
            </div>
          </div>
        </div>
      </Jump>
    </Fragment>
  );
};

export default Contact;
