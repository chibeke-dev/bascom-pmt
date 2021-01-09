import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "rsuite/dist/styles/rsuite-default.css";
import { Sidebar } from "../../components/Sidebar";
import Routes from "./Routes";

function Application() {
	return (
		<Router>
			<div className="flex h-sreen overflow-y-hidden bg-gray-100">
				<Sidebar />
				<Routes />
			</div>
		</Router>
	);
}

export default Application;
