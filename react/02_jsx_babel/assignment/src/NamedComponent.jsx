import React, { Component } from "react";

class Named extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <p>My name is {this.props.name}</p>;
  }
}

export default Named;
