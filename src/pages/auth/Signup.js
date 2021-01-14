import React, { Component } from "react";
import logoMain from "../landingPages/assets/images/Logo.png";
import Image from "../landingPages/components/elements/Image";

import {
	Alert,
	Form,
	FormGroup,
	FormControl,
	ControlLabel,
	Schema,
	ButtonToolbar,
	Button,
} from "rsuite";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../../redux/actions";
const { StringType } = Schema.Types;

// schema for validation provided by rsuites

const model = Schema.Model({
	name: StringType().isRequired("This field is required."),
	email: StringType()
		.isEmail("Please enter a valid email address.")
		.isRequired("This field is required."),
	password: StringType().isRequired("This field is required."),
	cpassword: StringType()
		.addRule((value, data) => {
			if (value !== data.password) {
				return false;
			}

			return true;
		}, "Password mismatch")
		.isRequired("This field is required."),
});

// Input field component to be used in Signup component
class TextField extends React.PureComponent {
	render() {
		const { name, label, accepter, ...props } = this.props;
		return (
			<FormGroup>
				<ControlLabel>{label} </ControlLabel>
				<FormControl name={name} accepter={accepter} {...props} />
			</FormGroup>
		);
	}
}

const alertMsg = (msg) => Alert.error(msg, 5000);

// main Signup component
export class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			formValue: {
				name: "",
				email: "",
				password: "",
			},
			formFinal: {
				firstName: "",
				lastName: "",
				email: "",
				password: "",
			},
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleName = this.handleName.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		// const { register, message, status } = this.props;
		const { formValue, formFinal } = this.state;
		const { name, email, password } = formValue;
		const { first } = formFinal;
		if (this.form.check()) {
			let newName = name.split(" ");
			this.setState({
				formFinal: {
					firstName: newName[0],
					lastName: newName[1],
					email: email,
					password: password,
				},
			});
			this.props.register(newName[0], newName[1], email, password);
		}
	}

	handleName(formValue) {
		const { name, email, password } = formValue;
		if (name !== undefined && name !== null) {
			name.split(" ");
			return this.setState({
				...this.state,
				formFinal: {
					firstName: name[0],
					lastName: name[1],
					email: email,
					password: password,
				},
			});
		}
	}

	render() {
		const { formValue } = this.state;
		return (
			<div class="bg-gradient-to-r from-blue-400 to-blue-500 min-h-screen md:pt-10 pb-4 px-2 md:px-0 flex justify-center items-center">
				<div class="md:w-96 w-full bg-white mx-auto p-6 pt-1 my-5 rounded-none shadow-2xl">
					<section>
						<div className="flex justify-center items-center flex-col space-y-1 mt-6">
							<Link to="/">
								<Image src={logoMain} alt="Open" width={50} height={50} />
							</Link>{" "}
							<p class="text-gray-600">Sign in to your account.</p>
						</div>
					</section>

					<div class="mt-10">
						<Form
							fluid
							ref={(ref) => (this.form = ref)}
							onChange={(formValue) => {
								this.setState({ formValue });
							}}
							onCheck={(formError) => {
								this.setState({ formError });
							}}
							formValue={formValue}
							model={model}
						>
							<TextField
								className="rounded-0 w-full"
								name="name"
								size="lg"
								label="Full Name"
								placeholder="Enter full name"
							/>
							<TextField
								className="rounded-0 w-full"
								name="email"
								placeholder="Enter email address"
								size="lg"
								label="Email"
							/>
							<TextField
								className="rounded-0"
								name="password"
								placeholder="Enter passwod"
								size="lg"
								label="Password"
								type="password"
							/>
							<TextField
								className="rounded-0"
								name="cpassword"
								label="Confirm Password"
								placeholder="Enter password again"
								size="lg"
								type="password"
							/>
							<ButtonToolbar>
								<Button
									className="rounded-0"
									appearance="primary"
									block
									loading={this.props.loading}
									onClick={this.handleSubmit}
								>
									Signup
								</Button>
								{/* <Button onClick={this.handleCheckEmail}>Check Email</Button> */}
							</ButtonToolbar>
						</Form>
						<small class="text-gray-800 text-xs text-justify">
							Already have an account?{" "}
							<Link to="/login" className="font-bold hover:underline">
								Login
							</Link>
							.
						</small>
						<small class="max-w-lg text-xs mx-auto flex justify-center text-black">
							<Link href="#" class="hover:underline">
								Contact
							</Link>
							<span class="mx-3">•</span>
							<Link href="#" class="hover:underline">
								Privacy
							</Link>
						</small>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { user, loading } = state.auth;
	const { message, status } = state.error;
	return {
		user,
		loading,
		message,
		status,
	};
}
export default connect(mapStateToProps, { register })(Signup);
