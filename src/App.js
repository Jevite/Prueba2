import React, { useState, useEffect } from "react";
import "./styles.css";
import HomePage from "./Components/HomePage/index";
import Register from "./Components/Register/Register";
import Stats from "./Components/Stats/Stats";
import History from "./Components/History/Main";
import { CssBaseline, CircularProgress } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserContext from "./Context/context";
import Axios from "axios";

//Punto de referencia I
function App(props) {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });


  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      Holaaaa
      <div>
        <CssBaseline />
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/registro" component={Register} />
            <Route exact path="/estadisticas" component={Stats} />
            <Route exact path="/historia-clinica" component={History} />
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
