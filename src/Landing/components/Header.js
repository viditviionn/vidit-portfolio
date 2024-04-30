import React, { useState } from "react";
import { Link } from "react-scroll";
import ViditImg from "../../assets/ViditImg.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "white" }}
    >
      <div className="container-fluid px-4 py-1">
        <span className="navbar-brand d-flex align-items-center">
          <div>
            <img
              src={ViditImg}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                marginRight: "15px",
                objectFit: "cover",
              }}
              alt="logo-img"
            />
          </div>
          <div style={{ fontWeight: "900" }}>VIDIT</div>
        </span>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMenuToggle}
          aria-controls="navbarNavAltMarkup"
          aria-expanded={isMenuOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          id="navbarNavAltMarkup"
          style={{ justifyContent: "end" }}
        >
          <div className="navbar-nav">
            <span className="nav-link header-opt active">
              <Link
                to="info"
                spy={true}
                smooth={true}
                offset={-70} // Adjust the offset as needed
                duration={500}
                onClick={closeMenu}
              >
                Home
              </Link>
            </span>
            <span className="nav-link header-opt active" >
              <Link
                to="aboutMe"
                spy={true}
                smooth={true}
                offset={-70} // Adjust the offset as needed
                duration={500}
                onClick={closeMenu}
              >
                About
              </Link>
            </span>
            <span className="nav-link header-opt active" >
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70} // Adjust the offset as needed
                duration={500}
                onClick={closeMenu}
              >
                Projects
              </Link>
            </span>
            <span className="nav-link header-opt active" >
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70} // Adjust the offset as needed
                duration={500}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
