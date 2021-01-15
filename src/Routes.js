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
<<<<<<< HEAD
import ContactUs from "./pages/landingPages/ContactUs";
import Pricing from "./pages/landingPages/Pricing";
import Project from "./pages/dashboardPages/Project/Project";
/**
 * #### Routes Component
 * Shell containing all application routes.
 * Shell should be added to App.js
 * ##### Usage
 * ```
 * ...
 * import Routes from "./Routes";
 *
 * function App() {
 *	return (
 *		<Router>
 *			<Routes />
 *		</Router>
 * 	);
 * }
 *
 * export default App;
 *
 * ```
 */

export default class Routes extends Component {
	authStats = true;
=======
import ProjectsPage from "./pages/dashboardPages/ProjectsPage";
import AppRoute from "./pages/landingPages/utils/AppRoute";
import LayoutDefault from "./pages/landingPages/layouts/LayoutDefault";
class Routes extends Component {
>>>>>>> c254b89f1062671f2bae84a560f1ae6894dbdbb1
	render() {
		return (
			<Switch>
				<AppRoute exact path="/" component={Landing} layout={LayoutDefault} />
				<Route path="/login" component={Login} />
				<Route path="/sign-up" component={Signup} />
				<AuthRoute path="/dashboard" exact component={DashboardHome} />
				<AuthRoute path="/projects" exact component={ProjectsPage} />
				<AuthRoute path="/i/my-task" component={MyTasks} />
<<<<<<< HEAD
				<AuthRoute path="/projects" exact component={Projects} />
				<Route path="/project" component={Project} />
				<AuthRoute path="/settings" component={Settings} />
				<AuthRoute path="/i/notifications" component={Notifications} />

				<Route path="/login" component={Login} />
				<Route path="/Sign-up" component={Signup} />
				<Route path="/home" exact component={Landing} />
				<Route path="/ContactUs" component={ContactUs} />
				<Route path="/Pricing" component={Pricing} />
=======
				<AuthRoute path="/settings" component={Settings} />
				<AuthRoute path="/i/notifications" component={Notifications} />
>>>>>>> c254b89f1062671f2bae84a560f1ae6894dbdbb1
				<AuthRoute path="/private/components" exact component={Components} />
			</Switch>
		);
	}
}

export default Routes;
