import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'; 
import './App.css';
import Home from './Home'
import Sardines from './Sardines'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/sardines" component={Sardines} />
      </div>
    );
  }
}

export default App;
