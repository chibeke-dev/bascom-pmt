import React, { Component } from "react";
import loginImg from "../../img/login.jpg";
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
import { Redirect } from "react-router-dom";

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
		if (formValue.email === "mdMail@Spg.com" && formValue.password === 12345) {
			Redirect("../dashboardPages/index");
		} else {
			console.log("invalid user");
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
			// <div className="text-lg">Get back on track with your plans</div>
			// <div>
			// 	<Form
			// 		ref={(ref) => (this.form = ref)}
			// 		onChange={(formValue) => {
			// 			this.setState({ formValue });
			// 		}}
			// 		onCheck={(formError) => {
			// 			this.setState({ formError });
			// 		}}
			// 		formValue={formValue}
			// 		model={model}
			// 	>
			// 		<TextField name="email" label="Email" />
			// 		<TextField
			// 			name="password"
			// 			label="Password"
			// 			type="password"
			// 		/>
			// 		<ButtonToolbar>
			// 			<Button
			// 				appearance="primary"
			// 				block
			// 				onClick={this.handleSubmit}
			// 			>
			// 				Submit
			// 			</Button>
			// 			{/* <Button onClick={this.handleCheckEmail}>Check Email</Button> */}
			// 		</ButtonToolbar>
			// 	</Form>
			// </div>

			<div class="body-bg min-h-screen md:pt-10 pb-4 px-2 md:px-0">
				<header class="max-w-lg mx-auto">
					<a href="#">
						<h1 class="text-xl font-bold text-white text-center">Startup</h1>
					</a>
				</header>

				<div class="bg-white w-60 mx-auto p-6 pt-1 my-5 rounded-lg shadow-2xl">
					<section>
						<h3 class="font-bold text-xl p-0">Welcome to Startup</h3>
						<p class="text-gray-600">Sign in to your account.</p>
					</section>

					<div class="mt-10 w-56">
						<Form
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
							<TextField className="w-70" name="email" label="Email" />
							<TextField name="password" label="Password" type="password" />
							<ButtonToolbar>
								<Button appearance="primary" block onClick={this.handleSubmit}>
									Submit
								</Button>
								{/* <Button onClick={this.handleCheckEmail}>Check Email</Button> */}
							</ButtonToolbar>
						</Form>
					</div>
				</div>

				<div class="max-w-lg mx-auto text-center mt-12 mb-6">
					<p class="text-white">
						Don't have an account?{" "}
						<a href="#" class="font-bold hover:underline">
							Sign up
						</a>
						.
					</p>
				</div>

				<div class="max-w-lg mx-auto flex justify-center text-white">
					<a href="#" class="hover:underline">
						Contact
					</a>
					<span class="mx-3">•</span>
					<a href="#" class="hover:underline">
						Privacy
					</a>
				</div>
			</div>
		);
	}
}

export default Login;
