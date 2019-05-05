import React from "react";
import "./oportunidades.scss";
import Navbar from "components/navbar";
import OportunidadEntry from "components/oportunidadEntry";
import Tips from "components/tips";
import Footer from "components/footer";

const Oportunidades = (props: any) => {
  return (
    <div className="oportunidades-container">
      <Navbar />
      <p className="oportunidad-heading">Oportunidades de empleo</p>
      <div className="list-tips">
        <div className="entry-list">
          <OportunidadEntry />
          <OportunidadEntry />
          <OportunidadEntry />
        </div>
        <Tips
          btnActive={false}
          text="Para mas detalles sobre la vacante haz click en la palabra que dice mas detalles"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Oportunidades;
