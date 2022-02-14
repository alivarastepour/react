import { SET_MARRIED, CHANGE_AGE, CHANGE_NAME, DATA_LOADED } from "./constants";

export const setName = (payload) => {
  return { type: CHANGE_NAME, payload };
};

export const setAge = (payload) => {
  return { type: CHANGE_AGE, payload };
};

export const setMarried = (payload) => {
  return { type: SET_MARRIED, payload };
};
export const getData = () => {
  return (dispatch) => {
    return fetch("https://api.github.com/users/alivarastepour")
      .then((a) => a.json())
      .then((b) => {
        dispatch({ type: DATA_LOADED, payload: b });
      });
  };
};
