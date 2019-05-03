import React from "react";
// import profile from "../img/profile.jpg";
import profile from "../img/profile_placeholder.png";
import "./perfilUsuario.scss";
import PublicInfo from "./publicInfo";

const PerfilUsuario = (props: any) => {
  return (
    <div className="perfilusuario-container">
      <div className="profile">
        <img src={profile} alt="profile" />
        <div className="cambiar-perfil">
          <i className="fas fa-pen" />
        </div>
        <div className="fecha-creacion">
          <p>Usuario desde: 30/4/19</p>
        </div>
      </div>
      <PublicInfo />
    </div>
  );
};

export default PerfilUsuario;
