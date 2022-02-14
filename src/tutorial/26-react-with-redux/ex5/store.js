import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducer";
import watcher from "./saga";
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  storeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(watcher);
export default store;
