import React from "react";

function AppContainer({ children }) {
	return (
		<main className="bg-gray-100 lg:px-32 md:px-16 px-3 container overflow-y-auto h-screen">
			{children}
		</main>
	);
}

export default AppContainer;
