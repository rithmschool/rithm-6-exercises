import React from "react";
import { Route, Link } from "react-router-dom";
import "./Calculator.css";

const Add = props => {
  let { num1, num2 } = props.match.params;
  return <h1>{+num1 + +num2}</h1>;
};

const Subtract = props => {
  let { num1, num2 } = props.match.params;
  return <h1>{+num1 - +num2}</h1>;
};

const Multiply = props => {
  let { num1, num2 } = props.match.params;
  return <h1>{+num1 * +num2}</h1>;
};

const Divide = props => {
  let { num1, num2 } = props.match.params;
  return <h1>{+num1 / +num2}</h1>;
};

const Calculator = props => (
  <div className="calculator__home">
    <h1>Calculator Of Your DreamZ </h1>
    <div>
      <img
        src="https://cdn.vectorstock.com/i/thumb-large/71/01/calculator-with-blank-keys-icon-image-vector-17067101.jpg"
        alt="calculator"
      />
    </div>
    <Route path="/add/:num1/:num2" component={Add} />
    <Route path="/subtract/:num1/:num2" component={Subtract} />
    <Route path="/multiply/:num1/:num2" component={Multiply} />
    <Route path="/divide/:num1/:num2" component={Divide} />
  </div>
);

export default Calculator;
