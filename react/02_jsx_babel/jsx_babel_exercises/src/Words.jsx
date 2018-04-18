import React, { Component } from "react";

class FirstComponent extends Component {
  render() {
    return (
      <h1>My very first component.</h1>
    );
  }
}

class SecondComponent extends Component {
  render() {
    return (
      <h2>My second component.</h2>
    );
  }
}

class NamedComponent extends Component {
  render() {
    return (
      <p>My name is {this.props.name}</p>
    );
  }
}

export { FirstComponent, SecondComponent, NamedComponent };
