import React, { Component } from "react";
import "./ToDo.css";

class ToDo extends Component {
  render() {
    return (
      <div>
        <li>
          <h1>{this.props.desc}</h1>
          <h2>{this.props.date}</h2>
        </li>
      </div>
    );
  }
}

export default ToDo;
