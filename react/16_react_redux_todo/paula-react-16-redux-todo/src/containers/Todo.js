// libraries
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// src
import { DELETE_TODO, TOGGLE_COMPLETE } from "../actions";

const propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

class Todo extends Component {
  deleteTodo(id) {
    return this.props.dispatch({ type: DELETE_TODO, id });
  }

  toggleComplete(id) {
    return this.props.dispatch({ type: TOGGLE_COMPLETE, id });
  }
  render() {
    const { title, description, isComplete, id } = this.props;

    const strikeStyle = isComplete ? "line-through" : "none";

    return (
      <div>
        <h4 style={{ textDecoration: strikeStyle }}>
          <Link to={`todos/${id}`}>
            {title}: {description}
          </Link>
        </h4>
        <button
          onClick={() => {
            this.toggleComplete(id);
          }}
        >
          Mark as {isComplete ? "incomplete." : "complete!"}
        </button>
        <button
          onClick={() => {
            this.deleteTodo(id);
          }}
        >
          Delete Me!
        </button>
        <button>
          <Link to={`/todos/${id}/edit`}>Edit</Link>
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

Todo.propTypes = propTypes;

export default connect(mapStateToProps)(Todo);
