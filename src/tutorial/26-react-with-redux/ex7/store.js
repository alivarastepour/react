import {configureStore} from "@reduxjs/toolkit";
import {reducer} from "./reducer";
import {middleware as m} from "./middleware";

const middleware = [
    m
]

export const store = configureStore({
    reducer:{
        reducer
    },
    middleware,
})