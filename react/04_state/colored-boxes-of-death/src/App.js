import React, { Component } from 'react';
import './App.css';
import BoxContainer from './BoxContainer.js';

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <BoxContainer />
      </div>
    );
  }
}

export default App;
