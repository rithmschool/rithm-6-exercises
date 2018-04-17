import React, { Component } from 'react';
import './App.css';
import MemeForm from './MemeForm';
import MemeList from './MemeList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MemeForm />
        <MemeList />
      </div>
    );
  }
}

export default App;
