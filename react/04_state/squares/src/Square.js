import React, { Component } from "react";

export default class Square extends Component {
  render() {
    let size = {
      width: "200px",
      height: "200px",
      display: "inline-block",
      backgroundColor: this.props.backgroundColor
    };
    return (
      <div listid={this.props.listid} style={size} onClick={this.props.click} />
    );
  }
}
