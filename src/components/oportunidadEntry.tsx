import React from "react";
import pcLogo from "../img/pc_icon.jpg";
import "./oportunidadEntry.scss";
import CustomButton from "./customButton";

const OportunidadEntry = (props: any) => {
  return (
    <div className="oportunidadentry-container">
      <img src={pcLogo} alt="imagen compañia" />
      <div className="oportunidad-info">
        <p className="header">
          Se necesita desarrollador de software - Corporaciones, S.A.
        </p>
        <div className="oportunidad-details">
          <div className="oportunidad-detail">
            <p className="header">Detalles sobre la oportunidad:</p>
            <p className="description">
              Se necesita practicantes, o estudiantes a punto de graduarse, para
              empresa de desarrollo. Tiempo parcial de 7:00 A.M. a 12:00 P.M.
            </p>
          </div>
          <div className="oportunidad-detail">
            <p className="header">Requisitos:</p>
            <p className="description">
              Es necesario que sepan ingles, y que tengan un buen manejo del
              lenguaje JAVA.
            </p>
          </div>
          <div className="oportunidad-detail">
            <p className="header">Plazas disponibles:</p>
            <p className="description">3</p>
          </div>
        </div>
        <CustomButton name="Mas detalles" />
      </div>
    </div>
  );
};

export default OportunidadEntry;
