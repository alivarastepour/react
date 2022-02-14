import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadData } from "./action";

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: () => dispatch(loadData()),
  };
};

const Data = ({ user, loadData }) => {
  useEffect(() => {
    loadData();
  }, [loadData]);
  //   console.log(user);
  return (
    <div>
      <p>{user.login}</p>
      <p>{user.id}</p>
      <p>{user.location}</p>
      <p>{user.blog}</p>
    </div>
  );
};
const DataX = connect(mapStateToProps, mapDispatchToProps)(Data);
export default DataX;
