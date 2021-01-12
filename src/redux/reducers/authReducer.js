import {
	REGISTER_REQUEST,
	REGISTER_SUCCESS,
	REGISTER_FAILURE,
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	LOGOUT_SUCCESS,
	LOGOUT_REQUEST,
} from "../actionTypes";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
	? { isAuthenticated: true, user, loading: false }
	: { isAuthenticated: false, user: null, loading: false };

export default function authReducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case REGISTER_REQUEST:
			return {
				...state,
				loading: true,
			};
		case REGISTER_SUCCESS:
			return {
				...state,
				isLoggedIn: false,
			};
		case REGISTER_FAILURE:
			return {
				...state,
				isLoggedIn: false,
			};
		case LOGIN_REQUEST:
			return {
				...state,
				loading: true,
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				isLoggedIn: true,
				user: payload.user,
			};
		case LOGIN_FAILURE:
			return {
				...state,
				isLoggedIn: false,
				user: null,
			};
		case LOGOUT_REQUEST:
			return {
				...state,
				loading: true,
			};
		case LOGOUT_SUCCESS:
			return {
				...state,
				isLoggedIn: false,
				user: null,
			};
		default:
			return state;
	}
}
