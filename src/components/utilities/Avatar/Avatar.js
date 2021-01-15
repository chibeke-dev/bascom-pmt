import React, { Component } from "react";
import { Link } from "react-router-dom";

/**
 * #### Avatar
 * Avatar generates a name initial using the Firstname and Surname
 * any third name specified will be ignore(for the purpose of initials).
 *
 * Usage:
 * ```
 * <Avatar name="firstname surname" to='/profile' />
 * ```
 * You can also specify color and size(1 or 2)
 * if no size is specified the defaults take over
 */
class Avatar extends Component {
	getInitial = (name) => {
		let full_name = name.split(" ");
		let initial1 = full_name[0].substring(0, 1).toUpperCase();
		if (full_name.length > 1) {
			let initial2 = full_name[1].substring(0, 1).toUpperCase();
			const Initials = `${initial1}${initial2}`;
			return Initials;
		} else {
			return initial1;
		}
	};

	render() {
		const { name, color, size, to = "#" } = this.props;
		return (
			<Link to={to}>
				<div
					className={`flex items-center justify-center h-${
						size === "1" ? 12 : 9
					} w-${
						size === "1" ? 12 : 9
					} rounded-full bg-${color}-500 text-white font-bold flex-shrink-0`}
				>
					{this.getInitial(name)}
				</div>
			</Link>
		);
	}
}

export default Avatar;
