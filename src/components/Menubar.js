import React, { Component } from "react";
import { HiSearch } from "react-icons/hi";
import { Link } from "react-router-dom";

export class Menubar extends Component {
	render() {
		return (
			<React.Fragment>
				<nav className="bg-white border-b-2">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="flex items-center justify-between h-20">
							<div className="flex items-center mt-4">
								<div className="flex-shrink-0">
									<h1 className="text-3xl font-bold leading-tight text-gray-800">
										{this.props.name}
										{/* <br /> */}
									</h1>
									<div>
										{/* TODO: Add dynamic links */}
										<Link className="text-gray-500 text-center hover:text-blue-400 active transition duration-300 pt-1 cursor-pointer hover:border-blue-400 border-b-4 border-transparent mr-3 text-md font-medium">
											List
										</Link>

										<Link className="text-gray-500 hover:text-blue-400 mr-3 transition duration-300 cursor-pointer hover:border-blue-400 border-b-4 border-transparent text-md font-medium">
											Calender
										</Link>

										<Link className="text-gray-500 hover:text-blue-400 mr-3 transition duration-300 cursor-pointer hover:border-blue-400 border-b-4 border-transparent text-md font-medium">
											Files
										</Link>
									</div>
								</div>
								<div className="hidden md:block">
									{/* in the future contents will go here */}
								</div>
							</div>
							<div className="hidden md:block">
								<div className="ml-4 flex items-center md:ml-6">
									<button className="p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
										<span className="sr-only">Search</span>
										{/* <!-- Heroicon name: bell --> */}
										<HiSearch />
									</button>

									{/* <!-- Profile dropdown --> */}
								</div>
							</div>
						</div>
					</div>
				</nav>

				<header className="bg-white shadow">
					<div className="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
						<h1 className="text-sm text-gray-500 font-normal">
							No task completed yet
						</h1>
					</div>
				</header>
			</React.Fragment>
		);
	}
}

export default Menubar;
