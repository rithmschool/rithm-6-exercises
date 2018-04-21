import React, { Component } from "react";
import { Link } from "react-router-dom";
import ColorPage from "./ColorPage.css";

export default class ListAllColors extends Component {
  render() {
    let colors = this.props.allColors.map((paint, idx) => {
      return (
        <div>
          <Link to={`colors/${paint.color}`}>{paint.color}</Link>
        </div>
      );
    });
    return (
      <div>
        {colors}
        <Link to="/colors/new">Create New Color</Link>
      </div>
    );
  }
}
