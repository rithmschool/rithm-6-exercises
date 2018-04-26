import React, { Component } from 'react';

export default class CustomLink extends Component {
  render() {
    return (
      <div>
        <br />
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

CustomLink.defaultProps = {
  handleClick: e => {
    console.log('You clicked on the link!');
  }
};
