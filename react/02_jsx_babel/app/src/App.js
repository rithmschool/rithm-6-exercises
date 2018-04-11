import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FC from './FirstComponent';
import SC from './SecondComponent';
import NC from './NamedComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <FC/>
        <SC/>
        <NC name="Jim"/>
      </div>
    );
  }
}

export default App;
