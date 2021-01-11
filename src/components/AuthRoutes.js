import React from "react";
import { Redirect, Route } from "react-router-dom";

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
 * @param {*} param0
 */
const AuthRoute = ({ component: Component, isAuthenticated, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			isAuthenticated ? (
				<Component {...props} />
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

export default AuthRoute;
