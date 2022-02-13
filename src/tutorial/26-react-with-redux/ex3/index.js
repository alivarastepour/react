import React from "react";
import { Provider } from "react-redux";
import Form from "./Form";
import { store } from "./store";

const Setup = () => {
  return (
    <>
      <Provider store={store}>
        <Form />
      </Provider>
    </>
  );
};
export default Setup;
