import React from "react";
import store from "./store";
import {Provider} from "react-redux";
import Setup from "./index";

const Test = () => {
    return <>
    <Provider store={store}>
        <Setup/>
    </Provider>
    </>
}

export default Test;