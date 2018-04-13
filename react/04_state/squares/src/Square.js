import React, { Component } from "react";

export default class Square extends Component {
  render() {
    let size = {
      width: "100px",
      height: "100px",
      display: "inline-block",
      backgroundColor: this.props.backgroundColor
    };
    return (
      <div listId={this.props.listId} style={size} onClick={this.props.click} />
    );
  }
}
