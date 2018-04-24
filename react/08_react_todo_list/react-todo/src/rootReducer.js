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
  let newState = { ...state };
  // switch (action.type) {
  // case ADD:
  //   return { ...action.payload, newState };
  // case UPDATE:
  //   //search for todo that needs to be updated
  // default:
  return newState;

  // case DELETE:
  //   //search by id for todo that needs to be deleted
  // }
}
