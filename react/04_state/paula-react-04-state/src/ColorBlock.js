import React, { Component } from "react";
import randomColors from "./randomColors.js";

export default class ColorBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: this.props.backgroundColor
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    let newColor =
      randomColors[Math.floor(Math.random() * randomColors.length)];
    while (newColor === this.state.backgroundColor) {
      newColor = randomColors[Math.floor(Math.random() * randomColors.length)];
    }
    this.setState((prevState, props) => ({ backgroundColor: newColor }));
  }

  render() {
    const backgroundColor = this.state.backgroundColor;
    return (
      <div
        onClick={this.changeColor}
        className="ColorBlock"
        style={{
          backgroundColor: backgroundColor,
          width: "200px",
          height: "200px",
          display: "inline-block",
          margin: "10px"
        }}
      />
    );
  }
}
