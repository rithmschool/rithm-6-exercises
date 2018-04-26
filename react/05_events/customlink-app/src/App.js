import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CustomLink from './CustomLink';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: 1,
    };
    this.linkHandler = this.linkHandler.bind(this);
    this.changeState = this.changeState.bind(this);
  }
  
  linkHandler(e) {
    if(this.state.isActive === 1) {
      console.log('you clicked on a link!');
    } else {
      e.preventDefault();
    }
  }

  changeState() {
    this.setState(prevState => {
      let newState = {...prevState};
      if(prevState.isActive === 0) {
        newState.isActive = 1;
      } else {
        newState.isActive = 0;
      }
      return newState;
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title m-2">Welcome to customLink</h1>
        </header>
        <CustomLink href="https://github.com/" text="GitHub" handleClick={this.linkHandler} />
        <CustomLink href="https://www.google.com/" text="Google" handleClick={this.linkHandler} />
        <CustomLink className="disabled" href="https://getbootstrap.com/" text="BootStrap" handleClick={this.linkHandler} />
        <button onClick={this.changeState} className="btn btn-lg btn-secondary m-3">
            {this.props.buttonText[this.state.isActive]}
        </button>
      </div>
    );
  }
}

App.defaultProps = {
  buttonText: [
    'Enable Links',
    'Disable Links'
  ]
}

export default App;
