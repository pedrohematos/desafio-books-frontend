import React from "react";
import { Switch, Route } from "react-router-dom";

import LoginPage from "../pages/login-page/login-page.component";
import HomePage from "../pages/home-page/home-page.component";
import PrivateRoute from "./private-route";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <PrivateRoute path="/home" component={HomePage} />
    </Switch>
  );
};

export default Routes;
