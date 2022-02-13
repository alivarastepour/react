import React from "react";
import { setAge, setMarried, setName } from "./actions";
import { useState } from "react";
import { connect } from "react-redux";

function mapDispatchToProps(dispatch) {
  return {
    setAge: (payload) => dispatch(setAge(payload)),
    setMarried: (payload) => dispatch(setMarried(payload)),
    setName: (payload) => dispatch(setName(payload)),
  };
}

const mapStateToProps = (state) => {
  return {
    name: state.name,
    age: state.age,
    married: state.married,
  };
};

const Comp = ({ setAge, setMarried, setName, name, age, married }) => {
  console.log("salam");
  return (
    <>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <br />
      <input type="number" onChange={(e) => setAge(e.target.value)} />
      <br />
      <label id="mar">married : </label>

      <input
        id="mar"
        type="checkbox"
        onChange={(e) => setMarried(e.target.checked)}
      />
      <br />

      <div>
        <p>name: {name}</p>
        <p>age: {age}</p>
        <p>{married ? "married" : "not married"}</p>
      </div>
    </>
  );
};
const Form = connect(mapStateToProps, mapDispatchToProps)(Comp);
export default Form;
