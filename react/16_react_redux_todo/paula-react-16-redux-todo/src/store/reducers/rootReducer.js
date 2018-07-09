import uuidv1 from "uuid/v1";
import {
  DELETE_TODO,
  TOGGLE_COMPLETE,
  ADD_TODO,
  EDIT_TODO
} from "../../actions";

const DEFAULT_STATE = {
  todos: [
    {
      title: "laundry",
      description: "do laundry",
      isComplete: false,
      id: uuidv1()
    },
    {
      title: "grocery",
      description: "go grocery shopping",
      isComplete: false,
      id: uuidv1()
    }
  ]
};

export default function(state = DEFAULT_STATE, action) {
  let newTodos = [];
  switch (action.type) {
    case DELETE_TODO:
      newTodos = state.todos.filter(todo => todo.id !== action.id);
      return { ...state, todos: newTodos };
    case TOGGLE_COMPLETE:
      newTodos = state.todos.map(todo => {
        if (todo.id === action.id) {
          todo.isComplete = !todo.isComplete;
        }
        return todo;
      });
      return { ...state, todos: newTodos };
    case ADD_TODO:
      action.todo.isComplete = false;
      action.todo.id = uuidv1();
      newTodos = [action.todo, ...state.todos];
      return { ...state, todos: newTodos };
    case EDIT_TODO:
      newTodos = state.todos.map(todo => {
        if (todo.id === action.todo.id) {
          todo = action.todo;
        }
        return todo;
      });
      return { ...state, todos: newTodos };
    default:
      return { ...state };
  }
}
