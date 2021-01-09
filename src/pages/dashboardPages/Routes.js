import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import DashboardHome from "./DashboardHome";
import MyTasks from "./MyTasks";
import Notifications from "./Notifications";
import Settings from "./Settings";
import Components from "../../components/Components";
import Projects from "./Projects";

export default class Routes extends Component {
	render() {
		return (
			<Switch>
				<Route path="/" exact component={DashboardHome} />
				<Route path="/private/components" exact component={Components} />
				<Route path="/projects" exact component={Projects} />
				<Route path="/i/my-task" component={MyTasks} />
				<Route path="/settings" component={Settings} />
				<Route path="/i/notifications" component={Notifications} />
			</Switch>
		);
	}
}
