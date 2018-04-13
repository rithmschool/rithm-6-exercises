import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Square from './Square.jsx'

class App extends Component {
  render() {
    let colors = ['white', 'black'];

    function count() {
        let counter = 0;
        return function inner() {
            if(count === Square.props.colors.length) {
                count = 0;
                return count;
            } else {
                return ++count;
            }
        }
    }
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h3>Part 1</h3>
        <div>
          <Square />
        </div>
        <hr/>
      </div>
    );
  }
}

export default App;
