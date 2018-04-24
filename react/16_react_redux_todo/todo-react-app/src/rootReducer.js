import { NEW_TODO, UPDATE_TODO, DELETE_TODO, IS_COMPLETE } from "./actions.js";

console.log("made it");

const DEFAULT_STATE = {
  todos: [
    {
      title: "Finish React Ex!",
      description:
        "Finish my React exercises and become a superstar developer(hopefully)",
      id: 0,
      isCompleted: false,
      isEditing: false
    },
    {
      title: "Milk",
      description: "Buy some milk and a cow",
      id: 1,
      isCompleted: false,
      isEditing: false
    },
    {
      title: "Work it out!",
      description: "Go to the gym for sanity",
      id: 2,
      isCompleted: false,
      isEditing: false
    }
  ],
  id: 3
};

//Need to spread this out into separate folders
function rootReducer(state = DEFAULT_STATE, action = {}) {
  console.log("made it");
  switch (action.type) {
    case NEW_TODO:
      console.log("not here");
      action.todo.id = ++state.id;
      action.todo.isCompleted = false;
      action.todo.isEditing = false;
      return Object.assign({}, state, { todos: [...state.todos, action.todo] });

    case DELETE_TODO:
      console.log(action.todoId + "here");
      const removedTodos = state.todos.filter(
        todo => todo.id !== action.todoId
      );
      return Object.assign({}, state, { todos: removedTodos });

    case IS_COMPLETE:
      let foundTodos = state.todos.map(todo => {
        console.log("wemade it" + action.todoId);
        if (todo.id === action.todoId) {
          todo.isCompleted = !todo.isCompleted;
          console.log(todo);
        }
        return todo;
      });

      return Object.assign({}, state, { todos: foundTodos });

    case UPDATE_TODO:
      const newTodos = state.todos.map(todo => {
        if (todo.id === action.todo.id) {
          todo = action.todo;
        }
        return todo;
      });
      return Object.assign({}, state, { todos: newTodos });

    default:
      return state;
  }
}
export default rootReducer;
