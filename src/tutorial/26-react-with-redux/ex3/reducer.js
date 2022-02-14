import { SET_MARRIED, CHANGE_AGE, CHANGE_NAME, DATA_LOADED } from "./constants";

const initialState = {
  name: "",
  age: 0,
  married: false,
  githubUser: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MARRIED:
      return { ...state, married: action.payload };
    case CHANGE_AGE:
      return { ...state, age: action.payload };
    case CHANGE_NAME:
      return { ...state, name: action.payload };
    case DATA_LOADED:
      return { ...state, githubUser: action.payload };
    default:
      return state;
  }
};
