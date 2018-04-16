import React from 'react';

const Todo = ({
  title,
  description,
  isCompleted,
  markAsComplete,
  removeToDo,
  showEditForm,
  editToDo,
  isEditSelected
}) => (
  <div>
    <p>Title: {title}</p>
    <p>Description: {description}</p>

    <p>Is Completed: {isCompleted ? 'True' : 'False'}</p>
    <button onClick={markAsComplete}>Toggle Completion Status</button>
    <button onClick={removeToDo}>Delete</button>
    <button onClick={showEditForm}>Change</button>
    {isEditSelected ? (
      <form onSubmit={editToDo}>
        <input name="title" />
        <input name="description" />
        <input type="submit" />
      </form>
    ) : null}
  </div>
);

export default Todo;
