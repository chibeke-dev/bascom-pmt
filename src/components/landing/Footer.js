import React, { Component } from "react";
import Flex from "../utilities/util/Flex";

export class Footer extends Component {
	render() {
		return (
			<div className="container mx-auto">
				<Flex
					className="justify-around bg-green-50"
					flexCol
					sm="flex boal"
					md="bg-green-100"
				>
					<div className="bg-green-100 p-20">left side</div>
					<div className="bg-yellow-100 p-20">middle</div>
					<div className="bg-pink-100 p-20">right</div>
				</Flex>
				<div className="copyright">copyright</div>
			</div>
		);
	}
}

export default Footer;
