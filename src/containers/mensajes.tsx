import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import "./mensajes.scss";

const Mensajes = (props: any) => {
  useEffect(() => {
    document.title = "Bolsa de trabajo - Mensajes";
  }, []);

  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Mensajes;
