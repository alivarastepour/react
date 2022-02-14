import { createStore, applyMiddleware, compose } from "redux";
import { middleware } from "./middleware";
import { reducer } from "./reducer";
import thunk from "redux-thunk";
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  storeEnhancers(applyMiddleware(middleware, thunk))
);
