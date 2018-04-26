import React from "react";
import "./Itodo.css";

const Itodo = ({
  title,
  desc,
  handleRemove,
  updateStatus,
  finished,
  status,
  handleEdit,
  viewToDo
}) => {
  let btnValue = finished === true ? "Not Complete" : "Complete";
  return (
    <div>
      <h1 className={finished ? "finished" : ""}>{title}</h1>
      <h2 className={finished ? "finished" : ""}>{desc}</h2>
      <button className="btn" onClick={handleRemove}>
        X
      </button>
      <button className="btn" onClick={updateStatus}>
        {btnValue}
      </button>
      <button className="btn" onClick={handleEdit}>
        Edit Todo
      </button>
      {/* <button onClick={showToDo}>ShowToDo</button> */}
    </div>
  );
};

export default Itodo;
