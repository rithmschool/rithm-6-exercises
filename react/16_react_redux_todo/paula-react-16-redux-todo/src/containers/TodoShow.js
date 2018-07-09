import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const propTypes = {
  todo: PropTypes.object.isRequired
};

const TodoShow = ({ todo }) => {
  return (
    <section>
      <Todo
        title={todo.title}
        description={todo.description}
        isComplete={todo.isComplete}
        id={todo.id}
        key={todo.id}
      />
    </section>
  );
};

TodoShow.propTypes = propTypes;

export default TodoShow;
