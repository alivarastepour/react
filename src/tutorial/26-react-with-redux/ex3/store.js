import { createStore, applyMiddleware } from "redux";
import { middleware } from "./middleware";
import { reducer } from "./reducer";
export const store = createStore(reducer, applyMiddleware(middleware));
