import React, { useEffect } from "react";
import "./cuentaEstudiante.scss";
import Navbar from "../components/navbar";
import PerfilUsuario from "../components/perfilUsuario";
import DetailedInfo from "../components/detailedInfo";
import Footer from "components/footer";

const CuentaEstudiante = (props: any) => {
  useEffect(() => {
    document.title = "Bolsa de trabajo - Cuenta";
  }, []);

  return (
    <div className="cuentaestudiante-container">
      <Navbar />
      <PerfilUsuario />
      <DetailedInfo />
      <Footer />
    </div>
  );
};

export default CuentaEstudiante;
