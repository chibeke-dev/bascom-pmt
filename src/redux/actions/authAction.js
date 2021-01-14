import {
	USER_LOADED,
	USER_LOADING,
	AUTH_ERROR,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT_SUCCESS,
} from "../actionTypes";

import AuthService from "../../services/AuthService";
import { getErrors } from "./";
import axios from "axios";
import { Alert } from "rsuite";
import { Redirect } from "react-router-dom";
const proxy = "https://bascom-backend.herokuapp.com";
// check token then load user
export const login = (email, password) => (dispatch) => {
	// loading state on user
	dispatch(userLoading());

	axios
		.post(proxy + "/users/auth/login", { email: email, password: password })
		.then((res) => {
			console.log(res);
			dispatch(userLoaded(res, "/dashboard"));
		})
		.catch((err) => {
			console.error(err);
			dispatch(getErrors(err.message, err.status));
			dispatch(authError());
			alertMsg(err.message + ": Login Failed");
		});
};

export const fakeLogin = (email, password) => (dispatch) => {
	dispatch(userLoading());
	loginCheck(email, password)
		.then((res) => {
			console.log(res);
			dispatch(userLoaded(res, "/dashboard"));
		})
		.catch((err) => {
			console.error(err);
			dispatch(getErrors(err.message, err.status));
			dispatch(authError());
			alertMsg(err.message + ": Login Failed");
			return false;
		});
};

async function loginCheck(email, password) {
	if (email === "admin@admin.com" && password === "adminuser1") {
		return { email: email, password: password };
	} else {
		return false;
	}
}
export const register = (firstName, lastName, email, password) => (
	dispatch
) => {
	dispatch(userLoading());
	const config = {
		headers: {
			"Content-Type": "application/json; charset=utf-8",
		},
	};
	// const body = JSON.stringify();
	axios
		.post(
			proxy + "/users/signup",
			{
				firstName: firstName,
				lastName: lastName,
				email: email,
				password: password,
			},
			config
		)
		.then((res) => {
			dispatch(regSuccess);
			dispatch(getErrors(res.message, null));
		})
		.catch((err) => {
			dispatch(regFailed(err, "failed"));
			dispatch(getErrors(err, "failed"));

			alertMsg(err.message + ": Registration Failed");
		});
};

const alertMsg = (msg) => Alert.error(msg, 5000);

// SIGN UP actions
const regSuccess = () => {
	return {
		type: REGISTER_SUCCESS,
	};
};
const regFailed = () => {
	return {
		type: REGISTER_FAIL,
	};
};
const userLoading = () => {
	return {
		type: USER_LOADING,
	};
};
const userLoaded = (res, redirect) => {
	return {
		type: USER_LOADED,
		payload: res,
		redirectTo: redirect,
	};
};
const authError = () => {
	return {
		type: AUTH_ERROR,
	};
};

export const tokenConfig = (getState) => {
	// retrieve token
	const token = getState().auth.token;

	const config = {
		headers: {
			"Content-Type": "application/json; charset=utf-8",
		},
	};

	// check for token
	if (token) {
		config.headers["x-access-token"] = token;
	}
	return config;
};
