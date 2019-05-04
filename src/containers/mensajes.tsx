import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import "./mensajes.scss";
import Footer from "components/footer";
import EmailView from "components/emailView";

const Mensajes = (props: any) => {
  useEffect(() => {
    document.title = "Bolsa de trabajo - Mensajes";
  }, []);

  return (
    <div>
      <Navbar />
      <EmailView />
      <Footer />
    </div>
  );
};

export default Mensajes;
