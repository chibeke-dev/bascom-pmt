import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import AuthRoute from "./components/AuthRoutes";
import Components from "./components/Components";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import DashboardHome from "./pages/dashboardPages/Index";
import MyTasks from "./pages/dashboardPages/MyTasks";
import Notifications from "./pages/dashboardPages/Notifications";
import Projects from "./pages/dashboardPages/Projects";
import Settings from "./pages/dashboardPages/Settings";
import Landing from "./pages/landingPages/Index";

/**
 * just a test run not an actual route system
 */

export default class Routes extends Component {
	authStats = false;
	render() {
		return (
			<Switch>
				<AuthRoute
					path="/"
					exact
					component={DashboardHome}
					isAuthenticated={this.authStats}
				/>
				<AuthRoute path="/i/my-task" component={MyTasks} />
				<AuthRoute path="/projects" exact component={Projects} />
				<AuthRoute path="/settings" component={Settings} />
				<AuthRoute path="/i/notifications" component={Notifications} />

				<Route path="/login" component={Login} />
				<Route path="/Sign-up" component={Signup} />
				<Route path="/home" exact component={Landing} />
				<AuthRoute path="/private/components" exact component={Components} />
			</Switch>
		);
	}
}
