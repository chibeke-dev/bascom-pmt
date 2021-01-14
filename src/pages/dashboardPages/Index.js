import React from "react";
import { Sidebar } from "../../components/Sidebar/";
function Application({ children }) {
	return (
		<div className="flex h-sreen overflow-y-hidden bg-gray-100">
			<Sidebar />
			{children}
		</div>
	);
}

export default Application;
