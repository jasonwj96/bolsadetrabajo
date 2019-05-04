import React from "react";
import "./tips.scss";
import CustomButton from "./customButton";

const Tips = (props: any) => {
  return (
    <div className="tips-container">
      <p className="heading">Tips</p>
      <p className="text">{props.text}</p>
      {props.btnActive ? <CustomButton name={props.btnText} /> : null}
    </div>
  );
};

export default Tips;
