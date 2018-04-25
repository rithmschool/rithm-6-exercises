import { ADD_TODO, REMOVE_TODO } from '../actions/actionCreator.js';
const uuidv4 = require('uuid/v4');

const initialState = {
  todos: [
    {
      title: 'walk the dog',
      deadline: '3pm',
      id: uuidv4(),
      being_edited: false,
      completed: 'false'
    },
    {
      title: 'take out the trash',
      deadline: '3pm',
      id: uuidv4(),
      being_edited: false,
      completed: 'false'
    },
    {
      title: 'do homework',
      deadline: '3pm',
      id: uuidv4(),
      being_edited: false,
      completed: 'false'
    }
  ]
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      const newState = { ...state };
      return {
        todos: [...newState.todos, action.payload]
      };
    case REMOVE_TODO:
      const todos = state.todos.filter(todo => todo.id !== action.id);
      return { todos };
    default:
      return state;
  }
}
