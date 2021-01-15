import React, { Component } from "react";
import { IoFlagSharp } from "react-icons/io5";
import Badge, { BadgeGroup } from "../components/utilities/Badge";

class ProjectCard extends Component {
	render() {
		const { children, name } = this.props;
		// TODO: Add dynamic data with redux.
		return (
			<div className="bg-white rounded p-2 text-gray-500 font-medium space-y-2">
				<div className="task_name text-gray-500 flex items-center justify-start space-x-1 text-lg font-semibold">
					<IoFlagSharp className="strokecurrent text-green-600" />{" "}
					<span>Task name</span>
				</div>
				<div className="date text-sm">Nov 19 - Dec 18</div>
				<BadgeGroup>
					<Badge color="blue" rounded="full">
						overdue
					</Badge>
					<Badge color="yellow" rounded="full">
						overdue
					</Badge>
					<Badge color="red" rounded="full">
						overdue
					</Badge>
				</BadgeGroup>
			</div>
		);
	}
}

export default ProjectCard;
