import React, { Component } from "react";

class NamedComponent extends Component {
  render() {
    return (
      <div className="NamedComponent">
      <p>My name is {this.props.name}</p>
      </div>
    );
  }
}

export { NamedComponent };
