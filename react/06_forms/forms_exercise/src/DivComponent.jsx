import React, { Component } from "react";
import "./DivComponent.css"

export default class DivComponent extends Component {
  render() {
    return (
      <div
        className="box"
        style={{
          height: this.props.height,
          width: this.props.width,
          backgroundColor: this.props.backgroundColor
        }}
      >
      </div>
    );
  }
}
