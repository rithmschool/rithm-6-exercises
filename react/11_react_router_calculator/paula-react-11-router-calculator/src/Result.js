import React from "react";

const Result = props => {
  const { num1, num2, operation } = props.match.params;
  const operationLookUp = {
    add: `Sum is ${num1 + num2}`,
    subtract: `Difference is ${num1 - num2}`,
    multiply: `Product is ${num1 * num2}`,
    divide: `Division is ${num1 / num2}`
  };
  return <p>{operationLookUp[operation]}</p>;
};
export default Result;
