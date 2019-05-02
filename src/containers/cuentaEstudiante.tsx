import React from "react";
import "./cuentaEstudiante.scss";
import Navbar from "../components/navbar";
import PerfilUsuario from "../components/perfilUsuario";

const CuentaEstudiante = (props: any) => {
  return (
    <div className="cuentaestudiante-container">
      <Navbar />
      <PerfilUsuario />
      <PerfilUsuario />
      <PerfilUsuario />
      <PerfilUsuario />
      <PerfilUsuario />
    </div>
  );
};

export default CuentaEstudiante;
