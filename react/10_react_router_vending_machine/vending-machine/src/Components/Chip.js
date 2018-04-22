import React, { Component } from "react";
import chips from "./chips.jpeg";
import "./VendingMachine.css";

class Chip extends Component {
  render() {
    return (
      <div>
        <h2>Never eat potato chips without first opening the packet</h2>
        <h5>Bags Eaten:</h5>
        <div
          className="VendingMachine"
          style={{ backgroundImage: `url(${chips})` }}
        />
      </div>
    );
  }
}

export default Chip;
