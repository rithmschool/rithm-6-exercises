import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GifList from "./GifList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Giphy API Exercise</h1>
        </header>
        <GifList />
      </div>
    );
  }
}

export default App;
