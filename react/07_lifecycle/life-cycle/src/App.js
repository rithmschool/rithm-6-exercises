import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import GiphComponent from './GiphComponent.js';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <GiphComponent />
        <GiphComponent />
        <GiphComponent />
        <GiphComponent />
      </div>
    );
  }
}

export default App;
