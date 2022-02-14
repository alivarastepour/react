import React from "react";
import { Provider } from "react-redux";
import Data from "./Data";
import store from "./store";

const Setup = () => {
  return (
    <div>
      <Provider store={store}>
        <Data />
      </Provider>
    </div>
  );
};

export default Setup;
