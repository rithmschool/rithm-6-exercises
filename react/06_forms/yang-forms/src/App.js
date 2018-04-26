import React, { Component } from 'react';
import logo from './logo.svg';
import FormComponent from "./FormComponent.js";
import Div from "./NewDiv.js";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      divs: [],
    }
    this.handleAdd = this.handleAdd.bind(this);
  }
  
  handleAdd(newDiv) {
    this.setState(prevState => ({
      divs: [newDiv, ...prevState.divs]
    }));
  }

  render() {
    let divs = this.state.divs.map((div, index) => {
      return (
        <Div 
        key={index} 
        height={div.height + "px"}
        width={div.width + "px"}
        backgroundColor={div.bgc}
        />) 
      });
    return (
        <div>
        <FormComponent handleAdd={this.handleAdd} />
        <div>{divs}</div>
        </div>
    );
  }
}

export default App;
