import { ADD, UPDATE, DELETE } from './actions';

/*
Reducers must be purely functional
*/

/*
default is an empty array
not sure what the id signifies?
*/
const DEFAULT_STATE = {
  todos: [],
  id: 0
};

export default function games(state = DEFAULT_STATE, action = {}) {
  let newState = { ...state };
  switch (action.type) {
  case ADD:
    return { ...action.payload, newState };
  case UPDATE:
    //search for todo that needs to be updated
  default:
    return state;

  case DELETE:
    //search by id for todo that needs to be deleted
  }
}
