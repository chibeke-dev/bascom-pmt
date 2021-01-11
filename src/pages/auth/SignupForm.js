import React, { Component } from "react";

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
		}, "The two passwords do not match")
		.isRequired("This field is required."),
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

export class SignupForm extends Component {
	render() {
		const { formValue } = this.props;
		return (
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
						block
						name="name"
						label="Name"
					/>
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
					<TextField
						className="rounded-0"
						name="cpassword"
						block
						label="Confirm Password"
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
					Already have an account?{" "}
					<Link to="/login" className="font-bold hover:underline">
						Login
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
		);
	}
}

export default SignupForm;
