import React, { Component } from 'react';
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import NamedComponent from './NamedComponent';
import Name from './NamedComponent';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React. Testing lol.</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

<NamedComponent />;

export default App;
