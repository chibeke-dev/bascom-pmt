import React from "react";
import sizeFunc from "../../../utilities/sizeFunc";

const xs = (params) => {
	return sizeFunc("xs", params);
};
const sm = (params) => {
	return sizeFunc("sm", params);
};
const md = (params) => {
	return sizeFunc("md", params);
};
const lg = (params) => {
	return sizeFunc("lg", params);
};
const xl = (params) => {
	return sizeFunc("xl", params);
};

function Flex(props) {
	return (
		<div
			className={`flex ${props.className} ${props.xs ? xs(props.xs) : ""} ${
				props.sm ? sm(props.sm) : ""
			} ${props.md ? md(props.md) : ""} ${props.lg ? lg(props.lg) : ""} ${
				props.xl ? xl(props.xl) : ""
			} ${props.flexCol && "flex-col"} ${props.flexRow && "flex-row"}`}
		>
			{props.children}
		</div>
	);
}

export default Flex;
