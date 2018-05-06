import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

class StreetFood extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <img
          src="https://media.giphy.com/media/V71lGQtIxUOli/giphy.gif"
          alt=""
        />
        <div>
          <Link to="/">Still Hungry</Link>
        </div>
      </div>
    );
  }
}

export default StreetFood;
