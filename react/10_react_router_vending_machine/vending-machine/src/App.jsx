import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'; 
import './App.css';
import Home from './Home'
import Sardines from './Sardines'
import Soda from './Soda'
import Chips from './Chips'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/sardines" component={Sardines} />
        <Route path="/soda" component={Soda} />
        <Route path="/chips" component={Chips} />

      </div>
    );
  }
}

export default App;
