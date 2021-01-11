import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers/";

const store = createStore(
	rootReducer,
	applyMiddleware(thunk),
	compose(window.devToolsExtension ? window.devToolsExtension() : (f) => f)
);

export default store;

// const middleware = [thunk];

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;
