import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getData } from "./action";

function mapDispatchToProps(dispatch) {
  return {
    getData: () => dispatch(getData()),
  };
}

const mapStateToProps = (state) => {
  return {
    login: state.login,
    id: state.id,
  };
};
const DataX = ({ getData, login, id }) => {
  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <div>
      <p>{login}</p>
      <p>{id}</p>
    </div>
  );
};
const Data = connect(mapStateToProps, mapDispatchToProps)(DataX);
export default Data;
