import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const add = props => {
  let { a, b } = props.match.params;
  let sum = parseInt(a) + parseInt(b);
  return (
    <div>
      The Sum of {a} and {b} is {sum}
    </div>
  );
};

export default add;
