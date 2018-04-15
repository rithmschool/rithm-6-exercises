import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Div from './Div';
import DivForm from './DivForm';

class App extends Component {
  constructor(props) {
    super(props),
    this.state = {
      divs: [
        {
          w: 100,
          h: 100,
          bgc: 'black'
        },
        {
          w: 200,
          h: 100,
          bgc: 'yellow'
        }
      ]
    }
    this.addDiv = this.addDiv.bind(this);
  }

  addDiv(newDiv) {
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
          <div className="text-left">
            <DivForm addDiv={this.addDiv} />
          </div>
          <div className="row my-2 d-flex justify-content-center">
            {this.state.divs.map((el, i) => <Div key={i} height={el.h + "px"} width={el.w + "px"} backgroundColor={el.bgc} />)}
          </div>
        </div>
        {/* <button className="m-3" onClick={this.addDiv.bind(this, {w: '100px', h: '100px', bgc: 'lime'})}> Add square
        </button> */}
      </div>
    );
  }
}

export default App;
