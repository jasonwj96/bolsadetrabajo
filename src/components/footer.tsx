import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = (props: any) => {
  const content = (
    <div className="footer">
      <div className="footer-links">
        <div className="linkSet">
          <Link to="/">Mapa de ubicación</Link>
          <Link to="/">Mapa de sitio</Link>
          <Link to="/">Contáctenos</Link>
          <Link to="/">Identidad visual</Link>
        </div>
      </div>
      <div className="bottom">
        <p>
          2019 Copyright &copy; <span> Universidad Tecnológica de Panama</span>
        </p>
      </div>
    </div>
  );

  return content;
};

export default Footer;
