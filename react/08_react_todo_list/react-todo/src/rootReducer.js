const uuidv1 = require('uuid/v1');
// import { ADD, UPDATE, DELETE } from './actions';

/*
Reducers must be purely functional
*/

/*
default is an empty array
not sure what the id signifies?
*/
const DEFAULT_STATE = {
  todos: [
    {
      title: 'wake up',
      description: 'wake up and chill with all my treasure.',
      isCompleted: false,
      id: uuidv1()
    },
    {
      title: 'attack',
      description: 'attack all without mercy.',
      isCompleted: false,
      id: uuidv1()
    },
    {
      title: 'burn stuff',
      description: 'Breath fire on the countryside.',
      isCompleted: false,
      id: uuidv1()
    },
    {
      title: 'chill with mom',
      description: 'hang out with my mom.',
      isCompleted: false,
      id: uuidv1()
    }
  ],
  redirect: false
  //we can deal with the id later
  // id: 0
};

export default function rootReducer(state = DEFAULT_STATE, action = {}) {
  console.log('in rootReducer');
  // //////debugger;;;
  let newState = { ...state };
  switch (action.type) {
  case 'ADD_TODO':
    //////debugger;;;
    console.log('in rootReducer ADD_TODO');
    return {
      ...newState,
      todos: [
        ...newState.todos,
        { ...action.newTodo, id: uuidv1(), isComplete: false }
      ]
    };
  case 'UPDATE_TODO':
    console.log('in rootReducer UPDATE_TODO');
    var updatedTodos = newState.todos.map(
      todo =>
        todo.id === action.id
          ? {
            ...todo,
            title: action.editedTodo.title,
            description: action.editedTodo.description
          }
          : todo
    );
    return { ...newState, todos: updatedTodos };
  case 'REMOVE_TODO':
    console.log('in rootReducer RemoveTodo');
    var newTodos = newState.todos.filter(
      todo => todo.id !== action.payload.id
    );
    return { ...state, todos: newTodos, redirect: action.payload.redirect };
  case 'TOGGLE_COMPLETION':
    console.log('in rootReducer TOGGLE_COMPLETE');
    var updatedTodos = newState.todos.map(
      todo =>
        todo.id === action.id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
    );
      // ////debugger;;;
    return { ...newState, todos: updatedTodos };
  default:
    return newState;
  }
}
