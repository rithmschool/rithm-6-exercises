import React, { Component } from 'react';

class ShowColor extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: this.props.color
        }}
      >
        <h1>This is {this.props.name}</h1>
        <h2>{this.props.name} is life</h2>
      </div>
    );
  }
}

export default ShowColor;
