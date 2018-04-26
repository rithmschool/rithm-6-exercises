import React, { Component } from 'react';

const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b
};

class Operations extends Component {
  render() {
    console.log('rendering');
    let { operation, arg1: num1, arg2: num2 } = this.props.match.params;
    num1 = +num1;
    num2 = +num2;
    const value = operations[operation](num1, num2);
    return <div>{value}</div>;
  }
}

export default Operations;
