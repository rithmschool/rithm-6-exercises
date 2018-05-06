import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

class Machine extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <img
          src="https://img.clipart.guru/vending-machine-snackssnack-clip-art-208_236.jpg"
          alt=""
        />
        <div>
          <Link to="/kudos">Kudos</Link>
        </div>
        <div>
          <Link to="/streetfood">StreetFood</Link>
        </div>
        <div>
          <Link to="/surprise">Surprise</Link>
        </div>
      </div>
    );
  }
}

export default Machine;
