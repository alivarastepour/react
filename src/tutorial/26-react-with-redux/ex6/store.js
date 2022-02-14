import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import reducer from "./reducer";
import watcher from "./saga";
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, compose(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(watcher);
export default store;
