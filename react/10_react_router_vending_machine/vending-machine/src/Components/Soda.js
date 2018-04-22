import React, { Component } from "react";
import soda from "./soda.png";
import "./VendingMachine.css";

class Soda extends Component {
  render() {
    return (
      <div>
        <h2>That was the best ice-cream soda I ever tasted</h2>
        <h5>Cans Drunk:</h5>
        <div
          className="VendingMachine"
          style={{ backgroundImage: `url(${soda})` }}
        />
      </div>
    );
  }
}

export default Soda;
