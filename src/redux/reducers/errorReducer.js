import { GET_ERROR, CLEAR_ERROR } from "../actionTypes";

const initialState = {
	message: {},
	status: null,
	id: null,
};

export default function errorReducer(state = initialState, action) {
	const { type, payload, status, id } = action;

	switch (type) {
		case GET_ERROR:
			return { message: payload, status: status, id: id };

		case CLEAR_ERROR:
		default:
			return state;
	}
}
