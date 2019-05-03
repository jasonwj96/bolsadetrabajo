import React, { useState, useEffect } from "react";
import "./navbar.scss";
// import utpLogo from "../img/utp_logo.png";
import fiscLogo from "../img/fisc_logo.png";
import { Link } from "react-router-dom";

const Navbar = (props: any) => {
  const [prevScrollPos, setPrevScrollsPos] = useState(window.pageYOffset);
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
          {/* Oportunidades, cuenta, mensajes, ayuda */}
          <li>
            <Link className="link" to="/oportunidades">
              Oportunidades
            </Link>
          </li>
          <li>
            <Link className="link" to="/cuenta">
              Cuenta
            </Link>
          </li>
          <li>
            <Link className="link" to="/mensajes">
              Mensajes
            </Link>
          </li>
          <li>
            <Link className="link" to="/ayuda">
              Ayuda
            </Link>
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
