import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'mySlice',
    initialState: {count: 0},
    reducers: {
        add: (state) => {
            state.count++;
        },
        sub: state => {
            state.count--;
        },
        dub: state => {
            state.count *= 2
        }
    }
})
export const {add, sub, dub} = slice.actions;
export const reducer = slice.reducer;