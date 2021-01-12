import React from "react";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import "rsuite/dist/styles/rsuite-default.css";
import { Sidebar } from "../../components/Sidebar";
import Routes from "./Routes";

//TODO: Move Function's Children to main route.js
function Application() {
	return (
		<div className="flex h-sreen overflow-y-hidden bg-gray-100">
			<React.Fragment>
				<Sidebar />
				<Routes />
			</React.Fragment>
		</div>
	);
}

export default Application;
