import React from "react";
import "./App.scss";
import CuentaEstudiante from "./containers/cuentaEstudiante";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Mensajes from "./containers/mensajes";
import Oportunidades from "containers/oportunidades";

const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" component={CuentaEstudiante} />
          <Route path="/cuenta" component={CuentaEstudiante} />
          <Route path="/mensajes" component={Mensajes} />
          <Route path="/oportunidades" component={Oportunidades} />
        </div>
      </Router>
    </div>
  );
};

export default App;
