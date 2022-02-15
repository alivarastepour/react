import React from "react";
import {Provider} from "react-redux";
import store from "./store";
import Test from "./Test";

const Setup = () => {
    return <>
    <Provider store={ store}>
        <Test/>
    </Provider>
    </>
}
export default Setup;