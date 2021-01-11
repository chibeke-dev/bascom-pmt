import { combineReducers } from "redux";
import authReducer from "./authReducer";
import messageReducer from "./messageReducer";
const rootReducer = combineReducers({
	authReducer: authReducer,
	messageReducer: messageReducer,
});

export default rootReducer;
