import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const SingleColor = ({ color }) => (
  <div style={{ backgroundColor: color }}>
    <p>{color}</p>
    <Link to="/colors">Home Page</Link>
  </div>
);

export default SingleColor;
