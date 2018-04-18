import React, { Component } from 'react';

class Operations extends Component {
  render() {
    let { operation, arg1: num1, arg2: num2 } = this.props;
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;

    const operations = {
      add: add,
      subtract: sub,
      multiply: mul,
      divide: div
    };

    const value = operations[operation](num1, num2);

    return <div>{value}</div>;
  }
}

export default Operations;
