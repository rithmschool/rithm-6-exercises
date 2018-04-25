import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "./actions";

const initState = {
  todos: ["test With Redux"],
  id: 0
};

function rootReducer(state = initState, action) {
  switch (action.type) {
    case ADD_TODO:
      var newState = { ...state };
      newState.id++;
      return {
        ...newState,
        todos: [...newState.todos, action.task]
      };
    case REMOVE_TODO:
      var todos = state.todos.filter((val, i) => i !== action.id);
      return { ...state, todos };
    case UPDATE_TODO:
      var todos = state.todos.map((val, i) => {
        debugger;
        if (i === action.id) return action.newTask;
        else return val;
      });
      return { ...state, todos };
    default:
      return state;
  }
}

export default rootReducer;
