import React, { Component } from "react";
import { HiBell, HiCog, HiEyeOff, HiHome } from "react-icons/hi";
import { MdAssignment } from "react-icons/md";
import SidebarIcon from "./SidebarIcon";
import Divider from "../utilities/Divider";
import { Avatar } from "../utilities/Avatar";

/**
 * #### Sidebar component
 * Sidebar is set to be scrollable always set
 * the wrapping container so match your need.
 * usage: `<Sidebar />`
 */
export class Sidebar extends Component {
	triggerHover() {}
	render() {
		return (
			<div className="bg-white flex flex-col items-center shadow-md py-4 flex-shrink-0 md:w-20 w-14 bg-white-800 h-screen sticky overflow-y-hidden">
				<ul className="flex flex-col space-y-2 mt-12 mb-5">
					<span className="">
						<Avatar name="maxwell diogu uche" color="green" size="1" />
					</span>
					<SidebarIcon to="/dashboard" name="Home">
						<HiHome />
					</SidebarIcon>
					<SidebarIcon to="/i/my-task" name="My Task">
						<MdAssignment />
					</SidebarIcon>
					<SidebarIcon to="/i/notifications" name="Notifications">
						<HiBell />
					</SidebarIcon>
					<SidebarIcon to="/private/components" name="Components library">
						<HiEyeOff />
					</SidebarIcon>
				</ul>
				<Divider width="20" />
				<ul className="mt-auto mb-5 flex items-center justify-center  h-10 w-10 rounded-full">
					<SidebarIcon to="/settings" name="Settings">
						<HiCog />
					</SidebarIcon>
				</ul>
			</div>
		);
	}
}

export default Sidebar;
