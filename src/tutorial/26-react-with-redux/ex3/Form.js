import React, { useEffect } from "react";
import { getData, setAge, setMarried, setName } from "./actions";
import { connect } from "react-redux";

function mapDispatchToProps(dispatch) {
  return {
    setAge: (payload) => dispatch(setAge(payload)),
    setMarried: (payload) => dispatch(setMarried(payload)),
    setName: (payload) => dispatch(setName(payload)),
    getData: () => dispatch(getData()),
  };
}

const mapStateToProps = (state) => {
  return {
    name: state.name,
    age: state.age,
    married: state.married,
    user: state.githubUser,
  };
};

const Comp = ({
  setAge,
  setMarried,
  setName,
  name,
  age,
  married,
  user,
  getData,
}) => {
  useEffect(() => {
    getData();
  }, [getData]);
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
        <p>
          {user.login} : {user.id}
        </p>
      </div>
    </>
  );
};
const Form = connect(mapStateToProps, mapDispatchToProps)(Comp);
export default Form;
