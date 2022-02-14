const initialState = {
  user: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "REQ":
      return { ...state, user: payload };
    default:
      return state;
  }
};
