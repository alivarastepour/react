import React from "react";
import {Provider} from "react-redux";
import {store} from "./store";
import Content from "./Content";

const Setup = () => {
    return <>
        <Provider store={store}>
            <Content/>
        </Provider>
    </>
}

export default Setup