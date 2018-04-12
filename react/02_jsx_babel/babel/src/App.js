import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComp from './FirstComponent';
import SecondComp from './SecondComponent';
import NamedComp from './NamedComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <FirstComp />
          <SecondComp />
          <NamedComp name="Karl" />
        </p>
      </div>
    );
  }
}

export default App;
