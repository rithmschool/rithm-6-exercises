import React, { Component } from 'react';
import './App.css';
import ListColors from './ListColors';
import NewColorForm from './NewColorForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [{ name: 'green', color: 'green' }]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {}

  render() {
    return (
      <div>
        <h1>Welcome to ColorZone</h1>
        <h2>So. Many. Colors.</h2>
        <ListColors Colors={this.state.Colors} />;
      </div>
    );
  }
}

export default App;
