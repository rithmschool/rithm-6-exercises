import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Div from './Div';

class App extends Component {
  constructor(props) {
    super(props),
    this.state = {
      divs: [
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
    this.addSquare = this.addSquare.bind(this);
  }

  addSquare(newDiv) {
    this.setState(prevState => {
      return { divs: [newDiv, ...prevState.divs] }
    });
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
            {this.state.divs.map((el, i) => <Div key={i} height={el.h} width={el.w} backgroundColor={el.bgc} />)}
          </div>
        </div>
        <button onClick={this.addSquare.bind(this, {w: '100px', h: '100px', bgc: 'lime'})}> Add square
        </button>
      </div>
    );
  }
}

export default App;
