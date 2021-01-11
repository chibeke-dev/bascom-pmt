import axios from "axios";

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

// SIGN UP actions
const signUpRequest = () => {
	return {
		type: REGISTER_REQUEST,
	};
};
const signUpSuccess = (user) => {
	return {
		type: REGISTER_SUCCESS,
		payload: {
			user,
		},
	};
};
const signUpFailure = (error) => {
	return {
		type: REGISTER_FAILURE,
		payload: {
			error,
		},
	};
};

export const signUp = (user, history) => {
	return function(dispatch) {
		dispatch(signUpRequest());
		axios({
			method: "post",
			url: "",
			data: user,
		})
			.then((response) => {
				const { data } = response.data;
				dispatch(signUpSuccess(data));
				history.push("/");
			})
			.catch((error) => {
				console.log(error);
				dispatch(signUpFailure(error));
			});
	};
};

const signInRequest = () => {
	return {
		type: LOGIN_REQUEST,
	};
};
const signInSuccess = (token) => {
	return {
		type: LOGIN_SUCCESS,
		payload: {
			token,
		},
	};
};
const signInFailure = (error) => {
	return {
		type: LOGIN_FAILURE,
		payload: error,
	};
};

export const signIn = (payload, history)=>{
  return function(dispatch){
    dispatch(signInRequest)
    axios({
      method:'get',
      url:'',
      data:payload,
      headers:
    })
  }
}