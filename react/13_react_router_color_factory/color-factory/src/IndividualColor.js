import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './ColorPage.css';
export default class Color extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className="color-page"
        style={{ backgroundColor: this.props.color }}
      />
    );
  }
}
