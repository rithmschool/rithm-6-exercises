import React from 'react';

const Todo = ({ title, description, isCompleted, markAsComplete }) => (
  <div>
    <p>Title: {title}</p>
    <p>Description: {description}</p>
    <p>Is Completed: {isCompleted}</p>
    <button onClick={markAsComplete}>Completed</button>
    {/* <button
      onClick={e => {
        console.log('arrow function');
        console.log(e.target);
        console.log(e.value);
      }}
    >
      Completed
    </button> */}
  </div>
);

export default Todo;
