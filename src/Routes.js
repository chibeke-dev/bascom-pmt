import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./landingPages";
import DashboardHome from "./dashboardPages";

/**
 * just a test run not an actual route system
 */
export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/i/" component={DashboardHome} />
      </Switch>
    );
  }
}
