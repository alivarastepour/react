import { Provider } from "react-redux";
import store from "./store";
import React from "react";
import Data from "./data";
const Setup = () => {
  return (
    <>
      <Provider store={store}>
        <Data />
      </Provider>
    </>
  );
};
export default Setup;
