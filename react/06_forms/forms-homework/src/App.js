import React, { Component } from 'react';
import './App.css';
import DivComponent from './DivComponent.js';
import NewDivForm from './NewDivForm.js';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      divs: [{ height: '200px', width: '200px', backgroundColor: 'blue' }]
    };
    this.handleAdd = this.handleAdd.bind(this);
  }
  handleAdd(newDiv) {
    this.setState(prevState => ({
      divs: [newDiv, ...prevState.divs]
    }));
    console.log(this.state.divs);
  }

  render() {
    let allDivs = this.state.divs.map((div, index) => {
      return (
        <DivComponent
          divStyle={{
            height: div.height,
            width: div.width,
            backgroundColor: div.backgroundColor
          }}
          key={index}
        />
      );
    });
    return (
      <div>
        <NewDivForm handleAdd={this.handleAdd} />
        <div>{allDivs}</div>
      </div>
    );
  }
}

export default App;
