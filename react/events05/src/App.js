import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './CustomLink.css';
import CustomLink from './CustomLink';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { active: true };
    this.handleClick = this.handleClick.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
  }

  handleClick(e) {
    if (this.state.active === false) {
      alert('Link disabled!');
      e.preventDefault();
    }
  }

  buttonClick(e) {
    this.setState(prevState => {
      if (prevState.active === true) {
        return { active: false };
      } else {
        return { active: true };
      }
    });
  }

  render() {
    let linkList = this.props.links.map((props, idx) => {
      return (
        <CustomLink
          key={idx}
          href={props.href}
          text={props.text}
          handleClick={this.handleClick}
        />
      );
    });
    return (
      <div className="linkList">
        {linkList}
        <button onClick={this.buttonClick}>Toggle Links</button>
      </div>
    );
  }
}

App.defaultProps = {
  links: [
    {
      href: 'https://www.facebook.com/',
      text: 'Facebook, the book of Faces'
    },
    {
      href: 'https://tinder.com/',
      text: 'Tinder, come swipe and find love!'
    },
    {
      href: 'https://www.codewars.com/',
      text: 'Participate in Codewars'
    }
  ]
};

export default App;
