import React from "react";
import "./Todo.css";
import Todo from "./Todo";

const TodoList = ({ todos, handleDelete, toggleComplete }) => {
  return (
    <section>
      <h1>Todo List!</h1>
      {todos.map((td, i) => (
        <Todo
          title={td.title}
          description={td.description}
          isComplete={td.isComplete}
          handleDelete={handleDelete.bind(this, i)}
          toggleComplete={toggleComplete.bind(this, i)}
          idx={i}
          key={i}
        />
      ))}
    </section>
  );
};

export default TodoList;
