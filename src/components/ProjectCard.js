import React, { Component } from "react";
import { IoFlagSharp } from "react-icons/io5";
import Badge, { BadgeGroup } from "../components/utilities/Badge";
// import classNames from "classnames";
import PropType from "prop-types";

const data = {
	title: "project title",
	status: "todo",
	tags: [
		{ color: "blue", text: "blue text" },
		{ color: "indigo", text: "indigo text" },
		{ color: "red", text: "red text" },
	],
	date: { from: "date - from", to: "date - to" },
};
class ProjectCard extends Component {
	render() {
		const { title, status, tags, dateFrom, dateTo } = data;
		// TODO: Add dynamic data with redux.
		const flagColor = (status) => {
			switch (status) {
				case "success":
					return "green";
				case "todo":
					return "yellow";
				case "overdue":
					return "red";
				default:
					return "gray";
			}
		};

		return (
			<div className="bg-white rounded p-2 text-gray-500 font-medium space-y-2 mb-2">
				<div className="task_name text-gray-500 flex items-center justify-start space-x-1 text-lg font-semibold">
					<IoFlagSharp
						className={`strokecurrent text-${flagColor(status)}-600`}
					/>{" "}
					<span>{title}</span>
				</div>
				<div className="date text-sm">
					{dateFrom} - {dateTo}
				</div>
				<BadgeGroup>
<<<<<<< HEAD
					<Badge color="blue" rounded="full">
						overdue
					</Badge>
					<Badge color="yellow" rounded="full">
						overdue
					</Badge>
					<Badge color="red" rounded="full">
						overdue
					</Badge>
=======
					{tags.map((item, index) => {
						return (
							<Badge index={index} color={item.color} rounded="full">
								{item.text}
							</Badge>
						);
					})}
>>>>>>> c254b89f1062671f2bae84a560f1ae6894dbdbb1
				</BadgeGroup>
			</div>
		);
	}
}
ProjectCard.protoType = {
	data: PropType.object.isRequired,
};
export default ProjectCard;
