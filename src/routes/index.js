import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "../components/content/LandingPage";
import Dashboard from "../components/content/Dashboard";
import LogIn from "../components/auth/LogIn";
import SignUp from "../components/auth/SignUp";

export default () => (
  <Switch>
    <Route path="/" exact component={LandingPage} />
    <Route path="/login" component={LogIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/dashboard" component={Dashboard} />
  </Switch>
);
