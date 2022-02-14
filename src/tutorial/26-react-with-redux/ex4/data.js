import { connect } from "react-redux";
import React, { useEffect } from "react";
import { getData } from "./actions";

const mapStateToProps = (state) => {
  return {
    login: state && state.login,
    id: state && state.id,
    location: state && state.location,
    blog: state && state.blog,
  };
};
function mapDispatchToProps(dispatch) {
  return {
    getData: () => dispatch(getData()),
  };
}
const DataX = ({ login, id, location, blog, getData }) => {
  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <>
      <p>{id}</p>
      <p>{login}</p>
      <p>{location}</p>
      <p>{blog}</p>
    </>
  );
};

const Data = connect(mapStateToProps, mapDispatchToProps)(DataX);
export default Data;
