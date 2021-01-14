import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Tooltip, Whisper } from "rsuite";
/**
 * #### Sidebar Icon
 * Sidebar icon takes in icons as its children
 * It functions as a navlink too.
 * @Param > `to` a react-router link `to`.
 * @Param > `name` specifies name in tooltip.
 *
 * Usage:
 * ```
 *    <SidebarIcon to="/somewhere" name="somename">
 *      icon goes here
 *    </SidebarIcon>
 * ```
 */
export class SidebarIcon extends Component {
	render() {
		const { children, to, name } = this.props;

		return (
			<li>
				<NavLink to={to}>
					{/* tooltip */}
					<Whisper
						trigger="hover"
						delay="200"
						placement="right"
						speaker={<Tooltip>{name}</Tooltip>}
					>
						<span
							appearance="subtle"
							className="flex items-center justify-center hover:bg-blue-500 hover:text-gray-50 text-gray-500 h-12 w-12 rounded-2xl text-2xl"
						>
							{children}
						</span>
					</Whisper>
				</NavLink>
			</li>
		);
	}
}

export default SidebarIcon;
