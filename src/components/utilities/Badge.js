import React from "react";

function Badge({ children, color, rounded, width }) {
	return (
		<span
			className={`inline-block bg-${color}-300 rounded-${rounded} px-3 py-1 text-sm font-semibold w-${width} text-center text-white-700 mr-2`}
		>
			{children}
		</span>
	);
}

export default Badge;
