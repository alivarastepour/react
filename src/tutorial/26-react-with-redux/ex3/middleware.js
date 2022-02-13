import { CHANGE_AGE } from "./constants";

export const middleware = ({ dispatch }) => {
  return (next) => {
    return (action) => {
      if (action.type === CHANGE_AGE) {
        if (parseInt(action.payload) > 100) {
          return 100;
        }
        if (parseInt(action.payload) < 0) {
          return 0;
        }
      }
      return next(action);
    };
  };
};
