import React, { Component } from 'react';

class CustomLink extends Component {
  render() {
    const { href, text, handleClick } = this.props;
    return (
      <a href={href} onClick={handleClick} target="_blank">
        {text}
      </a>
    );
  }
}

export default CustomLink;
