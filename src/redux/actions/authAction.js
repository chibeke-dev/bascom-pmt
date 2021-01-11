import {
	REGISTER_REQUEST,
	REGISTER_SUCCESS,
	REGISTER_FAILURE,
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	LOGOUT_SUCCESS,
	LOGOUT_FAILURE,
	LOGOUT_REQUEST,
} from "../actionTypes/";

import AuthService from "../../services/AuthService";
import { setMessage } from "./messageAction";

// SIGN UP actions
const registerRequest = () => {
	return {
		type: REGISTER_REQUEST,
	};
};
const registerSuccess = (user) => {
	return {
		type: REGISTER_SUCCESS,
	};
};
const registerFailure = (error) => {
	return {
		type: REGISTER_FAILURE,
	};
};

export const register = ({ firstName, lastName, email, password }, history) => (
	dispatch
) => {
	dispatch(registerRequest());
	return AuthService.register(firstName, lastName, email, password)
		.then((res) => {
			dispatch(registerSuccess());
			dispatch(setMessage(res));
		})
		.catch((err) => {
			dispatch(registerFailure());
			dispatch(setMessage(res));
		});
};

const loginRequest = () => {
	return {
		type: LOGIN_REQUEST,
	};
};

const loginSuccess = (user) => {
	return {
		type: LOGIN_SUCCESS,
		payload: {
			user,
		},
	};
};

const loginFailure = () => {
	return {
		type: LOGIN_FAILURE,
	};
};

export const login = ({ email, password }, history) => (dispatch) => {
	dispatch(loginRequest());
	return AuthService.login(email, password)
		.then((res) => {
			dispatch(loginSuccess(res.user));
			dispatch(setMessage(res));
		})
		.catch((err) => {
			dispatch(loginFailure());
			dispatch(setMessage(err));
		});
};

export const logOut = () => (dispatch) => {
	dispatch({ type: LOGOUT_REQUEST });
	AuthService.logout();
	dispatch({
		type: LOGOUT_SUCCESS,
	});
};
