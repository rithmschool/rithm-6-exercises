import React, { Component } from "react";

class NameComponent extends Component {
  render() {
    return <p>My name is {this.props.name}</p>;
  }
}

export default NameComponent;
