import React from "react";
import { Todo } from "./Todo";

export const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
  let allTodos = todos.map((todo, i) => (
    <Todo todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
  ));
  return (
    <div>
      <ul>{allTodos}</ul>
    </div>
  );
};

//export default TodoList;
