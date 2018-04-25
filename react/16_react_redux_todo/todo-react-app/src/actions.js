export const NEW_TODO = "NEW_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const IS_COMPLETE = "IS_COMPLETE";

export function addTodo(todo) {
  return {
    type: NEW_TODO,
    todo
  };
}

export function deleteTodo(todoId) {
  console.log(todoId);
  return {
    type: DELETE_TODO,
    todoId
  };
}

export function updateTodo(todo) {
  return {
    type: UPDATE_TODO,
    todo
  };
}

export function toggleComplete(todoId) {
  return {
    type: IS_COMPLETE,
    todoId
  };
}
