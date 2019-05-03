import React from "react";
import "./publicInfo.scss";
import Tips from "./tips";

const PublicInfo = (props: any) => {
  return (
    <div className="publicinfo-container">
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
  );
};

export default PublicInfo;
