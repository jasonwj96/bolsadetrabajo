import React from "react";
import "./App.scss";
import CuentaEstudiante from "./containers/cuentaEstudiante";
import { Router, Route } from "react-router-dom";
import Mensajes from "./containers/mensajes";
import Oportunidades from "containers/oportunidades";
import Ayuda from "containers/ayuda";
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();

const App = (props: any) => {
  return (
    <div className="App">
      <Router history={customHistory}>
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
