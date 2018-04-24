import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import { Provider } from "react-redux";
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from "redux";
import rootReducer from "./reducers.js";

function configureStore() {
    const store = createStore(
      rootReducer,
      window.devToolsExtension ? window.devToolsExtension() : f => f
    );
    return store;
  }
  
const store = configureStore();

ReactDOM.render(
<BrowserRouter>
<Provider store={store}>
    <App  />
</Provider>
</BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();

export default configureStore;

