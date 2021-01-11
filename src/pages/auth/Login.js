import React, { Component } from "react";
import loginImg from "../../img/login.jpg";
import logoMain from "../landingPages/assets/images/Logo.png";
import Image from "../landingPages/components/elements/Image";

import {
	Form,
	FormGroup,
	FormControl,
	ControlLabel,
	HelpBlock,
	Schema,
	ButtonToolbar,
	Button,
} from "rsuite";
import { Link, Redirect } from "react-router-dom";

const { StringType } = Schema.Types;

const model = Schema.Model({
	email: StringType()
		.isEmail("Please enter a valid email address.")
		.isRequired("This field is required."),
	password: StringType().isRequired("This field is required."),
});

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

	handleSubmit() {
		const { formValue } = this.state;
		if (!this.form.check()) {
			console.error("Form Error");
			return;
		}
		if (!this.form.check()) {
			console.log("invalid user");
		} else {
			return <Redirect to="/" />;
		}
	}

	handleCheckEmail() {
		this.form.checkForField("email", (checkResult) => {
			console.log(checkResult);
		});
	}

	render() {
		const { formError, formValue } = this.state;
		return (
			<div class="bg-gradient-to-r from-blue-400 to-blue-500 min-h-screen md:pt-10 pb-4 px-2 md:px-0 flex justify-center items-center">
				<div class="md:w-72 w-full bg-white mx-auto p-6 pt-1 my-5 rounded-none shadow-2xl">
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
								block
								name="email"
								label="Email"
							/>
							<TextField
								className="rounded-0"
								name="password"
								block
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
						<small class="text-gray-800 text-xs text-justify">
							Don't have an account?{" "}
							<Link to="/sign-up" class="font-bold hover:underline">
								Sign up
							</Link>
							.
						</small>
						<small class="max-w-lg text-xs mx-auto flex justify-center text-black">
							<a href="#" class="hover:underline">
								Contact
							</a>
							<span class="mx-3">•</span>
							<a href="#" class="hover:underline">
								Privacy
							</a>
						</small>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
