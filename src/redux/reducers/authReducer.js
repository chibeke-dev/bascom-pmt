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

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
	token: localStorage.getItem("token"),
	redirectTo: null,
	isAuthenticated: true,
	loading: false,
	user: null,
};

export default function authReducer(state = initialState, action) {
	const { type, payload, redirectTo } = action;

	switch (type) {
		case USER_LOADING:
			return {
				...state,
				loading: true,
			};
		case USER_LOADED:
			return {
				...state,
				isAuthenticated: true,
				loading: false,
				redirectTo: redirectTo,
				user: payload,
			};
		case LOGIN_SUCCESS:
			localStorage.setItem("token", payload.token);
			return {
				...state,
				...payload,
				isAuthenticated: true,
				loading: false,
			};
		case REGISTER_SUCCESS:
			return { ...state, loading: false };
		case AUTH_ERROR:
		case LOGIN_FAIL:
		case REGISTER_FAIL:
		case LOGOUT_SUCCESS:
			localStorage.removeItem("token");
			return {
				...state,
				token: null,
				user: null,
				isAuthenticated: null,
				loading: false,
			};

		default:
			return state;
	}
}
