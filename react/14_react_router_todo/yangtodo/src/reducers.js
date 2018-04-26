import { ADD_TODO, EDIT_TODO, DELETE_TODO } from "./actions";

const INITIAL_STATE = {
  todos: []
};

function rootReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case ADD_TODO:
      var newState = {
        todos: [...state.todos, action.todo]
      };
      return newState;

    case EDIT_TODO:
      var newTodos1 = state.todos.map((todo, i) => {
        if (i === +action.idx) {
          return { task: action.task };
        }
        return todo;
      });
      return { ...state, todos: newTodos1 };

    case DELETE_TODO:
      var newTodos2 = state.todos.filter((v, i) => i !== +action.idx);

      return { ...state, todos: newTodos2 };

    default:
      return state;
  }
}

export default rootReducer;
