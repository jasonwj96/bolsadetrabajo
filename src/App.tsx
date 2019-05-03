import React from "react";
import "./App.scss";
import CuentaEstudiante from "./containers/cuentaEstudiante";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Mensajes from "./containers/mensajes";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" component={CuentaEstudiante} />
          <Route path="/cuenta" component={CuentaEstudiante} />
          <Route path="/mensajes" component={Mensajes} />
        </div>
      </Router>
    </div>
  );
};

export default App;
