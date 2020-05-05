import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
// import reducers to the store
import userReducer from "./reducers/userReducer";

const middlewares = [thunk, logger];

const reducers = combineReducers({
  user: userReducer,
});
export const store = createStore(reducers, {}, applyMiddleware(...middlewares));
