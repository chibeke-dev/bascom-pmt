import React, { Component } from "react";
import logoMain from "../landingPages/assets/images/Logo.png";
import Image from "../landingPages/components/elements/Image";

import {
	Form,
	FormGroup,
	FormControl,
	ControlLabel,
	Schema,
	ButtonToolbar,
	Button,
} from "rsuite";
import { Link, Redirect } from "react-router-dom";
import { Login as LoginAuth } from "../../redux/actions";
const { StringType } = Schema.Types;

// schema for validation provided by rsuites
const model = Schema.Model({
	email: StringType()
		.isEmail("Please enter a valid email address.")
		.isRequired("This field is required."),
	password: StringType().isRequired("This field is required."),
});

// Input field component to be used in login component
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

// main login component
export class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			formValue: {
				email: "",
				password: "",
			},
			formError: {},
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleCheckEmail = this.handleCheckEmail.bind(this);
	}

	// handles form submition
	handleSubmit(e) {
		e.preventDefault();
		const { formValue } = this.state;

		//TODO: adjust `!this.fom.check()` to return a radable message by users
		if (!this.form.check()) {
			console.log("invalid user");
		} else {
			return <Redirect to="/" />;
		}
	}
	// handles email check @ignore
	handleCheckEmail() {
		this.form.checkForField("email", (checkResult) => {
			console.log(checkResult);
		});
	}

	render() {
		const { formValue } = this.state;
		return (
			<div className="bg-gradient-to-r from-blue-400 to-blue-500 min-h-screen md:pt-10 pb-4 px-2 md:px-0 flex justify-center items-center">
				<div class="md:w-72 w-full bg-white mx-auto p-6 pt-1 my-5 rounded-none shadow-2xl">
					<section>
						<div className="flex justify-center items-center flex-col space-y-1 mt-6">
							<Link to="/">
								<Image src={logoMain} alt="Open" width={50} height={50} />
							</Link>{" "}
							<p className="text-gray-600">Sign in to your account.</p>
						</div>
					</section>

					<div className="mt-10">
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
								name="email"
								label="Email"
							/>
							<TextField
								className="rounded-0"
								name="password"
								label="Password"
								type="password"
							/>
							<ButtonToolbar>
								<Button
									className="rounded-0"
									appearance="primary"
									block
									onClick={this.handleSubmit}
								>
									Login
								</Button>
								{/* <Button onClick={this.handleCheckEmail}>Check Email</Button> */}
							</ButtonToolbar>
						</Form>
						<small className="text-gray-800 text-xs text-justify">
							Don't have an account?{" "}
							<Link to="/sign-up" class="font-bold hover:underline">
								Sign up
							</Link>
							.
						</small>
						<small className="max-w-lg text-xs mx-auto flex justify-center text-black">
							<Link to="#" class="hover:underline">
								Contact
							</Link>
							<span className="mx-3">•</span>
							<Link to="#" className="hover:underline">
								Privacy
							</Link>
						</small>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
