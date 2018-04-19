import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ColorList extends Component {
  render() {
    let links = this.props.colorsData.map(oneColorData => (
      <div>
        <Link to={`/colors/${oneColorData.name}`}>{oneColorData.name}</Link>
      </div>
    ))
    console.log("links is...", links)
    return (
      <div>
        {links}
      </div>
    );
  }
}
