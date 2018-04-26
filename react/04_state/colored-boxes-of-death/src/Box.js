import React, { Component } from 'react';

class Box extends Component {
  render() {
    return (
      <div
        onClick={this.props.handleClick}
        style={{
          backgroundColor: this.props.color,
          width: '120px',
          height: '120px',
          padding: '0px',
          display: 'inline-block'
        }}
      >
        I am a {this.props.color} Box
      </div>
    );
  }
}

export default Box;
