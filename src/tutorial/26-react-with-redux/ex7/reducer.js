import {createReducer} from "@reduxjs/toolkit";
import {add, sub, dub} from "./actionCreators";


const initialState = {
    count: 0
}
export const reducer = createReducer(initialState, {
    [add]: (state) => {
        state.count = state.count + 1;
    },
    [sub]: (state) => {
        state.count--;
    },
    [dub]: (state) => {
        state.count *= 2;
    }
})