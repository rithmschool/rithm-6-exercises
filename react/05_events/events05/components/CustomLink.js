import React, { Component } from 'react';

class CustomLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      href: '',
      text: '',
      handleClick: this.handleClick
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('You clicked on the link!');
  }

  render() {
    return (
      <a href={this.props.href} onClick={handleClick()}>
        {text}
      </a>
    );
  }
}

CustomLink.defaultProps = {
  href: '',
  text: '',
  handleClick: this.handleClick
};
