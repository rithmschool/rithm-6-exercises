import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const multiply = props => {
  let { a, b } = props.match.params;
  let product = parseInt(a) * parseInt(b);
  return (
    <div>
      {a} multiplied by {b} is {product}
    </div>
  );
};

export default multiply;
