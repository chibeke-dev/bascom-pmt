import React from "react";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import "rsuite/dist/styles/rsuite-default.css";
import { Sidebar } from "../../components/Sidebar";
import Routes from "./Routes";

const state = {
	isLoggedIn: true,
};
function Application() {
	return (
		<Router>
			<div className="flex h-sreen overflow-y-hidden bg-gray-100">
				{/* {state.isLoggedIn ? ( */}
				<React.Fragment>
					<Sidebar />
					<Routes />
				</React.Fragment>
				{/* ) : ( */}
				{/* <Redirect to="/home" /> */}
				{/* )} */}
			</div>
		</Router>
	);
}

export default Application;
