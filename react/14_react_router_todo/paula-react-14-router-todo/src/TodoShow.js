import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  idx: PropTypes.number.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

const TodoShow = ({
  title,
  description,
  isComplete,
  idx,
  toggleComplete,
  deleteTodo,
  history
}) => {
  return (
    <section>
      <Todo
        title={title}
        description={description}
        isComplete={isComplete}
        idx={idx}
        toggleComplete={toggleComplete}
        deleteTodo={idx => {
          deleteTodo(idx);
          history.push("/todos");
        }}
      />
    </section>
  );
};

TodoShow.propTypes = propTypes;

export default TodoShow;
