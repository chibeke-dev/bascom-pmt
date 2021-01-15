import React, { useRef, useEffect } from "react";
import { useLocation, Switch, Route, Router, Redirect } from "react-router-dom";
import AppRoute from "./utils/AppRoute";
import ScrollReveal from "./utils/ScrollReveal";
import { createBrowserHistory } from "history";

// Layouts
import LayoutDefault from "./layouts/LayoutDefault";

// Views
import Home from "./views/Home";
import "./App.css";
import Login from "../auth/Login";

// TODO: Fill content on landing page
// TODO: Build Contact Us, Privacy, other related landng pages

const history = createBrowserHistory();

const Landing = () => {
	const childRef = useRef();
	let location = useLocation();

	useEffect(() => {
		// const page = location.pathname;
		document.body.classList.add("is-loaded");
		childRef.current.init();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location]);

	return <ScrollReveal ref={childRef} children={() => <Home />} />;
};

export default Landing;
