import React from "react";
import "./customButton.scss";

const CustomButton = (props: any) => {
  return <button className="custombutton-container">{props.name}</button>;
};

export default CustomButton;
