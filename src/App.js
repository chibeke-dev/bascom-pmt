import React from "react";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import "rsuite/dist/styles/rsuite-default.css";
import { createBrowserHistory } from "history";
import Routes from "./Routes";

const History = createBrowserHistory();
function App() {
	return (
		<Router>
			{/* {state.isLoggedIn ? <Application /> : <Landing />} */}
			<Routes />
		</Router>
	);
}

export default App;
