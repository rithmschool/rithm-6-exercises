import React, { Component } from 'react';
import './App.css';
export default class DivComponent extends Component {
  render() {
    let propStyle = this.props.divStyle;
    return (
      <div
        className="eachDiv"
        style={{
          backgroundColor: propStyle.backgroundColor,
          height: `${propStyle.height}px`,
          width: `${propStyle.width}px`
        }}
      />
    );
  }
}
