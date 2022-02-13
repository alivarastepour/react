import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import List from "./List";
import Form from "./Form";
const Setup = () => {
  return (
    <>
      <Provider store={store}>
        <List />
        <Form />
      </Provider>
    </>
  );
};

export default Setup;
