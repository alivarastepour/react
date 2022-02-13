import { connect } from "react-redux";
import React from "react";

const mapStateToProps = (state) => {
  return { articles: state.articles };
};

const ConnectedList = ({ articles }) => {
  return (
    <>
      <ul>
        {articles.map((el) => (
          <li key={Math.random()}>{el}</li>
        ))}
      </ul>
    </>
  );
};
const List = connect(mapStateToProps)(ConnectedList);
export default List;
