import React, { Component } from "react";
import { Board, BoardGroup } from "../../components/Board";
import Menubar from "../../components/Menubar";
import ProjectCard from "../../components/ProjectCard";
import AppContainer from "./AppContainer";

const CardData = {
	title: "project title",
	status: "todo",
	tags: [
		{ color: "blue", text: "blue text" },
		{ color: "indigo", text: "indigo text" },
		{ color: "red", text: "red text" },
	],
	date: { from: "date - from", to: "date - to" },
};
// TODO: Import already created boards component and make dynamic.
class ProjectsPage extends Component {
	render() {
		// let {
		// 	title,
		// 	status,
		// 	tags,
		// 	date: { from, to },
		// } = CardData;
		return (
			<div className="w-full">
				<Menubar name="Project Name" />
				<AppContainer>
					Projects pages
					<BoardGroup>
						<Board header="Tod List">
							<ProjectCard />
						</Board>
						<Board header="Todo List">
							<ProjectCard>some thing</ProjectCard>
						</Board>
					</BoardGroup>
				</AppContainer>
			</div>
		);
	}
}

export default ProjectsPage;
