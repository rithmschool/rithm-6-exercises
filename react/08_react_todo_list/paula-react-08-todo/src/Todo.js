import React from "react";
import "./Todo.css";

const Todo = ({ title, description, markComplete, handleDelete }) => {
  return (
    <div>
      {title}: {description}
      <button onClick={markComplete}>Mark as Complete!</button>
      <button onClick={handleDelete}>Delete Me!</button>
    </div>
  );
};

export default Todo;
