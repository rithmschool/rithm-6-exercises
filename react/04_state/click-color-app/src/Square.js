import React, { Component } from "react";

class Square extends Component {
  render() {
    return (
      <div
        key={this.props.key}
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: this.props.color,
          display: "inline-block"
        }}
        onMouseOver={this.props.handleClick}
      />
    );
  }
}

export default Square;
