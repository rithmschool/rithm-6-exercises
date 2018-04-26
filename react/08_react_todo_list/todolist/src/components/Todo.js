import React from "react";
import "./Todo.css";

const Todo = ({
  title,
  desc,
  removeToDo,
  update,
  finished,
  status,
  updateToDo
}) => {
  let btnValue = finished === true ? "Not Complete" : "Complete";
  return (
    <div>
      <h1 className={finished ? "finished" : ""}>{title}</h1>
      <h2 className={finished ? "finished" : ""}>{desc}</h2>
      <button onClick={removeToDo}>X</button>
      <button onClick={update}>{btnValue}</button>
      <button onClick={updateToDo}>Edit Todo</button>
    </div>
  );
};

export default Todo;
