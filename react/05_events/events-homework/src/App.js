import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CustomLink from './CustomLink.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: true
    };
  }

  handleClick() {
    if (this.state.clicked === true) {
      this.setState((prevState, props) => {
        return { clicked: false };
      });
    } else {
      this.setState((prevState, props) => {
        return { clicked: true };
      });
    }
  }
  render() {
    let allLinks = this.props.links.map((link, index) => {
      if (this.state.clicked === true) {
        return (
          <CustomLink
            key={index}
            text={link.text}
            onClick={this.props.handleClick}
            href={link.href}
          />
        );
      } else {
        return <CustomLink text="Links are Disabled" />;
      }
    });
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {allLinks}
        <input
          onClick={this.handleClick.bind(this)}
          type="submit"
          value="Disable all Links"
        />
      </div>
    );
  }
}

App.defaultProps = {
  links: [
    {
      company: 'Google',
      href: 'https://www.google.com/',
      text: 'Go to Google.com'
    },
    {
      company: 'Yahoo',
      href: 'https://www.yahoo.com/',
      text: 'Go to Yahoo.com'
    },
    {
      company: 'Apple',
      href: 'https://www.apple.com/',
      text: 'Go to Apple.com'
    }
  ]
};

export default App;
