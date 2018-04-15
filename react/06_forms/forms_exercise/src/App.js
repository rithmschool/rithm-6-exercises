import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MasterContainer from "./MasterContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Forms Exercise</h1>
        </header>
        <MasterContainer />
      </div>
    );
  }
}

export default App;
