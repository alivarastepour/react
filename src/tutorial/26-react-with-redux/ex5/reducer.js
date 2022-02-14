const initialState = {
  login: "",
  id: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOAD":
      return { ...state, id: payload.id, login: payload.login };
    default:
      return state;
  }
};
