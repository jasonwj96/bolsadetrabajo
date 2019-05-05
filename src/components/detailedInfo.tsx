import React from "react";
import "./detailedInfo.scss";
import CustomButton from "./customButton";

const DetailedInfo = (props: any) => {
  return (
    <div className="detailedInfo-container">
      <p>Información detallada</p>
      <form className="form">
        <div className="input">
          <fieldset>
            <legend>Dirección</legend>
            <textarea />
          </fieldset>
        </div>

        <div className="input">
          <fieldset>
            <legend>Habilidades</legend>
            <textarea />
          </fieldset>
        </div>

        <div className="input">
          <fieldset>
            <legend>Experiencia</legend>
            <textarea />
          </fieldset>
        </div>

        <div className="input">
          <fieldset>
            <legend>Carrera del encargado de la cuenta</legend>
            <input type="text" />
          </fieldset>
        </div>

        <div className="input">
          <fieldset>
            <legend>Año de nacimiento</legend>
            <input type="date" />
          </fieldset>
        </div>

        <div className="input">
          <fieldset>
            <legend>País de nacimiento</legend>
            <input type="text" />
          </fieldset>
        </div>

        <div className="input">
          <fieldset>
            <legend>Adjuntar hoja de vida</legend>
            <input type="file" />
          </fieldset>
        </div>
      </form>
      <CustomButton name="Actualizar" />
    </div>
  );
};

export default DetailedInfo;
