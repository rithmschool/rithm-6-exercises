import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const divide = props => {
  let { a, b } = props.match.params;
  let total = parseInt(a) / parseInt(b);
  return (
    <div>
      {a} divided by {b} is {total}
    </div>
  );
};

export default divide;
