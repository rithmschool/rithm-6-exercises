import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import ColorPage from './IndividualColor.js';
import './ColorPage.css';
export default class ColorList extends Component {
  render() {
    let allColors = this.props.allColors.map((color, index) => {
      return (
        <div>
          <div>
            <Link to={`${color.color}`}>{color.color}</Link>
          </div>
        </div>
      );
    });
    return <div>{allColors}</div>;
  }
}
