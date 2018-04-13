import React, { Component } from "react";
import "./Box.css";

class Box extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let style = { backgroundColor: this.props.color };
    return (
      <div
        className="box"
        style={style}
        onClick={this.props.onClick}
        index={this.props.index}
      />
    );
  }
}

export default Box;
