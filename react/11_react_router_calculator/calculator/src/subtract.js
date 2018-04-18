import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const subtract = props => {
  let { a, b } = props.match.params;
  let total = parseInt(a) - parseInt(b);
  return (
    <div>
      {a} subtract {b} is {total}
    </div>
  );
};

export default subtract;
