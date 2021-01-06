import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "rsuite/dist/styles/rsuite-default.css";
import Application from "./pages/dashboardPages/Index";
import Login from "./pages/auth/Login";
import Landing from "./pages/landingPages/Index";

const state = {
	isLoggedIn: false,
};
function App() {
	return <Router>{state.isLoggedIn ? <Application /> : <Landing />}</Router>;
}

export default App;
