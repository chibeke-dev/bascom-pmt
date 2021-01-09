import React, { Component } from "react";

class Card extends Component {
	render() {
		const { children } = this.props;

		return (
			<div class="min-w-0 p-4 bg-white rounded-lg shadow-xs">{children}</div>
		);
	}
}
export default Card;
