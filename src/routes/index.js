import React from "react";
import { Switch, Route } from "react-router-dom";
import Content from "../components/content/Content";
import LogIn from "../components/auth/LogIn";
import SignUp from "../components/auth/SignUp";

export default () => (
  <Switch>
    <Route path="/" exact component={Content} />
    <Route path="/login" component={LogIn} />
    <Route path="/signup" component={SignUp} />
  </Switch>
);
