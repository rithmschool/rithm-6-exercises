import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CustomLink from './CustomLink';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { active: true };
  }
}

CustomLink.defaultProps = {
  handleClick: e => {
    console.log('test');
  }
};

export default App;
