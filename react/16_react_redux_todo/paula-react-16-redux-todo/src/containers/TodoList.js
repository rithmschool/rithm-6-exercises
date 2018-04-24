import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { DELETE_TODO, TOGGLE_COMPLETE } from "../actions";
import Todo from "../Todo";

const propTypes = {
  todos: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

const TodoList = ({ todos, dispatch }) => {
  const deleteTodo = id => {
    dispatch({
      type: DELETE_TODO,
      id
    });
  };

  const toggleComplete = id => {
    dispatch({
      type: TOGGLE_COMPLETE,
      id
    });
  };

  return (
    <section>
      <h1>Todo List!</h1>
      {todos.map(td => (
        <Todo
          title={td.title}
          description={td.description}
          isComplete={td.isComplete}
          deleteTodo={deleteTodo.bind(this, td.id)}
          toggleComplete={toggleComplete.bind(this, td.id)}
          idx={td.id}
          key={td.id}
        />
      ))}
    </section>
  );
};

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

TodoList.propTypes = propTypes;

export default connect(mapStateToProps)(TodoList);
