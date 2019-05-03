import React from "react";
import "./cuentaEstudiante.scss";
import Navbar from "../components/navbar";
import PerfilUsuario from "../components/perfilUsuario";
import DetailedInfo from "../components/detailedInfo";

const CuentaEstudiante = (props: any) => {
  return (
    <div className="cuentaestudiante-container">
      <Navbar />
      <PerfilUsuario />
      <DetailedInfo />
    </div>
  );
};

export default CuentaEstudiante;
