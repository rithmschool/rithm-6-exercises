import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Div from './Div';

class App extends Component {
  constructor(props) {
    super(props),
    this.state = {
      squares: [
        {
          w: '100px',
          h: '100px',
          bgc: 'black'
        },
        {
          w: '200px',
          h: '100px',
          bgc: 'yellow'
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title m-2">Welcome to Div App</h1>
        </header>
        <div className="container">
          <div className="row my-2 d-flex justify-content-center">
            {this.state.squares.map(el => <Div height={el.h} width={el.w} backgroundColor={el.bgc} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
