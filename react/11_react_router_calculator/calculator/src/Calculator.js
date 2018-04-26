import React, { Component } from "react";

const Calculator = props => {
  let { operation, num1, num2 } = props.match.params;
  let result;
  if (operation === "add") result = +num1 + +num2;
  if (operation === "subtract") result = +num1 - +num2;
  if (operation === "multiply") result = +num1 * +num2;
  if (operation === "divide") result = +num1 / +num2;
  return (
    <div>
      <h3>
        The result of {operation} operation is: {result}
      </h3>
    </div>
  );
};

export default Calculator;
