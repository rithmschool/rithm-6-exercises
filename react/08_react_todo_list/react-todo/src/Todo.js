import React from 'react';

const Todo = ({
  title,
  description,
  isCompleted,
  markAsComplete,
  removeToDo
}) => (
  <div>
    <p>Title: {title}</p>
    <p>Description: {description}</p>
    <p>Is Completed: {isCompleted ? 'True' : 'False'}</p>
    <button onClick={markAsComplete}>Toggle Completion Status</button>
    <button onClick={removeToDo}>Delete</button>
  </div>
);

export default Todo;
