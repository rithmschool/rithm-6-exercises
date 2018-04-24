export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export function addTodo(todo) {
    return {
        type: ADD_TODO,
        todo
    }
}
export function editTodo(task,idx) {
    return {
        type: EDIT_TODO,
        task,
        idx
    }
}
export function deleteTodo(idx) {
    return {
        type: DELETE_TODO,
        idx
    }
}