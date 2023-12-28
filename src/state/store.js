import { applyMiddleware, configureStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

export const store = configureStore(reducers, {}, applyMiddleware(thunk))
