import React from 'react';
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers/index";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const ProviderWrapper: React.FC = props => {
  const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
  );

  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  );
}

export default ProviderWrapper


