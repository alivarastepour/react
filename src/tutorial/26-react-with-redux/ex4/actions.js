export const getData = () => {
  return (dispatch) => {
    return fetch("https://api.github.com/users/alivarastepour")
      .then((a) => a.json())
      .then((b) => {
        dispatch({ type: "LOAD_DATA", payload: b });
      });
  };
};
