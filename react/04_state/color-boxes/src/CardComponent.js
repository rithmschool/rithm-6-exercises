import React, { Component } from 'react';
import './App.css';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color
    };
    this.changeColorAgain = this.changeColorAgain.bind(this);
  }
  changeColorAgain() {
    this.setState({ color: this.props.otherColor() });
  }
  render() {
    return (
      <div
        onClick={this.changeColorAgain}
        className="card"
        style={{ backgroundColor: this.state.color }}
      />
    );
  }
}
