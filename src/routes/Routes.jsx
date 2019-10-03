import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "../container/LoginPage";
import RegisterPage from "../container/RegisterPage";
import MainMenu from "../container/MainMenu";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/home" component={MainMenu} />
      </Switch>
    </Router>
  );
};

export default Routes;
