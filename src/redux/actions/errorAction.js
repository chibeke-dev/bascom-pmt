import { GET_ERROR, CLEAR_ERROR } from "../actionTypes";

// get errors
export const getErrors = (message, status, id = null) => ({
	type: GET_ERROR,
	payload: { message, status, id },
});

// clear errors
export const clearErrors = () => ({
	type: CLEAR_ERROR,
});
