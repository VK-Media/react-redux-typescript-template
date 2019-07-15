import thunk from "redux-thunk";
import logger from "redux-logger";
import { Middleware } from "redux";

const middlewares: Array<Middleware> = [thunk];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export default middlewares;