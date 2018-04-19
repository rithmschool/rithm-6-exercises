import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShowColor extends Component {
  render() {
    debugger;
    return (
      <div
        style={{
          backgroundColor: this.props.color.color
        }}
      >
        <Link to="/">Go Back To All Colors</Link>
        <h1>This is {this.props.color.name}</h1>
        <h2>{this.props.color.name} is life</h2>
      </div>
    );
  }
}

export default ShowColor;
