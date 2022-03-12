import {createSlice} from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'mySlice',
    initialState: {age: 0, name: '', data:{}},
    reducers: {
        setName: (state, action) => {
            state.name = action.payload
        },
        setAge: (state, action) => {
            state.age = action.payload
        },
        setData: (state, action) => {
            state.data = action.payload
        }
    }

})
export const {setName, setAge} = slice.actions;
export const reducer = slice.reducer