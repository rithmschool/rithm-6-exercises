import React, { Component } from 'react';
import { Route } from 'react-router-dom';

const Add = props => {
  const { num1, num2 } = props.match.params;
  return (
    <h4>
      The result of {num1} + {num2} is {+num1 + +num2};
    </h4>
  );
};

const Subtract = props => {
  const { num1, num2 } = props.match.params;
  return (
    <h4>
      The result of {num1} - {num2} is {+num1 - +num2}
    </h4>
  );
};

const Multiply = props => {
  const { num1, num2 } = props.match.params;
  return (
    <h4>
      The result of {num1} * {num2} is {+num1 * +num2}
    </h4>
  );
};

const Divide = props => {
  const { num1, num2 } = props.match.params;
  return (
    <h4>
      The result of {num1} / {num2} is {+num1 / +num2}
    </h4>
  );
};

class Calculator extends Component {
  render() {
    return (
      <div>
        <Route path="/add/:num1/:num2" component={Add} />
        <Route path="/subtract/:num1/:num2" component={Subtract} />
        <Route path="/multiply/:num1/:num2" component={Multiply} />
        <Route path="/divide/:num1/:num2" component={Divide} />
      </div>
    );
  }
}

export default Calculator;
