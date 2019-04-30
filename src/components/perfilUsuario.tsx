import React from "react";
import profile from "../img/profile.jpg";

import "./perfilUsuario.scss";

const PerfilUsuario = (props: any) => {
  return (
    <div className="perfilusuario-container">
      <div className="profile">
        <img src={profile} alt="profile" />
        <div className="cambiar-perfil">
          {/* <p>Cambiar perfil</p>
           */}
          <i className="fas fa-pen" />
        </div>
        <div className="fecha-creacion">
          <p>Usuario desde: 30/4/19</p>
        </div>
      </div>

      <div className="info-usuario" />
    </div>
  );
};

export default PerfilUsuario;
