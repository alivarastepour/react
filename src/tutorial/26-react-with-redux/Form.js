import React, { useState } from "react";
import { connect } from "react-redux";
import { addArticle } from "./actions";

function mapDispatchToProps(dispatch) {
  return {
    addArticle: (article) => dispatch(addArticle(article)),
  };
}
const ConnectedForm = ({ addArticle }) => {
  const [state, setState] = useState("");
  const handleChange = (e) => {
    setState(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addArticle(state);
    setState("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={state} />
        <button type="submit">add</button>
      </form>
    </>
  );
};
const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;
