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
      description: 'wake up and chill with all my treasure.'
    },
    {
      title: 'attack',
      description: 'attack all without mercy.'
    },
    {
      title: 'burn stuff',
      description: 'Breath fire on the countryside.'
    },
    {
      title: 'chill with mom',
      description: 'hang out with my mom.'
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
