import React, { Component } from 'react';
import './App.css';

export default class Card extends Component {
  render() {
    return (
      <div
        className="card"
        style={{
          backgroundColor: this.props.color
        }}
        onClick={this.props.handleClick}
      />
    );
  }
}
