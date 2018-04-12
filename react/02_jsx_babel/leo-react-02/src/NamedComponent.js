import React, { Component } from 'react';

class Name extends Component {
  render() {
    return 'Leo';
  }
}

class NamedComponent extends Component {
  render() {
    return <p>`My name is ${Name}`</p>;
  }
}

export default NamedComponent;
