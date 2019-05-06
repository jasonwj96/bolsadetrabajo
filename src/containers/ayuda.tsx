import React from "react";
import Navbar from "components/navbar";
import Footer from "components/footer";
import "./ayuda.scss";
import Tips from "components/tips";
import { Link } from "react-router-dom";

const Ayuda = (props: any) => {
  return (
    <div className="ayuda-container">
      <Navbar />
      <div className="tips-ayuda">
        <div className="panel-ayuda">
          <p className="heading">¿Necesita ayuda en como usar el sitio?</p>

          <div className="linkset">
            <p>Descargue aquí el manual de usuario:</p>
            <Link className="link" to="/">
              <p>Guiausuario.pdf</p>
            </Link>
          </div>

          <div className="linkset">
            <p>¿Necesita contactar los administradores del sitio?</p>
            <Link className="link" to="/">
              <p>ayudausuario@utp.ac.pa</p>
            </Link>
          </div>

          <div className="linkset">
            <p>¿Necesita reportar irregularidades en el sitio?</p>
            <Link className="link" to="/">
              <p>ayudausuario@utp.ac.pa</p>
            </Link>
          </div>
        </div>

        <Tips
          text="Haga click en los enlaces para descargar el archivo correspondiente"
          btnActive={false}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Ayuda;
