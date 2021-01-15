import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import AuthRoute from "./components/AuthRoute";
import Components from "./components/Components";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import DashboardHome from "./pages/dashboardPages/DashboardHome";
import MyTasks from "./pages/dashboardPages/MyTasks";
import Notifications from "./pages/dashboardPages/Notifications";
import Settings from "./pages/dashboardPages/Settings";
import Landing from "./pages/landingPages/Index";
import ProjectsPage from "./pages/dashboardPages/ProjectsPage";
import AppRoute from "./pages/landingPages/utils/AppRoute";
import LayoutDefault from "./pages/landingPages/layouts/LayoutDefault";
class Routes extends Component {
	render() {
		return (
			<Switch>
				<AppRoute exact path="/" component={Landing} layout={LayoutDefault} />
				<Route path="/login" component={Login} />
				<Route path="/sign-up" component={Signup} />
				<AuthRoute path="/dashboard" exact component={DashboardHome} />
				<AuthRoute path="/projects" exact component={ProjectsPage} />
				<AuthRoute path="/i/my-task" component={MyTasks} />
				<AuthRoute path="/settings" component={Settings} />
				<AuthRoute path="/i/notifications" component={Notifications} />
				<AuthRoute path="/private/components" exact component={Components} />
			</Switch>
		);
	}
}

export default Routes;
