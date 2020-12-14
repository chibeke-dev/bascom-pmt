import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import MyTasks from "./MyTasks";
import Notifications from "./Notifications";
import Settings from "./Settings";
import Components from "../components/Components";

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/private/components" exact component={Components} />
        <Route path="/i/my-task" exact component={MyTasks} />
        <Route path="/settings" exact component={Settings} />
        <Route path="/i/notifications" exact component={Notifications} />
      </Switch>
    );
  }
}
