import React from "react";

const newTodoItem = ({ newTodo }) => (
  <li className="newTodoItem">
    {newTodo}. Due Date: {newTodo}
    <span>
      <button>Done with this todo?</button>
    </span>{" "}
  </li>
);

export default newTodoItem;
