import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, Link } from 'react-router-dom';
import add from './add.js';
import multiply from './multiply.js';
import subtract from './subtract.js';
import divide from './divide.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Route exact path="/add/:a/:b" component={add} />
        <Route exact path="/subtract/:a/:b" component={subtract} />
        <Route exact path="/divide/:a/:b" component={divide} />
        <Route exact path="/multiply/:a/:b" component={multiply} />
      </div>
    );
  }
}

export default App;
