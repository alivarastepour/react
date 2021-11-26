import React from "react";
import store from "./store";
import {Provider} from "react-redux";
import {useSelector, useDispatch} from "react-redux";
import {decrement, increment} from "./counterSlice";


const Setup = () => {

    return <Provider store={store}>
            <Wrapper/>
        </Provider>
}

const Wrapper = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();
    return <>
        <h2>wtf</h2>
        <button onClick={() => dispatch(increment())} className="btn">+</button>
        <button onClick={() => dispatch(decrement())} className="btn">-</button>
        <span>{count}</span>
    </>
}

export default Setup;