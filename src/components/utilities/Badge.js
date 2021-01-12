import React from "react";

export function BadgeGroup({ children }) {
	return <div className="badge_group flex flex-wrap">{children}</div>;
}

function Badge({ children, color, rounded, width, className }) {
	return (
		<span
			className={`badge inline-block bg-${color}-400 text-white rounded-${rounded} py-0.5 px-2 m-1  text-xs font-semibold text-center text-white-700 ${className}`}
		>
			{children}
		</span>
	);
}

export default Badge;
