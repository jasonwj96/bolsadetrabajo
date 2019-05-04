import React from "react";
import "./tips.scss";
import CustomButton from "./customButton";

const Tips = (props: any) => {
  return (
    <div className="tips-container">
      <p className="heading">Tips</p>
      <p className="text">{props.text}</p>
      <CustomButton name="Cambiar contraseña" />
    </div>
  );
};

export default Tips;
