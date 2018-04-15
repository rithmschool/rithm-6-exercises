import React, { Component } from 'react';
import logo from './logo.svg';
import CustomLink from "./CustomLink.js"
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 1,
    }
    this.handleClick = this.handleClick.bind(this);
    this.reverseLinks = this.reverseLinks.bind(this);
  }
  handleClick (url) {
    if (this.state.active === 1) {
      window.open(url, "_blank")
    }
  }
  reverseLinks() {
    if (this.state.active === 1) {
      this.setState({active : 0})
    }
    else {
      this.setState({active : 1})
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <CustomLink href="https://www.google.com" handleClick={this.handleClick} text="Google" />
        <button onClick={this.reverseLinks}>Toggle links</button>
      </div>
    );
  }
}

export default App;
