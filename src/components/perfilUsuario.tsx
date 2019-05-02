import React, { useState } from "react";
// import profile from "../img/profile.jpg";
import profile from "../img/profile_placeholder.png";
import "./perfilUsuario.scss";

const PerfilUsuario = (props: any) => {
  const [inputActive, setInputActive] = useState(false);

  const handleInputClick = () => {
    setInputActive(!inputActive);
  };

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
      <form className="form">
        <div className={inputActive ? "input-enabled" : "input-disabled"}>
          <fieldset>
            <legend>Nombre</legend>
            <input
              type="text"
              onFocus={handleInputClick}
              onBlur={handleInputClick}
            />
          </fieldset>
        </div>
      </form>

      <div className="info-usuario" />
    </div>
  );
};

export default PerfilUsuario;
