import { SET_MARRIED, CHANGE_AGE, CHANGE_NAME } from "./constants";

export const setName = (payload) => {
  return { type: CHANGE_NAME, payload };
};

export const setAge = (payload) => {
  return { type: CHANGE_AGE, payload };
};

export const setMarried = (payload) => {
  return { type: SET_MARRIED, payload };
};
