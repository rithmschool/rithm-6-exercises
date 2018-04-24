// libraries
import { createStore } from "redux";

// src
import rootReducer from "./reducers/rootReducer";

function configureStore() {
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}

export default configureStore;
