import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

class Surprise extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <iframe
          width="800"
          height="600"
          src="https://www.youtube.com/embed/olTuSpJTL2g?autoplay=1&loop=1"
          frameborder="0"
        />
        <div>
          <Link to="/">Still Hungry</Link>
        </div>
      </div>
    );
  }
}

export default Surprise;
