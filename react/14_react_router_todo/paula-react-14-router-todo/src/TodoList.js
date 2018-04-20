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
          key={i}
          handleDelete={handleDelete.bind(this, i)}
          toggleComplete={toggleComplete.bind(this, i)}
        />
      ))}
    </section>
  );
};

export default TodoList;
