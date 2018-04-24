// libraries
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// src
import Todo from "./Todo";

const propTypes = {
  todos: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

const TodoList = ({ todos }) => {
  return (
    <section>
      <h1>Todo List!</h1>
      {todos.map(todo => (
        <Todo
          title={todo.title}
          description={todo.description}
          isComplete={todo.isComplete}
          id={todo.id}
          key={todo.id}
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
