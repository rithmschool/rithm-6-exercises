import React, { Component } from 'react';
import logo from './logo.svg';
import DivForm from './DivForm';
import Div from '.NewDiv';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      divs: [],
      divCount: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState(prevState => ({
      divs: [e, ...prevState.divs],
      pre
    }));
  }

  render(){
    let divs = this.state.divs.map
  }
}

export default App;
