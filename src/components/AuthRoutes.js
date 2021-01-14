import { PropTypes } from "prop-types";
import React from "react";
import { connect } from "react-redux";

import { Redirect, Route } from "react-router-dom";
import Application from "../pages/dashboardPages/";

/**
 * #### AuthRoute Component
 * A custom route component that provides authentication features to components
 * ##### Usage
 * Its usage is similar to that of a `Route` component
 * wth an additional `prop` of `isAuthenticated`.
 * ```
 * 		...
 * 		<AuthRoute path='/dashboard' component={Component} isAutheticated='true'
 * ```
 */

//  TODO: Attach redirect message and location to `fromRedirectRef` in login.js
const AuthRoute = ({
	component: Component,
	isAuthenticated,
	props,
	...rest
}) => (
	<Route
		{...rest}
		render={(props) =>
			isAuthenticated ? (
				<Application>
					<Component {...props} />
				</Application>
			) : (
				<Redirect
					to={{
						pathname: "/login",
						state: { from: props.location, message: "you must login first" },
					}}
				/>
			)
		}
	/>
);

AuthRoute.propTypes = {
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.auth.isAuthenticated,
	};
};

export default connect(mapStateToProps)(AuthRoute);
