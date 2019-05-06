import React from "react";
import "./App.scss";
import CuentaEstudiante from "./containers/cuentaEstudiante";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Mensajes from "./containers/mensajes";
import Oportunidades from "containers/oportunidades";
import Ayuda from "containers/ayuda";

const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" component={CuentaEstudiante} />
          <Route path="/cuenta" component={CuentaEstudiante} />
          <Route path="/mensajes" component={Mensajes} />
          <Route path="/oportunidades" component={Oportunidades} />
          <Route path="/ayuda" component={Ayuda} />
        </div>
      </Router>
    </div>
  );
};

export default App;
