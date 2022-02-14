import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadData } from "./action";

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: (value) => dispatch(loadData(value)),
  };
};
const Data = ({ user, loadData }) => {
  const [value, setValue] = useState("");
  const [search, setSearch] = useState(false);
  useEffect(() => {
    if (search) {
      loadData(value);
      setSearch(false);
    }
  }, [loadData, search, setSearch]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button onClick={() => setSearch(true)}>search for url</button>
      <p>{user.login}</p>
      <p>{user.id}</p>
      <p>{user.location}</p>
      <p>{user.blog}</p>
    </div>
  );
};
const DataX = connect(mapStateToProps, mapDispatchToProps)(Data);
export default DataX;
