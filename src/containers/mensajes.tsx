import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import "./mensajes.scss";
import Footer from "components/footer";
import EmailView from "components/emailView";
import Tips from "components/tips";
import CustomButton from "components/customButton";

const Mensajes = (props: any) => {
  useEffect(() => {
    document.title = "Bolsa de trabajo - Mensajes";
  }, []);

  return (
    <div className="mensajes-container">
      <Navbar />
      <div className="email-view-tips">
        <EmailView />
        <Tips
          btnActive={false}
          text="Puedes dejarnos saber cualquier inconveniente que ocurra en nuestro sitio! Tambien quejas, si desea."
        />
      </div>
      <Footer />
    </div>
  );
};

export default Mensajes;
