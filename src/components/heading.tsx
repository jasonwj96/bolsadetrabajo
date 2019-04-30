import React from "react";
import Navbar from "./navbar";
import "./heading.scss";
import fiscLogo from "../img/fisc_logo.png";
import utpLogo from "../img/utp_logo.png";

function Heading() {
  return (
    <div className="heading-container">
      {/* <img src={utpLogo} alt="utp logo" /> */}
      <div className="heading-top">
        {/* <p className="heading-title">Portal bolsa de trabajo</p> */}
        <Navbar />
      </div>
      {/* <img src={fiscLogo} alt="fisc logo" /> */}
    </div>
  );
}

export default Heading;
