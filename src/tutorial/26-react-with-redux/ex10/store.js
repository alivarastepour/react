import {applyMiddleware, compose, createStore} from "redux";
import {reducer} from "./slice";
import {middleware} from "./middleware";
import createSagaMiddleware from "redux-saga";
import {watcher} from "./saga";
const sagaMid = createSagaMiddleware();
const store = createStore(reducer, compose(applyMiddleware(middleware, sagaMid)));
sagaMid.run(watcher);
export default store;