import uuidv1 from "uuid/v1";

const DEFAULT_STATE = {
  todos: [
    {
      title: 'Buy ice cream',
      description: 'Grocery Store',
      isComplete: false,
      id: uuidv1()
    },
    {
      title: 'Order pizza',
      description: 'Dinner Plans',
      isComplete: false,
      id: uuidv1()
    },
    {
      title: 'Walk 20 miles',
      description: 'Fitness Routine',
      isComplete: false,
      id: uuidv1()
    }
  ]
};

export default function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case "REMOVE_TODO":
      let newTodos = state.todos.filter(todo => todo.id !== action.id);
      return { ...state, todos: newTodos };
    case "ADD_TODO":
      let newTodo = {
        title: action.payload.title,
        description: action.payload.description,
        isComplete: false,
        id: uuidv1()
      }
      let todosCopy = state.todos.map(todo => ({ ...todo }));
      let newState = {
        todos: [newTodo, ...todosCopy]
      }
      return newState;
    case "TOGGLE_COMPLETE":
      var updatedTodos = state.todos.map(todo => {
        var newTodo = { ...todo }
        if (newTodo.id == action.id) {
          newTodo.isComplete = !newTodo.isComplete;
        }
        return newTodo;
      });
      var updatedState = {
        todos: updatedTodos
      };
      return updatedState;
    default:
      return state;
  }
}
