import { SET_MARRIED, CHANGE_AGE, CHANGE_NAME } from "./constants";

const initialState = {
  name: "",
  age: 0,
  married: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MARRIED:
      return { ...state, married: action.payload };
    case CHANGE_AGE:
      return { ...state, age: action.payload };
    case CHANGE_NAME:
      return { ...state, name: action.payload };
    default:
      return state;
  }
};
