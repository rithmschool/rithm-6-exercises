import React, { Component } from 'react';
import './App.css';
import BigContainer from './components/BigContainer';
console.log('App.js - finished importing');

class App extends Component {
  render() {
    console.log('App.js - render()');
    return (
      <div className="App">
        <BigContainer />
      </div>
    );
  }
}

export default App;
