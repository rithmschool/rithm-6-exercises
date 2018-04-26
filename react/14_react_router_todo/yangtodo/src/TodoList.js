import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Todo from "./Todo.js";

const todoList = ({ todoData }) => (
  <div>
    {todoData.map((data, i) => {
      return (
        <div>
          <Todo key={i} idx={i} data={data.task} />
        </div>
      );
    })}
  </div>
);

function mapStateToProps(reduxState) {
  return {
    todoData: reduxState.todos
  };
}

export default connect(mapStateToProps)(withRouter(todoList));
