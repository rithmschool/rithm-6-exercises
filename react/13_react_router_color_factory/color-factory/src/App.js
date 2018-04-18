import React, { Component } from 'react';
import './App.css';
import ListColors from './ListColors';
import NewColorForm from './NewColorForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Colors: [{ name: 'green', color: 'green' }]
    };
    this.addColor = this.addColor.bind(this);
  }

  addColor(newColor) {
    this.setState(prevState => {
      return { Colors: [...prevState.Colors, newColor] };
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to ColorZone</h1>
        <h2>So. Many. Colors.</h2>
        <NewColorForm addColor={this.addColor} />
        <ListColors Colors={this.state.Colors} />
      </div>
    );
  }
}

export default App;
