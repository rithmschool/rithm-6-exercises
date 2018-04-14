import React, { Component } from 'react';
import './App.css';
import CustomLink from './CustomLink';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isEnabled: true };
    this.handleClick = this.handleClick.bind(this);
    this.buttonHandler = this.buttonHandler.bind(this);
  }

  handleClick(e) {
    console.log('clicked');
    if (!this.state.isEnabled) {
      e.preventDefault();
    }
  }

  // buttonHandler(e) {
  //   console.log('button clicked');
  //   this.setState(() => (this.state.isEnabled = !this.state.isEnabled));
  // }

  buttonHandler(e) {
    console.log('button clicked');
    this.setState(prevState => ({
      isEnabled: !prevState.isEnabled
    }));
  }

  render() {
    let links = this.props.links.map(({ href, text, handleClick }, i) => {
      return (
        <CustomLink
          key={i}
          href={href}
          text={text}
          handleClick={this.handleClick}
        />
      );
    });
    return (
      <div>
        {links}
        <button onClick={this.buttonHandler}>Disable/Enable Buttons</button>
      </div>
    );
  }
}

App.defaultProps = {
  links: [
    {
      href:
        'https://www.rithmschool.com/courses/react-fundamentals/forms-and-refs',
      text: 'Forms and refs'
    },
    {
      href: 'https://www.rithmschool.com/courses/react-fundamentals/props',
      text: 'Props'
    },
    {
      href: 'https://www.rithmschool.com/courses/react-fundamentals/state',
      text: 'State'
    }
  ]
};

export default App;
