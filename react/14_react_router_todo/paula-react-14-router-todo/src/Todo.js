// libraries
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// src
import "./Todo.css";

const propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  idx: PropTypes.number.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

const Todo = props => {
  const {
    title,
    description,
    isComplete,
    toggleComplete,
    deleteTodo,
    idx
  } = props;

  const strikeStyle = isComplete ? "line-through" : "none";

  return (
    <div>
      <h4 style={{ textDecoration: strikeStyle }}>
        <Link to={`todos/${idx}`}>
          {title}: {description}
        </Link>
      </h4>
      <button
        onClick={() => {
          toggleComplete(idx);
        }}
      >
        Mark as {isComplete ? "incomplete." : "complete!"}
      </button>
      <button
        onClick={() => {
          deleteTodo(idx);
        }}
      >
        Delete Me!
      </button>
      <button>
        <Link to={`/todos/${idx}/edit`}>Edit</Link>
      </button>
    </div>
  );
};

Todo.propTypes = propTypes;

export default Todo;
