import React, { Component } from "react";
import { Button, Drawer, List, Panel, PanelGroup } from "rsuite";
import PlaceholderParagraph from "rsuite/lib/Placeholder/PlaceholderParagraph";
import Menubar from "../../components/Menubar";
import AppContainer from "./AppContainer";
// import DrawerComp from "./DrawerComp";

class MyTasks extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
		};
		this.close = this.close.bind(this);
		this.toggleDrawer = this.toggleDrawer.bind(this);
	}
	close() {
		this.setState({
			show: !this.state,
		});
	}
	toggleDrawer() {
		// e.preventDefault();
		this.setState({
			show: true,
		});
	}

	render() {
		const data = [
			"Roses are red",
			"Violets are blue",
			"Sugar is sweet",
			"And so are you",
		];
		return (
			<div className="w-full">
				<Menubar name="My Task" />
				<AppContainer>
					<div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
						<Panel className="border-0 border-b-0 border-transparent overflow-y-auto bg-white h-80screen">
							{" "}
							<Button color="blue" size="xs">
								<span className="font-bold text-xl leading-none">+</span> Add
								Task
							</Button>
							<hr />
							<PanelGroup accordion>
								<Panel header="Recently Assigned">
									<List bordered>
										{data.map((item, index) => (
											<button
												onClick={this.toggleDrawer}
												className="w-full text-left"
											>
												<List.Item
													key={index}
													index={index}
													className="cursor-pointer"
												>
													{item}
												</List.Item>
											</button>
										))}
									</List>{" "}
								</Panel>
								<Panel header="Today">
									<List bordered>
										{data.map((item, index) => (
											<button
												onClick={this.toggleDrawer}
												className="w-full text-left"
											>
												<List.Item
													key={index}
													index={index}
													className="cursor-pointer"
												>
													{item}
												</List.Item>
											</button>
										))}
									</List>{" "}
								</Panel>
								<Panel header="Upcoming">
									<List bordered>
										{data.map((item, index) => (
											<button
												onClick={this.toggleDrawer}
												className="w-full text-left"
											>
												<List.Item
													key={index}
													index={index}
													className="cursor-pointer"
												>
													{item}
												</List.Item>
											</button>
										))}
									</List>{" "}
								</Panel>
							</PanelGroup>
						</Panel>
					</div>
					<div>
						<div>
							<Drawer
								size="lg"
								placement="right"
								show={this.state.show}
								onHide={this.close}
							>
								<Drawer.Header>
									<Drawer.Title>Drawer Title</Drawer.Title>
								</Drawer.Header>
								<Drawer.Body>
									<PlaceholderParagraph />
								</Drawer.Body>
								<Drawer.Footer>
									<Button onClick={this.close} appearance="primary">
										Confirm
									</Button>
									<Button onClick={this.close} appearance="subtle">
										Cancel
									</Button>
								</Drawer.Footer>
							</Drawer>
						</div>
					</div>
				</AppContainer>
			</div>
		);
	}
}

export default MyTasks;
