import React from "react";
// import profile from "../img/profile.jpg";
import profile from "../img/profile_placeholder.png";
import "./perfilUsuario.scss";

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
      <div className="public-info">
        <p>Información publica</p>
        <form className="form">
          <div className="input">
            <fieldset>
              <legend>Nombre</legend>
              <input type="text" />
            </fieldset>
          </div>
          <div className="input">
            <fieldset>
              <legend>Apellido</legend>
              <input type="text" />
            </fieldset>
          </div>
          <div className="input">
            <fieldset>
              <legend>Cedula</legend>
              <input type="text" />
            </fieldset>
          </div>
          <div className="input">
            <fieldset>
              <legend>Celular/Telefono</legend>
              <input type="text" />
            </fieldset>
          </div>
        </form>
      </div>

      <div className="info-usuario" />
    </div>
  );
};

export default PerfilUsuario;
