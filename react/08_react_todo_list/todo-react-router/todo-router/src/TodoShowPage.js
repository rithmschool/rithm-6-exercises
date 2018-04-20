import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

export default class TodoShow extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h3>{this.props.title}</h3>;
  }
}
