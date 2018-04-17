import React, { Component } from "react";

class CustomLink extends Component {
  render() {
    return (
      <a
        href={this.props.href}
        onClick={this.props.handleClick}
        target={this.props.target}
      >
        {this.props.text}
      </a>
    );
  }
}

export default CustomLink;
