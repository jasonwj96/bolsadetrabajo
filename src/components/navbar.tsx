import React, { useState, useEffect } from "react";
import "./navbar.scss";
// import utpLogo from "../img/utp_logo.png";
import fiscLogo from "../img/fisc_logo.png";

const Navbar = (props: any) => {
  const [prevScrollPos, setPrevScrollsPos] = useState(window.pageYOffset);
  // const [shrink, setShrink] = useState(true);
  const [className, setClassName] = useState("navbar-container");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    if (prevScrollPos > window.pageYOffset) {
      setClassName("navbar-container");
    } else {
      setClassName("navbar-container-hidden");
    }
    setPrevScrollsPos(window.pageYOffset);
  };

  return (
    <div className={className}>
      <div className="navbar-top">
        <div className="hamburger">
          <div />
          <div />
          <div />
        </div>
        {/* <img src={utpLogo} alt="utp logo" /> */}

        <p>Cuenta del estudiante</p>
        <img src={fiscLogo} alt="fisc logo" />
      </div>
      <div className="navbar-tabs">
        <ul>
          <li>
            <p>Oportunidades</p>
          </li>
          <li>
            <p>Cuenta</p>
          </li>
          <li>
            <p>Mensajes</p>
          </li>
          <li>
            <p>Ayuda</p>
          </li>
        </ul>
        <div className="searchbox">
          <div className="search-icon">
            <i className="fas fa-search" />
          </div>
          <input type="text" name="search" placeholder="Buscar" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
