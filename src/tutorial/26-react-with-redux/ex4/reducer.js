const initialState = {
  login: "",
  id: 0,
  location: "",
  blog: "",
};

export const reducer = (state = initialState, action) => {
  if (action.type === "LOAD_DATA") {
    return {
      ...state,
      login: action.payload.login,
      id: action.payload.id,
      location: action.payload.location,
      blog: action.payload.blog,
    };
  }
};
