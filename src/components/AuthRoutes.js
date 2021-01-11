import React from "react";
import { Redirect, Route } from "react-router-dom";

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
