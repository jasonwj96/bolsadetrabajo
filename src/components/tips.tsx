import React from "react";
import "./tips.scss";
import CustomButton from "./customButton";

const Tips = (props: any) => {
  return (
    <div className="tips-container">
      <p className="heading">Tips</p>
      <p className="text">Si deseas cambiar tu contraseña haz click aquí</p>
      <CustomButton className="cambiar-contr-btn" name="Cambiar" />
    </div>
  );
};

export default Tips;
