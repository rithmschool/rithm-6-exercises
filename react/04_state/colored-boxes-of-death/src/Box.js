import React, { Component } from 'react';

class Box extends Component {
  render() {
    return (
      <div>
        <p style={{ 'background-color': this.props.color }}>I am Box</p>
      </div>
    );
  }
}

export default Box;
