import React, { Component } from 'react';

class CustomLink extends Component {
  render() {
    return (
      <div className="link">
        <a
          href={this.props.href}
          target="_blank"
          onClick={this.props.handleClick}
        >
          {this.props.text}
        </a>
      </div>
    );
  }
}

export default CustomLink;
