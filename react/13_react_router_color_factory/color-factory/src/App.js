import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NewForm from './NewForm';
import ColorList from './ColorList';
import Color from './Color';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [
        { color: 'orange', code: '#FFC300' },
        { color: 'blue', code: '#0336F2' },
        { color: 'green', code: '#2ECC71' }
      ]
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(newColor) {
    this.setState(prevState => ({
      colors: [newColor, ...prevState.colors]
    }));
  }

  render() {}
}

export default App;
