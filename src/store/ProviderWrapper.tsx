import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import middlewares from "./middlewares";
import reducers from "./reducers/index";

const ProviderWrapper: React.FC = props => {
	const store = createStore(
		reducers,
		composeWithDevTools(applyMiddleware(...middlewares))
	);

	return <Provider store={store}>{props.children}</Provider>;
};

export default ProviderWrapper;
