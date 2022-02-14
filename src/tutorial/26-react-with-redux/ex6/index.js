import React from "react";
import { Provider } from "react-redux";
import DataX from "./Data";
import store from "./store";

const Setup = () => {
  return (
    <div>
      <Provider store={store}>
        <DataX />
      </Provider>
    </div>
  );
};

export default Setup;
