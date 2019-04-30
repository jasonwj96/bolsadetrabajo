import React from "react";
import "./navbar.scss";
import utpLogo from "../img/utp_logo.png";
import fiscLogo from "../img/fisc_logo.png";

const Navbar = (props: any) => {
  const selectItem = (event: any) => {};

  return (
    <div className="navbar-container">
      <img src={utpLogo} alt="utp logo" />
      <div className="hamburger">
        <div />
        <div />
        <div />
      </div>
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
      <img src={fiscLogo} alt="fisc logo" />
    </div>
  );
};

export default Navbar;
