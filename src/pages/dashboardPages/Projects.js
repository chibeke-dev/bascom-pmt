import React, { Component } from "react";
import { Board } from "../../components/Board";
import Menubar from "../../components/Menubar";
// import Card from "../../components/utilities/Card";
import AppContainer from "./AppContainer";

// TODO: Import already created boards component and make dynamic.
export class Projects extends Component {
	render() {
		return (
			<AppContainer>
				<Menubar name="Project Name" />
				Projects pages
				<Board>some text</Board>
			</AppContainer>
		);
	}
}

export default Projects;
