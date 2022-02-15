import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name:'alo',
    initialState:{count:0},
    reducers:{
        add : state => {
            state.count++
        }
    }
})

export const {add} = slice.actions
export const reducer = slice.reducer;