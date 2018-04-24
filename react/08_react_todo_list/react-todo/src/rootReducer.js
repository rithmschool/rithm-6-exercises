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
      id: uuidv1()
    },
    {
      title: 'attack',
      description: 'attack all without mercy.',
      id: uuidv1()
    },
    {
      title: 'burn stuff',
      description: 'Breath fire on the countryside.',
      id: uuidv1()
    },
    {
      title: 'chill with mom',
      description: 'hang out with my mom.',
      id: uuidv1()
    }
  ],
  redirect: false
  //we can deal with the id later
  // id: 0
};

export default function rootReducer(state = DEFAULT_STATE, action = {}) {
  console.log('in rootReducer');
  // debugger;
  let newState = { ...state };
  switch (action.type) {
  case 'ADD_TODO':
    debugger;
    console.log('in rootReducer ADD_TODO');
    return {
      ...newState,
      todos: [...newState.todos, { ...action.newTodo, id: uuidv1() }]
    };
  case 'UPDATE_TODO':
    console.log('in rootReducer UPDATE_TODO');
    debugger;
    let targetTodo = newState.todos.filter(
      todo => todo.id !== action.editedTodo.id
    );
    debugger;
    // newState.targetTodo = action.
    return { ...this.newState, todos: [...newState.todos] };
    // case 'REMOVE_TODO':
    //   console.log('in rootReducer RemoveTodo');
    //   debugger;
    //   let newTodos = newState.todos.filter(
    //     todo => todo.id !== action.payload.id
    //   );
    //   return { ...state, todos: newTodos };
    // return { ...state, todos: newTodos, redirect: action.payload.redirect };
  }
  // default:
  return newState;
}
