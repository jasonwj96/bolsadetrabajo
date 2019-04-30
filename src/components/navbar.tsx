import React from "react";
import "./navbar.scss";
// import utpLogo from "../img/utp_logo.png";
import fiscLogo from "../img/fisc_logo.png";

const Navbar = (props: any) => {
  // const selectItem = (event: any) => {};

  return (
    <div className="navbar-container">
      <div className="navbar-top">
        {/* <img src={utpLogo} alt="utp logo" /> */}
        <div className="hamburger">
          <div />
          <div />
          <div />
        </div>
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
